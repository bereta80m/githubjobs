"use client"
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({})

function GlobalProvider({ children }: { children: React.ReactNode }) {
  type SendGreeting = {
    Hello:string
  }
  
  useEffect(() => {
    const GetJobs = async () => {
      const url = 'https://job-listings.p.rapidapi.com/api/job/details/?url=https%3A%2F%2Fwww.indeed.co.in%2Frc%2Fclk%3Fjk%3D8fd51fdef5282f41%26fccid%3Da4e4e2eaf26690c9%26vjs%3D3';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2848adaaccmshfaf609beec7b428p1a5afajsn7f0f7e0af6e3',
          'X-RapidAPI-Host': 'job-listings.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }

    }
    GetJobs()
  }, [])
  return (
    <GlobalContext.Provider value={{ Hello: "Hello World!" }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export const UseGlobal = ()=> useContext(GlobalContext)