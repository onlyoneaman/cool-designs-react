import {Home, FileText, User, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {Card} from "@/components/ui/card.js";
import {useGlobalContext} from "@/context/GlobalContext.js";
import {useEffect, useState} from "react";

const Concept2 = () => {
    const {setFullScreen} = useGlobalContext();
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
      setFullScreen(true);
      return () => setFullScreen(false);
    }, []);

    const siderLinks = [
      {name: 'Home', icon: Home},
      {name: 'Plans', icon: FileText},
      {name: 'Profile', icon: User}
    ]

    return (
      <div className="flex min-h-screen bg-[#FFFCF5]">
        <aside className="w-64 p-6 bg-gradient-to-b from-[#FAF7E4] to-[#FFFCF5]">
          <div className="flex flex-col min-h-full justify-between">
            <div className='pt-5 md:pt-9'>
              <div className="flex items-center space-x-2">
                <span className="font-semibold italic text-[#2D2D2D]">ShareWillow</span>
              </div>

              <div className="space-y-2 py-4">
                <div>
                  <h4 className="text-2xl font-medium text-[#2D2D2D]">Welcome Back,</h4>
                  <h2 className='text-2xl font-bold text-[#2D2D2D]'>
                    Alfredo!
                  </h2>
                </div>
                <div className="text-sm text-[#6B6B6B]">
                  <p>CCM Overhead Doors, Inc.</p>
                  <p>Valued employee since Oct, 2024.</p>
                </div>
              </div>

              <nav className="space-y-2">

                {
                  siderLinks.map(({name, icon: Icon}, index) => (
                    <Link
                      key={index}
                      onClick={() => setActiveTab(name)}
                      to="#"
                      className={`flex items-center space-x-2 px-3 py-2  rounded-md
                      ${name === activeTab ? 'bg-[#F5F1E4] text-[#2D2D2D] font-semibold' :
                        ' hover:bg-[#F5F1E4] text-[#6B6B6B] hover:text-[#2D2D2D]'}
                    `}
                    >
                      <Icon className="w-4 h-4"/>
                      <span>{name}</span>
                    </Link>
                  ))
                }

              </nav>
            </div>

            {/* Total Awards */}
            <div className="space-y-2 pb-6 md:pb-9">
              <p className="text-xs uppercase text-[#6B6B6B]">Total Awards Earned</p>
              <p className="text-3xl font-medium text-[#4F7942]">$6,452.75</p>
              <div
                className="flex items-center justify-between space-x-2 text-sm text-[#6B6B6B] border-t-2 border-[#E8E3D9] pt-2"
              >
                <span>Award % of salary</span>
                <span className="font-semibold">5%</span>
              </div>
            </div>

          </div>
        </aside>

        <main className="bg-white border-[E8E3D9] shadow-md rounded-2xl flex-1 p-8 md:p-16">
          <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-medium text-[#2D2D2D]">Installer Plan 2025</h1>
              <ArrowUpRight className="w-6 h-6 cursor-pointer text-gray-400"/>
            </div>

            {/* Total Year-to-Date */}
            <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm">
              <div className="flex justify-between items-center space-y-1">
                <h2 className="text-xl font-medium text-[#2D2D2D]">Total Year-to-Date Earned</h2>
                <p className="text-3xl font-medium text-[#4F7942]">$1,226</p>
              </div>
            </Card>

            {/* Team Goals and Award Formula */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Team Goals */}
              <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-[#2D2D2D]">Team Goals</h2>
                  <p className="text-sm text-[#6B6B6B]">
                    Minimum amount that needs to be achieved before profit-sharing is activated.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#6B6B6B]">REVENUE (MIN)</p>
                    <span className='text-xl font-semibold text-[#2D2D2D]'>$285k</span>
                    <span className="text-xl font-light text-[#2D2D2D]"> /month</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B6B6B]">RECALL% (MIN)</p>
                    <span className='text-xl font-semibold text-[#2D2D2D]'>&lt; 15%</span>
                    <span className="text-xl font-light text-[#2D2D2D]"> /month</span>
                  </div>
                </div>
              </Card>

              {/* Award Formula */}
              <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-[#2D2D2D]">Award Formula</h2>
                  <p className="text-sm text-[#6B6B6B]">How the total award amount is divided among employees.</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="relative flex-grow bg-transparent rounded text-sm h-8">
                      <div
                        className="absolute top-0 left-0 h-8 bg-[#FFF1E6] rounded"
                        style={{width: '50%'}}
                      ></div>
                      <span className="relative z-10 flex items-center px-3 h-8 text-[#C76D38] font-medium">
                        ATTENDANCE
                      </span>
                    </div>
                    <span className="font-semibold text-[#2D2D2D]">50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="relative flex-grow rounded h-8">
                      <div
                        className="absolute top-0 left-0 h-8 bg-[#F3E8FF] rounded"
                        style={{width: '30%'}}
                      ></div>
                      <span className="relative z-10 flex items-center px-3 h-8 text-[#8250C4] font-medium">
                        CLAIMS
                      </span>
                    </div>
                    <span className="font-semibold text-[#2D2D2D]">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="relative flex-grow rounded h-8">
                      <div
                        className="absolute top-0 left-0 h-8 bg-[#E6F4FF] rounded"
                        style={{width: '20%'}}
                      ></div>
                      <span className="relative z-10 flex items-center px-3 h-8 text-[#3B82F6] font-medium">
                        NUMBER OF 5 STAR REVIEWS
                      </span>
                    </div>
                    <span className="font-semibold text-[#2D2D2D]">20%</span>
                  </div>
                </div>


              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }
;

export default Concept2;

