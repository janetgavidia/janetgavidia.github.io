import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import LogoGrid from '@/components/LogoGrid';
import EducationItem from '@/components/EducationItem';
import CommunityCard from '@/components/CommunityCard';

import { aboutData } from '@/data/about';
import { educationData } from '@/data/education';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';
import { clientsData } from '@/data/clients';
import { communityData } from '@/data/community';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative" style={{ minHeight: '200px' }}>
              <img 
                src="/images/signature.svg" 
                alt="Janet Gavidia" 
                className="absolute top-0 left-0 h-40 md:h-48 lg:h-56 w-auto"
              />
              <div 
                className="absolute top-[105px] left-[65px] md:top-[125px] md:left-20 lg:top-[140px] lg:left-20"
              >
                <p className="text-2xl md:text-3xl font-bold mb-2">{aboutData.title}</p>
                <p className="text-sm md:text-base text-gray-600 tracking-wide">
                  IP MANAGEMENT | THEME PARK | LOCATION BASED ENTERTAINMENT | EXHIBIT | HOSPITALITY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>about me</SectionHeader>
              </div>
              <div className="flex-1 prose prose-lg max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    <strong>I&apos;m a Producer who bridges creative storytelling and business strategy.</strong> That can take the form of being the hub of information, the realigner of teams, and the advocate for client goals and creative stewardship -- among other &quot;hard to define&quot; roles of a Producer. I bring together cross-disciplinary teams to align vision, production, and execution. Whether developing a new attraction, translating a digital IP into a physical experience, or leading multi-stakeholder negotiations, my role focuses on protecting creative intent while driving business outcomes.
                  </p>
                  <p>
                    Having worked extensively across licensed worlds and entertainment franchises, <strong>I understand how to translate IP into experiences that preserve authenticity and deliver measurable value.</strong> I help partners design creative frameworks and deal structures that balance brand integrity with innovation, ensuring that each project serves both the story and the strategy behind it.
                  </p>
                  <p>
                    <strong>My approach blends the precision of a producer with the perspective of a strategist:</strong> aligning budgets with briefs, defining the right mix of creative and operational expertise, and ensuring every decision serves both the guest experience and the business model that sustains it -- and making sure the team is equipped to make it happen.
                  </p>
                  <p>
                    In my spare time I cook, I actually took professional culinary courses just for fun. I enjoy connecting to people and cultures through food. I volunteer with social impact organizations around food solidarity and youth access to arts education. Outside of that, you&apos;ll likely find me at the gym.
                  </p>
                  <p>
                    I hope this page gives you a glimpse of who I am. To connect further, <strong>you can reach me here.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>education</SectionHeader>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <p className="text-gray-800 leading-relaxed">
                    My educational background is indicative of my knowledge and interest of various art forms and social understandings. I later pursed an MBA to augment my career in Themed Entertainment and better serve my teams, projects, and clients.
                  </p>
                </div>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="professional" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>professional</SectionHeader>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <p className="text-gray-800 leading-relaxed">
                    My professional experience spans creative production, strategy, and leadership across global themed entertainment and experiential design. Each role reflects a balance of creative vision, technical integration, and business strategy applied to complex, multi-stakeholder projects.
                  </p>
                </div>
                <div className="pl-8">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
                      <div className="sm:w-[100px] flex-shrink-0 text-sm text-gray-600">
                        {exp.years}
                      </div>
                      <div className="flex-1 pb-8 border-b border-gray-300">
                        <div className="mb-2">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          {(exp.company || exp.location) && (
                            <p className="text-sm text-gray-700">
                              {exp.company && <span>{exp.company}</span>}
                              {exp.company && exp.location && <span> | </span>}
                              {exp.location && <span>{exp.location}</span>}
                            </p>
                          )}
                        </div>
                        {exp.period && (
                          <div className="text-xs text-gray-600 mb-3">
                            {exp.period}
                          </div>
                        )}
                        {exp.description && (
                          <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notable Projects & Clients Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>notable projects & clients</SectionHeader>
              </div>
              <div className="flex-1">
                {/* Project Images */}
                <div className="mb-16">
                  <div className="mb-8">
                    <p className="text-gray-800 leading-relaxed">
                      Every experience is the result of a team of specialists bringing creative and technical ideas to life. As a producer, my role is to connect those disciplines—aligning vision, budgets, and execution so the work stays true to intent. Each projects represents the collaboration of many talented people I&apos;ve had the privilege to work with and projects I led and/or contributed to.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </div>
                </div>

                {/* Project Awards */}
                <div className="mb-16">
                  <h3 className="text-xl font-bold mb-6">Project Awards</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-gray-800 leading-relaxed">
                      THEA - Winner - Outstanding Achievement in a Theme Park Land - Universal Studios Japan, Super Nintendo World
                    </li>
                    <li className="text-gray-800 leading-relaxed">
                      Muse Creative Awards, Platinum Winner - Exhibition Experience - Warner Bros. Studio Tour Hollywood, Stage 48
                    </li>
                    <li className="text-gray-800 leading-relaxed">
                      Muse Creative Awards, Platinum Winner - Experiential & Immersive - Warner Bros. Studio Tour Hollywood Welcome Center
                    </li>
                    <li className="text-gray-800 leading-relaxed">
                      THEA - Winner - Outstanding Achievement in a Theme Park - Yas Island, UAE, Warner Bros. World™ Abu Dhabi
                    </li>
                    <li className="text-gray-800 leading-relaxed">
                      Park World Excellence Award - Themed Attraction of the Year - Batman Knight Flight at Warner Bros. World™ Abu Dhabi
                    </li>
                    <li className="text-gray-800 leading-relaxed">
                      THEA - Winner - Outstanding Achievement - Warner Bros. Studio Tour London – The Making of Harry Potter
                    </li>
                  </ul>
                </div>

                {/* Clients / Partners */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Clients / Partners</h3>
                  <div className="mb-8">
                    <p className="text-gray-800 leading-relaxed">
                      I&apos;ve also worked on a variety of blue sky projects smaller in scale, working directly with brands to bring their stories into experiential concepts. Some projects stayed in concept phases while others moved into installation -- all requiring close brand management and creative alignment. <strong>By nature of the industry, many projects remain confidential.</strong>
                    </p>
                  </div>
                  <div className="w-full">
                    <img 
                      src="/images/clients-logos-grid.png" 
                      alt="Clients and Partners Logos" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section id="community" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>Community Engagement</SectionHeader>
              </div>
              <div className="flex-1 space-y-6">
                {communityData.map((community, index) => (
                  <CommunityCard key={index} {...community} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-right md:sticky md:top-24 md:self-start">
                <SectionHeader>contact</SectionHeader>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-8">
                  Let&apos;s create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href={`mailto:${aboutData.email}`}
                    className="px-6 py-3 bg-yellow-highlight hover:bg-yellow-400 transition-colors rounded text-gray-900 font-medium"
                  >
                    Get in Touch
                  </a>
                  <a
                    href={aboutData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Janet Gavidia. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
