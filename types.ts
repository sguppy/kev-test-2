export type Tab = 'SYSTEM' | 'PROJECTS' | 'CONTACT';

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  status: string;
  description: string;
  details: React.ReactNode;
}
