import React from 'react';
import type { ResumePageConfig } from '../../config/resumePageConfig';

interface GeneralInformationCardProps {
    config: ResumePageConfig; // The ResumePageConfig data
}

const Navbar: React.FC<GeneralInformationCardProps> = ({ config }) => {
    return (
        <div>
            <h1>General Information</h1>
            <div className="information-card">

                <h2>{config.name}</h2>

                {config.tagline && (
                    <p>
                        {config.tagline}
                    </p>
                )}

                {/* Contact Details */}
                {config.contact && (
                    <div>
                        {/* Email */}
                        {config.contact.email && (
                            <p>
                                <strong>Email: </strong>
                                <a href={`mailto:${config.contact.email}`}>
                                    {config.contact.email}
                                </a>
                            </p>
                        )}

                        {/* Phone */}
                        {config.contact.phone && (
                            <p>
                                <strong>Phone: </strong>
                                {config.contact.phone}
                            </p>
                        )}

                        {/* LinkedIn */}
                        {config.contact.linkedIn && (
                            <p>
                                <strong>LinkedIn: </strong>
                                <a href={config.contact.linkedIn}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   style={{ textDecoration: 'none', color: '#0056b3' }}>
                                    {config.contact.linkedIn}
                                </a>
                            </p>
                        )}

                        {/* GitHub */}
                        {config.contact.github && (
                            <p>
                                <strong>GitHub: </strong>
                                <a href={config.contact.github}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   style={{ textDecoration: 'none', color: '#0056b3' }}>
                                    {config.contact.github}
                                </a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


export default Navbar;
