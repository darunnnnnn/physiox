import heroBg from '../assets/screen.png'

export default function Hero() {
  return (
    <section className="relative min-h-[880px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/20 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src={heroBg}
          alt="High-end clinical photography of a modern physiotherapy and human performance center"
        />
      </div>
      <div className="relative z-20 px-margin-desktop container mx-auto max-w-container-max">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full mb-10 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-label-sm font-bold tracking-widest uppercase">Clinical Excellence System</span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-[72px] text-primary mb-8 leading-[1.05] hero-text-shadow">
            Redefining the Future of <br /><span className="text-secondary">Human Performance</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed opacity-90">
            Advance your clinical practice with peer-reviewed modules crafted by global pioneers. The definitive standard for physiotherapy education.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-2xl font-bold text-label-md shadow-2xl shadow-secondary/30 hover:shadow-secondary/40 hover:-translate-y-1 transition-all active:translate-y-0">Explore Curriculum</button>
            <button className="bg-white/80 backdrop-blur-md border border-outline-variant text-primary px-10 py-5 rounded-2xl font-bold text-label-md hover:bg-white hover:shadow-xl transition-all flex items-center gap-3">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button>
          </div>
          <div className="mt-24 flex items-center gap-10">
            <div className="flex -space-x-4">
              <img alt="User" className="w-14 h-14 rounded-full border-4 border-surface shadow-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABscr7LECofdXq05TzGaxGxdvKmMW-Z0asKoqlCYlpcAnsr5sjHeT-DwdaGsHp3lLfHkkxHDHidSkjidqCLmsig4TeljdKubZhCHjDsBSEah2SGdjaZQVEsTETkl-oziEpar49qlT8UTub2RZxPnN9IpptYZtIDBp83deE37fk8LbkZfIbGBBdNngD7wZRGnaMST6nlWy74jYE-nZmlSOMzaN5FUHSBG22jDa1PrHo4Ja9HzFpEBHPyxIqMSSnKSa2ml5MkMRAmxBl" />
              <img alt="User" className="w-14 h-14 rounded-full border-4 border-surface shadow-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDImyn03_3sZvtXU_7_zvgFArgB_wCYBxR2RfR3Dy4DzWG-j49VoiXzOUSjbPShr_AxnDEtDy_sfNuFSaD8L41sadRuKXjXvb0As_e8xC27k2MBM4NFH8XI5bdywDoAVssgCMoPzErU3_EbbeyMwhteWZGmttaKYt4Rw4dL2u9DjAh2eUOIVZTmU7rxxdMFiJ1b1bVBYldTsA5avhLgr8MpRdz5rmBHoGqiFIAagjy1LadAyLIj6JpQvHXX2Mc_hYTjiNlbMbrGIzpK" />
              <img alt="User" className="w-14 h-14 rounded-full border-4 border-surface shadow-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHVVC3HLxHrpzz-XtC0OxbbWsVgvL8grxj2GdqogruWmcc7a1pjkwXfHXAv4RIJXY76z3ioEAZiNueMzftdQaSdc4EeZUD4rdvE0l6aqii1A6Ji-UmuMV-_HfuqjXWI5NawSouYEyC6RQGANWbsZNu5vb_Wibl3oaxf_p9ugUOaxIHkqte-aGi8Hw3ee5DE7iZR-ZLF6s2ROBdYnFFCyoMoVwugnmPMO2VKjevlH_sKgE4-YgGddgWuphnfPHoQzsel4ZY4MFk8aaZ" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[28px] font-extrabold text-primary leading-none">12,000+</span>
              <span className="text-label-md text-on-surface-variant font-medium">Licensed Practitioners Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
