'use client'
import { motion } from 'motion/react';
import { Target, Award, Heart, Zap } from 'lucide-react';
import Image from 'next/image';

export function Story() {
  const values = [
    {
      icon: Target,
      title: 'Discipline',
      description: 'Like the ancient Spartans, we approach every financial decision with unwavering discipline and strategic precision.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue excellence in everything we do, from portfolio construction to client service.',
    },
    {
      icon: Heart,
      title: 'Loyalty',
      description: 'Our commitment to our clients is lifelong. We build relationships that span generations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We combine time-tested wisdom with cutting-edge financial technology and strategies.',
    },
  ];

  return (
    <section id="story" className="relative py-32 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm text-primary tracking-[0.3em] uppercase">Our Story</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 max-w-3xl mx-auto">
            Built on the Foundation of <span className="text-primary">Spartan Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SPARTANS Advisors was founded on the principle that financial planning requires the same discipline,
            strategy, and commitment that defined &apos;s greatest warriors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl">From Vision to Victory</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2010, SPARTANS Advisors emerged from a simple belief: families deserve financial guidance
              that combines military-grade discipline with human warmth and understanding.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our founders, veterans of both military service and Wall Street, saw an industry focused on transactions
              rather than transformations. They set out to build something different—a firm where strategy meets soul,
              and where every client receives the focused attention of an elite tactical team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve over 5,000 families across the nation, managing $2.5 billion in assets. But our true
              measure of success isn&apos;t in numbers—it&apos;s in the peace of mind and financial freedom our clients experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
          
                  {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <Target className="w-16 h-16 text-primary" />
                  </div>
                  <h4 className="text-2xl mb-4">Our Mission</h4>
                  <p className="text-muted-foreground">
                    Empower families to achieve financial victory through disciplined planning,
                    strategic execution, and unwavering support.
                  </p> */}

                  <Image
                    src="/vision.jpg"
                    alt="Mummy playing with baby"
                    width={1400}
                    height={2000}
                     />
              
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="mb-3">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
