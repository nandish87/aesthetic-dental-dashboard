'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Percent, 
  PhoneCall, 
  TrendingUp, 
  Sparkles, 
  RotateCcw,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface UnitEconomicsCalculatorProps {
  initialDials?: number;
  initialConversionRate?: number;
  initialEvPerCall?: number;
}

export const UnitEconomicsCalculator: React.FC<UnitEconomicsCalculatorProps> = ({
  initialDials = 1050,
  initialConversionRate = 9.52,
  initialEvPerCall = 2717.80,
}) => {
  const [dialsPerMonth, setDialsPerMonth] = useState<number>(initialDials);
  const [conversionRate, setConversionRate] = useState<number>(initialConversionRate);
  const [avgCaseLtv, setAvgCaseLtv] = useState<number>(95000); // within ₹45,000 - ₹1,80,000
  const [caseAcceptanceRate, setCaseAcceptanceRate] = useState<number>(30); // 30% of booked audits accept full treatment

  // Reset to benchmark figures
  const handleReset = () => {
    setDialsPerMonth(1050);
    setConversionRate(9.52);
    setAvgCaseLtv(95000);
    setCaseAcceptanceRate(30);
  };

  // Calculations
  const bookedAudits = Math.round((dialsPerMonth * conversionRate) / 100);
  const dialsPerAudit = (100 / conversionRate).toFixed(1);
  const acceptedCases = Math.round((bookedAudits * caseAcceptanceRate) / 100);
  const totalPipelineRevenue = acceptedCases * avgCaseLtv;
  const calculatedEvPerCall = (totalPipelineRevenue / dialsPerMonth);

  return (
    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-600 text-white shadow-xs">
              <Calculator className="w-4 h-4" />
            </span>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Interactive Unit Economics & Inbound Yield Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Model clinical revenue based on dials, the 9.52% benchmark, and patient LTV (₹45,000 – ₹1,80,000)
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5 text-emerald-700" />
          <span>Reset to Benchmark</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Slider 1: Monthly Inbound Dials */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                Monthly Reception Dials / Inquiries
              </span>
              <span className="text-sm font-black text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                {dialsPerMonth.toLocaleString()} Dials
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={3000}
              step={50}
              value={dialsPerMonth}
              onChange={(e) => setDialsPerMonth(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>200 (Boutique)</span>
              <span>1,050 (Standard Apex)</span>
              <span>3,000 (Multi-Chair Hub)</span>
            </div>
          </div>

          {/* Slider 2: Lead Conversion Probability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-emerald-600" />
                Audit Booking Conversion Probability
              </span>
              <span className="text-sm font-black text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                {conversionRate}% <span className="text-[11px] font-normal text-emerald-700">(1 in {dialsPerAudit})</span>
              </span>
            </div>
            <input
              type="range"
              min={3.0}
              max={15.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>3% (IVR/Call Center)</span>
              <span className="text-emerald-700 font-bold">9.52% (Reception Benchmark)</span>
              <span>15% (VIP Fast-Track)</span>
            </div>
          </div>

          {/* Slider 3: Average Patient Case LTV */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                Blended Patient Case LTV
              </span>
              <span className="text-sm font-black text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                ₹{avgCaseLtv.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={45000}
              max={180000}
              step={5000}
              value={avgCaseLtv}
              onChange={(e) => setAvgCaseLtv(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>₹45,000 (Single Implant)</span>
              <span>₹95,000 (Aligners)</span>
              <span>₹1,80,000 (Full-Mouth Rehab)</span>
            </div>
          </div>

          {/* Slider 4: In-Clinic Case Acceptance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Audit-to-Treatment Acceptance Rate
              </span>
              <span className="text-sm font-black text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                {caseAcceptanceRate}%
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={65}
              step={1}
              value={caseAcceptanceRate}
              onChange={(e) => setCaseAcceptanceRate(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>15% Conservative</span>
              <span>30% Standard</span>
              <span>65% High Acceptance</span>
            </div>
          </div>
        </div>

        {/* Real-Time Outputs Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 rounded-2xl p-5 border border-emerald-200/90 flex flex-col justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
              Live Projected Outputs
            </span>

            {/* Expected Value per Call Highlight */}
            <div className="mt-4 pb-4 border-b border-emerald-100">
              <div className="text-xs font-semibold text-slate-600">
                Simulated Expected Value per Call (EV/Call)
              </div>
              <div className="text-3xl font-black text-emerald-900 tracking-tight mt-1 flex items-baseline gap-1">
                ₹{calculatedEvPerCall.toFixed(2)}
                <span className="text-xs font-semibold text-slate-500">
                  / inbound dial
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Baseline benchmark: <strong>₹2,717.80</strong> at 9.52% conversion.
              </p>
            </div>

            {/* Grid of Results */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
              <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">
                  Booked Audits
                </span>
                <span className="text-xl font-black text-slate-900 mt-0.5 block">
                  {bookedAudits} Audits
                </span>
                <span className="text-[10px] text-emerald-700 font-medium">
                  1 per {dialsPerAudit} dials
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">
                  Closed High-Ticket Cases
                </span>
                <span className="text-xl font-black text-slate-900 mt-0.5 block">
                  {acceptedCases} Patients
                </span>
                <span className="text-[10px] text-emerald-700 font-medium">
                  {caseAcceptanceRate}% of audits
                </span>
              </div>
            </div>

            {/* Projected Gross Monthly Revenue */}
            <div className="mt-4 p-4 bg-emerald-700 rounded-xl text-white shadow-md shadow-emerald-700/20">
              <span className="text-emerald-200 text-[11px] uppercase font-bold block">
                Projected Monthly Clinical Revenue
              </span>
              <div className="text-2xl font-black mt-1">
                ₹{(totalPipelineRevenue / 100000).toFixed(2)} Lakhs
              </div>
              <div className="text-xs text-emerald-100 mt-1 flex items-center justify-between">
                <span>Total: ₹{totalPipelineRevenue.toLocaleString('en-IN')}</span>
                <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded-full">
                  ₹{Math.round(totalPipelineRevenue / 30).toLocaleString('en-IN')}/day
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Calculations powered by live reception desk conversion matrix.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
