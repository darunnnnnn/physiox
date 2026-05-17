export default function LiveSessions() {
  return (
    <section className="py-section-lg px-margin-desktop relative overflow-hidden bg-white">
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>
      <div className="container mx-auto max-w-container-max relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-label-sm font-bold tracking-widest uppercase">Global Live Events</span>
          </div>
          <h2 className="font-headline-md text-[48px] text-primary mb-8 leading-tight">Interactive Masterclasses</h2>
          <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">Beyond the textbook: engage with real-time clinical demonstrations and evidence-based methodologies from world-renowned experts.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Featured Session */}
          <div className="lg:col-span-7 group">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-premium border border-outline-variant/30">
              <img
                alt="Gait analysis lab setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqKMgtv0aJGlREWRsRqt44a-bUbtRJxzTcVE4iUOHJo4bASD5JGHBhfaXAnzhL20gZfVegBV7pKBlk0j3vqYB_DWHbpO6NNVwGuyAeQMOMDXq5Id52hfOLqrS-f9c1yWsMDS4W9flEMhTsZKwC5pZuyF2fibJYK_N0DN-VxBzm83sNbR-jy_QiSmRK_DM-8lzbq3_17K9lbkyrpeiiDP_VlowyvV_sTNJ30MhMhB9bROPsQ-LU9s4up_wlOm-rMYWjVAw4vsdpIdAu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute top-10 left-10 flex items-center gap-3">
                <span className="bg-error px-4 py-1.5 rounded-lg text-white text-[11px] font-bold tracking-tighter flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE NOW
                </span>
                <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-lg text-primary text-[11px] font-bold shadow-sm">1,248 PRACTITIONERS VIEWING</span>
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-white font-headline-sm text-[36px] mb-6 leading-tight">Functional Gait Analysis &amp; Sensorimotor Biofeedback</h3>
                <div className="flex items-center gap-6">
                  <button className="bg-secondary text-on-secondary px-10 py-[18px] rounded-2xl font-bold text-label-md hover:shadow-lg transition-all active:scale-95">Join Live Session</button>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
                      <img
                        alt="Sarah Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF7zfpntFSur4HzcS7303TC4LisbrqndtjnTK8RhDO0xanRrJX7yR1C2xy6yaY3alfuf5G7RhhW1OFanXSMHyuYFg7RW4XbwIS6pXFWC909leE0LPcxa3qrG6vgPPJXhzBz3W4AKVpUJQ0sO9pRQmmqzSKm7UpAbnsJD7_QxFmldUXDi60KjdU81oLSvetYSo7jscJFSw0zJcnyTqduICMcKRt9A5VzSNoOLbMxvx2e9oQHb4DCTzN0L3qhWHtc68efTCVymhwTw7L"
                      />
                    </div>
                    <span className="text-white font-semibold text-label-md">Dr. Sarah Chen, PhD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Secondary Sessions */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Workshop Card */}
            <div className="flex-1 bg-white rounded-[2.5rem] p-10 border border-outline-variant/30 shadow-premium hover:shadow-card-hover transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-1000"></div>
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-secondary font-bold text-[12px] tracking-widest uppercase">UPCOMING: TUESDAY</span>
                  <span className="material-symbols-outlined text-secondary opacity-40 text-[28px]">calendar_today</span>
                </div>
                <h4 className="font-headline-sm text-[28px] text-primary mb-5 leading-tight">Scapular Dyskinesis Clinical Workshop</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed line-clamp-2 opacity-90">Advanced assessment and corrective exercise prescription for elite overhead athletes.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-outline-variant/50 flex items-center justify-between">
                <button className="flex items-center gap-2 text-secondary font-bold text-label-md group/btn">
                  <span className="group-hover:underline">Remind Me</span>
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
                <span className="text-on-surface-variant/70 text-label-md font-semibold bg-surface-container-low px-4 py-1.5 rounded-lg">14:00 EST</span>
              </div>
            </div>
            {/* Q&A Card */}
            <div className="flex-1 bg-surface-container-low/50 rounded-[2.5rem] p-10 border border-outline-variant/30 shadow-premium hover:shadow-card-hover transition-all duration-500 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-on-surface-variant/60 font-bold text-[12px] tracking-widest uppercase">SPECIAL Q&amp;A RECORDING</span>
                  <span className="material-symbols-outlined text-outline text-[28px]">forum</span>
                </div>
                <h4 className="font-headline-sm text-[28px] text-primary mb-5 leading-tight">Billing &amp; Ethics for Private Practice</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed line-clamp-2 opacity-90">Strategic management and compliance frameworks for scaling high-performance clinics.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-outline-variant/50 flex items-center justify-between">
                <button className="flex items-center gap-2 text-primary font-bold text-label-md group/btn">
                  <span className="group-hover:underline">Watch Recording</span>
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                </button>
                <span className="bg-surface-container-high px-4 py-1.5 rounded-lg text-on-surface-variant text-[12px] font-bold tracking-wide uppercase">60 MINS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
