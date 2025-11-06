import Link from "next/link";
import { Profile } from "../data/profiles";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="card h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
        {profile.verified && <span className="badge">Verified</span>}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {profile.age} • {profile.profession}
      </p>
      <p className="mt-2 text-sm text-gray-500">{profile.location}</p>
      <p className="mt-4 line-clamp-3 text-sm text-gray-600">{profile.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.interests.slice(0, 3).map((interest) => (
          <span key={interest} className="badge bg-rose-50 text-gray-700">
            {interest}
          </span>
        ))}
      </div>
      <Link
        href={`/profiles/${profile.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        View profile →
      </Link>
    </article>
  );
}
