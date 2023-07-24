import FriendProfileImage from "../../assets/users/user4.jpg";
import PostImage from "../../assets/posts/post7.jpg";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="shareInputContainer">
        <div className="shareInput">
          <img src={FriendProfileImage} className="shareImg"></img>
          <input
            placeholder="What's in your mind Safak?"
            className="inputShare"
          ></input>
        </div>
        <hr></hr>
        <div className="emojiContainer">
          <ul className="ulContainer">
            <il className="list">
              <PhotoLibraryIcon style={{ color: "violet", marginBottom: -7 }} />{" "}
              <span>Photo or Video</span>
            </il>
            <il className="list">
              <LabelIcon style={{ color: "blue", marginBottom: -7 }} />
              <span>Tag</span>
            </il>
            <il className="list">
              <LocationOnIcon style={{ color: "green", marginBottom: -7 }} />
              <span>Location</span>
            </il>
            <il className="list">
              <EmojiEmotionsIcon
                style={{ color: "orange", marginBottom: -7 }}
              />
              <span>Feelings</span>
            </il>
          </ul>
          <button className="shareButton">Share</button>
        </div>
      </div>
      <div className="postContainer">
        <div className="topBarPost">
          <div className="postDetails">
            <img src={FriendProfileImage} className="imgPost"></img>
            <p className="profileName">Safar Kocaoglu</p>
            <span className="timestamp">5 mins ago</span>
          </div>
          <div>
            <ul className="dots">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="postImageContainer">
          <p className="postDescription">Hey! It's my first post!</p>
          <img src={FriendProfileImage} className="postImage"></img>
        </div>
        <div className="postComments">
          <ThumbUpIcon style={{ color: "blue" }} />
          <FavoriteIcon style={{ color: "red" }} />
          <span>32 people like it</span>
          <span>9 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
