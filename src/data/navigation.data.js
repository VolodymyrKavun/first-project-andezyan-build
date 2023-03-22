import { v4 as uuidv4 } from 'uuid';

export const navData = [
  {
    id: uuidv4(),
    path: '/',
    title: 'Головна',
  },
  // {
  //   id: Math.random(),
  //   path: '/practic',
  //   title: 'Practic',
  // },
  {
    id: uuidv4(),
    path: '/gallery',
    title: 'Gallery',
  },
  {
    id: uuidv4(),
    path: '/video',
    title: 'Video',
  },
  {
    id: uuidv4(),
    path: '/contacts',
    title: 'Contacts',
  },
];
