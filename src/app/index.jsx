import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Get from '../component/Get';
import Post from '../component/Post';
import Delete from '../component/Delete';
import Header from '../component/Header';
import Footer from '../component/Footer';

import style from '../styles/app.module.scss';

function App() {
  const [queryStore, setQueryStore] = React.useState([]);

  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path="/get" element={<Get setQueryStore={setQueryStore} />} />
        <Route path="/post" element={<Post setQueryStore={setQueryStore} />} />
        <Route path="/delete" element={<Delete setQueryStore={setQueryStore} />} />
      </Routes>
      <Footer queryStore={queryStore} />
    </div>
  );
}

export default App;
