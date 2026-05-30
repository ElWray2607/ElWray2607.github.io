import React from 'react';
import type {EducationConfig} from '../../config/educationConfig';
import TagList from './TagList';

interface EducationCardProps {
    config: EducationConfig[]; // The ResumePageConfig data
}

const EducationCard: React.FC<EducationCardProps> = ({config}) => {
    return (
        <div>
            <h1>Education</h1>
            <div className="information-card">
                <ul className="list-none gap-6 m-0 p-0 w-full">
                    {config.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2>
                                    <a href={item.instituteUrl} target="_blank" rel="noopener noreferrer">
                                        {item.institution}
                                    </a>
                                </h2>
                                <div className="duration-box mb-2">
                                    <p>
                                        {item.startYear} - {item.endYear ? item.endYear : 'Present'}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-700">
                                    {item.degree && `${item.degree}`}
                                    {item.degree && item.fieldOfStudy && " in "}
                                    {item.fieldOfStudy && <span>{item.fieldOfStudy}</span>}
                                </p>

                                {item.grade && (
                                    <div className="mt-4">
                                        <h3 className="font-bold text-gray-600">Grade</h3>
                                        <p className="text-gray-700">
                                            <strong>{item.grade.grade}</strong>{item.grade.description ? ` — ${item.grade.description}` : ''}
                                        </p>
                                    </div>
                                )}


                                {item.honors && item.honors.length > 0 && (
                                    <div>
                                        <h3 className="font-bold text-gray-600 mt-4">Honors</h3>
                                        <ul className="list-disc ml-6 text-gray-700">
                                            {item.honors.map((honor, index) => (
                                                <li key={index}>{honor}</li>
                                            ))}
                                        </ul>
                                    </div>)}

                                {item.relevantCourses && item.relevantCourses.length > 0 && (
                                    <div>
                                        <h3 className="font-bold text-gray-600 mt-4">Relevant Courses</h3>
                                        <ul className="list-disc ml-6 text-gray-700">
                                            {item.relevantCourses.map((course, index) => (
                                                <li key={index}>{course}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {index < config.length - 1 ? <hr className="divider" /> : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default EducationCard;
