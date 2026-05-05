import { motion } from 'motion/react';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function InvestorsSection() {
  const growthData = [
    { id: 'y2020', year: '2020', revenue: 0, units: 0 },
    { id: 'y2021', year: '2021', revenue: 5, units: 50 },
    { id: 'y2022', year: '2022', revenue: 25, units: 250 },
    { id: 'y2023', year: '2023', revenue: 80, units: 800 },
    { id: 'y2024', year: '2024', revenue: 200, units: 2000 },
    { id: 'y2025', year: '2025', revenue: 500, units: 5000 },
    { id: 'y2026', year: '2026', revenue: 1200, units: 12000 },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      label: 'Revenue Growth',
      value: '425%',
      subtitle: 'Year-over-Year',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: Users,
      label: 'Market Share',
      value: '8.5%',
      subtitle: 'In Premium EV Segment',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
    {
      icon: Target,
      label: 'Order Book',
      value: '₹450Cr',
      subtitle: 'Pre-orders Secured',
      color: 'from-[#00C853] to-[#00E5FF]',
    },
    {
      icon: DollarSign,
      label: 'Funding Raised',
      value: '$50M',
      subtitle: 'Series A Round',
      color: 'from-[#00E5FF] to-[#00C853]',
    },
  ];

  return (
    <section id="investors" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F8FAFB] dark:bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00C853] rounded-full mix-blend-multiply filter blur-[150px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-[150px]" />
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
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white dark:bg-[#1A1F2E] backdrop-blur-sm border border-[#00C853]/20 dark:border-[#00C853]/30 font-['Inter'] text-sm text-[#00E5FF] mb-4"
          >
            Investment Opportunity
          </motion.span>
          <h2 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-[#0A0F1C] dark:text-white mb-4">
            Growth & <span className="text-[#00C853]">Potential</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#0A0F1C]/70 dark:text-white/70 max-w-2xl mx-auto">
            Driving sustainable growth in India's booming electric vehicle market
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-white backdrop-blur-sm border border-[#00C853]/10 hover:border-[#00C853]/50 transition-all duration-300 shadow-sm"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300`} />
                
                <div className="relative space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-['Poppins'] font-bold text-3xl text-[#0A0F1C] mb-1">
                      {metric.value}
                    </div>
                    <div className="font-['Inter'] text-sm text-[#0A0F1C]/60 mb-1">
                      {metric.label}
                    </div>
                    <div className="font-['Inter'] text-xs text-[#0A0F1C]/40">
                      {metric.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revenue Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-['Poppins'] font-bold text-xl text-[#0A0F1C] mb-2">
                Revenue Projection
              </h3>
              <p className="font-['Inter'] text-sm text-[#0A0F1C]/60">
                In Crores (₹Cr)
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={growthData} key="revenue-chart">
                <defs>
                  <linearGradient id="revenueGradientChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C853" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#00C853" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(10,15,28,0.1)" />
                <XAxis 
                  dataKey="year" 
                  stroke="rgba(10,15,28,0.5)"
                  style={{ fontSize: '12px', fontFamily: 'Inter' }}
                />
                <YAxis 
                  stroke="rgba(10,15,28,0.5)"
                  style={{ fontSize: '12px', fontFamily: 'Inter' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0,200,83,0.2)',
                    borderRadius: '12px',
                    fontFamily: 'Inter',
                  }}
                  labelStyle={{ color: '#0A0F1C' }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#00C853"
                  strokeWidth={3}
                  fill="url(#revenueGradientChart)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Units Sold Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-['Poppins'] font-bold text-xl text-[#0A0F1C] mb-2">
                Units Sold Forecast
              </h3>
              <p className="font-['Inter'] text-sm text-[#0A0F1C]/60">
                Annual Vehicle Sales
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData} key="units-chart">
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#00C853" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(10,15,28,0.1)" />
                <XAxis 
                  dataKey="year" 
                  stroke="rgba(10,15,28,0.5)"
                  style={{ fontSize: '12px', fontFamily: 'Inter' }}
                />
                <YAxis 
                  stroke="rgba(10,15,28,0.5)"
                  style={{ fontSize: '12px', fontFamily: 'Inter' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0,200,83,0.2)',
                    borderRadius: '12px',
                    fontFamily: 'Inter',
                  }}
                  labelStyle={{ color: '#0A0F1C' }}
                />
                <Line
                  type="monotone"
                  dataKey="units"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: '#00E5FF', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-white backdrop-blur-sm border border-[#00C853]/10 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-['Poppins'] font-bold text-3xl text-[#0A0F1C]">
                Market <span className="text-[#00E5FF]">Opportunity</span>
              </h3>
              <p className="font-['Inter'] text-[#0A0F1C]/70 leading-relaxed">
                India's EV market is projected to grow at 49% CAGR, reaching $152.21 billion by 2030. 
                VoltDrive is strategically positioned to capture significant market share in the premium segment.
              </p>
              <ul className="space-y-3">
                {[
                  'Government push for 30% EV adoption by 2030',
                  'Growing charging infrastructure across India',
                  'Increasing consumer awareness and acceptance',
                  'Favorable policy support and subsidies',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter'] text-[#0A0F1C]/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#00C853]/5 border border-[#00C853]/10">
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/60 mb-2">Total Addressable Market</div>
                <div className="font-['Poppins'] font-bold text-4xl text-[#00C853]">$152B</div>
                <div className="font-['Inter'] text-xs text-[#0A0F1C]/40">By 2030</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#00E5FF]/5 border border-[#00E5FF]/10">
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/60 mb-2">Expected CAGR</div>
                <div className="font-['Poppins'] font-bold text-4xl text-[#00E5FF]">49%</div>
                <div className="font-['Inter'] text-xs text-[#0A0F1C]/40">2024-2030</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#00C853]/5 border border-[#00C853]/10">
                <div className="font-['Inter'] text-sm text-[#0A0F1C]/60 mb-2">Our Target Share</div>
                <div className="font-['Poppins'] font-bold text-4xl text-[#00C853]">12%</div>
                <div className="font-['Inter'] text-xs text-[#0A0F1C]/40">By 2027</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}