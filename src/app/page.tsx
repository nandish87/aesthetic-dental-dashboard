'use client';

import React, { useState } from 'react';
import { Sidebar, NavTab } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';
import { DentistDashboard } from '@/components/DentistDashboard';
import { KeyMetricsGrid } from '@/components/KeyMetricsGrid';
import { ProcedureCards } from '@/components/ProcedureCards';
import { ReceptionCallCenter } from '@/components/ReceptionCallCenter';
import { ConversionFunnel } from '@/components/ConversionFunnel';
import { UnitEconomicsCalculator } from '@/components/UnitEconomicsCalculator';
import { DoctorRoster } from '@/components/DoctorRoster';
import { CallSimulatorModal } from '@/components/CallSimulatorModal';
import { INITIAL_CALLS, INITIAL_METRICS } from '@/data/dentalData';
import { CallRecord, ReceptionMetrics } from '@/types/dental';

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>('procedures');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [calls, setCalls] = useState<CallRecord[]>(INITIAL_CALLS);
  const [metrics, setMetrics] = useState<ReceptionMetrics>(INITIAL_METRICS);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedProcedureFilter, setSelectedProcedureFilter] = useState('all');

  const handleAddCall = (newCall: CallRecord) => {
    const updatedCalls = [newCall, ...calls];
    setCalls(updatedCalls);

    // Update metrics dynamically
    const newTotalCalls = metrics.totalCallsLogged + 1;
    const isAudit = newCall.outcome === 'Booked Audit';
    const newAudits = metrics.auditsBooked + (isAudit ? 1 : 0);
    const newPipeline = metrics.pipelineGenerated + (isAudit ? newCall.estimatedValue : 0);

    const newConversionProbability = Number(((newAudits / newTotalCalls) * 100).toFixed(2));
    const newDialsRatio = Number((newTotalCalls / newAudits).toFixed(1));
    const newEvPerCall = Number((newPipeline / newTotalCalls).toFixed(2));

    setMetrics({
      ...metrics,
      totalCallsLogged: newTotalCalls,
      auditsBooked: newAudits,
      conversionProbability: newConversionProbability,
      dialsToAuditRatio: newDialsRatio,
      pipelineGenerated: newPipeline,
      expectedValuePerCall: newEvPerCall,
    });
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc] text-slate-900 font-sans antialiased">
      {/* 1. Left Sidebar matching screenshot's dark sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Top Navbar matching screenshot's top row with greeting to Dr. Y Nandish */}
        <TopNav
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onSimulateCall={() => setIsSimulatorOpen(true)}
          conversionProbability={metrics.conversionProbability}
          evPerCall={metrics.expectedValuePerCall}
        />

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeTab === 'procedures' && (
            <DentistDashboard
              metrics={metrics}
              calls={calls}
              onSimulateCall={() => setIsSimulatorOpen(true)}
            />
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Executive Clinical Overview
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-ticket aesthetic & implantology unit economics dashboard
                </p>
              </div>

              <KeyMetricsGrid metrics={metrics} />
              
              <ProcedureCards
                selectedProcedure={selectedProcedureFilter}
                onSelectProcedure={setSelectedProcedureFilter}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <ReceptionCallCenter
                    calls={calls}
                    onAddCall={handleAddCall}
                    selectedProcedure={selectedProcedureFilter}
                  />
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <ConversionFunnel />
                  <DoctorRoster />
                </div>
              </div>

              <UnitEconomicsCalculator
                initialDials={metrics.totalCallsLogged}
                initialConversionRate={metrics.conversionProbability}
                initialEvPerCall={metrics.expectedValuePerCall}
              />
            </div>
          )}

          {activeTab === 'hotline' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <ReceptionCallCenter
                calls={calls}
                onAddCall={handleAddCall}
                selectedProcedure="all"
              />
              <DoctorRoster />
            </div>
          )}

          {activeTab === 'callbacks' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <DoctorRoster />
              <ReceptionCallCenter
                calls={calls.filter((c) => c.outcome === 'Doctor Callback')}
                onAddCall={handleAddCall}
                selectedProcedure="all"
              />
            </div>
          )}

          {activeTab === 'audits' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <ConversionFunnel />
              <ReceptionCallCenter
                calls={calls.filter((c) => c.outcome === 'Booked Audit')}
                onAddCall={handleAddCall}
                selectedProcedure="all"
              />
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <ReceptionCallCenter
                calls={calls}
                onAddCall={handleAddCall}
                selectedProcedure="all"
              />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <UnitEconomicsCalculator
                initialDials={metrics.totalCallsLogged}
                initialConversionRate={metrics.conversionProbability}
                initialEvPerCall={metrics.expectedValuePerCall}
              />
              <ConversionFunnel />
            </div>
          )}
        </main>
      </div>

      {/* Simulator Modal */}
      <CallSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onLogCall={handleAddCall}
      />
    </div>
  );
}
