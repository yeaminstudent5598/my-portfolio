import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-900 mt-20 py-16 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Blog Card 1 */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-xl relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-extrabold mb-4">Understanding React Hooks: A Complete Guide</h2>
            <p className="text-lg">Dive deep into the concept of hooks in React, and learn how to manage state and side effects in functional components.</p>
            <button className="btn btn-outline btn-light mt-6">Read More</button>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-lg shadow-xl relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-extrabold mb-4">Building Secure Web Applications with Firebase</h2>
            <p className="text-lg">Learn how to use Firebase Authentication, Firestore, and Firebase Hosting to build secure and scalable web apps.</p>
            <button className="btn btn-outline btn-light mt-6">Read More</button>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-600 p-8 rounded-lg shadow-xl relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-extrabold mb-4">Building Scalable Backends with Node.js and Express</h2>
            <p className="text-lg">Explore how to create scalable and maintainable backend systems with Node.js and Express.js, focusing on RESTful APIs and authentication strategies.</p>
            <button className="btn btn-outline btn-light mt-6">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
