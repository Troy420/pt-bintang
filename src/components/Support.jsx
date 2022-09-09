import React from 'react';
import {wa, hardware} from '../assets';
import styles, {layout} from '../style'

const Support = () => {
  return (
    <section 
      id="product" 
      className={layout.sectionReverse}
    >
      <div className={`${layout.sectionImgReverse} relative`}>
        <img src={hardware} alt="hardware" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Network Hardware <br className='sm:block hidden'/> Support & Maintenance.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Whether it's your wireless access point, fiber channel switch, or network director that has reached the end of its initial warranty, Park Place Technologies provides world-class optimization, support and network maintenance services for OEMs like Cisco, Brocade and HPE..</p>

        <div className='flex flex-row flex-wrap sm:mt-6 mt-4'>
          <a href="https://wa.me/628161816821?text=Halo%20IT%20Support%2C%0ASaya%20mendapatkan%20whatsapp%20dari%20website%20bintang%0ABoleh%20saya%20bertanya%3F" target="_blank">
            <img src={wa} alt="whatsapp" className='w-[80px] object-contain mr-5 cursor-pointer' />
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default Support