// app/test-working/[id]/page.tsx

interface WorkingPageProps {
  params: {
    id: string;
  };
}

export default function WorkingTestPage({ params }: WorkingPageProps) {
  console.log("WORKING ROUTE PARAMS:", params);

  return (
    <div className="p-10 border border-green-600 bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">EXPECTED BEHAVIOR</h1>

      <p className="mt-4 text-lg">
        Dynamic route param is:{" "}
        <span className="font-mono bg-green-200 px-2 rounded">{params.id}</span>
      </p>

      <p className="mt-4 text-sm text-gray-500">
        This route uses identical component logic but does not trigger the bug.
      </p>
    </div>
  );
}
