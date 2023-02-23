import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const NotFound = () => {
  const [t] = useTranslation('movies');
  return (
  <div className='text-center'>
    <header className='bg-white min-h-screen flex flex-col justify-center items-center text-black'>
      <p data-cy='welcome-text'>{t('notFound')}</p>
      <div className='flex-row'>
        <Link to='/'>{t('goBack')}</Link>
      </div>
    </header>
  </div>
  )
};

export default memo(NotFound);
