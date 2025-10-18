import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Problem from "./pages/Problem";
import Persona from "./pages/Persona";
import Baseline from "./pages/Baseline";
import Goals from "./pages/Goals";
import Summary from "./pages/Summary";
import PreSession from "./pages/PreSession";
import Void from "./pages/Void";
import Reflection from "./pages/Reflection";
import Achievement from "./pages/Achievement";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Community from "./pages/Community";
import Impact from "./pages/Impact";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/baseline" element={<Baseline />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/pre-session" element={<PreSession />} />
          <Route path="/void" element={<Void />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/stats" element={<Stats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
