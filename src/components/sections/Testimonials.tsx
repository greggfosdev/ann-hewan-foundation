const testimonials = [
  {
    quote:
      "Before the breakfast program, I couldn't focus in school because I was so hungry. Now I can learn and dream about becoming a doctor.",
    name: "Kadijah M.",
    role: "Student, Age 10",
    initials: "K",
    color: "gold",
  },
  {
    quote:
      "The Back 2 School program lifted such a burden from our family. My children could start the year with pride, not shame.",
    name: "Marcia T.",
    role: "Parent of 3",
    initials: "M",
    color: "ocean",
  },
  {
    quote:
      "The foundation doesn't just help individuals—they're rebuilding our entire community. The playing fields brought our youth together.",
    name: "Devon S.",
    role: "Community Leader",
    initials: "D",
    color: "coral",
  },
  {
    quote:
      "I've seen firsthand how every dollar is used. This foundation operates with complete integrity and genuine love for the community.",
    name: "Pastor Williams",
    role: "Local Church Leader",
    initials: "P",
    color: "trust-green",
  },
  {
    quote:
      "When the hurricane hit, the foundation was there within hours. They didn't just bring supplies—they brought hope.",
    name: "Sandra M.",
    role: "Hurricane Relief Recipient",
    initials: "S",
    color: "ocean",
  },
  {
    quote:
      "My grandson gets breakfast every day because of this program. It gives me peace knowing he's not going to school hungry.",
    name: "Miss Edna",
    role: "Grandmother",
    initials: "E",
    color: "gold",
  },
];

const colorClasses = {
  gold: "bg-gold/20 text-gold-dark",
  ocean: "bg-ocean/20 text-ocean-dark",
  coral: "bg-coral/20 text-coral",
  "trust-green": "bg-trust-green/20 text-trust-green",
};

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Voices from the Community
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stories That Inspire
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real voices from the families and community members whose lives have
            been touched by your generosity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-cream p-8 ring-1 ring-sand-dark/50"
            >
              {/* Quote icon */}
              <svg
                className="h-8 w-8 text-gold/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="flex-1 text-gray-600 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-sand-dark/30">
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    colorClasses[testimonial.color as keyof typeof colorClasses]
                  }`}
                >
                  <span className="text-lg font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-gold">500+</p>
            <p className="text-sm text-gray-600">Supporters</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div>
            <p className="text-3xl font-bold text-gold">15</p>
            <p className="text-sm text-gray-600">Years Serving</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div>
            <p className="text-3xl font-bold text-gold">100%</p>
            <p className="text-sm text-gray-600">To Programs</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div>
            <p className="text-3xl font-bold text-gold">501(c)(3)</p>
            <p className="text-sm text-gray-600">Tax Exempt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
