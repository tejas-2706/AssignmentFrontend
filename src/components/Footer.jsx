import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-lg font-bold mb-4">UpRaise</h4>
            <ul className="space-y-2">
              <li>OKR</li>
              <li>Continuous Feedback</li>
              <li>Stock Integration</li>
              <li>Performance Reviews</li>
              <li>Company Directory</li>
              <li>Pricing</li>
              <li>Docs</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-4">Employee Success</h4>
            <ul className="space-y-2">
              <li>Objectives & Key Results (OKRs)</li>
              <li>OKR Examples</li>
              <li>eBooks & Templates</li>
              <li>Blog</li>
              <li>Book a Demo</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-4">Employee Garrison</h4>
            <ul className="space-y-2">
              <li>Employee Records</li>
              <li>Leave Management</li>
              <li>Calendar</li>
              <li>Company Directory</li>
              <li>Pricing</li>
              <li>Docs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect with us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 text-2xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-400 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-600 text-2xl"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">Copyright &copy; 2008 UpRaise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
