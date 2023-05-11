import PhoneNumbers from 'components/PhoneNumbers';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import css from './InfoAboutCompany.module.scss';
import LayoutPages from 'utils/LayoutPages/LayoutPages';

const InfoAboutCompany = () => {
  return (
    <>
      <LayoutPages
        title={'Будівництво ангарів та складів в Україні'}
        description={
          'Ангари з металу прямостінні. Ангари під зерно та техніку. Ангари для бізнесу. Складські приміщення для всіх сфер діяльності. Будівлі з металоконструкцій від виробника.'
        }
        url={'https://andezyan-build.netlify.app/contacts'}
      />
      <div className={css.wrapperAboutUs}>
        <PhoneNumbers />
        <section>
          <h3 className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
            Адреси:
          </h3>
          <address>
            <ul>
              <li className={css.itemAdressAboutUs}>
                <p className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
                  Фізична дреса:
                </p>
                <div className={css.addressLink}>
                  <a
                    href="https://goo.gl/maps/zNNVitSysmtxiFwQA"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title="Фізична адреса"
                  >
                    <FiMapPin size={25} color={'green'} />
                    09100, Київська обл., Білоцерківський р-н, м. Біла Церква,
                    вулиця Київська, 96.
                  </a>
                </div>
              </li>
              <li className={css.itemAdressAboutUs}>
                <p className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
                  Юридична адреса:
                </p>
                <div className={css.addressLink}>
                  <a
                    href="https://goo.gl/maps/Ah1rPgk2ksaops49A"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title="Юридична адреса"
                  >
                    <FiMapPin size={25} color={'green'} />
                    09800, Київська обл., Білоцерківський р-н, м. Тетіїв, вул.
                    Соборна, 68, к. 18
                  </a>
                </div>
              </li>
            </ul>
          </address>
        </section>

        <section>
          <h3 className={css.titleAboutUs + ' ' + css.orangeAboutUs}>
            Про нас:
          </h3>
          <ul>
            <li className={css.itemAdressAboutUs}>
              <p className={css.hightOrange + ' ' + css.textAboutUs}>
                Будівельна компанія «ОА Андезян» лідер на ринку будівництва
                ангарів, СТО, автомобільних боксів, автомийок, складів, складів
                для зберігання сільськогосподарської техніки та продукції,
                металоконструкцій та малих архітектурних форм (<abbr>МАФ</abbr>
                ). Також займається поектуванням вищевказаних об'єктів.
              </p>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                В сучасному будівництві, будівлі з металоконструкцій мають
                велику перевагу над монолітним або цегляним будівництвом. Велику
                роль відіграє сам каркас металоконструкції (легкий та
                швидкомонтований). Це є будівлі різного призначення та
                складності. Технологія будівництва є незамінною для сучасних
                магазинів, маркетів, автомийок, СТО, ангарів, складів,
                автосалонів, приміщень для проведення масових заходів та
                будинків з металоконструкцій.
              </p>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                Компанія «ОА Андезян» також виконує роботи з монтування:
                кіосків, торгових рядів, павільйонів, вольєрів, дачних будинків,
                альтанок, навісів, парканів та воріт. Також компанія «ОА
                Андезян» займається бетонуванням та улаштуванням покриттів з
                асфальтобетону.
              </p>
            </li>
            <li className={css.itemAdressAboutUs}>
              <p className={css.textAboutUs}>
                За 15 років успішної роботи компанією «ОА Андезян» було
                побудовано безліч будівель різноманітного типу та призначення.
                Всі вони зведені та побудовані з сучасних матеріалів,
                дотриманням новітніх технологій і відповідають усім сучасним
                нормам та стандартам ДСТУ.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default InfoAboutCompany;
