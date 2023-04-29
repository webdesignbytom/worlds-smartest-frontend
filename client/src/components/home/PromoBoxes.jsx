import React from 'react';
import { Link } from 'react-router-dom';
// Data
import { homepageInfoContainers } from '../../utils/data/HomeData';
// Icons
import { FaAward, FaUsers, FaCrutch } from 'react-icons/fa';
import { MdOutlineScoreboard } from 'react-icons/md';
import { HiBeaker } from 'react-icons/hi';
import { GiPerspectiveDiceThree } from 'react-icons/gi';

function PromoBoxes() {
  const boxIcons = [
    <MdOutlineScoreboard size={25} />,
    <FaUsers size={25} />,
    <HiBeaker size={25} />,
    <FaAward size={25} />,
    <FaCrutch size={25} />,
    <GiPerspectiveDiceThree size={25} />,
  ];

  console.log('homepageInfoContainers', homepageInfoContainers);
  return (
    <>
      {homepageInfoContainers.map((data, index) => {
        return (
          <div
            key={index}
            className='text-white bg-neo-in no__highlights h-full grid items-center justify-center rounded-lg outline-4 m-1 p-1 outline-black'
          >
            <article className='grid grid-flow-row px-1 text-center leading-4 justify-center items-center lg:py-4'>
              <h6 className='text-xl my-1 tracking-wide font-anton'>{data.title}</h6>
              <span className='flex justify-center my-2'>{boxIcons[index]}</span>
              <p className='leading-4 text-sm'>{data.contents}</p>
              <Link className='my-2' to={data.url}>
                <span className='text-yellow-600 font-semibold hover:text-blue-700'>
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
