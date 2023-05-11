import { VscSymbolInterface } from "react-icons/vsc";
import { VscTerminalUbuntu } from "react-icons/vsc";
import { VscGitPullRequestDraft } from "react-icons/vsc";
const Features = () => {
  return (
    <div className="bg-[#f8f9fa] flex flex-col md:flex-row lg:px-20">
        <div className="px-6 py-10 border-b-2 border-gray-300">
          <VscSymbolInterface className="text-[3rem] text-secondary opacity-75" />
          <h2 className="text-xl font-medium lg:text-center mb-4">Bussines Interface</h2>
          <p className="text-secondary opacity-70 font-medium leading-6">Nearly three-quarters of companies are now using AI or are exploring the use of AI, according to IBM&apos;s 2021 Global AI Adoption Index.</p>
        </div>
        <div className="px-6 py-10 border-b-2 border-gray-300">
          <VscTerminalUbuntu className="text-[3rem] text-secondary opacity-75" />
          <h2 className="text-xl font-medium lg:text-center mb-4">Cloud Based Prompting</h2>
          <p className="text-secondary opacity-70  font-medium leading-6">Businesses and organizations are increasingly viewing AI as a must, to compete and win in the marketplace and to meet mission demands.</p>
        </div>
        <div className="px-6 py-10 border-b-2 border-gray-300">
          <VscGitPullRequestDraft className="text-[3rem] text-secondary opacity-75" />
          <h2 className="text-xl font-medium lg:text-center mb-4">Smart AI Procceses</h2>
          <p className="text-secondary opacity-70  font-medium leading-6">Intelligent automation simplifies processes, frees up resources and improves operational efficiencies, and it has a variety of applications. </p>
        </div>
    </div>
  )
}

export default Features