import { ComponentData } from './geist-component.types';

const componentData: Record<string, ComponentData> = {
  button: {
    name: 'Button',
    description: 'A clickable button component with various styles and sizes.',
    sections: [
      {
        title: 'Sizes',
        content: 'The default size is small (sm).',
        examples: [
          {
            code: '<Button size="sm">Small Button</Button>',
            preview: <Button size="sm">Small Button</Button>,
          },
          {
            code: '<Button size="md">Medium Button</Button>',
            preview: <Button size="md">Medium Button</Button>,
          },
          {
            code: '<Button size="lg">Large Button</Button>',
            preview: <Button size="lg">Large Button</Button>,
          },
        ],
      },
      // Add more sections as needed
    ],
  },
  // Add more components here
};

export async function getComponentData(
  componentName: string
): Promise<ComponentData | null> {
  // In a real-world scenario, you might fetch this data from an API or database
  return componentData[componentName] || null;
}
