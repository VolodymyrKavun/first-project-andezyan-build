import PhoneNumbers from 'components/PhoneNumbers';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import css from './InfoAboutCompany.module.scss';

const InfoAboutCompany = () => {
  return (
    <div className={css.wrapperAboutUs}>
      <PhoneNumbers />
      <section>
        <h3 className={css.titleAboutUs + ' ' + css.orangeAboutUs}>Адреси:</h3>
        <address>
          <ul>
            <li className={css.itemAdressAboutUs}>
              <p className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
                Фізична дреса:
              </p>
              <a
                href="https://goo.gl/maps/zNNVitSysmtxiFwQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMapPin size={25} color={'green'} />
                09100, Київська обл., Білоцерківський р-н, м. Біла Церква,
                вулиця Богдана Хмельницького, 1/7
              </a>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
                Юридична адреса:
              </p>
              <a
                href="https://goo.gl/maps/Ah1rPgk2ksaops49A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMapPin size={25} color={'green'} />
                09800, Київська обл., Білоцерківський р-н, м. Тетіїв, вул.
                Соборна, 68, к. 18
              </a>
            </li>
          </ul>
        </address>
      </section>

      <section>
        <h3 className={css.titleAboutUs + ' ' + css.orangeAboutUs}>Про нас:</h3>
        <p className={css.itemAdressAboutUs}>
          <span className={css.orangeAboutUs}>Час роботи:</span> <br />
          Понеділок - п'ятниця з 8:00 до 18:00
        </p>

        <ul>
          <li className={css.itemAdressAboutUs}>
            <p className={css.hightOrange + ' ' + css.textAboutUs}>
              Будівельна компанія «ОА. Андезян» лідер у сфері будівництва
              ангарів, будівництва швидкомонтованих будівель, виготовлення
              металоконструкцій та малих архітектурних форм (<abbr>МАФ</abbr>).
            </p>
          </li>
          <li className={css.itemAdressAboutUs}>
            <p className={css.textAboutUs}>
              На сьогоднішній день каркасні металоконструкції мають велику
              популярність та переваги над монолітним або цегляним будівництвом.
              Велику роль грає сама конструкція (легка, швидкомонтована,
              точність конструкції, ціна). Це може бути будівлі різного
              призначення та складності. Зведення будівлі засноване на силовій
              металевій конструкції. Цей вид будівництва не замінний для
              сучасних магазинів, маркетів, автомийок, СТО, шиномонтажів,
              ангарів, складів, автосалонів, приміщень для масових заходів,
              швидкомонтованих будинків та будинків з металоконструкцій.
            </p>
          </li>
          <li className={css.itemAdressAboutUs}>
            <p className={css.textAboutUs}>
              Види будівництва малих архітектурних форм (МАФ) нашою компанією:
              кіоски, побутовки, торгові ряди, павільйони, мобільні будинки,
              вольєри. В асортименті компанії також є: дачні будиночки, навіси,
              лавки, паркани з профнастилу, альтанки.
            </p>
          </li>
          <li className={css.itemAdressAboutUs}>
            <p className={css.textAboutUs}>
              За 15 років успішної роботи ми звели дуже багато будівель. Всі
              вони виконані за найновішими технологіями та відповідають усім
              вимогам замовників.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default InfoAboutCompany;
