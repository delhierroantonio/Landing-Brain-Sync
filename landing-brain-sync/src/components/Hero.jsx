import heroImg from '../assets/images/purple4.png'
import { BiLoaderAlt } from "react-icons/Bi";
const Hero = () => {
  return (
    <div className='lg:h-[90vh] bg-[#16151b] flex flex-col justify-center items-center md:flex-row'>
      <div className='text-center mb-2'>
        <h1 className="text-slate-200 font-bold text-3xl md:text-5xl mx-6 mb-4 max-w-3xl tracking-widest pt-2">Explore the capabilities of AI productivity with <span>Brain Sync</span></h1>
        <p className="text-slate-300 md:text-xl mx-8 mb-2">Unlock the power of AI within Brain Sync.</p>
        <p className="text-slate-300 md:text-xl mx-8 pb-4">Upgrade your productivity and take faster desicions with our AI chat app.</p>
        <button className="font-mono px-6 py-2 border-[#f8f9fa] border-[1px] hover:bg-[#f8f9fa] text-[#f8f9fa] hover:text-secondary rounded-md transition ease-in-out delay-40">get started</button>
      </div>
      <div className='md:m-10'>
        <img src={heroImg} alt="abstract image" className='w-full md:h-[45vh] lg:h-[50vh] h-[35vh] max-h-96 rounded-xl object-cover' />
        <div className='text-slate-300 bg-opacity-10 bg-slate-400 py-2 mb-4 px-4 rounded-3xl'>
          <p className='flex justify-center items-center gap-4 text-slate-400'><BiLoaderAlt className='w-4 text-primary' />AI is generating..</p>  
        </div>
      </div>
    </div>
  )
}

export default Hero