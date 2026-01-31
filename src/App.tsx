import { Route, Routes } from "react-router";
import Layout from "./components/global/layout";
import Dashboard from "./pages/dashboard";
import InvoiceDetails from "./pages/invoice-details";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="invoice" element={<InvoiceDetails />} />
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
