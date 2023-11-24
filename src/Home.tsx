import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

export const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <br />
      <br />
      <ResultsContainer />
    </>
  )
}