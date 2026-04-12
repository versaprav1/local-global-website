import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

type ProtectedRouteProps = {
  children: React.ReactNode;
  /** When true, only users with the `admin` role (via `has_role` RPC) may view the route. */
  requireAdmin?: boolean;
};

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [adminChecked, setAdminChecked] = useState(!requireAdmin);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!requireAdmin) {
      setAdminChecked(true);
      return;
    }
    if (!user) {
      setAdminChecked(true);
      setIsAdmin(false);
      return;
    }

    setAdminChecked(false);
    let cancelled = false;
    (async () => {
      const { data } = await supabase.rpc("has_role", {
        _user_id: user.id,
        _role: "admin",
      });
      if (!cancelled) {
        setIsAdmin(!!data);
        setAdminChecked(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user, requireAdmin]);

  if (loading || (requireAdmin && user && !adminChecked)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
