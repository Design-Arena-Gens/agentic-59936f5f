export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <span className="badge">Profile unavailable</span>
      <h1 className="text-3xl font-semibold text-gray-900">We couldn’t find that page</h1>
      <p className="max-w-md text-sm leading-relaxed text-gray-600">
        The profile you are looking for may have been moved or is no longer active. Explore our curated matches to discover
        your perfect partner.
      </p>
      <a href="/profiles" className="button-primary">
        Browse profiles
      </a>
    </div>
  );
}
