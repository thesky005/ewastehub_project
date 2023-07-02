import React from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import HeaderAr from './HeaderAr';
import MainAr from './MainAr';

const Home = () => {
  //const ref = useRef();
  // const { language, toggleLanguage } = useContext(LanguageContext);
  // const translations = language === 'en' ? en : ar;

  // const { language } = useContext(LanguageContext);
  // const translations = language === 'en' ? en : ar;

  //const { t } = useTranslation();

  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

    // <Main/>

  return (
    <div>
       <HeaderAr/>
       <MainAr/>
       {/* <Catagories/>
      <Middle/>
      <Footer/> */}
      {/* <Footer/> */}
      {/* <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ar')}>Arabic</button>
      <h1>{t('home')}</h1>
      <p>{t('about')}</p>
      <p>{t('contact')}</p> */}
      {/* <h1>{translations.home}</h1>
      <p>{translations.about}</p>
      <p>{translations.contact}</p> */}
    </div>
  );
};

export default Home;
