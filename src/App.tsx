import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '@src/assets/scss/style.scss';
import UserList from '@src/modules/UserList';
import Symbols from '@src/assets/icons/Symbols';

export const App = () => (
  <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </HashRouter>
    <Symbols />
  </div>
);
