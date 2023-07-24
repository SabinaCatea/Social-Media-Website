import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import FriendProfileImage from "../../assets/users/user2.jpg";

import "./leftSide.css";

const LeftSide = () => {
  return (
    <div className="leftSide-container">
      <ul className="icons-Container">
        <li className="list">
          <RssFeedIcon className="icon" />
          Feed
        </li>
        <li className="list">
          <ChatIcon className="icon" />
          Chats
        </li>
        <li className="list">
          <PlayCircleIcon className="icon" />
          Videos
        </li>
        <li className="list">
          <GroupIcon className="icon" />
          Groups
        </li>
        <li className="list">
          <BookmarkIcon className="icon" /> Bookmarks
        </li>
        <li className="list">
          <HelpOutlineIcon className="icon" />
          Questions
        </li>
        <li className="list">
          <WorkOutlineIcon className="icon" />
          Jobs
        </li>
        <li className="list">
          <EventIcon className="icon" />
          Events
        </li>
        <li className="list">
          <SchoolIcon className="icon" />
          Courses
        </li>
      </ul>
      <button className="showMore-button">Show More</button>
      <hr className="hr-line"></hr>
      <div className="friendsProfile">
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>

        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
        <span className="friendProfile">
          <img src={FriendProfileImage} className="friendImageProfile"></img>
          Safak Kacaoglu
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
