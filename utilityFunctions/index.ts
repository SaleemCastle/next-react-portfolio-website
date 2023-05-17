import { StaticImageData } from "next/image";

import office from '../public/office365.png'
import solarwinds from '../public/solarwinds.png'
import cisco from '../public/cisco.png'
import react from '../public/reactnative.png'
import typescript from '../public/typescript.png'
import spring from '../public/springboot.png'
import java from '../public/java.png'
import appcenter from '../public/AppCenter.png'
import bugsnag from '../public/bugsnag.png'
import github from '../public/github.png'
import joomla from '../public/joomla.png'
import mongodb from '../public/mongodb.png'
import laravel from '../public/laravel.png'
import nextjs from '../public/nextjs.png'
import tailwind from '../public/tailwind.png'
import php from '../public/php.png'
import nodejs from '../public/nodejs.png'

export const getTechnologyLogos: (tech: string) => StaticImageData = (tech) => {
  switch (tech) {
    case 'Office 365': return office

    case 'SolarWinds': return solarwinds

    case 'Cisco': return cisco

    case 'React': return react

    case 'React Native': return react

    case 'TypeScript': return typescript

    case 'SpringBoot': return spring

    case 'Java': return java

    case 'AppCenter': return appcenter

    case 'Github': return github

    case 'Bugsnag': return bugsnag

    case 'Joomla': return joomla

    case 'MongoDB': return mongodb

    case 'Laravel': return laravel

    case 'NextJs': return nextjs

    case 'Tailwind': return tailwind

    case 'Nodejs': return nodejs

    case 'Php': return php

    default: return react
  }
}