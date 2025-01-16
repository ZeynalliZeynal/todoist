import TabPill from './_sections/tab-pill';
import TabIndicator from './_sections/tab-indicator';
import TabCustom from './_sections/tab-custom';

export default function TabsPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Button</h1>
        <p className="text-grayH-900">
          Trigger an action or event, such as submitting a form or displaying a
          dialog.
        </p>
      </section>
      <TabPill />
      <TabIndicator />
      <TabCustom />
    </div>
  );
}
