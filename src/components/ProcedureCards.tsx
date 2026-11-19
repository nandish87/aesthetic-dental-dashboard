'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  Award, 
  ChevronRight, 
  TrendingUp, 
  Check, 
  ShieldAlert, 
  Layers, 
  Clock, 
  IndianRupee 
} from 'lucide-react';
import { PROCEDURES } from '@/data/dentalData';
import { ProcedureMetric } from '@/types/dental';

interface ProcedureCardsProps {
  selectedProcedure: string;
  onSelectProcedure: (procedureId: string) => void;
}

export const ProcedureCards: React.FC<ProcedureCardsProps> = ({
  selectedProcedure,
  onSelectProcedure,
}) => {
  const [activeModalProcedure, setActiveModalProcedure] = useState<ProcedureMetric | null>(null);

  return (
    <div className="space-y-4">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-100 text-emerald-800">
              <Layers className="w-4 h-4" />
            </span>
            High-Value Clinical Service Lines
          </h2>
          <p className="text-xs text-slate-500">
            Advanced Aesthetic Dentistry & Dental Implantology procedures driving the ₹45,000 – ₹1,80,000+ LTV
          </p>
        </div>

        {/* Quick Procedure Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-emerald-100 rounded-xl shadow-2xs">
          <button
            onClick={() => onSelectProcedure('all')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              selectedProcedure === 'all'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            All Services
          </button>
          {PROCEDURES.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectProcedure(p.shortName)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedProcedure === p.shortName
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              {p.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Main Procedure Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROCEDURES.map((procedure) => {
          const isSelected =
            selectedProcedure === 'all' || selectedProcedure === procedure.shortName;

          return (
            <div
              key={procedure.id}
              onClick={() => onSelectProcedure(procedure.shortName)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all relative overflow-hidden bg-white ${
                isSelected
                  ? 'border-emerald-300 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-slate-200/80 opacity-60 hover:opacity-95'
              }`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {procedure.conversionShare}% Inquiries
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {procedure.caseCycleWeeks} wks cycle
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {procedure.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {procedure.description}
              </p>

              {/* LTV & Financials Box */}
              <div className="mt-4 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-600">Patient Case LTV</span>
                  <span className="text-xs font-extrabold text-emerald-900">
                    ₹{(procedure.avgLtvMin / 1000).toFixed(0)}K – ₹{(procedure.avgLtvMax / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                  <span>Median Revenue Yield</span>
                  <span className="font-semibold text-slate-800">
                    ₹{procedure.avgLtvMean.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    Active Cases
                  </span>
                  <span className="font-bold text-slate-800 text-sm">
                    {procedure.activeCases} Patients
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    Monthly Run-rate
                  </span>
                  <span className="font-bold text-emerald-800 text-sm">
                    ₹{(procedure.monthlyRevenue / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
              </div>

              {/* Footnote Target Audience */}
              <div className="mt-3 text-[11px] text-slate-500 bg-slate-50 rounded-lg p-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">{procedure.targetAudience}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
