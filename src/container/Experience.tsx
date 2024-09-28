"use client";

import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "2024",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            Frontend Developer (Onsite)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">Luday AB</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            Fullstack Developer (Remote)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">SMNK Limited</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            Software Developer (Hybrid)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">Corbank Nigeria</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            Frontend Developer (Hybrid)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">Corbank Nigeria</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            IT Support and Development (Internship)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">Corebank Nigeria</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-medium">
            Frontend Developer (Remote)
          </p>
          <p className="font-medium text-sm mt-2 mb-5">
            Open-Source Contribution (AppWex)
          </p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum similique ut pariatur dolore dignissimos recusandae esse
            reprehenderit nemo laboriosam veniam cum, quam qui quae vero enim.
            Porro, ea inventore.
          </div>
        </div>
      </div>
    ),
  },
];
const Experience = () => {
  return (
    <section className="w-full h-full py-20 relative" id="experience">
      <h2 className="heading">My Work Experience</h2>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
