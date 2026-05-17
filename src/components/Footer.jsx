export default function Footer() {
  return (
    <>
      <footer className="w-full py-28 px-margin-desktop flex flex-col items-center bg-white border-t border-outline-variant/50">
        <div className="container mx-auto max-w-container-max flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex flex-col gap-8">
            <span className="font-headline-sm text-secondary font-extrabold text-[32px] tracking-tight">PhysioEdu</span>
            <p className="font-body-md text-on-surface-variant max-w-sm leading-relaxed text-body-lg">The global standard for evidence-based clinical excellence. Empowering practitioners since 2014.</p>
            <div className="flex gap-6">
              <a className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all hover:-translate-y-1 shadow-sm" href="#">
                <span className="material-symbols-outlined text-[26px]">public</span>
              </a>
              <a className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all hover:-translate-y-1 shadow-sm" href="#">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32">
            <div className="flex flex-col gap-6">
              <h5 className="text-primary font-extrabold text-label-md uppercase tracking-[0.2em]">Platform</h5>
              <nav className="flex flex-col gap-4">
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Course Catalog</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Instructors</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Live Events</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-primary font-extrabold text-label-md uppercase tracking-[0.2em]">Resources</h5>
              <nav className="flex flex-col gap-4">
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Accreditation</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Research Blog</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Knowledge Base</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-primary font-extrabold text-label-md uppercase tracking-[0.2em]">Company</h5>
              <nav className="flex flex-col gap-4">
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">About Us</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Privacy Policy</a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-semibold" href="#">Contact Support</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-white px-margin-desktop py-10 border-t border-outline-variant/30 flex justify-center items-center">
        <p className="text-on-surface-variant text-label-sm font-bold opacity-50 tracking-[0.1em]">© 2024 PHYSIOEDU GLOBAL. ALL RIGHTS RESERVED.</p>
      </div>
    </>
  )
}
