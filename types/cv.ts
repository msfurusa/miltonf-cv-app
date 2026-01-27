export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  bullets: string[];
  tools?: string;
}

export interface EducationItem {
  degree?: string;
  institution?: string;
  period?: string;
}

export interface CV {
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  phone?: string;
  summary?: string;
  skills?: Record<string, string[]>;
  experience?: ExperienceItem[];
  certifications?: string[];
  education?: EducationItem[];
}
