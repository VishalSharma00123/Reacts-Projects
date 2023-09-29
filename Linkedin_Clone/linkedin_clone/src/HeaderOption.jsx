import classes from "./HeaderOption.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className={classes.headerOption}>
      {Icon && <Icon className={classes.headerOption__icon} />}
      {avatar && (
        <AccountCircleIcon
          className={classes.headerOption__icon}
          src={avatar}
        />
      )}

      <h3 className={classes.headerOption__title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
