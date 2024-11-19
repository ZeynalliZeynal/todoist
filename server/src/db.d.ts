type Priorities = "priority 1" | "priority 2" | "priority 3" | "priority 4";

interface ITask {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: String;
  completed?: boolean;
  tags?: string[];
  slug: string;
  priority: Priorities;
  dueDate?: Date;
}

interface ITemplate {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  exampleUrl: string;
  tags: string[];
}
