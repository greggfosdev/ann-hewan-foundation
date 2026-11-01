import { getPageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { technologyDonations2026 as donation } from "@/data/technology-donations";

export const metadata = getPageMetadata("/programs/technology-donations");

export default function TechnologyDonationsPage() {
  const [leadPhoto, ...galleryPhotos] = donation.photos;

  return (
    <>
      <PageJsonLd path="/programs/technology-donations" />
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-dark hover:text-ocean"
          >
            <span aria-hidden="true">&larr;</span> All Programs
          </Link>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ocean-dark">
                {donation.date}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {donation.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {donation.description}
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {donation.thanks}
              </p>
            </div>
            <figure>
              <a
                href={leadPhoto.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full photo: ${leadPhoto.alt} (opens in a new tab)`}
                className="block overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean"
              >
                <Image
                  src={leadPhoto.src}
                  alt={leadPhoto.alt}
                  width={leadPhoto.width}
                  height={leadPhoto.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </a>
            </figure>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the October Visits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A few moments with students, staff, and the people who helped
              bring the donations to Jamaica. Select a photo to view it in full.
            </p>
          </div>
          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryPhotos.map((photo) => (
              <figure key={photo.src} className="mb-6 break-inside-avoid">
                <a
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full photo: ${photo.alt} (opens in a new tab)`}
                  className="block overflow-hidden rounded-xl bg-sand shadow-sm ring-1 ring-gray-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                </a>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">More from Our Work</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Link href="/programs/back-to-school" className="font-semibold text-ocean-dark hover:text-ocean">
              Back 2 School Initiative <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/impact" className="font-semibold text-ocean-dark hover:text-ocean">
              See Our Impact <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
