import useSession from "@/hooks/use-session";

function Welcome() {
  const { session } = useSession();

  return (
    <div className="">
      <section className="grid w-full grid-cols-2">
        {/* <img
          src="/bg.jpg"
          alt="hero"
          className="rounded-t-full rounded-b-xl opacity-25"
        /> */}
        <article className="space-y-6 text-center text-3xl font-extralight sm:text-4xl">
          <h1 className="text-4xl sm:text-5xl">
            Welcome, {session?.user?.name}.
          </h1>
          <h2>
            Experience Luxa, <br /> by creating your first Invoice.
          </h2>
        </article>
      </section>

      {/* <FormDrawer type="Insert" /> */}
    </div>
  );
}

export default Welcome;
