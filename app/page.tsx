// app/page.tsx

import Link from "next/link";

export default function RootPage() {
  return (
    <div className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold mb-6">
        Turbopack Dynamic Route Params Bug Reproduction
      </h1>

      <p className="text-gray-700">
        This minimal project demonstrates the issue where <code>params</code> is
        wrapped in a Promise when using Turbopack on a dynamic route.
      </p>

      {/* Broken Route */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-red-600">🔴 Broken behavior</h2>
        <p className="text-sm text-gray-500">
          This route triggers the Turbopack bug (params becomes a Promise).
        </p>

        <Link href="/test/dynamic-id" className="inline-block">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Go to /test/dynamic-id →
          </button>
        </Link>
      </div>

      {/* Working Route */}
      <div className="space-y-2 pt-6">
        <h2 className="text-xl font-semibold text-green-600">🟢 Expected behavior</h2>
        <p className="text-sm text-gray-500">
          This route returns the correct params object.
        </p>

        <Link href="/test-working/dynamic-id" className="inline-block">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Go to /test-working/dynamic-id →
          </button>
        </Link>
      </div>

      {/* Static Route */}
      <p className="mt-10 text-sm text-gray-500">
        Static route (baseline):{" "}
        <Link href="/test" className="text-blue-500 hover:underline">
          /test
        </Link>
      </p>

      <p className="text-xs text-gray-400 mt-6">
        Both routes use the same code. Only the Turbopack-compiled one fails.
      </p>
    </div>
  );
}
