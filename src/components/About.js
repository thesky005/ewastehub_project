import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about')}</h1>
      {/* About page content */}
    </div>
  );
};

export default About;

