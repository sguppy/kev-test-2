
// FIX: Import the `ReactNode` type to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export type Tab = 'OBSERVER_INTAKE' | 'PROJECTS' | 'LAB_NOTES' | 'ARTIST_INFO_LOG' | 'DO_YOU_COPY';

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  status: string;
  description: string;
  // FIX: Use the imported `ReactNode` type instead of `React.ReactNode`.
  details: ReactNode;
}

export interface LogEntry {
  id: string;
  title: string;
  date: string;
  shortTitle: string;
  excerpt: string;
  content: ReactNode;
}
