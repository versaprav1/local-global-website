import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  if (authLoading) return null;
  if (user) return <Navigate to="/admin" replace />;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (resetMode) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Check your email", description: "Password reset link sent." });
        setResetMode(false);
      }
      setLoading(false);
      return;
    }

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Check your email", description: "Confirm your account to continue." });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ title: "Login failed", description: error.message, variant: "destructive" });
      } else {
        navigate("/admin");
      }
    }
    setLoading(false);
  };

  const handleOAuth = async (provider: "google" | "github" | "discord") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/admin` },
    });
    if (error) {
      toast({ title: "OAuth error", description: error.message, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4 flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <LogIn className="h-6 w-6 text-primary" />
              {resetMode ? "Reset Password" : isSignUp ? "Create Account" : "Welcome Back"}
            </CardTitle>
            <CardDescription>
              {resetMode
                ? "Enter your email to receive a reset link"
                : isSignUp
                ? "Sign up to manage content"
                : "Sign in to access the admin panel"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Social logins will be added later */}

            <form onSubmit={handleEmailAuth} className="space-y-3">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              {!resetMode && (
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-9"
                      placeholder="••••••••"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading
                  ? "Loading..."
                  : resetMode
                  ? "Send Reset Link"
                  : isSignUp
                  ? "Sign Up"
                  : "Sign In"}
              </Button>
            </form>

            <div className="text-center text-sm space-y-1">
              {!resetMode && (
                <button
                  onClick={() => setResetMode(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot password?
                </button>
              )}
              <div>
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setResetMode(false);
                  }}
                  className="text-primary hover:underline"
                >
                  {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
                </button>
              </div>
              {resetMode && (
                <button
                  onClick={() => setResetMode(false)}
                  className="text-primary hover:underline"
                >
                  Back to sign in
                </button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
