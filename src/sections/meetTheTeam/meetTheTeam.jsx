import React from 'react';
import './MeetTheTeam.css';

const teamMembers = [
  {
    name: 'Nina',
    bio: 'Born in China, adopted as a toddler...',
    linkedIn: 'https://www.linkedin.com/in/jingximei/',
  },
  {
    name: 'Amber Nigam',
    bio: 'With more than a dozen years of experience...',
    linkedIn: 'https://www.linkedin.com/in/amber-nigam/',
  },
];

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
