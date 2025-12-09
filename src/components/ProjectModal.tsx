'use client';

import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop with fade animation */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
      />

      {/* Center the modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel
          transition
          className="relative bg-white rounded-lg shadow-xl w-full max-w-[1200px] max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out data-[closed]:opacity-0 data-[closed]:scale-95"
        >
          {project && (
            <>
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
            {/* Mobile: Single column, Desktop: Two columns */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column (40% on desktop) */}
              <div className="lg:w-[40%] space-y-6">
                {/* Logo */}
                {project.logo && (
                  <div className="mb-6">
                    <div className="relative h-32 w-full">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="text-sm space-y-1">
                  <p className="font-bold">{project.title}</p>
                  {project.location && <p>{project.location}</p>}
                  {project.openingDate && <p>Opening Date: {project.openingDate}</p>}
                </div>

                {/* Role & Description */}
                {project.role && (
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-sm mb-2">MY ROLE:</p>
                      <p className="font-bold text-sm">{project.role}</p>
                    </div>

                    {project.roleDescription && (
                      <div className="text-sm leading-relaxed text-gray-800">
                        {Array.isArray(project.roleDescription) ? (
                          project.roleDescription.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p>{project.roleDescription}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Core Responsibilities */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-bold text-sm">CORE RESPONSIBILITIES</p>
                    <div className="text-sm leading-relaxed text-gray-800">
                      {project.responsibilities.map((responsibility, index) => (
                        <p key={index}>{responsibility}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column (60% on desktop) - Image Grid */}
              <div className="lg:w-[60%]">
                {project.galleryImages && project.galleryImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((image, index) => (
                      <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Back to main page link */}
            <div className="mt-8">
              <button
                onClick={onClose}
                className="inline-block bg-yellow-highlight px-3 py-1 text-sm font-bold hover:opacity-80 transition-opacity"
              >
                back to main page →
              </button>
            </div>
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

