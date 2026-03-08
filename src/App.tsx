import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import AIChatbot from "@/components/AIChatbot";
import { WhatsAppCTA } from "@/components/SocialShare";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Newsletter from "./pages/Newsletter";
import Demo from "./pages/Demo";
import Consultation from "./pages/Consultation";
import Resources from "./pages/Resources";
import Industries from "./pages/Industries";
import SuccessStories from "./pages/SuccessStories";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Webinars from "./pages/Webinars";
import TechStack from "./pages/TechStack";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import AdminCMS from "./pages/AdminCMS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/cms" element={<ProtectedRoute><AdminCMS /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIChatbot />
          <WhatsAppCTA />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
