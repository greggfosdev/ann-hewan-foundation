import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-2">Page not found</h2>
        <p className="text-sm text-gray-500 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 text-sm font-medium bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
