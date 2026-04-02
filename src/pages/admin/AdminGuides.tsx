import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";

const categories = ["Farm to Home", "Urban Gardening", "Barter & Exchange", "Youth Freelancing", "M&A Ecosystem", "General"];
const types = ["PDF", "Checklist", "Whitepaper", "Tutorial"];

const emptyGuide = { title: "", description: "", category: categories[0], type: types[0], file_url: "", is_published: false };

const AdminGuides = () => {
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyGuide);
  const [saving, setSaving] = useState(false);

  const fetchGuides = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("guides").select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setGuides(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchGuides(); }, []);

  const openCreate = () => { setEditingId(null); setForm(emptyGuide); setDialogOpen(true); };
  const openEdit = (g: any) => {
    setEditingId(g.id);
    setForm({ title: g.title, description: g.description || "", category: g.category, type: g.type, file_url: g.file_url || "", is_published: g.is_published || false });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.category) {
      toast({ title: "Missing fields", description: "Title and category are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = { ...form, file_url: form.file_url || null };
    if (editingId) {
      const { error } = await supabase.from("guides").update(payload).eq("id", editingId);
      if (error) toast({ title: "Update failed", description: error.message, variant: "destructive" });
      else toast({ title: "Guide updated" });
    } else {
      const { error } = await supabase.from("guides").insert(payload);
      if (error) toast({ title: "Create failed", description: error.message, variant: "destructive" });
      else toast({ title: "Guide created" });
    }
    setSaving(false);
    setDialogOpen(false);
    fetchGuides();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this guide?")) return;
    const { error } = await supabase.from("guides").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else { toast({ title: "Guide deleted" }); fetchGuides(); }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Guides</h1>
            <p className="text-muted-foreground">Manage downloadable guides and resources</p>
          </div>
          <Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" /> Add Guide</Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground text-center py-12">Loading...</p>
        ) : guides.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No guides yet.</p>
        ) : (
          <div className="space-y-3">
            {guides.map((g) => (
              <Card key={g.id} className="group">
                <CardContent className="flex items-start justify-between gap-4 pt-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate text-foreground">{g.title}</h3>
                      <Badge variant={g.is_published ? "default" : "secondary"}>{g.is_published ? "Published" : "Draft"}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{g.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <Badge variant="outline">{g.category}</Badge>
                      <Badge variant="outline">{g.type}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" onClick={() => openEdit(g)}><Pencil className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-destructive" onClick={() => handleDelete(g.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>{editingId ? "Edit Guide" : "New Guide"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div><Label>Title *</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
              <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Category *</Label>
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Type</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{types.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>File URL</Label><Input value={form.file_url} onChange={(e) => setForm({ ...form, file_url: e.target.value })} placeholder="https://..." /></div>
              <div className="flex items-center gap-2">
                <Switch checked={form.is_published} onCheckedChange={(v) => setForm({ ...form, is_published: v })} />
                <Label>Published</Label>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : editingId ? "Update" : "Create"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminGuides;
