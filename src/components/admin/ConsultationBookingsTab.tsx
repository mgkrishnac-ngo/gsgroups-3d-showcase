import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const ConsultationBookingsTab = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchBookings(); }, []);

  const fetchBookings = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('consultation_bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setBookings(data);
    setLoading(false);
  };

  const statusColor = (s: string) => {
    if (s === 'confirmed') return 'default';
    if (s === 'cancelled') return 'destructive';
    return 'secondary';
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;

  if (bookings.length === 0) return <p className="text-muted-foreground">No consultation bookings yet.</p>;

  return (
    <Card className="glass-card">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Preferred Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map(b => (
              <TableRow key={b.id}>
                <TableCell className="whitespace-nowrap">{format(new Date(b.created_at), 'MMM dd, yyyy')}</TableCell>
                <TableCell className="font-medium">{b.name}</TableCell>
                <TableCell>{b.email}</TableCell>
                <TableCell>{b.service || '—'}</TableCell>
                <TableCell>{b.preferred_date || '—'}</TableCell>
                <TableCell>{b.preferred_time || '—'}</TableCell>
                <TableCell>
                  <Badge variant={statusColor(b.status)}>{b.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ConsultationBookingsTab;
