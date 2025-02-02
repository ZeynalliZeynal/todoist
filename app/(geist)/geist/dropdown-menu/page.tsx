import DropdownMenuDefault from './_sections/dropdown-menu-default';

export default function BadgePage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Dropdown Menu</h1>
        <p className="text-gray-900">
          Displays a menu to the user — such as a set of actions or functions —
          triggered by a button.
        </p>
      </section>
      <DropdownMenuDefault />
    </div>
  );
}
