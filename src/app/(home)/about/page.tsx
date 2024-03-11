import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/header";
import { Next, Prisma, React, Tailwind, Typescript } from "@/components/icons";

export const metadata: Metadata = {
  title: "About me",
  description:
    "I am a front-end web developer with experience in JavaScript, React, Next.js and Astro. My goal is to become a FullStack programmer. I enjoy creating beautiful and easy to use web applications that connect with users. I am always looking for new opportunities to grow and collaborate on exciting projects.",
};

const AboutPage = () => {
  return (
    <>
      <Header title="About me" page />
      <div className=" mx-auto max-w-[75ch]">
        <div>
          <p className="leading-7 md:text-lg [&:not(:first-child)]:mt-6 text-justify">
            Hello there! 👋 As a seasoned Network Engineer, I specialize in
            designing robust, efficient, and secure networks that serve as the
            backbone for seamless connectivity. My love affair with technology
            extends into the Linux realm, where I find solace and excitement in
            the command line. <br />
            I&apos;m not just a user; I&apos;m a Linux enthusiast who thrives on
            the freedom and flexibility that open source provides. From
            configuring servers to scripting automation, I embrace the power and
            elegance of the penguin. <br />
            But that&apos;s not all, I&apos;m also a fervent Developer,
            sculpting lines of code into functional and innovative solutions.
            Whether it&apos;s building web applications, crafting automation
            scripts, or diving into software development projects, I&apos;m
            always eager to push the boundaries of what&apos;s possible in the
            digital realm. Join me on this journey where networks converge,
            Linux reigns supreme, and code weaves the fabric of innovation.
            Let&apos;s build, connect, and explore the ever-evolving landscape
            of technology together! <br />
            🌐🐧💻 #NetworkEngineer #LinuxEnthusiast #DeveloperExtraordinaire
          </p>
        </div>
        <div className="my-10 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold ">Experience</h3>
          <section className="my-5">
            <ol className="relative border-l-2">
              <li className="mb-10 ml-4">
                <div className="absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground" />
                <time className="mb-1 text-sm font-thin leading-none ">
                  December 2021 - Present
                </time>

                <h3 className="text-lg font-semibold">
                  ICT Engineer and Part time Applications Developer at{" "}
                  <Link
                    href="https://newedge.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline transition-colors hover:text-primary/90"
                  >
                    New Edge Solutions Limited
                  </Link>
                </h3>
                <h4 className="my-1 text-sm font-normal text-primary/80">
                  Nairobi - <span>Full time</span>
                </h4>
                <p className="mb-4 text-base font-normal text-muted-foreground">
                  Presently, I hold the position of an ICT Engineer at New Edge
                  Solutions Limited. My role involves dedicated efforts in the
                  design, deployment, and management of the telecommunication
                  systems infrastructure on a full-time basis. Additionally, I
                  am responsible for handling software projects assigned by the
                  company, utilizing Next.js, Tailwind CSS, Typescript, and PHP
                  Laravel.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground" />
                <time className="mb-1 text-sm font-thin leading-none ">
                  December 2017 - May 2021
                </time>
                <h3 className="text-lg font-semibold">
                  Desktop Support Specialist at{" "}
                  <Link
                    href="https://www.fieldtechsystems.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline transition-colors hover:text-primary/90"
                  >
                    Fieldtech Systems (K) Limited
                  </Link>
                </h3>
                <h4 className="my-1 text-sm font-normal text-primary/80">
                  Nairobi - <span>Full time</span>
                </h4>
                <p className="mb-4 text-base font-normal text-muted-foreground">
                  In my capacity as a desktop support specialist, I was tasked
                  with identifying and resolving technical issues, spanning
                  hardware malfunctions. My responsibilities extended to
                  providing direct assistance to end-users, addressing concerns
                  related to hardware, software, and operating system challenges
                  on their desktops or laptops. Additionally, I played a crucial
                  role in implementing and maintaining security protocols,
                  ensuring the protection of computer systems from malware,
                  unauthorized access, and potential threats.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground" />
                <time className="mb-1 text-sm font-thin leading-none ">
                  December 2017 - May 2021
                </time>
                <h3 className="text-lg font-semibold">
                  ICT Intern and Web Developer at{" "}
                  <Link
                    href="https://www.kuscco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline transition-colors hover:text-primary/90"
                  >
                    Kuscco Limited
                  </Link>
                </h3>
                <h4 className="my-1 text-sm font-normal text-primary/80">
                  Nairobi - <span>Full time</span>
                </h4>
                <p className="mb-4 text-base font-normal text-muted-foreground">
                  Throughout my internship, I actively engaged in
                  network-related activities, including the establishment and
                  upkeep of network infrastructure, resolution of connectivity
                  issues, and collaboration on enhancing network security
                  measures. I played a role in supporting the implementation and
                  upkeep of security protocols aimed at safeguarding systems and
                  data. Additionally, I contributed to various IT projects,
                  involving tasks spanning research, analysis, implementation,
                  and evaluation. On occasion, I also took on the responsibility
                  of updating the company&apos;s website.
                </p>
              </li>
            </ol>
          </section>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold ">My stack</h3>
          <div className="my-7 flex flex-wrap items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Next className="size-7" />
              <span>Next</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Tailwind className="size-7" />
              <span>Tailwind</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Typescript className="size-7" />
              <span>Typescript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Prisma className="size-7" />
              <span>Prisma</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
