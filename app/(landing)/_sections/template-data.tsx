import apiClient from '@/lib/api-client';
import TemplateTabs from '@/app/(landing)/_sections/template-tabs';

export default async function TemplateData() {
  try {
    const {
      data: {
        data: { categories },
      },
    } = await apiClient(
      'template-categories?templates=enable&fields=name&size=5',
    );

    return <TemplateTabs categories={categories} />;
  } catch {
    return 'No template found.';
  }
}
