import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../../types';

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in technology leadership, Sarah leads our strategic vision and growth initiatives.',
    imageUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael oversees our technical strategy and innovation, bringing 12+ years of software architecture experience.',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    role: 'Head of Design',
    bio: 'Alex leads our design team with a passion for creating elegant, user-centered experiences across all platforms.',
    imageUrl: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Emily Park',
    role: 'Lead Developer',
    bio: 'Emily brings technical excellence and innovative problem-solving to lead our development initiatives.',
    imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate experts dedicated to delivering exceptional results and driving innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition"
                  >
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;