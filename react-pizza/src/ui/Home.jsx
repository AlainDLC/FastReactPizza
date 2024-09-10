import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="mb-8 font-serif text-2xl text-green-600/75 md:text-3xl  ">
        The best pizza.
        <br />
        <span className="text-orange-400/90 text-md ">
          Stright out of the oven! For Pizza lover
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
