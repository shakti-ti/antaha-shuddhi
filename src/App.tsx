import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const initialCallbackForm = {
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    enquiry: ''
  }
  const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`
  const [expandedTestimonial, setExpandedTestimonial] = useState<string | null>(null)
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false)
  const [callbackForm, setCallbackForm] = useState(initialCallbackForm)
  const heroImages = [
    withBase('gallery/gallery1.jpeg'),
    withBase('gallery/gallery2.jpeg'),
    withBase('gallery/gallery3.jpeg')
  ]
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  const testimonials = [
    {
      id: 'priyanka',
      name: 'Priyanka Ghosh',
      image: withBase('priyanka.jpeg'),
      excerpt: 'Your excellence and deep knowledge of yoga has kept me connected for 6 years.',
      fullText: `It's been approximately 6 years since I joined your yoga sessions. The reason that has kept me connected to you all these years is your excellence and deep knowledge of yoga. Your sessions are very relaxing and refreshing — you always keep in mind the individual needs of each person in the class and ensure everyone's posture is corrected. You have a keen eye for observation. Your description of each and every point is always clear. You make a deep connection with your students, which makes the sessions not only a yoga and meditation class but also a healing therapy. The meditation and relaxation sessions are always truly refreshing. You are an excellent instructor with deep knowledge. Thank you so much!`
    },
    {
      id: 'jayshree',
      name: 'Jayshree',
      image: withBase('jayshree.jpeg'),
      excerpt: 'You introduced me to a whole new way of living with patience and care.',
      fullText: `Grateful beyond words for my very first yoga teacher, Nidhi 🙏

You didn't just teach me yoga—you introduced me to a whole new way of living. With so much patience, you guided me through every step, every posture, and helped me truly understand the benefits behind each movement.

Your teachings didn't just change my routine, they reshaped my life—bringing strength, balance, and peace within.
Forever thankful for your guidance, encouragement, and belief in me, Nidhi. This journey started with you, and it will always hold a special place in my heart ❤️🧘‍♀️`
    },
    {
      id: 'swarnlata',
      name: 'Swarnlata Morya',
      image: withBase('swarnlata.jpeg'),
      excerpt: 'Yoga became a part of my daily life with real changes in health and wellness.',
      fullText: `With immense patience and kindness, Nidhi teaches me yoga step by step, always explaining not just the "how" but also the "why" behind each practice. Her guidance made me feel comfortable, confident, and motivated, even as a beginner at this stage of life.

Over time, I started seeing real changes. My thyroid issues became more manageable, my weight improved, and I began to feel more active and balanced both physically and mentally. Yoga is no longer just an exercise for me—it's a part of my daily life and well-being. Nidhi connects personally and guides on day to day healthy habits.

