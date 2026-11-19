'use client';

import React, { useState } from 'react';
import { 
  X, 
  PhoneIncoming, 
  User, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  PhoneForwarded, 
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CallRecord } from '@/types/dental';

interface CallSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogCall: (call: CallRecord) => void;
}

const PRESET_PATIENTS = [
  {
    name: 'Ananya Deshmukh',
    phone: '+91 98450 77124',
    location: 'Koramangala 4th Block, Bengaluru',
    procedure: 'Clear Aligners' as const,
    estimatedValue: 120000,
    scenario: '28-year-old tech lead inquiring about invisible aligners for wedding in 6 months. Concerned about clinic visits.'
  },
  {
    name: 'Ramesh Sundaram',
    phone: '+91 99019 44820',
    location: 'Malleshwaram, Bengaluru',
    procedure: 'Dental Implants' as const,
    estimatedValue: 85000,
    scenario: '54-year-old patient seeking immediate implant placement after tooth fracture yesterday. Wants titanium fixture.'
  },
  {
    name: 'Brigadier S. K. Bakshi',
    phone: '+91 98110 33490',
    location: 'Defence Colony, Indiranagar',
    procedure: 'Full-Mouth Rehab' as const,
    estimatedValue: 245000,
    scenario: '67-year-old retired officer with severe attrition and collapsed bite. Inquiring about All-on-4 full-arch restoration.'
  }
];

export const CallSimulatorModal: React.FC<CallSimulatorModalProps> = ({
  isOpen,
  onClose,
  onLogCall,
}) => {
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);
  const [staffMember, setStaffMember] = useState<'Simran Kaur' | 'Pooja Roy'>('Simran Kaur');
  const [outcome, setOutcome] = useState<'Booked Audit' | 'Doctor Callback' | 'Follow-up Scheduled'>('Booked Audit');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const currentPatient = PRESET_PATIENTS[selectedPatientIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecord: CallRecord = {
      id: `CALL-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: currentPatient.name,
      phone: currentPatient.phone,
      location: currentPatient.location,
      procedure: currentPatient.procedure,
      callTime: 'Just Now',
      durationSeconds: Math.floor(120 + Math.random() * 120),
      handledBy: staffMember === 'Simran Kaur' ? 'Simran Kaur (Sr. Clinic Coordinator)' : 'Pooja Roy (Dental Assistant)',
      role: staffMember === 'Simran Kaur' ? 'Clinic Coordinator' : 'Dental Assistant',
      outcome: outcome,
      estimatedValue: currentPatient.estimatedValue,
      notes: customNote.trim() || currentPatient.scenario
    };

    if (outcome === 'Booked Audit') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#a7f3d0']
      });
    }

    onLogCall(newRecord);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-emerald-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xs text-white">
              <PhoneIncoming className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="font-bold text-base">Inbound Reception Desk Simulator</h3>
              <p className="text-xs text-emerald-100">
                Front desk phone ringing • Highest accessibility protocol active
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Preset Patient Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              1. Select Inbound Patient Inquiry Scenario
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PRESET_PATIENTS.map((p, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setSelectedPatientIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all text-xs ${
                    selectedPatientIndex === idx
                      ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20 font-semibold'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold text-emerald-800">
                    {p.procedure}
                  </div>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{p.name}</div>
                  <div className="text-[11px] text-emerald-700 font-medium">
                    ₹{(p.estimatedValue / 1000).toFixed(0)}k LTV
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Scenario Preview */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600">
              <div className="font-semibold text-slate-900 flex items-center justify-between">
                <span>{currentPatient.name} ({currentPatient.location})</span>
                <span className="text-emerald-800 font-bold">Est. ₹{currentPatient.estimatedValue.toLocaleString('en-IN')}</span>
              </div>
              <p className="mt-1 italic text-slate-500 text-[11px]">&ldquo;{currentPatient.scenario}&rdquo;</p>
            </div>
          </div>

          {/* Frontline Staff Answering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                2. Answered By (Front Desk)
              </label>
              <select
                value={staffMember}
                onChange={(e) => setStaffMember(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Simran Kaur">Simran Kaur (Sr. Clinic Coordinator)</option>
                <option value="Pooja Roy">Pooja Roy (Dental Assistant on Duty)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                3. Reception Desk Outcome
              </label>
              <select
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold text-emerald-900"
              >
                <option value="Booked Audit">Booked 3D In-Clinic Audit (9.52% Benchmark)</option>
                <option value="Doctor Callback">Doctor Callback Scheduled</option>
                <option value="Follow-up Scheduled">Follow-up / Information Sent</option>
              </select>
            </div>
          </div>

          {/* Custom Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              4. Coordinator / Assistant Call Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Inquired about weekend appointment, 3D intraoral scan booked for Saturday."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm shadow-emerald-700/20 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Log Dial & Update Matrix</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
