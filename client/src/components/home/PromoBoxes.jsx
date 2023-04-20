import React from 'react';
import { Link } from 'react-router-dom';
// Data
import { homepageInfoContainers } from '../../utils/data/HomeData';

function PromoBoxes() {
  console.log('homepageInfoContainers', homepageInfoContainers);
  return (
    <>
      {homepageInfoContainers.map((data, index) => {
        return (
          <div key={index} className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
            <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
              <h6 className='font-semibold'>{data.title}</h6>
              <span className='py-1'>ICON</span>
              <p className='py-1'>
                {data.contents}
              </p>
              <Link to='/quiz-information'>
                <span className='text-blue-500 font-semibold hover:text-blue-700'>
                  Learn More!
                </span>
              </Link>
            </article>
          </div>
        );
      })}
    </>
  );
}

export default PromoBoxes;
