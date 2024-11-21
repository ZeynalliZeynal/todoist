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
  category: string;
  name: string;
  description: string;
  content: string;
  exampleUrl: string;
  imageUrl?: string;
}

interface IUser {
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  email: string;
  photo?: string;
  password: string;
  passwordConfirm?: string;
}

interface IUserMethods {
  isPasswordCorrect: (
    candidatePassword: string,
    userPassword: string,
  ) => Promise<boolean>;
}
