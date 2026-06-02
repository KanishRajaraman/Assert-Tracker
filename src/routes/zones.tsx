import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/Panel";
import { Activity, Droplets, Thermometer, Zap } from "lucide-react";

export const Route = createFileRoute("/zones")({
  head: () => ({ meta: [{ title: "Zone & Room Analytics — AeroTrack" }] }),
  component: Zones,
});

const sectors = [
  { name: "Hangar Sector A", icon: "🏭", value: 42, label: "CAPACITY", tone: "bg-success", text: "text-success" },
  { name: "Cleanroom Suite B", icon: "🧪", value: 98, label: "CAPACITY", tone: "bg-danger", text: "text-danger" },
  { name: "Storage Vault 01", icon: "📦", value: 75, label: "CAPACITY", tone: "bg-warning", text: "text-warning" },
  { name: "On-Wing Repair Zone", icon: "✈️", value: 12, label: "TOOLS OUT", tone: "bg-success", text: "text-success" },
];

function Zones() {
  return (
    <div className="space-y-6">
      <header>
        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SECTION · 04</div>
        <h1 className="font-display text-3xl font-bold mt-1">Zone & Room Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Capacity, climate, and live RFID sweep telemetry per facility.</p>
      </header>

      <Panel title="Sector Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((s) => (
            <div key={s.name} className="rounded-sm bg-background border border-border p-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.icon}</span>
                <span className={`font-mono text-[10px] tracking-widest ${s.text}`}>{s.label}</span>
              </div>
              <div className="font-display text-3xl font-bold mt-3">{s.value}{s.label === "CAPACITY" ? "%" : ""}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.name}</div>
              <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${s.tone}`} style={{ width: `${s.label === "CAPACITY" ? s.value : Math.min(s.value * 5, 100)}%` }}/>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel title="Climate Stability Logs · Specialized Storage"
          action={<span className="text-[11px] normal-case tracking-normal text-success flex items-center gap-1.5"><span className="status-dot bg-success animate-pulse"/> NOMINAL</span>}>
          <div className="space-y-5">
            <ChartRow icon={Thermometer} label="TEMPERATURE" target="22°C" current="22.3°C" tone="text-primary" color="oklch(0.82 0.17 195)" data={[22.4, 22.1, 22.8, 23.2, 22.7, 22.0, 21.8, 22.1, 22.3, 22.5, 22.2, 22.3]} target_={22} min={20} max={25}/>
            <ChartRow icon={Droplets} label="HUMIDITY" target="40%" current="41%" tone="text-success" color="oklch(0.72 0.18 150)" data={[42, 41, 43, 40, 39, 40, 41, 42, 41, 40, 41, 41]} target_={40} min={35} max={50}/>
          </div>
        </Panel>

        <Panel title="Real-Time Room Sweep Status">
          <div className="space-y-4">
            <div>
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">TARGET ROOM</label>
              <button className="mt-1 w-full flex items-center justify-between bg-background border border-border rounded-sm px-3 py-2 text-sm hover:border-primary">
                <span>Composite Vault 01</span>
                <span className="text-muted-foreground">▾</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-sm bg-background border border-border p-3">
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">LAST SWEEP</div>
                <div className="font-display text-2xl font-bold mt-1">42<span className="text-sm text-muted-foreground font-sans"> min ago</span></div>
                <div className="text-[11px] text-muted-foreground mt-1">Handheld Reader 04</div>
              </div>
              <div className="rounded-sm bg-background border border-border p-3">
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">RECONCILIATION</div>
                <div className="font-display text-2xl font-bold mt-1 text-success">100%</div>
                <div className="text-[11px] text-muted-foreground mt-1">All tags reconciled</div>
              </div>
            </div>
            <div className="rounded-sm bg-background border border-border p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Expected Tags</span>
                <span className="font-mono font-bold">124</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-muted-foreground">Detected Tags</span>
                <span className="font-mono font-bold text-success">124</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t border-border">
                <span className="text-muted-foreground">Variance</span>
                <span className="font-mono font-bold text-success">0</span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 glow-primary">
              <Zap className="w-4 h-4"/> Run Polar Live Room Audit
            </button>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Activity className="w-3.5 h-3.5"/> Audit dispatches 14 ceiling antennas + 2 handhelds
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function ChartRow({
  icon: Icon, label, target, current, tone, color, data, target_, min, max,
}: {
  icon: typeof Thermometer; label: string; target: string; current: string;
  tone: string; color: string; data: number[]; target_: number; min: number; max: number;
}) {
  const w = 360, h = 80;
  const norm = (v: number) => h - ((v - min) / (max - min)) * h;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${norm(v)}`).join(" ");
  const targetY = norm(target_);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${tone}`}/>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{label}</span>
        </div>
        <div className="font-mono text-xs">
          <span className="text-muted-foreground">TARGET {target}</span>
          <span className={`ml-3 ${tone}`}>NOW {current}</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20 bg-background border border-border rounded-sm">
        <line x1="0" y1={targetY} x2={w} y2={targetY} stroke="oklch(0.45 0.03 240)" strokeDasharray="3 3"/>
        <polyline points={points} fill="none" stroke={color} strokeWidth="2"/>
        <polyline points={`0,${h} ${points} ${w},${h}`} fill={color} opacity="0.12"/>
        {data.map((v, i) => (
          <circle key={i} cx={i * step} cy={norm(v)} r="2" fill={color}/>
        ))}
      </svg>
    </div>
  );
}
