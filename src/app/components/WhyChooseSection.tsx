import { motion } from 'motion/react';
import { DollarSign, Wrench, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';

export function WhyChooseSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: '10-15% Extended Range',
      description: 'High-efficiency control delivers superior range per charge',
      stats: '10-15%',
      statsLabel: 'Better Range',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Zap,
      title: 'Compact Integration',
      description: 'All-in-one motor, controller, and gearbox design saves space',
      stats: '3-in-1',
      statsLabel: 'Integration',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: DollarSign,
      title: 'Lower Cost Architecture',
      description: 'Rare earth-free technology reduces system and operational costs',
      stats: '30%',
      statsLabel: 'Cost Savings',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Shield,
      title: 'High Durability',
      description: 'Low-heating design with natural air cooling extends lifespan',
      stats: 'IP67',
      statsLabel: 'Protection',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: Wrench,
      title: 'Made for Indian Roads',
      description: 'Designed and tested for Indian driving conditions and climate',
      stats: '100%',
      statsLabel: 'India Ready',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Leaf,
      title: 'Sustainable Technology',
      description: 'Eco-friendly rare earth-free motors for cleaner mobility',
      stats: '0',
      statsLabel: 'Rare Earths',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFB] via-white to-[#F8FAFB] dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C853] rounded-full mix-blend-multiply filter blur-[200px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] dark:text-white mb-4">
            Why Choose <span className="text-[#00C853]">Aproposdrive</span>?
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/60 dark:text-white/70 max-w-2xl mx-auto">
            Experience cutting-edge EV technology designed for India's electric future
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 hover:border-[#00C853]/50 transition-all duration-500 overflow-hidden shadow-lg">
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${benefit.color} blur-2xl transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-['Poppins'] font-bold text-xl text-[#0A0F1C]">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Inter'] text-[#0A0F1C]/60 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="pt-4 border-t border-[#0A0F1C]/10">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="font-['Poppins'] font-bold text-2xl text-[#00E5FF]">
                            {benefit.stats}
                          </div>
                          <div className="font-['Inter'] text-xs text-[#0A0F1C]/50">
                            {benefit.statsLabel}
                          </div>
                        </div>
                        {/* Arrow */}
                        <motion.div
                          className="w-8 h-8 rounded-full bg-[#0A0F1C]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="w-4 h-4 text-[#00C853]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-[#0A0F1C]/10 shadow-xl"
        >
          <h3 className="font-['Poppins'] font-bold text-2xl md:text-3xl text-[#0A0F1C] text-center mb-8">
            VoltDrive vs Traditional <span className="text-[#00C853]">Vehicles</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Fuel Cost',
                ev: '₹1.5/km',
                ice: '₹6/km',
                savings: '75% Less',
              },
              {
                label: 'Maintenance',
                ev: '₹8k/year',
                ice: '₹20k/year',
                savings: '60% Less',
              },
              {
                label: 'CO₂ Emissions',
                ev: '0g/km',
                ice: '120g/km',
                savings: '100% Clean',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 border border-[#0A0F1C]/10 text-center space-y-4 shadow-lg"
              >
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/50 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="font-['Poppins'] font-bold text-xl text-[#00C853]">
                      {item.ev}
                    </div>
                    <div className="font-['Inter'] text-xs text-[#0A0F1C]/40">VoltDrive</div>
                  </div>
                  <div className="text-[#0A0F1C]/30">vs</div>
                  <div>
                    <div className="font-['Poppins'] font-bold text-xl text-[#0A0F1C]/30 line-through">
                      {item.ice}
                    </div>
                    <div className="font-['Inter'] text-xs text-[#0A0F1C]/30">Traditional</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[#00C853]/20 border border-[#00C853]/30">
                  <span className="font-['Inter'] text-sm font-semibold text-[#00C853]">
                    {item.savings}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}