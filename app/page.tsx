import FeatureCard, { Feature } from "../components/FeatureCard";
import TestimonialCard, { Testimonial } from "../components/TestimonialCard";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../data/profiles";

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16 3c3.03 0 5.5 2.47 5.5 5.5 0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" />
      </svg>
    ),
    title: "Human-curated matchmaking",
    description: "Dedicated consultants refine matches using lifestyle, values and family preferences beyond algorithmic filters."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Trust & safety first",
    description: "Multi-stage ID verification, privacy controlled photo sharing, and guardian access keep your journey secure."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
    title: "Personalized discovery",
    description: "Advanced filters, compatibility matrices, and shared storyboards make it easier to recognize your ideal partner."
  }
];

const testimonials: Testimonial[] = [
  {
    couple: "Arjun & Meera",
    location: "Bengaluru, married Feb 2023",
    message:
      "We matched over our shared love for design and classical music. SoulMatch helped our families connect in the most respectful way.",
    image: "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=200&q=80"
  },
  {
    couple: "Karan & Nisha",
    location: "Delhi, married Aug 2022",
    message:
      "The onboarding counselor understood our priorities deeply. Every introduction felt meaningful and authentic — no awkward surprises.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=200&q=80"
  }
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="container mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <span className="badge bg-brand/10 text-brand">Premium Matrimony Platform</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Find a partner who shares your values, ambitions and story
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SoulMatch blends curated matchmaking with intuitive digital tools to help professionals meet like-minded partners
            while honoring family traditions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/profiles" className="button-primary">
              Explore verified profiles
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand/10"
            >
              View onboarding journey
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-gray-600 md:grid-cols-3">
            <div>
              <dt className="font-semibold text-gray-900">10k+</dt>
              <dd>curated introductions</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">92%</dt>
              <dd>match satisfaction score</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">120</dt>
              <dd>cities covered</dd>
            </div>
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1000&q=80"
            alt="Engaged couple"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-white/70">Featured success story</p>
            <h2 className="text-2xl font-semibold">Anita & Dev</h2>
            <p className="mt-2 text-sm text-white/80">
              Matched through shared passion for social impact & travel.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="container mt-20">
        <h2 className="section-title">Why SoulMatch works</h2>
        <div className="grid-responsive">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="container mt-20">
        <h2 className="section-title">Your guided onboarding journey</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery call",
              description: "A dedicated consultant understands your aspirations, lifestyle and family expectations."
            },
            {
              step: "02",
              title: "Profile craft",
              description: "Story-first profile writing with photography and privacy controls tailored for you."
            },
            {
              step: "03",
              title: "Curated intros",
              description: "Receive selective matches, compatibility insights and conversation starters."
            },
            {
              step: "04",
              title: "Family connect",
              description: "Facilitated meetings, etiquette coaching and celebration planning support."
            }
          ].map((step) => (
            <article key={step.step} className="card">
              <span className="badge text-sm">Step {step.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mt-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title">Featured premium profiles</h2>
          <a href="/profiles" className="text-sm font-semibold text-brand hover:text-brand-dark">
            View all profiles →
          </a>
        </div>
        <div className="grid-responsive">
          {profiles.slice(0, 4).map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>

      <section id="success" className="container mt-20">
        <h2 className="section-title">Matching stories we love celebrating</h2>
        <div className="grid-responsive">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.couple} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section id="faq" className="container mt-20">
        <h2 className="section-title">Questions families often ask</h2>
        <div className="grid gap-4">
          {[
            {
              q: "How are matches personalized for me?",
              a: "Your consultant builds a compatibility blueprint using lifestyle, long-term goals, family traditions and faith preferences. Each introduction goes through a 3-level human review before reaching you."
            },
            {
              q: "Can I control who views my photos?",
              a: "Yes. By default all photos are blurred. You can selectively grant full access to members after reviewing their detailed profiles."
            },
            {
              q: "Do you support international matches?",
              a: "We have dedicated networks in the US, UK, Middle East and Singapore with cultural onboarding for both partners and families."
            },
            {
              q: "Is there guidance for first conversations?",
              a: "Our relationship coaches and conversation scripts make it easy to move from online introduction to confident family meetings."
            }
          ].map((item) => (
            <details key={item.q} className="rounded-2xl border border-rose-100 bg-white p-6">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                {item.q}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container mt-20">
        <div className="card grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Shape the next chapter of your story</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Share a few details and your dedicated relationship consultant will connect within 24 hours.
            </p>
          </div>
          <form action="/api/contact" method="post" className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city" placeholder="Where do you live?" />
            </div>
            <div>
              <label htmlFor="story">Tell us about your journey</label>
              <textarea id="story" name="story" rows={3} placeholder="What are you looking for in a partner?" />
            </div>
            <button type="submit" className="button-primary">
              Request a consultation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
