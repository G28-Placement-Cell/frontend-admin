import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi"
import * as RxIcons from "react-icons/rx"
import * as TbIcons from 'react-icons/tb'

export const SidebarData = [
  {
    title: 'Student Profiles',
    path: '/studentProfiles',
    icon: <BiIcons.BiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Company Profiles',
    path: '/companyProfiles',
    icon: <BiIcons.BiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/announcements',
    icon: <TfiIcons.TfiAnnouncement />,
    cName: 'nav-text'
  },
  {
    title: 'Change Password',
    path: '/changepassword',
    icon: <TbIcons.TbArrowsExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];