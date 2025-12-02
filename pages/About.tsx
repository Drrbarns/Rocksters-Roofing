import React from 'react';
import { CLIENTS } from '../constants';
import { Users, Shield, Award, PenTool } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About Us</h1>
        <p className="text-slate-400 text-lg">Building trust since 1992</p>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-slate-700 mb-8 border-l-4 border-rockster-accent pl-6">
              <span className="font-bold text-rockster-blue">Rocksters Roofing Systems</span> is the market leader in roofing sheets, steel trusses, ceiling joists and plasterboards. Manufacturing in Ghana since 1992.
            </p>
            <div className="prose prose-lg text-slate-600">
               <p>
                 We are dedicated to providing high-quality building materials that stand the test of time. Our state-of-the-art manufacturing facilities allow us to produce precision-engineered roofing systems that are both aesthetically pleasing and structurally sound.
               </p>
               <p className="mt-4">
                 Over the decades, we have built a reputation for reliability, speed, and excellence. We don't just sell products; we offer complete solutions, from technical advice and estimation to delivery and installation.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Info Grid */}
      <section className="py-16 bg-rockster-concrete">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <InfoCard icon={<Users />} title="Customer Service" text="Our dedicated team is always ready to assist you with inquiries and support." />
             <InfoCard icon={<Users />} title="Our Team" text="Comprised of industry experts, engineers, and skilled technicians." />
             <InfoCard icon={<Shield />} title="After Sales" text="Commitment to satisfaction extends beyond the purchase with follow-ups." />
             <InfoCard icon={<Award />} title="Business Olympics" text="Multi-award winning company recognized for excellence in construction." />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-900">Our Trusted Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded hover:shadow-md transition-shadow text-center">
                <span className="font-semibold text-slate-700 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-rockster-accent">
    <div className="text-rockster-blue mb-4">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{text}</p>
  </div>
);

export default About;