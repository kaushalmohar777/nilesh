import React from 'react'
import Bg1 from '../assets/2-6year.png'
import Bg2 from '../assets/7-12year.png'
import Bg3 from '../assets/13+year.png'
const Multicolumn = () => {
  return (
    <>
    <div className="bg-pale py-12">
<div class="w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
<div>
  <h2 className=''> Shop by Age </h2>
  <p className=''>Lorem ipsum is a dummy or placeholder text commonly used in graphic design.</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
  <div
  className="p-6 rounded-lg shadow-md text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg1})` }}
>
    <h2 className='text-2xl font-semibold mb-4'>Column 1</h2>
    <p className='text-gray-600'>This is the content for the first column. You can add any text or elements here.</p>
  </div>
  <div
  className="p-6 rounded-lg shadow-md text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg2})` }}
>
    <h2 className='text-2xl font-semibold mb-4'>Column 2</h2>
    <p className='text-gray-600'>This is the content for the second column. You can add any text or elements here.</p>
  </div>
  <div
  className="p-6 rounded-lg shadow-md text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg3})` }}
>
    <h2 className='text-2xl font-semibold mb-4'>Column 3</h2>
    <p className='text-gray-600'>This is the content for the third column. You can add any text or elements here.</p>
  </div>
</div>
</div>

    </div>
    </>
  )
}

export default Multicolumn