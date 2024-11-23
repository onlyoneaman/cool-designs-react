import Footer from "@/components/Footer.js";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return(
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 flex flex-col items-center justify-between">
      <div className='py-9 flex items-center justify-center grow'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
