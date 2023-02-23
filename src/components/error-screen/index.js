import React from 'react';
import { useTranslation } from 'react-i18next';


export const ErrorScreen = () => {
  const [t] = useTranslation('common');
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{ t('error.title') }</p>
      </header>
    </div>
  );
};
