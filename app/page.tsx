import Image from 'next/image'
import SearchComponent from "./components/SearchComponent"
import Sidebar from './components/Sidebar'
import Content from './components/Content'

export default function Home() {

  return (
    <div className='h-screen w-full bg-[#f6f7fb]'>
      <SearchComponent />
      <div className='grid lg:grid-cols-3 w-full mt-5 gap-10'>
        <Sidebar />
        <Content />
      </div>
    </div>
 
  )
}
