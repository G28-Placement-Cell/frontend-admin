import React from "react";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: "Registered Student Profiles",
    path: "/RegstudentProfiles",
    icon: <BiIcons.BiUser />,
    cName: "nav-text",
  },
  {
    title: "Pending Student Profiles",
    path: "/PenstudentProfiles",
    icon: <BiIcons.BiUser />,
    cName: "nav-text",
  },
  {
    title: "Registered Company Profiles",
    path: "/RegcompanyProfiles",
    icon: <BiIcons.BiUser />,
    cName: "nav-text",
  },
  {
    title: "Pending Company Profiles",
    path: "/PencompanyProfiles",
    icon: <BiIcons.BiUser />,
    cName: "nav-text",
  },
  {
    title: "Student Announcement",
    path: "/StudentAnnouncements",
    icon: <TfiIcons.TfiAnnouncement />,
    cName: "nav-text",
  },
  {
    title: " Company Announcement",
    path: "/CompanyAnnouncements",
    icon: <TfiIcons.TfiAnnouncement />,
    cName: "nav-text",
  },
  {
    title: "Announcements By Companies",
    path: "/AnnouncementsByCompany",
    icon: <TfiIcons.TfiAnnouncement />,
    cName: "nav-text",
  },
  {
    title: "Change Password",
    path: "/changepassword",
    icon: <TbIcons.TbArrowsExchange />,
    cName: "nav-text",
  },
  {
    title: "Log out",
    path: "/logout",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];
