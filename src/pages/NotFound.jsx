import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="inline-block rounded bg-primary px-6 py-3 text-white">
          Return Home
        </Link>
      </div>
    </section>
  );
}
