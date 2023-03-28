import React from 'react';
import { BsTelephone } from 'react-icons/bs';

import css from './InfoAboutCompany.module.scss';

const InfoAboutCompany = () => {
  return (
    <div className={css.wrapperAboutUs}>
      <div className={css.textAboutUs}>
        <span className={css.itemAdressAboutUs + ' ' + css.orange}>
          Контакти:
        </span>
        <ul>
          <li className={css.itemAdressAboutUs}>
            <a href="tel:+380675909988" target={'_blanc'}>
              <span className={css.iconAboutUs}>
                <BsTelephone />
              </span>
              +380675909988 <span className={css.hightOrange}>Оганес</span>
            </a>
          </li>
          <li className={css.itemAdressAboutUs}>
            <a href="tel:+380675909988" target={'_blanc'}>
              <span className={css.iconAboutUs}>
                <BsTelephone />
              </span>
              +380685909988 <span className={css.hightOrange}>Інна</span>
            </a>
          </li>
          <li className={css.itemAdressAboutUs}>
            <a href="tel:+380675909988" target={'_blanc'}>
              <span className={css.iconAboutUs}>
                <BsTelephone />
              </span>
              +380674630606 <span className={css.hightOrange}>Анатолій</span>
            </a>
          </li>
        </ul>
      </div>
      <address>
        <ul>
          <li className={css.itemAdressAboutUs}>
            <span className={css.orange}>Фізична дреса:</span>
            <a
              href="https://goo.gl/maps/zNNVitSysmtxiFwQA"
              target="_blank"
              rel="noopener noreferrer"
            >
              09100, Київська обл., Білоцерківський р-н, м. Біла Церква, вулиця
              Богдана Хмельницького, 1/7
            </a>
          </li>
          <li className={css.itemAdressAboutUs}>
            <span className={css.orange}>Юридична адреса:</span>
            <a
              href="https://goo.gl/maps/Ah1rPgk2ksaops49A"
              target="_blank"
              rel="noopener noreferrer"
            >
              09800, Київська обл., Білоцерківський р-н, м. Тетіїв, вул.
              Соборна, 68, к. 18
            </a>
          </li>
        </ul>
      </address>

      <p className={css.itemAdressAboutUs}>
        <span className={css.orange}>Час роботи:</span> <br />
        Понеділок - п'ятниця з 8:00 до 18:00
      </p>

      <p className={css.itemAdressAboutUs + ' ' + css.hightOrange}>
        Будівельна компанія «ОА. Андезян» лідер у сфері будівництва ангарів,
        будівництва швидкомонтованих будівель, виготовлення металоконструкцій та
        малих архітектурних форм (<abbr>МАФ</abbr>).
      </p>

      <ul>
        <li className={css.itemAdressAboutUs}>
          <p className={css.textAboutUs}>
            На сьогоднішній день каркасні металоконструкції мають велику
            популярність та переваги над монолітним або цегляним будівництвом.
            Велику роль грає сама конструкція (легка, швидкомонтована, точність
            конструкції, ціна). Це може бути будівлі різного призначення та
            складності. Зведення будівлі засноване на силовій металевій
            конструкції. Цей вид будівництва не замінний для сучасних магазинів,
            маркетів, автомийок, СТО, шиномонтажів, ангарів, складів,
            автосалонів, приміщень для масових заходів, швидкомонтованих
            будинків та будинків з металоконструкцій.
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
            За 15 років успішної роботи ми звели дуже багато будівель. Всі вони
            виконані за найновішими технологіями та відповідають усім вимогам
            замовників.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default InfoAboutCompany;
