import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Medicare from "./pages/Medicare";
import SocialSecurity from "./pages/SocialSecurity";
import RetirementIncome from "./pages/RetirementIncome";
import GovernmentBenefits from "./pages/GovernmentBenefits";
import TaxSavings from "./pages/TaxSavings";
import EstatePlanning from "./pages/EstatePlanning";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DoNotSell from "./pages/DoNotSell";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Topic Pages */}
      <Route path="/medicare" component={Medicare} />
      <Route path="/social-security" component={SocialSecurity} />
      <Route path="/retirement-income" component={RetirementIncome} />
      <Route path="/government-benefits" component={GovernmentBenefits} />
      <Route path="/tax-savings" component={TaxSavings} />
      <Route path="/estate-planning" component={EstatePlanning} />
      {/* Legal Pages */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/do-not-sell" component={DoNotSell} />
      <Route path="/contact" component={Contact} />
      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
