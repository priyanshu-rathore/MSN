import React from "react";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

const NavMenus = () => {
  return (
    <div className="flex items-center text-gray-900 gap-x-3">
      <EmojiEventsOutlinedIcon className="hover:bg-gray-200"/>
      <PersonAddAltOutlinedIcon className="hover:bg-gray-200" />
      <NotificationsOutlinedIcon className="hover:bg-gray-200" />
      <SettingsIcon className="hover:bg-gray-200" />
      <LanguageIcon className="hover:bg-gray-200" />
    </div>
  );
};

export default NavMenus;
