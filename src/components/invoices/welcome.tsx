import Orb from "@/components/animations/Orb";
import { FormDrawer } from "@/components/form/form-drawer";
import useSession from "@/hooks/use-session";

function Welcome() {
  const { session } = useSession();

  return (
    <>
      <section className="absolute inset-0 scale-150 sm:scale-100">
        <Orb
          hoverIntensity={1}
          rotateOnHover={false}
          hue={30}
          forceHoverState={true}
          backgroundColor="#0b0b0b"
        />
      </section>

      <div className="center bg-angled-lines shadow-full absolute flex w-full max-w-4xl flex-col items-center gap-16 rounded-full p-4 select-none sm:p-8 md:p-16">
        <section className="relative z-10 flex flex-col items-center justify-center">
          <article className="space-y-6 text-center text-3xl font-extralight sm:text-4xl">
            <h1 className="text-4xl sm:text-5xl">
              Welcome{session?.user?.name ? `, ${session.user.name}` : ""}.
            </h1>
            <h2>
              Experience Luxa, <br /> by creating your first Invoice.
            </h2>
          </article>
          <div className="relative z-50! mt-12 w-1/2 text-center">
            <FormDrawer type="Insert" hero={true} />
          </div>
        </section>
        <p className="text-muted-foreground max-w-[30ch] border-t pt-4 text-center text-xs">
          This <span className="text-foreground">demo application</span> also
          handles loading states & errors gracefully. Same goes with empty
          states or 404 pages.{" "}
          <span className="text-foreground">Enjoy! :)</span>
        </p>{" "}
      </div>
    </>
  );
}

export default Welcome;
