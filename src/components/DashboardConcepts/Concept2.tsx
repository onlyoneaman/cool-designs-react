import { Card } from "@/components/ui/card"
import { Home, FileText, User, ArrowUpRight } from 'lucide-react'
import {Link} from "react-router-dom";
import {useGlobalContext} from "@/context/GlobalContext.js";
import {useEffect} from "react";

function Concept2() {
  const { setFullScreen } = useGlobalContext();

  useEffect(() => {
    setFullScreen(true);
    return () => setFullScreen(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#FFFCF5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FFFCF5] p-6 border-r border-[#E8E3D9]">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#2D2D2D]">ShareWillow</span>
          </div>

          {/* Welcome Section */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#2D2D2D]">Welcome Back,<br />Alfredo!</h2>
            <div className="text-sm text-[#6B6B6B]">
              <p>CCM Overhead Doors, Inc.</p>
              <p>Valued employee since Oct, 2024.</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link
              to="#"
              className="flex items-center space-x-2 px-3 py-2 bg-[#F5F1E4] rounded-md text-[#2D2D2D]"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-2 px-3 py-2 hover:bg-[#F5F1E4] rounded-md text-[#6B6B6B] hover:text-[#2D2D2D]"
            >
              <FileText className="w-4 h-4" />
              <span>Plans</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-2 px-3 py-2 hover:bg-[#F5F1E4] rounded-md text-[#6B6B6B] hover:text-[#2D2D2D]"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </nav>

          {/* Total Awards */}
          <div className="space-y-2 pt-6">
            <p className="text-xs uppercase text-[#6B6B6B]">Total Awards Earned</p>
            <p className="text-3xl font-bold text-[#4F7942]">$6,452.75</p>
            <div className="flex items-center space-x-2 text-sm text-[#6B6B6B]">
              <span>Award % of salary</span>
              <span className="font-semibold">5%</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#2D2D2D]">Installer Plan 2025</h1>
            <ArrowUpRight className="w-5 h-5 text-[#2D2D2D]" />
          </div>

          {/* Total Year-to-Date */}
          <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-[#2D2D2D]">Total Year-to-Date Earned</h2>
              <p className="text-3xl font-bold text-[#4F7942]">$1,226</p>
            </div>
          </Card>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Team Goals */}
            <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-[#2D2D2D]">Team Goals</h2>
                <p className="text-sm text-[#6B6B6B]">
                  Minimum amount that needs to be achieved before profit-sharing is activated.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#6B6B6B]">REVENUE (MIN)</p>
                  <p className="text-xl font-semibold text-[#2D2D2D]">
                    $285k <span className="text-sm font-normal text-[#6B6B6B]">/month</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B]">RECALL % (MIN)</p>
                  <p className="text-xl font-semibold text-[#2D2D2D]">
                    {'< 15%'} <span className="text-sm font-normal text-[#6B6B6B]">/month</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Award Formula */}
            <Card className="p-6 bg-white border-[#E8E3D9] shadow-sm space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-[#2D2D2D]">Award Formula</h2>
                <p className="text-sm text-[#6B6B6B]">
                  How the total award amount is divided among employees.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#FFF1E6] text-[#C76D38] rounded text-sm font-medium">ATTENDANCE</span>
                  <span className="font-semibold text-[#2D2D2D]">50%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#F3E8FF] text-[#8250C4] rounded text-sm font-medium">CLAIMS</span>
                  <span className="font-semibold text-[#2D2D2D]">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#E6F4FF] text-[#3B82F6] rounded text-sm font-medium">NUMBER OF 5 STAR REVIEWS</span>
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

export default Concept2
