import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import TodosContextProvider from "./Contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="04bff43a565c4dc891e8244cecc4aafa"
      domain="https://behradb7.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      {" "}
      <TodosContextProvider>
        {" "}
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
