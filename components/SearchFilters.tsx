'use client';

import { useMemo, useState } from "react";
import type { Profile } from "../data/profiles";

export type FilterState = {
  minAge: number;
  maxAge: number;
  location: string;
  profession: string;
  language: string;
};

type Props = {
  profiles: Profile[];
  onFilter: (filtered: Profile[]) => void;
};

const defaultFilters: FilterState = {
  minAge: 24,
  maxAge: 38,
  location: "",
  profession: "",
  language: ""
};

export default function SearchFilters({ profiles, onFilter }: Props) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const locations = useMemo(
    () => Array.from(new Set(profiles.map((profile) => profile.location.split(",")[0].trim()))),
    [profiles]
  );

  const professions = useMemo(
    () => Array.from(new Set(profiles.map((profile) => profile.profession))),
    [profiles]
  );

  const languages = useMemo(
    () => Array.from(new Set(profiles.flatMap((profile) => profile.languages))),
    [profiles]
  );

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    handleFilter(newFilters);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    handleFilter(defaultFilters);
  };

  const handleFilter = (state: FilterState) => {
    const filtered = profiles.filter((profile) => {
      const withinAge = profile.age >= state.minAge && profile.age <= state.maxAge;
      const matchesLocation = state.location
        ? profile.location.toLowerCase().includes(state.location.toLowerCase())
        : true;
      const matchesProfession = state.profession ? profile.profession === state.profession : true;
      const matchesLanguage = state.language ? profile.languages.includes(state.language) : true;

      return withinAge && matchesLocation && matchesProfession && matchesLanguage;
    });

    onFilter(filtered);
  };

  return (
    <section className="card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-900">Refine your matches</h2>
        <button
          type="button"
          onClick={resetFilters}
          className="text-sm font-medium text-brand hover:text-brand-dark"
        >
          Reset
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="minAge">Min age</label>
          <input
            id="minAge"
            type="number"
            value={filters.minAge}
            min={21}
            max={filters.maxAge}
            onChange={(event) => updateFilter("minAge", Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="maxAge">Max age</label>
          <input
            id="maxAge"
            type="number"
            value={filters.maxAge}
            min={filters.minAge}
            max={50}
            onChange={(event) => updateFilter("maxAge", Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="location">Preferred city</label>
          <select
            id="location"
            value={filters.location}
            onChange={(event) => updateFilter("location", event.target.value)}
          >
            <option value="">All locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            value={filters.profession}
            onChange={(event) => updateFilter("profession", event.target.value)}
          >
            <option value="">Any profession</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>
                {profession}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="language">Languages</label>
          <select
            id="language"
            value={filters.language}
            onChange={(event) => updateFilter("language", event.target.value)}
          >
            <option value="">Any language</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
