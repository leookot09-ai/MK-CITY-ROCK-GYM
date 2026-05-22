export const SERVICES = [
  {
    icon: "🏋️",
    tag: "Open Floor",
    tagType: "tag-orange",
    title: "Strength & Conditioning",
    subtitle: "Free Weights. Machines. Results.",
    description: "Our 1,000+ sqm training floor features premium plates, dumbbells up to 50kg, selectorized machines, and a dedicated functional training zone. No waiting. No limits. Just space to build your strength.",
    features: ["50+ strength machines", "Dumbbells 2.5kg–50kg", "Functional rig & turf zone", "Towel & water refill stations"],
    difficulty: "All Levels",
  },
  {
    icon: "🤸",
    tag: "High Energy",
    tagType: "tag-cyan",
    title: "Group Fitness Classes",
    subtitle: "Move. Sweat. Connect.",
    description: "Join 20+ weekly classes led by certified instructors. From high-intensity interval training (HIIT) and cycling to restorative yoga and dance fitness. Every class is scalable to your fitness level.",
    features: ["20+ classes weekly", "HIIT, Spin, Yoga & Dance", "Certified lead instructors", "Small class sizes (max 25)"],
    difficulty: "Beginner → Advanced",
  },
  {
    icon: "🎯",
    tag: "1-on-1 Coaching",
    tagType: "tag-green",
    title: "Personal Training",
    subtitle: "Custom Programs. Real Accountability.",
    description: "Get matched with a certified personal trainer who designs a program around your goals, schedule, and biomechanics. Includes nutrition guidance, progress tracking, and technique correction.",
    features: ["Certified personal trainers", "Custom programming & tracking", "Nutrition & recovery guidance", "Flexible scheduling (AM/PM/Weekend)"],
    difficulty: "Goal-Driven",
  },
];

export const DAILY_PASSES = [
  {
    name: "Day Pass",
    price: "UGX 20,000",
    usd: "≈ $5.00",
    featured: false,
    perks: ["Full gym floor access", "Locker room & showers", "Complimentary water & towel", "Fitness app access", "Valid 6 AM – 10 PM"],
  },
  {
    name: "Day Pass + Class",
    price: "UGX 35,000",
    usd: "≈ $9.00",
    featured: true,
    perks: ["Everything in Day Pass", "1 group class included", "Pre-class fitness assessment", "Post-session recovery zone", "Guided equipment orientation"],
  },
];

export const MONTHLY_PASSES = [
  {
    name: "Full Access Membership",
    price: "UGX 150,000",
    usd: "≈ $40 / month",
    featured: false,
    perks: ["Unlimited daily gym access", "All group classes included", "Priority locker reservation", "10% off personal training", "Member-only wellness events"],
  },
  {
    name: "Premium Membership",
    price: "UGX 250,000",
    usd: "≈ $65 / month",
    featured: true,
    perks: ["Everything in Full Access", "Bring 1 guest 4x/month", "Free monthly PT check-in", "Exclusive recovery sauna & steam", "Dedicated premium locker (30-day)"],
  },
];

export const HOURS = [
  { day: "Monday", time: "5:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "5:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "5:30 AM – 10:00 PM" },
  { day: "Thursday", time: "5:30 AM – 10:00 PM" },
  { day: "Friday", time: "5:30 AM – 9:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
];

export const FAQS = [
  {
    q: "Do I need prior gym experience?",
    a: "Not at all! Most of our members started as beginners. Every new member receives a complimentary fitness orientation with one of our certified trainers who’ll walk you through equipment safety, suggest a starter routine, and help you set realistic goals. You’ll be training confidently within your first visit.",
  },
  {
    q: "What should I wear to a workout?",
    a: "Wear breathable, comfortable athletic wear that allows full movement — think moisture-wicking tops, shorts or leggings, and closed-toe training shoes. Avoid denim or loose clothing that restricts movement. We provide lockers for your bag and fresh towels for showers.",
  },
  {
    q: "Are personal trainers available, and how do I book one?",
    a: "Yes. We have a team of certified personal trainers specializing in strength, weight loss, sports performance, and rehabilitation. You can book a consultation through our app, website, or at the front desk. Initial assessments are free with any membership package.",
  },
  {
    q: "Is Mk City Gym safe for beginners and older adults?",
    a: "Absolutely. Our gym floor is supervised by trained staff during all operating hours. We offer low-impact classes, senior-friendly strength programs, and modified routines for every fitness level. Safety and proper form are our top priorities.",
  },
  {
    q: "Do I need to book classes in advance?",
    a: "We recommend booking group classes 2–3 days in advance via our website or mobile app, as spots are limited to 25 participants for quality coaching. Walk-ins are welcome but subject to availability. Gym floor access never requires booking.",
  },
  {
    q: "Do you offer corporate wellness or group packages?",
    a: "Yes. We specialize in corporate wellness programs, team-building fitness events, and bulk membership discounts for companies and organizations. We can also host private workshops and wellness seminars on-site. Contact us to design a custom package.",
  },
];

export const STATS = [
  { value: "800+", label: "Active Members" },
  { value: "20+", label: "Weekly Classes" },
  { value: "1,500", label: "sqm Training Space" },
  { value: "4 yrs", label: "Serving Kampala" },
];