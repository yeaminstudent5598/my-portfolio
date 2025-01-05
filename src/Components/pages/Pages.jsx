import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Pages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Page Card 1 */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">About Us</h2>
            <p className="text-lg">Learn more about who we are, our mission, and the team behind the projects.</p>
            <Link to="/about" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>

        {/* Page Card 2 */}
        <div className="bg-gradient-to-r from-teal-400 to-green-500 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Portfolio</h2>
            <p className="text-lg">Explore our past projects and see what we’ve created for clients worldwide.</p>
            <Link to="/portfolio" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>

        {/* Page Card 3 */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-600 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Contact</h2>
            <p className="text-lg">Have questions? Get in touch with us for collaborations or inquiries.</p>
            <Link to="/contact" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>

        {/* Page Card 4 */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Blog</h2>
            <p className="text-lg">Stay updated with our latest articles, news, and trends in the world of tech.</p>
            <Link to="/blog" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>

        {/* Page Card 5 */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Services</h2>
            <p className="text-lg">Discover the range of services we offer, including web development, app development, and more.</p>
            <Link to="/service" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>

        {/* Page Card 6 */}
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Testimonials</h2>
            <p className="text-lg">Read what our clients and partners have to say about working with us.</p>
            <Link to="/testimonials" className="btn btn-light mt-6">Visit Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
