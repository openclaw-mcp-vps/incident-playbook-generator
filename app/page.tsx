export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Past Outages Into<br />
          <span className="text-[#58a6ff]">Bulletproof Playbooks</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Incident Playbook Generator analyzes your past incidents and Git commits to automatically produce step-by-step response playbooks — complete with role assignments and escalation paths.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Get Started — $45/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "AI Pattern Analysis", desc: "Ingests monitoring data and commits to surface recurring failure patterns automatically." },
            { icon: "📋", title: "Standardized Playbooks", desc: "Generates structured, step-by-step runbooks your whole team can follow under pressure." },
            { icon: "🔔", title: "Escalation Workflows", desc: "Assigns roles and defines clear escalation paths so nothing falls through the cracks." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$45<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stop repeating incidents</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited playbook generation",
              "AI incident pattern analysis",
              "Role & escalation assignments",
              "Git + monitoring tool integrations",
              "Team collaboration workspace",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What incident data sources does it support?",
              a: "It integrates with PagerDuty, Datadog, GitHub, and GitLab out of the box. You can also import incidents via CSV or our REST API."
            },
            {
              q: "How does the AI generate playbooks?",
              a: "The AI analyzes patterns across your historical incidents and commits, identifies common failure modes, and produces structured runbooks with recommended steps, owners, and escalation triggers."
            },
            {
              q: "Can my whole team collaborate on playbooks?",
              a: "Yes. Every plan includes a shared workspace where team members can review, edit, comment on, and approve playbooks before they go live."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Incident Playbook Generator. All rights reserved.
      </footer>
    </main>
  )
}
