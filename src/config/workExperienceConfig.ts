export interface WorkExperienceConfig {
  title: string;
  company: string;
  location?: string;
  startYear: number;
  endYear?: number;
  description: string;
  technologiesUsed?: string[];
}

export const workExperienceConfig: WorkExperienceConfig[] = [
    {
        title: "IT-Specialist for Software Development",
        company: "IREKS GmBh",
        location: "Kulmbach, Germany",
        startYear: 2024,
        description: "Apprenticeship as an IT-Specialist for Software Development.",
        technologiesUsed: ["Java", "Kotlin", "Spring Boot"]
    }
];