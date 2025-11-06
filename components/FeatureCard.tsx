import type { ReactNode } from "react";

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="card">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        {feature.icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
    </article>
  );
}
