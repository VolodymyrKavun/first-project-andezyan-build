import { v4 as uuidv4 } from 'uuid';

// import belaya_sto_oksana from '../images/belaya_sto_oksana.JPEG';
import belaya_sto_oksana_min from '../images/angars/belaya_sto_oksana_min.jpg';
import house_front_finnish_04 from '../images/houses/house_front_finnish_04.jpg';
import beton_vishneve_01 from '../images/beton/beton_vishneve_01.jpg';
import shop_maf_grey from '../images/shops/shop_maf_grey.jpg';
import asphalt_kopilov_front from '../images/asphalt/asphalt_kopilov_front.jpg';

export const imagesGalery = [
  {
    id: uuidv4(),
    url: belaya_sto_oksana_min,
    title: 'Ангари',
    width: '40%',
    group: 'angars',
  },
  {
    id: uuidv4(),
    url: house_front_finnish_04,
    title: 'Будинки',
    width: '30%',
    group: 'houses',
  },
  {
    id: uuidv4(),
    url: beton_vishneve_01,
    title: 'Бетонні роботи',
    width: '30%',
    group: 'beton',
  },
  {
    id: uuidv4(),
    url: shop_maf_grey,
    title: 'Магазини',
    width: '30%',
    group: 'shops',
  },
  {
    id: uuidv4(),
    url: asphalt_kopilov_front,
    title: 'Асфальтні роботи',
    width: '30%',
    group: 'asphalt',
  },
];
