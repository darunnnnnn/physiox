const instructors = [
  {
    name: "Dr. Michael Vance, PhD",
    role: "Orthopedic Specialist",
    bio: "Head of Performance for Global Elite Athletic Programs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJKzAGph82LxFiUF9kSkNZ24wuBaKSgioJPNH0BHMrDUQK1RxKgn52sDJGaw_REtQK8bBymlfHDxtsNt3cmMCqR_wUOFZ_YYzqQdvphPO6bRZTrPE3Xu84Q903zpm-smSHSDQCipHuHGFgC3A-MMseJVZLfQ-92UEjuu5bPkED67lWgz4EJ9E28MuBzn0Rpwbx4L9ga7ejolREg3Gk2r9kxRIBun_HAhCRzGjkI57D7itFH_PHWQwR31Bk60vua7OiDkQ94qjKFShz",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Neuro-Rehab Lead",
    bio: "Lead Researcher on Clinical Neuroplasticity Systems.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGmnttEQQacSOaPJ9221-ezoQHQo7H822IO7AgGY565mU1inmo87JntQkFA7Hb5K-9dWfa61tMxirAXWhwSnF_TG0fyy7kaVOls5LzMR8i-RoMQ-XqsN6NsqHJhxiObgNNMjAiFKKGJmP8YolbeKyd-y8DIXLN9JlObQKahBCKdvwV1-0uAa0-r--qDvpAH9o3bQvfaqC83Ntjai6BZShcO5Lzam-aR7B5Pt5ZzfJ75vaS2AAwW3Q1Z00f9ur7u0bag2ISV41N1YUn",
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Performance Lead",
    bio: "Specializing in Olympic Biomechanics and High-Impact Injuries.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmGkIlFBC7-lb1QLnlE-O8-PHMgPiRkyAHRZIA8tiPtYuFS0B5vnHJ2SPvjvV-fDNcozJC48alwkKeKplmKY5fiyOS2Ec5UiHQsu6KlIvtOlBL9RDWoBlT4SxRI4T_upRK0Zdn5GTaIiE7pZb_e0XITzONBm3s3v8NI3b2ulmfop7eMtuKK3yM1F4MaEMIQ7MF2rUgx8MCqFv1sIUE4c1J3whLIp28AmimSHelfXihzt--kN8sghmtRIJkFMv1UUfwcCnYGoSuJHqH",
  },
  {
    name: "Dr. Sophia Lin",
    role: "Pediatric Lead",
    bio: "Founder of the Institute for Early Childhood Rehabilitation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF7zfpntFSur4HzcS7303TC4LisbrqndtjnTK8RhDO0xanRrJX7yR1C2xy6yaY3alfuf5G7RhhW1OFanXSMHyuYFg7RW4XbwIS6pXFWC909leE0LPcxa3qrG6vgPPJXhzBz3W4AKVpUJQ0sO9pRQmmqzSKm7UpAbnsJD7_QxFmldUXDi60KjdU81oLSvetYSo7jscJFSw0zJcnyTqduICMcKRt9A5VzSNoOLbMxvx2e9oQHb4DCTzN0L3qhWHtc68efTCVymhwTw7L",
  },
]

export default function Instructors() {
  return (
    <section className="py-section-lg px-margin-desktop bg-surface relative overflow-hidden border-t border-outline-variant/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="container mx-auto max-w-container-max relative z-10">
        <div className="text-center mb-28 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-[44px] text-primary mb-6 tracking-tight">The Academic Faculty</h2>
          <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed">Learn from PhD-level clinicians who have defined the standard of care for professional sports organizations and world-class medical institutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {instructors.map((inst, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-12 mx-auto w-64 h-64">
                <div className="absolute inset-0 bg-secondary/10 rounded-[3.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-surface border border-outline-variant rounded-[3.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-premium"></div>
                <img className="relative z-10 w-full h-full object-cover rounded-[3.5rem] group-hover:scale-[1.02] transition-transform duration-500" src={inst.img} alt={inst.name} />
              </div>
              <h4 className="font-headline-sm text-[22px] text-primary group-hover:text-secondary transition-colors mb-2">{inst.name}</h4>
              <p className="text-label-sm text-secondary font-bold mb-5 tracking-widest uppercase">{inst.role}</p>
              <p className="text-body-md text-on-surface-variant px-4 font-medium opacity-80">{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
