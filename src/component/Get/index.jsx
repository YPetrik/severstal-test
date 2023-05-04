import React from 'react';

import axios from 'axios';

import style from '../../styles/get.module.scss';

const Get = ({ setQueryStore }) => {
  const fetchAnswer = async () => {
    const now = new Date().toLocaleTimeString('en-GB');
    try {
      const response = await axios('/get');
      setQueryStore((prev) => [
        ...prev,
        { id: new Date().toISOString(), name: response?.data?.url, time: now },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <button className={style.main__btn} onClick={fetchAnswer}>
        Get
      </button>
    </div>
  );
};

export default Get;
