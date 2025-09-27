// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

export default function MultiStepForm() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateOfBirth: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 4));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              We'll guide you through a simple form to collect your basic information. 
              It will only take a few minutes to complete.
            </p>
            <button
              onClick={nextPage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Get Started
            </button>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's your name?</h2>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's your phone number?</h2>
            <div className="max-w-md mx-auto">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's your date of birth?</h2>
            <div className="max-w-md mx-auto">
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Review Your Information</h2>
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg mb-8">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-lg font-semibold">{formData.name || 'Not provided'}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                <p className="text-lg font-semibold">{formData.phone || 'Not provided'}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                <p className="text-lg font-semibold">{formData.dateOfBirth || 'Not provided'}</p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Submit
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          {renderPage()}
        </div>
      </div>

      {/* Navigation Footer */}
      {currentPage > 0 && currentPage < 4 && (
        <div className="p-6 bg-white shadow-lg">
          <div className="max-w-2xl mx-auto flex justify-between items-center">
            <button
              onClick={prevPage}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>

            {/* Progress indicator */}
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    currentPage >= step 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Back button on review page */}
      {currentPage === 4 && (
        <div className="p-6 bg-white shadow-lg">
          <div className="max-w-2xl mx-auto flex justify-center">
            <button
              onClick={prevPage}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Edit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}