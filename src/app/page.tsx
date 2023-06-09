'use client' // this is a client component 

import Head from 'next/head'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { AiFillLinkedin, AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import agilebsl from '../../public/agilebsl.jpg'
import airbnbClone from '../../public/airbnb-clone.png'
import avatar from '../../public/avataaars.png'
import bairesdev from '../../public/design.png'
import bgImg from '../../public/bg-nondark.png'
import company from '../../public/company.png'
import dental from '../../public/dental.jpeg'
import hotelpage1 from '../../public/hotelpage.jpg'
import ooz from '../../public/oozwave.jpg'
import shirtCustomizer from '../../public/3dShirtCustomizer.png'
import sms from '../../public/smsltd.jpg'
import techStack from '../../util/tech'

import Card from '../../components/Card'
import CardSkeleton from '../../components/CardSkeleton'

import { getExperiences } from '../../network/apiRequest'
import { useGlobalContext } from '../../Context/store'
import { getTechnologyLogos } from '../../utilityFunctions'

import './styles.css'
import links from '../../util/links'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const { experiences, setExperiences } = useGlobalContext()

  useEffect(() => {
    getExperiences().then((data) => {
      setExperiences(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Saleem St. Micahel Castle Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name='description' content='react portfolio website for software engineer saleem castle'></meta>
        <meta name='keyword' content='saleem, castle, saleem castle, portfolio, software engineer, react, developer, javascript, typescript, tailwind, resume'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 bg-fixed bg-cover max-[600px]:px-0' style={{backgroundImage: `url(${bgImg.src})`}}>
        <section className='min-h-screen max-[600px]:px-16'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-black font-burtons dark:text-white'>Saleem Castle</h1>    
            <ul className='flex items-center'>
              <li>
                {
                  darkMode 
                  ?
                  <FaSun onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-white'/>
                  :
                  <div className='animation'>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black' />
                  </div>
                }
              </li>
              <li>
                <a href="/résumé.pdf" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                  Résumé
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Saleem St. Michael Castle</h2>
            <h3 className='text-2xl py-2 md:text-3xl text-gray-800 dark:text-white'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Mobile and Web Developer enthusiast with a passion for creating beautiful applications to help solve real-world problems</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href="https://codepen.io/SaleemCastle" target='_blank'><AiFillCodepenCircle /></a>
            <a href="https://github.com/SaleemCastle" target='_blank'><AiFillGithub /></a> 
            <a href="https://www.linkedin.com/in/saleem-castle-61840aa8/" target='_blank'><AiFillLinkedin /></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={ avatar } fill alt='' style={{ objectFit:'cover' }}/>
          </div>
        </section>
        
        <section className='max-[600px]:px-16'>
          <div>
            <h3 className='text-3xl py-1 text-gray-800 dark:text-white'>Experience</h3>
            {/* <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a deeloper I have done work for</p> */}
          </div>
          <div className='lg:flex gap-10'>
            {
              experiences.length > 0
              ?
              experiences.map((experience, index) => {
                const { description, employer, highlights, period, title, technologies } = experience

                const getIcon: () => StaticImageData = () => {
                  switch(employer) {
                    case 'Agile Business Solutions Limited': return agilebsl
                      
                    case 'Smart Mobile Solutions Limited': return sms
        
                    case 'BairesDev LLC': return bairesdev

                    default: return company
                  }
                }
                return (
                  <Card 
                    key={ index }
                    description={ description }
                    title={ title }
                    highlights={ highlights }
                    period={ period }
                    technologies={ technologies }
                    icon={ getIcon() } 
                  />
                )
              })
              :
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            }
          </div>
        </section>

        <section className='max-[600px]:px-16'>
          <div className='pt-3'>
            <h3 className='text-3xl py-1 text-gray-800 dark:text-white'>Portfolio</h3>
            {/* <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a deeloper I have done work for</p> */}
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={ ooz } alt='mobile_app_project' className='rounded-lg object-cover' style={{ width: '100%', height: '100%' }}/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={ hotelpage1 } alt='css_project_eduonix' className='rounded-lg object-cover' style={{ width: undefined, height: '100%' }}/>
            </div>

            <div className='basis-1/3 flex-1 relative overflow-hidden group rounded-lg'>
              <Link href={ links.airbnbClone } className='flex items-center justify-center' target='_blank'>
                <Image src={ airbnbClone } alt='airbnb_clone' className='rounded-lg object-cover ease-in-out duration-500 group-hover:scale-110' style={{ width: '100%', height: '100%' }}/>
                <div className="absolute bg-transparent w-full h-full opacity-0 rounded-lg overflow-hidden transition-opacity ease-in-out duration-500 group-hover:opacity-50 top-0  group-hover:bg-black" />
                <h3 className='text-white z-10 absolute group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-500 text-5xl'>Airbnb Clone!</h3>
              </Link>
            </div>

            <div className='basis-1/3 flex-1 relative overflow-hidden group rounded-lg'>
              <Link href={ links.shirtCustomizer } className='flex items-center justify-center' target='_blank'>
                <Image src={ shirtCustomizer } alt='3d shirt customizer' className='rounded-lg object-cover ease-in-out duration-500 group-hover:scale-110' style={{ width: '100%', height: '100%' }}/>
                <div className="absolute bg-transparent w-full h-full opacity-0 rounded-lg overflow-hidden transition-opacity ease-in-out duration-500 group-hover:opacity-50 top-0  group-hover:bg-black" />
                <h3 className='text-white z-10 absolute group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-500 text-5xl'>3D Shirt Customiser!</h3>
              </Link>
            </div>
          </div>
          <div>
            <p className='text-3xl leading-8 text-gray-800 dark:text-white'>Upcoming Projects</p>
            <p className='text-md pb-5 leading-8 text-teal-600 dark:text-white'>Dental Booking Web App</p>
            <Image src={ dental } alt='upcoming_web_app' className='rounded-lg object-cover pb-10 w-1/2 h-1/2'/>
          </div>
        </section>

        <section className=''>
            <div className='bg-gray-700 pt-16 pb-1 px-16 dark:bg-white rounded-t-2xl max-[600px]:rounded-none '>
                <div>
                    <h3 className='text-3xl py-1 text-white dark:text-gray-800'>Technologies and Frameworks</h3>
                    <p className='text-md py-5 leading-8 text-white dark:text-gray-800'>Languages I have played around with and used professionaly during my development journey thus far: </p>
                </div>
                <div className='flex flex-wrap  gap-10 py-10 lg:flex-row md:flex-wrap sm:flex-wrap'>
                    {
                    techStack.map((tech, index) => (
                        <Image key={ index } className='mx-auto' src={ getTechnologyLogos(tech) } height={ 40 } alt={ tech }/>
                    ))
                    }
                </div>

                <div>
                <p className='text-md py-5 pb-10 leading-8 text-white dark:text-gray-800'>
                    This project was developed using <span className='text-teal-600'><a href='https://nextjs.org/' target='_blank'>NextJS </a></span> 
                    as the frontend component and styled with <span className='text-teal-600'><a href='https://tailwindcss.com/' target='_blank'>Tailwind CSS.</a> </span>
                    Backend component was developed using 
                    <span className='text-teal-600'><a href='https://nodejs.org/en' target='_blank'> NodeJs</a> </span> 
                    to perform CRUD operations on a <span className='text-teal-600'><a href='https://www.mongodb.com/' target='_blank'>MongoDB</a></span> database collection.
                </p>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}
