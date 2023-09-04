import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>This page does not exist</p>
      </main>
    </>
  );
}

export default ErrorPage;
