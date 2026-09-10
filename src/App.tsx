/* CivicFix — Kasi-edition, Gauteng */

/* ── palette ───────────────────────────────────────────── */
const NAVY    = "#0B1220";
const BLUE    = "#2563EB";
const GOLD    = "#FFB612";          // SA taxi gold
const GREEN   = "#007A4D";          // SA flag green
const RED     = "#DC2626";
const ORANGE  = "#F97316";
const PURPLE  = "#7C3AED";
const SLATE   = "#64748B";
const BORDER  = "#E2E8F0";
const OFFWHITE = "#F8FAFC";
const KASI_RED = "#C0392B";         // deep kasi red

/* ── Ndebele geometric stripe ───────────────────────────── */
function NdebeleStripe({ height = 8 }: { height?: number }) {
  const blocks = [
    GOLD, NAVY, GREEN, RED, GOLD, BLUE, GOLD, RED, GREEN, NAVY, GOLD,
    BLUE, NAVY, GOLD, GREEN, RED, GOLD, NAVY, BLUE, GOLD, RED, GREEN,
  ];
  return (
    <div style={{ display: "flex", height, overflow: "hidden" }}>
      {blocks.map((c, i) => (
        <div key={i} style={{ flex: 1, background: c }} />
      ))}
    </div>
  );
}

