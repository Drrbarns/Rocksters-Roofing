import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Hammer, 
  Truck, 
  Trophy, 
  Users, 
  Star, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  Ruler,
  Calendar,
  Layers,
  Zap,
  Building2,
  Gem,
  Landmark,
  HardHat
} from 'lucide-react';
import { PROJECTS, NEWS, CLIENTS } from '../constants';
import { NewsItem } from '../types';
import { Reveal } from '../components/Reveal';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="https://picsum.photos/seed/roofinghero/1920/1080" 
            alt="Rocksters Roofing" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left mt-20">
          <Reveal delay={200}>
            <span className="inline-block py-1 px-3 rounded bg-rockster-accent/20 text-rockster-accent border border-rockster-accent/30 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Est. 1992 • Ghana's Premier Roofing
            </span>
          </Reveal>
          
          <Reveal delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Building Protection <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">For Generations</span>
            </h1>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
              We manufacture and install premium roofing sheets, light gauge steel trusses, and ceiling systems. Speed, precision, and durability guaranteed.
            </p>
          </Reveal>

          <Reveal delay={800}>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products" className="bg-rockster-accent hover:bg-sky-500 text-white px-8 py-4 rounded font-bold text-center transition-all flex items-center justify-center gap-2 group shadow-lg shadow-sky-900/20 hover:scale-105 active:scale-95">
                View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white hover:text-rockster-blue text-white px-8 py-4 rounded font-bold text-center transition-all hover:scale-105 active:scale-95">
                Get Free Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ticker / Promo Banner */}
      <div className="bg-rockster-accent text-white py-3 overflow-hidden shadow-lg relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
             <span className="bg-white text-rockster-accent px-2 py-0.5 text-xs font-bold rounded animate-pulse">OFFER</span>
             <p className="text-sm font-medium text-center md:text-left">
                Super Saver Deals on Roofing Sheets & Trusses available at all offices.
             </p>
          </div>
          <a href="tel:0501453877" className="flex items-center gap-2 font-bold whitespace-nowrap text-sm hover:text-white/80 transition-colors">
            <PhoneCall size={16} /> Call for advice: 050 145 38 77
          </a>
        </div>
      </div>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-rockster-accent font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Comprehensive Building Solutions</h3>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-slate-500 mt-4 leading-relaxed">Everything you need for a durable, aesthetic, and structural sound roof and ceiling system.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={200} className="h-full"><SolutionCard 
              title="Roofing Sheets"
              desc="Premium IBR and Self-lock profiles available in Aluminium, Aluzinc, and Galvanized steel."
              image="https://picsum.photos/seed/roofsheets/600/400"
              link="/products"
            /></Reveal>
            <Reveal delay={400} className="h-full"><SolutionCard 
              title="Steel Trusses"
              desc="Engineered Light Gauge Steel Trusses designed for maximum load-bearing and longevity."
              image="https://picsum.photos/seed/steelt/600/400"
              link="/products"
            /></Reveal>
            <Reveal delay={600} className="h-full"><SolutionCard 
              title="Ceiling Systems"
              desc="High-quality Plasterboards and Galvanized Ceiling Joists for modern interiors."
              image="https://picsum.photos/seed/ceiling/600/400"
              link="/products"
            /></Reveal>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-rockster-blue text-white py-20 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-700/50">
            <Reveal delay={100}><StatItem number="30+" label="Years Experience" icon={<Trophy className="w-6 h-6 text-rockster-accent mb-2 mx-auto" />} /></Reveal>
            <Reveal delay={200}><StatItem number="3-5" label="Days Delivery Time" icon={<Clock className="w-6 h-6 text-rockster-accent mb-2 mx-auto" />} /></Reveal>
            <Reveal delay={300}><StatItem number="5k+" label="Projects Completed" icon={<CheckCircle className="w-6 h-6 text-rockster-accent mb-2 mx-auto" />} /></Reveal>
            <Reveal delay={400}><StatItem number="100%" label="Technical Support" icon={<Users className="w-6 h-6 text-rockster-accent mb-2 mx-auto" />} /></Reveal>
          </div>
        </div>
      </section>

      {/* Material Science / Informative Section */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                    <Reveal width="100%" direction="right">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                          <img src="https://picsum.photos/seed/material/800/600" alt="Material Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                              <div className="text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                                  <div className="flex items-center gap-2 mb-2">
                                      <ShieldCheck className="text-rockster-accent" size={24} />
                                      <h4 className="font-bold text-xl">AZ150 Aluzinc Coating</h4>
                                  </div>
                                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Superior corrosion resistance engineered for coastal and humid environments.</p>
                              </div>
                          </div>
                      </div>
                    </Reveal>
                </div>
                <div className="md:w-1/2">
                    <Reveal>
                      <h2 className="text-rockster-accent font-bold uppercase tracking-widest text-sm mb-3">Material Science</h2>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Unmatched Durability</h3>
                    </Reveal>
                    <Reveal delay={200}>
                      <p className="text-slate-600 mb-8 leading-relaxed">
                          Not all roofing sheets are created equal. We strictly adhere to international standards to ensure your roof lasts decades, not just years. Our commitment to quality means using only the finest raw materials.
                      </p>
                    </Reveal>
                    <div className="space-y-6">
                        <Reveal delay={300}><TechFeature 
                            icon={<Layers size={20} />} 
                            title="Premium Thickness" 
                            desc="We guarantee true gauge thickness (0.40mm - 0.70mm) with zero tolerance for manipulation." 
                        /></Reveal>
                        <Reveal delay={400}><TechFeature 
                            icon={<Zap size={20} />} 
                            title="Colour Lock Technology" 
                            desc="Our pre-painted coils use high-retention pigments that resist fading under the harsh Ghanaian sun." 
                        /></Reveal>
                        <Reveal delay={500}><TechFeature 
                            icon={<CheckCircle size={20} />} 
                            title="Anti-Leak Design" 
                            desc="Engineered profiles with anti-capillary grooves to prevent water leakage through side laps." 
                        /></Reveal>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
               <Reveal>
                 <h2 className="text-rockster-accent font-bold uppercase tracking-widest text-sm mb-3">How We Work</h2>
                 <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">From Blueprint to Reality</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                   We've streamlined the roofing process to ensure zero stress for our clients. From the moment you contact us to the final installation, our team handles every detail.
                 </p>
               </Reveal>
               
               <div className="space-y-8">
                 <Reveal delay={100}><ProcessStep 
                   number="01" 
                   title="Free Technical Advice & Estimate" 
                   desc="Our engineers analyze your drawings and provide a cost-free, precise estimate and color consultation."
                   icon={<Ruler size={20} />}
                 /></Reveal>
                 <Reveal delay={200}><ProcessStep 
                   number="02" 
                   title="Precision Manufacturing" 
                   desc="Your order is processed in our ultra-modern factory using high-quality raw materials."
                   icon={<Hammer size={20} />}
                 /></Reveal>
                 <Reveal delay={300}><ProcessStep 
                   number="03" 
                   title="Swift Delivery" 
                   desc="We deliver directly to your site within 3-5 working days within our operational zones."
                   icon={<Truck size={20} />}
                 /></Reveal>
                 <Reveal delay={400}><ProcessStep 
                   number="04" 
                   title="Expert Installation" 
                   desc="Our certified installers ensure your roof is fitted to the highest safety and quality standards."
                   icon={<Users size={20} />}
                 /></Reveal>
               </div>
             </div>
             <div className="md:w-1/2 relative">
               <Reveal width="100%" direction="left">
                 <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-rockster-accent/20 transition-shadow duration-500">
                   <img src="https://picsum.photos/seed/worker/800/1000" alt="Rocksters Engineer" className="w-full h-auto object-cover" />
                 </div>
                 {/* Decorative background element */}
                 <div className="absolute -top-10 -right-10 w-full h-full bg-rockster-concrete rounded-2xl -z-0"></div>
               </Reveal>
             </div>
           </div>
        </div>
      </section>

      {/* Trusted Partners Sliding Strip */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center mb-8">
            <Reveal><p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Trusted by industry leaders</p></Reveal>
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-[60px] bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-[60px] bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll hover:pause">
                {/* First Set */}
                <div className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
                    {CLIENTS.map((client, i) => (
                        <LogoPlaceholder key={`l1-${i}`} name={client} index={i} />
                    ))}
                </div>
                 {/* Duplicate Set for seamless loop */}
                <div className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
                    {CLIENTS.map((client, i) => (
                        <LogoPlaceholder key={`l2-${i}`} name={client} index={i} />
                    ))}
                </div>
            </div>
        </div>

        <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                animation: scroll 60s linear infinite;
            }
            .hover\\:pause:hover {
                animation-play-state: paused;
            }
        `}</style>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-rockster-concrete">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Featured Projects</h2>
                <p className="text-slate-500 mt-2">A glimpse of our recent excellence.</p>
              </div>
            </Reveal>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-rockster-blue font-bold hover:text-rockster-accent transition-colors">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
               <Reveal key={project.id} delay={i * 200} className="h-full">
                 <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer h-full">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="text-rockster-accent text-xs font-bold uppercase mb-1">{project.category}</span>
                     <h3 className="text-white text-xl font-bold">{project.title}</h3>
                     <p className="text-slate-300 text-sm">{project.location}</p>
                   </div>
                 </div>
               </Reveal>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-rockster-blue font-bold">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Why Rocksters?</h2>
              <div className="w-20 h-1 bg-rockster-accent mx-auto mt-6"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={100}><AdvantageCard 
              icon={<ShieldCheck className="w-10 h-10 text-rockster-accent" />}
              title="Quality Assurance"
              description="We use only premium grade Aluminium, Aluzinc, and Galvanized Steel to prevent corrosion and leakage."
            /></Reveal>
            <Reveal delay={200}><AdvantageCard 
              icon={<Clock className="w-10 h-10 text-rockster-accent" />}
              title="Quick Production"
              description="Average production time of 3–5 working days, the fastest in the industry."
            /></Reveal>
            <Reveal delay={300}><AdvantageCard 
              icon={<Users className="w-10 h-10 text-rockster-accent" />}
              title="Expert Installation"
              description="Our installation teams are trained to handle complex roof designs with precision."
            /></Reveal>
            <Reveal delay={400}><AdvantageCard 
              icon={<PhoneCall className="w-10 h-10 text-rockster-accent" />}
              title="After Sales Service"
              description="Complaints responded to within 72 hours. We don't just sell; we support."
            /></Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Parallax effect for the quote mark */}
        <div 
            className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none will-change-transform"
            style={{ transform: `translateY(${(scrollY - 2000) * 0.2}px)` }}
        >
          <Quote size={400} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal><h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Trusted by Ghana's Best</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Reveal delay={100}><TestimonialCard 
               quote="Rocksters delivered our trusses ahead of schedule. The structural integrity and finish were impeccable."
               author="Project Manager"
               company="Newmont Ghana Ltd"
             /></Reveal>
             <Reveal delay={200}><TestimonialCard 
               quote="Their technical advice saved us money on our church project without compromising on quality."
               author="Building Committee"
               company="Calvary Baptist Church"
             /></Reveal>
             <Reveal delay={300}><TestimonialCard 
               quote="The after-sales service is real. They came back to check on the installation a week later. Highly recommended."
               author="Director"
               company="Lakeside Estates"
             /></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <Reveal><h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2></Reveal>
           <div className="space-y-4">
             <Reveal delay={100}><AccordionItem question="Do you charge for estimates?" answer="No, our technical advice and estimates are completely free. We assist with product design, color selection, and thickness recommendations at no cost." /></Reveal>
             <Reveal delay={200}><AccordionItem question="How long does production take?" answer="Rocksters prides itself on speed. Our average production time is between 3 to 5 working days after confirmation of order." /></Reveal>
             <Reveal delay={300}><AccordionItem question="Do you offer installation services?" answer="Yes, we have expert installation teams that ensure your roofing and ceiling systems are installed to the highest standards with warranty." /></Reveal>
             <Reveal delay={400}><AccordionItem question="What materials do you use?" answer="We use high-quality Aluminium, Aluzinc, and Galvanized steel for our roofing sheets and trusses to ensure durability and weather resistance." /></Reveal>
           </div>
        </div>
      </section>

      {/* Revised News / Blog Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-rockster-accent font-bold uppercase tracking-widest text-sm mb-3">Insights</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Latest News & Updates</h3>
                <p className="text-slate-500 mt-4">Stay updated with our latest projects, awards, and industry tips.</p>
              </Reveal>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {NEWS.map((item, i) => (
                <Reveal key={item.id} delay={i * 200} className="h-full">
                    <BlogCard news={item} />
                </Reveal>
             ))}
           </div>

           <div className="mt-12 text-center">
              <Reveal delay={400}>
                <Link to="/news" className="inline-block px-8 py-3 border-2 border-slate-200 rounded-full font-bold text-slate-600 hover:border-rockster-accent hover:text-rockster-accent transition-all hover:bg-white hover:scale-105 active:scale-95">
                    View All News
                </Link>
              </Reveal>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rockster-accent text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to start your project?</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Get a free estimate today. No obligation, just professional advice.</p>
          </Reveal>
          <Reveal delay={400}>
            <Link to="/contact" className="bg-white text-rockster-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 inline-block">
                Contact Us Now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

/* --- Sub Components --- */

const LogoPlaceholder: React.FC<{ name: string, index: number }> = ({ name, index }) => {
    // Generate a pseudo-logo look based on index to vary styles
    const icons = [<Building2 key={1}/>, <Gem key={2}/>, <Landmark key={3}/>, <HardHat key={4}/>];
    const icon = icons[index % icons.length];
    
    return (
        <div className="flex items-center gap-3 text-slate-400 hover:text-rockster-blue transition-colors cursor-default whitespace-nowrap opacity-60 hover:opacity-100 grayscale hover:grayscale-0">
            {index % 3 === 0 && <span className="text-rockster-accent">{icon}</span>}
            <span className={`text-xl md:text-2xl font-bold font-display uppercase tracking-tight ${index % 2 === 0 ? 'italic' : ''}`}>
                {name.replace('Ghana', '').replace('Limited', '').replace('Ltd', '')}
            </span>
        </div>
    )
}

const SolutionCard = ({ title, desc, image, link }: { title: string, desc: string, image: string, link: string }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
      <Link to={link} className="flex items-center gap-2 text-rockster-accent font-bold group-hover:gap-3 transition-all uppercase text-xs tracking-wider">
        Explore <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const BlogCard: React.FC<{ news: NewsItem }> = ({ news }) => (
  <Link to="/news" className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 h-full hover:-translate-y-2">
    <div className="h-56 overflow-hidden relative">
      <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-rockster-blue uppercase tracking-wider shadow-sm">
        {news.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
        <Calendar size={14} />
        <span>{news.date}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rockster-accent transition-colors line-clamp-2">
        {news.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
        {news.excerpt}
      </p>
      <div className="flex items-center text-rockster-accent font-bold text-sm group-hover:gap-2 transition-all">
        Read Article <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  </Link>
);

const TechFeature = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex gap-4 group">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-rockster-accent shrink-0 mt-1 group-hover:bg-rockster-accent group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const StatItem = ({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <div className="transform transition-transform duration-300 hover:rotate-12">{icon}</div>
    <span className="text-4xl font-display font-bold mb-1 block">{number}</span>
    <span className="text-slate-400 text-xs uppercase tracking-widest">{label}</span>
  </div>
);

const ProcessStep = ({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
       <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-100 text-slate-400 flex items-center justify-center font-bold text-lg group-hover:border-rockster-accent group-hover:text-rockster-accent transition-colors shadow-sm z-10 group-hover:scale-110 duration-300">
         {icon}
       </div>
       <div className="w-0.5 h-full bg-slate-200 mt-2 group-last:hidden origin-top group-hover:bg-rockster-accent/30 transition-colors duration-500"></div>
    </div>
    <div className="pb-8">
       <span className="text-xs font-bold text-rockster-accent mb-1 block">STEP {number}</span>
       <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
       <p className="text-slate-600 text-sm leading-relaxed max-w-md">{desc}</p>
    </div>
  </div>
);

const AdvantageCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-2 group h-full">
    <div className="mb-6 bg-rockster-concrete w-16 h-16 rounded-full flex items-center justify-center shadow-inner group-hover:bg-rockster-accent group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, company }: { quote: string, author: string, company: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
    <div className="flex gap-1 text-rockster-accent mb-4">
      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-slate-300 italic mb-6 leading-relaxed">"{quote}"</p>
    <div>
      <h5 className="font-bold text-white">{author}</h5>
      <span className="text-slate-500 text-sm">{company}</span>
    </div>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg bg-slate-50 overflow-hidden group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800 group-hover:text-rockster-accent transition-colors">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-rockster-accent" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Home;