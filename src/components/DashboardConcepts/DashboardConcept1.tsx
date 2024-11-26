import React, {useEffect, useState} from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import {
  Home,
  CreditCard,
  Users,
  Building2,
  Users2,
  FileText,
  Key,
  Webhook,
  HelpCircle,
  MessagesSquare,
  ChevronRight,
  Search,
  Menu,
  X
} from 'lucide-react';
import {useGlobalContext} from "@/context/GlobalContext.js";

const DashboardConcept1 = () => {
  const { setFullScreen } = useGlobalContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const metrics = [
    {
      title: "Charges",
      value: "2,156",
      change: "+15.56%",
      trend: "up",
      subtext: "count"
    },
    {
      title: "Revenue",
      value: "$15,568",
      change: "-2.3%",
      trend: "down",
      highlight: "Oct 12, 2024: $5,674"
    },
    {
      title: "Success Rate",
      value: "98.7",
      change: "+0.5%",
      trend: "up",
      subtext: "%"
    },
    {
      title: "New Customers",
      value: "324",
      change: "+4.92%",
      trend: "up",
      subtext: "count"
    }
  ];

  const transactions = [
    {
      initial: "Z",
      name: "Zoe Blackwell",
      email: "zoe.b87@fastmail.com",
      date: "4 Oct, 1:05 PM",
      amount: "$987.00",
      status: "Paid",
      color: "bg-blue-500"
    },
    {
      initial: "R",
      name: "Rajesh Patel",
      email: "rpatel_1990@outlook.com",
      date: "3 Oct, 12:50 PM",
      amount: "$524.00",
      status: "Reversed",
      color: "bg-orange-500"
    }
  ];

  useEffect(() => {
    setFullScreen(true);
    return () => {
      setFullScreen(false);
    };
  }, []);

  const Sidebar = ({ className = "" }) => (
    <div className={`${className} bg-white p-6 space-y-8`}>
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-primary rounded-lg"></div>
        <span className="font-semibold text-xl">Dashboard</span>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Main</div>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Building2 className="mr-2 h-4 w-4" />
              Company
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users2 className="mr-2 h-4 w-4" />
              Team
            </Button>
          </nav>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Actions</div>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              API Docs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Key className="mr-2 h-4 w-4" />
              API Keys
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Webhook className="mr-2 h-4 w-4" />
              Webhooks
            </Button>
          </nav>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Other</div>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Support
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessagesSquare className="mr-2 h-4 w-4" />
              Community
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="border-b bg-white sticky top-0 z-10">
          <div className="p-4 md:p-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl md:text-2xl font-semibold">Home</h1>
              <Badge variant="secondary" className="hidden sm:flex gap-1">
                Last 7 days <ChevronRight className="h-3 w-3" />
              </Badge>
            </div>
            <Button>Export</Button>
          </div>
        </div>

        <div className="p-4 md:p-8 space-y-6">
          {/* Verification Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <Badge variant="warning" className="bg-yellow-500">
                Get verified
              </Badge>
              <span className="text-sm text-yellow-800">
                You're in preview mode. Get verified in minutes!
              </span>
            </div>
            <Button variant="ghost" className="text-yellow-800 hover:text-yellow-900">
              Get verified <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-sm text-gray-500">{metric.title}</div>
                  <Badge variant={metric.trend === 'up' ? "success" : "destructive"} className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-semibold">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.subtext}</div>
                </div>
                {metric.highlight && (
                  <div className="mt-2 text-sm text-gray-500">{metric.highlight}</div>
                )}
              </Card>
            ))}
          </div>

          {/* Transactions Table */}
          <Card className="overflow-hidden">
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">New to old</Button>
                  <Button variant="outline" size="sm">Status</Button>
                </div>
                <div className="w-full sm:w-auto relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search payments and customers"
                    className="pl-8 w-full sm:w-80"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                  <tr className="text-sm text-gray-500">
                    <th className="text-left font-medium pb-4">Customer</th>
                    <th className="hidden md:table-cell text-left font-medium pb-4">Email</th>
                    <th className="hidden sm:table-cell text-left font-medium pb-4">Date</th>
                    <th className="text-left font-medium pb-4">Amount</th>
                    <th className="text-left font-medium pb-4">Status</th>
                  </tr>
                  </thead>
                  <tbody className="divide-y">
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="text-sm">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${transaction.color} flex items-center justify-center text-white flex-shrink-0`}>
                            {transaction.initial}
                          </div>
                          <span className="truncate">{transaction.name}</span>
                        </div>
                      </td>
                      <td className="hidden md:table-cell py-4 text-gray-500">
                        {transaction.email}
                      </td>
                      <td className="hidden sm:table-cell py-4 text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="py-4">{transaction.amount}</td>
                      <td className="py-4">
                        <Badge variant={
                          transaction.status === 'Paid' ? 'success' :
                            transaction.status === 'Reversed' ? 'warning' :
                              'secondary'
                        }>
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardConcept1;
