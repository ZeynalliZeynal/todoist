export interface ComponentData {
  name: string;
  description: string;
  sections: {
    title: string;
    content: string;
    examples: {
      preview: React.ReactNode;
    }[];
    code: string;
  }[];
}
