import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Match = () => {
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

  return (
    <div className="flex items-center justify-center h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="md:text-5xl text-2xl font-bold text-center summary-container">
        JOB APPLICATION MATCH
        </h1>
        <p className="text-lg font-bold text-gray-500 text-center mt-4 summary-container rounded-md">
          Please Attach your Resume and Get a Matched Job
        </p>
        <div className="mb-8 summary-container mt-2 ml-2">
          <input
            type="text"
            
            className="w-full p-2 border rounded-full px-4 py-2  border-gray-300 outline-none focus:border-blue-500"
            placeholder="Attach Resume"
          />
        </div>
        <p className="text-lg font-bold text-gray-500 text-center mt-4 summary-container">
          Please Insert The Job Description
        </p>
        <div className="mb-8 summary-container mt-2 ml-2">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Job Description"
          />
        </div>
        <div className="flex justify-center mt-8 summary-container">
          <button className="bg-blue-500 hover:bg-green-700 text-white py-6 px-6 rounded">
            Calculte Match
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end md:justify-end mt-8 md:mt-0 summary-container">
        <img
          src="interview.png"
          alt="interview"
          className="max-w-full h-auto"
          data-sr-id="1"
        />
      </div>
    </div>
  );
};

export default Match;
