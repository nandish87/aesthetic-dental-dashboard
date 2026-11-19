'use client';

import React from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Download,
  PlusCircle,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  onSimulateCall: () => void;
  onOpenCalculator: () => void;
  totalCalls: number;
  auditsBooked: number;
}

export const Header: React.FC<HeaderProps> = ({
  onSimulateCall,
  onOpenCalculator,
  totalCalls,
  auditsBooked
}) => {
  return (
    <header className="bg-white border-b border-emerald-100/80 sticky top-0 z-40 shadow-xs backdrop-blur-md bg-white/95">
      {/* Top micro-banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          <span>India Benchmark High-Performance Clinic Matrix</span>
          <span className="text-emerald-200">|</span>
          <span className="text-emerald-100 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Direct Reception Accessibility: Highest in India
          </span>
        </div>
        <div className="flex items-center gap-4 text-emerald-100 text-[11px]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> Reception Desk Active (08:30 AM – 08:30 PM IST)
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Apex Clinic Network (India)
          </span>
        </div>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & Clinical Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 ring-4 ring-emerald-50">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  AuraSmile <span className="text-emerald-700 font-extrabold">Institute</span>
                </h1>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Aesthetic & Implantology
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                <span>Clear Aligners</span>
                <span className="text-emerald-300">•</span>
                <span>Dental Implants</span>
                <span className="text-emerald-300">•</span>
                <span>Full-Mouth Rehabilitation</span>
              </p>
            </div>
          </div>

          {/* Core Highlights Pill Bar */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg px-3 py-1.5 text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                Lead Conversion
              </div>
              <div className="text-sm font-extrabold text-emerald-900 flex items-center gap-1">
                9.52% <span className="text-[11px] font-normal text-emerald-700">(1 in 10.5 dials)</span>
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg px-3 py-1.5 text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                EV / Call
              </div>
              <div className="text-sm font-extrabold text-emerald-900">
                ₹2,717.80
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg px-3 py-1.5 text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                Patient LTV
              </div>
              <div className="text-sm font-extrabold text-emerald-900">
                ₹45K – ₹1.80L
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onSimulateCall}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors border border-emerald-300 shadow-2xs"
              title="Simulate an incoming patient dial answered at reception desk"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>Simulate Inbound Call</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm shadow-emerald-700/20"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>ROI Calculator</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
