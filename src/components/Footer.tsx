import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.js";

const Footer = () => {

  return (
    <footer className='px-6 py-4'>
      <div>
        <p className='flex flex-row gap-3'>
          <Button
            variant='link'
          >
            <Link to='/'>Home</Link>
          </Button>
          <Button
            variant='link'
          >
            <Link
              to='https://amankumar.ai'
              rel='noreferrer noopener'
              target='_blank'
            >
              amankumar.ai
            </Link>
          </Button>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
