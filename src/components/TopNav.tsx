'use client';

import React from 'react';
import { Menu, Flame, Bell, PhoneCall } from 'lucide-react';

interface TopNavProps {
  onToggleSidebar: () => void;
  onSimulateCall: () => void;
  conversionProbability?: number;
  evPerCall?: number;
}

export const TopNav: React.FC<TopNavProps> = ({
  onToggleSidebar,
  onSimulateCall,
  conversionProbability = 9.52,
  evPerCall = 2717.80,
}) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left section: Hamburger & Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
          Good afternoon, <span className="text-slate-900">Dr. Jhon!</span>
        </h1>
      </div>

      {/* Right section: High-ticket dental badges + streak + avatar */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Metric pills for quick executive reference */}
        <div className="hidden md:flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            🎯 9.52% (1:10.5 Dials)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            💎 EV: ₹2,717.80
          </span>
        </div>

        {/* Inbound Simulator Quick Trigger */}
        <button
          onClick={onSimulateCall}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-full transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
          <span>Reception Desk Simulator</span>
        </button>

        {/* Flame Streak Icon matching screenshot */}
        <div 
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-xs"
          title="Reception Answer Streak: 0 missed calls today"
        >
          <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
          <span>0</span>
        </div>

        {/* User avatar circle with 'J' */}
        <div className="w-9 h-9 rounded-full bg-[#00897b] text-white font-bold flex items-center justify-center text-sm shadow-xs border-2 border-white ring-2 ring-emerald-100">
          J
        </div>
      </div>
    </header>
  );
};
