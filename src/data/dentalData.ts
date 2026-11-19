import { ProcedureMetric, CallRecord, ReceptionMetrics, FunnelStageData } from '@/types/dental';

export const INITIAL_METRICS: ReceptionMetrics = {
  deskPhonePickupRate: 98.6,
  avgPickupTimeSeconds: 4.2,
  dialsToAuditRatio: 10.5,
  conversionProbability: 9.52,
  expectedValuePerCall: 2717.80,
  totalCallsLogged: 1050,
  auditsBooked: 100,
  pipelineGenerated: 2853690,
  clinicPhoneLocation: 'Reception Desk Station 1 (Direct Front-Desk Landline + Mobile)',
};

export const PROCEDURES: ProcedureMetric[] = [
  {
    id: 'clear-aligners',
    name: 'Clear Aligners (Invisible Orthodontics)',
    shortName: 'Clear Aligners',
    avgLtvMin: 65000,
    avgLtvMax: 140000,
    avgLtvMean: 95000,
    caseCycleWeeks: 36,
    conversionShare: 46,
    activeCases: 48,
    monthlyRevenue: 1425000,
    color: '#059669', // Emerald
    description: 'Custom thermoplastic aesthetic aligners for diastema closure, crowding, and arch expansion.',
    targetAudience: 'Working professionals (22-42 yrs), wedding candidates, aesthetic-driven youth.'
  },
  {
    id: 'implants',
    name: 'Dental Implantology (Single, Multiple & Immediate Load)',
    shortName: 'Dental Implants',
    avgLtvMin: 45000,
    avgLtvMax: 95000,
    avgLtvMean: 68000,
    caseCycleWeeks: 16,
    conversionShare: 34,
    activeCases: 36,
    monthlyRevenue: 1224000,
    color: '#10b981', // Mint emerald
    description: 'Titanium & Zirconia biological osseointegrated implants with custom abutments and zirconia crowns.',
    targetAudience: 'Age 35-70 yrs, missing molar/anterior teeth, failure of older bridge work.'
  },
  {
    id: 'fmr',
    name: 'Full-Mouth Rehabilitation (All-on-4 / All-on-6 / Smile Rehab)',
    shortName: 'Full-Mouth Rehab',
    avgLtvMin: 150000,
    avgLtvMax: 280000,
    avgLtvMean: 215000,
    caseCycleWeeks: 24,
    conversionShare: 20,
    activeCases: 14,
    monthlyRevenue: 1505000,
    color: '#047857', // Forest deep green
    description: 'Comprehensive restorative overhaul restoring collapsed vertical dimension, mastication & facial aesthetics.',
    targetAudience: 'Severe dentition wear, generalized periodontitis, geriatric VIP dental patients.'
  }
];

