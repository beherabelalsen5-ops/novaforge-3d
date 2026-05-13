import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import UploadPanel from "./components/UploadPanel";
import SettingsPanel from "./components/SettingsPanel";
import ProjectDashboard from "./components/ProjectDashboard";

export default function Home() {
  return (
    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        fontWeight: "bold",
      }}
    >
      NovaForge 3D Labs
    </main>
  );
}