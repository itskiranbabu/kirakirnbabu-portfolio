import React from 'react';
import { motion } from 'framer-motion';

export const GrowthWidget: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="growth-card w-full max-w-[420px] shadow-2xl"
        >
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                    Viral Result
                </span>
            </div>

            <div className="space-y-1 mb-8">
                <h3 className="text-gray-400 text-sm font-medium tracking-tight">Growth Velocity</h3>
                <p className="text-gray-500 text-[11px]">Automated engagement hitting viral peaks.</p>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
                <span className="velocity-text">+842%</span>
                <span className="text-orange-500 text-xs font-bold bg-orange-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <i className="fas fa-arrow-up text-[10px]"></i>
                    vs last week
                </span>
            </div>

            {/* Simple SVG Chart */}
            <div className="relative h-24 w-full mb-8">
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0 80 Q 50 70, 100 85 T 200 60 T 300 40 T 400 20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M0 80 Q 50 70, 100 85 T 200 60 T 300 40 T 400 20 L 400 100 L 0 100 Z"
                        fill="url(#chartGradient)"
                    />
                    <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                        cx="400" cy="20" r="4" fill="#f97316"
                    />
                </svg>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20 mb-6 active:scale-[0.98]">
                Analyze Trends
            </button>

            <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <div className="flex items-center gap-2">
                    <i className="far fa-eye text-orange-400 text-xs"></i>
                    <span className="text-xs text-gray-500">Total Impressions</span>
                </div>
                <span className="text-xs font-bold text-white tracking-wider">2.4M</span>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                    />
                </div>
                <div className="flex justify-center">
                    <span className="text-[8px] text-gray-600 uppercase tracking-[0.3em]">AI Powered Scale</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fas fa-plus text-[8px] text-gray-400"></i>
                    <span className="text-[10px] text-gray-400">Auto-Optimization</span>
                </div>
            </div>
        </motion.div>
    );
};
