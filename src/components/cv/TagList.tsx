import React from 'react';
import type {WorkExperienceConfig} from '../../config/workExperienceConfig';

interface TagList {
    tags: string[]; // The ResumePageConfig data
}

const WorkExperienceCard: React.FC<TagList> = ({tags}) => {
    return (
        <div className="flex items-center">
            <img src="/tag.png" alt="tag" className="w-6 h-6 inline-block mr-2 ml-2"/>
            <ul className="horizontal-list">
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};


export default WorkExperienceCard;
