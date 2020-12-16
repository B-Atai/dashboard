import React from 'react';
import Top from './top';
import Content from './content';
import './style.scss';

const Manage = ({ database }) => {
  return (
    <section className='manage'>
      <Top />
      <Content data={database}/>
    </section>
  );
};

export default Manage;