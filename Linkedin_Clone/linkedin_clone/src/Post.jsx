import "./post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputOptions from "./InputOptions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <AccountCircleIcon className="icon" />
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <h4>{message}</h4>
      </div>

      <div className="post__button">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatIcon} title="Like" color="gray" />
        <InputOptions Icon={ShareIcon} title="Like" color="gray" />
        <InputOptions Icon={SendIcon} title="Like" color="gray" />
      </div>
    </div>
  );
};

export default Post;
