# Assert-Tracker
# AeroTrack — Aerospace Asset Intelligence

AeroTrack is a real-time industrial asset tracker designed for airplane manufacturing and maintenance (MRO) operations. It combines RFID-based location tracking, a 3D digital twin workspace, lifecycle management, and zone analytics into a single control-deck interface.

---

## What It Does

- **Track every tagged asset** across hangars, paint shops, cleanrooms, and storage vaults using RFID telemetry.
- **Pinpoint assets in 3D** with sub-10cm precision inside a simulated CAD environment (digital twin).
- **Manage calibration & compliance** — auto-lock tools when certificates expire, schedule service, and maintain chain-of-custody.
- **Monitor facility health** — live capacity, climate stability (temperature / humidity), and room sweep reconciliation.
- **Integrate handheld readers** for floor-level audits and mobile check-in/check-out.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + file-based routing + SSR) |
| Styling | Tailwind CSS v4 with custom aerospace control-deck design tokens |
| UI Components | shadcn/ui (Radix primitives) |
| State & Data | TanStack Query |
| Icons | Lucide React |
| Fonts | Space Grotesk (display), JetBrains Mono (data/mono), Inter (body) |
| Build Tool | Vite 7 |

---

## Application Sections

### Command Center (`/`)
The operational dashboard. Shows:
- **KPI tiles** — total tagged assets, utilization rate, missing/overdue alerts, calibration warnings.
- **Live 2D floorplan** — a heatmap-style SVG view of six facility zones showing real-time asset density and distribution.
- **Activity feed** — chronological log of check-ins, check-outs, alerts, and sweep completions.

### Digital Twin 3D (`/digital-twin`)
A simulated high-fidelity 3D CAD viewer (rendered with SVG) for spatial asset tracking:
- Search for any asset by ID to get instant XYZ coordinates.
- Animated target-lock with crosshair overlay and precision readout.
- Layer filters for static machinery, mobile tow tractors, and handheld tool cribs.
- Orbit / pan / zoom viewer controls and a **Launch Tablet AR** button for mobile augmentation.

### Asset Lifecycle Manager (`/lifecycle`)
The compliance and maintenance registry:
- **Asset registry table** with 1,420+ items, sortable by status, manufacturer, and next calibration date.
- **Lifecycle scores** — color-coded readiness indicators (ready, days-left, expired) with progress bars.
- **Usage statistics** — total cycles, logged flight hours, last user, and per-shift usage charts.
- **Compliance enforcement** — auto-locks assets with expired calibration and blocks check-out until service is requested.

### Zone & Room Analytics (`/zones`)
Facility-wide monitoring:
- **Sector overview** — capacity percentages for Hangar, Cleanroom, Storage Vault, and On-Wing Repair zones.
- **Climate stability logs** — SVG line charts tracking temperature and humidity against targets for specialized storage.
- **Room sweep status** — reconciliation of expected vs. detected RFID tags, with one-click **Polar Live Room Audit** that dispatches 14 ceiling antennas + 2 handheld readers.

### Settings (`/settings`)
System configuration:
- **RFID reader network** — status of ceiling and handheld readers (online / syncing).
- **Alert thresholds** — configurable windows for calibration warnings, missing asset escalation, and cleanroom climate deviations.

---

## UI Design System

The interface follows an **aerospace control-deck** aesthetic:

- **Dark navy palette** (`oklch` based) with electric cyan as the primary data accent.
- **Monospace typography** for all telemetry, IDs, and sensor readouts.
- **Panel-based layout** — every content block is a bordered card with a uppercase monospace header.
- **Scanline & glow utilities** — subtle CRT-style scanlines on viewers and neon glow on primary actions.
- **Grid background** — a 48px technical grid overlays the main viewport for an industrial drafting feel.
- **Semantic tokens** — all colors (primary, success, warning, danger, muted, border) are CSS variables in `src/styles.css`, never hardcoded.

---

## Project Structure

```
src/
├── components/
│   ├── Panel.tsx          # Reusable bordered card with header
│   ├── Sidebar.tsx         # Persistent nav with node / uplink / latency telemetry
│   ├── Topbar.tsx          # Global search (voice-to-text), notifications, handheld sync
│   └── ui/                 # shadcn/ui primitives (button, dialog, table, etc.)
├── routes/
│   ├── __root.tsx          # Root layout: sidebar + topbar + outlet
│   ├── index.tsx           # Command Center
│   ├── digital-twin.tsx    # 3D CAD workspace
│   ├── lifecycle.tsx       # Asset registry & compliance
│   ├── zones.tsx           # Facility analytics & climate logs
│   └── settings.tsx        # Hardware & threshold configuration
├── styles.css              # Design tokens, utilities, font imports
├── router.tsx              # TanStack Router bootstrap
└── start.ts                # TanStack Start server config
```

---

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build
```

The app runs on Vite with TanStack Start handling SSR and file-based routing.

---

## Asset Telemetry (Demo Data)

All screens are populated with realistic demo telemetry so the interface is immediately usable:

| Metric | Value |
|--------|-------|
| Total Tagged Assets | 1,420 |
| Assets In Use | 342 (24% utilization) |
| Missing / Overdue | 3 |
| Calibration Alerts | 14 (next 30 days) |
| RFID Nodes Online | 14 / 14 |
| Uplink Status | Stable |
| Network Latency | ~12 ms |

---

## License

Private — built for internal aerospace manufacturing and MRO operations.
