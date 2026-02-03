import { Route, Routes } from "react-router";
import Layout from "./components/global/layout";
import { AuthPage } from "./pages/auth-page";
import Dashboard from "./pages/dashboard-page";
import HomePage from "./pages/home-page";
import InvoiceDetails from "./pages/invoice-details-page";
import { NotFoundPage } from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="auth" element={<AuthPage />} />

      <Route path="/" element={<Layout />}>
        <Route path="invoices" element={<Dashboard />} />
        <Route path="invoices/:id" element={<InvoiceDetails />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
