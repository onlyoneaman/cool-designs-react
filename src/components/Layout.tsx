import Footer from "@/components/Footer.js";
import {Link, useLocation} from "react-router-dom";
import {Button} from "@/components/ui/button.js";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Header */}
      <header className="w-full mx-auto py-6 px-4">
        <div className="flex justify-end">
          {path.length>0 && (
            <Button
              variant='link'
            >
              <Link to='/'>Back</Link>
            </Button>
          )}
          <Link
            to='https://x.com/onlyoneaman'
            target='_blank'
          >
            <Button
              className='text-gray-500 hover:text-gray-700'
              variant='link'
            >
              x.com
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full grow flex flex-col items-center justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
