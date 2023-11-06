import { FaInstagram } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { PiPhoneCallFill } from 'react-icons/pi'
import { SlLocationPin } from "react-icons/sl"
import { FaRegEnvelope } from "react-icons/fa"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { BsFillCircleFill } from "react-icons/bs"
import { GiStarMedal } from "react-icons/gi"
import { FaUserDoctor } from "react-icons/fa6"
import { RiPagesLine } from "react-icons/ri"
import Slider from "./Slider"
import Carousel from "./Carousel"
import Mainmenu from "./Mainmenu"



export default function MainPage() {
    return (
        <>
            <div className='flex justify-between px-10 py-3 bg-white w-full'>
                <div className='flex items-center gap-x-2'>
                    <div className='border-r-2 pr-2 py-1 border-gray-400'><FaInstagram size={20} /></div>
                    <div className='border-r-2 pr-2 py-1 border-gray-400'><AiOutlineTwitter size={20} /></div>
                    <div><BiLogoFacebook size={20} /></div>
                </div>
                <div className='flex items-center'>
                    <div className='pr-1'><PiPhoneCallFill size={20} /></div>
                    <div className='border-r-2 pr-2 py-1 border-gray-400'>+90 555 555 55 55</div>
                </div>
            </div>


            {/* <div className='flex justify-between px-10 py-5 menu w-full'>
                <div className='flex items-center gap-x-2'>
                    <div className='py-1 rounded-full bg-red-100'><BsFillCircleFill size={120} color='pink' /></div>
                </div>
                <div>
                    <div className='flex  mt-12 space-x-7 font-bold text-slate-500'>
                        <button>ANASAYFA</button>
                        <button>HAKKIMIZDA</button>
                        <button>HİZMETLERİMİZ</button>
                        <button>EKİBİMİZ</button>
                        <button>BLOG</button>
                        <button>İLETİŞİM</button>
                    </div>

                </div>
                <div className='flex items-center'>
                    <div className='border-r-2 pr-2 py-1 border-gray-400'><BsSearch size={20} /></div>
                    <div className='px-2'><button className='bg-cyan-600 hover:bg-blue-400 text-white font-bold py-2 border-b-1 border-blue-700 hover:border-blue-500 rounded w-28 text-xs'>RANDEVU AL</button></div>
                </div>
            </div> */}
          
            <Mainmenu />


            <div className='relative'>
                <div className='bg-transparent z-0 rounded-b-lg '><Carousel /></div>
                <div className='w-auto  md:ml-0 md:mr-0 lg:ml-96 lg:mr-96 h-36 rounded-lg bg-[#6daad9] bg-opacity-80 flex justify-center items-center grow border-r-2 absolute top-0 left-0 right-0 mt-[500px] z-10'>
                    <div className='flex flex-col items-center text-center'>
                        <div className="text-white font-bold text-2xl">
                            GÜZELLİĞİN KALBİNE HOŞGELDİNİZ!
                        </div>
                        <p className='px-10 md:px-10 md:w-3/4 text-white mt-4 break-all md:block hidden'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <div className='text-left ml-10 mb-10 md:ml-80 underline font-dancing-script text-5xl'>Hizmetlerimiz</div>
                <div className='grid place-items-center p-50'>


                    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li class="mr-2">
                            <a href="#" class="inline-block px-4 py-3 text-white bg-slate-500 rounded-lg active font-bold" aria-current="page">YÜZ</a>
                        </li>
                        <li class="mr-2">
                            <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white font-bold">MEME</a>
                        </li>
                        <li class="mr-2">
                            <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white font-bold">VÜCUT</a>
                        </li>

                    </ul>

                </div>
                <div className='lg:px-60 md:px-10'>
                    <Slider />

                </div>

            </div>
            <div className='flex h-80 bg-sky-700 py-4'>
                <div className='flex justify-center items-center grow border-r-2'>
                    <div className='hidden md:block mr-4'><GiStarMedal color='white' size={70} /></div>
                    <div className='flex flex-col text-white font-bold text-2xl'>
                        <span>25 +</span>
                        <span>Yıllık Deneyim</span>
                    </div>
                </div>
                <div className='flex justify-center items-center grow border-r-2'>
                    <div className='hidden md:block mr-4'><FaUserDoctor color='white' size={70} /></div>
                    <div className='flex flex-col text-white font-bold text-2xl'>
                        <span>5,000 +</span>
                        <span>Cerrahi Operasyon</span>
                    </div>
                </div>
                <div className='flex justify-center items-center grow'>
                    <div className='hidden md:block mr-4'><RiPagesLine color='white' size={70} /></div>
                    <div className='flex flex-col text-white font-bold text-2xl'>
                        <span>40 +</span>
                        <span>Ülke Sayısı</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  bg-slate-300 p-10 gap-y-20 md:p-10 lg:gap-x-10'>
                <div className='flex flex-col grow lg:w-1/12 md:mr-4'><h3 className='text-left text-black font-bold text-xl'>HAKKIMIZDA</h3>
                    <p className='text-left break-words mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no</p></div>
                <div className='grow flex flex-col gap-y-8 md:pr-4 lg:justify-center'>
                    <div className='flex'>
                        <div className='pr-5'><SlLocationPin size={50} /></div>
                        <div><div>Zeytinlik Mah. Türkçü Sok. Ferah Palas</div><div className='flex'> Apartman A Blok No:16 Daire:9 Kat:4</div><div className='flex'> Bakırköy/İSTANBUL</div></div>
                    </div>
                    <div className='flex'>
                        <div className='pr-5'><PiPhoneCallFill size={50} /></div>
                        <div><div>+90 535 12345 67</div><div>+90 535 12345 67</div></div>
                    </div>
                    <div className='flex'>
                        <div className='pr-5'><FaRegEnvelope size={50} /></div>
                        <div><div>bilgi@dentalcare.com</div><div>info@dentalcare.com</div></div>
                    </div>
                </div>
                <div className='grow'>
                    <div>
                        <div className='text-center text-black font-bold text-xl'>E-BÜLTEN</div>
                        <div className='text-left mt-3'>Haftalık haberler ve güncellemeler için kaydolun</div>
                        <div className='text-left'>
                            <label>E-mail</label></div>
                        <div className='md:w-3/4 '>

                            <form>
                                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">

                                    <input className="block w-full p-1  text-sm " />
                                    <div className="text-white absolute right-1 bottom-2  font-medium rounded-lg text-sm   ">
                                        <MdOutlineKeyboardDoubleArrowRight size={30} color='black' />

                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <div className='pr-2 py-1'><BiLogoFacebook size={25} /></div>
                            <div className='pr-2 py-1'><AiOutlineTwitter size={25} /></div>
                            <div><FaInstagram size={25} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}