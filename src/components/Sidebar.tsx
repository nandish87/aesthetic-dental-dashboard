'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Sparkles, 
  PhoneCall, 
  Stethoscope, 
  Scan, 
  UserCheck, 
  BarChart3, 
  Menu,
  ChevronRight
} from 'lucide-react';

export type NavTab = 
  | 'procedures' 
  | 'dashboard' 
  | 'hotline' 
  | 'callbacks' 
  | 'audits' 
  | 'inquiries' 
  | 'analytics';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isCollapsed = false,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'procedures', label: 'Procedures', icon: BookOpen },
    { id: 'hotline', label: 'Reception Hotline', icon: PhoneCall, badge: 'Live' },
    { id: 'callbacks', label: 'Doctor Callbacks', icon: Stethoscope },
    { id: 'audits', label: '3D Audits (9.52%)', icon: Scan },
    { id: 'inquiries', label: 'Patient Leads', icon: UserCheck },
    { id: 'analytics', label: 'Unit Economics', icon: BarChart3 },
  ];

  return (
    <aside
      className={`bg-[#0a1628] text-slate-300 flex flex-col shrink-0 transition-all duration-300 min-h-screen ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand / Logo matching the screenshot's top left logo */}
      <div className="p-5 flex items-center gap-3 border-b border-slate-800/80">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-xl shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        {!isCollapsed && (
          <div className="leading-tight">
            <div className="flex items-center gap-1 font-extrabold text-white text-base tracking-tight">
              <span className="text-emerald-400">DENTA</span>
              <span className="text-slate-100">MATICS</span>
            </div>
            <p className="text-[10px] text-emerald-400/80 font-medium tracking-wide uppercase">
              Aesthetics & Implants
            </p>
          </div>
        )}
      </div>

      {/* Navigation items matching screenshot */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id as NavTab)}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all relative ${
                isActive
                  ? 'bg-[#1e60ff] text-white shadow-md shadow-blue-600/30 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between">
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Reception Desk Status in sidebar */}
      {!isCollapsed && (
        <div className="p-4 m-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Desk Phone: Highest in India</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug">
            Desk phone answered by dental assistant / clinic coordinator.
          </p>
          <div className="text-[10px] text-slate-300 pt-1 border-t border-slate-800 flex justify-between">
            <span>EV / Dial:</span>
            <span className="font-bold text-emerald-300">₹2,717.80</span>
          </div>
        </div>
      )}
    </aside>
  );
};
