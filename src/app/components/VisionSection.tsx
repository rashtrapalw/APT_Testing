import { motion } from 'motion/react';
import { Eye, Lightbulb, TrendingUp, Trees, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VisionSection() {
  const visionCards = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Building a sustainable transportation ecosystem for a greener India by 2030',
      image: 'https://images.unsplash.com/photo-1770319969068-d51c3854436e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwZW5lcmd5JTIwaW5kaWF8ZW58MXx8fHwxNzc1MTI5Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Lightbulb,
      title: 'Technology',
      description: 'Pioneering AI-driven battery management and autonomous driving capabilities',
      image: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NzUwMzA5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: TrendingUp,
      title: 'Future Trends',
      description: 'Expanding charging infrastructure and introducing autonomous EV fleets',
      image: 'https://images.unsplash.com/photo-1707758283398-7df21adba23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb24lMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NTEyOTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#00C853] to-[#00E5FF]',
    },
  ];

  return (
    <section id="vision" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#E8F5E9] dark:from-[#0A0F1C] dark:to-[#1A1F2E]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[150px]" />
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
            Vision & <span className="text-[#00E5FF]">Technology</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/60 dark:text-white/70 max-w-2xl mx-auto">
            Shaping the future of electric mobility through innovation and sustainability
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {visionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-white/80 backdrop-blur-sm hover:border-[#00C853]/50 transition-all duration-500 shadow-lg"
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-2xl text-[#0A0F1C]">{card.title}</h3>
                  <p className="font-['Inter'] text-[#0A0F1C]/60 leading-relaxed">{card.description}</p>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t ${card.gradient} blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Technology & Nature Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Technology */}
            <div className="p-8 md:p-12 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#00C853] flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-3xl text-[#0A0F1C]">
                Rare Earth-Free <span className="text-[#00C853]">EV Technology</span>
              </h3>
              <p className="font-['Inter'] text-[#0A0F1C]/60 leading-relaxed">
                Our innovative powertrain technology eliminates dependency on rare earth materials, making EVs more 
                sustainable, cost-effective, and accessible for India's growing electric mobility ecosystem.
              </p>
              <ul className="space-y-3">
                {[
                  'Eliminates dependency on rare earth materials',
                  'Reduces cost and supply chain risk',
                  'Improves sustainability for India',
                  'Enables scalable EV adoption',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 font-['Inter'] text-[#0A0F1C]/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Nature Image */}
            <div className="relative h-full min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653513186999-6bb39c656f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjByZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NzUxMjk2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nature and Renewable Energy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Imagination Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#00E5FF]" />
            <span className="font-['Inter'] font-semibold text-[#0A0F1C]">Imagination Drives Innovation</span>
          </div>
          
          <h3 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0A0F1C] max-w-3xl mx-auto">
            Envisioning a world where <span className="text-[#00C853]">every journey</span> contributes to a 
            <span className="text-[#00E5FF]"> healthier planet</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { value: '2030', label: 'Carbon Neutral Target' },
              { value: '1M+', label: 'EVs on Indian Roads' },
              { value: '10K+', label: 'Charging Stations' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#0A0F1C]/10 shadow-lg"
              >
                <div className="font-['Poppins'] font-bold text-4xl text-[#00E5FF] mb-2">{stat.value}</div>
                <div className="font-['Inter'] text-[#0A0F1C]/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}