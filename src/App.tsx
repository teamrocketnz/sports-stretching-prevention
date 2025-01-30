import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dynamic from "./pages/Dynamic";
import ShinSplints from "./pages/ShinSplints";
import JumpersKnee from "./pages/JumpersKnee";
import GeneralStretching from "./pages/GeneralStretching";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/shin-splints" element={<ShinSplints />} />
          <Route path="/jumpers-knee" element={<JumpersKnee />} />
          <Route path="/general-stretching" element={<GeneralStretching />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;