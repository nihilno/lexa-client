import { Navigate, Route, Routes } from "react-router";
import RequireAuth from "./components/auth/require-auth";
import Layout from "./components/global/layout";
import { AuthPage } from "./pages/auth-page";
import Dashboard from "./pages/dashboard-page";
import InvoiceDetails from "./pages/invoice-details-page";
import { NotFoundPage } from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="invoices" replace />} />
          <Route path="invoices">
            <Route index element={<Dashboard />} />
            <Route path=":id" element={<InvoiceDetails />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
