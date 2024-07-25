import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">[Mumtaz Gold Company]</h2>
            <p className="mt-2 text-gray-400">
              Delivering excellence in every product and service we offer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <a href="/about" className="hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-1">
                <a href="/services" className="hover:text-gray-400">Services</a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="hover:text-gray-400">Contact Us</a>
              </li>
              {/* <li className="mb-1">
                <a href="/blog" className="hover:text-gray-400">Blog</a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">
              Dist:BanasKantha,<br />
              Ta:Vadgam,<br />
              Chaapi Highway,<br />
              Gujrat
            </p>
            <p className="text-gray-400 mt-2">
              Email: sipramuhammad9898@gmail.com<br />
              Phone: +91 9879180349
            </p>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4 mt-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mumtaz Gold Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
