import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <PeopleIcon />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FolderOpenIcon />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <CalendarTodayIcon />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <ListAltIcon />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    url: 'https://www.gmail.com',
    icon: <MailIcon />,
  },
  
];