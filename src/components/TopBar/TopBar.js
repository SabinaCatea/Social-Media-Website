import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./topBar.css";
import Profile from "../../assets/users/user1.jpg";

const TopBar = () => {
  return (
    <div className="tobar-container">
      <div className="logo">
        <span>Social App</span>
      </div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search for friend, post and video"
          className="input-search"
        ></input>
        <span className="topBarLink">Homepage</span>
        <span className="topBarLink">Timeline</span>
      </div>
      <div className="icons-container">
        <PersonIcon />
        <span className="notification">1</span>
        <MessageIcon />
        <span className="notification">2</span>
        <NotificationsNoneIcon />
        <span className="notification">1</span>
      </div>
      <div>
        <img className="img-container" src={Profile}></img>
      </div>
    </div>
  );
};

export default TopBar;
