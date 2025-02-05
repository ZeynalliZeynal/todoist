import apiClient from '@/lib/api-client';
import TemplateTabs from '@/app/(landing)/_sections/template-tabs';
import { ZeroConfig } from 'vercel-geist-icons';
import EmptyState from '@/components/ui/empty-state';

export default async function TemplateData() {
  try {
    const {
      data: {
        data: { categories },
      },
    } = await apiClient(
      'template-categories?templates=enable&fields=name&size=6'
    );

    return <TemplateTabs categories={categories} />;
  } catch {
    return (
      <EmptyState
        title="No templates found."
        description="  There might be some issues on the server side. This might be solved soon."
        icon={<ZeroConfig />}
      />
    );
  }
}
