'use client';

import React, { useState } from 'react';
import { 
  PhoneCall, 
  PhoneIncoming, 
  PhoneForwarded, 
  UserCheck, 
  CalendarCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Search,
  Filter,
  Plus
} from 'lucide-react';
import { CallRecord } from '@/types/dental';

interface ReceptionCallCenterProps {
  calls: CallRecord[];
  onAddCall: (newCall: CallRecord) => void;
  selectedProcedure: string;
}

export const ReceptionCallCenter: React.FC<ReceptionCallCenterProps> = ({
  calls,
  onAddCall,
  selectedProcedure
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOutcome, setFilterOutcome] = useState('All');

  const filteredCalls = calls.filter((call) => {
    const matchesSearch =
      call.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.notes.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesProcedure =
      selectedProcedure === 'all' || call.procedure === selectedProcedure;

    const matchesOutcome =
      filterOutcome === 'All' || call.outcome === filterOutcome;

    return matchesSearch && matchesProcedure && matchesOutcome;
  });

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="p-5 border-b border-emerald-100 bg-gradient-to-r from-emerald-50/60 via-white to-emerald-50/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-600 text-white shadow-xs">
                <PhoneIncoming className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Front-Desk Reception Call Management & Doctor Dispatch
              </h2>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Direct Desk Phone Active
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Highest phone accessibility in India: answered instantaneously by dental assistants & clinic coordinators for immediate doctor transfer or callback.
            </p>
          </div>

          {/* Reception Staff On-Duty Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-emerald-200 rounded-xl shadow-2xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left text-xs">
                <div className="font-semibold text-slate-800">Simran Kaur</div>
                <div className="text-[10px] text-emerald-700">Sr. Clinic Coordinator (Desk 1)</div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-emerald-200 rounded-xl shadow-2xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left text-xs">
                <div className="font-semibold text-slate-800">Pooja Roy</div>
                <div className="text-[10px] text-emerald-700">Dental Assistant (Desk 2)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-emerald-100/60">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search patient, locality, or notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-[11px] font-semibold text-slate-500 shrink-0">
              Outcome:
            </span>
            {['All', 'Booked Audit', 'Doctor Callback', 'Follow-up Scheduled'].map((outcome) => (
              <button
                key={outcome}
                onClick={() => setFilterOutcome(outcome)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium whitespace-nowrap transition-colors ${
                  filterOutcome === outcome
                    ? 'bg-emerald-700 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {outcome}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calls Feed Table */}
      <div className="divide-y divide-slate-100 max-h-[460px] overflow-y-auto">
        {filteredCalls.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No call records match the selected filters.
          </div>
        ) : (
          filteredCalls.map((call) => (
            <div
              key={call.id}
              className="p-4 hover:bg-emerald-50/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              {/* Patient Info & Procedure */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">
                    {call.patientName}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {call.phone}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800">
                    {call.procedure}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {call.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {call.callTime} ({call.durationSeconds}s)
                  </span>
                  <span>•</span>
                  <span className="text-emerald-700 font-medium">
                    Handled by {call.handledBy}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-1 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
                  &ldquo;{call.notes}&rdquo;
                </p>
              </div>

              {/* Status Badge & Financial Impact */}
              <div className="flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0">
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Est. Case Value
                  </span>
                  <span className="text-sm font-black text-emerald-800">
                    ₹{call.estimatedValue.toLocaleString('en-IN')}
                  </span>
                </div>

                <div>
                  {call.outcome === 'Booked Audit' && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full shadow-2xs">
                      <CalendarCheck className="w-3.5 h-3.5 text-emerald-700" />
                      Booked Audit (9.52% Win)
                    </span>
                  )}
                  {call.outcome === 'Doctor Callback' && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                      <PhoneForwarded className="w-3.5 h-3.5 text-teal-600" />
                      Doctor Callback Transferred
                    </span>
                  )}
                  {call.outcome === 'Follow-up Scheduled' && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      Follow-up Scheduled
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Summary */}
      <div className="p-3 bg-slate-50/80 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          Showing <strong>{filteredCalls.length}</strong> prioritized inquiries logged via desk phone
        </span>
        <div className="flex items-center gap-1 text-emerald-800 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Front Desk Coordination Transfer Protocol active</span>
        </div>
      </div>
    </div>
  );
};
