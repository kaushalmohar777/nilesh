import React from 'react'
import firstImg from '../assets/first-img.png'
import secondImg from '../assets/secondimg.png'
import thirdImg from '../assets/thirdimg.png'
const Multicolumn = () => {
  return (
    <>
    <div className="bg-pale py-12">
<div class="w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
<div className='text-center mb-10'>
  <h2 className='text-[32px] text-#013D54-700'> Shop by Age </h2>
  <p className='text-[16px] text-#013D54-500'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design.</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
   <a href="#" className='cursor-pointer text-decoration-none 
   p-6 rounded-lg shadow-md text-center main-div'
   style={{backgroundColor:'#DA6527'}}
   >
  <div
  className=""
  // style={{ backgroundImage: `url(${Bg1})` }}
>
    <h2 className='text-2xl font-semibold mb-4 text-white'>13+Years</h2>
  </div>
  <div className='img-div-main'>
<img src={firstImg} alt='hey' />
  </div>
  </a>
   <a href="#" className='cursor-pointer text-decoration-none
   p-6 rounded-lg shadow-md text-center bg-cover bg-center main-div
   '>
  <div
  className=""
  // style={{ backgroundImage: `url(${Bg2})` }}
>
    <h2 className='text-2xl font-semibold mb-4'>2-6Years</h2>

  </div>
   <div className='img-div-main'>
<img src={secondImg} alt='' />
  </div>
  </a>
   <a href="#" className='cursor-pointer text-decoration-none
   p-6 rounded-lg shadow-md text-center bg-cover bg-center main-div
   '>
  <div
  className=""
  // style={{ backgroundImage: `url(${Bg3})` }}
>
    <h2 className='text-2xl font-semibold mb-4'>7-12 Years</h2>
  </div>
   <div className='img-div-main'>
<img src={thirdImg} alt='' />
  </div>
  </a>
</div>
</div>

    </div>
    </>
  )
}

export default Multicolumn