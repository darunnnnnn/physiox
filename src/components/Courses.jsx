const courses = [
  {
    badge: "ADVANCED",
    category: "Orthopedics",
    ceu: "5.0 CEU",
    title: "Advanced Posture Correction & Spinal Alignment",
    desc: "In-depth clinical protocols for resolving complex musculoskeletal imbalances using kinetic chain assessment.",
    modules: "12 Modules",
    price: "$199.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqygzxsh_-4p-IV97WSw4CGxqZ0ASD3YsZFcMZF9aS4O10lQRpn6fxXa0P4IoAKR07Nx96qx7ujzz45qPwRT7J31WsPdHXR_ucatb1PKeLbeIFJSnhMGdjeOUr24HkiCVw3pnuDBK9SZvWiOdCvGwnkDfKq7yeZ903DOaiKiBlL5DfcOanMVhkE9Lf9-2IDLNeXpHOr3eRQb7cAwLmyc6KIZgx73WtWNjrXcZNTgcJQCHS3FAwvd_1j1c9DRNVW9Ab-wwXUxNt3u5t",
  },
  {
    badge: "CORE MODULE",
    category: "Sports Med",
    ceu: "3.5 CEU",
    title: "Elite Sports Recovery & Performance Protocols",
    desc: "Systematic approach to athletic recovery using advanced tissue repair modalities and biomechanical optimization.",
    modules: "8 Modules",
    price: "$149.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8KKcGGnbMjE_ST-6I35NOde5oY7-zBQZWarF1eBKCgTEE3Z_7evi5Pek3e72e-NDg_4LLwFO_ZfqxbIOIrWMPa2hn76EMAQgHamSe_kp-lanb8V2E31hq-r2itC__YBMZAXNL7EmdYdgmYltT3yy90IO9OaSOD-l-AR9hLQG3QziLzdlSjHm6ECugw6cXfnXBljstjtj4WIU-J4MQ9xC9wm7F0f66Cm5lq-bkjBuOVId2PaqTvfTlZD1-GxoV2FElXsqQygu-c06",
  },
  {
    badge: "SPECIALIST",
    category: "Neurology",
    ceu: "6.0 CEU",
    title: "Neuromuscular Sensory Integration Techniques",
    desc: "Master the integration of sensory-motor pathways to treat complex neurological rehabilitation patients.",
    modules: "15 Modules",
    price: "$249.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4LJ84zTqVONvLC5VO_a4VQKR0mAj8R3D1YJUHw029TF_3Vf-TFW84gGczRBlrDfreWdzdzmeP99K4_MDNfWmhN8Lsz0G6DUcb6FiX_7obrjQvJrAgI7vvuCTvfTGuULXB5ZHnWOqX8vbb369jb_avKo9ZPsApbHyzdbcUtnmeoRozrgbxX0znx5nzMx5doPcLxewWS4CBSzPkCASNGLV7FfwcNJRDGWMvFB1WVm19h6XlnrYeiSDO6_HmAtiIOKnwUCN9z5AsbG7z",
  },
]

export default function Courses() {
  return (
    <section className="py-section-lg px-margin-desktop mesh-gradient border-t border-outline-variant/30">
      <div className="container mx-auto max-w-container-max">
        <div className="flex justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-[44px] text-primary tracking-tight leading-tight">Advanced Clinical Tracks</h2>
            <p className="font-body-md text-body-lg text-on-surface-variant mt-6">Elite-level specializations designed for the modern evidence-based practitioner.</p>
          </div>
          <a className="text-secondary font-bold flex items-center gap-2 group mb-2" href="#">
            <span>View All Curriculum</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, i) => (
            <div key={i} className="bg-surface rounded-[2rem] border border-outline-variant/30 overflow-hidden group shadow-premium hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={course.img} alt={course.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur text-primary px-5 py-2 rounded-full text-label-sm font-bold tracking-wide">{course.badge}</div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-lg text-label-sm font-bold uppercase tracking-wider">{course.category}</span>
                  <span className="bg-surface-container-high px-4 py-1.5 rounded-lg text-label-sm text-on-surface-variant font-medium">{course.ceu}</span>
                </div>
                <h3 className="font-headline-sm text-[26px] text-primary mb-4 leading-tight">{course.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-10 line-clamp-2">{course.desc}</p>
                <div className="flex items-center justify-between pt-8 border-t border-outline-variant/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">timer</span>
                    <span className="text-label-md text-on-surface-variant font-semibold">{course.modules}</span>
                  </div>
                  <span className="text-primary font-extrabold text-[24px]">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
