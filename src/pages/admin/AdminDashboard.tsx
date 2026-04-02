import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, BookOpen, FileText, Video, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Stats {
  news: number;
  blog: number;
  guides: number;
  videos: number;
  partners: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({ news: 0, blog: 0, guides: 0, videos: 0, partners: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [news, blog, guides, videos, partners] = await Promise.all([
        supabase.from("news_articles").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("guides").select("id", { count: "exact", head: true }),
        supabase.from("videos").select("id", { count: "exact", head: true }),
        supabase.from("partners").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        news: news.count ?? 0,
        blog: blog.count ?? 0,
        guides: guides.count ?? 0,
        videos: videos.count ?? 0,
        partners: partners.count ?? 0,
      });
      setLoading(false);
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "News Articles", count: stats.news, icon: Newspaper, href: "/admin/news", color: "text-blue-500" },
    { label: "Blog Posts", count: stats.blog, icon: BookOpen, href: "/admin/blog", color: "text-emerald-500" },
    { label: "Guides", count: stats.guides, icon: FileText, href: "/admin/guides", color: "text-amber-500" },
    { label: "Videos", count: stats.videos, icon: Video, href: "/admin/videos", color: "text-purple-500" },
    { label: "Partners", count: stats.partners, icon: Users, href: "/admin/partners", color: "text-rose-500" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your platform content</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card) => (
            <Link key={card.label} to={card.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? "..." : card.count}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cards.map((card) => (
                <Link
                  key={card.label}
                  to={card.href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                  <span className="text-sm font-medium text-foreground">Manage {card.label}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
