declare global {
  const STATUSES = ['active', 'disabled', 'coming soon'] as const;
  type PlanStatus = (typeof STATUSES)[number];

  type PlanStatusProps = ReadonlyArray<PlanStatus>;

  interface PlanFeature {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    name: string;
    plans: ({ value: number | string | boolean } & Plan)[];
  }

  interface Plan {
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    featureIds: string[];
    allFeatures: PlanFeature[];
    status: PlanStatus;
    id: string;
  }
  interface Project {
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt?: Date;
    logo?: string;
    user: User;
    id: string;
    favorite: boolean;
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
    plan: Plan;
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
