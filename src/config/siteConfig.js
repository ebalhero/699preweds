/**
 * ==============================================================================
 * KONFIGURASI LAMAN WEB PREWEDS / POSTWEDS ($699) — 11.11 PROMO EDITION
 * 100% Mengikut Rekaan Asal "/Users/test/Downloads/W baru" (1.svg - 4.svg)
 * - Semua Title & Headings mengekalkan 100% grafik/vektor font asal rekaan.
 * - Semua Body Text menggunakan Arial (real text yang boleh diubah di sini).
 * - Semua gambar/kad mempunyai animasi tersendiri.
 * ==============================================================================
 */

export const siteConfig = {
  whatsapp: {
    phoneNumber: "601120732058",
    defaultMessage:
      "Hai! Saya berminat dengan Promo 11.11 Preweds/Postweds $699 (NP: $899) termasuk 3 FREE Gifts.",
    buttonText: "WhatsApp Now",
  },

  // Pop-Out Promo 11.11 Modal
  promoPopup1111: {
    enabled: true,
    topBadge: "11.11 EXCLUSIVE SALE • LIMITED SLOTS",
    headline: "11.11",
    subHeadline: "Preweds / Postweds Promo",
    normalPriceLabel: "Normal Price",
    oldPrice: "$899",
    saveBadge: "Save $200",
    nowOnlyLabel: "11.11 Special Price,",
    freeGifts: [
      { bold: "FREE", text: " Transportation Fee" },
      { bold: "FREE", text: " 3 Month Warranty Link" },
      { bold: "FREE", text: " Online Premium Gallery Album" },
    ],
    buttonText: "WhatsApp Now — Claim 11.11",
    dismissText: "Tutup & Lihat Website",
  },

  // Bahagian 1 (1.svg): Hero Section — Body Text
  hero: {
    onlyLabel: "Only,",
    details: [
      "No Hidden Fee",
      "Included Transportation Fee",
      "2 Hours Coverage",
    ],
  },

  // Bahagian 2 (2.svg): Timeless & Films & Moments — Body Text
  timelessSection: {
    photoLabels: [
      { id: "(001)", top: "12.92%", left: "14.24%" },
      { id: "(002)", top: "11.22%", left: "54.24%" },
      { id: "(003)", top: "24.50%", left: "1.90%" },
      { id: "(004)", top: "26.05%", left: "80.54%" },
    ],
    aestheticLabel: "Aesthetic",
  },

  // Bahagian Video Highlight Preweds (Ultra-Fast Lazy Teaser + FastStart MP4)
  videoSection: {
    badge: "OUR SIGNATURE FILMS • TAP FOR SOUND",
    subtitle: "Cinematic Preweds & Postweds Highlights",
    videos: [
      {
        id: "iqmarl-shaqina",
        number: "(01)",
        couple: "Iqmarl & Shaqina",
        styleTag: "Vintage Editorial Film",
        duration: "2:40",
        poster: "videos/v1_poster.webp",
        previewSrc: "videos/v1_preview.mp4",
        fullSrc: "videos/iqmarl-shaqina.mp4",
      },
      {
        id: "aiman-khaireen",
        number: "(02)",
        couple: "Aiman & Khaireen",
        styleTag: "Romantic Outdoor Preweds",
        duration: "2:55",
        poster: "videos/v2_poster.webp",
        previewSrc: "videos/v2_preview.mp4",
        fullSrc: "videos/aiman-khaireen.mp4",
      },
      {
        id: "natasha-daniel",
        number: "(03)",
        couple: "Natasha & Daniel",
        styleTag: "Timeless Preweds Highlight",
        duration: "2:41",
        poster: "videos/v3_poster.webp",
        previewSrc: "videos/v3_preview.mp4",
        fullSrc: "videos/natasha-daniel.mp4",
      },
    ],
  },

  // Bahagian 3 (3.svg): affordable without less & How We Delivers? — Body Text
  affordableSection: {
    pills: [
      {
        top: "15.42%",
        height: "5.19%",
        left: "25.35%",
        line1: [{ text: "3 Hours", bold: true }],
        line2: [{ text: "Coverage Outdoor", bold: false }],
      },
      {
        top: "21.23%",
        height: "5.19%",
        left: "45.50%",
        line1: [
          { text: "Full Guided", bold: true },
          { text: " Poses,", bold: false },
        ],
        line2: [{ text: "Unscripted Poses", bold: false }],
      },
      {
        top: "27.03%",
        height: "5.19%",
        left: "25.00%",
        line1: [
          { text: "Cinematic", bold: true },
          { text: " Films", bold: false },
        ],
        line2: [{ text: "Vibes Tone", bold: false }],
      },
      {
        top: "32.84%",
        height: "5.19%",
        left: "45.75%",
        line1: [
          { text: "300 ", bold: false },
          { text: "Minimum", bold: true },
        ],
        line2: [{ text: "Edited Photos", bold: false }],
      },
      {
        top: "38.64%",
        height: "5.19%",
        left: "25.35%",
        line1: [{ text: "3 Month Free", bold: false }],
        line2: [{ text: "Link Warranty,", bold: false }],
      },
      {
        top: "44.45%",
        height: "5.19%",
        left: "45.50%",
        line1: [
          { text: "1 Photographer", bold: true },
          { text: " &", bold: false },
        ],
        line2: [{ text: "1 Videographer", bold: true }],
      },
    ],
    timelineSteps: [
      {
        top: "66.98%",
        left: "50.10%",
        line1: "Shooting",
        line2: "Days",
      },
      {
        top: "73.20%",
        left: "50.10%",
        line1: "Backup &",
        line2: "Selection Day",
      },
      {
        top: "80.27%",
        left: "50.10%",
        line1: "Editing ;",
        line2: "7 Working Days",
      },
      {
        top: "88.37%",
        left: "50.10%",
        line1: "Quality Check ;",
        line2: "14 Working Days",
      },
      {
        top: "95.53%",
        left: "50.10%",
        line1: "Deliver;",
        line2: "14 Working Days",
      },
    ],
  },

  // Bahagian Urgency & Promo ($899 -> $699 + 3 FREE Gifts + Countdown + WhatsApp Now)
  urgencySection: {
    topBadge: "11.11 SPECIAL PROMO • LIMITED SLOTS",
    normalPriceLabel: "Normal Price",
    oldPrice: "$899",
    saveBadge: "Save $200",
    nowOnlyLabel: "Now Only,",
    freeGiftsSubtitle: "Book sekarang & dapat semua ni:",
    freeGifts: [
      {
        align: "left",
        line1: [
          { text: "FREE", bold: true },
          { text: " Transportation", bold: false },
        ],
        line2: [{ text: "Fee", bold: false }],
      },
      {
        align: "right",
        line1: [
          { text: "FREE", bold: true },
          { text: " 3 Month", bold: false },
        ],
        line2: [{ text: "Warranty Link", bold: false }],
      },
      {
        align: "left",
        line1: [
          { text: "FREE", bold: true },
          { text: " Online Premium", bold: false },
        ],
        line2: [{ text: "Gallery Album", bold: false }],
      },
    ],
    countdownLabel: "11.11 Promo Ends In:",
    countdownUnits: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs",
    },
    ctaButtonText: "WhatsApp Now",
    ctaSubtext: "No Hidden Fee • Lock Slot Anda Sekarang",
  },
};

export function getWhatsAppUrl(customMessage) {
  const phone = siteConfig.whatsapp.phoneNumber;
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
