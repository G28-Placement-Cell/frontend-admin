import React from "react";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ArticleIcon from '@mui/icons-material/Article';
import CampaignIcon from '@mui/icons-material/Campaign';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const SidebarData = [
  {
    title: "Registered Student Profiles",
    path: "/RegstudentProfiles",
    icon: <PersonOutlineRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Pending Student Profiles",
    path: "/PenstudentProfiles",
    icon: <PersonOutlineRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Registered Company Profiles",
    path: "/RegcompanyProfiles",
    icon: <ApartmentRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Pending Company Profiles",
    path: "/PencompanyProfiles",
    icon: <ApartmentRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Job Profiles",
    path: "/jobProfiles",
    icon: <ArticleIcon />,
    cName: "nav-text",
  },
  {
    title: "Student Announcement",
    path: "/StudentAnnouncements",
    icon: <CampaignIcon />,
    cName: "nav-text",
  },
  {
    title: " Company Announcement",
    path: "/CompanyAnnouncements",
    icon: <CampaignIcon />,
    cName: "nav-text",
  },
  {
    title: "Announcements By Companies",
    path: "/AnnouncementsByCompany",
    icon: <PostAddRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Change Password",
    path: "/changepassword",
    icon: <SyncLockRoundedIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <LogoutRoundedIcon />,
    cName: "nav-text",
  },
];
