import React from 'react';
import './style.css';
// import React from 'react';

// This component is now fully self-contained in a single file, so all
// image imports have been replaced with either inline SVG code for icons
// or placeholder image URLs to ensure it renders correctly.

// Component for the sidebar navigation
const Sidebar = () => (
  <aside className="w-[250px] bg-[#2c3e50] text-[#ecf0f1] p-5 flex flex-col justify-between rounded-lg font-sans">
    <div className="flex justify-center mb-6">
      <img src="https://placehold.co/100x100/ecf0f1/2c3e50?text=LOGO" alt="Logo" width={100} height={100} className="w-full max-w-xs rounded-lg" />
    </div>
    <nav className="flex-1 space-y-2">
      <a href="#" className="block p-3 rounded-lg text-white font-medium bg-[#3498db] transition-colors duration-300 hover:bg-[#2980b9] text-center">
        Home
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Stages & Checklist
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Upload Docs
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Preferred Vendors
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Tech Stack
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Targets
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Zee Sales Targets
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        MAI Settings
      </a>
      <a href="#" className="block p-3 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-[#34495e] text-center">
        Pending Questions
      </a>
    </nav>
    <div className="mt-8">
      <a href="#" className="block p-3 rounded-lg text-white font-medium bg-red-600 text-center transition-colors duration-300 hover:bg-red-700">
        Logout
      </a>
    </div>
  </aside>
);

// Component for the header/topbar
const Header = () => (
  <header className="flex justify-end items-center px-5 py-4 bg-white border-b border-gray-200">
    <div className="flex items-center space-x-4">
      <button className="icon-btn p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-right"><path d="M8 3L4 7L8 11"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
      </button>
      <button className="avatar-btn p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Account">
        <img src="https://placehold.co/32x32/gray/white?text=User" alt="User" width={32} height={32} className="rounded-full" />
      </button>
    </div>
  </header>
);

// Component for the Account Progress Card
const AccountProgressCard = ({ progress }) => {
  const radius = 66;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Account Progress</h3>
      <div className="relative w-[148px] h-[148px]">
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 148 148">
          <circle className="stroke-gray-200" cx="74" cy="74" r={radius} strokeWidth="8" fill="transparent" />
          <circle
            className="stroke-green-500 transition-all duration-700 ease-in-out"
            cx="74"
            cy="74"
            r={radius}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-800">
          {progress}%
        </div>
      </div>
      <div className="w-full space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Steps Completed</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-gray-600">Profile Setup</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"/><path d="M11 12.08l2 2 4-4"/></svg>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-gray-600">Initial Training</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"/><path d="M11 12.08l2 2 4-4"/></svg>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-gray-600">Legal Documents</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"/><path d="M11 12.08l2 2 4-4"/></svg>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Steps Remaining</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <p className="text-gray-600">Financial Integration</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-gray-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"/><path d="M11 12.08l2 2 4-4"/></svg>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <p className="text-gray-600">Final Review</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-gray-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"/><path d="M11 12.08l2 2 4-4"/></svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Component for the Total Franchisees card
const FranchiseeCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-5">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Total Franchisees Onboard</h3>
      <div className="flex items-end justify-between mt-2">
        <div className="flex items-end">
          <span className="text-4xl font-bold text-gray-900">14</span>
          <div className="flex items-center ml-4 px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            7.4%
          </div>
        </div>
        <div className="flex -space-x-2">
          <img src="https://placehold.co/80x40/gray/white?text=Avatars" alt="avatar group" width={80} height={40} className="w-20 rounded-full" />
        </div>
      </div>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
      <div className="flex h-full">
        <span className="w-1/3 bg-blue-500 rounded-l-full"></span>
        <span className="w-1/2 bg-yellow-500"></span>
        <span className="w-1/6 bg-green-500 rounded-r-full"></span>
      </div>
    </div>
    <ul className="space-y-2 text-sm text-gray-600">
      <li className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span>Stage 1 (Initial Inquiry)</span> <span className="font-bold text-gray-800">02</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span>Stage 2 (Document Submission)</span> <span className="font-bold text-gray-800">07</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>Stage 3 (Training)</span> <span className="font-bold text-gray-800">05</span>
      </li>
    </ul>
    <hr className="my-5" />
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Financial Wellbeing</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-gray-900">20</span>
          <span className="text-gray-500">Total Franchisees</span>
        </div>
        <div className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          2.1%
        </div>
      </div>
    </div>
    <div className="flex justify-between text-center">
      <div>
        <p className="text-gray-500 text-sm">Target</p>
        <h4 className="text-lg font-bold text-gray-900">$500,000</h4>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Current</p>
        <h4 className="text-lg font-bold text-gray-900">$450,000</h4>
      </div>
    </div>
  </div>
);

// Component for the Key Insights & Prospect Leads card
const KeyInsightsCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-5 col-span-2">
    <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
      <div className="bg-gray-50 p-4 rounded-lg flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Insights & Feedback</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">10%</div>
            <div className="text-sm text-gray-500">Sales Growth</div>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round w-12 h-12 rounded-full text-blue-500"><path d="M2 18v3c0 .6.4 1 1 1h4v-5H2z"/><path d="M7 21v-5"/><path d="M12.5 17.5l-2.4-2.4a3 3 0 0 1 0-4.2L14 3.5a2.1 2.1 0 0 1 3 3l-2.5 2.5"/><path d="m15 5 2 2"/><path d="M20 13v3h-3"/></svg>
            <span className="mt-2 text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Top Performer</span>
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="space-y-2">
          <div className="font-semibold text-gray-700">Feedback</div>
          <div className="flex items-start space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
            <span className="text-gray-600">Franchisees are requesting more detailed training materials.</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Prospect Leads</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/gray/white?text=WW" alt="Wade Warren" width={40} height={40} className="rounded-full" />
              <span className="font-medium text-gray-800">Wade Warren</span>
            </div>
            <span className="text-sm text-gray-500">Stage: <span className="font-semibold text-blue-600">Initial Inquiry</span></span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/gray/white?text=AW" alt="Ava Wright" width={40} height={40} className="rounded-full" />
              <span className="font-medium text-gray-800">Ava Wright</span>
            </div>
            <span className="text-sm text-gray-500">Stage: <span className="font-semibold text-blue-600">Initial Inquiry</span></span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/gray/white?text=CF" alt="Cody Fisher" width={40} height={40} className="rounded-full" />
              <span className="font-medium text-gray-800">Cody Fisher</span>
            </div>
            <span className="text-sm text-gray-500">Stage: <span className="font-semibold text-blue-600">Initial Inquiry</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Dashboard component that uses the smaller components
const Dashboard = () => (
  <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AccountProgressCard progress={85} />
        <FranchiseeCard />
        <div className="col-span-1 md:col-span-2">
          <KeyInsightsCard />
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;
