// src/components/SearchBar.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></FormControl>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
