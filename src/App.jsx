import React, { useState, useEffect, useRef } from "react";
import { siteConfig, getWhatsAppUrl } from "./config/siteConfig";
import {
  LimitedTimeOfferHeadingSvg,
  Price699Svg,
  LilacCheckBadgeSvg,
  FilmsAndMomentsHeadingSvg,
  OurSignatureFilmsHeadingSvg,
} from "./components/DesignVectors";

const COUNTDOWN_STORAGE_KEY = "preweds_699_promo_deadline_v1";
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000;

/**
 * Arial font style for all Body Text
 */
const ARIAL_STYLE = {
  fontFamily: "Arial, Helvetica, sans-serif",
};

/**
 * Fraunces font style for 11.11 display numerals in the pop-out modal
 */
const FRAUNCES_STYLE = {
  fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif",
  fontVariationSettings: "'opsz' 72, 'SOFT' 30, 'WONK' 1",
};

/**
 * Individual photo & card layers extracted from 2.svg and 4.svg with exact coordinates
 */
const SLIDE2_TOP_PHOTOS = [
  {
    name: "s2_p1",
    src: "images/preweds/s2_p1.webp",
    top: "13.616%",
    left: "14.219%",
    width: "24.942%",
    delay: 60,
    direction: "left",
    animClass: "animate-photo-float",
  },
  {
    name: "s2_p2",
    src: "images/preweds/s2_p2.webp",
    top: "11.903%",
    left: "54.079%",
    width: "44.056%",
    delay: 150,
    direction: "right",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_p3",
    src: "images/preweds/s2_p3.webp",
    top: "25.182%",
    left: "1.632%",
    width: "44.639%",
    delay: 120,
    direction: "left",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_p4",
    src: "images/preweds/s2_p4.webp",
    top: "26.558%",
    left: "46.154%",
    width: "38.578%",
    delay: 210,
    direction: "right",
    animClass: "animate-photo-float",
  },
];

const SLIDE2_TILTED_CARDS = [
  {
    name: "s2_card_mid",
    src: "images/preweds/s2_card_mid.webp",
    top: "37.423%",
    left: "34.615%",
    width: "33.333%",
    delay: 80,
    direction: "scale",
    animClass: "animate-photo-float",
  },
  {
    name: "s2_card_right",
    src: "images/preweds/s2_card_right.webp",
    top: "37.254%",
    left: "63.170%",
    width: "36.480%",
    delay: 180,
    direction: "right",
    animClass: "animate-card-sway-right",
  },
  {
    name: "s2_card_left",
    src: "images/preweds/s2_card_left.webp",
    top: "37.170%",
    left: "0.117%",
    width: "38.578%",
    delay: 140,
    direction: "left",
    animClass: "animate-card-sway-left",
  },
];

const SLIDE2_BEACH_COLLAGE = [
  {
    name: "s2_c1",
    src: "images/preweds/s2_c1.webp",
    top: "67.996%",
    left: "1.515%",
    width: "29.604%",
    delay: 60,
    direction: "left",
    animClass: "animate-photo-float",
  },
  {
    name: "s2_c2",
    src: "images/preweds/s2_c2.webp",
    top: "69.315%",
    left: "81.469%",
    width: "16.200%",
    delay: 140,
    direction: "right",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_c4",
    src: "images/preweds/s2_c4.webp",
    top: "76.755%",
    left: "64.918%",
    width: "32.984%",
    delay: 200,
    direction: "right",
    animClass: "animate-photo-float",
  },
  {
    name: "s2_c3",
    src: "images/preweds/s2_c3.webp",
    top: "74.453%",
    left: "46.387%",
    width: "26.923%",
    delay: 120,
    direction: "scale",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_c5",
    src: "images/preweds/s2_c5.webp",
    top: "80.039%",
    left: "1.515%",
    width: "9.674%",
    delay: 160,
    direction: "left",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_c7",
    src: "images/preweds/s2_c7.webp",
    top: "87.788%",
    left: "36.014%",
    width: "26.807%",
    delay: 240,
    direction: "up",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s2_c6",
    src: "images/preweds/s2_c6.webp",
    top: "85.682%",
    left: "20.280%",
    width: "19.231%",
    delay: 180,
    direction: "left",
    animClass: "animate-photo-float",
  },
];

