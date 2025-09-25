'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  // Sample data - in real app, this would come from API/props
  const trademarkData = {
    healthScore: "Excellent",
    registrability: 75,
    similarityRate: 25,
    classProbability: 90,
    registrationDate: "25 Dec 2025",
    filingDate: "15 Sept 2025",
    similarityScore: "20 %",
    lowConflictDetected: "Low conflict detected",
    suggestedClass: 25,
    riskAnalysis: "Medium Chance & Fashion"
  };

  const CircularProgress = ({ percentage, color, size = 120 }: { percentage: number; color: string; size?: number }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg className="transform -rotate-90" width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white font-nunito">{percentage}%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0C002B] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse 1600px 640px at 50% 20%, #1345C3 0%, #1345C3 20%, rgba(19, 69, 195, 0.8) 60%, rgba(19, 69, 195, 0.4) 70%, transparent 100%)`
      }}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFB703] rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#069A81] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-[#1345C3] rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#FFB703] rounded-full animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-[#069A81] rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-[#1345C3] rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[rgba(255,255,255,0.77)] text-sm mb-2 font-nunito">Top / Primary Metrics</p>
          <h1 className="text-3xl font-bold text-white mb-6 font-nunito">Your Trademark Health Score</h1>
          
          {/* Health Score Banner */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-white mb-4 font-nunito">Excellent</h2>
            <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-4 backdrop-blur-sm border border-[rgba(255,255,255,0.2)]">
              <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-4 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Total Applications</p>
                <p className="text-2xl font-bold text-white font-nunito">1,247</p>
                <p className="text-green-400 text-xs font-nunito flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +12.5%
                </p>
              </div>
              <i className="fas fa-file-alt text-[#FFB703] text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-4 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Success Rate</p>
                <p className="text-2xl font-bold text-white font-nunito">94.5%</p>
                <p className="text-green-400 text-xs font-nunito flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +2.1%
                </p>
              </div>
              <i className="fas fa-chart-line text-[#1345C3] text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-4 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Avg. Processing</p>
                <p className="text-2xl font-bold text-white font-nunito">18d</p>
                <p className="text-red-400 text-xs font-nunito flex items-center">
                  <i className="fas fa-arrow-down mr-1"></i>
                  -3 days
                </p>
              </div>
              <i className="fas fa-clock text-[#069A81] text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-4 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Active Monitors</p>
                <p className="text-2xl font-bold text-white font-nunito">342</p>
                <p className="text-green-400 text-xs font-nunito flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +28
                </p>
              </div>
              <i className="fas fa-shield-alt text-[#FFB703] text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Metrics and Overview */}
          <div className="lg:col-span-2 space-y-8">
            {/* Circular Progress Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1345C3] to-[#069A81] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <CircularProgress percentage={trademarkData.registrability} color="#1345C3" />
                    <h3 className="font-semibold text-white mt-4 mb-2 font-nunito">Trademark Registrability</h3>
                    <p className="text-sm text-[rgba(255,255,255,0.77)] font-nunito">
                      Genericness — note about uniqueness / conflicts / legal eligibility
                    </p>
                    {/* Pulsing indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#1345C3] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1345C3] to-[#069A81] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <CircularProgress percentage={trademarkData.similarityRate} color="#1345C3" />
                    <h3 className="font-semibold text-white mt-4 mb-2 font-nunito">Similarity Rate</h3>
                    <p className="text-sm text-[rgba(255,255,255,0.77)] font-nunito">Low conflict risk</p>
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                      <span className="text-[10px] text-green-400 font-nunito">LOW</span>
                    </div>
                  </div>
                </div>
                </div>

              <div className="text-center group">
                <div className="bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#069A81] to-[#1345C3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <CircularProgress percentage={trademarkData.classProbability} color="#069A81" />
                    <h3 className="font-semibold text-white mt-4 mb-2 font-nunito">Class Probability</h3>
                    <p className="text-sm text-[rgba(255,255,255,0.77)] font-nunito">
                      Confidence that the suggested trademark class is the correct fit
                    </p>
                    {/* Confidence badge */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <div className="w-2 h-2 bg-[#069A81] rounded-full animate-pulse mr-1"></div>
                      <span className="text-[10px] text-[#069A81] font-nunito">HIGH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trademark Report Overview */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-6 font-nunito flex items-center">
                <i className="fas fa-chart-line text-[#FFB703] mr-3"></i>
                Trademark Report Overview
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[rgba(251,191,36,0.15)] rounded-lg p-4 border border-[rgba(251,191,36,0.3)]">
                  <p className="text-sm text-[rgba(255,255,255,0.77)] mb-1 font-nunito">Estimated registration completion date</p>
                  <p className="text-2xl font-bold text-white font-nunito">{trademarkData.registrationDate}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 border border-[rgba(255,255,255,0.1)]">
                    <p className="text-sm text-[rgba(255,255,255,0.77)] mb-1 font-nunito">Filing Date</p>
                    <p className="font-semibold text-white font-nunito">{trademarkData.filingDate}</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 border border-[rgba(255,255,255,0.1)]">
                    <p className="text-sm text-[rgba(255,255,255,0.77)] mb-1 font-nunito">Similarity Rate</p>
                    <p className="font-semibold text-white font-nunito">{trademarkData.similarityScore}</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 border border-[rgba(255,255,255,0.1)] col-span-2">
                    <p className="text-sm text-[rgba(255,255,255,0.77)] mb-1 font-nunito">Status</p>
                    <p className="font-semibold text-white font-nunito flex items-center">
                      <i className="fas fa-check-circle text-green-400 mr-2"></i>
                      {trademarkData.lowConflictDetected}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Options */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-6 font-nunito flex items-center">
                <i className="fas fa-lightbulb text-[#FFB703] mr-3"></i>
                Suggested Options
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[rgba(251,191,36,0.15)] rounded-lg p-4 border border-[rgba(251,191,36,0.3)]">
                  <h4 className="font-semibold text-white text-2xl font-nunito mb-2">Class {trademarkData.suggestedClass}</h4>
                  <p className="text-[rgba(255,255,255,0.77)] text-sm font-nunito">Recommended trademark class for your application</p>
                </div>
                
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                  <h4 className="font-semibold text-white mb-2 font-nunito flex items-center">
                    <i className="fas fa-exclamation-triangle text-yellow-400 mr-2"></i>
                    Risk Analysis
                  </h4>
                  <p className="text-[rgba(255,255,255,0.77)] font-nunito">{trademarkData.riskAnalysis}</p>
                </div>
                
                <button className="flex items-center text-[#FFB703] hover:text-[#e6a602] transition-colors duration-200 font-nunito">
                  <i className="fas fa-user-circle mr-2"></i>
                  <span className="text-sm">Set a presistration</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing and Actions */}
          <div className="space-y-6">
            {/* Get Your Trademark Registered */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-6 font-nunito flex items-center">
                <i className="fas fa-shield-alt text-[#FFB703] mr-3"></i>
                Get Your Trademark Registered
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-[rgba(255,255,255,0.77)] font-nunito">Government fee</span>
                  <span className="font-semibold text-white font-nunito">₹4,500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[rgba(255,255,255,0.77)] font-nunito">IPR Karo Platform Fee</span>
                  <span className="font-semibold text-white font-nunito">₹2,499</span>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.2)] pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white font-nunito">Total Amount</span>
                    <span className="text-2xl font-bold text-[#FFB703] font-nunito">₹6,999</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full yellow-button font-nunito font-semibold text-base">
                <i className="fas fa-rocket mr-2"></i>
                Start Registration
              </button>
            </div>

            {/* AI Chatbot */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white font-nunito">AI Chatbot</h3>
                <div className="w-10 h-10 bg-[#FFB703] rounded-lg flex items-center justify-center">
                  <i className="fas fa-robot text-black text-lg"></i>
                </div>
              </div>
              
              <p className="text-[rgba(255,255,255,0.77)] text-sm mb-4 font-nunito">How can I assist you?</p>
              
              <div className="space-y-3">
                <button className="w-full yellow-button font-nunito font-medium text-sm">
                  <i className="fas fa-search mr-2"></i>
                  Search My Brand
                </button>
                <button className="w-full yellow-button font-nunito font-medium text-sm">
                  <i className="fas fa-question-circle mr-2"></i>
                  Ask Your Questions
                </button>
              </div>
            </div>

            {/* Analytics & Packages */}
            <div className="space-y-6">
              {/* Analytics Overview */}
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-4 font-nunito flex items-center">
                  <i className="fas fa-chart-bar text-[#FFB703] mr-3"></i>
                  Analytics Overview
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[rgba(251,191,36,0.15)] rounded-lg p-3 border border-[rgba(251,191,36,0.3)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Success Rate</span>
                      <i className="fas fa-trending-up text-green-400 text-sm"></i>
                    </div>
                    <p className="text-xl font-bold text-white font-nunito">94.5%</p>
                  </div>
                  <div className="bg-[rgba(251,191,36,0.15)] rounded-lg p-3 border border-[rgba(251,191,36,0.3)]">
                  <div className="flex items-center justify-between">
                      <span className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Avg. Time</span>
                      <i className="fas fa-clock text-blue-400 text-sm"></i>
                    </div>
                    <p className="text-xl font-bold text-white font-nunito">18 days</p>
                  </div>
                </div>

                {/* Mini Charts */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Registration Progress</span>
                      <span className="text-white text-xs font-nunito">85%</span>
                    </div>
                    <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#1345C3] to-[#069A81] h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Packages */}
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[15px] p-6 backdrop-blur-sm border border-[rgba(255,255,255,0.2)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-6 font-nunito flex items-center">
                  <i className="fas fa-layer-group text-[#FFB703] mr-3"></i>
                  Protection Plans
                </h3>
                
                <div className="space-y-4">
                  {/* Standard Plan */}
                  <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-lg border border-[rgba(251,191,36,0.3)] transition-all duration-500 overflow-hidden">
                    <div className="p-4 cursor-pointer">
                  <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#1345C3] rounded-full animate-pulse"></div>
                    <div>
                            <h4 className="text-white font-semibold font-nunito">Standard Plan</h4>
                            <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">AI-powered search & analysis</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FFB703] font-bold font-nunito">₹2,999</p>
                          <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">/month</p>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                        <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 space-y-3">
                          <h5 className="text-white text-sm font-semibold font-nunito mb-2">What's included:</h5>
                          <ul className="space-y-2">
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              AI-powered smart search
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Approval chances revealed
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Spot risks before filing
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Perfect for new brands
                            </li>
                          </ul>
                          <button className="w-full mt-4 bg-[#FFB703] hover:bg-[#e6a602] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 font-nunito text-sm">
                            Select Standard Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pro Monitoring Plan */}
                  <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-lg border border-[rgba(251,191,36,0.3)] transition-all duration-500 overflow-hidden">
                    <div className="p-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#069A81] rounded-full animate-pulse"></div>
                          <div>
                            <h4 className="text-white font-semibold font-nunito">Pro Monitoring</h4>
                            <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">24/7 brand protection</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FFB703] font-bold font-nunito">₹4,999</p>
                          <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">/month</p>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                        <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 space-y-3">
                          <h5 className="text-white text-sm font-semibold font-nunito mb-2">What's included:</h5>
                          <ul className="space-y-2">
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              24/7 brand monitoring
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Instant conflict alerts
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Continuous brand protection
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Block copycat attempts
                            </li>
                          </ul>
                          <button className="w-full mt-4 bg-[#FFB703] hover:bg-[#e6a602] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 font-nunito text-sm">
                            Select Pro Plan
                          </button>
                        </div>
                      </div>
                  </div>
                </div>

                {/* Premium Plan */}
                  <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-lg border border-[rgba(251,191,36,0.3)] transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-2 right-2 bg-[#FFB703] text-black px-2 py-1 rounded-full text-xs font-semibold font-nunito">
                      Most Popular
                    </div>
                    <div className="p-4 cursor-pointer">
                  <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
                    <div>
                            <h4 className="text-white font-semibold font-nunito">Premium Plan</h4>
                            <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">Complete filing included</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#FFB703] font-bold font-nunito">₹6,999</p>
                          <p className="text-[rgba(255,255,255,0.77)] text-xs font-nunito">/month</p>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                        <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 space-y-3">
                          <h5 className="text-white text-sm font-semibold font-nunito mb-2">What's included:</h5>
                          <ul className="space-y-2">
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Complete filing included
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Expert legal guidance
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              AI risk checkup
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Strong brand safeguard
                            </li>
                            <li className="flex items-center text-[rgba(255,255,255,0.77)] text-sm font-nunito">
                              <i className="fas fa-check text-[#FFB703] mr-2 text-xs"></i>
                              Priority VIP support
                            </li>
                          </ul>
                          <button className="w-full mt-4 bg-[#FFB703] hover:bg-[#e6a602] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 font-nunito text-sm">
                            Select Premium Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
