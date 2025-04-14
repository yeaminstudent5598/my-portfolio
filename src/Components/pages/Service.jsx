import React from 'react';

const Service = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card 1 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white">
          <div className="mb-6 text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full inline-block mb-4">
              <i className="fas fa-laptop-code text-3xl"></i> {/* Icon */}
            </div>
            <h2 className="text-2xl font-semibold">Web Development</h2>
          </div>
          <p className="text-gray-600 mb-6">Building responsive and modern websites using React, Node.js, and more. Let's turn your ideas into reality!</p>
          <button className="btn btn-outline btn-accent w-full">Learn More</button>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-500 hover:text-white">
          <div className="mb-6 text-center">
            <div className="bg-green-500 text-white p-4 rounded-full inline-block mb-4">
              <i className="fas fa-mobile-alt text-3xl"></i> {/* Icon */}
            </div>
            <h2 className="text-2xl font-semibold">App Development</h2>
          </div>
          <p className="text-gray-600 mb-6">Develop mobile applications with React Native that work seamlessly on both Android and iOS devices.</p>
          <button className="btn btn-outline btn-accent w-full">Learn More</button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-500 hover:text-white">
          <div className="mb-6 text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full inline-block mb-4">
              <i className="fas fa-users-cog text-3xl"></i> {/* Icon */}
            </div>
            <h2 className="text-2xl font-semibold">Consulting</h2>
          </div> 
          <p className="text-gray-600 mb-6">Providing expert advice on React, Firebase, Node.js, and more to help you achieve success in your projects.</p>
          <button className="btn btn-outline btn-accent w-full">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
