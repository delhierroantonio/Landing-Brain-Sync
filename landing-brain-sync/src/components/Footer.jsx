
const Contact = () => {
  return (
    <div className="flex justify-center items-baseline flex-col sm:flex-row text-center gap-12 text-[#f8f9fa] px-10 py-12 border-[#707074] border-t-2 relative z-10">
      <a href="#" className="text-2xl font-bold bg-secondary">
        Brain Sync<span className="text-primary text-5xl">.</span>{" "}
      </a>
      <p className="font-light text-sm hover:text-primary opacity-75 tracking-wide uppercase transition ease-in-out delay-40">&copy; brain-sync 2023</p>
      <div className="flex flex-col">
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">privacy policy</button>
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">terms of use</button>
      </div>
      <div className="hidden md:flex flex-col">
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">aplications</button>
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">approach</button>
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">science</button>
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">carrers</button>
      </div>
      <div className="flex flex-col">
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">info@brain-sync</button>
        <button className="font-light text-sm hover:text-primary opacity-75 leading-6 tracking-wide uppercase transition ease-in-out delay-40">@brain-sync</button>
      </div>
    </div>
  )
}

export default Contact