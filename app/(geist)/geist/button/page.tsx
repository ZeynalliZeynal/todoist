import ButtonSizes from '@/app/(geist)/geist/button/_sections/button-sizes';
import ButtonVariants from '@/app/(geist)/geist/button/_sections/button-variants';
import ButtonIconOnly from '@/app/(geist)/geist/button/_sections/button-icon-only';
import ButtonSuffixPrefix from '@/app/(geist)/geist/button/_sections/button-suffix-prefix';
import ButtonDisabled from '@/app/(geist)/geist/button/_sections/button-disabled';
import ButtonLinkSection from '@/app/(geist)/geist/button/_sections/button-link-section';

export default function ButtonPage() {
  return (
    <div className="divide-y">
      <section className="p-12">
        <h1 className="mb-3">Button</h1>
        <p className="text-gray-900">
          Trigger an action or event, such as submitting a form or displaying a
          dialog.
        </p>
      </section>
      <ButtonSizes />
      <ButtonVariants />
      <ButtonIconOnly />
      <ButtonSuffixPrefix />
      <ButtonDisabled />
      <ButtonLinkSection />
    </div>
  );
}
