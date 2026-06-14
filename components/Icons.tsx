"use client";
import React from 'react';

export const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L19.5 12.5L28 16L19.5 19.5L16 28L12.5 19.5L4 16L12.5 12.5L16 4Z" fill="currentColor" />
    <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="23" cy="23" r="2.5" fill="currentColor" opacity="0.6" />
  </svg>
);

export const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export const BrushIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.5 4.5l-11 11c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5l11-11c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9l-4 4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 20h4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SofaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 16v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 11c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v5H2v-5z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 7V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WindowIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8l4 4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
