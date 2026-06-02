import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/Panel";
import { Crosshair, Maximize2, Move3d, RotateCw, Search, Tablet } from "lucide-react";

export const Route = createFileRoute("/digital-twin")({
  head: () => ({ meta: [{ title: "Digital Twin — AeroTrack" }] }),
  component: DigitalTwin,
});

function DigitalTwin() {
  return (
    <div className="space-y-6">
      <header>
        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SECTION · 02</div>
        <h1 className="font-display text-3xl font-bold mt-1">Digital Twin Workspace</h1>
        <p className="text-sm text-muted-foreground mt-1">Pinpoint any tagged asset in 3D with sub-10cm RFID precision.</p>
      </header>

      <Panel title="Control Panel">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground">SEARCH TARGET</label>
            <div className="mt-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input defaultValue="Part X-104" className="w-full bg-background border border-border rounded-sm pl-9 pr-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground">TARGET COORDINATES</label>
            <div className="mt-1 grid grid-cols-3 gap-2 font-mono">
              {[["X", "2.4m"], ["Y", "1.1m"], ["Z", "0.8m"]].map(([k, v]) => (
                <div key={k} className="bg-background border border-border rounded-sm px-3 py-2 text-sm">
                  <span className="text-muted-foreground">{k}</span><span className="ml-2 text-primary">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground">LAYER FILTERS</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {["Static Machinery", "Mobile Tow Tractors", "Handheld Tool Cribs"].map((l) => (
                <label key={l} className="flex items-center gap-2 bg-background border border-border rounded-sm px-2 py-1.5 text-xs cursor-pointer hover:border-primary">
                  <input type="checkbox" defaultChecked className="accent-[oklch(0.82_0.17_195)]" />
                  {l}
                </label>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <Panel
        title="3D CAD Environment Viewer · High-Fidelity Render"
        action={<span className="text-[11px] normal-case tracking-normal text-success">● LIVE TELEMETRY</span>}
      >
        <div className="relative h-[460px] rounded-sm bg-background border border-border overflow-hidden scanline">
          <svg viewBox="0 0 800 460" className="w-full h-full">
            <defs>
              <pattern id="floor" width="40" height="20" patternUnits="userSpaceOnUse" patternTransform="skewX(-30)">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="oklch(0.3 0.03 240)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="rack" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="oklch(0.32 0.03 240)"/>
                <stop offset="1" stopColor="oklch(0.22 0.025 240)"/>
              </linearGradient>
            </defs>
            {/* floor */}
            <polygon points="100,400 700,400 800,260 0,260" fill="url(#floor)" opacity="0.5"/>
            {/* hangar frame */}
            <polyline points="60,260 60,80 400,30 740,80 740,260" fill="none" stroke="oklch(0.4 0.03 240)" strokeWidth="1.5"/>
            <line x1="60" y1="80" x2="740" y2="80" stroke="oklch(0.4 0.03 240)" strokeDasharray="4 4"/>
            {/* shelves */}
            {[140, 260, 380, 500, 620].map((x, i) => (
              <g key={x}>
                <rect x={x} y="220" width="80" height="160" fill="url(#rack)" stroke="oklch(0.4 0.03 240)"/>
                <line x1={x} y1="260" x2={x+80} y2="260" stroke="oklch(0.32 0.03 240)"/>
                <line x1={x} y1="300" x2={x+80} y2="300" stroke="oklch(0.32 0.03 240)"/>
                <line x1={x} y1="340" x2={x+80} y2="340" stroke="oklch(0.32 0.03 240)"/>
                <text x={x+8} y="215" fontFamily="JetBrains Mono" fontSize="9" fill="oklch(0.65 0.02 230)">SHELF B{i+1}</text>
              </g>
            ))}
            {/* tow tractor silhouette */}
            <rect x="430" y="340" width="60" height="30" fill="oklch(0.72 0.18 150)" opacity="0.6"/>
            <circle cx="445" cy="375" r="6" fill="oklch(0.32 0.03 240)"/>
            <circle cx="480" cy="375" r="6" fill="oklch(0.32 0.03 240)"/>
            {/* target highlight */}
            <g>
              <circle cx="300" cy="280" r="40" fill="none" stroke="oklch(0.65 0.24 25)" strokeWidth="1.5" opacity="0.4">
                <animate attributeName="r" values="20;55;20" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="300" cy="280" r="16" fill="oklch(0.65 0.24 25)" fillOpacity="0.25" stroke="oklch(0.65 0.24 25)" strokeWidth="1.5"/>
              <line x1="300" y1="265" x2="300" y2="295" stroke="oklch(0.65 0.24 25)" strokeWidth="1.2"/>
              <line x1="285" y1="280" x2="315" y2="280" stroke="oklch(0.65 0.24 25)" strokeWidth="1.2"/>
              <line x1="316" y1="280" x2="500" y2="160" stroke="oklch(0.65 0.24 25)" strokeDasharray="3 3" opacity="0.6"/>
              <rect x="500" y="140" width="180" height="60" fill="oklch(0.22 0.025 240)" stroke="oklch(0.65 0.24 25)"/>
              <text x="510" y="160" fontFamily="JetBrains Mono" fontSize="9" fill="oklch(0.65 0.24 25)" letterSpacing="1">TARGET LOCK</text>
              <text x="510" y="178" fontFamily="Space Grotesk" fontSize="14" fontWeight="700" fill="oklch(0.96 0.01 220)">Part X-104</text>
              <text x="510" y="194" fontFamily="JetBrains Mono" fontSize="9" fill="oklch(0.65 0.02 230)">SHELF B3 · ±0.08m</text>
            </g>
            {/* tag dots */}
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={i} cx={120 + (i * 23) % 600} cy={250 + ((i * 47) % 120)} r="2" fill="oklch(0.82 0.17 195)" opacity="0.6"/>
            ))}
          </svg>

          {/* viewer controls */}
          <div className="absolute top-3 left-3 flex gap-1">
            {[Move3d, RotateCw, Maximize2, Crosshair].map((Icon, i) => (
              <button key={i} className="w-8 h-8 grid place-items-center rounded-sm bg-panel/80 border border-border hover:border-primary text-muted-foreground hover:text-primary">
                <Icon className="w-4 h-4"/>
              </button>
            ))}
          </div>
          <div className="absolute bottom-3 left-3 font-mono text-[10px] text-muted-foreground tracking-widest">
            VIEW: ORBIT · PAN · ZOOM   |   FPS 60   |   CAD r.2026.1
          </div>
          <button className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90">
            <Tablet className="w-4 h-4"/> Launch Tablet AR
          </button>
        </div>
      </Panel>
    </div>
  );
}
