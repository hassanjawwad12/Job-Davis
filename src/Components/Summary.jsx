import  { useEffect,useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaSpinner } from 'react-icons/fa';

const Summary = () => {
  useEffect(() => {
    ScrollReveal().reveal('.summary-container', {
      duration: 1000,
      distance: '30px',
      delay: 200,
      opacity: 0,
      scale: 0.9,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, []);

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
    <div className="flex items-center justify-center h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="md:text-5xl text-2xl font-bold text-center summary-container">
          JOB DESCRIPTION SUMMARY
        </h1>
        <p className="text-lg font-bold text-gray-500 text-center mt-4 summary-container">
          Please Insert The Long Job Description And Get A Shorter Version
        </p>
        <div className="mb-8 summary-container ml-2">
          <input
            type="text"
            className="w-full p-2 border rounded-full px-4 py-2  border-gray-300 outline-none focus:border-blue-500"
            
            placeholder="Insert Job Description"
          />
        </div>
        <div className="flex justify-center mt-8 summary-container">
          <button 
          type="button"
          className="bg-blue-500 hover:bg-green-700 text-white py-6 px-6 rounded"
          disabled={isLoading}
      onClick={handleSignIn}>
          {isLoading ? (
        <FaSpinner className="animate-spin inline-block mr-2" />
      ) : null}
      {isLoading ? 'Loading...' : 'Summarize'}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end md:justify-end mt-8 md:mt-0 summary-container">
        <img
          src="job-search.png"
          alt="jojo"
          className="max-w-full h-auto"
          data-sr-id="1"
        />
      </div>
    </div>
  );
};

export default Summary;
