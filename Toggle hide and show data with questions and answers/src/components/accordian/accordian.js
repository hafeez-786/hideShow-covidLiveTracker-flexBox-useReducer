import React, { useState } from 'react';
import { questions } from './api';
import './accordian.css';
import MyAccordian from './MyAccordian';

const Accordian = () => {
  const [data] = useState(questions);

  
  return (
    <>
      <section className="main-div">
        <h1>React Interview Questions and Answers</h1>
        {
          data.map((curElem, index) => {
            return <MyAccordian key={index} {...curElem} />
          })
        }
      </section>
    </>
  )
}

export default Accordian
