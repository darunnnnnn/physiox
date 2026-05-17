export default function Pricing() {
  return (
    <section className="py-section-lg px-margin-desktop bg-surface-container-low/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      <div className="container mx-auto max-w-container-max text-center relative z-10">
        <h2 className="font-headline-md text-[44px] text-primary mb-8 tracking-tight">Enterprise &amp; Professional Access</h2>
        <p className="font-body-md text-body-lg text-on-surface-variant mb-28 max-w-xl mx-auto">Choose the professional tier that aligns with your clinical objectives.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Resident */}
          <div className="bg-white/70 backdrop-blur-xl p-12 rounded-4xl border border-outline-variant/30 text-left hover:shadow-premium hover:bg-white transition-all duration-500 flex flex-col group">
            <h4 className="font-headline-sm text-[28px] mb-3 text-primary">Resident</h4>
            <div className="flex items-baseline gap-1 mb-12">
              <span className="text-[48px] font-extrabold text-primary tracking-tighter">$29</span>
              <span className="text-on-surface-variant font-bold text-label-md">/mo</span>
            </div>
            <ul className="space-y-6 mb-16 flex-grow">
              {["Standard Library Access", "Clinical Forum Entry", "Multi-device Sync"].map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-body-md font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-secondary font-bold">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border-2 border-primary font-bold text-primary hover:bg-primary hover:text-white transition-all active:scale-[0.98]">Select Resident Plan</button>
          </div>
          {/* Professional */}
          <div className="bg-[#131b2e] p-14 rounded-4xl text-left scale-105 shadow-[0_40px_80px_rgba(0,106,97,0.15)] relative border border-secondary/30 overflow-hidden flex flex-col z-20">
            <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-8 py-3 rounded-bl-2xl font-extrabold text-label-sm tracking-widest uppercase shadow-lg">MOST POPULAR</div>
            <h4 className="font-headline-sm text-[32px] mb-3 text-white">Professional</h4>
            <div className="flex items-baseline gap-1 mb-12">
              <span className="text-[56px] font-extrabold text-white tracking-tighter">$79</span>
              <span className="text-on-primary-container font-bold text-label-md">/mo</span>
            </div>
            <ul className="space-y-7 mb-16 flex-grow">
              {["Unlimited Curriculum Access", "Accredited CEU Certifications", "Priority Live Workshop Entry", "Clinical Database Access"].map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-body-md text-white/90 font-semibold">
                  <span className="material-symbols-outlined text-secondary font-bold">verified</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-6 rounded-2xl bg-secondary text-on-secondary font-extrabold text-label-md shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 hover:-translate-y-1 transition-all active:translate-y-0">Get Professional Access</button>
          </div>
          {/* Clinic Pro */}
          <div className="bg-white/70 backdrop-blur-xl p-12 rounded-4xl border border-outline-variant/30 text-left hover:shadow-premium hover:bg-white transition-all duration-500 flex flex-col group">
            <h4 className="font-headline-sm text-[28px] mb-3 text-primary">Clinic Pro</h4>
            <div className="flex items-baseline gap-1 mb-12">
              <span className="text-[48px] font-extrabold text-primary tracking-tighter">$199</span>
              <span className="text-on-surface-variant font-bold text-label-md">/mo</span>
            </div>
            <ul className="space-y-6 mb-16 flex-grow">
              {["Up to 10 Practitioner Accounts", "Admin Progress Dashboard", "Customizable Learning Paths"].map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-body-md font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-secondary font-bold">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border-2 border-primary font-bold text-primary hover:bg-primary hover:text-white transition-all active:scale-[0.98]">Contact Enterprise Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
