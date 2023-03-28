import Socials from 'components/Socials/Socials';
import React from 'react';

// import InfoAboutCompany from 'components/InfoAboutCompany';

import styles from './StartPage.module.scss';
// import Image from 'components/Image';
// import css from '../InfoAboutCompany/InfoAboutCompany.module.scss';

const StartPage = () => {
  return (
    <>
      <div className={styles.wrapperStartP}>
        <section className={styles.textStartP}>
          <div style={{ marginTop: '320px' }}>
            <Socials />
          </div>

          {/* <ul>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                На сьогоднішній день каркасні металоконструкції мають велику
                популярність та переваги над монолітним або цегляним
                будівництвом. Велику роль грає сама конструкція (легка,
                швидкомонтована, точність конструкції, ціна). Це може бути
                будівлі різного призначення та складності. Зведення будівлі
                засноване на силовій металевій конструкції. Цей вид будівництва
                не замінний для сучасних магазинів, маркетів, автомийок, СТО,
                шиномонтажів, ангарів, складів, автосалонів, приміщень для
                масових заходів, швидкомонтованих будинків та будинків з
                металоконструкцій.
              </p>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                Види будівництва малих архітектурних форм (МАФ) нашою компанією:
                кіоски, побутовки, торгові ряди, павільйони, мобільні будинки,
                вольєри. В асортименті компанії також є: дачні будиночки,
                навіси, лавки, паркани з профнастилу, альтанки.
              </p>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                За 15 років успішної роботи ми звели дуже багато будівель. Всі
                вони виконані за найновішими технологіями та відповідають усім
                вимогам замовників.
              </p>
            </li>
          </ul> */}
          {/* <h1 className={styles.titleStartP}>АО-Андезян</h1> */}
          {/* <p className={styles.subtitleStartP}>
            Будівельна компанія «АО.-Андезян» лідер у сфері будівництва ангарів.
            будівництва швидкомонтованих будівель, виготовлення
            металоконструкцій та малих архітектурних форм (<abbr>МАФ</abbr>).
          </p> */}
          {/* <InfoAboutCompany /> */}
        </section>
      </div>
    </>
  );
};

export default StartPage;