/* ── Ndebele diamond row ────────────────────────────────── */
function NdebeleDiamonds() {
  const seq = [GOLD, RED, GREEN, BLUE, GOLD, RED, GREEN, BLUE, GOLD, RED, GREEN, BLUE, GOLD, RED];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, overflow: "hidden", height: 20 }}>
      {seq.map((c, i) => (
        <div
          key={i}
          style={{
            width: 20,
            height: 20,
            background: c,
            transform: "rotate(45deg) scale(0.65)",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ── Status badge ───────────────────────────────────────── */
function Badge({ color, label }: { color: string; label: string }) {
  const map: Record<string, { bg: string; text: string }> = {
    blue:   { bg: "#DBEAFE", text: "#1D4ED8" },
    purple: { bg: "#EDE9FE", text: "#6D28D9" },
    amber:  { bg: "#FEF3C7", text: "#B45309" },
    orange: { bg: "#FFEDD5", text: "#9A3412" },
    green:  { bg: "#DCFCE7", text: "#166534" },
    gray:   { bg: "#F1F5F9", text: "#475569" },
    red:    { bg: "#FEE2E2", text: "#991B1B" },
    gold:   { bg: "#FFFBEB", text: "#92400E" },
  };
  const s = map[color] ?? map.gray;
  return (
    <span style={{ background: s.bg, color: s.text, fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

/* ── Bottom nav ─────────────────────────────────────────── */
function BottomNav({ active }: { active: string }) {
  const items = [
    { label: "Ikhaya", icon: "⊞" },   // Home in Zulu
    { label: "Reports", icon: "📋" },
    { label: "Mapa", icon: "🗺" },
    { label: "Alerts", icon: "🔔" },
    { label: "Profile", icon: "👤" },
  ];
  return (
    <div>
      <NdebeleStripe height={4} />
      <div style={{ display: "flex", borderTop: `1px solid ${BORDER}`, background: "#fff", paddingBottom: 14, paddingTop: 10 }}>
        {items.map((it) => (
          <div key={it.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <span style={{ fontSize: 20 }}>{it.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: it.label === active ? BLUE : SLATE, letterSpacing: "0.01em" }}>
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile frame ───────────────────────────────────────── */
function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 390, minHeight: 844, background: OFFWHITE, fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      {/* SA-themed status bar */}
      <div style={{ background: NAVY, display: "flex", justifyContent: "space-between", padding: "10px 20px 6px" }}>
        <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>09:41</span>
        <span style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: "0.04em" }}>GAUTENG · ZA</span>
        <span style={{ color: "#94A3B8", fontSize: 11 }}>●●● ▮▮▮</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   RESIDENT SCREENS
════════════════════════════════════════════════════════════ */

/* 01 Splash */
function ScreenSplash() {
  return (
    <MobileFrame>
      <div style={{ flex: 1, background: NAVY, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Ndebele border top */}
        <NdebeleStripe height={12} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", gap: 20 }}>
          {/* icon with geometric ring */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 100, height: 100, borderRadius: "50%", border: `4px solid ${GOLD}`, opacity: 0.3 }} />
            <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", border: `2px solid ${GREEN}`, opacity: 0.4 }} />
            <div style={{ width: 72, height: 72, background: BLUE, borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>
              🏙️
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 6 }}>UBUNTU COMMUNITY PLATFORM</div>
            <div style={{ color: "#fff", fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>CivicFix</div>
            <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 10, lineHeight: 1.5 }}>
              Sigcina imiphakathi,<br />
              <span style={{ color: "#64748B", fontSize: 12 }}>Making communities better</span>
            </div>
          </div>

          {/* SA flag strip */}
          <div style={{ width: 80, height: 6, borderRadius: 3, overflow: "hidden", display: "flex" }}>
            {[GREEN, "#000", GOLD, "#fff", RED, BLUE].map((c, i) => (
              <div key={i} style={{ flex: 1, background: c }} />
            ))}
          </div>
        </div>

        <div style={{ padding: "0 32px 32px", textAlign: "center" }}>
          <div style={{ color: "#475569", fontSize: 12, marginBottom: 20 }}>
            Igama lakho. Izwi lakho. Idolobha lakho.
          </div>
          <div style={{ color: "#334155", fontSize: 11, letterSpacing: "0.06em" }}>
            Your community. Your voice. Your city.
          </div>
        </div>

        <NdebeleStripe height={12} />
      </div>
    </MobileFrame>
  );
}

/* 02 Welcome */
function ScreenWelcome() {
  return (
    <MobileFrame>
      <NdebeleStripe height={8} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column", padding: "28px 22px 36px" }}>
        {/* JHB skyline card */}
        <div style={{ borderRadius: 18, overflow: "hidden", height: 220, marginBottom: 28, position: "relative", flexShrink: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1636706519609-988babca3dd5?w=700&h=400&fit=crop&auto=format"
            alt="Johannesburg skyline at golden hour"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(11,18,32,0.85))" }} />

          {/* Gauteng area tags floating over skyline */}
          {[
            { label: "Soweto", x: 18, y: 50, c: GOLD },
            { label: "Sandton", x: 210, y: 30, c: GREEN },
            { label: "Alexandra", x: 130, y: 80, c: RED },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                position: "absolute",
                left: t.x,
                top: t.y,
                background: t.c,
                color: "#fff",
                fontSize: 10,
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: 999,
                letterSpacing: "0.04em",
              }}
            >
              {t.label}
            </div>
          ))}

          <div style={{ position: "absolute", bottom: 12, left: 16 }}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>Gauteng Province</div>
            <div style={{ color: "#94A3B8", fontSize: 11 }}>Nkosi Sikelel' iAfrika</div>
          </div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 800, color: GREEN, letterSpacing: "0.1em", marginBottom: 6 }}>
          UBUNTU • WE ARE BECAUSE YOU ARE
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 12 }}>
          Help improve your community.
        </div>
        <div style={{ color: SLATE, fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
          Bona inkinga. Ibika. Ilande. — See a problem, report it, track it and help your municipality fix it faster.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, letterSpacing: "0.01em" }}>
            + Bika Inkinga — Report an Issue
          </button>
          <button style={{ background: "#fff", color: NAVY, border: `2px solid ${NAVY}`, borderRadius: 14, padding: "15px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Sign In
          </button>
          <div style={{ textAlign: "center", color: SLATE, fontSize: 13, marginTop: 2 }}>
            New?{" "}
            <span style={{ color: BLUE, fontWeight: 700 }}>Create your account — it's free</span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 03 Login */
function ScreenLogin() {
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column", padding: "36px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 46, height: 46, background: BLUE, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
            🏙️
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em" }}>Sawubona! 👋</div>
            <div style={{ fontSize: 12, color: SLATE }}>Welcome back to CivicFix</div>
          </div>
        </div>

        {[
          { label: "Email Address", placeholder: "thabo@email.co.za" },
          { label: "Password", placeholder: "••••••••", pw: true },
        ].map((f) => (
          <div key={f.label} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{f.label}</div>
            <div style={{ border: `2px solid ${BORDER}`, borderRadius: 12, padding: "13px 14px", fontSize: 14, color: f.pw ? SLATE : "#111827", background: OFFWHITE }}>
              {f.placeholder}
            </div>
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, marginTop: 2 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: NAVY }}>
            <div style={{ width: 18, height: 18, border: `2px solid ${GREEN}`, borderRadius: 5, background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: GREEN, fontWeight: 800 }}>✓</div>
            Remember me
          </label>
          <span style={{ fontSize: 13, color: BLUE, fontWeight: 700 }}>Forgot password?</span>
        </div>

        <button style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer", marginBottom: 16 }}>
          Sign In — Ngena
        </button>
        <div style={{ textAlign: "center", color: SLATE, fontSize: 13 }}>
          No account?{" "}
          <span style={{ color: GREEN, fontWeight: 700 }}>Register for free</span>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 04 Home Dashboard */
function ScreenHome() {
  return (
    <MobileFrame>
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        {/* Header with Ndebele strip */}
        <div style={{ background: NAVY, overflow: "hidden" }}>
          <NdebeleStripe height={8} />
          <div style={{ padding: "16px 20px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div>
                <div style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 4 }}>GAUTENG · SOUTH AFRICA</div>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>Sawubona, Thabo 👋</div>
                <div style={{ color: "#64748B", fontSize: 12, marginTop: 3 }}>Sharp sharp — let's make your community better.</div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ width: 42, height: 42, background: "#1E293B", border: `2px solid #1E3A5F`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                  🔔
                </div>
                <div style={{ position: "absolute", top: -3, right: -3, width: 10, height: 10, background: RED, borderRadius: "50%", border: "2px solid #0B1220" }} />
              </div>
            </div>

            {/* big CTA */}
            <div style={{ background: BLUE, borderRadius: 18, padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", border: `2px solid #1D4ED8` }}>
              <div>
                <div style={{ color: "#BFDBFE", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Ubona inkinga? — See something broken?</div>
                <div style={{ color: "#fff", fontSize: 17, fontWeight: 900 }}>+ Bika Manje — Report Now</div>
              </div>
              <div style={{ fontSize: 36 }}>📍</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, padding: "18px 16px", overflowY: "auto" }}>
          {/* Quick categories */}
          <div style={{ fontSize: 12, fontWeight: 800, color: NAVY, marginBottom: 12, letterSpacing: "0.08em" }}>BIKA NGOKUKHAWULEZA — QUICK REPORT</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
            {[
              { icon: "🕳️", label: "Umgodi", en: "Pothole" },
              { icon: "💧", label: "Amanzi", en: "Water Leak" },
              { icon: "💡", label: "Ukukhanya", en: "Streetlight" },
              { icon: "🏗️", label: "Okunye", en: "Other" },
            ].map((c) => (
              <div key={c.label} style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, padding: "14px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 44, height: 44, background: NAVY, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: SLATE }}>{c.en}</div>
                </div>
              </div>
            ))}
          </div>

          {/* My reports */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: NAVY, letterSpacing: "0.08em" }}>IZINGXELO ZAMI — MY REPORTS</div>
            <div style={{ fontSize: 12, color: BLUE, fontWeight: 700 }}>Buka konke →</div>
          </div>
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, background: "#FFF7ED", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, border: `2px solid ${ORANGE}22` }}>
                💧
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: NAVY }}>Amanzi Aphuthayo</div>
                <div style={{ fontSize: 12, color: SLATE }}>📍 Vilakazi St, Soweto</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
              <Badge color="orange" label="In Progress" />
              <span style={{ fontSize: 11, color: BLUE, fontWeight: 700 }}>Buka →</span>
            </div>
          </div>

          {/* Community impact — ubuntu card */}
          <div style={{ borderRadius: 18, overflow: "hidden" }}>
            <NdebeleStripe height={6} />
            <div style={{ background: NAVY, padding: "16px 18px 18px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ fontSize: 36 }}>🤝</div>
              <div>
                <div style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em" }}>UBUNTU IMPACT</div>
                <div style={{ color: "#fff", fontSize: 15, fontWeight: 800, marginTop: 3 }}>127 izinkinga zixazululiwe</div>
                <div style={{ color: "#64748B", fontSize: 11 }}>127 issues resolved this month</div>
              </div>
            </div>
          </div>
        </div>

        <BottomNav active="Ikhaya" />
      </div>
    </MobileFrame>
  );
}

/* 05 Choose Category */
function ScreenChooseCategory() {
  const cats = [
    { icon: "🕳️", zu: "Umgodi", en: "Pothole", sub: "Road damage or potholes", sel: true },
    { icon: "💧", zu: "Amanzi", en: "Water Leak", sub: "Burst pipes or leaking water" },
    { icon: "💡", zu: "Ukukhanya", en: "Streetlight", sub: "Broken or damaged lighting" },
    { icon: "🚮", zu: "Ugwalo", en: "Illegal Dumping", sub: "Waste in public spaces" },
    { icon: "🌳", zu: "Indawo", en: "Public Space", sub: "Parks, sidewalks, facilities" },
    { icon: "⚠️", zu: "Okunye", en: "Other", sub: "Something else entirely" },
  ];
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22, color: SLATE }}>←</span>
            <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em" }}>ISINYATHELO 1 OF 5</div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em", marginBottom: 4 }}>
            Yini edinga ukunakekelwa?
          </div>
          <div style={{ color: SLATE, fontSize: 13, marginBottom: 18 }}>What needs attention? Choose a category.</div>
        </div>

        <div style={{ flex: 1, padding: "0 16px", overflowY: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
            {cats.map((c) => (
              <div key={c.zu} style={{ background: c.sel ? "#EFF6FF" : "#fff", border: `2px solid ${c.sel ? BLUE : BORDER}`, borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, background: c.sel ? NAVY : OFFWHITE, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: c.sel ? BLUE : NAVY }}>{c.zu}</div>
                  <div style={{ fontSize: 12, color: SLATE }}>{c.en} · {c.sub}</div>
                </div>
                {c.sel && (
                  <div style={{ width: 24, height: 24, background: BLUE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 800 }}>
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "12px 16px 0" }}>
          <NdebeleStripe height={4} />
          <div style={{ padding: "12px 0 28px" }}>
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
              Qhubeka — Continue
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 06 Add Details */
function ScreenAddDetails() {
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22, color: SLATE }}>←</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em" }}>ISINYATHELO 2 OF 5</div>
              <div style={{ background: BORDER, borderRadius: 999, height: 4, marginTop: 4 }}>
                <div style={{ width: "40%", background: GOLD, height: "100%", borderRadius: 999 }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ background: NAVY, borderRadius: 8, padding: "5px 12px", fontSize: 13, color: GOLD, fontWeight: 800 }}>
              🕳️ Umgodi — Pothole
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em", marginBottom: 4 }}>
            Sitshele okwenzekile.
          </div>
          <div style={{ color: SLATE, fontSize: 13, marginBottom: 18 }}>Tell us what happened.</div>
        </div>

        <div style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: NAVY, marginBottom: 7 }}>Incazelo — Description</div>
            <div style={{ border: `2px solid ${BORDER}`, borderRadius: 14, padding: "12px 14px", fontSize: 14, color: "#111827", background: OFFWHITE, minHeight: 96, lineHeight: 1.5 }}>
              Umgodi omkhulu maduze nendlela eya Vilakazi Street, eduze kwe-FNB Stadium...
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: NAVY, marginBottom: 10 }}>Ubukhulu — Severity</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Incane\nLow", color: GREEN, sel: false },
                { label: "Phakathi\nMedium", color: GOLD, sel: false },
                { label: "Enkulu\nHigh", color: RED, sel: true },
              ].map((s) => (
                <div key={s.label} style={{ flex: 1, border: `2px solid ${s.sel ? s.color : BORDER}`, borderRadius: 12, padding: "10px 6px", textAlign: "center", background: s.sel ? s.color + "15" : "#fff" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: s.sel ? s.color : NAVY, lineHeight: 1.3, whiteSpace: "pre" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: NAVY, marginBottom: 10 }}>Ingozi Ekhona? — Immediate Danger?</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[["Yebo — Yes", RED, true], ["Cha — No", SLATE, false]].map(([v, c, sel]) => (
                <div key={String(v)} style={{ flex: 1, border: `2px solid ${sel ? c : BORDER}`, borderRadius: 12, padding: "12px", textAlign: "center", background: sel ? (c as string) + "15" : "#fff", fontSize: 13, fontWeight: 800, color: sel ? (c as string) : NAVY }}>
                  {v as string}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 20px 0" }}>
          <NdebeleStripe height={4} />
          <div style={{ padding: "12px 0 28px" }}>
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
              Qhubeka — Continue
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 07 Add Photo */
function ScreenAddPhoto() {
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22, color: SLATE }}>←</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em" }}>ISINYATHELO 3 OF 5</div>
              <div style={{ background: BORDER, borderRadius: 999, height: 4, marginTop: 4 }}>
                <div style={{ width: "60%", background: GOLD, height: "100%", borderRadius: 999 }} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, marginBottom: 4 }}>Faka ubufakazi.</div>
          <div style={{ color: SLATE, fontSize: 13, marginBottom: 20, lineHeight: 1.5 }}>
            Add evidence. A photo helps the municipality respond faster — <span style={{ color: NAVY, fontWeight: 700 }}>sharp sharp.</span>
          </div>
        </div>

        <div style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
          <div style={{ borderRadius: 18, overflow: "hidden", height: 200, marginBottom: 14, position: "relative", background: NAVY }}>
            <img
              src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=600&h=400&fit=crop&auto=format"
              alt="Road damage photo"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
            />
            <div style={{ position: "absolute", top: 10, right: 10, background: GREEN, borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 800, color: "#fff", display: "flex", alignItems: "center", gap: 4 }}>
              ✓ Isithombe Sengezwa
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {["📷 Phinda", "🗑 Susa"].map((a, i) => (
              <div key={a} style={{ flex: 1, border: `2px solid ${i === 1 ? RED : BORDER}`, borderRadius: 12, padding: "11px", textAlign: "center", fontSize: 13, fontWeight: 700, color: i === 1 ? RED : NAVY }}>
                {a}
              </div>
            ))}
          </div>

          <div style={{ border: `2px dashed ${GOLD}`, borderRadius: 16, padding: "24px 20px", textAlign: "center", background: "#FFFBEB" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📷</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: NAVY, marginBottom: 4 }}>Thatha Isithombe</div>
            <div style={{ fontSize: 12, color: SLATE }}>Take a Photo or Upload from Gallery</div>
          </div>
        </div>

        <div style={{ padding: "12px 20px 0" }}>
          <NdebeleStripe height={4} />
          <div style={{ padding: "12px 0 28px" }}>
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer", marginBottom: 10 }}>
              Qhubeka — Continue
            </button>
            <div style={{ textAlign: "center", color: SLATE, fontSize: 13, fontWeight: 600 }}>Yeqa okwamanje — Skip for now</div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 08 Location — Gauteng map */
function ScreenLocation() {
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "16px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 22, color: SLATE }}>←</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em" }}>ISINYATHELO 4 OF 5</div>
              <div style={{ background: BORDER, borderRadius: 999, height: 4, marginTop: 4 }}>
                <div style={{ width: "80%", background: GOLD, height: "100%", borderRadius: 999 }} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, color: NAVY, marginBottom: 2 }}>Ikuphi inkinga?</div>
          <div style={{ color: SLATE, fontSize: 12, marginBottom: 10 }}>Where is the problem? Drag the pin.</div>
        </div>

        {/* Gauteng map with JHB skyline + local area names */}
        <div style={{ flex: 1, position: "relative", minHeight: 320, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1604348489791-f95132c5d8c0?w=600&h=500&fit=crop&auto=format"
            alt="Johannesburg city skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
          />
          {/* street grid */}
          <div style={{ position: "absolute", inset: 0 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ position: "absolute", top: i*70, left: 0, right: 0, height: 1, background: "#93C5FD", opacity: 0.5 }} />
            ))}
            {[0,1,2,3,4,5].map(i => (
              <div key={i} style={{ position: "absolute", left: i*70, top: 0, bottom: 0, width: 1, background: "#93C5FD", opacity: 0.5 }} />
            ))}
          </div>
          {/* Gauteng area labels */}
          {[
            { label: "Soweto", x: 20, y: 40, c: GOLD },
            { label: "Sandton", x: 240, y: 20, c: GREEN },
            { label: "Hillbrow", x: 130, y: 70, c: RED },
            { label: "Alexandra", x: 290, y: 100, c: BLUE },
          ].map(t => (
            <div key={t.label} style={{ position: "absolute", left: t.x, top: t.y, background: t.c, color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 999, letterSpacing: "0.04em" }}>
              {t.label}
            </div>
          ))}
          {/* pin */}
          <div style={{ position: "absolute", top: "38%", left: "52%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 16, height: 36, background: RED, borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 4, boxShadow: `0 4px 12px ${RED}66` }}>
              <div style={{ width: 6, height: 6, background: "#fff", borderRadius: "50%" }} />
            </div>
            <div style={{ width: 10, height: 10, background: `${RED}44`, borderRadius: "50%", marginTop: 1 }} />
          </div>
        </div>

        <div style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "14px 20px" }}>
          <div style={{ background: OFFWHITE, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, marginBottom: 12, border: `2px solid ${BORDER}` }}>
            <span style={{ fontSize: 20 }}>📍</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>Vilakazi Street, Soweto</div>
              <div style={{ fontSize: 12, color: SLATE }}>Orlando West, Gauteng, 1804</div>
            </div>
          </div>
          <button style={{ width: "100%", background: NAVY, color: GOLD, border: "none", borderRadius: 12, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", marginBottom: 10 }}>
            🎯 Sebenzisa Indawo Yami — Use My Location
          </button>
          <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 12, padding: "13px", fontSize: 14, fontWeight: 800, cursor: "pointer", marginBottom: 16 }}>
            Qinisekisa Indawo — Confirm Location
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 09 Review */
function ScreenReview() {
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "18px 20px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22, color: SLATE }}>←</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em" }}>ISINYATHELO 5 OF 5 — Hlola</div>
              <div style={{ background: BORDER, borderRadius: 999, height: 4, marginTop: 4 }}>
                <div style={{ width: "100%", background: GREEN, height: "100%", borderRadius: 999 }} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, marginBottom: 4 }}>Hlola ingxelo yakho.</div>
          <div style={{ color: SLATE, fontSize: 13 }}>Review your report — is everything correct?</div>
        </div>

        <div style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 170, marginBottom: 16 }}>
            <img
              src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=600&h=300&fit=crop&auto=format"
              alt="Pothole"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {[
            { label: "Uhlobo — Issue", value: "🕳️ Umgodi — Pothole" },
            { label: "Incazelo — Description", value: "Umgodi omkhulu maduze nendlela eya Vilakazi St..." },
            { label: "Indawo — Location", value: "📍 Vilakazi Street, Soweto, Gauteng" },
            { label: "Ingozi — Priority", value: "🔴 Enkulu — High", red: true },
          ].map((row) => (
            <div key={row.label} style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.06em", marginBottom: 3 }}>
                {row.label.toUpperCase()}
              </div>
              <div style={{ fontSize: 14, color: row.red ? RED : NAVY, fontWeight: row.red ? 800 : 400, lineHeight: 1.4 }}>
                {row.value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "12px 20px 0" }}>
          <NdebeleStripe height={4} />
          <div style={{ padding: "12px 0 28px" }}>
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 800, cursor: "pointer", marginBottom: 10 }}>
              Thumela Ingxelo — Submit Report
            </button>
            <div style={{ textAlign: "center", color: SLATE, fontSize: 13, fontWeight: 600 }}>← Hlela — Edit</div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

