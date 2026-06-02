import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — AeroTrack" }] }),
  component: Settings,
});

function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <header>
        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SECTION · 05</div>
        <h1 className="font-display text-3xl font-bold mt-1">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Reader hardware, alert thresholds, and integrations.</p>
      </header>

      <Panel title="RFID Reader Network">
        <div className="space-y-3">
          {[
            { id: "RDR-01", loc: "Hangar A · Ceiling", status: "ONLINE" },
            { id: "RDR-02", loc: "Hangar B · Ceiling", status: "ONLINE" },
            { id: "HND-04", loc: "Handheld · M. Kowalski", status: "SYNCING" },
            { id: "RDR-07", loc: "Cleanroom B", status: "ONLINE" },
          ].map((r) => (
            <div key={r.id} className="flex items-center justify-between bg-background border border-border rounded-sm px-4 py-3">
              <div>
                <div className="font-mono text-sm text-primary">{r.id}</div>
                <div className="text-xs text-muted-foreground">{r.loc}</div>
              </div>
              <span className={`font-mono text-[10px] tracking-widest ${r.status === "ONLINE" ? "text-success" : "text-warning"}`}>● {r.status}</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Alert Thresholds">
        <div className="space-y-4">
          {[
            ["Calibration warning window", "30 days"],
            ["Missing asset escalation", "4 hours"],
            ["Cleanroom temperature deviation", "± 1.5°C"],
            ["Cleanroom humidity deviation", "± 5%"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between text-sm border-b border-border pb-3">
              <span className="text-muted-foreground">{k}</span>
              <input defaultValue={v} className="bg-background border border-border rounded-sm px-3 py-1.5 text-sm font-mono w-40 text-right"/>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
