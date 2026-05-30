import React from 'react';
import type {WorkExperienceConfig} from '../../config/workExperienceConfig';
import TagList from './TagList';

interface WorkExperienceCardProps {
    config: WorkExperienceConfig[]; // The ResumePageConfig data
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({config}) => {
    return (
        <div>
            <h1>Work Experience</h1>
            <div className="information-card">
                <ul className="list-none gap-6 m-0 p-0 w-full">
                    {config.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2>{item.title}</h2>
                                {item.technologiesUsed && <TagList tags={item.technologiesUsed}/>}
                                <div className="duration-box mb-2">
                                    <p>
                                        {item.startYear} - {item.endYear ? item.endYear : 'Present'}
                                    </p>
                                </div>

                                <p>{item.description}</p>

                                {index < config.length - 1 ? <hr className="divider" /> : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default WorkExperienceCard;
