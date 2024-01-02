import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { VscTools } from 'react-icons/vsc';
import { MdWorkOutline } from 'react-icons/md';

export const navLinks = [
  { title: 'home', icon: <AiOutlineHome /> },
  { title: 'about', icon: <AiOutlineUser /> },
  { title: 'skills', icon: <VscTools /> },
  { title: 'projects', icon: <MdWorkOutline /> },
  { title: 'contact', icon: <AiOutlineMail /> },
];

export const socialPageLinks = [
  {
    icon: <AiFillLinkedin />,
    link: 'https://www.linkedin.com/in/abdulmaleekadams/',
  },
  {
    icon: <RiTwitterXFill />,
    link: 'https://twitter.com/abdmaleekadams',
  },
  {
    icon: <AiFillGithub />,
    link: 'https://github.com/abdulmaleekadams',
  },
];
