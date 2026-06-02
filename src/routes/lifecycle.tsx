import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/Panel";
import { FileText, Filter, Lock, Search, Wrench } from "lucide-react";

export const Route = createFileRoute("/lifecycle")({
  head: () => ({ meta: [{ title: "Asset Lifecycle Manager — AeroTrack" }] }),
  component: Lifecycle,
});

const rows = [
  { id: "#TL-8492", desc: "Pneumatic Riveter", zone: "Hangar Floor", scoreLabel: "94% READY", scoreTone: "bg-success/15 text-success border-success/40", bar: 94, doc: "Manual_Riv.pdf" },
  { id: "#AV-0421", desc: "Avionics Tester", zone: "Bench 04", scoreLabel: "12 DAYS LEFT", scoreTone: "bg-warning/15 text-warning border-warning/40", bar: 40, doc: "Cert_2026.pdf" },
  { id: "#TL-1102", desc: "Torque Wrench #12", zone: "Locker B", scoreLabel: "CALIB EXPIRED", scoreTone: "bg-danger/15 text-danger border-danger/40", bar: 8, doc: "SDS_Sheet.pdf", selected: true },
  { id: "#TW-3344", desc: "Tow Tractor Alpha", zone: "Tow Yard", scoreLabel: "82% READY", scoreTone: "bg-success/15 text-success border-success/40", bar: 82, doc: "Service_Log.pdf" },
  { id: "#CL-7711", desc: "Composite Layup Kit", zone: "Cleanroom B", scoreLabel: "26 DAYS LEFT", scoreTone: "bg-warning/15 text-warning border-warning/40", bar: 55, doc: "Compliance.pdf" },
];

function Lifecycle() {
  return (
    <div className="space-y-6">
      <header>
        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SECTION · 03</div>
        <h1 className="font-display text-3xl font-bold mt-1">Asset Lifecycle Manager</h1>
        <p className="text-sm text-muted-foreground mt-1">Calibration, certifications, and chain-of-custody for every tagged tool.</p>
      </header>

      <Panel title="Asset Registry · 1,420 items"
        action={
          <div className="flex items-center gap-2 normal-case tracking-normal text-[11px]">
            <Filter className="w-3.5 h-3.5"/> 3 filters
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {["All Status", "Manufacturer", "Next Calib Date"].map((f) => (
            <button key={f} className="px-3 py-1.5 rounded-sm bg-background border border-border text-xs hover:border-primary">
              {f} ▾
            </button>
          ))}
          <div className="relative ml-auto">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"/>
            <input placeholder="Clean table search…" className="bg-background border border-border rounded-sm pl-8 pr-3 py-1.5 text-xs w-56"/>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="font-mono text-[10px] tracking-widest text-muted-foreground border-b border-border">
                <th className="text-left py-2 px-2">ASSET ID</th>
                <th className="text-left py-2 px-2">DESCRIPTION</th>
                <th className="text-left py-2 px-2">ZONE</th>
                <th className="text-left py-2 px-2">LIFECYCLE SCORE</th>
                <th className="text-left py-2 px-2">DOCS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className={`border-b border-border/60 hover:bg-muted/40 ${r.selected ? "bg-primary/5" : ""}`}>
                  <td className="py-3 px-2 font-mono text-primary">{r.id}</td>
                  <td className="py-3 px-2">{r.desc}</td>
                  <td className="py-3 px-2 text-muted-foreground">{r.zone}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-sm border text-[10px] font-mono tracking-wider ${r.scoreTone}`}>{r.scoreLabel}</span>
                      <div className="w-24 h-1 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-success" style={{ width: `${r.bar}%` }}/>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary">
                      <FileText className="w-3.5 h-3.5"/> {r.doc}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel title="Selected · Torque Wrench #12 · Usage Statistics">
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground">TOTAL USAGE CYCLES</div>
              <div className="font-display text-4xl font-bold mt-1">1,240<span className="text-base text-muted-foreground font-sans"> cycles</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">LOGGED FLIGHT HOURS</div>
                <div className="font-display text-2xl font-bold mt-1">248 hrs</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">LAST USER</div>
                <div className="text-sm mt-1">Tech. M. Kowalski</div>
                <div className="font-mono text-[10px] text-muted-foreground">EMP-44219</div>
              </div>
            </div>
            <div className="h-16 flex items-end gap-1">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="flex-1 bg-primary/60 rounded-t-sm" style={{ height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%` }}/>
              ))}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-widest">USAGE · LAST 32 SHIFTS</div>
          </div>
        </Panel>

        <Panel title="Compliance Actions">
          <div className="space-y-4">
            <div className="rounded-sm border border-danger/40 bg-danger/10 p-4">
              <div className="font-mono text-[10px] tracking-widest text-danger">STATUS</div>
              <div className="font-display text-2xl font-bold text-danger mt-1 flex items-center gap-2">
                <Lock className="w-5 h-5"/> OUT OF SERVICE
              </div>
              <div className="text-xs text-muted-foreground mt-1">Calibration certificate expired 2 days ago. Asset auto-locked from check-out.</div>
            </div>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-sm bg-background border border-border hover:border-primary text-sm group">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4"/> Lock asset in system check-out</span>
              <span className="font-mono text-[10px] text-success">ENFORCED</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90">
              <span className="flex items-center gap-2"><Wrench className="w-4 h-4"/> Request calibration service</span>
              <span>→</span>
            </button>
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              {[["Mfr", "Snap-On"], ["Model", "TQ-1500"], ["Serial", "SO-44A"]].map(([k, v]) => (
                <div key={k} className="bg-background border border-border rounded-sm py-2">
                  <div className="font-mono text-[9px] text-muted-foreground tracking-widest">{k.toUpperCase()}</div>
                  <div className="text-xs mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
