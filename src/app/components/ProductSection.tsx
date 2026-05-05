import { motion } from 'motion/react';
import { Battery, Gauge, Zap, Shield, Leaf, Cpu, Package, CheckCircle, Settings, Wind } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductSection() {
  const powertrainBenefits = [
    {
      icon: Leaf,
      title: 'Rare Earth-Free Technology',
      description: 'Sustainable and cost-effective',
    },
    {
      icon: Zap,
      title: 'Lower System Cost',
      description: 'Economical pricing for mass adoption',
    },
    {
      icon: Package,
      title: 'Compact Integrated Design',
      description: 'Motor + Controller + Gearbox in one unit',
    },
    {
      icon: TrendingUp,
      title: 'Higher Efficiency & Range',
      description: '94-95% efficiency with extended range',
    },
    {
      icon: Shield,
      title: 'Improved Thermal Reliability',
      description: 'Natural air cooling with stable performance',
    },
    {
      icon: CheckCircle,
      title: 'Supply Chain Stability',
      description: 'Reduced dependency on rare materials',
    },
  ];

  const controllerFeatures = [
    'Vector Field-Oriented Control',
    'PMSM Control Type',
    'Hall Sensor / Resolver Feedback',
    'Ride Modes (3 modes)',
    'Cruise Control',
    'Hill Hold Assist',
    'Parking Assist',
    'CAN + USB Communication',
    'Fault Indicator (LED)',
  ];

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFB] via-white to-[#F8FAFB] dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#0A0F1C]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#00E5FF]/10 dark:bg-[#00E5FF]/20 backdrop-blur-sm border border-[#00E5FF]/20 font-['Inter'] text-sm text-[#00E5FF] mb-4"
          >
            Our Solutions
          </motion.span>
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] dark:text-white mb-4">
            EV Powertrain & <span className="text-[#00C853]">Motor Controller</span> Solutions
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/60 dark:text-white/70 max-w-3xl mx-auto">
            Advanced electric mobility solutions designed for Indian roads and scalable EV adoption
          </p>
        </motion.div>

        {/* Product 1: Integrated EV Powertrain Platform */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Product Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-white/80 backdrop-blur-sm shadow-2xl">
                <ImageWithFallback
                  src="/motor.png"
                  alt="Integrated EV Powertrain"
                  className="w-full h-auto"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00C853]/10 to-transparent" />
              </div>
            </motion.div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0A0F1C] mb-4">
                  Integrated EV <span className="text-[#00C853]">Powertrain Platform</span>
                </h3>
                <p className="font-['Inter'] text-lg text-[#0A0F1C]/70 leading-relaxed">
                  A compact, integrated system combining motor, gearbox, and controller into a single unit. 
                  Built on <span className="font-semibold text-[#00C853]">rare-earth-free technology</span> for 
                  sustainability, cost efficiency, and thermal reliability.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                {powertrainBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#1A1F2E] border border-[#00C853]/10 dark:border-[#00C853]/20 hover:border-[#00C853]/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-sm text-[#0A0F1C] dark:text-white mb-1">{benefit.title}</div>
                        <div className="font-['Inter'] text-xs text-[#0A0F1C]/60 dark:text-white/60">{benefit.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Specifications Table - Powertrain */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-[#00C853]/20 dark:border-[#00C853]/30 bg-white dark:bg-[#1A1F2E] shadow-xl"
          >
            <div className="bg-gradient-to-r from-[#00C853] to-[#00E5FF] p-6">
              <h4 className="font-['Poppins'] font-bold text-2xl text-white">
                Product Specifications
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8FAFB] dark:bg-[#2A2F3E] border-b border-[#00C853]/10 dark:border-[#00C853]/20">
                    <th className="px-6 py-4 text-left font-['Poppins'] font-semibold text-[#0A0F1C] dark:text-white">Specification</th>
                    <th className="px-6 py-4 text-center font-['Poppins'] font-semibold text-[#00C853]">Series 70</th>
                    <th className="px-6 py-4 text-center font-['Poppins'] font-semibold text-[#00E5FF]">Series 85</th>
                  </tr>
                </thead>
                <tbody className="font-['Inter']">
                  {[
                    ['Tyre Size', '12 inch', '12 inch'],
                    ['Nominal Power', '2.5 kW', '4 kW'],
                    ['Peak Power', '5.5 kW', '6.5 kW'],
                    ['Peak Torque', '160 Nm', '200 Nm'],
                    ['Efficiency', '94%', '95%'],
                    ['Weight', '6.5 kg', '7.5 kg'],
                    ['Voltage', '48/60 V', '48/60 V'],
                    ['Protection', 'IP67', 'IP67'],
                    ['Cooling', 'Natural Air', 'Natural Air'],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-[#00C853]/5 hover:bg-[#F8FAFB] transition-colors duration-200">
                      <td className="px-6 py-4 text-[#0A0F1C] font-medium">{row[0]}</td>
                      <td className="px-6 py-4 text-[#0A0F1C]/70 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-[#0A0F1C]/70 text-center">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Features Section - Powertrain */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#00C853]/5 to-[#00E5FF]/5 border border-[#00C853]/10"
          >
            <h4 className="font-['Poppins'] font-semibold text-xl text-[#0A0F1C] mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-[#00C853]" />
              Key Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Integrated Motor + Controller + Gearbox',
                'Compact Wheel-Integrated Design',
                'Natural Air Cooling',
                'Designed for Electric Scooters',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 font-['Inter'] text-[#0A0F1C]/70">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF]" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Product 2: EV Motor Controller */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Product Details */}
            <div className="space-y-8 lg:order-2">
              <div>
                <h3 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0A0F1C] mb-4">
                  EV Motor <span className="text-[#00E5FF]">Controller</span>
                </h3>
                <p className="font-['Inter'] text-lg text-[#0A0F1C]/70 leading-relaxed">
                  High-performance motor controller designed for light electric vehicles with superior efficiency, 
                  thermal stability, and smooth torque delivery. Features advanced vector field-oriented control 
                  for optimal performance.
                </p>
              </div>

              {/* Advanced Features List */}
              <div className="p-6 rounded-2xl bg-white border border-[#00E5FF]/20">
                <h4 className="font-['Poppins'] font-semibold text-lg text-[#0A0F1C] mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00E5FF]" />
                  Advanced Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {controllerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00C853] flex-shrink-0 mt-0.5" />
                      <span className="font-['Inter'] text-sm text-[#0A0F1C]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 sticky top-24"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#0A0F1C]/10 bg-white/80 backdrop-blur-sm shadow-2xl">
                <ImageWithFallback
                  src="/controller.png"
                  alt="EV Motor Controller"
                  className="w-full h-auto"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Specifications Table - Controller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-[#00E5FF]/20 bg-white shadow-xl"
          >
            <div className="bg-gradient-to-r from-[#00E5FF] to-[#00C853] p-6">
              <h4 className="font-['Poppins'] font-bold text-2xl text-white">
                Controller Specifications
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8FAFB] border-b border-[#00E5FF]/10">
                    <th className="px-6 py-4 text-left font-['Poppins'] font-semibold text-[#0A0F1C]">Specification</th>
                    <th className="px-6 py-4 text-center font-['Poppins'] font-semibold text-[#00E5FF]">Variant 1</th>
                    <th className="px-6 py-4 text-center font-['Poppins'] font-semibold text-[#00C853]">Variant 2</th>
                  </tr>
                </thead>
                <tbody className="font-['Inter']">
                  {[
                    ['Power Range', '1kW–4kW', '3kW–7kW'],
                    ['Peak Output Current', '160 Arms', '280 Arms'],
                    ['Rated Output Current', '50 Arms', '90 Arms'],
                    ['Voltage', '48/60/72 V', '48/60/72 V'],
                    ['Dimensions (mm)', '165×109×45', '214×119×45'],
                    ['Temperature Range', '-20°C to +90°C', '-20°C to +90°C'],
                    ['Protection Rating', 'IP67', 'IP67'],
                    ['Control Type', 'PMSM', 'PMSM'],
                    ['Algorithm', 'Vector Field-Oriented Control', 'Vector Field-Oriented Control'],
                    ['Communication', 'CAN, USB', 'CAN, USB'],
                    ['Features', 'Ride Modes, Cruise, Hill Hold', 'Ride Modes, Cruise, Hill Hold'],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-[#00E5FF]/5 hover:bg-[#F8FAFB] transition-colors duration-200">
                      <td className="px-6 py-4 text-[#0A0F1C] font-medium">{row[0]}</td>
                      <td className="px-6 py-4 text-[#0A0F1C]/70 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-[#0A0F1C]/70 text-center">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Application Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#00E5FF]/5 to-[#00C853]/5 border border-[#00E5FF]/10"
          >
            <h4 className="font-['Poppins'] font-semibold text-xl text-[#0A0F1C] mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-[#00E5FF]" />
              Compatible Platforms
            </h4>
            <ul className="grid sm:grid-cols-3 gap-3">
              {[
                'Electric 2-wheelers (L2)',
                'Electric 3-wheelers (L3)',
                'Custom EV Platforms',
              ].map((platform, index) => (
                <li key={index} className="flex items-center gap-2 font-['Inter'] text-[#0A0F1C]/70">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00C853]" />
                  {platform}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Import missing icon
import { TrendingUp } from 'lucide-react';
