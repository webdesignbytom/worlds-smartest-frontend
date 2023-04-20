import React from 'react';
import { Link } from 'react-router-dom';
// Data
import { homepageInfoContainers } from '../../utils/data/HomeData';
// Icons
import { FaBeer } from 'react-icons/fa';

function PromoBoxes() {
  const boxIcons = [
    <FaBeer size={25} />,
    <FaBeer size={25} />,
    <FaBeer size={25} />,
    <FaBeer size={25} />,
    <FaBeer size={25} />,
    <FaBeer size={25} />,
  ];

  console.log('homepageInfoContainers', homepageInfoContainers);
  return (
    <>
      {homepageInfoContainers.map((data, index) => {
        return (
          <div
            key={index}
            className='bg-blue-500 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'
          >
            <article className='grid px-1 text-center leading-4 justify-center items-center lg:py-4'>
              <h6 className='font-semibold my-1'>{data.title}</h6>
              <span className='flex justify-center my-2'>{boxIcons[index]}</span>
              <p className='leading-4 text-sm'>{data.contents}</p>
              <Link className='my-2' to={data.url}>
                <span className='text-yellow-300 font-semibold hover:text-blue-700'>
                  {data.cta}
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
