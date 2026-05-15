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

// ─── DARK WARM PALETTE ────────────────────────────────────────────────────────
// dark    = near-black warm charcoal (replaces white sections)
// darkWarm = slightly lighter warm dark (replaces beige/paper sections)
// navy    = deep blue accent (kept as contrast panels)
// gold    = primary accent
// cream   = warm off-white for headings on dark
const C = {
  dark:     '#0D0B08',
  darkWarm: '#181410',
  navy:     '#002147',
  gold:     '#D4AF37',
  goldDim:  '#9A7E25',
  cream:    '#EDE3D4',
  muted:    '#7A6F64',
};

const EMAIL = 'njasik@icloud.com';

// ─── HEADER ───────────────────────────────────────────────────────────────────

const Header = () => (
  <header
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
    style={{ backgroundColor: `${C.darkWarm}EE`, borderColor: `${C.gold}20` }}
  >
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border flex items-center justify-center rounded-sm" style={{ borderColor: `${C.gold}50` }}>
          <Store className="w-4 h-4" style={{ color: C.gold }} />
        </div>
        <span className="font-serif text-xl font-bold" style={{ color: C.cream }}>
          Market<span className="italic font-normal" style={{ color: C.gold }}>Growth</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden md:flex items-center gap-2 text-xs font-display uppercase tracking-widest" style={{ color: C.muted }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          2 slots open in Concord
        </span>
        <motion.a
          whileHover={{ scale: 1.04, backgroundColor: C.gold }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${EMAIL}`}
          className="px-5 py-2.5 text-xs font-display font-bold uppercase tracking-widest rounded-sm transition-colors"
          style={{ backgroundColor: `${C.gold}22`, color: C.gold, border: `1px solid ${C.gold}40` }}
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
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center pt-20" style={{ backgroundColor: C.darkWarm }}>
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
          alt="European Market"
          className="w-full h-full object-cover opacity-[0.12] grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.darkWarm} 50%, ${C.darkWarm}90 100%)` }} />
      </motion.div>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}60, transparent)` }} />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${C.gold}06 0%, transparent 70%)` }} />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border"
            style={{ borderColor: `${C.gold}30`, backgroundColor: `${C.gold}0A` }}
          >
            <MapPin className="w-3.5 h-3.5" style={{ color: C.gold }} />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: C.gold }}>
              Bay Area European Market &amp; Deli &mdash; Concord, CA
            </span>
          </motion.div>

          <h1
            className="font-serif font-bold leading-[0.92] mb-10 tracking-tighter"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: C.cream }}
          >
            Your market deserves{' '}
            <span className="italic font-normal" style={{ color: C.gold }}>a full house.</span>
          </h1>

          <p className="text-xl mb-6 leading-relaxed font-light max-w-2xl border-l-2 pl-8" style={{ color: C.muted, borderColor: `${C.gold}40` }}>
            You have the best European products in Concord. But if customers can&apos;t find you online
            in 10 seconds &mdash; they&apos;re buying from Trader Joe&apos;s.
          </p>
          <p className="text-sm mb-14 pl-8 font-display uppercase tracking-widest" style={{ color: `${C.muted}AA` }}>
            No agencies. No SaaS fees. AI-powered growth &mdash; built for you, by your neighbor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start mb-20">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: `0 20px 40px -12px ${C.gold}50` }}
              whileTap={{ scale: 0.97 }}
              href="#plans"
              className="group px-10 py-5 font-display font-bold uppercase tracking-widest text-sm rounded-sm flex items-center gap-3 relative overflow-hidden"
              style={{ backgroundColor: C.gold, color: C.dark }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(255,255,255,0.12)' }} />
              See the Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, borderColor: C.gold }}
              href={`mailto:${EMAIL}`}
              className="px-10 py-5 font-display font-bold uppercase tracking-widest text-sm rounded-sm flex items-center gap-3 border transition-colors"
              style={{ borderColor: `${C.gold}30`, color: C.cream }}
            >
              <Phone className="w-4 h-4" />
              Talk First, No Commitment
            </motion.a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t" style={{ borderColor: `${C.gold}12` }}>
            {[
              { label: 'Built in 1 Day', sub: 'This exact page, with AI' },
              { label: '$0 to Start', sub: 'Risk-free pilot available' },
              { label: 'Zero Server Bills', sub: 'Free Vercel hosting' },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-serif text-2xl font-bold" style={{ color: C.cream }}>{item.label}</div>
                <div className="text-xs font-display uppercase tracking-widest mt-1" style={{ color: C.muted }}>{item.sub}</div>
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
  <section className="py-36" style={{ backgroundColor: C.dark }}>
    <div className="max-w-7xl mx-auto px-6">

      {/* Emotional hook */}
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: C.gold }}>
            What is happening right now
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: C.cream }}>
            Someone in Concord just searched<br />
            <span className="italic font-normal" style={{ color: C.gold }}>&ldquo;European food near me.&rdquo;</span><br />
            They didn&apos;t find you.
          </h2>
          <p className="text-xl font-light leading-relaxed" style={{ color: C.muted }}>
            Your regulars know where you are. But new families moving into Concord, young people,
            anyone who doesn&apos;t already know you &mdash; they search online first.
            If you&apos;re not there, you don&apos;t exist for them.
          </p>
        </motion.div>
      </div>

      {/* Competitor comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 mb-24"
      >
        {/* Them */}
        <div className="p-8 rounded-sm border" style={{ borderColor: 'rgba(239,68,68,0.2)', backgroundColor: 'rgba(239,68,68,0.04)' }}>
          <p className="font-display text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(239,68,68,0.7)' }}>
            Trader Joe&apos;s &amp; Whole Foods — right now
          </p>
          <ul className="space-y-4">
            {[
              'Website with full product catalog',
              'Online ordering + in-store pickup',
              'Hundreds of Google reviews',
              'Shows up instantly for any local search',
              'Social media updated daily',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-light" style={{ color: C.muted }}>
                <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]" style={{ backgroundColor: 'rgba(239,68,68,0.15)', color: '#EF4444' }}>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* You */}
        <div className="p-8 rounded-sm border" style={{ borderColor: `${C.gold}25`, backgroundColor: `${C.gold}05` }}>
          <p className="font-display text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: `${C.gold}90` }}>
            Bay Area European Market — after we work together
          </p>
          <ul className="space-y-4">
            {[
              'Your own page — products, prices, photos',
              'WhatsApp ordering — customers pick up ready orders',
              'QR code on your counter drives new reviews',
              'A real URL you can share anywhere',
              'Social captions ready to post every week',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-light" style={{ color: C.muted }}>
                <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]" style={{ backgroundColor: `${C.gold}20`, color: C.gold }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* What they have that you don't */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 rounded-sm border text-center max-w-3xl mx-auto"
        style={{ borderColor: `${C.gold}18`, backgroundColor: C.darkWarm }}
      >
        <p className="font-serif text-2xl mb-3" style={{ color: C.cream }}>
          The big chains don&apos;t have better products than you.
        </p>
        <p className="text-lg font-light" style={{ color: C.muted }}>
          They just made it easier to find them, order from them, and trust them online.
          That&apos;s the only advantage we need to take away.
        </p>
      </motion.div>

    </div>
  </section>
);

// ─── VIBECODING ───────────────────────────────────────────────────────────────

const VibecodeSection = () => (
  <section className="py-36 relative overflow-hidden" style={{ backgroundColor: C.navy }}>
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} />
    <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-8"
          style={{ borderColor: `${C.gold}30` }}
        >
          <Cpu className="w-4 h-4" style={{ color: C.gold }} />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: C.gold }}>
            My Superpower: AI-Powered Development (Vibecoding)
          </span>
        </motion.div>

        <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight" style={{ color: C.cream }}>
          What used to take 3 months,<br />I deliver in{' '}
          <span className="italic font-normal" style={{ color: C.gold }}>3 days.</span>
        </h2>

        <p className="text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ color: `${C.cream}60` }}>
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
            className="relative p-10 rounded-sm border"
            style={{ borderColor: 'rgba(255,255,255,0.07)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div className="absolute top-6 right-6 font-display text-5xl font-bold leading-none select-none" style={{ color: `${C.gold}10` }}>
              {item.step}
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: `${C.gold}18`, color: C.gold }}>
              {item.icon}
            </div>
            <h3 className="font-serif text-xl font-bold mb-4" style={{ color: C.cream }}>{item.title}</h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: `${C.cream}50` }}>{item.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center p-12 rounded-sm border"
        style={{ borderColor: `${C.gold}25`, backgroundColor: `${C.gold}07` }}
      >
        <Zap className="w-7 h-7 mx-auto mb-6" style={{ color: C.gold }} />
        <p className="font-serif text-2xl italic mb-5 leading-snug" style={{ color: C.cream }}>
          &ldquo;This landing page was built in one afternoon. A traditional agency charges $3,000&ndash;$8,000.
          My price: a conversation over coffee.&rdquo;
        </p>
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: `${C.gold}80` }}>
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
      badge: 'Zero Risk — Start Here',
      title: 'Express Pickup Pilot',
      description: "I build one page for your 5 top products with a WhatsApp order button. You send me the product names and photos — the page goes live in 48 hours.",
      cost: '$0',
      costSub: 'No contract. No card. You provide: 5 product names + photos.',
      features: [
        '1 page — 5 products with photo, name, price',
        'WhatsApp "Order Now" button per product',
        'Live on a real URL in 48 hours',
        'Works on any phone, no app needed',
        'You keep the page forever — even if you don\'t upgrade',
      ],
      cta: 'Start the Free Pilot',
      highlight: false,
      delay: 0.1,
    },
    {
      badge: 'Most Popular',
      title: 'Your Digital Storefront',
      description: "A complete website for the market — built in 7 days. Every item below is a real, finished deliverable. Nothing vague.",
      cost: '$899',
      costSub: 'One-time payment. No monthly fees. No hidden costs.',
      features: [
        'Up to 20 products — photo, name, price, description',
        '"This Week\'s Specials" page I update for you',
        'Google review page with printable QR code',
        'SEO setup — title, description, Google-ready',
        'Google Business Profile text written by me (you click publish)',
        '12 ready-to-copy Instagram & Facebook captions',
        'Hosted free on Vercel — $0/month server cost',
      ],
      cta: 'Build My Storefront',
      highlight: true,
      delay: 0.2,
    },
    {
      badge: 'Monthly Support',
      title: 'Ongoing Growth Partner',
      description: "Every month I update your site, write your social captions, and send a short report. You run the market — I keep the digital side running.",
      cost: '$399',
      costSub: 'Per month. Cancel anytime with 30-day notice.',
      features: [
        'Up to 5 website changes/month (prices, products, specials)',
        '8 ready-to-copy captions for Instagram or Facebook',
        '4 Google Business posts written (you copy & post)',
        'Monthly report: visitors, top pages, what to improve',
        'WhatsApp access — ask me anything during the month',
      ],
      cta: "Let's Partner Up",
      highlight: false,
      delay: 0.3,
    },
  ];

  return (
    <section id="plans" className="py-36 relative" style={{ backgroundColor: C.darkWarm }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: C.gold }}>
          Investment Options
        </span>
        <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6" style={{ color: C.cream }}>
          Choose your starting point.
        </h2>
        <p className="text-lg font-light max-w-xl mx-auto" style={{ color: C.muted }}>
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
              backgroundColor: plan.highlight ? C.navy : C.dark,
              border: `1px solid ${plan.highlight ? `${C.gold}35` : `${C.gold}12`}`,
              boxShadow: plan.highlight ? `0 30px 70px -15px ${C.gold}20` : 'none',
              transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
            }}
          >
            {plan.highlight && (
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }} />
            )}

            <div className="p-10">
              <div
                className="inline-flex px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest mb-8"
                style={{
                  backgroundColor: plan.highlight ? `${C.gold}20` : `${C.gold}10`,
                  color: C.gold,
                }}
              >
                {plan.badge}
              </div>

              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: C.cream }}>
                {plan.title}
              </h3>

              <p className="text-sm font-light leading-relaxed mb-10 min-h-[72px]" style={{ color: C.muted }}>
                {plan.description}
              </p>

              <div className="mb-10">
                <span className="font-serif text-5xl font-bold" style={{ color: C.gold }}>
                  {plan.cost}
                </span>
                <p className="text-[10px] mt-2 font-display uppercase tracking-widest font-bold" style={{ color: `${C.gold}60` }}>
                  {plan.costSub}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.gold }} />
                    <span style={{ color: C.muted }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Interested in: ${plan.title}`)}`}
                className="w-full py-5 font-display font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 rounded-sm transition-all"
                style={{
                  backgroundColor: plan.highlight ? C.gold : `${C.gold}15`,
                  color: plan.highlight ? C.dark : C.gold,
                  border: plan.highlight ? 'none' : `1px solid ${C.gold}30`,
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
        className="text-center mt-16 text-sm font-display uppercase tracking-widest"
        style={{ color: C.muted }}
      >
        <span style={{ color: '#EF4444' }}>&#9679;</span>&nbsp; Only 2 Concord client slots available this month. Pilots are first-come, first-served.
      </motion.p>
    </section>
  );
};

