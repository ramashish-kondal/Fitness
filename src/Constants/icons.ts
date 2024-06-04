import { RFValue } from "react-native-responsive-fontsize";
import LeftArrow from "../Assets/Svgs/leftArrow.svg";
import Logo from "../Assets/Svgs/logoMain.svg";
import User from "../Assets/Svgs/user.svg";
import Lock from "../Assets/Svgs/lock.svg";
import GoogleLogo from "../Assets/Svgs/googleLogo.svg";
import FacebookLogo from "../Assets/Svgs/facebookLogo.svg";
import TwitterLogo from "../Assets/Svgs/twitterLogo.svg";
import Fingerprint from "../Assets/Svgs/fingerprint.svg";
import Gallery from "../Assets/Svgs/gallery.svg";
import Camera from "../Assets/Svgs/camera.svg";
import Female from "../Assets/Svgs/female.svg";
import Male from "../Assets/Svgs/male.svg";
import DoubleArrow from "../Assets/Svgs/doubleArrow.svg";
import Drawer from "../Assets/Svgs/drawerIcon.svg";
import Home from "../Assets/Svgs/home.svg";
import Settings from "../Assets/Svgs/settings.svg";
import Community from "../Assets/Svgs/community.svg";
import Notification from "../Assets/Svgs/bell.svg";
import Premium from "../Assets/Svgs/crown.svg";
import LogOut from "../Assets/Svgs/logout.svg";
import Nutrition from "../Assets/Svgs/nutrition.svg";
import Water from "../Assets/Svgs/water.svg";
import ManWalking from "../Assets/Svgs/manWalking.svg";

import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
} from "../Assets/Svgs/Avatars";
import {
  Fashion,
  Plant,
  Health,
  Meditation,
  Fitness,
  Running,
  Sleep,
  SmokeFree,
  Vegan,
} from "../Assets/Svgs/Interests";

const iconStyle = ({
  width = 0,
  height = 0,
  color = "black",
  borderColor = "none",
}) => ({
  width: RFValue(width),
  height: RFValue(height),
  fill: color,
  stroke: borderColor,
});
type iconProps = {
  width: number;
  height: number;
  color?: string;
  borderColor?: string;
};

const DRAWER = {
  Home: (params: iconProps) => Home({ ...iconStyle({ ...params }) }),
  Settings: (params: iconProps) => Settings({ ...iconStyle({ ...params }) }),
  Community: (params: iconProps) => Community({ ...iconStyle({ ...params }) }),
  Notification: (params: iconProps) =>
    Notification({ ...iconStyle({ ...params }) }),
  Premium: (params: iconProps) => Premium({ ...iconStyle({ ...params }) }),
  LogOut: (params: iconProps) => LogOut({ ...iconStyle({ ...params }) }),
};

const HOME_SCREEN = {
  Nutrition: (params: iconProps) => Nutrition({ ...iconStyle({ ...params }) }),
  Water: (params: iconProps) => Water({ ...iconStyle({ ...params }) }),
  ManWalking: (params: iconProps) =>
    ManWalking({ ...iconStyle({ ...params }) }),
};

export const ICONS = {
  ...DRAWER,
  ...HOME_SCREEN,
  LeftArrow: (params: iconProps) => LeftArrow({ ...iconStyle({ ...params }) }),
  Logo: (params: iconProps) => Logo({ ...iconStyle({ ...params }) }),
  User: (params: iconProps) => User({ ...iconStyle({ ...params }) }),
  Lock: (params: iconProps) => Lock({ ...iconStyle({ ...params }) }),
  Camera: (params: iconProps) => Camera({ ...iconStyle({ ...params }) }),
  Gallery: (params: iconProps) => Gallery({ ...iconStyle({ ...params }) }),
  Female: (params: iconProps) => Female({ ...iconStyle({ ...params }) }),
  Male: (params: iconProps) => Male({ ...iconStyle({ ...params }) }),
  Drawer: (params: iconProps) => Drawer({ ...iconStyle({ ...params }) }),
  DoubleArrow: (params: iconProps) =>
    DoubleArrow({ ...iconStyle({ ...params }) }),
  Fingerprint: (params: iconProps) =>
    Fingerprint({ ...iconStyle({ ...params }) }),
  GoogleLogo: (params: iconProps) =>
    GoogleLogo({ ...iconStyle({ ...params }) }),
  FacebookLogo: (params: iconProps) =>
    FacebookLogo({ ...iconStyle({ ...params }) }),
  TwitterLogo: (params: iconProps) =>
    TwitterLogo({ ...iconStyle({ ...params }) }),
};

const AVATAR_SIZE = {
  width: 75,
  height: 75,
};
export const AVATARS = {
  Avatar1: () => Avatar1({ ...iconStyle(AVATAR_SIZE) }),
  Avatar2: () => Avatar2({ ...iconStyle(AVATAR_SIZE) }),
  Avatar3: () => Avatar3({ ...iconStyle(AVATAR_SIZE) }),
  Avatar4: () => Avatar4({ ...iconStyle(AVATAR_SIZE) }),
  Avatar5: () => Avatar5({ ...iconStyle(AVATAR_SIZE) }),
  Avatar6: () => Avatar6({ ...iconStyle(AVATAR_SIZE) }),
  Avatar7: () => Avatar7({ ...iconStyle(AVATAR_SIZE) }),
  Avatar8: () => Avatar8({ ...iconStyle(AVATAR_SIZE) }),
};

export const INTERESTS = {
  Organic: (params: iconProps) => Plant({ ...iconStyle({ ...params }) }),
  Fashion: (params: iconProps) => Fashion({ ...iconStyle({ ...params }) }),
  Health: (params: iconProps) => Health({ ...iconStyle({ ...params }) }),
  Meditation: (params: iconProps) =>
    Meditation({ ...iconStyle({ ...params }) }),
  Fitness: (params: iconProps) => Fitness({ ...iconStyle({ ...params }) }),
  Running: (params: iconProps) => Running({ ...iconStyle({ ...params }) }),
  Sleep: (params: iconProps) => Sleep({ ...iconStyle({ ...params }) }),
  SmokeFree: (params: iconProps) => SmokeFree({ ...iconStyle({ ...params }) }),
  Vegan: (params: iconProps) => Vegan({ ...iconStyle({ ...params }) }),
};
