export interface ITask {
    title: string;
    description: string;
    dueDate: Date | null;
    priority: 'low' | 'medium' | 'high';
  }
  