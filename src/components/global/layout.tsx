import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-vertical-lines container mx-auto flex min-h-dvh flex-col">
      {/* <Header /> */}
      <header className="h-12 bg-red-500">Header</header>
      <main className="dark:bg-background bg-background/50 mb-4 flex-1 rounded-full border-r border-l border-dashed bg-[radial-gradient(25%_256px_at_50%_50%,theme(backgroundColor.white/10%),transparent)] backdrop-blur-sm">
        <div className="mx-auto mt-20 h-full max-h-200 max-w-5xl px-3">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
