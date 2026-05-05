import { motion } from 'motion/react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

export function JourneySection() {
  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'VoltDrive founded with a vision to revolutionize Indian EV market',
      icon: Users,
      stats: '10 Team Members',
    },
    {
      year: '2021',
      title: 'R&D Phase',
      description: 'Developed proprietary battery management system and motor technology',
      icon: Award,
      stats: '3 Patents Filed',
    },
    {
      year: '2022',
      title: 'Prototype Testing',
      description: 'Successful completion of 100,000 km real-world testing across India',
      icon: MapPin,
      stats: '100K km Tested',
    },
    {
      year: '2023',
      title: 'Manufacturing',
      description: 'Established state-of-the-art manufacturing facility in Gujarat',
      icon: Award,
      stats: '50K Units/Year',
    },
    {
      year: '2024',
      title: 'Market Launch',
      description: 'VoltDrive X1 launched with overwhelming response from customers',
      icon: Calendar,
      stats: '500+ Delivered',
    },
  ];

  return (
    <section id="journey" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E9] to-[#F8FAFB] dark:from-[#1A1F2E] dark:to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[150px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] dark:text-white mb-4">
            Our <span className="text-[#00E5FF]">Journey</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/60 dark:text-white/70 max-w-2xl mx-auto">
            From concept to reality - Building India's future of electric mobility
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C853] via-[#00E5FF] to-[#00C853]" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="inline-block w-full md:max-w-md"
                      >
                        <div className="p-6 md:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 hover:border-[#00C853]/50 transition-all duration-500 shadow-lg">
                          {/* Year Badge */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] mb-4`}>
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="font-['Poppins'] font-bold text-white">
                              {milestone.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-['Poppins'] font-bold text-2xl text-[#0A0F1C] mb-3">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="font-['Inter'] text-[#0A0F1C]/60 leading-relaxed mb-4">
                            {milestone.description}
                          </p>

                          {/* Stats */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0F1C]/10">
                            <span className="font-['Inter'] text-sm font-semibold text-[#00E5FF]">
                              {milestone.stats}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                        className="relative"
                      >
                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] blur-xl opacity-40" />
                        
                        {/* Icon Container */}
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center ring-4 ring-white shadow-xl">
                          <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-['Poppins'] font-bold text-3xl text-[#0A0F1C] mb-4">
              Real-World <span className="text-[#00C853]">Testing</span>
            </h3>
            <p className="font-['Inter'] text-[#0A0F1C]/60">
              Watch our vehicles conquer diverse Indian terrains
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-white/80 backdrop-blur-sm shadow-2xl">
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-[#E8F5E9] to-[#E0F7FA] flex items-center justify-center">
              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center shadow-2xl shadow-[#00C853]/30 group"
              >
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>

              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 rounded-full border-2 border-[#00C853]"
                />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute w-40 h-40 rounded-full border-2 border-[#00E5FF]"
                />
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(10,15,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,28,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Video Info */}
            <div className="p-6 flex items-center justify-between border-t border-[#0A0F1C]/10">
              <div>
                <div className="font-['Poppins'] font-semibold text-[#0A0F1C] mb-1">
                  Testing Across India
                </div>
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/50">
                  From Himalayan heights to coastal roads
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#0A0F1C]/50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-['Inter'] text-sm">2.4M views</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
