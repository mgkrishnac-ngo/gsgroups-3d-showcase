import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User, Settings, CreditCard, BarChart3, LogOut, FileText, Crown, Loader2, CheckCircle, XCircle, Clock, Mail, Users, DollarSign } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

interface Payment {
  id: string;
  plan: string | null;
  amount: number;
  currency: string;
  status: string;
  created_at: string;
  razorpay_payment_id: string | null;
}

interface AdminStats {
  contactCount: number;
  subscriberCount: number;
  paymentCount: number;
  totalRevenue: number;
}

const Dashboard = () => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPlan, setCurrentPlan] = useState<Payment | null>(null);
  const [adminStats, setAdminStats] = useState<AdminStats>({ contactCount: 0, subscriberCount: 0, paymentCount: 0, totalRevenue: 0 });
  const [statsLoading, setStatsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchPayments();
      if (userRole === 'admin') {
        fetchAdminStats();
      }
    }
  }, [user, userRole]);

  const fetchAdminStats = async () => {
    setStatsLoading(true);
    const [contactRes, subscriberRes, paymentRes] = await Promise.all([
      supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
      supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }),
      supabase.from('payments').select('amount, status'),
    ]);

    const paidPayments = paymentRes.data?.filter((p) => p.status === 'paid') || [];
    const totalRevenue = paidPayments.reduce((sum, p) => sum + p.amount, 0);

    setAdminStats({
      contactCount: contactRes.count || 0,
      subscriberCount: subscriberRes.count || 0,
      paymentCount: paymentRes.data?.length || 0,
      totalRevenue,
    });
    setStatsLoading(false);
  };

  const fetchPayments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', user?.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPayments(data);
      const activePlan = data.find((p) => p.status === 'paid');
      setCurrentPlan(activePlan || null);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Failed</Badge>;
      default:
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);
  };

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground mt-1">Welcome back, {user?.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="capitalize">{userRole}</Badge>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" /> Sign Out
                </Button>
              </div>
            </div>

            {/* Subscription Status Card */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  Subscription Status
                </CardTitle>
                <CardDescription>Your current plan and billing information</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : currentPlan ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">Current Plan</p>
                      <p className="text-2xl font-bold text-primary">{currentPlan.plan}</p>
                      <Badge className="mt-2 bg-green-500/20 text-green-500">Active</Badge>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <p className="text-sm text-muted-foreground mb-1">Last Payment</p>
                      <p className="text-2xl font-bold">{formatCurrency(currentPlan.amount, currentPlan.currency)}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {format(new Date(currentPlan.created_at), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <p className="text-sm text-muted-foreground mb-1">Payment ID</p>
                      <p className="text-sm font-mono truncate">{currentPlan.razorpay_payment_id || '—'}</p>
                      <Link to="/pricing">
                        <Button variant="outline" size="sm" className="mt-3">Upgrade Plan</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CreditCard className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Active Subscription</h3>
                    <p className="text-muted-foreground mb-4">Choose a plan to unlock all features</p>
                    <Link to="/pricing">
                      <Button className="bg-gradient-to-r from-primary to-accent">
                        View Plans
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment History
                </CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : payments.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Transaction ID</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>{format(new Date(payment.created_at), 'MMM dd, yyyy')}</TableCell>
                          <TableCell className="font-medium">{payment.plan || '—'}</TableCell>
                          <TableCell>{formatCurrency(payment.amount, payment.currency)}</TableCell>
                          <TableCell>{getStatusBadge(payment.status)}</TableCell>
                          <TableCell className="font-mono text-xs">{payment.razorpay_payment_id || '—'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No payment history yet</p>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: User, label: 'Profile', value: 'Complete your profile', color: 'text-primary' },
                { icon: CreditCard, label: 'Billing', value: currentPlan ? `${currentPlan.plan} Plan` : 'No subscription', color: 'text-secondary' },
                { icon: BarChart3, label: 'Analytics', value: 'View insights', color: 'text-accent' },
                { icon: Settings, label: 'Settings', value: 'Manage preferences', color: 'text-muted-foreground' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-6 card-hover cursor-pointer">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {userRole === 'admin' && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" /> Admin Panel
                  </CardTitle>
                  <CardDescription>Manage users, view submissions, and configure settings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/admin/cms">
                    <Button className="mb-4"><FileText className="w-4 h-4 mr-2" />Open CMS Dashboard</Button>
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Contact Submissions</p>
                      <p className="text-2xl font-bold text-primary mt-1">—</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
                      <p className="text-2xl font-bold text-secondary mt-1">—</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Total Payments</p>
                      <p className="text-2xl font-bold text-accent mt-1">{payments.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;