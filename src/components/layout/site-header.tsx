import { siteConfig } from "@/config/site";
import MainNav from "./main-nav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/50 backdrop-blur-md">
      <div className="container py-5 ">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
};

export default SiteHeader;