// ─── WHAT YOU GET ─────────────────────────────────────────────────────────────

const WhatYouGet = () => (
  <section className="py-36" style={{ backgroundColor: C.dark }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 inline-block" style={{ color: C.gold }}>
          Your Digital Future
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: C.cream }}>
          Here&apos;s what we build together.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Globe className="w-5 h-5" />,
            title: 'You show up on Google',
            body: 'I write your full Google Business Profile — description, hours, categories, first post. You approve and click publish. Takes you 10 minutes, once.',
          },
          {
            icon: <ShoppingBag className="w-5 h-5" />,
            title: 'WhatsApp Express Pickup',
            body: 'Customer sees your product page, taps "Order on WhatsApp," types their name. You get the message. Order is ready when they arrive.',
          },
          {
            icon: <Star className="w-5 h-5" />,
            title: 'Google Review QR Code',
            body: 'I build a page that sends customers directly to your Google review form. You print the QR code and put it on the counter. That\'s it.',
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: 'Product Catalog — up to 20 items',
            body: 'You send me photos and product names. I build the page. Customers browse online before they visit. Looks better than any competitor.',
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'Ready-to-post social captions',
            body: 'I write the text for Instagram and Facebook posts. You copy, paste, and post. No video, no design skills needed from your side.',
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: 'Monthly report — plain English',
            body: 'How many people visited your site, which products they looked at, what I changed that month. One page. No jargon.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="p-8 rounded-sm border transition-all hover:border-opacity-60"
            style={{ borderColor: `${C.gold}15`, backgroundColor: C.darkWarm }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${C.gold}12`, color: C.gold }}>
              {item.icon}
            </div>
            <h4 className="font-serif text-lg font-bold mb-3" style={{ color: C.cream }}>{item.title}</h4>
            <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{item.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CTA = () => (
  <section className="py-40 relative overflow-hidden" style={{ backgroundColor: C.navy }}>
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${C.gold}08 0%, transparent 65%)` }} />

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-px h-16 mx-auto mb-12" style={{ backgroundColor: `${C.gold}40` }} />

        <h2 className="font-serif font-bold mb-8 leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.cream }}>
          Ready to fill{' '}
          <span className="italic font-normal" style={{ color: C.gold }}>your store?</span>
        </h2>

        <p className="text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed" style={{ color: `${C.cream}55` }}>
          The pilot costs nothing. A 15-minute conversation is all it takes. I&apos;ll show you exactly
          what&apos;s possible for the Bay Area European Market &amp; Deli.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: `0 20px 50px -12px ${C.gold}55` }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${EMAIL}?subject=Let's Talk — Bay Area European Market Digital Growth`}
          className="inline-flex px-14 py-6 font-display font-bold uppercase tracking-widest text-sm rounded-sm items-center gap-3"
          style={{ backgroundColor: C.gold, color: C.dark }}
        >
          Email Me Directly <ArrowRight className="w-4 h-4" />
        </motion.a>

        <p className="mt-10 font-display text-[10px] uppercase tracking-[0.4em]" style={{ color: `${C.cream}25` }}>
          {EMAIL} &mdash; I reply within 2 hours
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="py-14 border-t" style={{ backgroundColor: C.darkWarm, borderColor: `${C.gold}12` }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <Store className="w-5 h-5" style={{ color: C.gold }} />
        <span className="font-serif text-lg font-bold" style={{ color: C.cream }}>
          Market<span className="italic font-normal" style={{ color: C.gold }}>Growth</span>
        </span>
      </div>
      <p className="text-[10px] font-display uppercase tracking-[0.4em]" style={{ color: C.muted }}>
        &copy; {new Date().getFullYear()} &mdash; Built with AI &mdash; Concord, CA
      </p>
      <a href={`mailto:${EMAIL}`} className="font-serif italic text-lg transition-opacity hover:opacity-60" style={{ color: C.cream }}>
        {EMAIL}
      </a>
    </div>
  </footer>
);

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: C.dark, color: C.cream }}>
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
