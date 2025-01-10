import CheckboxDefault from '@/app/(geist)/geist/checkbox/_sections/checkbox-default';
import CheckboxDisabled from '@/app/(geist)/geist/checkbox/_sections/checkbox-disabled';

export default function CheckboxPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Checkbox</h1>
        <p className="text-gray-900">
          A control that toggles between two options, checked or unchecked.
        </p>
      </section>
      <CheckboxDefault />
      <CheckboxDisabled />
    </div>
  );
}
