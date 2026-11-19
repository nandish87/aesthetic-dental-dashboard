export type ProcedureType = 'Clear Aligners' | 'Dental Implants' | 'Full-Mouth Rehab' | 'All';

export interface ProcedureMetric {
  id: string;
  name: string;
  shortName: string;
  avgLtvMin: number;
  avgLtvMax: number;
  avgLtvMean: number;
  caseCycleWeeks: number;
  conversionShare: number; // percentage of overall inquiries
  activeCases: number;
  monthlyRevenue: number;
  color: string;
  description: string;
  targetAudience: string;
}

export interface CallRecord {
  id: string;
  patientName: string;
  phone: string;
  location: string;
  procedure: 'Clear Aligners' | 'Dental Implants' | 'Full-Mouth Rehab';
  callTime: string;
  durationSeconds: number;
  handledBy: string; // Dental Assistant or Clinic Coordinator
  role: 'Dental Assistant' | 'Clinic Coordinator' | 'Implant Counselor';
  outcome: 'Booked Audit' | 'Doctor Callback' | 'Follow-up Scheduled' | 'General Query' | 'Not Interested';
  estimatedValue: number;
  notes: string;
}

export interface FunnelStageData {
  stage: string;
  count: number;
  percentage: number;
  dropOffPercent: number;
  description: string;
  accent: string;
}

export interface ReceptionMetrics {
  deskPhonePickupRate: number; // e.g. 98.4%
  avgPickupTimeSeconds: number; // e.g. 4.8s
  dialsToAuditRatio: number; // 10.5
  conversionProbability: number; // 9.52%
  expectedValuePerCall: number; // 2717.80
  totalCallsLogged: number;
  auditsBooked: number;
  pipelineGenerated: number;
  clinicPhoneLocation: string; // "Reception Desk Station A - Frontline Coordination"
}
