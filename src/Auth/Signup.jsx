

const Signup = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded shadow border-solid border-2 hover:border-indigo-200">
          <h2 className="text-2xl font-bold mb-4">Sign up</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <a className="text-blue-500 hover:text-blue-700" href="/login">
              Login
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
  
export default Signup