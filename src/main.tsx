
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import ImageLightboxProvider from "./components/ui/image-lightbox";

  createRoot(document.getElementById("root")!).render(
    <ImageLightboxProvider>
      <App />
    </ImageLightboxProvider>,
  );
  