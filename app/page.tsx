import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import UploadPanel from "./components/UploadPanel";
import SettingsPanel from "./components/SettingsPanel";
import ProjectDashboard from "./components/ProjectDashboard";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Products />

      <UploadPanel />

      <SettingsPanel />

      <ProjectDashboard />

    </main>
  );
}