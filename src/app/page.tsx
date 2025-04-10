import { Header } from "./components/Header";
import InputField from "./components/InputField";
import AlertBox from "./components/AlertBox";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4 font-light">
      <div className="bg-amber-300 p-8 rounded-2xl shadow-2xl w-265 text-center">
        <Header />
        <InputField />
      </div>
      <AlertBox/>
      <AboutSection />
    </div>
  );
}
