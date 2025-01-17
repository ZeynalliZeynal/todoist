import CodeBlockDefault from '@/app/(geist)/geist/code-block/_sections/code-block-default';

export default function BadgePage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Code Block</h1>
        <p className="text-gray-900">
          Code Block component used across TodoistNEXT.
        </p>
      </section>
      <CodeBlockDefault />
    </div>
  );
}
