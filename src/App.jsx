import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import LiveSessions from './components/LiveSessions'
import Instructors from './components/Instructors'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary/20">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <LiveSessions />
        <Instructors />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
