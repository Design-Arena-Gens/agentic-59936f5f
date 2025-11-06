'use client';

import { useMemo, useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import SearchFilters from "../../components/SearchFilters";
import { profiles as seedProfiles } from "../../data/profiles";

export default function ProfilesPage() {
  const [filteredProfiles, setFilteredProfiles] = useState(seedProfiles);

  const statistics = useMemo(() => {
    const avgAge = Math.round(seedProfiles.reduce((sum, profile) => sum + profile.age, 0) / seedProfiles.length);
    const professions = new Set(seedProfiles.map((profile) => profile.profession));
    const cities = new Set(seedProfiles.map((profile) => profile.location.split(",")[0].trim()));

    return {
      total: seedProfiles.length,
      averageAge: avgAge,
      professions: professions.size,
      cities: cities.size
    };
  }, []);

  return (
    <div className="container py-16">
      <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-rose-100/60 p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-gray-900">Discover compatible matches</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          Explore curated profiles from verified professionals across India. Every listing includes detailed lifestyle insights,
          family values and partner expectations to help you make an informed decision.
        </p>
        <dl className="mt-8 grid gap-6 text-sm text-gray-600 md:grid-cols-4">
          <div>
            <dt className="text-lg font-semibold text-gray-900">{statistics.total}</dt>
            <dd>Premium profiles</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-gray-900">{statistics.cities}</dt>
            <dd>Major cities represented</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-gray-900">{statistics.professions}</dt>
            <dd>Distinct professions</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold text-gray-900">{statistics.averageAge}</dt>
            <dd>Average age</dd>
          </div>
        </dl>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <SearchFilters profiles={seedProfiles} onFilter={setFilteredProfiles} />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Matching profiles</h2>
            <span className="text-sm text-gray-500">{filteredProfiles.length} results</span>
          </div>
          <div className="mt-6 grid-responsive">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
            {filteredProfiles.length === 0 && (
              <div className="card col-span-full text-center text-sm text-gray-600">
                No profiles match your filters yet. Adjust your selections or connect with our matchmaking team for concierge
                support.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
