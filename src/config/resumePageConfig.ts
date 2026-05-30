import type {EducationConfig} from './educationConfig';
import type {WorkExperienceConfig} from './workExperienceConfig';
import type {AchievmentConfig} from './achievmentConfig';
import type {SkillConfig} from './skillConfig';
import type {InterestsConfig} from './interestsConfig';

import {educationConfig} from './educationConfig';
import {workExperienceConfig} from './workExperienceConfig';
import {achievmentConfig} from './achievmentConfig';
import {skillConfig} from './skillConfig';
import {interestsConfig} from './interestsConfig';
export interface ResumePageConfig {
    name: string;
    tagline?: string;
    email?: string;
    location?: string;
    contact?: {
        email?: string;
        phone?: string;
        linkedIn?: string;
        github?: string;
    }
    education: EducationConfig[];
    workExperience: WorkExperienceConfig[];
    achievments?: AchievmentConfig[];
    skills: SkillConfig[];
    interests?: InterestsConfig[];
}

export const resumePageConfig: ResumePageConfig = {
    name: "Tom Schrepfer",
    tagline: "IT-Specialist for Software Engineering",
    email: "tschrepfer7@gmail.com",
    location: "Kulmbach, Germany",
    contact: {
        email: "tschrepfer7@gmail.com",
        github: "https://github.com/elwray2607"
    },
    education: educationConfig,
    workExperience: workExperienceConfig,
    achievments: achievmentConfig,
    skills: skillConfig,
    interests: interestsConfig,
}