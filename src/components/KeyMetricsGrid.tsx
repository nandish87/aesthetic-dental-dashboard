'use client';

import React from 'react';
import { 
  Percent, 
  IndianRupee, 
  BadgePercent, 
  PhoneIncoming, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ArrowUpRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { ReceptionMetrics } from '@/types/dental';

interface KeyMetricsGridProps {
  metrics: ReceptionMetrics;
  onProcedureFilter?: (procedure: string) => void;
}

export const KeyMetricsGrid: React.FC<KeyMetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* CARD 1: Lead Conversion Probability (9.52%) */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-bl-full -z-0 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Percent className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ArrowUpRight className="w-3 h-3 text-emerald-700" />
            1 in 10.5 Dials
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Lead Conversion Probability
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              {metrics.conversionProbability}%
            </span>
            <span className="text-xs font-medium text-emerald-700">
              Audit Booking Rate
            </span>
          </div>

          {/* Visual 10.5 dials indicator */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="text-slate-600 font-medium">Dial-to-Audit Ratio</span>
              <span className="font-bold text-emerald-800">1 Booked Audit : 10.5 Dials</span>
            </div>
            
            {/* Visual Dial Blocks */}
            <div className="flex gap-1 items-center h-2.5 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-sm ${
                    i === 9 ? 'bg-emerald-300' : 'bg-slate-200'
                  }`}
                  title={`Dial #${i + 1}`}
                />
              ))}
              {/* Half dial for 10.5 */}
              <div 
                className="h-full w-2.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-sm relative"
                title="Dial 10.5 (Booked Audit)"
              >
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-700 animate-ping" />
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              Every 10 to 11 dials systematically locks 1 in-clinic diagnostic 3D smile audit.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2: Expected Value per Call (₹2,717.80) */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100/40 to-transparent rounded-bl-full -z-0 pointer-events-none" />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <IndianRupee className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
            Real-Time Yield
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Expected Value per Call
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              ₹2,717.80
            </span>
            <span className="text-xs font-medium text-slate-500">
              / dial
            </span>
          </div>

          {/* Unit economics formula breakdown */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <div className="bg-emerald-50/60 rounded-lg p-2 border border-emerald-100">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-900">
                <span>9.52% Conv.</span>
                <span>×</span>
                <span>₹28,548 Yield</span>
                <span>=</span>
                <span className="font-bold text-emerald-700">₹2,717.80</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              Every ring picked up creates immediate quantifiable pipeline value regardless of immediate close.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3: Patient LTV (₹45,000 – ₹1,80,000) */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-bl-full -z-0 pointer-events-none" />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            High-Ticket Case Mix
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Patient Lifetime Value (LTV)
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              ₹45K – ₹1.80L
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              per case
            </span>
          </div>

          {/* LTV spectrum bar */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between text-slate-600">
                <span>Implants (Single/Multi)</span>
                <span className="font-medium text-slate-900">₹45k – ₹95k</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Clear Aligners</span>
                <span className="font-medium text-slate-900">₹65k – ₹1.40L</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-semibold">
                <span>Full-Mouth Rehab</span>
                <span>₹1.50L – ₹2.80L+</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden flex">
              <div className="bg-emerald-300 w-[25%]" title="Single Implant" />
              <div className="bg-emerald-500 w-[45%]" title="Aligners" />
              <div className="bg-emerald-700 w-[30%]" title="Full-Mouth Rehab" />
            </div>
          </div>
        </div>
      </div>

      {/* CARD 4: Phone Accessibility (Highest in India) */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 rounded-2xl p-5 border-2 border-emerald-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm shadow-emerald-600/30">
            <PhoneIncoming className="w-5 h-5 animate-bounce" />
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-900 bg-emerald-200/80 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Highest in India
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Reception Accessibility
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              {metrics.deskPhonePickupRate}%
            </span>
            <span className="text-xs font-medium text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-md">
              &lt; 5s Pickup
            </span>
          </div>

          {/* Operational setup badge */}
          <div className="mt-3.5 pt-3 border-t border-emerald-100/80">
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-900 font-medium">
              <UserCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Desk Phone + Assistant On-Duty</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
              Front desk coordinator triage immediately transfers to doctor or locks callback within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
