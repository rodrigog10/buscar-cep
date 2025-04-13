import { Header } from "./components/Header";
import InputField from "./components/InputField";
import AlertBox from "./components/AlertBox";
import AboutSection from "./components/AboutSection";
import { FadeInSection } from "./components/FadeInSection";

export default function Home() {
  return (
    <FadeInSection>
    <div className="flex flex-col justify-center items-center p-4 font-light">
      <div className="bg-amber-300 p-10 rounded-md w-full text-center">
        <Header />
        <InputField />
      </div>
      <AlertBox/>
      <AboutSection />
    </div>
    </FadeInSection>
  );
}