/* 10 Submitted */
function ScreenSubmitted() {
  return (
    <MobileFrame>
      <NdebeleStripe height={8} />
      <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ position: "relative", marginBottom: 28 }}>
          <div style={{ position: "absolute", inset: -10, borderRadius: "50%", background: `${GREEN}22`, animation: "none" }} />
          <div style={{ width: 96, height: 96, background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, border: `4px solid ${GREEN}` }}>
            ✓
          </div>
        </div>

        <div style={{ color: GREEN, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", marginBottom: 8 }}>
          KULUNGILE! — ALL GOOD!
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Ingxelo ithunyelwe!
        </div>
        <div style={{ color: SLATE, fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
          Report submitted!
        </div>
        <div style={{ color: SLATE, fontSize: 13, lineHeight: 1.5, marginBottom: 28, maxWidth: 280 }}>
          Siyabonga ngokusiza umphakathi. Thank you for helping your community.
        </div>

        <div style={{ background: OFFWHITE, border: `2px solid ${BORDER}`, borderRadius: 18, padding: "18px 24px", width: "100%", marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.08em", marginBottom: 6 }}>INOMBOLO YENGXELO</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, letterSpacing: "0.04em", marginBottom: 10 }}>
            CF-2026-00128
          </div>
          <Badge color="blue" label="● Ithunyelwe — Submitted" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "15px", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
            Landela Ingxelo — Track My Report
          </button>
          <button style={{ width: "100%", background: "#fff", color: NAVY, border: `2px solid ${NAVY}`, borderRadius: 14, padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Buyela Ekhaya — Back to Home
          </button>
        </div>
        <div style={{ color: SLATE, fontSize: 12, marginTop: 16 }}>
          Sizokwazisa uma isimo sishintsha.
        </div>
      </div>
    </MobileFrame>
  );
}

/* 11 My Reports */
function ScreenMyReports() {
  const reports = [
    { id: "CF-2026-00128", icon: "🕳️", title: "Umgodi — Pothole", location: "Vilakazi St, Soweto", badge: "blue", status: "Submitted", date: "8 Sep" },
    { id: "CF-2026-00112", icon: "💡", title: "Ukukhanya — Streetlight", location: "Commissioner St, JHB", badge: "orange", status: "In Progress", date: "3 Sep" },
    { id: "CF-2026-00098", icon: "💧", title: "Amanzi — Water Leak", location: "Alexandra Township", badge: "green", status: "Resolved", date: "22 Aug" },
    { id: "CF-2026-00074", icon: "🚮", title: "Ugwalo — Dumping", location: "Tembisa, Ekurhuleni", badge: "gray", status: "Closed", date: "12 Aug" },
  ];
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#fff", padding: "18px 20px 14px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: GREEN, letterSpacing: "0.1em", marginBottom: 4 }}>IZINGXELO ZAMI</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, marginBottom: 12 }}>My Reports</div>
          <div style={{ background: OFFWHITE, border: `2px solid ${BORDER}`, borderRadius: 12, padding: "11px 14px", display: "flex", alignItems: "center", gap: 8, color: SLATE, fontSize: 14 }}>
            🔍 Sesha izingxelo — Search...
          </div>
        </div>

        <div style={{ background: "#fff", padding: "10px 20px", display: "flex", gap: 8, borderBottom: `1px solid ${BORDER}` }}>
          {[["Konke", "All", true], ["Ezikhona", "Active", false], ["Zixazulululiwe", "Resolved", false]].map(([zu, en, sel]) => (
            <div key={String(zu)} style={{ padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 800, background: sel ? NAVY : OFFWHITE, color: sel ? GOLD : SLATE, border: sel ? "none" : `2px solid ${BORDER}` }}>
              {zu as string}
            </div>
          ))}
        </div>

        <div style={{ flex: 1, padding: "12px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {reports.map((r) => (
            <div key={r.id} style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 46, height: 46, background: NAVY, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                {r.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{r.title}</div>
                <div style={{ fontSize: 12, color: SLATE, marginTop: 2 }}>📍 {r.location}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{r.id} · {r.date}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                <Badge color={r.badge} label={r.status} />
                <span style={{ fontSize: 11, color: BLUE, fontWeight: 700 }}>Buka →</span>
              </div>
            </div>
          ))}
        </div>

        <BottomNav active="Reports" />
      </div>
    </MobileFrame>
  );
}

/* 12 Report Tracking */
function ScreenTracking() {
  const steps = [
    { label: "Ithunyelwe — Submitted", done: true },
    { label: "Iyahlolwa — Under Review", done: true },
    { label: "Inikwe — Assigned", current: true },
    { label: "Iyaqhubeka — In Progress", done: false },
    { label: "Ixazululiwe — Resolved", done: false },
  ];
  return (
    <MobileFrame>
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        <div style={{ background: NAVY, overflow: "hidden" }}>
          <NdebeleStripe height={6} />
          <div style={{ padding: "14px 20px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ color: GOLD, fontSize: 22 }}>←</span>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>CF-2026-00128</div>
              <Badge color="amber" label="Inikwe" />
            </div>
            <div style={{ borderRadius: 14, overflow: "hidden", height: 150 }}>
              <img
                src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=600&h=300&fit=crop&auto=format"
                alt="Pothole"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "16px", marginBottom: 12, border: `2px solid ${BORDER}` }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: NAVY }}>🕳️ Umgodi — Pothole</div>
            <div style={{ fontSize: 13, color: SLATE, marginTop: 3 }}>📍 Vilakazi Street, Orlando West, Soweto</div>
          </div>

          {/* timeline */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "16px", marginBottom: 12, border: `2px solid ${BORDER}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: NAVY, letterSpacing: "0.06em" }}>INQUBO YEZINYATHELO</div>
              <div style={{ fontSize: 11, color: SLATE }}>Progress</div>
            </div>
            {steps.map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: s.done ? GREEN : s.current ? BLUE : BORDER, color: (s.done || s.current) ? "#fff" : SLATE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, flexShrink: 0, boxShadow: s.current ? `0 0 0 3px #DBEAFE` : "none" }}>
                    {s.done ? "✓" : "●"}
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 2, height: 28, background: s.done ? GREEN : BORDER }} />}
                </div>
                <div style={{ paddingTop: 2, paddingBottom: i < steps.length - 1 ? 16 : 0 }}>
                  <div style={{ fontSize: 12, fontWeight: s.current ? 800 : 500, color: s.done ? GREEN : s.current ? BLUE : SLATE }}>{s.label}</div>
                  {s.current && <div style={{ fontSize: 11, color: SLATE, marginTop: 2 }}>Ithimba lezilungisi zinikwe leli cala.</div>}
                </div>
              </div>
            ))}
          </div>

          {/* community confirmation */}
          <div style={{ borderRadius: 16, overflow: "hidden", border: `2px solid ${BORDER}` }}>
            <NdebeleStripe height={5} />
            <div style={{ background: "#fff", padding: "14px 16px" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: NAVY, marginBottom: 6, letterSpacing: "0.06em" }}>UBUNTU — COMMUNITY CONFIRMATION</div>
              <div style={{ fontSize: 13, color: SLATE, marginBottom: 12 }}>Naye uyakubona? — Do you also see this problem?</div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#EFF6FF", border: `2px solid ${BLUE}`, borderRadius: 12, padding: "11px", textAlign: "center", fontSize: 13, fontWeight: 800, color: BLUE }}>
                  👍 Nami ngiyakubona
                </div>
                <div style={{ flex: 1, background: OFFWHITE, border: `2px solid ${BORDER}`, borderRadius: 12, padding: "11px", textAlign: "center", fontSize: 13, fontWeight: 800, color: SLATE }}>
                  👎 Akusekho
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomNav active="Reports" />
      </div>
    </MobileFrame>
  );
}

