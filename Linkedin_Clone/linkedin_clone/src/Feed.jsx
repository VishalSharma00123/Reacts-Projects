import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { useState } from "react";
import Post from "./Post";
import { db } from "./firebase";

const Feed = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    db.collecion("posts").onSnapshot();
    setpost()
  });

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} color="#70b5f9" title="Photo" />
          <InputOptions Icon={SubscriptionsIcon} color="purple" title="Photo" />
          <InputOptions Icon={EventNoteIcon} color="orange" title="Photo" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            color="green"
            title="Photo"
          />
        </div>

        {/* body(post) */}
      </div>
      {/* posts */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Vishal Sharma"
        description="This is a Test"
        message="Wow this worked"
      />
    </div>
  );
};

export default Feed;