I am truly grateful for her dedication, support, and belief that it's never too late to start.`
    }
  ]

  const toggleTestimonial = (id: string) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id)
  }

  const goToNextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
  }

  const goToPreviousHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => {
      window.clearInterval(timer)
    }
  }, [heroImages.length])

  useEffect(() => {
    if (!isCallbackModalOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCallbackModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isCallbackModalOpen])

  const handleCallbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = `Hello Antaha Shuddhi, I would like to request a callback for enquiry.%0A%0AName: ${callbackForm.name}%0APhone: ${callbackForm.phone}%0AEmail: ${callbackForm.email || 'Not provided'}%0APreferred time: ${callbackForm.preferredTime || 'Not specified'}%0AEnquiry: ${callbackForm.enquiry || 'Not specified'}`

    window.open(`https://wa.me/919650737500?text=${message}`, '_blank', 'noopener,noreferrer')
    setIsCallbackModalOpen(false)
    setCallbackForm(initialCallbackForm)
  }

  return (
    <div className="page">
      <div className="announcement-bar">
        <span>Teacher Training Course — YCB Level I, II &amp; III</span>
        <a href="#contact" className="announcement-cta">Enquire Now</a>
      </div>
      <header className="site-header">
        <div className="brand">
          <img className="brand-mark" src={withBase('favicon.png')} alt="" aria-hidden="true" />
          <span className="brand-name">Antaha Shuddhi</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#learning-approach">Learning</a>
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <span className="header-phone" aria-label="Phone number">
            📞 +91 9650737500
          </span>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Antaha Shuddhi</p>
            <h1>Discover Your Inner Peace</h1>
            <p className="subtext">
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
            <button
              className="carousel-button carousel-button-prev"
              onClick={goToPreviousHeroImage}
              aria-label="Previous hero image"
            >
              ‹
            </button>
            <img
              className="hero-image"
              src={heroImages[currentHeroImage]}
              alt="Yoga practice session at Antaha Shuddhi"
            />
            <button
              className="carousel-button carousel-button-next"
              onClick={goToNextHeroImage}
              aria-label="Next hero image"
            >
              ›
            </button>
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
                src={withBase('nidhi.jpeg')}
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
                src={withBase('rupesh.jpeg')}
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
                // src={withBase('mudra.jpeg')}
                alt="Calm pranayama breathwork practice"
                loading="lazy"
              />
              <h3>Pranayama (Breathwork)</h3>
              <p>To calm the mind, balance the nervous system, and restore the body's natural energy.</p>
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
          <br />
          <p className="muted">
            Whether you are a beginner taking your first step onto the mat or
            an experienced practitioner seeking to deepen your practice, my
            approach is tailored to meet you where you are.
          </p>
          <div className="offer-banner">
            <div className="offer-banner-item">
              <span className="offer-banner-icon">🏢</span>
              <span>Corporate Classes</span>
            </div>
            <div className="offer-banner-divider" />
            <div className="offer-banner-item">
              <span className="offer-banner-icon">💻</span>
              <span>Online &amp; Offline</span>
            </div>
            <div className="offer-banner-divider" />
            <div className="offer-banner-item">
              <span className="offer-banner-icon">🧑‍🤝‍🧑</span>
              <span>Group &amp; Personal Sessions</span>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>Kind words from our students and wellness community.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className={`testimonial-card ${expandedTestimonial === testimonial.id ? 'expanded' : ''}`}
              >
                <img
                  className="testimonial-image"
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                />
                <div className="testimonial-content">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">
                    {expandedTestimonial === testimonial.id ? testimonial.fullText : testimonial.excerpt}
                  </p>
                  <button
                    className="testimonial-toggle"
                    onClick={() => toggleTestimonial(testimonial.id)}
                    aria-expanded={expandedTestimonial === testimonial.id}
                  >
                    {expandedTestimonial === testimonial.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </article>
            ))}
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

      <button
        className="whatsapp-fab"
        type="button"
        onClick={() => setIsCallbackModalOpen(true)}
        aria-label="Open callback request form"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.42 0 .02 5.41.02 12.05c0 2.13.56 4.2 1.62 6.03L0 24l6.08-1.59a12 12 0 0 0 5.98 1.53h.01c6.64 0 12.05-5.4 12.05-12.05a11.92 11.92 0 0 0-3.6-8.41Zm-8.45 18.42h-.01a9.95 9.95 0 0 1-5.06-1.38l-.36-.22-3.6.94.96-3.5-.24-.37a9.96 9.96 0 0 1-1.53-5.31C2.23 6.53 6.53 2.23 11.95 2.23c2.65 0 5.14 1.03 7.01 2.91a9.9 9.9 0 0 1 2.9 7.03c0 5.43-4.3 9.73-9.79 9.73Zm5.34-7.3c-.29-.14-1.72-.85-1.99-.95-.26-.1-.45-.14-.64.14-.18.29-.74.95-.9 1.15-.16.2-.32.22-.6.07-.27-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.62-1.53-1.9-.16-.29-.02-.44.12-.58.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.2.04-.37-.03-.52-.08-.14-.64-1.56-.88-2.13-.23-.56-.47-.49-.64-.5h-.55c-.2 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.42s1.06 2.8 1.2 2.99c.14.2 2.08 3.2 5.03 4.48.7.3 1.25.48 1.68.61.71.22 1.36.19 1.87.11.57-.09 1.72-.7 1.97-1.37.24-.67.24-1.24.17-1.37-.07-.12-.25-.2-.54-.34Z"
          />
        </svg>
      </button>

      {isCallbackModalOpen && (
        <div
          className="callback-modal-backdrop"
          role="presentation"
          onClick={() => setIsCallbackModalOpen(false)}
        >
          <div
            className="callback-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="callback-modal-close"
              type="button"
              onClick={() => setIsCallbackModalOpen(false)}
              aria-label="Close callback request form"
            >
              ×
            </button>
            <h3 id="callback-modal-title">Request a Call Back</h3>
            <p className="muted">Share your details and we will connect with you shortly.</p>

            <form className="form callback-form" onSubmit={handleCallbackSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  required
                  value={callbackForm.name}
                  onChange={(event) =>
                    setCallbackForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="Enter your name"
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  required
                  value={callbackForm.phone}
                  onChange={(event) =>
                    setCallbackForm((prev) => ({ ...prev, phone: event.target.value }))
                  }
                  placeholder="Enter your phone number"
                />
              </label>

              <label>
                Email (optional)
                <input
                  type="email"
                  value={callbackForm.email}
                  onChange={(event) =>
                    setCallbackForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="Enter your email"
                />
              </label>

              <label>
                Preferred Callback Time
                <input
                  type="text"
                  value={callbackForm.preferredTime}
                  onChange={(event) =>
                    setCallbackForm((prev) => ({ ...prev, preferredTime: event.target.value }))
                  }
                  placeholder="e.g. Morning, 4:00 PM"
                />
              </label>

              <label>
                Enquiry
                <textarea
                  rows={4}
                  value={callbackForm.enquiry}
                  onChange={(event) =>
                    setCallbackForm((prev) => ({ ...prev, enquiry: event.target.value }))
                  }
                  placeholder="Tell us what you are looking for"
                />
              </label>

              <button className="primary" type="submit">
                Request Call Back
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
