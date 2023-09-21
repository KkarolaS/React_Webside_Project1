import Button from "./Button";

const Main = () => {
  return (
    <main className="landing-page">
      <div className="landing-page-shadow">
        <div className="container">
          <h1 className="main-slogan">
            Nasza firma oferuje najwyższej jakości produkty
          </h1>
          <h2 className="second-slogan">Nie wierz nam na słowo - sprawdź</h2>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Main;