/* 13 Community Map — Gauteng */
function ScreenMap() {
  const areas = [
    { x: 30, y: 70, c: RED, icon: "🕳️" },
    { x: 160, y: 120, c: ORANGE, icon: "💧" },
    { x: 290, y: 60, c: GOLD, icon: "💡" },
    { x: 110, y: 200, c: BLUE, icon: "🚮" },
    { x: 250, y: 210, c: RED, icon: "🕳️" },
    { x: 70, y: 290, c: ORANGE, icon: "💧" },
  ];
  return (
    <MobileFrame>
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#fff", overflow: "hidden" }}>
          <NdebeleStripe height={6} />
          <div style={{ padding: "14px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: GREEN, letterSpacing: "0.08em" }}>GAUTENG · ZA</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: NAVY }}>Izinkinga Eduze Nawe</div>
            </div>
            <div style={{ background: NAVY, borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 800, color: GOLD, display: "flex", alignItems: "center", gap: 4 }}>
              ⚙️ Hlunga
            </div>
          </div>
        </div>

        {/* Gauteng-flavored map */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: 400 }}>
          <img
            src="https://images.unsplash.com/photo-1636706519609-988babca3dd5?w=600&h=600&fit=crop&auto=format"
            alt="Johannesburg Gauteng cityscape"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.42 }}
          />
          {/* grid */}
          <div style={{ position: "absolute", inset: 0 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ position: "absolute", top: i*80, left: 0, right: 0, height: 1, background: "#93C5FD", opacity: 0.45 }} />
            ))}
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ position: "absolute", left: i*80, top: 0, bottom: 0, width: 1, background: "#93C5FD", opacity: 0.45 }} />
            ))}
          </div>
          {/* Gauteng street labels */}
          {[
            { label: "Vilakazi St", x: 20, y: 170, c: GOLD },
            { label: "Jan Smuts Ave", x: 190, y: 50, c: GREEN },
            { label: "Louis Botha", x: 60, y: 120, c: BLUE },
          ].map(t => (
            <div key={t.label} style={{ position: "absolute", left: t.x, top: t.y, background: t.c, color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 6px", borderRadius: 999, letterSpacing: "0.03em" }}>
              {t.label}
            </div>
          ))}
          {areas.map((m, i) => (
            <div key={i} style={{ position: "absolute", left: m.x, top: m.y, width: 34, height: 34, background: m.c, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, boxShadow: `0 2px 8px ${m.c}66`, border: "2px solid #fff" }}>
              {m.icon}
            </div>
          ))}
          {/* legend */}
          <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.94)", borderRadius: 12, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
            {[{ c: RED, label: "Iphuthuma" }, { c: ORANGE, label: "Ephezulu" }, { c: GOLD, label: "Phakathi" }, { c: BLUE, label: "Phansi" }].map(l => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, color: NAVY }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.c }} />
                {l.label}
              </div>
            ))}
          </div>

          {/* bottom sheet */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: "14px 20px 20px", boxShadow: "0 -4px 20px rgba(0,0,0,0.12)" }}>
            <NdebeleDiamonds />
            <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 900, color: NAVY, marginBottom: 2 }}>🕳️ Umgodi — Pothole</div>
                <div style={{ fontSize: 12, color: SLATE }}>📍 Vilakazi Street, Orlando West, Soweto</div>
                <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>👥 23 abahlali baqinisekisa</div>
              </div>
              <Badge color="red" label="High" />
            </div>
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 12, padding: "13px", fontSize: 14, fontWeight: 800, cursor: "pointer", marginTop: 14 }}>
              Buka Ingxelo — View Report →
            </button>
          </div>
        </div>

        <BottomNav active="Mapa" />
      </div>
    </MobileFrame>
  );
}

