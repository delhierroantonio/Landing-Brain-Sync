import futureImg from '../assets/images/purple3.png'
const FutureSection = () => {
  return (
    <section>
    <div className='bg-secondary flex flex-col md:flex-row relative z-10'>
      <div className="text-slate-200 min-h-[30vh] md:flex items-center py-8 px-6 lg:px-28">
        <div className="mb-4">
          <h2 className="font-bold text-2xl w-36 leading-3">
            Create the Future<span className="text-5xl text-primary">.</span>
          </h2>
        </div>
        <div>
          <p className='md:max-w-4xl'>building better tools intended to communicate with the brain. Despite the fact ultimate converse sit amet, consectetur adipiscing elite. Transfering data in a secure and fast way via AI plus network channels.</p>
        </div>
      </div>
      <div className="px-12">
        <img src={futureImg} alt="abstract image of a purple shape" className='rounded-xl max-w-[15rem] hidden md:inline-block sm:absolute right-0 -z-10' />
      </div>
    </div>
    </section>
  )
}

export default FutureSection