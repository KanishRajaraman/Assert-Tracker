import { Bell, Mic, Search, Wifi } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-14 border-b border-border bg-panel/80 backdrop-blur flex items-center px-4 gap-4">
      <div className="flex-1 max-w-2xl relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search assets, rooms, or bins — voice-to-text supported"
          className="w-full bg-background border border-border rounded-sm pl-9 pr-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted text-muted-foreground hover:text-primary">
          <Mic className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-2 rounded hover:bg-muted">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-destructive text-[10px] font-mono flex items-center justify-center text-destructive-foreground">3</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border bg-background">
          <span className="status-dot bg-success animate-pulse" />
          <Wifi className="w-3.5 h-3.5 text-success" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">HANDHELD SYNC</span>
        </div>
        <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-primary to-success grid place-items-center text-primary-foreground font-mono text-xs font-bold">
          MK
        </div>
      </div>
    </header>
  );
}
