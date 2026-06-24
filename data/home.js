// Images stay on Unsplash's own CDN (Next image optimization is off — see
// next.config.mjs). Right-sizing the `w` param is therefore the main lever
// for payload, so each call passes a width close to its real display size.
const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_SLIDES = [
  {
    image: u("photo-1469474968028-56623f02e42e"),
    kicker: "Welcome to YNAD Mount Resort",
    title: "Above the Clouds",
    sub: "A hillside sanctuary in misty Wayanad.",
  },
  {
    image: u("photo-1719831738921-972e0ec76337"),
    kicker: "Meppadi · Wayanad · Kerala",
    title: "Into the Green",
    sub: "Endless tea gardens and cardamom air.",
  },
  {
    image: u("photo-1448375240586-882707db888b"),
    kicker: "The Moody Climate of Wayanad",
    title: "Misty Mornings",
    sub: "Let the weather set your pace.",
  },
  {
    image: u("photo-1615880484746-a134be9a6ecf"),
    kicker: "Stay With Us",
    title: "Home in the Hills",
    sub: "Vintage homes, wrapped in forest silence.",
  },
];

// The intro film band plays YNAD's own aerial drone footage ONLY
// (compressed from 68MB → ~6MB, 1280-wide, no audio). The poster frame shows
// instantly and covers the brief moment before the clip buffers.
//
// The file lives in /public/video, so on Vercel it is served straight from
// the global edge CDN — no extra setup. Point DRONE_FILM at an external CDN
// URL (e.g. Cloudinary) only if you later want to offload that bandwidth.
export const DRONE_FILM = "/video/ynad-drone.mp4";

export const INTRO_FILMS = [
  {
    src: DRONE_FILM,
    poster: "/video/ynad-drone-poster.jpg",
    label: "YNAD from the air",
  },
];

