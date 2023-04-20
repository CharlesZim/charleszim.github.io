import Button from "../../components/Button";

import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="homeTitle">
        <div className="topTitle">I'm a</div>
        <div className="bottomTitle">
          <span className="textTitle">
            Full-Stack
            <br />
            Software
            <br />
            Engineer
          </span>
          <span className="dotTitle">.</span>
        </div>
        <div className="buttonHome">
          <Button to={"about"} title={"Discover me"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
