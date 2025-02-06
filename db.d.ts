declare global {
  const STATUSES = ['active', 'disabled', 'coming soon'] as const;
  type PlanStatus = (typeof STATUSES)[number];

  type PlanStatusProps = ReadonlyArray<PlanStatus>;

  interface Plan {
    _id: string;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    featureIds: string[];
    status: PlanStatus;
    id: string;
  }

  interface User {
    _id: string;
    verified: boolean;
    createdAt: Date;
    email: string;
    location: {
      city: string;
      country: string;
      continent: string;
    };
    name: string;
    planId: string;
    updatedAt: Date;
    verifiedAt: Date;
  }

  interface Template {
    name: string;
    description: string;
    content: string;
    exampleUrl: string;
    imageUrl: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    category: string;
    user: string;
  }

  interface TemplateCategory {
    _id: string;
    name: string;
    description: string;
    templates: Template[];
  }
}

export {};
