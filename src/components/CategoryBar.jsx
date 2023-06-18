import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const keywords = [
  'All',
  'CUKUR',
  'FENERBAHCE',
  'TBMM',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const CatergoryBar = () => {

    return (
    <div className='category-main'>
      <div className='categories'>
        <button className='category-btn'><AiOutlineLeft/></button>
          {
            keywords.map((v,i) => (
              <button className='keyword-btn' key={i}>
                  {v}
              </button>
            ))
          }
          <button className='category-btn'><AiOutlineRight/></button>
      </div>
    </div>
  )
}

export default CatergoryBar