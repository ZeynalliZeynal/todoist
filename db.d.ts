declare global {
  const STATUSES = ['active', 'disabled', 'coming soon'] as const;
  type PlanStatus = (typeof STATUSES)[number];

  type PlanStatusProps = ReadonlyArray<PlanStatus>;

  const PRIORITIES = [
    'priority 1',
    'priority 2',
    'priority 3',
    'priority 4',
  ] as const;

  type TaskPriority = (typeof PRIORITIES)[number];

  interface Member {
    id: string;
    user: User;
    memberships: {
      entity: Project[];
      entityType: string;
    }[];
    activated: boolean;
  }

  interface Notification {
    id: string;
    name: string;
    description?: string;
    data: Task | Project;
    type: NotificationType;
    archived: boolean;
    read: boolean;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }

  interface UserAgent {
    client: {
      engine: string;
      engineVersion: string;
      name: string;
      type: string;
      version: string;
    } | null;
    device: {
      brand: string;
      model: string;
      type: string;
    } | null;
    os: {
      name: string;
      platform: string;
      version: string;
    } | null;
  }

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
    updatedAt: Date;
    logo?: string;
    id: string;
    favorite: boolean;
    slug: string;

    user: User;
    tasks: Task[];
  }

  interface Task {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt?: Date;
    priority: TaskPriority;
    dueDate: Date;
    completed: boolean;
    slug: string;
    tags: TaskTag[];

    project: Project;
    user: User;
  }

  interface Session {
    _id: string;
    createdAt: Date;
    current: boolean;
    userAgent: UserAgent;
  }

  interface TaskTag {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description?: string;
    id: string;
  }

  interface User {
    _id: string;
    verified: boolean;
    createdAt: Date;
    email: string;
    avatar: string;
    location: {
      city: string;
      countryName: string;
      continentName: string;
    };
    plan: Plan;
    name: string;
    planId: string;
    updatedAt: Date;
    verifiedAt: Date;
    online: boolean;
    lastOnline?: Date;
    notifications: Notification[];
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

  interface NotificationType {
    id: string;
    name: string;
    label: string;
    description?: string;
  }

  interface TemplateCategory {
    _id: string;
    name: string;
    description: string;
    templates: Template[];
  }

  interface NotificationSettingPreference {
    type: NotificationType;
    enabled: boolean;
    _id: string;
  }

  interface NotificationSetting {
    [key: string]: NotificationSettingPreference[];
  }
}

export {};
