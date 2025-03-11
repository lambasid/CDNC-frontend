import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Hero } from "@/components/Home/Hero";
import { NewsTicker } from "@/components/Home/NewsTicker";
import { ResourcesSection } from "@/components/Home/ResourcesSection";
import { AdvocacySection } from "@/components/Home/AdvocacySection";
import { CommunitySection } from "@/components/Home/CommunitySection";
import { ChatButton } from "@/components/Home/ChatButton";

const Index = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <Header />

      <main>
        <Hero />
        <NewsTicker />
        <ResourcesSection />
        <AdvocacySection />
        <CommunitySection />
      </main>

      <ChatButton />
      <Footer />
    </>
  );
};

export default Index;
