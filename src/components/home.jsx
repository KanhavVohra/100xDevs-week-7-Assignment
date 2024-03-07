import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { Footer } from './Footer';

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className="flex-grow text-center">
        <div className="flex flex-col items-center p-4 md:p-8">
          {/* Group 1: Profile, Background Changer, and OTP Login */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/profile" className="w-full md:w-250 bg-white rounded-md border-2 border-black shadow-xl p-4 mb-4 block">
              <h1 className="text-2xl font-bold mb-4">Profile</h1>
              <p>
                This component is responsible for rendering the user profile,
                displaying essential information about the user, including their Name,
                Age, Location, Likes, followers, and Photos
              </p>
            </Link>

            <Link to="/background-changer" className="w-full md:w-250 bg-white rounded-md border-2 border-black shadow-xl p-4 mb-4 block">
              <h1 className="text-2xl font-bold mb-4">Background Changer</h1>
              <p>
                This component dynamically alters the background color of the page.
                It accepts a prop for the desired color and updates the background accordingly.
              </p>
            </Link>

            <Link to="/login" className="w-full md:w-250 bg-white rounded-md border-2 border-black shadow-xl p-4 mb-4 block">
              <h1 className="text-2xl font-bold mb-4">Login</h1>
              <p>
                This component facilitates user authentication, allowing login via either mobile number
                or Email Id. A OTP is generated for logging-in
              </p>
            </Link>
          </div>

          {/* Group 2: Text Generator and Birthday */}
          <div className='grid md:grid-cols-2 gap-4 p-4  md:px-64 '>
            <Link to="/Text-generator" className="w-full md:w-250 bg-white rounded-md border-2 border-black shadow-xl p-4 mb-4 block">
              <h1 className="text-2xl font-bold mb-4">Text Generator</h1>
              <p>
                This component empowers users to generate custom text by specifying the desired number of
                words.
              </p>
            </Link>

            <Link to="/birthday" className="w-full md:w-250 bg-white rounded-md border-2 border-black shadow-xl p-4 mb-4 block">
              <h1 className="text-2xl font-bold mb-4">Birthday</h1>
              <p>
                This component dynamically alters the background color of the page.
                It accepts a prop for the desired color and updates the background accordingly.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
