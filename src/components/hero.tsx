import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GitHub, LinkedIn } from "@/components/icons";

const Hero = () => {
  return (
    <div className="my-14 flex items-center justify-between">
      <div className="w-[37rem]">
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, <br></br>
          I&apos;m Nicholas Wekesa
        </h1>
        <h2 className="my-1 text-2xl font-semibold text-primary md:text-4xl">
          Networks and Linux Enthusiast | Applications Developer
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-xl">
          Based in Nairobi, Kenya, I specialize in designing and managing
          networks, driven by a deep passion for Linux. As a versatile
          developer, I create solutions for the web, mobile devices, and delve
          into the intricacies of programming embedded systems.
        </p>
        <div className="mt-5 flex gap-5">
          <Link
            arial-label="GitHub"
            href="https://www.linkedin.com/in/nicholas-wekesa-35635513a/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <LinkedIn className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            arial-label="GitHub"
            href="https://github.com/nicweke"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <GitHub className="size-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            arial-label="Download Resume"
            href="https://drive.google.com/file/d/1dMiHnwQDdHBQMXF46OGF8195xbsde_kn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
