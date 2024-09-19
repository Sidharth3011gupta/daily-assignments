import React from 'react'
import image from '../assets/image.png'

import Button from './BUTTON'
const Main2 = () => {
  return (
  <div className='flex m-4 mt-10 gap-5'>
    <img src={image} className='w-1/2 rounded-lg '></img>
    <div className='m-2'>
      <h1 className='font-bold text-2xl mb-2'>HP Newest 255 G10 Laptop for Home or Work, 16GB RAM, 1TB SSD, 15.6" Full HD, Ryzen 3 7330U (Beat Intel i5-1135G7), Ethernet Port, HDMI, USB-C, Windows 11 Pro, Business and Fun Ready (2024)</h1>
      <p className='my-2 font-bold'>$449.99</p>
      <p><b>DESCRIPTION:-</b></p>
      <p><b>Brand --</b> HP</p>
      <p><b>Model Name --</b> HP 255</p>
      <p><b>Screen Size --</b> Dark Ash Silver</p>
      <p><b>RAM --</b> 16GB</p>
      <p><b>HardDisk Size --</b> 1 TB</p>
      <p><b>CPU Model --</b> Ryzen 3</p>
    <div className='w-1/2 h-1/4 border border-black-400 flex flex-col justify-between  p-4 text-left'>
    <div >
    <input type='radio' name='Exchangeoffer' id='radio1'></input>
    <label htmlFor='radio1'>Buy without Exchange $499.99</label>
    </div>
  <div className='bg-gray-400 h-[1px] relative left-0 top-0'></div>
    <div>
    <input type='radio'name='Exchangeoffer' id='radio2'></input>
    <label htmlFor='radio2'>Buy with Exchange up to $200 off</label>
    </div>
    </div>

    <div className='flex gap-4 w-full '>
    <Button 
    buttonContent={`Add to Cart`}
    buttonColor={`bg-blue-500`} 
    buttonTextColor={`white`}
    />

<Button 
    buttonContent={`Buy Now`}
    buttonColor={`bg-orange-500`} 
    buttonTextColor={`white`}
    />
    </div>

    </div>
  </div>
  )
}

export default Main2
