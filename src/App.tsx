import './App.css'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <img className="brand-mark" src="/favicon.png" alt="" aria-hidden="true" />
          <span className="brand-name">Antaha Shuddhi</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#learning-approach">Learning</a>
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#schedule">Schedule</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Antaha Shuddhi</p>
            <h1>Discover Your Inner Peace</h1>
            <p className="subtext">
              Discover Your Inner Peace
Transform your life through the ancient practice of yoga. Join Antaha Shuddhi and embark on a journey to wellness, balance, and self-discovery.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#classes">
                Explore Classes
              </a>
              <a className="ghost" href="#contact">
                Book Free Trial
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img
              className="hero-image"
              src="https://images.pexels.com/photos/4998811/pexels-photo-4998811.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Women practicing yoga in a bright, airy studio"
            />
          </div>
        </section>

        <section id="learning-approach" className="section">
          <div className="section-header">
            <h2>What You&apos;ll Learn With Us</h2>
            <p>
              Your journey here isn&apos;t just about touching your toes. It&apos;s
              about discovering what unfolds when you do.
            </p>
          </div>

          <div className="learning-stack">
            <div className="card">
              <h3>Holistic Yoga Practice</h3>
              <p>
                We teach yoga as a complete practice—combining asanas,
                pranayama, and meditation to support both body and mind.
              </p>
              <p>
                You&apos;ll also explore Tratak, Kunjal, Neti, and Laghu
                Shankhaprakshalana for focus, cleansing, and digestive balance.
              </p>
            </div>

            <div className="card">
              <h3>Physical &amp; Emotional Awareness</h3>
              <p>
                Through guided sessions, you&apos;ll learn to notice body signals,
                understand emotional patterns, and respond with more awareness.
              </p>
            </div>

            <div className="card">
              <h3>Wellness Counseling &amp; Self-Care Guidance</h3>
              <p>
                As certified counselors and wellness coaches, we share practical
                self-care tools tailored to your routine, energy, and goals.
              </p>
            </div>

            <div className="card">
              <h3>Healing &amp; Life Coaching</h3>
              <p>
                We blend healing practices with life coaching to help you move
                through blocks and build steady, lasting change.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About the trainers</h2>
            <p>Two teachers with complementary styles to support your practice.</p>
          </div>
          <div className="trainer-grid">
            <article className="trainer-card">
              <img
                className="trainer-image"
                src="/nidhi.jpeg"
                alt="Nidhi, yoga trainer"
                loading="lazy"
              />
              <h3>Nidhi</h3>
              <p className="trainer-title">Karma Sanyasi • Yoga & holistic wellness</p>
              <p className="trainer-bio">
                With 13+ years devoted to the art and science of yoga, Nidhi
                brings a lineage-rooted practice as a Karma Sanyasi initiated by
                Swami Niranjanananda Saraswati of the Bihar School of Yoga. Her
                mission is to harmonize the spiritual and physical dimensions of
                life, guiding students toward lasting wellbeing.
              </p>
            </article>
            <article className="trainer-card">
              <img
                className="trainer-image"
                src="/rupesh.jpeg"
                alt="Rupesh, yoga trainer"
                loading="lazy"
              />
              <h3>Rupesh</h3>
              <p className="trainer-title">
                Karma Sanyasi • Asana, pranayama & meditation
              </p>
              <p className="trainer-bio">
                Rupesh is a Karma Sanyasi initiated by Swami Niranjanananda
                Saraswati, Nivritta Paramacharya of the Bihar School of Yoga.
                With 14 years of experience, he teaches asana, pranayama, and
                meditation across age groups, blending counseling and
                motivation to support healthier lifestyles. He also leads camps
                and workshops that present yoga as a remedy for modern health
                challenges.
              </p>
            </article>
          </div>
        </section>

        <section id="classes" className="section">
          <div className="section-header">
            <h2>Classes</h2>
            <p>A balanced practice for body, breath, and mind.</p>
          </div>
          <div className="grid">
            <article className="card">
              <img
                className="class-image"
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80"
                alt="Practitioner holding a yoga asana"
                loading="lazy"
              />
              <h3>Asanas (Postures)</h3>
              <p>To build strength, flexibility, and physical well-being.</p>
            </article>
            <article className="card">
              <img
                className="class-image"
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=1200&q=80"
                alt="Calm pranayama breathwork practice"
                loading="lazy"
              />
              <h3>Pranayama (Breathwork)</h3>
              <p>To calm the mind and energize the body.</p>
            </article>
            <article className="card">
              <img
                className="class-image"
                src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1200&q=80"
                alt="Meditation practice in a peaceful setting"
                loading="lazy"
              />
              <h3>Meditation</h3>
              <p>To cultivate inner peace, focus, and clarity.</p>
            </article>
          </div>
          <p className="muted">
            Whether you are a beginner taking your first step onto the mat or
            an experienced practitioner seeking to deepen your practice, my
            approach is tailored to meet you where you are.
          </p>
        </section>

        <section id="schedule" className="section">
          <div className="section-header">
            <h2>Schedule</h2>
          </div>
          <ul className="list">
            <li>Morning flow — 7:00 AM</li>
            <li>Midday reset — 12:00 PM</li>
            <li>Evening unwind — 6:30 PM</li>
          </ul>
        </section>

        <section id="testimonials" className="section">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>Kind words from our students and wellness community.</p>
          </div>
          <div className="grid">
            <article className="card">
              <p className="testimonial-quote">
                “I joined for flexibility, but stayed for the peace. The
                sessions helped me manage stress and sleep better.”
              </p>
              <p className="testimonial-name">— Ananya, Working Professional</p>
            </article>
            <article className="card">
              <p className="testimonial-quote">
                “The breathing and meditation practices made a huge difference
                in my focus and emotional balance.”
              </p>
              <p className="testimonial-name">— Rohan, College Student</p>
            </article>
            <article className="card">
              <p className="testimonial-quote">
                “Their guidance is practical and compassionate. I now have a
                simple routine that I can actually sustain.”
              </p>
              <p className="testimonial-name">— Meera, Homemaker</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Get in touch with Antaha Shuddhi.</p>
          </div>
          <div className="contact">
            <div>
              <p className="muted">
                Address: F - 220 S/4, Block- F, Phase 6, Aya Nagar, New Delhi
                110047
              </p>
              <p className="muted">Phone: 9650737500, 9650747500</p>
              <p className="muted">Email: antahashuddhi@gmail.com</p>
              <p className="muted">
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/antaha.shuddhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  @antaha.shuddhi
                </a>
              </p>
              <p className="muted">
                YouTube:{' '}
                <a
                  href="https://www.youtube.com/@antahshuddhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  @antahshuddhi
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Antaha Shuddhi. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
