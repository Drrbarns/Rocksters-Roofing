import React from 'react';
import { JOBS, CONTACT_INFO } from '../constants';
import { Briefcase, MapPin } from 'lucide-react';

const Careers = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl font-display font-bold">Careers</h1>
        <p className="text-slate-400 mt-2">Join the Rocksters Family</p>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10 border border-slate-100">
           <h2 className="text-2xl font-bold text-slate-900 mb-4">Why work with us?</h2>
           <p className="text-slate-600 leading-relaxed">
             At Rocksters, we believe our people are our greatest strength. We offer a dynamic work environment, opportunities for professional growth, and the chance to work on projects that shape the skyline of Ghana.
           </p>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-6">Open Positions</h3>
        
        <div className="space-y-4">
          {JOBS.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-rockster-accent transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
               <div>
                  <h4 className="text-lg font-bold text-rockster-blue">{job.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-3">{job.description}</p>
               </div>
               <button className="bg-slate-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-rockster-accent transition-colors shrink-0">
                 Apply Now
               </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Don't see a position that fits? Send your CV to <a href={`mailto:${CONTACT_INFO.email}`} className="text-rockster-accent underline">{CONTACT_INFO.email}</a></p>
        </div>
      </div>
    </div>
  );
};

export default Careers;