const SLIDE4_FEEDBACK_LAYERS = [
  {
    name: "s4_top1",
    src: "images/preweds/s4_top1.webp",
    top: "10.353%",
    left: "5.071%",
    width: "46.108%",
    delay: 50,
    direction: "left",
    animClass: "animate-card-sway-left",
  },
  {
    name: "s4_top2",
    src: "images/preweds/s4_top2.webp",
    top: "13.855%",
    left: "42.571%",
    width: "51.297%",
    delay: 120,
    direction: "right",
    animClass: "animate-card-sway-right",
  },
  {
    name: "s4_top3",
    src: "images/preweds/s4_top3.webp",
    top: "21.115%",
    left: "1.533%",
    width: "53.066%",
    delay: 180,
    direction: "left",
    animClass: "animate-photo-float",
  },
  {
    name: "s4_top4",
    src: "images/preweds/s4_top4.webp",
    top: "22.725%",
    left: "39.741%",
    width: "56.368%",
    delay: 240,
    direction: "right",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s4_top5",
    src: "images/preweds/s4_top5.webp",
    top: "31.621%",
    left: "13.797%",
    width: "52.005%",
    delay: 300,
    direction: "up",
    animClass: "animate-card-sway-left",
  },
  {
    name: "s4_grid1",
    src: "images/preweds/s4_grid1.webp",
    top: "60.532%",
    left: "2.005%",
    width: "30.425%",
    delay: 60,
    direction: "up",
    animClass: "animate-photo-float",
  },
  {
    name: "s4_grid2",
    src: "images/preweds/s4_grid2.webp",
    top: "60.506%",
    left: "33.844%",
    width: "30.071%",
    delay: 120,
    direction: "up",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s4_grid3",
    src: "images/preweds/s4_grid3.webp",
    top: "60.506%",
    left: "65.330%",
    width: "30.307%",
    delay: 180,
    direction: "up",
    animClass: "animate-photo-float",
  },
  {
    name: "s4_grid4",
    src: "images/preweds/s4_grid4.webp",
    top: "71.421%",
    left: "2.005%",
    width: "30.425%",
    delay: 90,
    direction: "up",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s4_grid5",
    src: "images/preweds/s4_grid5.webp",
    top: "71.421%",
    left: "33.844%",
    width: "30.071%",
    delay: 150,
    direction: "up",
    animClass: "animate-photo-float",
  },
  {
    name: "s4_grid6",
    src: "images/preweds/s4_grid6.webp",
    top: "71.421%",
    left: "65.330%",
    width: "29.953%",
    delay: 210,
    direction: "up",
    animClass: "animate-photo-float-reverse",
  },
  {
    name: "s4_bot1",
    src: "images/preweds/s4_bot1.webp",
    top: "80.598%",
    left: "14.387%",
    width: "39.387%",
    delay: 140,
    direction: "left",
    animClass: "animate-card-sway-left",
  },
  {
    name: "s4_bot2",
    src: "images/preweds/s4_bot2.webp",
    top: "81.084%",
    left: "41.509%",
    width: "41.627%",
    delay: 220,
    direction: "right",
    animClass: "animate-card-sway-right",
  },
];

/**
 * Lightweight IntersectionObserver scroll-reveal component
 */
function Reveal({
  children,
  className = "",
  style = {},
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -15px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left"
      ? "translate3d(-22px, 8px, 0) scale(0.96)"
      : direction === "right"
        ? "translate3d(22px, 8px, 0) scale(0.96)"
        : direction === "scale"
          ? "scale(0.92)"
          : "translate3d(0, 16px, 0) scale(0.98)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function getOrCreateDeadline() {
  try {
    const saved = localStorage.getItem(COUNTDOWN_STORAGE_KEY);
    const now = Date.now();
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed > now) {
        return parsed;
      }
    }
    const nextDeadline = now + THREE_DAYS_MS;
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(nextDeadline));
    return nextDeadline;
  } catch {
    return Date.now() + THREE_DAYS_MS;
  }
}

