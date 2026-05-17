export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/50">
      <div className="container mx-auto max-w-container-max flex items-center justify-between w-full">
        <div className="flex items-center gap-stack-md">
          <span className="text-headline-sm font-headline-sm font-extrabold text-secondary tracking-tight">PhysioEdu</span>
          <nav className="hidden md:flex gap-10 ml-12">
            <a className="text-secondary font-bold border-b-2 border-secondary font-label-md text-label-md transition-all duration-300 py-1" href="#">Catalog</a>
            <a className="text-on-surface-variant font-medium hover:text-secondary font-label-md text-label-md transition-all duration-300 py-1" href="#">Instructors</a>
            <a className="text-on-surface-variant font-medium hover:text-secondary font-label-md text-label-md transition-all duration-300 py-1" href="#">Live Sessions</a>
            <a className="text-on-surface-variant font-medium hover:text-secondary font-label-md text-label-md transition-all duration-300 py-1" href="#">Resources</a>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center bg-surface-container-low/50 px-5 py-2.5 rounded-full border border-outline-variant transition-all focus-within:border-secondary focus-within:bg-white shadow-sm">
            <span className="material-symbols-outlined text-outline mr-2 text-[20px]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-label-md w-56 placeholder:text-outline" placeholder="Search courses..." type="text" />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/5 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="bg-primary text-on-primary px-7 py-3.5 rounded-xl font-label-md text-label-md hover:bg-primary-container hover:shadow-lg transition-all active:scale-[0.98]">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}
