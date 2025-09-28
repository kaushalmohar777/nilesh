import React from 'react'

const Multicolumn = () => {
  return (
    <>
    <div className="bg-pale py-12">
<div class="w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
  <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <h2 className='text-2xl font-semibold mb-4'>Column 1</h2>
    <p className='text-gray-600'>This is the content for the first column. You can add any text or elements here.</p>
  </div>
  <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <h2 className='text-2xl font-semibold mb-4'>Column 2</h2>
    <p className='text-gray-600'>This is the content for the second column. You can add any text or elements here.</p>
  </div>
  <div className='bg-white p-6 rounded-lg shadow-md text-center'>
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