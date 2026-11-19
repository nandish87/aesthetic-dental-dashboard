'use client';

import React from 'react';
import { Stethoscope, UserCheck, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { DOCTORS_ON_DUTY } from '@/data/dentalData';

export const DoctorRoster: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-100 text-emerald-800">
              <Stethoscope className="w-4 h-4" />
            </span>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Clinical Specialists & Chairside Callback Line
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Reception coordinators transfer high-ticket clinical queries directly to specialists on duty
          </p>
        </div>

        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          3 Doctors On-Call
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {DOCTORS_ON_DUTY.map((doc, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-xs">{doc.name}</h4>
                <p className="text-[11px] text-emerald-800 font-medium mt-0.5">{doc.specialty}</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1" />
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
              <span className="truncate">{doc.room}</span>
              <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                {doc.todayBookings} Audits Today
              </span>
            </div>

            <div className="mt-2 text-[10px] text-slate-600 bg-white p-1.5 rounded-lg border border-slate-200/60 flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{doc.availability}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
