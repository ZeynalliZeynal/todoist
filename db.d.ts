declare global {
  const STATUSES = ["active", "disabled", "coming soon"] as const;
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
}

export {};
