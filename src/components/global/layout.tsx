import { Outlet } from "react-router";
import { Header } from "../header";

function Layout() {
  return (
    <section className="container mx-auto flex min-h-dvh flex-col">
      <Header />
      <main className="mb-4 flex-1 rounded-full border-r border-l border-dashed bg-[radial-gradient(25%_256px_at_50%_50%,theme(backgroundColor.white/10%),transparent)]">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default Layout;
