import React from 'react';
import './MeetTheTeam.css';
import Team1 from '../../assets/img/Team1.png';
import Team2 from '../../assets/img/Team2.png';
import { IoLogoLinkedin } from 'react-icons/io5';

const teamMembers = [
  {
    img: Team1,
    name: 'Nina',
    desig: 'CEO',
    bio: `Born in China, adopted as a toddler, and raised in Maine, Nina began learning Mandarin
    at age of 15, when she was awarded...`,
    linkedIn: 'https://www.linkedin.com/in/jingximei/',
  },
  {
    img: Team2,
    name: 'Amber Nigam',
    desig: 'Strategy Advisor',
    bio: `With more than a dozen years of experience in healthcare and AI, I'm the co-founder and CEO of basys.ai, a healthtech startup. Our
    focus...`,
    linkedIn: 'https://www.linkedin.com/in/amber-nigam/',
  },
];

const MeetTheTeam = () => {
  return (
    <div id="team" className="meet-the-team">
      <h2 className="text-3xl font-bold text-gray-600">Meet the Team</h2>
      <p className="mt-6 text-gray-500">
        We’re a dynamic group of individuals who are passionate about what we do{' '}
        <br />
        and dedicated to delivering the best results for our clients.
      </p>
      <div className="team-grid mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member flex flex-col">
            <img src={member?.img} alt="Team Member" className="rounded-3xl" />
            <h3 className="text-start pl-1 text-gray-900 text-lg font-medium">
              {member?.name}
            </h3>
            <p className="text-start pl-1 text-gray-400 text-sm uppercase mb-4">
              {member?.desig}
            </p>
            <p className="text-start pl-1 text-gray-700 text-base mb-3">
              {member?.bio}
            </p>
            <a
              href={member?.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-start"
            >
              <IoLogoLinkedin className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
