import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './YCBPage.css'

export default function YCBPage() {
  const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <img className="brand-mark" src={withBase('favicon.png')} alt="" aria-hidden="true" />
          <Link to="/" className="brand-name">Antaha Shuddhi</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/#classes">Classes</Link>
          <a href="/#contact">Contact</a>
          <span className="header-phone" aria-label="Phone number">
            📞 +91 9650737500
          </span>
        </nav>
      </header>

      <main className="ycb-main">
        <section className="ycb-hero fade-in">
          <p className="eyebrow">Government-Certified Yoga Teacher Training</p>
          <h1>YCB Levels I, II &amp; III</h1>
          <p className="ycb-intro">
            At Antaha Shuddhi, your journey into yoga is not just about asanas; it is about
            discovering what unfolds when you bring awareness to your practice. We are proud to
            offer a structured pathway recognized by the Yoga Certification Board (YCB), Ministry
            of AYUSH, Government of India.
          </p>
          <p className="ycb-intro">
            Whether you wish to guide others in their community or become a master trainer, our
            programs provide the authentic knowledge and practical wisdom to support your calling.
          </p>
        </section>

        <section className="ycb-levels">
          <article className="ycb-level-card fade-in">
            <div className="ycb-level-badge">Level I</div>
            <div className="ycb-level-body">
              <h2>Yoga Protocol Instructor</h2>
              <p className="ycb-level-tagline">Your starting point: A 200-hour foundation to begin your professional teaching journey.</p>
              <div className="ycb-level-detail">
                <span className="ycb-detail-label">What you will learn</span>
                <p>
                  Foundational asanas, pranayama, the Common Yoga Protocol, and the core principles
                  of yogic philosophy from texts like the Patanjali Yoga Sutras and Bhagavad Gita.
                </p>
              </div>
            </div>
          </article>

          <article className="ycb-level-card fade-in">
            <div className="ycb-level-badge">Level II</div>
            <div className="ycb-level-body">
              <h2>Yoga Wellness Instructor</h2>
              <p className="ycb-level-tagline">Deepen your impact: A 400-hour program focused on preventive healthcare and holistic wellness.</p>
              <div className="ycb-level-detail">
                <span className="ycb-detail-label">What you will learn</span>
                <p>
                  Advanced practices including Yoga Nidra, Tri Bandhas, a deeper study of the
                  Upanishads, and the teachings of yoga masters like Swami Vivekananda.
                </p>
              </div>
            </div>
          </article>

          <article className="ycb-level-card fade-in">
            <div className="ycb-level-badge">Level III</div>
            <div className="ycb-level-body">
              <h2>Yoga Teacher &amp; Evaluator</h2>
              <p className="ycb-level-tagline">Become a master trainer: An advanced 800-hour certification for those ready to teach and evaluate other yoga professionals.</p>
              <div className="ycb-level-detail">
                <span className="ycb-detail-label">What you will learn</span>
                <p>
                  A comprehensive study of yoga's origins, the six schools of Indian philosophy
                  (Shad Darshana), and advanced teaching and evaluation methodologies.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="ycb-closing fade-in">
          <p>
            Each level builds upon the last, creating a clear and meaningful path from practitioner
            to master. The YCB certification is a government-issued credential that is nationally
            and internationally recognized, adding a layer of trust and credibility to your
            professional profile.
          </p>
          <a href="/#contact" className="primary ycb-cta">
            Enquire Now
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Antaha Shuddhi. All rights reserved.</p>
      </footer>
    </div>
  )
}
