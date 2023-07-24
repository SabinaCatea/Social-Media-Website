import TopBar from "../../components/TopBar/TopBar";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import Feed from "../../components/Feed/Feed";
import "./home.css";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="home-container">
        <LeftSide></LeftSide>
        <Feed></Feed>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Home;
