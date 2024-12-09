declare global {
  interface Plan {
    _id: string;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    featureIds: string[];
    id: string;
  }
}

export {};
