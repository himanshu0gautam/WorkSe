import React from 'react'
import {
  Phone,
  MessageSquare,
  Globe,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B132B] text-slate-300 pt-12 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Col */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-[#D4A373] text-[#0B132B] p-1.5 rounded-lg font-black text-lg">bM</div>
                <span className="text-xl font-black text-white">bulao<span className="text-[#D4A373]">Mistri</span></span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Connecting households & businesses directly with local artisans with zero brokerage fees.
              </p>
              <div className="flex space-x-3 text-slate-400">
                <a href="#" className="p-2 bg-[#1C2541] rounded-lg hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-[#1C2541] rounded-lg hover:text-white transition-colors"><MessageSquare className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-[#1C2541] rounded-lg hover:text-white transition-colors"><Phone className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Trade Categories Col */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Trade Categories</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Electricians Near Me</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Plumbers Near Me</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Carpenters Near Me</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Painters & Decorators</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">AC & Fridge Repair</a></li>
              </ul>
            </div>

            {/* Active Cities Col */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Active Cities</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Noida & Greater Noida</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Delhi NCR</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Gurugram / Gurgaon</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Ghaziabad & Indirapuram</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Bengaluru & Mumbai</a></li>
              </ul>
            </div>

            {/* Safety & Legal */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Karigar Safety</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Aadhaar Verification</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Zero Commission Policy</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Support & Helpline</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>© {new Date().getFullYear()} bulaoMistri. All rights reserved. Direct Karigar Network.</div>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>for Local Skilled Workers of India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer