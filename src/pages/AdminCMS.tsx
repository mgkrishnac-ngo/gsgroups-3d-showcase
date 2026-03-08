import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, FileText, Briefcase, Layers, Save, Mail, CalendarCheck } from 'lucide-react';
import ContactSubmissionsTab from '@/components/admin/ContactSubmissionsTab';
import ConsultationBookingsTab from '@/components/admin/ConsultationBookingsTab';

interface BlogPost {
  id: string; slug: string; title: string; excerpt: string | null;
  content: string | null; category: string | null; author: string | null;
  featured: boolean | null; read_time: string | null; published: boolean | null;
  created_at: string;
}

interface CaseStudy {
  id: string; slug: string; title: string; client: string;
  industry: string | null; overview: string | null; published: boolean | null;
  created_at: string;
}

const AdminCMS = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [editingStudy, setEditingStudy] = useState<Partial<CaseStudy> | null>(null);

  useEffect(() => {
    if (userRole !== 'admin') { navigate('/dashboard'); return; }
    fetchData();
  }, [userRole, navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [postsRes, studiesRes] = await Promise.all([
      supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
      supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
    ]);
    if (postsRes.data) setPosts(postsRes.data);
    if (studiesRes.data) setStudies(studiesRes.data);
    setLoading(false);
  };

  const savePost = async () => {
    if (!editingPost?.title || !editingPost?.slug) { toast.error('Title and slug are required'); return; }
    const data = {
      slug: editingPost.slug,
      title: editingPost.title,
      excerpt: editingPost.excerpt || null,
      content: editingPost.content || null,
      category: editingPost.category || null,
      author: editingPost.author || null,
      featured: editingPost.featured || false,
      read_time: editingPost.read_time || null,
      published: editingPost.published || false,
    };
    
    if (editingPost.id) {
      const { error } = await supabase.from('blog_posts').update(data).eq('id', editingPost.id);
      if (error) { toast.error('Failed to update'); return; }
      toast.success('Post updated');
    } else {
      const { error } = await supabase.from('blog_posts').insert(data);
      if (error) { toast.error('Failed to create'); return; }
      toast.success('Post created');
    }
    setEditingPost(null);
    fetchData();
  };

  const deletePost = async (id: string) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Post deleted');
    fetchData();
  };

  const saveStudy = async () => {
    if (!editingStudy?.title || !editingStudy?.slug || !editingStudy?.client) {
      toast.error('Title, slug, and client are required'); return;
    }
    const data = {
      slug: editingStudy.slug,
      title: editingStudy.title,
      client: editingStudy.client,
      industry: editingStudy.industry || null,
      overview: editingStudy.overview || null,
      published: editingStudy.published || false,
    };
    
    if (editingStudy.id) {
      const { error } = await supabase.from('case_studies').update(data).eq('id', editingStudy.id);
      if (error) { toast.error('Failed to update'); return; }
      toast.success('Case study updated');
    } else {
      const { error } = await supabase.from('case_studies').insert(data);
      if (error) { toast.error('Failed to create'); return; }
      toast.success('Case study created');
    }
    setEditingStudy(null);
    fetchData();
  };

  const deleteStudy = async (id: string) => {
    const { error } = await supabase.from('case_studies').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Case study deleted');
    fetchData();
  };

  if (userRole !== 'admin') return null;

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold mb-2">CMS Dashboard</h1>
            <p className="text-muted-foreground mb-8">Manage blog posts, case studies, and services.</p>

            <Tabs defaultValue="posts">
              <TabsList className="mb-6">
                <TabsTrigger value="posts" className="gap-2"><FileText className="w-4 h-4" />Blog Posts</TabsTrigger>
                <TabsTrigger value="studies" className="gap-2"><Briefcase className="w-4 h-4" />Case Studies</TabsTrigger>
                <TabsTrigger value="contacts" className="gap-2"><Mail className="w-4 h-4" />Contacts</TabsTrigger>
                <TabsTrigger value="bookings" className="gap-2"><CalendarCheck className="w-4 h-4" />Bookings</TabsTrigger>
              </TabsList>

              <TabsContent value="posts">
                {editingPost ? (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>{editingPost.id ? 'Edit Post' : 'New Post'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Title</Label>
                          <Input value={editingPost.title || ''} onChange={e => setEditingPost({ ...editingPost, title: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Slug</Label>
                          <Input value={editingPost.slug || ''} onChange={e => setEditingPost({ ...editingPost, slug: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Category</Label>
                          <Input value={editingPost.category || ''} onChange={e => setEditingPost({ ...editingPost, category: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Author</Label>
                          <Input value={editingPost.author || ''} onChange={e => setEditingPost({ ...editingPost, author: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Read Time</Label>
                          <Input value={editingPost.read_time || ''} onChange={e => setEditingPost({ ...editingPost, read_time: e.target.value })} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Excerpt</Label>
                        <Textarea value={editingPost.excerpt || ''} onChange={e => setEditingPost({ ...editingPost, excerpt: e.target.value })} rows={2} />
                      </div>
                      <div className="space-y-2">
                        <Label>Content (Markdown)</Label>
                        <Textarea value={editingPost.content || ''} onChange={e => setEditingPost({ ...editingPost, content: e.target.value })} rows={10} className="font-mono text-sm" />
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Switch checked={editingPost.published || false} onCheckedChange={v => setEditingPost({ ...editingPost, published: v })} />
                          <Label>Published</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={editingPost.featured || false} onCheckedChange={v => setEditingPost({ ...editingPost, featured: v })} />
                          <Label>Featured</Label>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={savePost}><Save className="w-4 h-4 mr-2" />Save</Button>
                        <Button variant="outline" onClick={() => setEditingPost(null)}>Cancel</Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <Button onClick={() => setEditingPost({ published: false, featured: false })} className="mb-6">
                      <Plus className="w-4 h-4 mr-2" />New Post
                    </Button>
                    {loading ? <p className="text-muted-foreground">Loading...</p> : posts.length === 0 ? (
                      <p className="text-muted-foreground">No blog posts yet. Create your first one!</p>
                    ) : (
                      <div className="space-y-3">
                        {posts.map(post => (
                          <Card key={post.id} className="glass-card">
                            <CardContent className="p-4 flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold">{post.title}</h3>
                                  <Badge variant={post.published ? 'default' : 'secondary'}>{post.published ? 'Published' : 'Draft'}</Badge>
                                  {post.featured && <Badge variant="outline">Featured</Badge>}
                                </div>
                                <p className="text-sm text-muted-foreground">{post.category} · {post.author} · {post.read_time}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="icon" variant="outline" onClick={() => setEditingPost(post)}><Pencil className="w-4 h-4" /></Button>
                                <Button size="icon" variant="outline" onClick={() => deletePost(post.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </TabsContent>

              <TabsContent value="studies">
                {editingStudy ? (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>{editingStudy.id ? 'Edit Case Study' : 'New Case Study'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Title</Label>
                          <Input value={editingStudy.title || ''} onChange={e => setEditingStudy({ ...editingStudy, title: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Slug</Label>
                          <Input value={editingStudy.slug || ''} onChange={e => setEditingStudy({ ...editingStudy, slug: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Client</Label>
                          <Input value={editingStudy.client || ''} onChange={e => setEditingStudy({ ...editingStudy, client: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Industry</Label>
                          <Input value={editingStudy.industry || ''} onChange={e => setEditingStudy({ ...editingStudy, industry: e.target.value })} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Overview</Label>
                        <Textarea value={editingStudy.overview || ''} onChange={e => setEditingStudy({ ...editingStudy, overview: e.target.value })} rows={4} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch checked={editingStudy.published || false} onCheckedChange={v => setEditingStudy({ ...editingStudy, published: v })} />
                        <Label>Published</Label>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={saveStudy}><Save className="w-4 h-4 mr-2" />Save</Button>
                        <Button variant="outline" onClick={() => setEditingStudy(null)}>Cancel</Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <Button onClick={() => setEditingStudy({ published: false })} className="mb-6">
                      <Plus className="w-4 h-4 mr-2" />New Case Study
                    </Button>
                    {loading ? <p className="text-muted-foreground">Loading...</p> : studies.length === 0 ? (
                      <p className="text-muted-foreground">No case studies yet. Create your first one!</p>
                    ) : (
                      <div className="space-y-3">
                        {studies.map(study => (
                          <Card key={study.id} className="glass-card">
                            <CardContent className="p-4 flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold">{study.title}</h3>
                                  <Badge variant={study.published ? 'default' : 'secondary'}>{study.published ? 'Published' : 'Draft'}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{study.client} · {study.industry}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="icon" variant="outline" onClick={() => setEditingStudy(study)}><Pencil className="w-4 h-4" /></Button>
                                <Button size="icon" variant="outline" onClick={() => deleteStudy(study.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </TabsContent>

              <TabsContent value="contacts">
                <ContactSubmissionsTab />
              </TabsContent>

              <TabsContent value="bookings">
                <ConsultationBookingsTab />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminCMS;
