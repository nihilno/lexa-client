import { Route, Routes } from "react-router";
import Layout from "./components/global/layout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="about">
          <Route index element={<h1>About Page</h1>} />
          <Route path="team" element={<h1>Team Page</h1>} />
        </Route>
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
