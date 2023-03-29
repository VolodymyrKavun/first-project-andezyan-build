import { v4 as uuidv4 } from 'uuid';

import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
// import { SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandTelegram } from 'react-icons/tb';
// import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export const socialsData = [
  {
    id: uuidv4(),
    path: 'tel:+380675909988',
    contents: '+380675909988',
    icon: <BsTelephone size={25} />,
    description: 'Phone number',
  },
  {
    id: uuidv4(),
    path: 'mailto:aoandezyan@gmail.com',
    contents: 'aoandezyan@gmail.com',
    icon: <FiMail size={25} />,
    description: 'Mail link',
  },
  {
    id: uuidv4(),
    path: 'https://t.me/ao_angar',
    icon: <TbBrandTelegram size={25} />,
    description: 'Telegram link',
  },
  // {
  //   id: uuidv4(),
  //   path: 'https://www.linkedin.com/in/volodymir-kavun/',
  //   icon: <SlSocialLinkedin />,
  // },
];
