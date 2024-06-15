import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import i1 from "../assets/1.jpg"
import i12 from "../assets/1.2.jpg"
import i2 from "../assets/2.jpg"
import i22 from "../assets/2.2.jpg"
import i3 from "../assets/3.jpg"
import i4 from "../assets/4.jpg"
import i42 from "../assets/4.2.jpg"
import lol1 from "../assets/lol1.jpg"
import lol2 from "../assets/lol2.jpg"
import lol3 from "../assets/lol3.jpg"
import lol4 from "../assets/lol4.jpg"
import lol5 from "../assets/lol5.jpg"
import home1 from "../assets/home1.jpg"
import { HiAdjustments } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";
import { Carousel } from "flowbite-react";
import p1 from "../assets/p1.jpg"
import p11 from "../assets/p11.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p14 from "../assets/p14.jpg"
import Airo from "../assets/Airo.png"
import Card from "../assets/Card.png"
import Retan from "../assets/Retan.png"
import interior1 from "../assets/interior1.jpg"
import interior2 from "../assets/interior2.jpg"
import interior3 from "../assets/interior3.jpg"
import brand1 from "../assets/brand1.jpg"
import brand2 from "../assets/brand2.jpg"
import brand3 from "../assets/brand3.jpg"
import brand4 from "../assets/brand4.jpg"
import brand5 from "../assets/brand5.jpg"
import brand6 from "../assets/brand6.jpg"
import brand7 from "../assets/brand7.jpg"
import last1 from "../assets/last1.jpg"
import last2 from "../assets/last2.jpg"
import last3 from "../assets/last3.jpg"
import last4 from "../assets/last4.jpg"
import last5 from "../assets/last5.jpg"
import last6 from "../assets/last6.jpg"





