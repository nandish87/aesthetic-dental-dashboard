'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Calendar, 
  ArrowRight, 
  PhoneIncoming, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  Smile, 
  FileText,
  BadgePercent,
  TrendingUp,
  Percent,
  IndianRupee,
  Layers,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { PROCEDURES, INITIAL_CALLS, INITIAL_METRICS, DOCTORS_ON_DUTY, FUNNEL_STAGES } from '@/data/dentalData';
import { ReceptionMetrics, CallRecord } from '@/types/dental';

interface DentistDashboardProps {
  metrics: ReceptionMetrics;
  calls: CallRecord[];
  onSimulateCall: () => void;
  activeFilter?: string;
}

export const DentistDashboard: React.FC<DentistDashboardProps> = ({
  metrics,
  calls,
  onSimulateCall,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState<'All' | 'In progress' | 'Clear Aligners' | 'Dental Implants' | 'Full-Mouth Rehab'>('All');
  const [selectedCardForModal, setSelectedCardForModal] = useState<any | null>(null);

  // Dental service lines formatted exactly to match the screenshot's card design
  const dentalProcedures = [
    {
      id: 'aligners',
      title: 'Clear Aligners (Invisible Orthodontics)',
      code: 'Aligners_Digital_Workflow_2026',
      tag: 'In Progress',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Diastema closure, arch expansion, and aesthetic digital smile simulations.',
      progress: 68,
      progressColor: 'bg-amber-500',
      ltvText: '₹65,000 – ₹1,40,000 LTV',
      timeline: '36 Wks Cycle • 48 Active Cases',
      category: 'Clear Aligners',
      yieldPerCall: '₹2,717.80 EV',
      specs: '10.5 Dials per Booked 3D Audit',
      color: '#059669',
      details: 'Patients pre-screened for aesthetic crowding. Reception desk transfers booking for 3D iTero intraoral scan within 48 hours.'
    },
    {
      id: 'implants',
      title: 'Dental Implantology (Single & Multi-Unit)',
      code: 'Implantology_Guided_Surg_2026',
      tag: 'In Progress',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Biological osseointegrated titanium & zirconia implants with guided flapless surgery.',
      progress: 45,
      progressColor: 'bg-emerald-500',
      ltvText: '₹45,000 – ₹95,000 per unit',
      timeline: '16 Wks Cycle • 36 Active Cases',
      category: 'Dental Implants',
      yieldPerCall: '₹2,717.80 EV',
      specs: 'Immediate Loading & CBCT Diagnostics',
      color: '#10b981',
      details: 'Single & multiple missing posterior/anterior teeth. Immediate doctor callback booked by dental assistant.'
    },
    {
      id: 'fmr',
      title: 'Full-Mouth Rehabilitation (All-on-4 / All-on-6)',
      code: 'FMR_Comprehensive_Rehab_2026',
      tag: 'In Progress',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Comprehensive restorative overhaul restoring collapsed vertical dimension & facial aesthetics.',
      progress: 82,
      progressColor: 'bg-blue-600',
      ltvText: '₹1,50,000 – ₹2,80,000 LTV',
      timeline: '24 Wks Cycle • 14 VIP Patients',
      category: 'Full-Mouth Rehab',
      yieldPerCall: '₹2,717.80 EV',
      specs: 'VIP Doctor Transfer Protocol',
      color: '#047857',
      details: 'High-ticket geriatric and restorative dental patients. Direct reception phone triage delivers 9.52% consultation conversion.'
    }
  ];

  const filteredProcedures = dentalProcedures.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterTab === 'All' ||
      (filterTab === 'In progress' && p.tag === 'In Progress') ||
      p.category === filterTab;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* 1. Page Section Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Procedures & Clinical Cases
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Advanced Aesthetic Dentistry & Dental Implantology • Patient Acquisition & Unit Economics
        </p>
      </div>

      {/* 2. Top "Brain Booster" Style Hotline Banner */}
      <div className="bg-[#fffdf2] border border-[#fef08a] rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-[#fde047]">
        <div className="flex items-start sm:items-center gap-3.5">
          {/* Notification Lightbulb / Phone Icon with badge "4" */}
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <PhoneIncoming className="w-5 h-5 text-amber-600 animate-pulse" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              4
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-slate-900">
                Reception Desk Hotline: Phone Accessibility
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-md">
                Highest in India
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Clinic phone sitting directly on reception desk — answered by dental assistant or clinic coordinator who transfers callbacks for doctor. 
              <span className="font-semibold text-emerald-800 ml-1">
                9.52% Lead Conversion (1 booked audit per 10.5 dials) • EV/Call: ₹2,717.80
              </span>
            </p>
          </div>
        </div>

        {/* Action Button matching screenshot: [ Answer now -> ] */}
        <button
          onClick={onSimulateCall}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e60ff] hover:bg-[#1550df] text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 shrink-0 w-fit cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>Answer now</span>
        </button>
      </div>

      {/* 3. Middle "My courses" Style Container */}
      <div className="bg-gradient-to-r from-[#eef9f5] via-[#f7fcf9] to-[#edf7f3] border border-emerald-100/80 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              My Clinical Procedures
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              3 high-ticket service lines active • Patient LTV: ₹45,000 – ₹1,80,000 per case
            </p>
          </div>

          {/* Search Bar matching screenshot */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl text-xs text-slate-800 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Pills matching screenshot: [ All ] [ In progress ] ... */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {(['All', 'In progress', 'Clear Aligners', 'Dental Implants', 'Full-Mouth Rehab'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filterTab === tab
                  ? 'bg-[#1e60ff] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Section Divider matching screenshot: | In progress */}
      <div className="flex items-center gap-2.5 pt-1">
        <div className="w-1.5 h-5 bg-amber-500 rounded-full" />
        <h4 className="text-sm font-bold text-slate-800 tracking-tight">
          In progress
        </h4>
        <span className="text-xs text-slate-400">
          ({filteredProcedures.length} {filteredProcedures.length === 1 ? 'case line' : 'case lines'} active)
        </span>
      </div>

      {/* 5. The Cards Grid matching the screenshot's card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProcedures.map((proc) => (
          <div
            key={proc.id}
            className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top row: Icon + Code/Title + Tag */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <FileText className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {proc.code}
                    </h5>
                    <p className="text-[11px] font-semibold text-emerald-800 mt-0.5">
                      {proc.title}
                    </p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${proc.tagColor}`}>
                  {proc.tag}
                </span>
              </div>

              {/* Subtitle / Description */}
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                {proc.description}
              </p>

              {/* Patient LTV & Yield Highlights */}
              <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Patient LTV</span>
                  <span className="font-extrabold text-slate-900">{proc.ltvText}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-700 uppercase font-bold block">Expected Yield</span>
                  <span className="font-extrabold text-emerald-800">{proc.yieldPerCall}</span>
                </div>
              </div>

              {/* Progress Section matching screenshot: PROGRESS 45% */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-400 tracking-wider">PROGRESS</span>
                  <span className="text-amber-600 font-extrabold">{proc.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${proc.progressColor}`}
                    style={{ width: `${proc.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row matching screenshot: Date on left, circular arrow button on right */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-medium text-slate-500 truncate max-w-[180px]">
                  {proc.timeline}
                </span>
              </div>

              {/* Circular arrow button matching screenshot */}
              <button
                onClick={() => setSelectedCardForModal(proc)}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-xs cursor-pointer"
                title="View Case Audit Workflow"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Quick Snapshot: Unit Economics & 9.52% Benchmark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Lead Conversion</span>
            <div className="text-xl font-black text-slate-900 mt-0.5">9.52%</div>
            <span className="text-[11px] text-emerald-700 font-medium">1 in 10.5 Dials</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Percent className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">EV per Call</span>
            <div className="text-xl font-black text-slate-900 mt-0.5">₹2,717.80</div>
            <span className="text-[11px] text-slate-500 font-medium">Expected Yield / Dial</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <IndianRupee className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Patient LTV</span>
            <div className="text-xl font-black text-slate-900 mt-0.5">₹45K – ₹1.80L</div>
            <span className="text-[11px] text-emerald-700 font-medium">Case Ticket Range</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone Accessibility</span>
            <div className="text-xl font-black text-emerald-700 mt-0.5">#1 in India</div>
            <span className="text-[11px] text-slate-500 font-medium">Desk Phone + Assistant</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <PhoneCall className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Detail Modal if card arrow is clicked */}
      {selectedCardForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-emerald-100 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  Clinical Protocol
                </span>
                <h4 className="font-bold text-base text-slate-900">{selectedCardForModal.title}</h4>
              </div>
              <button
                onClick={() => setSelectedCardForModal(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedCardForModal.details}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Patient LTV</span>
                <span className="font-black text-slate-900 text-sm">{selectedCardForModal.ltvText}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Conversion Ratio</span>
                <span className="font-black text-emerald-800 text-sm">9.52% (1 : 10.5 Dials)</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Chair Cycle</span>
                <span className="font-medium text-slate-700">{selectedCardForModal.timeline}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">EV Yield / Dial</span>
                <span className="font-bold text-emerald-700">{selectedCardForModal.yieldPerCall}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCardForModal(null);
                  onSimulateCall();
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Simulate Call for this Procedure</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
