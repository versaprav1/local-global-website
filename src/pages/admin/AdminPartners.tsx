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

const verticals = ["Farm to Home", "Urban Gardening", "Barter & Exchange", "Youth Freelancing", "M&A Ecosystem"];
const partnerTypes = ["Farm", "Garden Center", "Exchange Platform", "Freelancer Hub", "Business Broker", "Other"];

const emptyPartner = { name: "", description: "", type: partnerTypes[0], vertical: verticals[0], location: "", website_url: "", is_approved: false };

const AdminPartners = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyPartner);
  const [saving, setSaving] = useState(false);

  const fetchPartners = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("partners").select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setPartners(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPartners(); }, []);

  const openCreate = () => { setEditingId(null); setForm(emptyPartner); setDialogOpen(true); };
  const openEdit = (p: any) => {
    setEditingId(p.id);
    setForm({ name: p.name, description: p.description || "", type: p.type, vertical: p.vertical, location: p.location, website_url: p.website_url || "", is_approved: p.is_approved || false });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.location || !form.type || !form.vertical) {
      toast({ title: "Missing fields", description: "Name, location, type, and vertical are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = { ...form, website_url: form.website_url || null };
    if (editingId) {
      const { error } = await supabase.from("partners").update(payload).eq("id", editingId);
      if (error) toast({ title: "Update failed", description: error.message, variant: "destructive" });
      else toast({ title: "Partner updated" });
    } else {
      const { error } = await supabase.from("partners").insert(payload);
      if (error) toast({ title: "Create failed", description: error.message, variant: "destructive" });
      else toast({ title: "Partner created" });
    }
    setSaving(false);
    setDialogOpen(false);
    fetchPartners();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this partner?")) return;
    const { error } = await supabase.from("partners").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else { toast({ title: "Partner deleted" }); fetchPartners(); }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Partners</h1>
            <p className="text-muted-foreground">Manage partner directory</p>
          </div>
          <Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" /> Add Partner</Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground text-center py-12">Loading...</p>
        ) : partners.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No partners yet.</p>
        ) : (
          <div className="space-y-3">
            {partners.map((p) => (
              <Card key={p.id} className="group">
                <CardContent className="flex items-start justify-between gap-4 pt-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate text-foreground">{p.name}</h3>
                      <Badge variant={p.is_approved ? "default" : "secondary"}>{p.is_approved ? "Approved" : "Pending"}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <Badge variant="outline">{p.vertical}</Badge>
                      <span>{p.type}</span>
                      <span>{p.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" onClick={() => openEdit(p)}><Pencil className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-destructive" onClick={() => handleDelete(p.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>{editingId ? "Edit Partner" : "New Partner"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Type *</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{partnerTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Vertical *</Label>
                  <Select value={form.vertical} onValueChange={(v) => setForm({ ...form, vertical: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{verticals.map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>Location *</Label><Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Berlin, Germany" /></div>
              <div><Label>Website URL</Label><Input value={form.website_url} onChange={(e) => setForm({ ...form, website_url: e.target.value })} placeholder="https://..." /></div>
              <div className="flex items-center gap-2">
                <Switch checked={form.is_approved} onCheckedChange={(v) => setForm({ ...form, is_approved: v })} />
                <Label>Approved</Label>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : editingId ? "Update" : "Create"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminPartners;