const HomePage = () => {
  return (
    <>
      <div className='header-3'>
        <div className='line'></div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className='h-[500px] '>

            {/* ****************** slide-1 ****************** */}

            <div className=''>
              <div className='absolute px-20 py-32 textmain1 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Normann Copenhagen -<br></br>Craft salt and pepper gririder</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>
              <div className="flex h-[500px] items-center justify-center  dark:text-white">
                <img className='h-[500px] w-screen' src={img1} alt="" />
              </div>
            </div>

            {/* ****************** slide-2 ****************** */}

            <div className=''>
              <div className='absolute px-20 py-32 textmain2 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Wood Minimal Office Chair<br></br>Extra 40% off now.</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>

              <div className="flex h-[500px]items-center justify-center dark:text-white">
                <img img className='h-[500px] w-screen' src={img2} alt="" />
              </div>
            </div>

            {/* ****************** slide-3 ****************** */}
            <div className=''>
              <div className='absolute px-20 py-32 textmain3 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Everyone's Talking About<br></br>Sweeper and funnel.</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>
              <div className="flex h-[500px] items-center justify-center dark:text-white">
                <img className='h-[500px] w-screen' src={img3} alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div >



      <div className="">
        <div className="">
          <div className="mt-16">
            <h1 className="flex justify-center font-bold text-3xl">
              Trending Products
            </h1>
            <p className="flex justify-center items-center mt-2">
              Top View In This Week
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-[30px] cursor-pointer">
          <div className="">
            <div className="relative">
              <img
                className="h-[400px] rounded-sm"
                src={i1}
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src={i12}
                  alt=""
                />
                <div className="absolute top-5 left-64 mt-2">
                  <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <CiHeart className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <SlEqualizer className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <IoEyeSharp className="h-7 w-7" />
                  </div>
                  <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                    <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                      <BsHandbag className="h-4 w-4 mr-2" />
                      <button className="">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="top-[20px] left-5 absolute h-7 w-14 text-white rounded-md bg-[#ba933e] ">
                Sale!
              </button>
            </div>

            <div className="mt-3">
              <p className="font-bold">Turning Table</p>
              <div className="flex text-sm">
                <p className="line-through text-gray-500">$57.00</p>
                <p className="text-[#ba933e] ml-2">$52.00</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" relative">
              <img
                className="h-[400px] rounded-sm"
                src={i2}
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src={i22}
                  alt=""
                />
                <div className="absolute top-5 left-64 mt-2">
                  <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <CiHeart className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <SlEqualizer className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <IoEyeSharp className="h-7 w-7" />
                  </div>
                  <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                    <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                      <BsHandbag className="h-4 w-4 mr-2" />
                      <button className="">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="top-[20px] left-5 absolute h-7 w-14 rounded-md bg-[#ba933e] text-white">
                Sale!
              </button>
            </div>
            <div className="mt-3">
              <p className="font-bold">Beoplay A1</p>
              <div className="flex text-sm">
                <p className="line-through text-gray-500">$49.00</p>
                <p className="text-[#ba933e] ml-2">$32.00</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[400px] rounded-sm"
              src={i3}
              alt=""
            />
            <div className="inner absolute">
              <div className="absolute top-5 left-64 mt-2">
                <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                  <CiHeart className="h-7 w-7" />
                </div>
                <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                  <SlEqualizer className="h-5 w-5" />
                </div>
                <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                  <IoEyeSharp className="h-7 w-7" />
                </div>
                <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                  <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                    <BsHandbag className="h-4 w-4 mr-2" />
                    <button className="">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="font-bold">Stainless steel teapot</p>
              <div className="flex text-sm">
                <p className="text-gray-500">$18.00</p>
                <p className="ml-1">-</p>
                <p className="ml-1 text-gray-500">$39.00</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <img
                className="h-[400px] rounded-sm"
                src={i4}
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src={i42}
                  alt=""
                />
                <div className="inner absolute">
                  <div className="absolute top-5 left-64 mt-2">
                    <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <CiHeart className="h-7 w-7" />
                    </div>
                    <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <SlEqualizer className="h-5 w-5" />
                    </div>
                    <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <IoEyeSharp className="h-7 w-7" />
                    </div>
                    <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                      <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                        <BsHandbag className="h-4 w-4 mr-2" />
                        <button className="">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="font-bold">Pilke 60 Pendant Lamp</p>
              <div className="flex text-sm">
                <p className="text-gray-500">$39.00</p>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className='mt-[90px] ml-20'>
            <div className='flex gap-[40px]'>
              <div className='image-container relative'>
                <img className='w-[670px] h-[380px]' src={lol1} alt="" />
                <div className='absolute top-14 flex left-10'>
                  <h1 className='font-bold text-[22px]'>Quick parcel delivery ,</h1>
                  <p className='text-[#ba933e] font-bold text-[22px]'> from $25</p>
                </div>
                <div className='absolute top-[90px] left-10 text-[35px]'>
                  <h1 className='font-bold'>Up to 70% off</h1>
                  <h1 className='font-bold'>Intrio Home Decor</h1>
                </div>
                <div className='absolute top-[190px] left-10'>
                  <h1 className=''>Class aptent taciti socisoqu ad litora</h1>
                </div>
                <div className='absolute top-[230px] left-10 flex'>
                  <button className='bg-black text-white h-14 w-56'>Shop Collection</button>
                </div>
              </div>
              <div className='image-container relative'>
                <img className='w-[670px] h-[380px]' src={lol2} alt="" />
                <div className='absolute top-14 flex left-10 '>
                  <h1 className='font-bold text-[22px] text-white'>Quick parcel delivery ,</h1>
                  <p className='text-[#ba933e] font-bold text-[22px]'> from $25</p>
                </div>
                <div className='absolute top-[90px] left-10 text-[35px] text-white'>
                  <h1 className='font-bold'>Up to 70% Sale off</h1>
                  <h1 className='font-bold'>Pendent Lamp</h1>
                </div>
                <div className='absolute top-[190px] left-10 text-white'>
                  <h1 className=''>Class aptent taciti socisoqu ad litora torquent per</h1>
                </div>
                <div className='absolute top-[230px] left-10 flex'>
                  <button className='bg-black text-white h-14 w-56'>Shop Collection</button>
                </div>
              </div>
            </div>
            <div className='flex mt-4'>
              <div className='flex'>
                <div className='image-container relative'>
                  <img className='w-[325px] ' src={lol3} alt="" />
                  <div className='absolute top-8 left-10'>
                    <h1 className='font-bold text-[25px]' >Turing Table</h1>
                    <p className='mt-1'>Class aptent taciti sociosqu</p>
                    <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>From$49.59</h1>
                  </div>
                </div>
                <div className='image-container ml-5 relative'>
                  <img className='w-[325px]' src={lol4} alt="" />
                  <div className='absolute top-8 left-10'>
                    <h1 className='font-bold text-[25px]' >Wood Chair</h1>
                    <p className='mt-1'>Class aptent taciti sociosqu</p>
                    <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>Extra 40% off</h1>
                  </div>
                </div>
                <div className='image-container ml-10 relative'>
                  <img className='w-[670px]' src={lol5} alt="" />
                  <div className='absolute top-8 left-10'>
                    <h1 className='font-bold text-[25px]' >Modern Nutshell Lounge Chair</h1>
                    <p className='mt-1'>Class aptent taciti sociosqu ad litora torquent per</p>
                    <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>Extra 20% off</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-5 relative'>
            <img src={home1} alt="" />
            <div className='absolute flex top-[100px] left-[770px] text-[20px] font-bold'>
              <p>Quick parcel delivery,</p>
              <p className='text-[#ba933e]'>from $25</p>
            </div>
            <div className='absolute font-bold top-[140px] left-[770px] text-[39px]'>
              <h1>Shop The New Brands</h1>
              <h1>Up to 40% off now.</h1>
            </div>
            <div className='absolute top-[250px] left-[770px] text-[15px]'>
              <p>Class aptent taciti sociosqu ad litora torquent per</p>
            </div>
            <div className='absolute top-[290px] left-[770px] '>
              <button className='bg-black text-white h-12 w-52 rounded-md'>Shop Collection</button>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-5'>
            <div className='flex justify-center items-center font-bold text-[30px]'>
              <h1>Best Seller Products</h1>
            </div>
            <div className='flex justify-center items-center text-[17px] mt-2'>
              <p>Top Sale In This Week</p>
            </div>
          </div>
          <div className='mt-4 flex justify-center gap-[30px]'>
            <div className='relative'>
              <img className='h-[400px] rounded-sm' src={p1} alt="" />
              <div className='inner absolute'>
                <img className='h-[400px] rounded-sm' src={p11} alt="" />
                <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                  <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                    <CiHeart className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                  <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                    <BsHandbag className='h-4 w-4 mr-2' />
                    <button className=''>Select Options</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img className='h-[400px] rounded-sm' src={i1} alt="" />
              <div className='inner absolute'>
                <img className='h-[400px] rounded-sm' src={i12} alt="" />
                <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                  <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                    <CiHeart className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                  <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                    <BsHandbag className='h-4 w-4 mr-2' />
                    <button className=''>Add To Cart</button>
                  </div>
                </div>
              </div>
              <button className='top-[20px] left-5 absolute h-7 w-14 rounded-md bg-[#ba933e] text-white'>Sale!</button>
            </div>

            <div className='relative'>
              <img className='h-[400px] rounded-sm' src={p3} alt="" />
              <div className='inner absolute'>
                <img className='h-[400px] rounded-sm' src="./public/image/saler3.2.jpg" alt="" />
                <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                  <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                    <CiHeart className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                  <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                    <BsHandbag className='h-4 w-4 mr-2' />
                    <button className=''>Select Options</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img className='h-[400px] rounded-sm' src={p4} alt="" />
              <div className='inner absolute'>
                <img className='h-[400px] rounded-sm' src={p14} alt="" />
                <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                  <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                    <CiHeart className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                  <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                  </div>
                </div>
                <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                  <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                    <BsHandbag className='h-4 w-4 mr-2' />
                    <button className=''>Select Options</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bg photo */}

      <div className="flex mt-16">
        <div className=" bg-fixed bg-right-bottom  h-[600px] w-full bg-no-repeat bg-cover  bg-hero">
          <div className="absolute h-[300px] w-[1000px] right-80 mt-40 bg-white opacity-60">
            <h1 className="mt-20 text-center text-2xl font-bold">Subcribe To Our Newsletter</h1>
            <p className="mt-2 text-center text-gray-700">Sign up for the weekly newsletter and build better ecommerce stores.</p>
            <div className="mt-5 w-[600px] flex ml-[200px]">
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your e-mail" required />
              <button type="button" className="ml-3 mt-1 h-10 text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-400 dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
            <p className="text-gray-500 mt-2 text-center">* We will not share your contact</p>
          </div>
        </div>
      </div>

      <div className='bg-[#eeecec] flex justify-evenly items-center p-12' >
        <div className=''>
          <img className='h-20 ml-16' src={Airo} alt="" />
          <h1 className='font-bold text-[20px]'>Free Worldwide Shipping</h1>
          <h1 className='ml-6 mt-2' >On all orders over $75.00</h1>
          <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-16'>Learn More</h2>
        </div>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        <div className=''>
          <img className='h-20 ml-12' src={Card} alt="" />
          <h1 className='font-bold text-[20px] ml-5'>100% Payment Secure</h1>
          <h1 className='mt-2' >We ensure secure payment with PEV</h1>
          <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-20'>Learn More</h2>
        </div>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        <div className=''>
          <img className='h-20 ml-12' src={Retan} alt="" />
          <h1 className='font-bold text-[20px] ml-14'>30 Days Return</h1>
          <h1 className='mt-2' >Return it within 20 day for an exchange</h1>
          <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-20'>Learn More</h2>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center text-[30px] mt-5">
          <h1 className="font-bold">From Our Blog </h1>
        </div>
        <div className="flex justify-center items-center mt-2">
          <p>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget
          </p>
        </div>
        <div className="flex justify-evenly items-center p-12 gap-9">
          <div className="text-start">
            <div className="flex">
              <img
                className="h-[280px]"
                src={interior1}
                alt=""
              />
              <h1 className="ml-4 mt-4 absolute w-36 text-center text-white text-bold bg-orange-500 rounded-md">
                CONSTRUCTION
              </h1>
              <h1 className="ml-44 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                FURNITURE
              </h1>
            </div>
            <div className="flex mt-6">
              <p className="absolute font-bold text-orange-500">Admin</p>
              <p className="absolute ml-14 font-bold">.</p>
              <p className="text-gray-500 ml-16">December 21,2020</p>
            </div>
            <h1 className="font-bold text-2xl">
              Anteposuerit litterarum formas.
            </h1>
            <p className="text-gray-500">
              Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
              et enim sagittis malesuada id ut eros. Nullam dictum in...
            </p>
            <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
              <p>Read More</p>
            </div>
          </div>

          <div className="text-start">
            <div className="flex">
              <img
                className="h-[280px]"
                src={interior2}
                alt=""
              />
              <h1 className="ml-4 mt-4 absolute w-36 text-center text-white text-bold bg-orange-500 rounded-md">
                CONSTRUCTION
              </h1>
              <h1 className="ml-44 mt-4 absolute w-20 text-center text-white text-bold bg-orange-500 rounded-md">
                TRAVEL
              </h1>
            </div>
            <div className="flex mt-6">
              <p className="absolute font-bold text-orange-500">Admin</p>
              <p className="absolute ml-14 font-bold">.</p>
              <p className="text-gray-500 ml-16">December 20,2020</p>
            </div>
            <h1 className="font-bold text-2xl">
              Stylish color scheme in interior
            </h1>
            <p className="text-gray-500">
              Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
              et enim sagittis malesuada id ut eros. Nullam dictum in...
            </p>
            <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
              <p>Read More</p>
            </div>
          </div>

          <div className="text-start">
            <div className="flex">
              <img
                className="h-[280px]"
                src={interior3}
                alt=""
              />
              <h1 className="ml-4 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                EDUCATION
              </h1>
              <h1 className="ml-36 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                FURNITURE
              </h1>
            </div>
            <div className="flex mt-6">
              <p className="absolute font-bold text-orange-500">Admin</p>
              <p className="absolute ml-14 font-bold">.</p>
              <p className="text-gray-500 ml-16">December 19,2020</p>
            </div>
            <h1 className="font-bold text-2xl">
              The color scheme for bedrooms
            </h1>
            <p className="text-gray-500">
              Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
              et enim sagittis malesuada id ut eros. Nullam dictum in...
            </p>
            <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
              <p>Read More</p>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex space-x-24 animate-loop-scroll group-hover:paused">
            <img loading="lazy" src={brand1} className="max-w-none h-24" alt="Image 1" />
            <img loading="lazy" src={brand2} className="max-w-none h-24" alt="Image 2" />
            <img loading="lazy" src={brand3} className="max-w-none h-24" alt="Image 3" />
            <img loading="lazy" src={brand4} className="max-w-none h-24" alt="Image 4" />
            <img loading="lazy" src={brand5} className="max-w-none h-24" alt="Image 5" />
            <img loading="lazy" src={brand6} className="max-w-none h-24" alt="Image 6" />
            <img loading="lazy" src={brand7} className="max-w-none h-24" alt="Image 7" />
          </div>
          <div className="flex space-x-24 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <img loading="lazy" src={brand1} className="max-w-none h-24" alt="Image 1" />
            <img loading="lazy" src={brand2} className="max-w-none h-24" alt="Image 2" />
            <img loading="lazy" src={brand3} className="max-w-none h-24" alt="Image 3" />
            <img loading="lazy" src={brand4} className="max-w-none h-24" alt="Image 4" />
            <img loading="lazy" src={brand5} className="max-w-none h-24" alt="Image 5" />
            <img loading="lazy" src={brand6} className="max-w-none h-24" alt="Image 6" />
            <img loading="lazy" src={brand7} className="max-w-none h-24" alt="Image 7" />
          </div>
        </div>

        <div className='mb-20'>
          <div className='mt-20'>
            <div className='flex justify-center'>
              <h1 className='text-center font-bold text-[30px]'>Follow us on Instagram</h1>
            </div>
            <div className='flex justify-center mt-2'>
              <p className='text-center text-[19px]'>@ nk Instagram</p>
            </div>
          </div>
          <div className='flex justify-center mt-5 gap-10'>
            <img className='h-[180px] w-[200px]' src={last1} alt="" />
            <img className='h-[180px] w-[200px]' src={last2} alt="" />
            <img className='h-[180px] w-[200px]' src={last3} alt="" />
            <img className='h-[180px] w-[200px]' src={last4} alt="" />
            <img className='h-[180px] w-[200px]' src={last5} alt="" />
            <img className='h-[180px] w-[200px]' src={last6} alt="" />
          </div>
        </div>
      </div>


    </>
  )
}

export default HomePage
