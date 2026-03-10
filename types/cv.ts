export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  bullets: string[];
  tools?: string;
}

export interface EducationItem {
  qualification?: string;
  institution?: string;
  year?: string;
  modules?: string[];
}

export interface CV {
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  linkedin?: string;
  phone?: string;
  profile?: string;
  summary?: string;
  skills?: Record<string, string[]>;
  experience?: ExperienceItem[];
  certifications?: string[];
  education?: EducationItem[];
}
