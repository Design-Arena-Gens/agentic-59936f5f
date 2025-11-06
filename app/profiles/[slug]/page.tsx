import { notFound } from "next/navigation";
import { profiles } from "../../../data/profiles";

export async function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.slug }));
}

export default function ProfileDetail({ params }: { params: { slug: string } }) {
  const profile = profiles.find((item) => item.slug === params?.slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="container py-16">
      <a href="/profiles" className="text-sm font-medium text-brand hover:text-brand-dark">
        ← Back to profiles
      </a>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <section className="card">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">{profile.name}</h1>
              <p className="mt-2 text-sm text-gray-600">
                {profile.age} • {profile.profession}
              </p>
              <p className="text-sm text-gray-500">{profile.location}</p>
            </div>
            {profile.verified && <span className="badge">Verified profile</span>}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {profile.gallery.map((image) => (
              <img key={image} src={image} alt={profile.name} className="h-64 w-full rounded-2xl object-cover" />
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">{profile.bio}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Interests & lifestyle</h2>
              <ul className="mt-4 grid gap-2">
                {profile.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-brand"></span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Education & languages</h2>
              <p className="mt-4 text-sm text-gray-600">{profile.education}</p>
              <p className="mt-2 text-sm text-gray-600">Speaks {profile.languages.join(", ")}</p>
            </div>
          </div>
        </section>
        <aside className="card space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Partner preferences</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium text-gray-900">Age:</span> {profile.partnerPreferences.ageRange[0]} -
                {profile.partnerPreferences.ageRange[1]}
              </li>
              <li>
                <span className="font-medium text-gray-900">Cities:</span> {profile.partnerPreferences.location.join(", ")}
              </li>
              <li>
                <span className="font-medium text-gray-900">Languages:</span> {profile.partnerPreferences.languages.join(", ")}
              </li>
              <li>
                <span className="font-medium text-gray-900">Core values:</span> {profile.partnerPreferences.values.join(", ")}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Introduce yourself</h2>
            <p className="mt-2 text-sm text-gray-600">
              Share your profile summary and we will facilitate a secure introduction if there is mutual interest.
            </p>
            <form action="/api/contact" method="post" className="mt-4 grid gap-3">
              <input type="hidden" name="interest" value={profile.name} />
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input id="fullName" name="fullName" required placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input id="contactEmail" name="contactEmail" type="email" required placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="introduction" className="text-sm font-medium text-gray-700">
                  Brief introduction
                </label>
                <textarea id="introduction" name="introduction" rows={4} required />
              </div>
              <button type="submit" className="button-primary">
                Request introduction
              </button>
            </form>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4 text-sm text-gray-600">
            <p className="font-medium text-gray-900">Need concierge support?</p>
            <p className="mt-2">
              WhatsApp our relationship managers at <a href="tel:+91991100123">+91 99110 0123</a> for family onboarding and meeting
              planning services.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