function getRemainingParts(deadline) {
  const diff = Math.max(0, deadline - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function RichTextLine({ segments }) {
  return (
    <>
      {segments.map((seg, idx) => (
        <span
          key={idx}
          className={
            seg.bold ? "font-bold text-black" : "font-normal text-black"
          }
        >
          {seg.text}
        </span>
      ))}
    </>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.359 4.984L2 22l5.188-1.359c1.453.797 3.109 1.219 4.843 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.453 1.344-2.016 1.422-.516.078-1.172.109-1.906-.125-.453-.141-1.031-.328-1.766-.641-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.312.609-.391.812-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.312.391-.453.516-.141.141-.297.297-.125.594.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.312 2.375 1.469.297.156.469.125.641-.078.172-.203.734-.859.938-1.156.203-.297.391-.25.656-.156.266.094 1.688.797 1.984.938.297.141.484.219.562.344.078.125.078.719-.172 1.422z" />
    </svg>
  );
}

/**
 * 11.11 Promo Pop-Out Modal (Harmonious with User's Cream + Pastel Lilac + Editorial Black Design)
 */
function Promo1111Modal({ isOpen, onClose, waUrl, timeLeft }) {
  if (!isOpen) return null;
  const { promoPopup1111 } = siteConfig;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 backdrop-blur-[4px]"
      onClick={onClose}
    >
      <div
        className="animate-modal-pop relative w-full max-w-[366px] overflow-hidden rounded-[32px] border border-black bg-[#fffbf2] px-5 pt-6 pb-5 text-center text-[#1b1b1b] shadow-[0_10px_0_#e1cfe1,0_24px_60px_rgba(0,0,0,0.35)]"
        style={ARIAL_STYLE}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Shimmer Sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
          <div className="animate-shimmer-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-white/75 to-transparent" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white text-[14px] font-bold text-black transition hover:bg-[#e1cfe1]"
        >
          ✕
        </button>

        {/* Top 11.11 Lilac Badge */}
        <div className="relative inline-flex items-center gap-1.5 rounded-full border border-black bg-[#e1cfe1] px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-black uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d42b3e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d42b3e]" />
          </span>
          {promoPopup1111.topBadge}
        </div>

        {/* Big Editorial "11.11" Headline */}
        <div className="relative mt-2">
          <h2
            className="text-[58px] leading-[0.88] font-light italic tracking-[-0.04em] text-[#1b1b1b]"
            style={FRAUNCES_STYLE}
          >
            {promoPopup1111.headline}
          </h2>
          <p className="mt-1 text-[13.5px] font-bold tracking-[0.02em] text-black uppercase">
            {promoPopup1111.subHeadline}
          </p>
        </div>

        {/* Price Cut Box inside Modal: $899 -> $699 */}
        <div className="relative mt-3.5 rounded-[22px] border border-black bg-white px-4 py-3.5">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[12.5px] text-black/65">
              {promoPopup1111.normalPriceLabel}
            </span>
            <span className="relative inline-block text-[18px] font-bold text-black/45">
              {promoPopup1111.oldPrice}
              <span className="absolute inset-x-[-6%] top-1/2 h-[2px] -rotate-6 bg-[#d42b3e]" />
            </span>
            <span className="rounded-full border border-black bg-[#e1cfe1] px-2.5 py-0.5 text-[10.5px] font-bold text-black">
              {promoPopup1111.saveBadge}
            </span>
          </div>

          <p className="mt-1 text-[13px] text-black">
            {promoPopup1111.nowOnlyLabel}
          </p>

          <div className="mt-0.5 flex justify-center">
            <Price699Svg className="animate-float-slow h-[52px] w-auto" />
          </div>
        </div>

        {/* 3 FREE Gifts Pills inside Modal */}
        <div className="relative mt-3.5 space-y-2 text-left">
          {promoPopup1111.freeGifts.map((g, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-black bg-white px-3.5 py-2"
            >
              <LilacCheckBadgeSvg className="h-[24px] w-[24px] shrink-0" />
              <p className="text-[13.5px] leading-tight text-black">
                <span className="font-bold">{g.bold}</span>
                <span>{g.text}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Mini Live Countdown inside 11.11 Modal */}
        <div className="relative mt-3.5 grid grid-cols-4 gap-1.5">
          {[
            { v: timeLeft.days, l: "Days", hi: false },
            { v: timeLeft.hours, l: "Hours", hi: false },
            { v: timeLeft.minutes, l: "Mins", hi: false },
            { v: timeLeft.seconds, l: "Secs", hi: true },
          ].map((u, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-[14px] border border-black py-1.5 ${
                u.hi ? "bg-[#e1cfe1]" : "bg-white"
              }`}
            >
              <span className="text-[18px] leading-none font-bold text-black tabular-nums">
                {u.v}
              </span>
              <span className="mt-0.5 text-[9.5px] text-black/75">{u.l}</span>
            </div>
          ))}
        </div>

        {/* Claim 11.11 WhatsApp CTA Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-cta-breath group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-black bg-[#1b1b1b] py-3.5 text-[15px] font-bold text-white transition hover:bg-black"
        >
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="animate-shimmer-sweep block h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </span>
          <WhatsAppIcon className="relative h-5 w-5 text-[#25D366]" />
          <span className="relative">{promoPopup1111.buttonText}</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="relative mt-2.5 inline-block text-[12px] text-black/65 underline underline-offset-4 transition hover:text-black"
        >
          {promoPopup1111.dismissText}
        </button>
      </div>
    </div>
  );
}

/**
 * Harmonious Urgency Slide:
 * - Limited Time Offer vector heading
 * - Price Cut from $899 to $699
 * - 3 FREE Gift Pills (matching Slide 3 cream pills + lilac scalloped checkmarks)
 * - Live Countdown Timer
 * - WhatsApp Now CTA Button
 */
function UrgencyOfferSection({ waUrl, timeLeft }) {
  const { urgencySection } = siteConfig;

  const countdownBoxes = [
    {
      value: timeLeft.days,
      label: urgencySection.countdownUnits.days,
      highlight: false,
    },
    {
      value: timeLeft.hours,
      label: urgencySection.countdownUnits.hours,
      highlight: false,
    },
    {
      value: timeLeft.minutes,
      label: urgencySection.countdownUnits.minutes,
      highlight: false,
    },
    {
      value: timeLeft.seconds,
      label: urgencySection.countdownUnits.seconds,
      highlight: true,
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#faf7f0]/70 to-white px-[6.5%] pt-[42px] pb-[48px] text-[#1b1b1b]"
      style={ARIAL_STYLE}
    >
      {/* Top Small Pill Badge */}
      <Reveal delay={0} className="flex justify-center">
        <span className="animate-float-slow inline-flex items-center gap-1.5 rounded-full border border-black bg-[#e1cfe1]/65 px-3.5 py-1 text-[2.6cqw] font-bold tracking-[0.08em] text-black uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d42b3e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d42b3e]" />
          </span>
          {urgencySection.topBadge}
        </span>
      </Reveal>

      {/* Original Design Font Vector Heading: "limited / time offer!" */}
      <Reveal delay={80} className="mt-3 w-full">
        <LimitedTimeOfferHeadingSvg className="mx-auto h-auto w-full" />
      </Reveal>

      {/* Price Cut Card: $899 -> $699 */}
      <Reveal delay={150} direction="scale" className="mt-5">
        <div className="relative overflow-hidden rounded-[28px] border border-black bg-[#fffbf2] px-5 py-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
          {/* Subtle Shimmer Sweep across the Promo Card */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
            <div className="animate-shimmer-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>

          {/* Normal Price $899 Strikethrough + Save $200 Pill */}
          <div className="relative flex items-center justify-center gap-2.5">
            <span className="text-[3.5cqw] font-normal text-black/65">
              {urgencySection.normalPriceLabel}
            </span>
            <span className="relative inline-block text-[5.4cqw] font-bold tracking-[-0.02em] text-black/45">
              {urgencySection.oldPrice}
              <span className="absolute inset-x-[-6%] top-1/2 h-[2px] -rotate-6 bg-[#d42b3e]" />
            </span>
            <span className="animate-pulse rounded-full border border-black bg-[#e1cfe1] px-2.5 py-0.5 text-[2.8cqw] font-bold tracking-[-0.01em] text-black">
              {urgencySection.saveBadge}
            </span>
          </div>

          {/* "Now Only," in Arial */}
          <p className="relative mt-2 text-[4.2cqw] leading-none font-normal tracking-[-0.02em] text-black">
            {urgencySection.nowOnlyLabel}
          </p>

          {/* Exact "$699" Vector from 1.svg */}
          <div className="relative mt-1 flex justify-center">
            <Price699Svg className="animate-float-slow h-[15.2cqw] w-auto" />
          </div>
        </div>
      </Reveal>

      {/* Subtitle above the 3 FREE Gift Pills */}
      <Reveal delay={200}>
        <p className="mt-6 text-center text-[3.9cqw] font-normal tracking-[-0.015em] text-black">
          {urgencySection.freeGiftsSubtitle}
        </p>
      </Reveal>

      {/* 3 Alternating Pill Cards matching 3.svg 100% */}
      <div className="mt-3.5 flex flex-col gap-3">
        {urgencySection.freeGifts.map((gift, idx) => (
          <Reveal
            key={idx}
            delay={240 + idx * 110}
            direction={gift.align === "right" ? "right" : "left"}
            className={`flex w-[84%] items-center gap-3.5 rounded-full border border-black bg-[#fffbf2] px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5 ${
              gift.align === "right" ? "self-end" : "self-start"
            }`}
          >
            <LilacCheckBadgeSvg className="animate-badge-pop h-[8.2cqw] w-[8.2cqw] shrink-0" />
            <div className="text-left text-[4.65cqw] leading-[1.06] tracking-[-0.02em] text-black">
              <p>
                <RichTextLine segments={gift.line1} />
              </p>
              <p>
                <RichTextLine segments={gift.line2} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Countdown Timer */}
      <Reveal delay={320} className="mt-7 text-center">
        <p className="text-[3.5cqw] font-bold tracking-[0.04em] text-black uppercase">
          {urgencySection.countdownLabel}
        </p>

        <div className="mt-2.5 grid grid-cols-4 gap-2.5">
          {countdownBoxes.map((box, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-[20px] border border-black py-3 transition-all duration-300 ${
                box.highlight
                  ? "bg-[#e1cfe1] shadow-[0_4px_14px_rgba(225,207,225,0.65)]"
                  : "bg-[#fffbf2]"
              }`}
            >
              <span
                key={box.highlight ? box.value : undefined}
                className={`text-[6.8cqw] leading-none font-bold tracking-[-0.03em] text-black tabular-nums ${
                  box.highlight ? "animate-sec-tick" : ""
                }`}
              >
                {box.value}
              </span>
              <span className="mt-1 text-[2.7cqw] font-normal tracking-[0.02em] text-black/80">
                {box.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Primary WhatsApp Now CTA Button */}
      <Reveal delay={400} className="mt-7 flex flex-col items-center">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-cta-breath group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-black bg-[#1b1b1b] py-4 text-[4.8cqw] font-bold tracking-[-0.01em] text-white transition-all hover:bg-black active:translate-y-0.5"
        >
          {/* Shimmer light sweep across CTA button */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="animate-shimmer-sweep block h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </span>
          <WhatsAppIcon className="relative h-[5.4cqw] w-[5.4cqw] text-[#25D366] transition-transform duration-300 group-hover:scale-115" />
          <span className="relative">{urgencySection.ctaButtonText}</span>
        </a>
        <p className="mt-3 text-center text-[3.1cqw] font-normal text-black/70">
          {urgencySection.ctaSubtext}
        </p>
      </Reveal>
    </section>
  );
}

/**
 * Individual Ultra-Fast Video Card:
 * 1. Initial load: 0 KB video (only ~15 KB WebP poster)
 * 2. In viewport (IntersectionObserver): auto-plays ~200 KB 6-second muted loop instantly
 * 3. Tap Play: streams full HD FastStart MP4 with sound immediately via HTTP Range Requests
 */
function FastVideoCard({ video, index, activeVideoId, onSelectVideo }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);
  const isPlayingFull = activeVideoId === video.id;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      delay={index * 120}
      direction={index % 2 === 1 ? "right" : "left"}
      className="w-full"
    >
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-[22px] border border-black bg-[#fffbf2] p-2.5 shadow-[0_6px_0_#1b1b1b] transition-transform duration-300 hover:-translate-y-0.5"
        style={ARIAL_STYLE}
      >
        {/* Top Editorial Header Row */}
        <div className="mb-2 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full border border-black bg-[#e1cfe1] px-2.5 py-0.5 text-[2.8cqw] font-bold text-black">
              {video.number}
            </span>
            <div>
              <h3 className="text-[4.1cqw] leading-tight font-bold tracking-[-0.02em] text-black">
                {video.couple}
              </h3>
              <p className="text-[2.7cqw] leading-tight text-black/65">
                {video.styleTag}
              </p>
            </div>
          </div>

          <span className="rounded-full border border-black/80 bg-white px-2.5 py-0.5 text-[2.6cqw] font-bold tabular-nums text-black">
            {isPlayingFull ? "PLAYING HD" : video.duration}
          </span>
        </div>

        {/* 16:9 Video Frame */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-black bg-[#1b1b1b]">
          {isPlayingFull ? (
            <video
              key="full-video"
              src={video.fullSrc}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <button
              type="button"
              onClick={() => onSelectVideo(video.id)}
              className="relative block h-full w-full cursor-pointer text-left focus:outline-none"
              aria-label={`Play ${video.couple} Full Highlight Film`}
            >
              {/* Instant WebP Poster + Lazy 6s Muted Preview Loop */}
              {inView ? (
                <video
                  key="preview-loop"
                  src={video.previewSrc}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={video.poster}
                  alt={video.couple}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}

              {/* Subtle Cinematic Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              {/* Top-left Live Preview Indicator */}
              <div className="pointer-events-none absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/40 bg-black/55 px-2.5 py-1 text-[2.4cqw] font-bold tracking-[0.04em] text-white backdrop-blur-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e1cfe1]" />
                <span>PREVIEW • TAP FOR SOUND</span>
              </div>

              {/* Center Play Button with Harmonious Cream & Lilac Styling */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black bg-[#fffbf2]/95 text-black shadow-[0_4px_0_#1b1b1b] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e1cfe1]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 h-5 w-5"
                  >
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom CTA Bar inside Video */}
              <div className="pointer-events-none absolute inset-x-3 bottom-2.5 flex items-center justify-between text-white">
                <span className="text-[3.1cqw] font-bold drop-shadow-xs">
                  Watch Full Film ({video.duration})
                </span>
                <span className="rounded-full border border-black bg-[#fffbf2] px-2.5 py-0.5 text-[2.5cqw] font-bold text-black">
                  Play HD 🔊
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Section showcasing the 3 Preweds Highlight Films
 */
function PrewedsVideoShowcaseSection() {
  const { videoSection } = siteConfig;
  const [activeVideoId, setActiveVideoId] = useState(null);

  if (!videoSection || !videoSection.videos?.length) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-white px-[6.5%] pt-4 pb-8"
      style={ARIAL_STYLE}
    >
      {/* Original Vector Heading "our signature / films!" using the exact SVG title font */}
      <Reveal delay={80} className="mx-auto w-[74%]">
        <OurSignatureFilmsHeadingSvg className="h-auto w-full" />
      </Reveal>

      <Reveal delay={140} className="mt-1.5 text-center">
        <p className="text-[3.5cqw] font-normal tracking-[-0.01em] text-black/75">
          {videoSection.subtitle}
        </p>
      </Reveal>

      {/* 3 Video Cards */}
      <div className="mt-5 flex flex-col gap-4">
        {videoSection.videos.map((video, idx) => (
          <FastVideoCard
            key={video.id}
            video={video}
            index={idx}
            activeVideoId={activeVideoId}
            onSelectVideo={(id) => setActiveVideoId(id)}
          />
        ))}
      </div>
    </section>
  );
}

export function App() {
  const { hero, timelessSection, affordableSection, urgencySection } =
    siteConfig;
  const waUrl = getWhatsAppUrl();

  const [show1111Modal, setShow1111Modal] = useState(
    () => siteConfig.promoPopup1111?.enabled ?? true
  );
  const [deadline, setDeadline] = useState(() => getOrCreateDeadline());
  const [timeLeft, setTimeLeft] = useState(() => getRemainingParts(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      if (now >= deadline) {
        const next = getOrCreateDeadline();
        setDeadline(next);
        setTimeLeft(getRemainingParts(next));
      } else {
        setTimeLeft(getRemainingParts(deadline));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div
      className="min-h-screen w-full bg-white text-[#1b1b1b] selection:bg-[#1b1b1b] selection:text-white"
      style={ARIAL_STYLE}
    >
      {/* 11.11 Promo Pop-Out Modal */}
      <Promo1111Modal
        isOpen={show1111Modal}
        onClose={() => setShow1111Modal(false)}
        waUrl={waUrl}
        timeLeft={timeLeft}
      />

      {/* Floating 11.11 Trigger Pill when modal is closed */}
      {!show1111Modal && (
        <button
          type="button"
          onClick={() => setShow1111Modal(true)}
          className="animate-float-slow fixed right-3 bottom-4 z-40 flex items-center gap-1.5 rounded-full border border-black bg-[#e1cfe1] px-3.5 py-2 text-[12px] font-bold text-black shadow-[0_4px_0_#1b1b1b,0_8px_20px_rgba(0,0,0,0.2)] transition hover:bg-[#fffbf2]"
        >
          <span className="h-2 w-2 animate-ping rounded-full bg-[#d42b3e]" />
          <span>11.11 Promo $699</span>
        </button>
      )}

      {/* Mobile-First Canvas Container matching 100% of the user's SVG design */}
      <main
        className="mx-auto w-full max-w-[430px] overflow-hidden bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)]"
        style={{ containerType: "inline-size" }}
      >
        {/* =====================================================================
            SECTION 1 (1.svg): PREWEDS / POSTWEDS ONLY $699
            - Original Title & Heading Graphics in s1_bg.webp
            - Body Text in Real Editable Arial
            - Animated Hero Arch Couple Photo (s1_photo.webp)
           ===================================================================== */}
        <section className="relative w-full overflow-hidden">
          <img
            src="images/preweds/s1_bg.webp"
            alt="Preweds Postweds Only $699 Photography & Videography"
            className="block h-auto w-full select-none"
            fetchpriority="high"
          />

          {/* "Only," (Arial Body Text) */}
          <div
            className="animate-soft-fade-up absolute inset-x-0 top-[17.6%] text-center text-[4.42cqw] leading-none font-normal tracking-[-0.02em] text-black"
            style={{ ...ARIAL_STYLE, animationDelay: "100ms" }}
          >
            {hero.onlyLabel}
          </div>

          {/* Body Text: No Hidden Fee / Included Transportation Fee / 2 Hours Coverage (Arial) */}
          <div
            className="animate-soft-fade-up absolute inset-x-0 top-[40.5%] text-center text-[4.65cqw] leading-[1.06] font-normal tracking-[-0.02em] text-black"
            style={{ ...ARIAL_STYLE, animationDelay: "240ms" }}
          >
            {hero.details.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Animated Arch Couple Photo Layer (s1_photo.webp) */}
          <Reveal
            delay={180}
            direction="up"
            className="absolute top-[50.0%] left-0 w-full overflow-hidden rounded-t-[14.7cqw]"
          >
            <img
              src="images/preweds/s1_photo.webp"
              alt="Couple on Beach"
              className="animate-hero-photo block h-auto w-full select-none"
            />
          </Reveal>
        </section>

        {/* =====================================================================
            SECTION 2 (2.svg): TIMELESS + FILMS & MOMENTS
            - Original Title Graphics in s2_bg.webp
            - 15 Individual Animated Photo & Card Layers
            - Body Text Labels in Real Editable Arial
           ===================================================================== */}
        <section className="relative w-full overflow-hidden">
          <img
            src="images/preweds/s2_bg.webp"
            alt="Timeless Films & Moments"
            className="block h-auto w-full select-none"
            loading="lazy"
          />

          {/* 4 Top Editorial Photos ((001) - (004)) with Scroll Reveal + Floating Motion */}
          {SLIDE2_TOP_PHOTOS.map((p) => (
            <Reveal
              key={p.name}
              delay={p.delay}
              direction={p.direction}
              className="absolute"
              style={{ top: p.top, left: p.left, width: p.width }}
            >
              <img
                src={p.src}
                alt={p.name}
                className={`${p.animClass} block h-auto w-full select-none`}
                loading="lazy"
              />
            </Reveal>
          ))}

          {/* (001), (002), (003), (004) Labels (Arial Bold) */}
          {timelessSection.photoLabels.map((lbl, idx) => (
            <Reveal
              key={idx}
              delay={idx * 90}
              className="absolute text-[1.74cqw] leading-none font-bold tracking-[-0.01em] text-[#1b1b1b]"
              style={{
                ...ARIAL_STYLE,
                top: lbl.top,
                left: lbl.left,
              }}
            >
              {lbl.id}
            </Reveal>
          ))}

          {/* 3 Tilted Vertical Cards with 3D Sway & Float Animation */}
          {SLIDE2_TILTED_CARDS.map((card) => (
            <Reveal
              key={card.name}
              delay={card.delay}
              direction={card.direction}
              className="absolute"
              style={{ top: card.top, left: card.left, width: card.width }}
            >
              <img
                src={card.src}
                alt={card.name}
                className={`${card.animClass} block h-auto w-full select-none`}
                loading="lazy"
              />
            </Reveal>
          ))}

          {/* Floating Heart Like Pill Badge ("❤️ 1") */}
          <Reveal
            delay={320}
            direction="scale"
            className="absolute z-10"
            style={{ top: "43.010%", left: "48.135%", width: "8.275%" }}
          >
            <img
              src="images/preweds/s2_heart.webp"
              alt="Heart 1"
              className="animate-heart-bounce block h-auto w-full select-none"
              loading="lazy"
            />
          </Reveal>

          {/* 7 Beach Collage Photos under "Films & Moments" */}
          {SLIDE2_BEACH_COLLAGE.map((c) => (
            <Reveal
              key={c.name}
              delay={c.delay}
              direction={c.direction}
              className="absolute"
              style={{ top: c.top, left: c.left, width: c.width }}
            >
              <img
                src={c.src}
                alt={c.name}
                className={`${c.animClass} block h-auto w-full select-none`}
                loading="lazy"
              />
            </Reveal>
          ))}

          {/* Bottom "Aesthetic" Label (Arial Regular) */}
          <Reveal
            delay={150}
            className="absolute top-[82.85%] left-[21.06%] text-[3.02cqw] leading-none font-normal tracking-[-0.02em] text-[#1b1b1b]"
            style={ARIAL_STYLE}
          >
            {timelessSection.aestheticLabel}
          </Reveal>
        </section>

        {/* =====================================================================
            SECTION 2B (NEW): 3 PREWEDS HIGHLIGHT VIDEOS (ULTRA-FAST STREAMING)
            - Iqmarl & Shaqina, Aiman & Khaireen, Natasha & Daniel
            - 15KB WebP Poster + 200KB Lazy 6s Loop + FastStart HD MP4
           ===================================================================== */}
        <PrewedsVideoShowcaseSection />

        {/* =====================================================================
            SECTION 3 (3.svg): AFFORDABLE WITHOUT LESS + HOW WE DELIVERS?
            - Original Title Graphics in s3_bg.webp
            - 5 Pills & 5 Timeline Steps Body Text in Real Editable Arial
           ===================================================================== */}
        <section className="relative w-full">
          <img
            src="images/preweds/s3_bg.webp"
            alt="Affordable Without Less & How We Delivers"
            className="block h-auto w-full select-none"
            loading="lazy"
          />

          {/* 6 Feature Pills Text (Arial Body Text with Bold Highlights, Vertically Centered in Oval) */}
          {affordableSection.pills.map((pill, idx) => (
            <Reveal
              key={idx}
              delay={idx * 90}
              direction={idx % 2 === 1 ? "right" : "left"}
              className="absolute flex flex-col justify-center text-left text-[4.77cqw] leading-[1.08] tracking-[-0.02em] text-black"
              style={{
                ...ARIAL_STYLE,
                top: pill.top,
                height: pill.height || "5.19%",
                left: pill.left,
              }}
            >
              <p>
                <RichTextLine segments={pill.line1} />
              </p>
              <p>
                <RichTextLine segments={pill.line2} />
              </p>
            </Reveal>
          ))}

          {/* 5 Timeline Steps Text (Arial Bold) */}
          {affordableSection.timelineSteps.map((step, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              direction="right"
              className="absolute text-left text-[4.77cqw] leading-[1.04] font-bold tracking-[-0.02em] text-black"
              style={{
                ...ARIAL_STYLE,
                top: step.top,
                left: step.left,
              }}
            >
              <p>{step.line1}</p>
              <p>{step.line2}</p>
            </Reveal>
          ))}
        </section>

        {/* =====================================================================
            SECTION 4 (NEW): URGENCY, PRICE CUT ($899 -> $699), 3 FREE GIFTS,
            COUNTDOWN TIMER & WHATSAPP NOW CTA
           ===================================================================== */}
        <UrgencyOfferSection waUrl={waUrl} timeLeft={timeLeft} />

        {/* =====================================================================
            SECTION 5 (4.svg): FEEDBACK & TESTIMONI + MORE FEEDBACK!
            - Original Title Graphics in s4_bg.webp
            - 13 Individual Animated WhatsApp Feedback Card Layers
           ===================================================================== */}
        <section className="relative w-full overflow-hidden">
          <img
            src="images/preweds/s4_bg.webp"
            alt="Feedback & Testimoni"
            className="block h-auto w-full select-none"
            loading="lazy"
          />

          {SLIDE4_FEEDBACK_LAYERS.map((card) => (
            <Reveal
              key={card.name}
              delay={card.delay}
              direction={card.direction}
              className="absolute"
              style={{ top: card.top, left: card.left, width: card.width }}
            >
              <img
                src={card.src}
                alt={card.name}
                className={`${card.animClass} block h-auto w-full select-none`}
                loading="lazy"
              />
            </Reveal>
          ))}
        </section>

        {/* Bottom Final WhatsApp Now CTA Section */}
        <section className="w-full bg-white px-[6.5%] pt-4 pb-12">
          <Reveal delay={100}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-black bg-[#fffbf2] py-4 text-[4.8cqw] font-bold tracking-[-0.01em] text-black shadow-[0_5px_0_#1b1b1b] transition-all hover:-translate-y-0.5 hover:bg-[#e1cfe1]/60 active:translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="animate-shimmer-sweep block h-full w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              </span>
              <WhatsAppIcon className="relative h-[5.4cqw] w-[5.4cqw] text-[#25D366] transition-transform duration-300 group-hover:scale-115" />
              <span className="relative">{urgencySection.ctaButtonText}</span>
            </a>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

export default App;
