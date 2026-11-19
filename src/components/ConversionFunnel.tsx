'use client';

import React from 'react';
import { 
  Filter, 
  ArrowDown, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { FUNNEL_STAGES } from '@/data/dentalData';

export const ConversionFunnel: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-100 text-emerald-800">
              <Filter className="w-4 h-4" />
            </span>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Patient Acquisition Funnel & 9.52% Conversion Architecture
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            10.5 Dials systematically generate 1 Booked Comprehensive Smile / Implant Diagnostic Audit
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-800">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span>9.52% vs. 3.2% Industry Avg</span>
        </div>
      </div>

      {/* Visual Funnel Step Bars */}
      <div className="space-y-3">
        {FUNNEL_STAGES.map((stage, idx) => (
          <div key={idx} className="relative group">
            <div className="flex items-center justify-between text-xs mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800">{stage.stage}</span>
                <span className="text-[11px] text-slate-400">({stage.count} patients)</span>
              </div>
              <div className="flex items-center gap-2">
                {idx > 0 && (
                  <span className="text-[10px] text-slate-400">
                    Drop-off: {stage.dropOffPercent}%
                  </span>
                )}
                <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 text-[11px]">
                  {stage.percentage}%
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-6 w-full bg-slate-100 rounded-lg overflow-hidden flex items-center p-0.5 border border-slate-200/60">
              <div
                className="h-full rounded-md transition-all duration-700 flex items-center px-2 text-[11px] font-bold text-white shadow-2xs"
                style={{
                  width: `${Math.max(stage.percentage, 9)}%`,
                  backgroundColor: stage.accent,
                }}
              >
                {stage.percentage >= 15 && <span>{stage.count}</span>}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      {/* Why Front Desk Accessibility Wins Matrix */}
      <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Why Reception Desk Accessibility Yields 9.52%</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            In India, aesthetic dental patients seek instant clinical reassurance. A dental assistant answering the desk phone eliminates friction, instantly triages aligner vs implant inquiries, and books the chairside doctor consultation on the spot.
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Standard Call Center Bottlenecks</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Generic BPO/IVR call handling averages only 2.8% – 3.4% conversion because non-clinical operators cannot answer technical questions about bone grafts, clear aligner mechanics, or full-mouth rehab stages.
          </p>
        </div>
      </div>
    </div>
  );
};
