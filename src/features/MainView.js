import React from 'react';
import HomePage from './HomePage';
import HeaderComponent from '../components/HeaderComponent';

function MainView() {
  return (
    <>
      <HeaderComponent title="Rick & Morty" />
      <HomePage></HomePage>
    </>
  );
}

export default MainView;
