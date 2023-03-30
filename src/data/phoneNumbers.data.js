import { v4 as uuidv4 } from 'uuid';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

export const numbers = [
  {
    id: uuidv4(),
    link: 'tel:+380675909988',
    icon: <BsTelephone />,
    number: '+380675909988',
    name: 'Оганес',
  },
  {
    id: uuidv4(),
    link: 'tel:+380685909988',
    icon: <BsTelephone />,
    number: '+380685909988',
    name: 'Інна',
  },
  {
    id: uuidv4(),
    link: 'tel:+380674630606',
    icon: <BsTelephone />,
    number: '+380674630606',
    name: 'Анатолій',
  },
  {
    id: uuidv4(),
    link: 'mailto:aoandezyan@gmail.com',
    rel: 'noopener noreferrer',
    icon: <FiMail />,
    number: 'aoandezyan@gmail.com',
  },
];
