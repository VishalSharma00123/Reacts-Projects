import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="myimage"
          src="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png"
          alt=""
        />
        <AccountCircleIcon className="sidbar__accountCircleIcon " />
        <h3>Vishal Sharma!</h3>
        <h4>vishal@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile Viewers</p>
          <p className="sidebar__stateNumber">27</p>
        </div>
        <div className="sidebar__stat">
          <p>View all analytics</p>
          <p className="sidebar__stateNumber">0</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React js")}
        {recentItem("Javascript")}
        {recentItem("Github community")}
        {recentItem("Software Developer")}
        {recentItem("Chat GPT")}
      </div>
    </div>
  );
};

export default Sidebar;
