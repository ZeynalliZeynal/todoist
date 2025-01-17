import CodeBlockDefault from '@/app/(geist)/geist/code-block/_sections/code-block-default';

export default function BadgePage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Badge</h1>
        <p className="text-gray-900">
          A label that emphasizes an element that requires attention, or helps
          categorize with other similar elements.
        </p>
      </section>
      <CodeBlockDefault />
    </div>
  );
}
