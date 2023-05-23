
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='text-center image-bg pt-64 w-screen h-screen'>
            <p className=' text-white font-sans text-xl'>The page you are looking for might have been removed <br /> or its name changed or is temporarily unavailable.</p>
           <Link to='/'><button className='btn btn-primary mt-5 rounded-full' >Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;