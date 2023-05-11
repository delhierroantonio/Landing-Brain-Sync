import { CiMoneyBill } from "react-icons/ci";
import { VscArrowSmallDown } from "react-icons/vsc";
import { VscDashboard } from "react-icons/vsc";
import { VscLibrary } from "react-icons/vsc";
import pricingImg from '../assets/images/purple2.png'
const Pricing = () => {
  return (
    <section className="bg-[#f8f9fa] px-6 py-8 lg:px-28 md:flex">
      <div className="md:flex flex-col justify-center gap-2">
        <h2 className="text-center font-bold tracking-widest text-3xl pb-4">The power of AI at your hands for only $3.99 monthly</h2>
        <div className="md:flex justify-center">
          <p className="text-center opacity-70 font-medium leading-6 py-4">No usage limit<VscDashboard className="inline mx-4 text-2xl" /></p>
          <p className="text-center opacity-70 font-medium leading-6 py-4">Only one price<CiMoneyBill className="inline mx-4 text-2xl" /></p>
          <p className="text-center opacity-70 font-medium leading-6 py-4">All the features<VscLibrary className="inline mx-4 text-2xl" /></p>
        </div>
        <div className="flex justify-between sm:justify-center items-center gap-6">
          <button className="font-mono px-6 py-2 border-secondary border-[1px] hover:bg-secondary hover:text-[#f8f9fa] rounded-md transition ease-in-out delay-40">Contact Sales</button>
          <button className="font-mono text-primary flex items-center opacity-75 hover:opacity-100 transition ease-in-out delay-40">Learn More<VscArrowSmallDown className="text-lg" /></button>
        </div>
      </div>
      <div>
        <img src={pricingImg} alt="abstract illustration" />
      </div>
    </section>
  )
}

export default Pricing