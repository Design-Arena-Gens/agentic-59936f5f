export type Testimonial = {
  couple: string;
  location: string;
  message: string;
  image: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.couple}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{testimonial.couple}</h3>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">“{testimonial.message}”</p>
    </article>
  );
}
