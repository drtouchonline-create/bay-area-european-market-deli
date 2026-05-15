/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  TrendingUp,
  Zap,
  ArrowRight,
  Store,
  ShieldCheck,
  Star,
  MapPin,
  MessageSquare,
  Cpu,
  Globe,
  BarChart3,
  CheckCircle,
  Phone,
  ShoppingBag,
} from 'lucide-react';

const COLORS = {
  navy: '#002147',
  gold: '#D4AF37',
  paper: '#FDFCF7',
  white: '#FFFFFF',
};

const EMAIL = 'njasik@icloud.com';

// ─── HEADER ───────────────────────────────────────────────────────────────────

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: `${COLORS.paper}F2`, borderColor: `${COLORS.gold}25` }}>
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border flex items-center justify-center rounded-sm" style={{ borderColor: `${COLORS.gold}60` }}>
          <Store className="w-4 h-4" style={{ color: COLORS.gold }} />
        </div>
        <span className="font-serif text-xl font-bold" style={{ color: COLORS.navy }}>
          Market<span className="italic font-normal" style={{ color: COLORS.gold }}>Growth</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden md:flex items-center gap-2 text-xs text-gray-400 font-display uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          2 slots open in Concord
        </span>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${EMAIL}`}
          className="px-5 py-2.5 text-xs font-display font-bold uppercase tracking-widest text-white rounded-sm"
          style={{ backgroundColor: COLORS.navy }}
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  </header>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center pt-20" style={{ backgroundColor: COLORS.paper }}>
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
          alt="European Market"
          className="w-full h-full object-cover opacity-[0.08] grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${COLORS.paper} 55%, ${COLORS.paper}80 100%)` }} />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.gold}50, transparent)` }} />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border"
            style={{ borderColor: `${COLORS.gold}35`, backgroundColor: `${COLORS.gold}09` }}
          >
            <MapPin className="w-3.5 h-3.5" style={{ color: COLORS.gold }} />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: COLORS.gold }}>
              Bay Area European Market &amp; Deli &mdash; Concord, CA
            </span>
          </motion.div>

          <h1 className="font-serif font-bold leading-[0.92] mb-10 tracking-tighter" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: COLORS.navy }}>
            Your market deserves{' '}
            <span className="italic font-normal" style={{ color: COLORS.gold }}>a full house.</span>
          </h1>

          <p className="text-xl text-gray-500 mb-6 leading-relaxed font-light max-w-2xl border-l-2 pl-8" style={{ borderColor: `${COLORS.gold}45` }}>
            You have the best European products in Concord. But if customers can&apos;t find you online
            in 10 seconds &mdash; they&apos;re buying from Trader Joe&apos;s.
          </p>
          <p className="text-sm text-gray-400 mb-14 pl-8 font-display uppercase tracking-widest">
            No agencies. No SaaS fees. AI-powered growth &mdash; built for you, by your neighbor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start mb-20">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: `0 20px 40px -12px ${COLORS.gold}40` }}
              whileTap={{ scale: 0.97 }}
              href="#plans"
              className="group px-10 py-5 font-display font-bold uppercase tracking-widest text-sm text-white rounded-sm flex items-center gap-3 relative overflow-hidden"
              style={{ backgroundColor: COLORS.navy }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${COLORS.gold}20, transparent)` }} />
              See the Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              href={`mailto:${EMAIL}`}
              className="px-10 py-5 font-display font-bold uppercase tracking-widest text-sm rounded-sm flex items-center gap-3 border"
              style={{ borderColor: `${COLORS.gold}40`, color: COLORS.navy }}
            >
              <Phone className="w-4 h-4" />
              Talk First, No Commitment
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t" style={{ borderColor: `${COLORS.gold}15` }}>
            {[
              { label: 'Built in 1 Day', sub: 'This exact page, with AI' },
              { label: '$0 to Start', sub: 'Risk-free pilot available' },
              { label: 'Zero Server Bills', sub: 'Free Vercel hosting' },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-serif text-2xl font-bold" style={{ color: COLORS.navy }}>{item.label}</div>
                <div className="text-xs text-gray-400 font-display uppercase tracking-widest mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

const Problem = () => (
  <section className="py-36 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: COLORS.gold }}>
            The Real Problem
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: COLORS.navy }}>
            Loyalty won&apos;t save you<br />
            from being{' '}
            <span className="italic font-normal">invisible.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
            When someone in Concord searches &ldquo;European deli near me&rdquo; &mdash; do you show up?
            If not, your regulars&apos; kids discover Trader Joe&apos;s first. And they don&apos;t come back.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            The solution isn&apos;t a $10,000 agency site. It&apos;s a fast, local digital strategy
            executed with AI &mdash; compressing months of work into days.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: <Globe className="w-5 h-5" />,
              title: "You're invisible on Google",
              body: "No optimized listing = no new customers. 76% of local searches result in a store visit within 24 hours.",
            },
            {
              icon: <ShoppingBag className="w-5 h-5" />,
              title: "No online ordering = lost sales",
              body: "Busy families order ahead. No Express Pickup means they go where convenience wins.",
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Zero reviews = zero trust",
              body: "New Concord residents choose by Google stars. Your quality speaks for itself — if they can find you.",
            },
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "Competitors run targeted ads",
              body: "Local chains spend $10/day on geo-targeted ads. We beat them with smarter positioning for less.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-sm border transition-colors"
              style={{ borderColor: `${COLORS.gold}15`, backgroundColor: `${COLORS.paper}80` }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${COLORS.gold}15`, color: COLORS.gold }}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-serif text-base font-bold mb-1" style={{ color: COLORS.navy }}>{item.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── VIBECODING ───────────────────────────────────────────────────────────────

const VibecodeSection = () => (
  <section className="py-36 relative overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.gold}30, transparent)` }} />
    <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.gold}30, transparent)` }} />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-8"
          style={{ borderColor: `${COLORS.gold}25` }}
        >
          <Cpu className="w-4 h-4" style={{ color: COLORS.gold }} />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: COLORS.gold }}>
            My Superpower: AI-Powered Development (Vibecoding)
          </span>
        </motion.div>

        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          What used to take 3 months,<br />I deliver in{' '}
          <span className="italic font-normal" style={{ color: COLORS.gold }}>3 days.</span>
        </h2>

        <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          I work with Claude Code &mdash; Anthropic&apos;s AI development tool &mdash; to build, iterate, and launch
          digital products at a speed no agency can match. Zero bloat. Zero middlemen. Pure results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            step: '01',
            icon: <MessageSquare className="w-6 h-6" />,
            title: 'You Describe the Problem',
            body: "Tell me what's not working. No tech jargon needed. \"Customers can't find my specialty cheeses\" is enough.",
          },
          {
            step: '02',
            icon: <Cpu className="w-6 h-6" />,
            title: 'AI Builds It, I Direct It',
            body: "Using Claude Code, I translate your business needs into live features — overnight, not in 6 weeks.",
          },
          {
            step: '03',
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'You See Real Results',
            body: "More Google visibility, Express Pickup orders, 5-star reviews. Measured, reported, optimized.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-10 rounded-sm border transition-colors"
            style={{ borderColor: `rgba(255,255,255,0.08)` }}
          >
            <div className="absolute top-6 right-6 font-display text-5xl font-bold text-white/[0.06] leading-none select-none">
              {item.step}
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: `${COLORS.gold}18`, color: COLORS.gold }}>
              {item.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center p-12 rounded-sm border"
        style={{ borderColor: `${COLORS.gold}20`, backgroundColor: `${COLORS.gold}06` }}
      >
        <Zap className="w-7 h-7 mx-auto mb-6" style={{ color: COLORS.gold }} />
        <p className="font-serif text-2xl italic text-white mb-5 leading-snug">
          &ldquo;This landing page was built in one afternoon. A traditional agency charges $3,000&ndash;$8,000.
          My price: a conversation over coffee.&rdquo;
        </p>
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: `${COLORS.gold}90` }}>
          Njasik &mdash; Your Concord Neighbor &amp; Growth Partner
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── PLANS ────────────────────────────────────────────────────────────────────

const Plans = () => {
  const plans = [
    {
      badge: 'Start Here',
      title: 'Risk-Free Pilot',
      description:
        "I build an Express Pickup page for your 5 best-selling items. Customers order via WhatsApp. Zero cost, zero risk.",
      cost: '$0',
      costSub: 'No commitment. No credit card.',
      features: [
        'Express Pickup for 5 products',
        'WhatsApp order integration',
        'Mobile-optimized product page',
        'Google Business Profile audit',
      ],
      cta: 'Start the Pilot',
      highlight: false,
      delay: 0.1,
    },
    {
      badge: 'Most Popular',
      title: 'Full Growth System',
      description:
        "Complete digital presence: product catalog, Google review automation, stock alerts, and local SEO. Own Concord search.",
      cost: '$500',
      costSub: 'One-time setup. No recurring fees.',
      features: [
        'Full digital product catalog',
        'Automated Google review requests',
        'Weekly inventory updates',
        'Local SEO optimization',
        'Google Business Profile setup',
        '30-day support included',
      ],
      cta: 'Build My Growth System',
      highlight: true,
      delay: 0.2,
    },
    {
      badge: 'Ongoing Partner',
      title: 'Peace of Mind Retainer',
      description:
        "I handle everything monthly: competitor analysis, social content, ads, and revenue reporting. You focus on the market.",
      cost: '$300',
      costSub: 'Per month. 30-day cancellation.',
      features: [
        'Everything in Growth System',
        'Monthly competitor price report',
        'Social media content (3x/week)',
        'Google Ads management',
        'Monthly revenue report call',
      ],
      cta: "Let's Partner Up",
      highlight: false,
      delay: 0.3,
    },
  ];

  return (
    <section id="plans" className="py-36 relative" style={{ backgroundColor: COLORS.paper }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: COLORS.gold }}>
          Investment Options
        </span>
        <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6" style={{ color: COLORS.navy }}>
          Choose your starting point.
        </h2>
        <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
          All built with AI &mdash; agency-quality work at a fraction of the price.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 relative z-10 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: plan.delay, duration: 0.7 }}
            className="rounded-sm overflow-hidden"
            style={{
              backgroundColor: plan.highlight ? COLORS.navy : COLORS.white,
              border: plan.highlight ? 'none' : `1px solid ${COLORS.gold}18`,
              boxShadow: plan.highlight ? '0 25px 60px -15px rgba(0,33,71,0.35)' : '0 2px 20px -8px rgba(0,0,0,0.08)',
              transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
            }}
          >
            {plan.highlight && (
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
            )}

            <div className="p-10">
              <div
                className="inline-flex px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest mb-8"
                style={{
                  backgroundColor: plan.highlight ? `${COLORS.gold}22` : `${COLORS.navy}09`,
                  color: plan.highlight ? COLORS.gold : COLORS.navy,
                }}
              >
                {plan.badge}
              </div>

              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: plan.highlight ? COLORS.white : COLORS.navy }}>
                {plan.title}
              </h3>

              <p className="text-sm font-light leading-relaxed mb-10 min-h-[72px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.55)' : '#9CA3AF' }}>
                {plan.description}
              </p>

              <div className="mb-10">
                <span className="font-serif text-5xl font-bold" style={{ color: plan.highlight ? COLORS.gold : COLORS.navy }}>
                  {plan.cost}
                </span>
                <p className="text-[10px] mt-2 font-display uppercase tracking-widest font-bold" style={{ color: plan.highlight ? `${COLORS.gold}70` : COLORS.gold }}>
                  {plan.costSub}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.highlight ? COLORS.gold : COLORS.navy }} />
                    <span style={{ color: plan.highlight ? 'rgba(255,255,255,0.65)' : '#6B7280' }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Interested in: ${plan.title}`)}`}
                className="w-full py-5 font-display font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 rounded-sm"
                style={{
                  backgroundColor: plan.highlight ? COLORS.gold : COLORS.navy,
                  color: plan.highlight ? COLORS.navy : COLORS.white,
                }}
              >
                {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 text-sm font-display uppercase tracking-widest text-gray-400"
      >
        <span style={{ color: '#F87171' }}>&#9679;</span>&nbsp; Only 2 Concord client slots available this month. Pilots are first-come, first-served.
      </motion.p>
    </section>
  );
};

// ─── WHAT YOU GET ─────────────────────────────────────────────────────────────

const WhatYouGet = () => (
  <section className="py-36 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: COLORS.gold }}>
          Your Digital Future
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: COLORS.navy }}>
          Here&apos;s what we build together.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Globe className="w-5 h-5" />,
            title: 'Google Dominance',
            body: 'Optimized Google Business Profile. When locals search "European deli Concord" — you\'re first.',
          },
          {
            icon: <ShoppingBag className="w-5 h-5" />,
            title: 'Express Pickup System',
            body: 'Customers order your hero items via WhatsApp. Ready when they arrive. Zero queue frustration.',
          },
          {
            icon: <Star className="w-5 h-5" />,
            title: '50 Reviews in 30 Days',
            body: 'QR code on your receipt triggers a Google review request. Automated, effortless social proof.',
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: 'Product Catalog',
            body: 'Beautiful online catalog with your specialty imports. Customers browse before they visit.',
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'Weekly Specials',
            body: 'SMS or email list. Send a weekly special — drive foot traffic every Thursday like clockwork.',
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: 'Monthly Revenue Report',
            body: 'See exactly what digital brings in: which products trend, busiest days, what to stock more of.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="p-8 border rounded-sm hover:shadow-lg transition-all"
            style={{ borderColor: `${COLORS.gold}15` }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${COLORS.gold}12`, color: COLORS.gold }}>
              {item.icon}
            </div>
            <h4 className="font-serif text-lg font-bold mb-3" style={{ color: COLORS.navy }}>{item.title}</h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CTA = () => (
  <section className="py-40 relative overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-px h-16 mx-auto mb-12" style={{ backgroundColor: `${COLORS.gold}40` }} />

        <h2 className="font-serif font-bold text-white mb-8 leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          Ready to fill{' '}
          <span className="italic font-normal" style={{ color: COLORS.gold }}>your store?</span>
        </h2>

        <p className="text-white/50 text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed">
          The pilot costs nothing. A 15-minute conversation is all it takes. I&apos;ll show you exactly
          what&apos;s possible for the Bay Area European Market &amp; Deli.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: `0 20px 50px -12px ${COLORS.gold}50` }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${EMAIL}?subject=Let's Talk — Bay Area European Market Digital Growth`}
          className="inline-flex px-14 py-6 font-display font-bold uppercase tracking-widest text-sm rounded-sm items-center gap-3"
          style={{ backgroundColor: COLORS.gold, color: COLORS.navy }}
        >
          Email Me Directly <ArrowRight className="w-4 h-4" />
        </motion.a>

        <p className="mt-10 font-display text-[10px] uppercase tracking-[0.4em] text-white/25">
          {EMAIL} &mdash; I reply within 2 hours
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="py-14 border-t" style={{ backgroundColor: COLORS.paper, borderColor: `${COLORS.gold}15` }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <Store className="w-5 h-5" style={{ color: COLORS.gold }} />
        <span className="font-serif text-lg font-bold" style={{ color: COLORS.navy }}>
          Market<span className="italic font-normal" style={{ color: COLORS.gold }}>Growth</span>
        </span>
      </div>
      <p className="text-[10px] text-gray-400 font-display uppercase tracking-[0.4em]">
        &copy; {new Date().getFullYear()} &mdash; Built with AI &mdash; Concord, CA
      </p>
      <a href={`mailto:${EMAIL}`} className="font-serif italic text-lg transition-colors hover:opacity-70" style={{ color: COLORS.navy }}>
        {EMAIL}
      </a>
    </div>
  </footer>
);

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Problem />
        <VibecodeSection />
        <Plans />
        <WhatYouGet />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
