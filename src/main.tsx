#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgba(20, 184, 166, 0.6));
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em rgba(20, 184, 166, 0.6));
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
  border-radius: 0.5rem;
  border: 1px solid rgba(20, 184, 166, 0.1);
  background-color: rgba(20, 184, 166, 0.02);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.1);
}

.read-the-docs {
  color: #5f7676;
}
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lato:wght@300;400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;

    --primary: 45 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 9%;

    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 45%;

    --accent: 45 100% 50%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 89%;
    --input: 0 0% 89%;
    --ring: 45 100% 50%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;

    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;

    --popover: 0 0% 0%;
    --popover-foreground: 0 0% 100%;

    --primary: 45 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;

    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;

    --accent: 45 100% 50%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 45 100% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  .font-display {
    font-family: 'Playfair Display', serif;
  }

  .font-body {
    font-family: 'Lato', sans-serif;
  }
}
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);
