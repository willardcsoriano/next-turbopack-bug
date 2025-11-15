// app/test/[id]/page.tsx

interface TestPageProps {
  params: {
    id: string; // e.g., "dynamic-id"
  };
}

export default function DynamicTestPage({ params }: TestPageProps) {
  console.log("RECEIVED PARAMS (Standard Code):", params);

  // Bug occurs here when params becomes a Promise
  if (!params || !params.id) {
    return (
      <div className="p-10 border border-red-500 bg-red-100">
        <h1 className="text-3xl font-bold text-red-700">BUG TRIGGERED</h1>
        <p className="mt-4 text-lg">
          Turbopack did not provide a valid dynamic param.
        </p>

        <p className="mt-4 text-gray-700 text-sm">
          Check the server console — <code>params</code> will be a Promise
          instead of an object.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 border border-green-500 bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">SUCCESS</h1>
      <p className="mt-4 text-lg">
        Dynamic route param is:{" "}
        <span className="font-mono bg-green-200 px-2 rounded">
          {params.id}
        </span>
      </p>
    </div>
  );
}
