import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    // Simulating an asynchronous process
    setIsLoading(true);

    // Simulating a delay before showing the output
    setTimeout(() => {
      setIsLoading(false);
      // Show the output or perform any other action
    }, 2000);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="max-w-md w-full p-6 bg-white rounded shadow border-solid border-2 hover:border-indigo-200 ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className='text-center w-full'> 
          <button
      type="button"
      className="bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none w-full"
      disabled={isLoading}
      onClick={handleSignIn}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin inline-block mr-2" />
      ) : null}
      {isLoading ? 'Loading...' : 'Sign In'}
    </button>
    </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600  ">Dont have an account? </span>
          <a className="text-blue-500 hover:text-blue-700" href="/signup">
            Sign up
          </a>
        </div>
        <div className="text-center mt-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
              Sign up with Google
            </button>
          </div>
      </div>
    </div>
  );
};


export default Login;
