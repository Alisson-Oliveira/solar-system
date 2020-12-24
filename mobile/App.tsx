import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GET_STORAGE, SET_STORAGE } from './src/config/storage';

import Routes from './src/routes';

export default function App() {

  useEffect(() => {
    GET_STORAGE()
      .then(config => {
        if (config === undefined) {
          SET_STORAGE([]);
        }
      })
  }, []);

  return (
    <> 
      <StatusBar />
      <Routes />
    </>
  );
}
