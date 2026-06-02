import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/Panel";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Clock, Package, PlaneTakeoff } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Command Center — AeroTrack" }] }),
  component: CommandCenter,
});

const kpis = [
  { label: "TOTAL TAGGED ASSETS", value: "1,420", delta: "+12 today", icon: Package, tone: "text-primary" },
  { label: "ASSETS IN USE", value: "342", delta: "24% utilization", icon: PlaneTakeoff, tone: "text-foreground" },
  { label: "MISSING / OVERDUE", value: "3", delta: "investigate", icon: AlertTriangle, tone: "text-danger" },
  { label: "CALIBRATION ALERTS", value: "14", delta: "next 30 days", icon: Clock, tone: "text-warning" },
];

const zones = [
  { name: "Hangar A", density: "high", pct: 92, tone: "bg-danger" },
  { name: "Paint Shop", density: "low", pct: 24, tone: "bg-success" },
  { name: "Warehouse Bins", density: "med", pct: 68, tone: "bg-warning" },
  { name: "Cleanroom B", density: "high", pct: 98, tone: "bg-danger" },
  { name: "Tow Yard", density: "low", pct: 18, tone: "bg-success" },
  { name: "On-Wing Zone", density: "med", pct: 55, tone: "bg-warning" },
];

const activity = [
  { time: "10:14", type: "Check-In", asset: "Torque Wrench #42", by: "J. Doe — Zone A", tone: "text-success", icon: CheckCircle2 },
  { time: "09:45", type: "Check-Out", asset: "Avionics Tester", by: "A. Smith — Hangar B", tone: "text-primary", icon: ArrowUpRight },
  { time: "08:30", type: "ALERT — Calib. Expired", asset: "Rivet Gun #09", by: "System auto-flag", tone: "text-danger", icon: AlertTriangle },
  { time: "08:02", type: "Check-In", asset: "Pneumatic Riveter", by: "M. Kowalski — Hangar A", tone: "text-success", icon: CheckCircle2 },
  { time: "07:55", type: "Sweep Complete", asset: "Composite Vault 01", by: "Handheld Reader 04", tone: "text-primary", icon: CheckCircle2 },
];

function CommandCenter() {
  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SECTION · 01</div>
          <h1 className="font-display text-3xl font-bold mt-1">Command Center</h1>
          <p className="text-sm text-muted-foreground mt-1">Live operational picture across all hangars, bays, and storage.</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground text-right">
          <div>SHIFT · DAY-A</div>
          <div className="text-foreground">{new Date().toUTCString().slice(17, 22)} UTC</div>
        </div>
      </header>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="panel p-4 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{k.label}</div>
                <div className={`font-display text-4xl font-bold mt-2 ${k.tone}`}>{k.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{k.delta}</div>
              </div>
              <k.icon className={`w-5 h-5 ${k.tone}`} />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Split workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Panel
          title="Live Hangar Heatmap · 2D Floorplan"
          className="lg:col-span-2"
          action={
            <div className="flex items-center gap-3 normal-case tracking-normal text-[11px]">
              <span className="flex items-center gap-1.5"><span className="status-dot bg-primary" /> Hand Tools</span>
              <span className="flex items-center gap-1.5"><span className="status-dot bg-success" /> Tow Vehicles</span>
            </div>
          }
        >
          <div className="relative h-[340px] rounded-sm bg-background border border-border overflow-hidden scanline">
            <svg viewBox="0 0 600 340" className="w-full h-full">
              <defs>
                <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.3 0.03 240)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="600" height="340" fill="url(#g)" />
              {zones.map((z, i) => {
                const x = (i % 3) * 200 + 20;
                const y = Math.floor(i / 3) * 160 + 20;
                return (
                  <g key={z.name}>
                    <rect x={x} y={y} width="160" height="140" fill="oklch(0.22 0.025 240)" stroke="oklch(0.32 0.03 240)" />
                    <rect x={x} y={y + 130} width={`${(160 * z.pct) / 100}`} height="10" className={z.tone} fillOpacity="0.7" />
                    <text x={x + 8} y={y + 20} fontFamily="JetBrains Mono" fontSize="10" fill="oklch(0.65 0.02 230)" letterSpacing="1">{z.name.toUpperCase()}</text>
                    <text x={x + 8} y={y + 48} fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="oklch(0.96 0.01 220)">{z.pct}%</text>
                    <text x={x + 8} y={y + 64} fontFamily="JetBrains Mono" fontSize="9" fill="oklch(0.65 0.02 230)">{z.density.toUpperCase()} DENSITY</text>
                    {/* asset dots */}
                    {Array.from({ length: Math.floor(z.pct / 8) }).map((_, j) => (
                      <circle
                        key={j}
                        cx={x + 20 + ((j * 17) % 130)}
                        cy={y + 90 + Math.floor((j * 17) / 130) * 12}
                        r="2.4"
                        fill={j % 3 === 0 ? "oklch(0.72 0.18 150)" : "oklch(0.82 0.17 195)"}
                      />
                    ))}
                  </g>
                );
              })}
            </svg>
            <div className="absolute bottom-3 left-3 font-mono text-[10px] text-muted-foreground tracking-widest">FLOORPLAN · BUILDING 7 · LIVE</div>
          </div>
        </Panel>

        <Panel title="Recent Activity Feed">
          <ul className="space-y-3">
            {activity.map((a, i) => (
              <li key={i} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <a.icon className={`w-4 h-4 mt-0.5 shrink-0 ${a.tone}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-muted-foreground">{a.time}</span>
                    <span className={`text-xs font-medium ${a.tone}`}>{a.type}</span>
                  </div>
                  <div className="text-sm mt-0.5 truncate">{a.asset}</div>
                  <div className="text-[11px] text-muted-foreground">{a.by}</div>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full text-xs font-mono tracking-widest text-primary hover:underline">
            VIEW FULL OPERATIONAL LOG →
          </button>
        </Panel>
      </div>
    </div>
  );
}
