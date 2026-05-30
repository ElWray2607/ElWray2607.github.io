export interface EducationConfig {
    institution: string;
    grade?: {
        grade: string;
        description: string;
    };
    degree?: string;
    fieldOfStudy?: string;
    startYear: number;
    endYear?: number;
    instituteUrl: string;
    honors?: string[];
    relevantCourses?: string[];
}

export const educationConfig: EducationConfig[] = [
    {
        institution: "Carl von Linde Secondary School",
        grade: {
            grade: "1.09",
            description: "Grade Point Average",
        },
        startYear: 2018,
        endYear: 2024,
        degree: "Intermediate School Leaving Certificate",
        instituteUrl: "https://realschule-kulmbach.de/",
        relevantCourses: ["Mathematics Track"],
        honors: [
            "1st Place, Upper Franconian Secondary School Championship (STEM Category)",
            "2nd Place, Upper Franconian Secondary School Championship (Academic Achievement Category)",
        ]
    },

    {
        institution: "Bayreuth Vocational School I",
        startYear: 2024,
        degree: "IT-Specialist for Software Development",
        instituteUrl: "https://www.bs1-bt.de/berufsschule",
    }
];