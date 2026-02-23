import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function ContactInfo() {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-lg hover:bg-sky-50 transition-colors duration-200">
          <div className="text-sky-600 text-2xl mb-2 flex justify-center">
            <FiPhone />
          </div>
          <p className="text-sm text-gray-600 font-medium">
            +91-253-6699936,6454294
          </p>
          <p className="text-xs text-sky-600">Call us anytime</p>
        </div>
        
        <div className="p-3 rounded-lg hover:bg-sky-50 transition-colors duration-200">
          <div className="text-sky-600 text-2xl mb-2 flex justify-center">
            <FiMail />
          </div>
          <p className="text-sm text-gray-600 font-medium">
            amitrudre@gmail.com
          </p>
          <p className="text-xs text-sky-600">Email us 24/7</p>
        </div>
        
        <div className="p-3 rounded-lg hover:bg-sky-50 transition-colors duration-200">
          <div className="text-sky-600 text-2xl mb-2 flex justify-center">
            <FiMapPin />
          </div>
          <p className="text-sm text-gray-600 font-medium">
            4, Sai Shree Industrial Estate, Plot No. 8, S.No. 82/1, MIDC Area, Ambad, Nashik 422 010 (Maharashtra-INDIA)
          </p>
          <p className="text-xs text-sky-600">Visit our office</p>
        </div>
      </div>
    </div>
  );
}