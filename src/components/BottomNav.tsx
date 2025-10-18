import { Home, BookOpen, Users, Map, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookOpen, label: "Journal", path: "/journal" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Map, label: "Impact", path: "/impact" },
  { icon: BarChart3, label: "Stats", path: "/stats" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center flex-1 gap-1 transition-colors",
                isActive ? "text-gold" : "text-muted-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-0.5 bg-gold rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
