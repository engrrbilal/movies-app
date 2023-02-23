import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Search = ({ onSearch, placeholder='Search' }) => {
  const [t] = useTranslation('movies');

  const [searchText, setSearchText] = useState('')
  const onChange = (e) => setSearchText(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className='container-fluid search-box'>
      <Form className="d-flex align-items-center" onSubmit={handleSearch}>
        <FormControl type="text" placeholder={placeholder} className="rounded-pill" value={searchText} onChange={onChange} />
          <Button onClick={handleSearch} variant="primary" className="rounded-pill input-search-button">
            {t('movie.search')}
          </Button>
      </Form>
    </div>
  );
};
