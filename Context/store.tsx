'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'
import IExperience from '../models/experience'

interface ContextProps {
  experiences: IExperience[]
  setExperiences: Dispatch<SetStateAction<IExperience[]>>
}

const GlobalContext = createContext<ContextProps>({
  experiences: [],
  setExperiences: ():IExperience[] => []
})

export const GlobalContextProvider = ({ children }) => {
  const [experiences, setExperiences] = useState<[] | IExperience[]>([])

  return (
    <GlobalContext.Provider value={{ experiences, setExperiences }}> 
      { children }
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)