export const INITIAL_CALLS: CallRecord[] = [
  {
    id: 'CALL-1092',
    patientName: 'Sneha Kulkarni',
    phone: '+91 98450 12841',
    location: 'Indiranagar, Bengaluru',
    procedure: 'Clear Aligners',
    callTime: '10:42 AM Today',
    durationSeconds: 185,
    handledBy: 'Simran Kaur (Sr. Clinic Coordinator)',
    role: 'Clinic Coordinator',
    outcome: 'Booked Audit',
    estimatedValue: 110000,
    notes: 'Inquired about mild crowding before wedding in Nov. Booked 3D iTero intraoral scan & audit for Saturday 11:30 AM.'
  },
  {
    id: 'CALL-1091',
    patientName: 'Rajeshwar Hegde',
    phone: '+91 94481 99230',
    location: 'Jayanagar, Bengaluru',
    procedure: 'Dental Implants',
    callTime: '10:15 AM Today',
    durationSeconds: 240,
    handledBy: 'Pooja Roy (Dental Assistant)',
    role: 'Dental Assistant',
    outcome: 'Doctor Callback',
    estimatedValue: 75000,
    notes: 'Failed root canal lower right molar. Transferred immediate doctor callback with Dr. Ananya for CBCT review at 2 PM.'
  },
  {
    id: 'CALL-1090',
    patientName: 'Col. K. N. Rao (Retd.)',
    phone: '+91 98202 44910',
    location: 'Koramangala, Bengaluru',
    procedure: 'Full-Mouth Rehab',
    callTime: '09:50 AM Today',
    durationSeconds: 310,
    handledBy: 'Simran Kaur (Sr. Clinic Coordinator)',
    role: 'Clinic Coordinator',
    outcome: 'Booked Audit',
    estimatedValue: 240000,
    notes: 'Severe attrition, difficulty chewing. Son called from US. Booked VIP comprehensive smile audit & digital facebow.'
  },
  {
    id: 'CALL-1089',
    patientName: 'Tanvi Agarwal',
    phone: '+91 97118 34019',
    location: 'Whitefield, Bengaluru',
    procedure: 'Clear Aligners',
    callTime: '09:25 AM Today',
    durationSeconds: 140,
    handledBy: 'Pooja Roy (Dental Assistant)',
    role: 'Dental Assistant',
    outcome: 'Follow-up Scheduled',
    estimatedValue: 85000,
    notes: 'Looking for cost comparison with traditional ceramic braces. Sent WhatsApp brochure, follow-up call set for 5 PM.'
  },
  {
    id: 'CALL-1088',
    patientName: 'Dr. Venkatesh Murthy',
    phone: '+91 98860 67123',
    location: 'Sadashivanagar, Bengaluru',
    procedure: 'Dental Implants',
    callTime: '09:05 AM Today',
    durationSeconds: 195,
    handledBy: 'Simran Kaur (Sr. Clinic Coordinator)',
    role: 'Clinic Coordinator',
    outcome: 'Booked Audit',
    estimatedValue: 80000,
    notes: 'Wants immediate implant post-extraction. Desk phone answered within 3 seconds. Audit booked for Friday 4:00 PM.'
  },
  {
    id: 'CALL-1087',
    patientName: 'Meera Chawla',
    phone: '+91 99100 81290',
    location: 'HSR Layout, Bengaluru',
    procedure: 'Full-Mouth Rehab',
    callTime: 'Yesterday, 5:40 PM',
    durationSeconds: 275,
    handledBy: 'Pooja Roy (Dental Assistant)',
    role: 'Dental Assistant',
    outcome: 'Doctor Callback',
    estimatedValue: 190000,
    notes: 'Multiple missing teeth and old worn-out bridge. Transferred consultation callback with Chief Prosthodontist.'
  },
  {
    id: 'CALL-1086',
    patientName: 'Arjun Nambiar',
    phone: '+91 98455 33021',
    location: 'Lavelle Road, Bengaluru',
    procedure: 'Clear Aligners',
    callTime: 'Yesterday, 4:15 PM',
    durationSeconds: 160,
    handledBy: 'Simran Kaur (Sr. Clinic Coordinator)',
    role: 'Clinic Coordinator',
    outcome: 'Booked Audit',
    estimatedValue: 95000,
    notes: 'Midline diastema correction. Direct reception pickup. Booked in-clinic 3D digital simulation for Sunday.'
  }
];

export const FUNNEL_STAGES: FunnelStageData[] = [
  {
    stage: '1. Inbound Desk Ring / Dial',
    count: 1050,
    percentage: 100,
    dropOffPercent: 0,
    description: 'Inbound patient inquiries and callback leads ringing at clinic reception desk.',
    accent: '#10b981'
  },
  {
    stage: '2. Frontline Reception Connected',
    count: 1035,
    percentage: 98.6,
    dropOffPercent: 1.4,
    description: 'Desk phone picked up by Dental Assistant or Clinic Coordinator within 5 seconds.',
    accent: '#059669'
  },
  {
    stage: '3. Clinical Needs Triaged',
    count: 820,
    percentage: 78.1,
    dropOffPercent: 20.5,
    description: 'Pre-screened for treatment intent (Aligners, Single/Multiple Implants, or Full-Mouth Rehab).',
    accent: '#34d399'
  },
  {
    stage: '4. Booked In-Clinic 3D Audit',
    count: 100,
    percentage: 9.52,
    dropOffPercent: 68.6,
    description: 'Exact 9.52% lead conversion: 1 booked comprehensive audit per 10.5 total dials.',
    accent: '#047857'
  },
  {
    stage: '5. Treatment Plan Accepted',
    count: 62,
    percentage: 5.9,
    dropOffPercent: 3.62,
    description: 'Patients signing high-ticket case plan (₹45,000 - ₹1,80,000+ LTV).',
    accent: '#065f46'
  }
];

export const DOCTORS_ON_DUTY = [
  {
    name: 'Dr. Vikram Singhal, MDS',
    specialty: 'Orthodontics & Certified Aligner Specialist',
    room: 'Op-1 (Digital Scanner Suite)',
    availability: 'Chairside Available',
    todayBookings: 6
  },
  {
    name: 'Dr. Ananya Sen, MDS, FICOI',
    specialty: 'Oral Implantology & Periodontics',
    room: 'Op-2 (Surgical Implant Theatre)',
    availability: 'In Surgery until 1:00 PM',
    todayBookings: 4
  },
  {
    name: 'Dr. Pradeep Varma, MDS',
    specialty: 'Prosthodontics & Full-Mouth Rehabilitation',
    room: 'Op-3 (Rehab & Facebow Studio)',
    availability: 'Consultation Callbacks 2-4 PM',
    todayBookings: 3
  }
];
