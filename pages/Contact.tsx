import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl font-display font-bold">Contact Us</h1>
        <p className="text-slate-400 mt-2">Get in touch for a quote or inquiry</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Section */}
          <div className="lg:w-1/3">
             <h2 className="text-2xl font-bold text-slate-900 mb-8">Head Office</h2>
             
             <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-rockster-concrete rounded-full flex items-center justify-center text-rockster-accent shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Address</h4>
                   <p className="text-slate-600 text-sm leading-relaxed mt-1">{CONTACT_INFO.address}</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-rockster-concrete rounded-full flex items-center justify-center text-rockster-accent shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Phone</h4>
                   <p className="text-slate-600 text-sm leading-relaxed mt-1">
                     {CONTACT_INFO.phones.map(p => <span key={p} className="block">{p}</span>)}
                   </p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-rockster-concrete rounded-full flex items-center justify-center text-rockster-accent shrink-0">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Email</h4>
                   <p className="text-slate-600 text-sm leading-relaxed mt-1">{CONTACT_INFO.email}</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-rockster-concrete rounded-full flex items-center justify-center text-rockster-accent shrink-0">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Working Hours</h4>
                   <p className="text-slate-600 text-sm leading-relaxed mt-1">
                     Mon - Fri: 8:00 AM - 5:00 PM<br/>
                     Sat: 9:00 AM - 2:00 PM
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-2/3 bg-white border border-slate-100 shadow-xl rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-rockster-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-rockster-accent transition-colors" placeholder="+233..." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-rockster-accent transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-rockster-accent transition-colors" placeholder="Inquiry about..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-rockster-accent transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="bg-rockster-accent text-white px-8 py-4 rounded font-bold hover:bg-sky-500 transition-colors w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-xl overflow-hidden h-96 bg-slate-200 flex items-center justify-center relative">
          <img src="https://picsum.photos/seed/map/1200/400" className="w-full h-full object-cover opacity-50 grayscale" alt="Map Location" />
          <div className="absolute bg-white px-6 py-3 rounded-lg shadow-lg">
             <span className="font-bold text-slate-800">Rocksters Roofing Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;