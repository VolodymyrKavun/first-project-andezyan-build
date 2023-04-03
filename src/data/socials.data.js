import { v4 as uuidv4 } from 'uuid';

import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { SiViber } from 'react-icons/si';

export const socialsData = [
  {
    id: uuidv4(),
    path: 'tel:+380675909988',
    contents: '+380675909988',
    icon: <BsTelephone size={25} color={'#2d7a00'} />,
    description: 'Phone number',
  },
  {
    id: uuidv4(),
    path: 'mailto:aoandezyan@gmail.com',
    contents: 'aoandezyan@gmail.com',
    icon: <FiMail size={25} color={'#34b6d1'} />,
    description: 'Mail link',
  },
  {
    id: uuidv4(),
    path: 'https://t.me/ao_angar',
    icon: <TbBrandTelegram size={25} color={'#025a86'} />,
    description: 'Telegram link',
  },
  {
    id: uuidv4(),
    // path: 'https://www.linkedin.com/in/volodymir-kavun/',
    path: 'viber://chat?number=%2B380685909988',
    icon: <SiViber size={25} color={'#740274'} />,
    description: 'Viber link',
  },
];
