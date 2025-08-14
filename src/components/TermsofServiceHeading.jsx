import React from 'react'

function TermsofServiceHeading() {
  return (
     <div className="text-center pt-10 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terms of
          <span className={`text-transparent bg-clip-text bg-gradient-to-r bg-orange-500 transition-all duration-500`}> Service</span>
        </h1>
        <div className={`w-24 h-1 bg-gradient-to-r bg-orange-500 mx-auto rounded-full mb-6 transition-all duration-500`}></div>
        <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Our Agreement for a Safe and Fair Experience.
        </p>
      </div>
  )
}

export default TermsofServiceHeading