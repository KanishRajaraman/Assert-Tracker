import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Box,
  Wrench,
  BarChart3,
  Settings,
  Radio,
} from "lucide-react";

const items = [
  { to: "/", label: "Command Center", icon: LayoutDashboard },
  { to: "/digital-twin", label: "Digital Twin 3D", icon: Box },
  { to: "/lifecycle", label: "Lifecycle Manager", icon: Wrench },
  { to: "/zones", label: "Zone Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-border bg-sidebar flex flex-col">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-border">
        <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
          <Radio className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold text-sm tracking-tight">
          AEROTRACK
        </div>
        <div className="font-mono text-[9px] text-muted-foreground tracking-widest">RFID OPS · v2.4</div>
        </div>
      </div>
      <nav className="flex-1 p-2 space-y-0.5">
        {items.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="flex items-center gap-3 px-3 py-2 rounded-sm text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors data-[status=active]:bg-sidebar-accent data-[status=active]:text-primary data-[status=active]:border-l-2 data-[status=active]:border-primary data-[status=active]:pl-[10px]"
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-border font-mono text-[10px] text-muted-foreground space-y-1">
        <div className="flex justify-between">
          <span>NODES</span>
          <span className="text-foreground">14 / 14</span>
        </div>
        <div className="flex justify-between">
          <span>UPLINK</span>
          <span className="text-success">STABLE</span>
        </div>
        <div className="flex justify-between">
          <span>LAT</span>
          <span className="text-foreground">12ms</span>
        </div>
      </div>
    </aside>
  );
}
