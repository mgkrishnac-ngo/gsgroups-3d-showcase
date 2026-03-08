import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_interest: string | null;
  message: string;
  status: string;
  created_at: string;
}

const ContactSubmissionsTab = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchContacts(); }, []);

  const fetchContacts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setContacts(data);
    setLoading(false);
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;

  if (contacts.length === 0) return <p className="text-muted-foreground">No contact submissions yet.</p>;

  return (
    <Card className="glass-card">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="max-w-[200px]">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map(c => (
              <TableRow key={c.id}>
                <TableCell className="whitespace-nowrap">{format(new Date(c.created_at), 'MMM dd, yyyy')}</TableCell>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.company || '—'}</TableCell>
                <TableCell>{c.service_interest || '—'}</TableCell>
                <TableCell>
                  <Badge variant={c.status === 'new' ? 'default' : 'secondary'}>{c.status}</Badge>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">{c.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactSubmissionsTab;