export const ROOMS = [
  {
    name: "Vintage Home",
    slug: "vintage-home",
    hasPage: true,
    // House exterior leads the gallery (see brief), then the interiors.
    image: "/rooms/vintage-home/exterior.jpg",
    images: [
      "/rooms/vintage-home/exterior.jpg",
      "/rooms/vintage-home/bedroom.jpg",
      "/rooms/vintage-home/living-room.jpg",
      "/rooms/vintage-home/lounge.jpg",
      "/rooms/vintage-home/entrance.jpg",
    ],
    blurb:
      "A standalone heritage cottage with a green-tiled roof, vaulted wood ceilings and a sitting room dressed in antique cane furniture — old-world Wayanad for families and friends.",
    details: ["Standalone cottage", "Heritage interiors", "Sitting room"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for the Vintage Home.",

    tagline: "A standalone heritage cottage in the gardens",
    maxOccupancy: 4,
    aboutKicker: "The Cottage",
    aboutLead: "A house to",
    aboutEm: "settle into",
    specs: [
      { label: "Sleeps", value: "2 Adults + 2 Children" },
      { label: "Bed", value: "King-size" },
      { label: "Style", value: "Heritage cottage" },
      { label: "Layout", value: "Bedroom + sitting room" },
    ],
    description: [
      "Set on its own in the gardens, the Vintage Home is a tribute to old planter's Wayanad — a green-roofed cottage with thick walls, stone-block corners and a stamped-stone courtyard that catches the morning mist.",
      "Inside, a vaulted teak ceiling rises over a wood-panelled sitting room furnished with hand-carved cane settees, a vintage wall clock and framed hill-country prints — a room that feels like a grandparent's house, only quieter.",
      "The bedroom carries the same warmth: a polished-wood ceiling, soft linen with a touch of forest green and a lamp-lit niche — while a tea-and-coffee corner by the entrance gets your slow mornings going.",
    ],
    roomFeatures: [
      "Standalone heritage cottage",
      "Separate wood-panelled sitting room",
      "Vaulted teak ceilings",
      "King-size bed with premium linen",
      "Antique cane furniture",
      "Wardrobe & storage",
      "Tea & coffee corner",
      "En-suite bathroom",
      "Ceiling & wall fans",
      "24-hour hot water",
      "Complimentary high-speed WiFi",
      "Private courtyard",
      "Daily housekeeping",
    ],
    metaTitle: "Vintage Home in Wayanad — Heritage Cottage at YNAD Mount Resort",
    metaDescription:
      "The Vintage Home at YNAD Mount Resort, Wayanad: a standalone heritage cottage with vaulted teak ceilings, a wood-panelled sitting room and antique cane furniture. Check availability on WhatsApp.",
    keywords: [
      "vintage home wayanad",
      "heritage cottage wayanad",
      "wayanad resort cottage",
      "family cottage wayanad",
      "ynad mount resort vintage home",
    ],
  },
  {
    name: "Premium Suite",
    slug: "premium-suite",
    hasPage: true,
    image: "/rooms/premium-suite/bedroom.jpg",
    images: [
      "/rooms/premium-suite/bedroom.jpg",
      "/rooms/premium-suite/suite-lounge.jpg",
      "/rooms/premium-suite/balcony.jpg",
      "/rooms/premium-suite/bathtub.jpg",
      "/rooms/premium-suite/balcony-2.jpg",
      "/rooms/premium-suite/bedroom-2.jpg",
    ],
    blurb:
      "A refined king suite with an in-room lounge, a private balcony framing the valley and a soaking tub set to the sunset — made for couples who want the view in every room.",
    details: ["Valley-view balcony", "Soaking bathtub", "King bed"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for the Premium Suite.",

    tagline: "King suite with a valley-view balcony & soaking tub",
    maxOccupancy: 3,
    aboutKicker: "The Suite",
    aboutLead: "Built around",
    aboutEm: "the view",
    specs: [
      { label: "Sleeps", value: "2 Adults + 1 Child" },
      { label: "Bed", value: "King-size" },
      { label: "Outlook", value: "Private valley balcony" },
      { label: "Layout", value: "Bedroom + lounge" },
    ],
    description: [
      "The Premium Suite is built around the view. A king bed sits against a back-lit, forest-green headboard, while full-height drapes pull back to a private balcony — ornate ironwork, hanging lanterns and the valley falling away into palm and forest below.",
      "There's room to linger indoors too: a leather lounge by the windows for evening drinks, a patterned rug underfoot and warm wood detailing that keeps the modern lines feeling soft.",
      "Best of all is the bath — a deep soaking tub framed by a window onto the hills, so the sunset comes with you. It's the kind of room couples book once and remember for a long time.",
    ],
    roomFeatures: [
      "Private valley-view balcony",
      "Soaking bathtub with a view",
      "In-room lounge seating",
      "King-size bed with premium linen",
      "Back-lit upholstered headboard",
      "Air-conditioned",
      "Floor-to-ceiling drapes",
      "Marble-topped nightstands",
      "En-suite bathroom with hot water",
      "Balcony seating",
      "Complimentary high-speed WiFi",
      "Daily housekeeping",
    ],
    metaTitle: "Premium Suite in Wayanad — Valley-View Balcony & Bathtub",
    metaDescription:
      "The Premium Suite at YNAD Mount Resort, Wayanad: a king suite with an in-room lounge, a private valley-view balcony and a soaking bathtub overlooking the hills. Check availability on WhatsApp.",
    keywords: [
      "premium suite wayanad",
      "wayanad room with bathtub",
      "valley view room wayanad",
      "wayanad resort for couples",
      "ynad mount resort premium suite",
    ],
  },
  {
    name: "Junior Suite",
    slug: "junior-suite",
    hasPage: true,
    image: "/rooms/junior-suite/bedroom-balcony.jpg",
    // Auto-fading gallery — real photographs of the suite, in viewing order.
    images: [
      "/rooms/junior-suite/bedroom-balcony.jpg",
      "/rooms/junior-suite/living-room.jpg",
      "/rooms/junior-suite/lounge.jpg",
      "/rooms/junior-suite/bedroom.jpg",
      "/rooms/junior-suite/bathroom.jpg",
    ],
    blurb:
      "A suite with room to breathe — a king bedroom that opens onto a private balcony, a separate living lounge and a marble-and-teak bathroom. Room to spread out, slow down and let Wayanad in.",
    details: ["Private balcony", "Separate living room", "King bed"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for the Junior Suite.",

    // ── Detail-page content ──────────────────────────────────────
    tagline: "Living room, private balcony and valley views",
    maxOccupancy: 3,
    aboutKicker: "The Suite",
    aboutLead: "Room to",
    aboutEm: "spread out",
    specs: [
      { label: "Sleeps", value: "2 Adults + 1 Child" },
      { label: "Bed", value: "King-size" },
      { label: "Outlook", value: "Private balcony · valley" },
      { label: "Layout", value: "Bedroom + living lounge" },
    ],
    description: [
      "The Junior Suite is where YNAD gives you room to breathe. A king bedroom — wrapped in warm teak panelling, soft white linen and a flush of forest green — opens through full-height glass onto your own private balcony, where the valley and the tea slopes drift in and out of the mist.",
      "Just beyond the bed sits a separate living lounge: deep leather seating, a low coffee table and a candle-lit marble feature wall. It's the kind of space made for slow evenings — a book, a quiet drink, or simply the sound of rain on the hills.",
      "A backlit dresser, flat-screen TV and tea-and-coffee corner keep things easy, while the en-suite — all marble, teak and a glass-enclosed shower — turns the everyday into something a little more indulgent.",
    ],
    roomFeatures: [
      "Private furnished balcony",
      "Separate living lounge",
      "King-size bed with premium linen",
      "Air-conditioned",
      "Ceiling & wall fans",
      "En-suite bathroom with glass shower",
      "Marble vanity with twin basins",
      "Backlit mirror & hair dryer",
      "Flat-screen TV",
      "Tea & coffee maker",
      "Wardrobe & dresser",
      "Direct-dial telephone",
      "24-hour hot water",
      "Complimentary high-speed WiFi",
      "Daily housekeeping",
    ],
    metaTitle: "Junior Suite in Wayanad — Private Balcony & Living Room",
    metaDescription:
      "The Junior Suite at YNAD Mount Resort, Wayanad: a spacious king bedroom with a private balcony, a separate living lounge and a marble en-suite bathroom. Check availability on WhatsApp.",
    keywords: [
      "junior suite wayanad",
      "wayanad resort suite",
      "suite room with balcony wayanad",
      "ynad mount resort junior suite",
      "luxury rooms in meppadi",
    ],
  },
];

export function getRoom(slug) {
  return ROOMS.find((room) => room.slug === slug);
}

export const OFFERS = [
  {
    title: "Monsoon Mist",
    deal: "Stay 3 nights, pay for 2",
    note: "For the rain chasers. Valid on direct WhatsApp bookings through the monsoon season.",
    wa: "Hi YNAD Mount Resort! I'd like to know more about the Monsoon Mist offer (stay 3, pay 2).",
  },
  {
    title: "Honeymoon Hideaway",
    deal: "Candlelight dinner + room styling",
    note: "A complimentary romantic dinner and floral room décor for newly-weds on stays of 2+ nights.",
    wa: "Hi YNAD Mount Resort! We're planning our honeymoon — could you share the Honeymoon Hideaway details?",
  },
  {
    title: "Early Bird",
    deal: "Up to 20% off direct bookings",
    note: "Book 21 days ahead on WhatsApp and keep more of your budget for the journey.",
    wa: "Hi YNAD Mount Resort! I'd like to claim the Early Bird direct-booking offer.",
  },
];

// Full amenity list — shown in full on /amenities; the `highlight` items
// also appear in the compact strip on the homepage.
export const AMENITIES = [
  {
    name: "Infinity Pool",
    // Real YNAD photo (optimized to 1200px-wide JPEG in /public/amenities)
    image: "/amenities/pool.jpg",
    desc: "Swim to the edge and watch the valley fall away below — best at sunrise, when the mist is still in the trees.",
    included: true,
    highlight: true,
  },
  {
    name: "Restaurant",
    // Real YNAD photo (optimized to 1200px-wide JPEG in /public/amenities)
    image: "/amenities/resto.jpg",
    desc: "Kerala home cooking and slow continental classics, made fresh with produce from the hills around us.",
    included: false,
    badge: "À la carte",
    highlight: true,
  },
  {
    name: "Spa",
    image: u("photo-1544161515-4ab6ce6db874", 800),
    desc: "Traditional Ayurvedic therapies and deep-rest massages, scented with the cardamom air of Wayanad.",
    included: false,
    highlight: true,
  },
  {
    name: "Bonfire with Music",
    image: u("photo-1475483768296-6163e08872a1", 800),
    desc: "Evenings around the fire, with music and a sky full of mountain stars.",
    included: true,
    highlight: true,
  },
  {
    name: "BBQ Facility",
    image: u("photo-1555939594-58d7cb561ad1", 800),
    desc: "Grill under the stars — we set up the barbecue, you bring the appetite.",
    included: false,
    badge: "On request",
    highlight: true,
  },
  {
    name: "Indoor Games",
    image: u("photo-1611251135345-18c56206b863", 800),
    desc: "Table tennis, carrom and more — friendly rivalries for the rainy afternoons.",
    included: true,
    highlight: true,
  },
  {
    name: "Gym",
    image: u("photo-1534438327276-14e5300c3a48", 800),
    desc: "A compact, well-kept fitness room for travellers who keep their routine even above the clouds.",
    included: true,
  },
  {
    name: "Kids Play Area",
    image: u("photo-1471286174890-9c112ffca5b4", 800),
    desc: "A safe, sunny corner where little explorers can run wild while you slow down.",
    included: true,
  },
  {
    name: "Recreation Room",
    image: u("photo-1610890716171-6b1bb98ffd09", 800),
    desc: "An easy indoor lounge for board games, conversation and lazy afternoons.",
    included: true,
  },
  {
    name: "Badminton",
    image: u("photo-1626224583764-f87db24ac4ea", 800),
    desc: "A breath-of-fresh-air court for an evening rally before dinner.",
    included: true,
  },
  {
    name: "Kids Football",
    image: u("photo-1551958219-acbc608c6377", 800),
    desc: "Open green space for the little ones to chase a ball till sundown.",
    included: true,
  },
  {
    name: "Conference Hall",
    image: u("photo-1431540015161-0bf868a2d407", 800),
    desc: "A quiet, well-equipped space for offsites, meetings and small gatherings.",
    included: false,
    badge: "On request",
  },
  {
    name: "Ample Car Parking",
    image: u("photo-1506521781263-d8422e82f27a", 800),
    desc: "Plenty of secure, on-site parking — arrive and forget about the car.",
    included: true,
  },
  {
    name: "24 Hrs Hot Water",
    image: u("photo-1584622650111-993a426fbf0a", 800),
    desc: "Round-the-clock hot water for those cold, misty mountain mornings.",
    included: true,
  },
  {
    name: "24 Hrs Security",
    image: u("photo-1558002038-1055907df827", 800),
    desc: "On-site security and monitoring, so you can switch off completely.",
    included: true,
  },
  {
    name: "Free WiFi",
    image: u("photo-1606904825846-647eb07f5be2", 800),
    desc: "Complimentary high-speed WiFi across the property — connect, or don't.",
    included: true,
  },
  {
    name: "Drivers Room",
    image: u("photo-1590490360182-c33d57733427", 800),
    desc: "Comfortable quarters so the people who brought you here rest easy too.",
    included: true,
  },
];

// Compact set shown on the homepage; full list lives on /amenities.
export const HOME_AMENITIES = AMENITIES.filter((a) => a.highlight);

export const TESTIMONIALS = [
  {
    name: "Anjali & Rohit",
    from: "Bengaluru",
    quote:
      "We woke up to a sea of clouds below our balcony. The quiet here is something you carry home with you.",
  },
  {
    name: "Meera Nair",
    from: "Kochi",
    quote:
      "The Vintage Home felt like my grandmother's house, only with better coffee. My kids didn't want to leave.",
  },
  {
    name: "Daniel & Sara",
    from: "London",
    quote:
      "Of all our stops in Kerala, YNAD was the one we extended. Mist, rain on the roof, zero noise. Perfect.",
  },
  {
    name: "Arjun Menon",
    from: "Chennai",
    quote:
      "Booked over WhatsApp in five minutes, got the warmest welcome in Wayanad. The staff treat you like family.",
  },
  {
    name: "Fatima K.",
    from: "Dubai",
    quote:
      "That moody Wayanad climate everyone talks about? It's real, and this is the place to live inside it.",
  },
];

// 540×960 vertical renditions — the reel cards render ~264px wide, so this
// is already retina-sharp and cuts the marquee's video payload by ~70%
// (~26MB total vs ~90MB at 1080×1920).
export const REELS = [
  {
    src: "https://videos.pexels.com/video-files/15346324/15346324-sd_540_960_30fps.mp4",
    label: "Misty forest mornings",
  },
  {
    src: "https://videos.pexels.com/video-files/5007874/5007874-sd_540_960_30fps.mp4",
    label: "Rain on the leaves",
  },
  {
    src: "https://videos.pexels.com/video-files/16754842/16754842-sd_540_960_30fps.mp4",
    label: "Waterfalls from above",
  },
  {
    src: "https://videos.pexels.com/video-files/11897264/11897264-sd_540_960_25fps.mp4",
    label: "Monsoon close-up",
  },
  {
    src: "https://videos.pexels.com/video-files/9604517/9604517-sd_540_960_30fps.mp4",
    label: "Hidden cascades",
  },
  {
    src: "https://videos.pexels.com/video-files/5492238/5492238-sd_540_960_30fps.mp4",
    label: "River through the rocks",
  },
  {
    src: "https://videos.pexels.com/video-files/9389373/9389373-sd_540_960_30fps.mp4",
    label: "The stream below the hill",
  },
];

export const FAQS = [
  {
    q: "Where exactly is YNAD Mount Resort located?",
    a: "We are at Valathoor, Rippon, near Meppadi in Wayanad, Kerala (PIN 673577) — about 20 minutes from Kalpetta and close to Soochipara Falls, Chembra Peak and the Rippon tea estates.",
  },
  {
    q: "What is the best time to visit Wayanad?",
    a: "Wayanad is a year-round destination. October to May brings clear mountain views and pleasant weather, while June to September is monsoon season — mist, rain and the moody climate Wayanad is famous for.",
  },
  {
    q: "How do I book a room?",
    a: "The fastest way is WhatsApp. Message us at +91 99951 49001 with your dates and we'll confirm availability and our best direct rates within minutes.",
  },
  {
    q: "Is the resort suitable for families with children?",
    a: "Very much so. Our Vintage Home is designed for families and groups, with open gardens and safe spaces for children, while couples usually prefer our Premium Suite or Junior Suite.",
  },
  {
    q: "What attractions are near the resort?",
    a: "Soochipara (Sentinel Rock) Falls, Chembra Peak and its heart-shaped lake, Kanthanpara Falls, the 900 Kandi glass bridge and the tea gardens of Rippon and Meppadi are all a short drive away.",
  },
];
