import { useState } from 'react';
import supabase from '../Shared/Supabase';

const Login = () => {
 
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
      // Regular expression to check if the email is valid
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    };
  
      
     
      const handleSignIn = async (e) => {
        e.preventDefault();
      
        if (!validateEmail(email)) {
          alert('Please enter a valid email.');
          return;
        }
      
        try {
          setIsLoading(true);
          const { user, error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) {
            alert('Sign in failed. Please check your credentials and try again.');
          } else {
            alert('Sign in successful!');

            // Redirect to dashboard or perform any other action
          }
        } catch (error) {
          console.log('Error:', error.message);
        } finally {
          setIsLoading(false);
        }

 // Simulating an asynchronous process
 setIsLoading(true);
  
 // Simulating a delay before showing the output
 setTimeout(() => {
   setIsLoading(false);
   // Show the output or perform any other action
 }, 2000);


      };
       


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 ">
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='text-center w-full'> 
          {isLoading ? <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 text-center">Loading...</div> : <button
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md w-full mb-4"
              type="submit"
              onClick={handleSignIn}
            >
              Sign in
            </button>}
            
          
         </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600  ">Dont have an account? </span>
          <a className="text-blue-500 hover:text-blue-900" href="/signup">
            Sign up
          </a>
        </div>
        <div className="text-center mt-4">
            <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full">
              Sign up with Google
            </button>
          </div>
      </div>
    </div>
  );
};


export default Login;
