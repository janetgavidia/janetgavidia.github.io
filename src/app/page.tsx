import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import ExperienceCard from '@/components/ExperienceCard';
import LogoGrid from '@/components/LogoGrid';
import EducationItem from '@/components/EducationItem';
import CommunityCard from '@/components/CommunityCard';
import ProjectsSection from '@/components/ProjectsSection';

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
      
      <main className="min-h-screen bg-white text-[0.9rem]">
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
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
                <SectionHeader>about me</SectionHeader>
              </div>
              <div className="flex-1 prose max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    I am a Producer who bridges creative storytelling and business strategy. I lead and structure creative operations, bringing together cross-disciplinary teams to align vision, production, and execution. Whether developing a new attraction, translating an IP into a physical experience, or leading multi-stakeholder negotiations, my role centers on protecting creative intent while driving business outcomes. With extensive experience across licensed worlds and entertainment franchises in international markets, I understand how to translate IP into experiences that preserve authenticity, resonate culturally, and deliver measurable value.
                  </p>
                  <p>
                    My resume includes <span className="font-semibold italic">Super Nintendo World Japan</span>,{' '}
                    <span className="font-semibold italic">Warner Bros. World Abu Dhabi</span>, and{' '}
                    <span className="font-semibold italic">The Wizarding World of Harry Potter Studio Tour London</span>, along with emerging real-world gaming and tech-integrated projects and hospitality across the globe. I thrive in creative environments with many moving parts, passionate stakeholders, and constant change, where navigating complexity and &quot;strategically winging it&quot; becomes a practiced, professional skill.
                  </p>
                  <p>
                    I currently serve on the Board of Directors for Ryman Arts, an organization dedicated to advancing equitable access to arts education. I am also a member of the Social Gastronomy Movement, where I apply experience-design principles to support community-centered projects and drive social inclusion. As a speaker and facilitator, I have led workshops on inclusive experience design, co-chaired a United Nations Food Systems Summit task force in partnership with the Basque Culinary Center, and supported global COVID emergency food-relief initiatives with 50 Best Restaurants.
                  </p>
                  <p>
                    If you&apos;d like to connect further regarding professional opportunities,{' '}
                    <a
                      href="mailto:janetgavidia@icloud.com"
                      className="font-normal text-gray-900 underline"
                    >
                      you can reach me here.
                    </a>{' '}
                    <span className="inline-flex items-center ml-3 align-middle">
                      <img
                        src="/initials.png"
                        alt="Initials signature"
                        className="h-20 w-auto"
                      />
                    </span>
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
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
                <SectionHeader>education</SectionHeader>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <p className="text-gray-800 leading-relaxed">
                    My studies gave me a strong grounding in how people think, create, and work together, which shaped how I approach problem-solving and collaboration. I later completed an MBA to strengthen my work in themed entertainment and better support my teams, projects, and clients.
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
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
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
                            <p className="flex items-center gap-2 text-sm text-gray-700">
                              <span
                                className="inline-block h-3 w-3 rounded-full bg-gray-300"
                                aria-hidden="true"
                              />
                              <span>
                                {exp.company && <span>{exp.company}</span>}
                                {exp.company && exp.location && <span> | </span>}
                                {exp.location && <span>{exp.location}</span>}
                              </span>
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
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
                <SectionHeader>
                  notable
                  <br />
                  projects & clients
                </SectionHeader>
              </div>
              <div className="flex-1">
                {/* Project Images */}
                <div className="mb-16">
                  <div className="mb-8">
                    <p className="text-gray-800 leading-relaxed">
                      Every experience is the result of a team of specialists bringing creative and technical ideas to life. As a producer, my role is to connect those disciplines—aligning vision, budgets, and execution so the work stays true to intent. Each projects represents the collaboration of many talented people I&apos;ve had the privilege to work with and projects I led and/or contributed to.
                    </p>
                  </div>
                  <ProjectsSection projects={projectsData} />
                </div>

                {/* Project Awards */}
                <div className="mb-16">
                  <h3 className="text-xl font-bold mb-6">Project Awards</h3>
                  <ul className="list-disc pl-6 space-y-0.5">
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
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
                <SectionHeader>community engagement</SectionHeader>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-gray-800 leading-relaxed">
                  I stay active in both industry and social impact communities, contributing to organizations that advance creative education, equitable food systems, and collaborative innovation. These roles reflect my commitment to mentorship, sustainability, and strengthening the cultural and creative ecosystem.
                </p>
                <div className="pl-24 mt-5">
                  {communityData.map((community, index) => (
                    <CommunityCard key={index} {...community} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-[200px] flex-shrink-0 md:text-left md:sticky md:top-24 md:self-start">
                <SectionHeader>contact</SectionHeader>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="mailto:janetgavidia@icloud.com"
                    className="relative inline-block px-2 py-1 text-2xl text-gray-900 hover:text-black hover:font-semibold transition-colors font-normal overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-yellow-highlight before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-200 before:ease-out before:-z-10 before:transform"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jgavidia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block px-2 py-1 text-2xl text-gray-900 hover:text-black hover:font-semibold transition-colors font-normal overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-yellow-highlight before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-200 before:ease-out before:-z-10 before:transform"
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
