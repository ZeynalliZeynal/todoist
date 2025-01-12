import TabClick from './_sections/tab-click';

export default function TabsPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Button</h1>
        <p className="text-gray-900">
          Trigger an action or event, such as submitting a form or displaying a
          dialog.
        </p>
      </section>
      <TabClick />
    </div>
  );
}