/* 14 Notifications */
function ScreenNotifications() {
  const notifs = [
    { icon: "🔧", color: BLUE, title: "Ingxelo ibuyekeziwe", en: "Your pothole report has been assigned.", time: "10 amaminiti adlule", unread: true },
    { icon: "✅", color: GREEN, title: "Inkinga ixazululiwe", en: "The streetlight on Jan Smuts Ave is resolved.", time: "Izolo", unread: false },
    { icon: "📢", color: GOLD, title: "Ubuntu update", en: "12 residents confirmed your water leak report.", time: "Izinsuku ezimbili", unread: false },
  ];
  return (
    <MobileFrame>
      <NdebeleStripe height={6} />
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#fff", padding: "18px 20px 14px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: GREEN, letterSpacing: "0.1em", marginBottom: 4 }}>IZAZISO</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY }}>Notifications</div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {notifs.map((n, i) => (
            <div key={i} style={{ background: n.unread ? "#EFF6FF" : "#fff", border: `2px solid ${n.unread ? "#BFDBFE" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
              {n.unread && <NdebeleStripe height={4} />}
              <div style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, borderRadius: 13, background: n.color + "25", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {n.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{n.title}</div>
                    {n.unread && <div style={{ width: 8, height: 8, background: BLUE, borderRadius: "50%", flexShrink: 0, marginTop: 3 }} />}
                  </div>
                  <div style={{ fontSize: 13, color: SLATE, lineHeight: 1.4, marginBottom: 3 }}>{n.en}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>{n.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav active="Alerts" />
      </div>
    </MobileFrame>
  );
}

/* 15 Profile */
function ScreenProfile() {
  const items = [
    { icon: "📋", label: "Izingxelo Zami", en: "My Reports", sub: "12 izingxelo" },
    { icon: "🔔", label: "Izaziso", en: "Notifications", sub: "3 azifundwanga" },
    { icon: "📍", label: "Izindawo Ezilondoloziwe", en: "Saved Locations", sub: "2 izindawo" },
    { icon: "🔐", label: "Ukuphepha", en: "Privacy & Security" },
    { icon: "❓", label: "Usizo", en: "Help & Support" },
    { icon: "ℹ️", label: "Mayelana ne-CivicFix", en: "About CivicFix" },
  ];
  return (
    <MobileFrame>
      <div style={{ flex: 1, background: OFFWHITE, display: "flex", flexDirection: "column" }}>
        {/* SA-flag-inspired header */}
        <div style={{ background: NAVY, overflow: "hidden" }}>
          <NdebeleStripe height={10} />
          <div style={{ padding: "22px 20px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ width: 76, height: 76, background: "#1E3A5F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, border: `3px solid ${GOLD}` }}>
              👤
            </div>
            <div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 900, textAlign: "center" }}>Thabo Molefe</div>
              <div style={{ color: GOLD, fontSize: 11, textAlign: "center", fontWeight: 700, marginTop: 2, letterSpacing: "0.06em" }}>UMHLALI — RESIDENT · SOWETO, GAUTENG</div>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 4 }}>
              {[{ n: "12", z: "Izingxelo" }, { n: "9", z: "Zixazulul." }, { n: "23", z: "Qinisekisa" }].map(s => (
                <div key={s.z} style={{ textAlign: "center" }}>
                  <div style={{ color: GOLD, fontSize: 20, fontWeight: 900 }}>{s.n}</div>
                  <div style={{ color: "#64748B", fontSize: 10, fontWeight: 600 }}>{s.z}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1, padding: "14px", overflowY: "auto" }}>
          <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `2px solid ${BORDER}`, marginBottom: 12 }}>
            {items.map((it, i) => (
              <div key={it.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: i < items.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ width: 40, height: 40, background: NAVY, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {it.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{it.label}</div>
                  <div style={{ fontSize: 11, color: SLATE }}>{"sub" in it ? it.sub : it.en}</div>
                </div>
                <span style={{ color: SLATE, fontSize: 18 }}>›</span>
              </div>
            ))}
          </div>

          <button style={{ width: "100%", background: "#FEF2F2", color: RED, border: `2px solid #FEE2E2`, borderRadius: 14, padding: "14px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
            Phuma — Sign Out
          </button>
        </div>

        <BottomNav active="Profile" />
      </div>
    </MobileFrame>
  );
}

/* ══════════════════════════════════════════════════════════
   ADMIN SCREENS — DESKTOP
════════════════════════════════════════════════════════════ */

function AdminSidebar({ active }: { active: string }) {
  const items = [
    { icon: "⊞", label: "Dashboard" },
    { icon: "📋", label: "Reports" },
    { icon: "🗺", label: "Map" },
    { icon: "👥", label: "Assignments" },
    { icon: "📊", label: "Analytics" },
    { icon: "👤", label: "Residents" },
    { icon: "🔔", label: "Notifications" },
  ];
  return (
    <div style={{ width: 220, background: NAVY, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      {/* Ndebele top */}
      <div style={{ overflow: "hidden" }}>
        <NdebeleStripe height={8} />
        <div style={{ padding: "20px 18px 18px", borderBottom: "1px solid #1E293B", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: BLUE, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏙️</div>
          <div>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 900 }}>CivicFix</div>
            <div style={{ color: GOLD, fontSize: 9, fontWeight: 800, letterSpacing: "0.08em" }}>ADMIN PORTAL</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "10px 8px" }}>
        {items.map((it) => (
          <div key={it.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, marginBottom: 2, background: it.label === active ? "#1E3A5F" : "transparent", cursor: "pointer", borderLeft: it.label === active ? `3px solid ${GOLD}` : "3px solid transparent" }}>
            <span style={{ fontSize: 16 }}>{it.icon}</span>
            <span style={{ fontSize: 13, fontWeight: it.label === active ? 800 : 500, color: it.label === active ? "#fff" : "#64748B" }}>
              {it.label}
            </span>
            {it.label === "Notifications" && (
              <div style={{ marginLeft: "auto", background: RED, color: "#fff", borderRadius: 999, width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>4</div>
            )}
          </div>
        ))}
      </div>

      <div style={{ overflow: "hidden" }}>
        <div style={{ padding: "10px 8px 0", borderTop: "1px solid #1E293B" }}>
          {["Settings", "Help"].map((l) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer" }}>
              <span style={{ fontSize: 14 }}>{l === "Settings" ? "⚙️" : "❓"}</span>
              <span style={{ fontSize: 13, color: "#64748B" }}>{l}</span>
            </div>
          ))}
        </div>
        <NdebeleStripe height={6} />
      </div>
    </div>
  );
}

function AdminFrame({ children, active = "Dashboard" }: { children: React.ReactNode; active?: string }) {
  return (
    <div style={{ width: 1200, height: 800, background: OFFWHITE, fontFamily: "'Inter', sans-serif", display: "flex", overflow: "hidden" }}>
      <AdminSidebar active={active} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function AdminTopBar({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, overflow: "hidden" }}>
      <NdebeleStripe height={4} />
      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em" }}>{title}</div>
          <div style={{ fontSize: 12, color: SLATE, marginTop: 1 }}>{sub}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: OFFWHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", fontSize: 13, color: SLATE, display: "flex", alignItems: "center", gap: 6 }}>
            🔍 Sesha — Search...
          </div>
          <div style={{ width: 36, height: 36, background: NAVY, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, position: "relative" }}>
            <span>🔔</span>
            <div style={{ position: "absolute", top: 6, right: 6, width: 7, height: 7, background: RED, borderRadius: "50%" }} />
          </div>
          <div style={{ width: 36, height: 36, background: BLUE, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 900 }}>A</div>
        </div>
      </div>
    </div>
  );
}

/* Admin Login */
function ScreenAdminLogin() {
  return (
    <div style={{ width: 1200, height: 800, fontFamily: "'Inter', sans-serif", background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* JHB skyline bg */}
      <img
        src="https://images.unsplash.com/photo-1771143345689-f30959718edf?w=1200&h=800&fit=crop&auto=format"
        alt="Johannesburg city at sunset"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
      />
      {/* Ndebele stripes top + bottom */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><NdebeleStripe height={12} /></div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><NdebeleStripe height={12} /></div>

      <div style={{ background: "#fff", borderRadius: 22, padding: "44px 48px", width: 440, boxShadow: "0 24px 80px rgba(0,0,0,0.5)", position: "relative", zIndex: 1, overflow: "hidden" }}>
        <NdebeleStripe height={6} />
        <div style={{ paddingTop: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 46, height: 46, background: BLUE, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏙️</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: NAVY }}>CivicFix</div>
              <div style={{ color: GOLD, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em" }}>UHLELO LOKUPHATHA — ADMIN PORTAL</div>
            </div>
          </div>

          <div style={{ fontSize: 22, fontWeight: 900, color: NAVY, marginBottom: 4 }}>Ngena — Sign In</div>
          <div style={{ color: SLATE, fontSize: 13, marginBottom: 26 }}>Abasebenzi abagunyaziwe basifundazwe kuphela. Authorised municipal personnel only.</div>

          {[
            { label: "Email Address", placeholder: "admin@gauteng.gov.za" },
            { label: "Password", placeholder: "••••••••••" },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: NAVY, marginBottom: 6 }}>{f.label}</div>
              <div style={{ border: `2px solid ${BORDER}`, borderRadius: 12, padding: "13px 14px", fontSize: 14, color: f.placeholder.startsWith("•") ? SLATE : "#111827", background: OFFWHITE }}>
                {f.placeholder}
              </div>
            </div>
          ))}

          <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 14, padding: "15px", fontSize: 15, fontWeight: 900, cursor: "pointer", marginTop: 8, marginBottom: 18 }}>
            Ngena — Sign In
          </button>

          <div style={{ background: "#FFFBEB", border: "2px solid #FDE68A", borderRadius: 12, padding: "10px 14px", display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <div style={{ fontSize: 12, color: "#78350F", lineHeight: 1.5 }}>
              Leli portal linezikhali zempi. Ukungena ngaphandle kwemvume kungomlawulo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Admin Dashboard */
function ScreenAdminDashboard() {
  const stats = [
    { label: "Izingxelo Zonke", en: "Total Reports", val: "1,284", sub: "↑ 12% le nyanga", color: BLUE, icon: "📋" },
    { label: "Ihlolwa", en: "Pending Review", val: "86", sub: "Ilindele ukuphathwa", color: GOLD, icon: "⏳" },
    { label: "Iyaqhubeka", en: "In Progress", val: "143", sub: "Iyaxazululwa", color: ORANGE, icon: "🔧" },
    { label: "Ixazululiwe", en: "Resolved", val: "1,055", sub: "82% isiphelo", color: GREEN, icon: "✅" },
  ];
  const queue = [
    { id: "CF-2026-00131", icon: "💧", type: "Amanzi — Water Leak", loc: "Soweto, Orlando", pri: "Critical", age: "3h", status: "Review" },
    { id: "CF-2026-00128", icon: "🕳️", type: "Umgodi — Pothole", loc: "Sandton, Rivonia Rd", pri: "High", age: "2d", status: "Assigned" },
    { id: "CF-2026-00119", icon: "💡", type: "Ukukhanya — Streetlight", loc: "Alexandra Township", pri: "Medium", age: "4d", status: "Review" },
    { id: "CF-2026-00115", icon: "🚮", type: "Ugwalo — Dumping", loc: "Tembisa, Ekurhuleni", pri: "High", age: "5d", status: "In Progress" },
  ];
  const priColors: Record<string, string> = { Critical: RED, High: ORANGE, Medium: GOLD, Low: GREEN };
  return (
    <AdminFrame active="Dashboard">
      <AdminTopBar title="Sawubona, Admin 👋 — Good morning!" sub="Nansi into eyenzeka e-Gauteng. Here's what's happening in your municipality." />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        {/* stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 22 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ height: 4, background: s.color }} />
              <div style={{ padding: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ fontSize: 20 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
                <div style={{ fontSize: 30, fontWeight: 900, color: NAVY, letterSpacing: "-0.03em" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: SLATE, marginTop: 2 }}>{s.en}</div>
                <div style={{ fontSize: 12, color: s.color, fontWeight: 700, marginTop: 6 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* priority queue */}
        <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ padding: "0 0 0 0" }}>
            <NdebeleStripe height={5} />
            <div style={{ padding: "14px 20px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 900, color: NAVY }}>Kudingeka Ukunakwa — Needs Attention</div>
                <div style={{ fontSize: 12, color: SLATE, marginTop: 2 }}>Priority queue — highest urgency first</div>
              </div>
              <span style={{ fontSize: 13, color: BLUE, fontWeight: 800 }}>Buka Konke →</span>
            </div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: OFFWHITE }}>
                {["Inombolo", "Uhlobo", "Indawo", "Ingozi", "Iminyaka", "Isimo", "Isenzo"].map((h) => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.06em", borderBottom: `1px solid ${BORDER}` }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queue.map((r, i) => (
                <tr key={r.id} style={{ borderBottom: i < queue.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                  <td style={{ padding: "12px 16px", fontSize: 12, fontWeight: 800, color: BLUE }}>{r.id}</td>
                  <td style={{ padding: "12px 16px", fontSize: 13, color: NAVY, fontWeight: 600 }}>{r.icon} {r.type}</td>
                  <td style={{ padding: "12px 16px", fontSize: 12, color: SLATE }}>📍 {r.loc}</td>
                  <td style={{ padding: "12px 16px" }}><span style={{ color: priColors[r.pri], fontSize: 12, fontWeight: 800 }}>● {r.pri}</span></td>
                  <td style={{ padding: "12px 16px", fontSize: 13, color: SLATE }}>{r.age}</td>
                  <td style={{ padding: "12px 16px" }}><Badge color={r.status === "Review" ? "purple" : r.status === "Assigned" ? "amber" : "orange"} label={r.status} /></td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ background: BLUE, color: "#fff", fontSize: 11, fontWeight: 800, padding: "5px 12px", borderRadius: 7, cursor: "pointer" }}>Hlola</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "18px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 14 }}>Izingxelo Ngezinhlobo</div>
              {[
                { label: "Umgodi — Potholes", val: 142, pct: 80, color: RED },
                { label: "Amanzi — Water Leaks", val: 89, pct: 50, color: BLUE },
                { label: "Ukukhanya — Streetlights", val: 67, pct: 38, color: GOLD },
                { label: "Ugwalo — Dumping", val: 44, pct: 25, color: ORANGE },
              ].map((c) => (
                <div key={c.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: NAVY, fontWeight: 600 }}>{c.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 800, color: SLATE }}>{c.val}</span>
                  </div>
                  <div style={{ background: BORDER, borderRadius: 999, height: 7 }}>
                    <div style={{ width: `${c.pct}%`, background: c.color, height: "100%", borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "18px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 14 }}>Imisebenzi Yakamuva — Recent Activity</div>
              {[
                { icon: "🔴", text: "Amanzi aphuthayo abikwa e-Soweto, Orlando West.", time: "2 amaminiti adlule" },
                { icon: "🟠", text: "Abahlali abayi-18 baqinisekisa umgodi ku-Vilakazi St.", time: "20 amaminiti" },
                { icon: "✅", text: "Ithimba lixazulule CF-2026-00092 — Sandton CBD.", time: "1 hora" },
                { icon: "🔵", text: "Ingxelo entsha yamadwala — Alexandra, Louis Botha.", time: "2 amahora" },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, color: NAVY, lineHeight: 1.4, fontWeight: 600 }}>{a.text}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Reports */
function ScreenAdminReports() {
  const rows = [
    { id: "CF-2026-00131", cat: "💧 Amanzi", loc: "Soweto, Orlando West", pri: "Critical", date: "10 Sep", status: "Under Review" },
    { id: "CF-2026-00128", cat: "🕳️ Umgodi", loc: "Sandton, Rivonia Rd", pri: "High", date: "8 Sep", status: "Assigned" },
    { id: "CF-2026-00119", cat: "💡 Ukukhanya", loc: "Alexandra Township", pri: "Medium", date: "6 Sep", status: "Under Review" },
    { id: "CF-2026-00115", cat: "🚮 Ugwalo", loc: "Tembisa, Ekurhuleni", pri: "High", date: "5 Sep", status: "In Progress" },
    { id: "CF-2026-00110", cat: "🌳 Indawo", loc: "Diepsloot Park, JHB N", pri: "Low", date: "4 Sep", status: "Submitted" },
    { id: "CF-2026-00098", cat: "💧 Amanzi", loc: "Mamelodi, Tshwane", pri: "Medium", date: "22 Aug", status: "Resolved" },
    { id: "CF-2026-00092", cat: "🕳️ Umgodi", loc: "Soshanguve, Block F", pri: "High", date: "18 Aug", status: "Resolved" },
  ];
  const statusColor: Record<string, string> = { "Submitted": "blue", "Under Review": "purple", "Assigned": "amber", "In Progress": "orange", "Resolved": "green" };
  const priColors: Record<string, string> = { Critical: RED, High: ORANGE, Medium: GOLD, Low: GREEN };
  return (
    <AdminFrame active="Reports">
      <AdminTopBar title="Izingxelo Zemisebenzi — Infrastructure Reports" sub="Izingxelo zonke zemiphakathi e-Gauteng." />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 14, padding: "12px 14px", display: "flex", gap: 10, marginBottom: 14, alignItems: "center" }}>
          <div style={{ flex: 1, background: OFFWHITE, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "9px 12px", fontSize: 13, color: SLATE, display: "flex", alignItems: "center", gap: 6 }}>
            🔍 Sesha ngenombolo, indawo...
          </div>
          {["Uhlobo", "Ingozi", "Isimo", "Usuku", "Indawo"].map((f) => (
            <div key={f} style={{ background: OFFWHITE, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "8px 14px", fontSize: 12, fontWeight: 800, color: NAVY, cursor: "pointer" }}>
              {f} ▾
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
          <NdebeleStripe height={5} />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: OFFWHITE, borderBottom: `1px solid ${BORDER}` }}>
                {["Inombolo", "Uhlobo", "Indawo", "Ingozi", "Usuku", "Isimo", "Isenzo"].map((h) => (
                  <th key={h} style={{ padding: "11px 16px", textAlign: "left", fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.06em" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${BORDER}` : "none", background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}>
                  <td style={{ padding: "13px 16px", fontSize: 12, fontWeight: 800, color: BLUE }}>{r.id}</td>
                  <td style={{ padding: "13px 16px", fontSize: 13, color: NAVY, fontWeight: 600 }}>{r.cat}</td>
                  <td style={{ padding: "13px 16px", fontSize: 12, color: SLATE }}>📍 {r.loc}</td>
                  <td style={{ padding: "13px 16px" }}><span style={{ color: priColors[r.pri], fontSize: 12, fontWeight: 800 }}>● {r.pri}</span></td>
                  <td style={{ padding: "13px 16px", fontSize: 12, color: SLATE }}>{r.date}</td>
                  <td style={{ padding: "13px 16px" }}><Badge color={statusColor[r.status] ?? "gray"} label={r.status} /></td>
                  <td style={{ padding: "13px 16px" }}><span style={{ background: OFFWHITE, border: `1px solid ${BORDER}`, color: NAVY, fontSize: 11, fontWeight: 800, padding: "5px 12px", borderRadius: 7, cursor: "pointer" }}>Buka</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Report Detail + Smart Priority */
function ScreenAdminReportDetail() {
  return (
    <AdminFrame active="Reports">
      <AdminTopBar title="CF-2026-00128 — Umgodi e-Sandton" sub="Ithunyelwe ngo-8 September 2026 · Rivonia Road, Sandton, Gauteng" />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {/* left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 210 }}>
            <img
              src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=700&h=400&fit=crop&auto=format"
              alt="Road damage"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "14px" }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: NAVY, marginBottom: 10, letterSpacing: "0.06em" }}>IMINININGWANE — DETAILS</div>
              {[
                { label: "Uhlobo", val: "🕳️ Umgodi — Pothole" },
                { label: "Indawo", val: "📍 Rivonia Road, Sandton, Gauteng" },
                { label: "Inzima", val: "🔴 Enkulu — High · Ingozi: Yebo" },
                { label: "Ubikile", val: "Sipho Nkosi — resident" },
                { label: "Usuku", val: "8 September 2026" },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 12, color: SLATE, minWidth: 90 }}>{r.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, textAlign: "right" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, padding: "14px" }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: NAVY, marginBottom: 8, letterSpacing: "0.06em" }}>INCAZELO</div>
            <div style={{ fontSize: 13, color: SLATE, lineHeight: 1.6 }}>
              Umgodi omkhulu cishe wamitha ayi-1 eduze nombhoshongo waseRivonia Road. Ujule cishe nge-15cm futhi udale umonakalo omkhulu ezimoteni. Izimoto eziningi zike zahlaselwa.
            </div>
          </div>
        </div>

        {/* right */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "14px" }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: NAVY, marginBottom: 12, letterSpacing: "0.06em" }}>UBUNTU COMMUNITY INTELLIGENCE</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[{ icon: "👥", val: "23", label: "Baqinisekisa" }, { icon: "📍", val: "4", label: "Eduze" }, { icon: "⏱️", val: "2d", label: "Ikhona" }].map((s) => (
                  <div key={s.label} style={{ background: OFFWHITE, borderRadius: 12, padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: NAVY }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: SLATE, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* smart priority */}
          <div style={{ background: "#FEF2F2", border: `2px solid #FCA5A5`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={5} />
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: NAVY }}>🤖 ISINCOMO ESIHLAKANIPHILE — SMART PRIORITY</div>
                <Badge color="red" label="Inkulu — HIGH" />
              </div>
              <div style={{ fontSize: 12, color: SLATE, marginBottom: 10, fontWeight: 600 }}>Kungani le nqopho? — Why this priority?</div>
              {[
                "Izinga eliphezulu lokungalungeli lomshayeleli",
                "Abahlali abayi-23 baqinisekisa inkinga",
                "Eduze komgwaqo omkhulu — Rivonia Road",
                "Iziinsuku ezimbili ingaxazulululwanga",
                "Izingxelo ezi-4 ezifanayo eduze",
              ].map((r) => (
                <div key={r} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                  <span style={{ color: RED, fontSize: 12, fontWeight: 800, flexShrink: 0 }}>+</span>
                  <span style={{ fontSize: 12, color: "#374151" }}>{r}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button style={{ flex: 1, background: RED, color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
                  Yamukela — Accept
                </button>
                <button style={{ flex: 1, background: "#fff", color: NAVY, border: `2px solid ${BORDER}`, borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Shintsha — Change
                </button>
              </div>
            </div>
          </div>

          {/* assign */}
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "14px" }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: NAVY, marginBottom: 12, letterSpacing: "0.06em" }}>NIKEZA ITHIMBA — ASSIGN TEAM</div>
              {[
                { label: "ISifunda", val: "Road Maintenance · Gauteng" },
                { label: "Ithimba", val: "Road Team A — Johannesburg" },
                { label: "Umsebenzi", val: "Thabo Molefe" },
                { label: "Isikhathi", val: "12 September 2026" },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 8, borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ fontSize: 12, color: SLATE }}>{r.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, background: OFFWHITE, padding: "3px 10px", borderRadius: 6, border: `1px solid ${BORDER}` }}>{r.val} ▾</span>
                </div>
              ))}
              <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 10, padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", marginTop: 4 }}>
                Nikeza Inkinga — Assign Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Analytics */
function ScreenAdminAnalytics() {
  const barData = [
    { label: "Jan", val: 48 }, { label: "Feb", val: 62 }, { label: "Mar", val: 55 },
    { label: "Apr", val: 78 }, { label: "May", val: 91 }, { label: "Jun", val: 70 },
    { label: "Jul", val: 85 }, { label: "Aug", val: 95 }, { label: "Sep", val: 52 },
  ];
  const maxVal = Math.max(...barData.map((d) => d.val));
  return (
    <AdminFrame active="Analytics">
      <AdminTopBar title="Ulwazi Lwemisebenzi — Infrastructure Intelligence" sub="Izinhlelo zemisebenzi e-Gauteng · September 2026" />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
          {[
            { label: "Izingxelo Zenyanga", val: "342", sub: "↑ 18% kune-August", color: BLUE },
            { label: "Isikhathi Sexazululo", val: "3.4 izinsuku", sub: "↓ 0.8 okwenziwe ngcono", color: GREEN },
            { label: "Uhlobo Oluphezulu", val: "Umgodi", sub: "41% yazo zonke", color: RED },
            { label: "Indawo Ephezulu", val: "Soweto", sub: "67 izingxelo nyanga", color: GOLD },
          ].map((k) => (
            <div key={k.label} style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ height: 4, background: k.color }} />
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.06em", marginBottom: 8 }}>{k.label.toUpperCase()}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em", marginBottom: 3 }}>{k.val}</div>
                <div style={{ fontSize: 12, color: k.color, fontWeight: 700 }}>{k.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "18px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 3 }}>Izingxelo Ngokuya Kwesikhathi</div>
              <div style={{ fontSize: 12, color: SLATE, marginBottom: 18 }}>Reports Over Time — Jan – Sep 2026</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 130 }}>
                {barData.map((d) => (
                  <div key={d.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: d.label === "Sep" ? NAVY : SLATE }}>{d.val}</div>
                    <div style={{ width: "100%", height: (d.val / maxVal) * 100, background: d.label === "Sep" ? BLUE : "#DBEAFE", borderRadius: "5px 5px 0 0" }} />
                    <div style={{ fontSize: 10, color: SLATE, fontWeight: 600 }}>{d.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <NdebeleStripe height={4} />
            <div style={{ padding: "18px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 16 }}>Izingxelo Ngezinhlobo — By Category</div>
              {[
                { label: "🕳️ Umgodi — Potholes", val: 142, pct: 41, color: RED },
                { label: "💧 Amanzi — Water Leaks", val: 89, pct: 26, color: BLUE },
                { label: "💡 Ukukhanya — Streetlights", val: 67, pct: 20, color: GOLD },
                { label: "🚮 Ugwalo — Dumping", val: 28, pct: 8, color: ORANGE },
                { label: "🌳 Indawo — Public Space", val: 16, pct: 5, color: GREEN },
              ].map((c) => (
                <div key={c.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: NAVY, fontWeight: 600 }}>{c.label}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: NAVY }}>{c.val}</span>
                      <span style={{ fontSize: 11, color: SLATE, width: 28, textAlign: "right" }}>{c.pct}%</span>
                    </div>
                  </div>
                  <div style={{ background: BORDER, borderRadius: 999, height: 7 }}>
                    <div style={{ width: `${c.pct * 2.4}%`, background: c.color, height: "100%", borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gauteng areas bar chart */}
        <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
          <NdebeleStripe height={5} />
          <div style={{ padding: "18px" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 3 }}>Izinkinga Ngendawo — Issues by Gauteng Area</div>
            <div style={{ fontSize: 12, color: SLATE, marginBottom: 18 }}>Izindawo eziphezulu e-Gauteng</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 110 }}>
              {[
                { area: "Soweto", val: 67, color: RED },
                { area: "Sandton", val: 54, color: ORANGE },
                { area: "Alexandra", val: 48, color: GOLD },
                { area: "Tembisa", val: 43, color: BLUE },
                { area: "Mamelodi", val: 38, color: PURPLE },
                { area: "Soshanguve", val: 29, color: GREEN },
                { area: "Diepsloot", val: 22, color: SLATE },
              ].map((a) => (
                <div key={a.area} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: NAVY }}>{a.val}</div>
                  <div style={{ width: "100%", height: (a.val / 67) * 78, background: a.color, borderRadius: "5px 5px 0 0", opacity: 0.88 }} />
                  <div style={{ fontSize: 10, color: SLATE, textAlign: "center", fontWeight: 600 }}>{a.area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Residents */
function ScreenAdminResidents() {
  const rows = [
    { name: "Thabo Molefe", loc: "Soweto, Gauteng", reports: 12, resolved: 9, last: "10 Sep 2026", status: "Active" },
    { name: "Amahle Dube", loc: "Alexandra, JHB", reports: 8, resolved: 6, last: "9 Sep 2026", status: "Active" },
    { name: "Sipho Nkosi", loc: "Tembisa, Ekurhuleni", reports: 15, resolved: 14, last: "7 Sep 2026", status: "Active" },
    { name: "Fatima Petersen", loc: "Sandton, JHB", reports: 4, resolved: 2, last: "2 Sep 2026", status: "Active" },
    { name: "Lungelo Zulu", loc: "Mamelodi, Tshwane", reports: 7, resolved: 5, last: "28 Aug 2026", status: "Inactive" },
    { name: "Sarah van der Merwe", loc: "Diepsloot, JHB N", reports: 3, resolved: 3, last: "20 Aug 2026", status: "Active" },
  ];
  return (
    <AdminFrame active="Residents">
      <AdminTopBar title="Abahlali — Residents" sub="Abahlali abaregistiwe nezingxelo zabo e-Gauteng." />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1, background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 12, padding: "10px 14px", fontSize: 13, color: SLATE, display: "flex", alignItems: "center", gap: 6 }}>
            🔍 Sesha abahlali — Search residents...
          </div>
          <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 12, padding: "10px 16px", fontSize: 12, fontWeight: 800, color: NAVY, cursor: "pointer" }}>
            Isimo ▾
          </div>
        </div>

        <div style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
          <NdebeleStripe height={5} />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: OFFWHITE, borderBottom: `1px solid ${BORDER}` }}>
                {["Umhlali", "Indawo", "Izingxelo", "Ixazulul.", "Unyaka Wokugcina", "Isimo"].map((h) => (
                  <th key={h} style={{ padding: "11px 16px", textAlign: "left", fontSize: 11, fontWeight: 800, color: SLATE, letterSpacing: "0.06em" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, background: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 13, fontWeight: 900, flexShrink: 0 }}>
                        {r.name[0]}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{r.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "13px 16px", fontSize: 12, color: SLATE }}>📍 {r.loc}</td>
                  <td style={{ padding: "13px 16px", fontSize: 14, fontWeight: 900, color: NAVY, textAlign: "center" }}>{r.reports}</td>
                  <td style={{ padding: "13px 16px", fontSize: 14, color: GREEN, fontWeight: 900, textAlign: "center" }}>{r.resolved}</td>
                  <td style={{ padding: "13px 16px", fontSize: 12, color: SLATE }}>{r.last}</td>
                  <td style={{ padding: "13px 16px" }}><Badge color={r.status === "Active" ? "green" : "gray"} label={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Map */
function ScreenAdminMap() {
  const markers = [
    { x: 120, y: 80, c: RED, icon: "💧", size: 42 },
    { x: 280, y: 140, c: RED, icon: "🕳️", size: 38 },
    { x: 480, y: 100, c: ORANGE, icon: "🕳️", size: 34 },
    { x: 340, y: 240, c: GOLD, icon: "💡", size: 30 },
    { x: 600, y: 180, c: GOLD, icon: "🚮", size: 28 },
    { x: 180, y: 300, c: ORANGE, icon: "🕳️", size: 36 },
    { x: 500, y: 300, c: GREEN, icon: "🌳", size: 26 },
    { x: 680, y: 280, c: BLUE, icon: "💡", size: 24 },
  ];
  const gautengAreas = [
    { label: "Soweto", x: 90, y: 240, c: RED },
    { label: "Sandton", x: 370, y: 50, c: GREEN },
    { label: "Alexandra", x: 500, y: 210, c: GOLD },
    { label: "Tembisa", x: 650, y: 120, c: BLUE },
    { label: "Johannesburg CBD", x: 220, y: 180, c: ORANGE },
  ];
  return (
    <AdminFrame active="Map">
      <AdminTopBar title="Imap Yemiphakathi — Municipal Map" sub="Imap yezinkinga zomsebenzi · Gauteng Province" />
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* filter panel */}
        <div style={{ width: 200, background: "#fff", borderRight: `1px solid ${BORDER}`, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <NdebeleStripe height={5} />
          <div style={{ flex: 1, padding: "14px", overflowY: "auto" }}>
            {[
              { title: "UHLOBO", items: ["Umgodi", "Amanzi", "Ukukhanya", "Okunye"] },
              { title: "ISIMO", items: ["Okukhona", "Inikelwe", "Iyaqhubeka", "Ixazulul."] },
              { title: "INGOZI", items: [
                { label: "Iphuthuma", color: RED },
                { label: "Ephezulu", color: ORANGE },
                { label: "Phakathi", color: GOLD },
                { label: "Phansi", color: GREEN },
              ]},
            ].map((sec) => (
              <div key={sec.title} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: NAVY, marginBottom: 8, letterSpacing: "0.06em" }}>{sec.title}</div>
                {sec.items.map((l: any) => (
                  <label key={typeof l === "string" ? l : l.label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7, fontSize: 12, color: NAVY, cursor: "pointer" }}>
                    <div style={{ width: 16, height: 16, border: `2px solid ${typeof l === "string" ? BORDER : l.color}`, borderRadius: 4, background: typeof l === "string" ? OFFWHITE : l.color + "22", flexShrink: 0 }} />
                    <span style={{ color: typeof l === "string" ? NAVY : l.color, fontWeight: typeof l === "string" ? 500 : 700 }}>{typeof l === "string" ? l : l.label}</span>
                  </label>
                ))}
              </div>
            ))}
            <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 9, padding: "10px", fontSize: 12, fontWeight: 800, cursor: "pointer" }}>
              Sebenzisa Izihluzi
            </button>
          </div>
        </div>

        {/* Gauteng map */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1636706519609-988babca3dd5?w=1000&h=700&fit=crop&auto=format"
            alt="Johannesburg Gauteng aerial"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }}
          />
          <div style={{ position: "absolute", inset: 0 }}>
            {[0,1,2,3,4,5,6,7].map(i => (
              <div key={i} style={{ position: "absolute", top: i*90, left: 0, right: 0, height: 1, background: "#93C5FD", opacity: 0.3 }} />
            ))}
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <div key={i} style={{ position: "absolute", left: i*90, top: 0, bottom: 0, width: 1, background: "#93C5FD", opacity: 0.3 }} />
            ))}
          </div>
          {/* Gauteng area labels */}
          {gautengAreas.map(t => (
            <div key={t.label} style={{ position: "absolute", left: t.x, top: t.y, background: t.c, color: "#fff", fontSize: 10, fontWeight: 900, padding: "3px 8px", borderRadius: 999, letterSpacing: "0.04em", boxShadow: `0 2px 6px ${t.c}55` }}>
              {t.label}
            </div>
          ))}
          {markers.map((m, i) => (
            <div key={i} style={{ position: "absolute", left: m.x, top: m.y, width: m.size, height: m.size, background: m.c, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: m.size * 0.45, boxShadow: `0 2px 10px ${m.c}55`, border: "2px solid #fff", cursor: "pointer" }}>
              {m.icon}
            </div>
          ))}

          {/* info popup */}
          <div style={{ position: "absolute", left: 100, top: 38, background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.22)", width: 230, border: `2px solid ${BORDER}` }}>
            <NdebeleStripe height={5} />
            <div style={{ padding: "12px 16px 14px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 3 }}>💧 Amanzi — Water Leak</div>
              <div style={{ fontSize: 12, color: SLATE, marginBottom: 6 }}>📍 Soweto, Orlando West, Gauteng</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: NAVY, fontWeight: 600 }}>17 izingxelo eduze</span>
                <span style={{ color: RED, fontSize: 12, fontWeight: 800 }}>● Iphuthuma</span>
              </div>
              <button style={{ width: "100%", background: BLUE, color: "#fff", border: "none", borderRadius: 9, padding: "9px", fontSize: 12, fontWeight: 800, cursor: "pointer" }}>
                Buka Iqembu →
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Notifications */
function ScreenAdminNotifications() {
  const notifs = [
    { icon: "🔴", color: RED, title: "Amanzi aphuthayo — Critical", body: "Amanzi aphuthayo abikwa e-Soweto, Orlando West. Kudingeka ukuphuthuma.", time: "2 amaminiti adlule", unread: true },
    { icon: "🟠", color: ORANGE, title: "Ukuqinisekisa komphakathi", body: "Abahlali abayi-18 baqinisekisa umgodi e-Vilakazi Street, Soweto.", time: "20 amaminiti", unread: true },
    { icon: "✅", color: GREEN, title: "Inkinga ixazululiwe", body: "Ithimba lixazulule ingxelo CF-2026-00092 — Sandton CBD.", time: "1 hora", unread: false },
    { icon: "🕳️", color: GOLD, title: "Ingxelo entsha ephezulu", body: "Umgodi omkhulu ubikiwe e-Alexandra, Louis Botha Avenue.", time: "2 amahora", unread: false },
    { icon: "👥", color: BLUE, title: "Umhlali ommusha", body: "Lungelo Zulu urejisite njengomhlali e-Mamelodi, Tshwane.", time: "Izolo", unread: false },
  ];
  return (
    <AdminFrame active="Notifications">
      <AdminTopBar title="Izaziso — Notifications" sub="Izaziso zangempela zomsebenzi e-Gauteng." />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 720 }}>
          {notifs.map((n, i) => (
            <div key={i} style={{ background: n.unread ? "#EFF6FF" : "#fff", border: `2px solid ${n.unread ? "#BFDBFE" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
              {n.unread && <NdebeleStripe height={4} />}
              <div style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: n.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {n.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: NAVY }}>{n.title}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, color: SLATE }}>{n.time}</span>
                      {n.unread && <div style={{ width: 8, height: 8, background: BLUE, borderRadius: "50%" }} />}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: SLATE, lineHeight: 1.4 }}>{n.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminFrame>
  );
}

/* Admin Settings */
function ScreenAdminSettings() {
  const sections = [
    { icon: "🏛️", label: "Iprofile Yemunicipal", en: "Municipality Profile", sub: "City of Johannesburg — igama, ilogo, imininingwane" },
    { icon: "🏢", label: "Amasifunda", en: "Departments", sub: "Phatha imigaqo, amanzi, ugesi, nezipoki" },
    { icon: "👷", label: "Amathimba Ezilungisi", en: "Maintenance Teams", sub: "Amathimba abasebenzi nezinhlelo zokunikezwa" },
    { icon: "⚖️", label: "Imigomo Yengozi", en: "Priority Rules", sub: "Chaza ukuthi izinqopho zekhompyutha zibalwa kanjani" },
    { icon: "🔔", label: "Izilungiselelo Zezaziso", en: "Notification Settings", sub: "Izaziso, imithetho yokukhawuleza, i-imeyili" },
    { icon: "🔐", label: "Imvume Yabasebenzisi", en: "User Permissions", sub: "Phatha izindima zamaphoyisa nezindima zabahlali" },
  ];
  return (
    <AdminFrame active="Settings">
      <AdminTopBar title="Izilungiselelo — Settings" sub="Ukumiswa kohlelo lwe-CivicFix e-Gauteng." />
      <div style={{ flex: 1, overflow: "auto", padding: "22px 26px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 820 }}>
          {sections.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: `2px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
              <div style={{ height: 4, background: NAVY }} />
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 48, height: 48, background: NAVY, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: GOLD, fontWeight: 700, marginBottom: 4 }}>{s.en}</div>
                  <div style={{ fontSize: 12, color: SLATE, lineHeight: 1.4 }}>{s.sub}</div>
                </div>
                <span style={{ color: SLATE, fontSize: 20, alignSelf: "center" }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminFrame>
  );
}

/* ══════════════════════════════════════════════════════════
   GALLERY
════════════════════════════════════════════════════════════ */

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ gridColumn: "1 / -1", paddingTop: 36, paddingBottom: 12 }}>
      <NdebeleStripe height={8} />
      <div style={{ paddingTop: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: GREEN, letterSpacing: "0.1em", marginBottom: 4 }}>{sub}</div>
        <div style={{ fontSize: 24, fontWeight: 900, color: NAVY, letterSpacing: "-0.02em" }}>{title}</div>
      </div>
    </div>
  );
}

function ScreenLabel({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ background: NAVY, color: GOLD, fontSize: 11, fontWeight: 900, padding: "3px 10px", borderRadius: 7 }}>{n}</div>
      <div style={{ fontSize: 13, fontWeight: 800, color: NAVY }}>{title}</div>
    </div>
  );
}

function MobileCol({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ScreenLabel n={n} title={title} />
      <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 10px 50px rgba(11,18,32,0.22)", border: `4px solid ${NAVY}` }}>
        {children}
      </div>
    </div>
  );
}

function DesktopRow({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
      <ScreenLabel n={n} title={title} />
      <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(11,18,32,0.15)", border: `2px solid ${BORDER}` }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: OFFWHITE, minHeight: "100%", fontFamily: "'Inter', sans-serif", padding: "0 0 80px" }}>
      {/* page header */}
      <div style={{ background: NAVY, overflow: "hidden" }}>
        <NdebeleStripe height={12} />
        <div style={{ padding: "28px 48px 28px", display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, background: BLUE, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
            🏙️
          </div>
          <div>
            <div style={{ color: GOLD, fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", marginBottom: 4 }}>
              UBUNTU COMMUNITY PLATFORM · GAUTENG, SOUTH AFRICA
            </div>
            <div style={{ color: "#fff", fontSize: 34, fontWeight: 900, letterSpacing: "-0.04em" }}>CivicFix</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 20, alignItems: "center" }}>
            {[["#0B1220", "Deep Navy"], ["#2563EB", "Civic Blue"], ["#FFB612", "SA Gold"], ["#007A4D", "SA Green"]].map(([hex, name]) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#94A3B8" }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: hex as string }} />
                {name}
              </div>
            ))}
            <div style={{ display: "flex", height: 20, borderRadius: 4, overflow: "hidden", marginLeft: 8 }}>
              {[GREEN, "#000", GOLD, "#fff", RED, BLUE].map((c, i) => (
                <div key={i} style={{ width: 14, background: c }} />
              ))}
            </div>
          </div>
        </div>
        <NdebeleStripe height={8} />
      </div>

      <div style={{ padding: "0 48px" }}>
        {/* resident screens */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 390px)", gap: "40px 28px" }}>
          <SectionHead title="Resident Experience — Umhlali" sub="MOBILE · 390px · ANDROID / IOS" />
          <MobileCol n="01" title="Splash Screen — Ukwamukelwa"><ScreenSplash /></MobileCol>
          <MobileCol n="02" title="Welcome — Sawubona"><ScreenWelcome /></MobileCol>
          <MobileCol n="03" title="Sign In — Ngena"><ScreenLogin /></MobileCol>
          <MobileCol n="04" title="Home Dashboard — Ikhaya"><ScreenHome /></MobileCol>
          <MobileCol n="05" title="Choose Category — Uhlobo"><ScreenChooseCategory /></MobileCol>
          <MobileCol n="06" title="Add Details — Imininingwane"><ScreenAddDetails /></MobileCol>
          <MobileCol n="07" title="Add Evidence — Ubufakazi"><ScreenAddPhoto /></MobileCol>
          <MobileCol n="08" title="Location — Indawo (Gauteng)"><ScreenLocation /></MobileCol>
          <MobileCol n="09" title="Review Report — Hlola"><ScreenReview /></MobileCol>
          <MobileCol n="10" title="Report Submitted — Ithunyelwe"><ScreenSubmitted /></MobileCol>
          <MobileCol n="11" title="My Reports — Izingxelo Zami"><ScreenMyReports /></MobileCol>
          <MobileCol n="12" title="Report Tracking — Landela"><ScreenTracking /></MobileCol>
          <MobileCol n="13" title="Community Map — Mapa (Gauteng)"><ScreenMap /></MobileCol>
          <MobileCol n="14" title="Notifications — Izaziso"><ScreenNotifications /></MobileCol>
          <MobileCol n="15" title="Profile — Iprofile"><ScreenProfile /></MobileCol>
        </div>

        {/* admin screens */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px 0", marginTop: 20 }}>
          <SectionHead title="Administrator Experience — Umphathi" sub="DESKTOP · 1200px · GAUTENG MUNICIPALITY" />
          <DesktopRow n="16" title="Admin Login — Ukungena Kwomphathi"><ScreenAdminLogin /></DesktopRow>
          <DesktopRow n="17" title="Admin Dashboard — Isithombe Esiphelele"><ScreenAdminDashboard /></DesktopRow>
          <DesktopRow n="18" title="Reports List — Uhlu Lwezingxelo"><ScreenAdminReports /></DesktopRow>
          <DesktopRow n="19" title="Report Detail + Smart Priority + Assignment"><ScreenAdminReportDetail /></DesktopRow>
          <DesktopRow n="20" title="Analytics Dashboard — Ulwazi Lwezibalo"><ScreenAdminAnalytics /></DesktopRow>
          <DesktopRow n="21" title="Residents — Abahlali"><ScreenAdminResidents /></DesktopRow>
          <DesktopRow n="22" title="Municipal Map — Imap ye-Gauteng"><ScreenAdminMap /></DesktopRow>
          <DesktopRow n="23" title="Admin Notifications — Izaziso"><ScreenAdminNotifications /></DesktopRow>
          <DesktopRow n="24" title="Settings — Izilungiselelo"><ScreenAdminSettings /></DesktopRow>
        </div>
      </div>
    </div>
  );
}
