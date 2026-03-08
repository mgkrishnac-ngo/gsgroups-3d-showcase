import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Settings, CreditCard, BarChart3, LogOut, FileText } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: User, label: 'Profile', value: 'Complete your profile', color: 'text-primary' },
                { icon: CreditCard, label: 'Payments', value: 'No active subscription', color: 'text-secondary' },
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
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" /> Admin Panel
                </h2>
                <p className="text-muted-foreground mb-4">Manage users, view submissions, and configure settings.</p>
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
                    <p className="text-2xl font-bold text-accent mt-1">—</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
