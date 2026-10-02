// The journey, newest first.
// CHAPTERS are the big cards on the timeline; each chapter's subs are the smaller cards nested under it.
// Every item can be previewed (right panel) and opened (detail page).
window.CHAPTERS = ["next", "builder", "coalition", "meta", "azara", "harvard"];

// Left-hand index. "beyond" entries are plain labels, not timeline items.
window.INDEX = {
  journey: ["next", "builder", "coalition", "meta", "azara", "t4sg", "harvard"],
  projects: ["codename-sleep", "gemnight", "sprint-rivals", "quickkey", "leetlog", "dumpnotes", "quincy-videos", "chinese-rap"],
  beyond: [
    { label: "Fitness & health", icon: "dumbbell", items: ["Sprinting", "Distance running", "Bodybuilding-style training", "Exercise science"] },
    { label: "Creative", icon: "design", items: ["Music production", "Video production", "Graphic design", "Drawing manga"] },
    { label: "Languages", icon: "chinese", items: ["Chinese"] },
    { label: "History", icon: "column", items: ["Greek & Roman"] }
  ],
  books: [
    { title: "Steve Jobs", author: "Walter Isaacson", cover: "assets/books/jobs.jpg", now: true },
    { title: "The Millionaire Fastlane", author: "MJ DeMarco", cover: "assets/books/fastlane.jpg" }
  ]
};

window.FEATURED = "sprint-rivals"; // what the preview panel shows before anything is hovered

window.TIMELINE = [
  /* ---------------- Harvard ---------------- */
  {
    id: "harvard",
    galleryLabel: "Photos",
    kind: "Education",
    color: "#e5484d",
    title: "Harvard",
    sub: "A.B. Computer Science",
    date: "2020 – 2024",
    icon: "assets/logos/harvard.png", mark: true,
    image: "assets/me/graduation.jpg",
    blurb: "Computer Science at Harvard College, plus design research for Human Rights Watch and course projects in HCI and graphics.",
    peek: "Computer Science at Harvard College, Class of 2024. Along the way: two summers of iOS at Meta, a full-stack internship, and UX research for Human Rights Watch.",
    body: [
      "Bachelor of Arts in Computer Science from Harvard College, graduated May 2024. Along the way: two summers of iOS at Meta, a full-stack internship at Azara Healthcare, and UX research for Human Rights Watch through Tech for Social Good."
    ],
    subsLabel: "From this chapter",
    subs: ["quincy-videos", "chinese-rap", "ilingual", "beachbrawl", "t4sg"],
    gallery: [
      { src: "assets/me/graduation.jpg", alt: "Samuel in cap and gown outside Widener Library" },
      { src: "assets/web/headshot.jpg", alt: "Samuel at graduation" }
    ]
  },
  {
    id: "t4sg",
    techLabel: "Methods & tools",
    kind: "Design research",
    color: "#2ec4b6",
    title: "Tech for Social Good",
    sub: "UI/UX Designer & Researcher",
    date: "Feb – May 2021",
    icon: "assets/logos/t4sg.png", mark: true,
    blurb: "An evidence-management system for Human Rights Watch researchers.",
    peek: "Designed an evidence-management system for Human Rights Watch researchers, based on user interviews and usability testing.",
    body: [
      "Through the Harvard Computer Society's Tech for Social Good, I designed a centralized evidence-management system so Human Rights Watch researchers could track and store evidence digitally.",
      "The work ran in design sprints using the double-diamond research model: user interviews, usability tests, personas, and lo-fi to hi-fi prototypes in Figma."
    ],
    tech: ["Figma", "User research", "Usability testing"]
  },
  {
    id: "quincy-videos",
    techLabel: "What I did", galleryLabel: "Videos",
    kind: "Creative direction",
    color: "#e0b43a",
    title: "Quincy House music videos",
    sub: "Co-director, Housing Day",
    date: "2022 \u2013 2024",
    icon: "assets/proj/quincy-shield.jpg",
    image: "assets/web/qhd23.jpg",
    featLabel: "Highlights",
    collage: ["assets/web/qhd24.jpg", "assets/web/qhd22.jpg", "assets/web/qhd23.jpg"], // show every video, 2024 and 2022 first
    blurb: "Co-directed three Housing Day music videos for my house, with crews of 10+ and no budget.",
    peek: "Co-directed three years of Quincy House's Housing Day music video, a Harvard tradition where every house makes one. 37K+ views on YouTube, and the 2022 video was ranked the best of the year.",
    body: [
      "Every spring, each Harvard house makes a music video for Housing Day, the day first-years find out where they'll live. I co-directed Quincy House's video three years running: the original, the sequel and the trilogy. Each was a half-semester project with a crew of 10+ students, including a student animator, and essentially no budget. We planned in Notion and edited in Premiere Pro and CapCut.",
      "The hardest part wasn't the camera work. It was getting a big group of busy people to bring their best when nobody was getting paid, and keeping each year fresh: a story in three acts in 2022, a stylized penguin sequel in 2023, and in 2024 a video modelled on Drake and J. Cole's \"First Person Shooter\". We reached out to that video's director, and he watched ours and loved it."
    ],
    stat: { value: "37K+", label: "YouTube views across the three videos" },
    highlights: [
      "2022: ranked the best Housing Day video of the year by the Harvard Crimson's FlyBy blog",
      "2024: we reached out to the director of Drake and J. Cole's \"First Person Shooter\" video, which ours was based on. He watched it and loved it",
      "Crews of 10+ students each year, including a student animator, with essentially no budget"
    ],
    tech: ["Directing", "Video production", "Editing", "Team leadership", "Project management"],
    tools: ["Notion", "Premiere Pro", "CapCut"],
    links: [
      { label: "Watch 2024", href: "https://www.youtube.com/watch?v=QhKnkfdVd2k" },
      { label: "Watch 2023", href: "https://www.youtube.com/watch?v=a7dLZhl2aD4" },
      { label: "Watch 2022", href: "https://www.youtube.com/watch?v=rx3IhL39ZPs" },
      { label: "Crimson ranking", href: "https://www.thecrimson.com/flyby/article/2022/3/21/2022-housing-day-video-ranking/" }
    ],
    gallery: [
      { youtube: "QhKnkfdVd2k", poster: "assets/web/qhd24.jpg", alt: "Quincy Housing Day 2024" },
      { youtube: "a7dLZhl2aD4", poster: "assets/web/qhd23.jpg", alt: "#PENGUINSFOREVER, Quincy Housing Day 2023" },
      { youtube: "rx3IhL39ZPs", poster: "assets/web/qhd22.jpg", alt: "Quincy Housing Day 2022: a work in three acts" }
    ]
  },
  {
    id: "chinese-rap",
    techLabel: "What I did", galleryLabel: "Stills",
    kind: "Music video",
    featLabel: "Highlights",
    color: "#ff6a3d",
    title: "\u5b66\u751f\u751f\u6d3b",
    sub: "A rap music video in Chinese",
    date: "Harvard",
    glyph: "\u5b66", glyphBg: "#1b1b1f", glyphInk: "#ffffff",
    image: "assets/web/chinese2.jpg",
    blurb: "Wrote and recorded a rap in Chinese. It won Best Original/Adapted Song at Harvard's Chinese Film Fest.",
    peek: "\u5b66\u751f\u751f\u6d3b (Student Life): a rap I wrote and recorded in Chinese, with a music video. It won Best Original/Adapted Song at Harvard's annual Chinese Film Fest.",
    body: [
      "\u5b66\u751f\u751f\u6d3b (Student Life) is a rap I wrote and recorded in Chinese, with a music video to go with it, after studying the language for two-plus years.",
      "It was awarded Best Original/Adapted Song at Harvard's annual Chinese Film Fest."
    ],
    stat: { value: "Best Song", label: "Original/Adapted, at Harvard's annual Chinese Film Fest" },
    tech: ["Songwriting in Chinese", "Recording", "Directing", "Editing"],
    links: [{ label: "Watch the video", href: "https://drive.google.com/file/d/1ZUsXNkBVFqcC48qX68qyKSiS4P8pIhzD/view?usp=sharing" }],
    gallery: [
      { src: "assets/web/chinese2.jpg", alt: "\u8fd9\u4e2a\u95ee\u9898\u5f88\u4e25\u91cd: It was a serious problem" },
      { src: "assets/web/chinese1.jpg", alt: "\u60f3\u5f53\u4ec0\u4e48: What do you want to become?" }
    ]
  },
  {
    id: "ilingual",
    kind: "Course project",
    color: "#e5484d",
    title: "iLingual.ai",
    sub: "Harvard CS178",
    date: "Harvard",
    icon: "assets/iLingualLogo.png", iconFit: "contain",
    blurb: "Context-aware translation with GPT-4.",
    peek: "A translation app that uses GPT-4 for context: regional dialects, the situation you're in, and what you actually mean.",
    body: [
      "A translation app that uses GPT-4 to give more contextual and accurate translations, accounting for regional dialects and situational and logical context.",
      "A group final project for Harvard's CS178, Engineering Usable Interactive Systems."
    ],
    tech: ["React", "Flask", "GPT-4 API", "Figma"],
    links: [{ label: "Demo", href: "https://drive.google.com/file/d/1CvGyCO0hYmPWEa-73hV4Rp4J2CR_fnn7/view?usp=sharing" }],
    gallery: [{ src: "assets/iLingualLogo.png", alt: "iLingual.ai logo", contain: true }]
  },
  {
    id: "beachbrawl",
    kind: "Course project",
    color: "#e5484d",
    title: "BeachBrawl",
    sub: "Harvard CS175",
    date: "Harvard",
    icon: "assets/proj/beachbrawl-icon.jpg",
    image: "assets/web/beach_brawl_demo-poster.jpg",
    blurb: "Space Invaders, taken into 3D.",
    peek: "A Unity game that takes Space Invaders into 3D, with enemies coming from the sky and the sea.",
    body: [
      "A Unity game built as the final project for Harvard's CS175, Computer Graphics. The brief was to adapt a popular game with a creative spin. I took Space Invaders into a three-dimensional world where you fight enemies on two planes: missiles from the air and sharks from the sea."
    ],
    tech: ["Unity", "C#"],
    links: [{ label: "Demo", href: "https://drive.google.com/file/d/1G4Q51pnRqIJO5gkQ5yeLaS8QIy8xq2fl/view?usp=sharing" }],
    gallery: [{ video: "assets/web/beach_brawl_540.mp4", poster: "assets/web/beach_brawl_demo-poster.jpg", alt: "BeachBrawl gameplay" }]
  },

  /* ---------------- Azara ---------------- */
  {
    id: "azara",
    kind: "Internship",
    color: "#3fb68b",
    title: "Azara Healthcare",
    sub: "Full-Stack Engineering Intern",
    date: "Summer 2021",
    icon: "assets/logos/azara.png", mark: true,
    blurb: "A usage-analytics dashboard for health centers nationwide.",
    peek: "Built a usage-analytics dashboard for health centers nationwide, and brought Figma into the team's design workflow.",
    body: [
      "Built an extensible usage-analytics dashboard that asynchronously displays visual analytics for health-center clients nationwide.",
      "The work was in .NET with C#, LINQ and SQL on the backend and HTML, CSS and JavaScript with the Google Charts API on the front, in an MVC pattern. I also introduced Figma to the team's design workflow."
    ],
    tech: [".NET", "C#", "LINQ", "SQL", "Google Charts API", "Figma"]
  },

  /* ---------------- Meta ---------------- */
  {
    id: "meta",
    galleryLabel: "Photos",
    kind: "Internships",
    color: "#4c8dff",
    title: "Meta",
    sub: "iOS Engineering Intern",
    date: "2022 – 2023",
    icon: "assets/logos/meta.png", mark: true,
    image: "assets/web/meta2023.jpg",
    blurb: "Two summers of iOS: a capstone app in Seattle, then capture preview for the Ray-Ban smart glasses app.",
    peek: "Two summers of iOS at Meta: a capstone app through Meta University in Seattle, then capture preview for the Ray-Ban smart glasses app in Menlo Park.",
    body: [
      "Two summers building iOS at Meta. The first was Meta University, the internship program for early engineers, where I owned a capstone app end to end. The second was on the team behind the Meta Ray-Ban Stories app, where I built and shipped capture preview."
    ],
    groups: [
      {
        title: "2023 · Ray-Ban Stories · Menlo Park",
        items: [
          "Built and shipped capture preview, so people can see what's on their glasses before importing it, which cuts wait times and unnecessary imports",
          "Swift with Combine and MVVM: new routes, UI components and asynchronous capture logic",
          "Refactored media components into a ViewModel-based architecture with dependency injection, for modularity and testability",
          "Debugged UI and rendering issues with Xcode and Flex"
        ]
      },
      {
        title: "2022 · Meta University · Seattle",
        items: [
          "Led the end-to-end development of a capstone iOS app in Objective-C, from wireframing and roadmapping to prototyping, building and the final demo",
          "Implemented authentication, API integration, persistence and Auto Layout, with third-party dependencies through CocoaPods"
        ]
      }
    ],
    tech: ["Swift", "Combine", "MVVM", "Objective-C", "MVC", "Parse", "CocoaPods", "Xcode"],
    subsLabel: "From this chapter",
    subs: ["rayban", "centrality"],
    gallery: [
      { src: "assets/web/meta2023.jpg", alt: "Samuel at Meta's Menlo Park campus, 2023" },
      { src: "assets/web/meta2022.jpg", alt: "Samuel at Meta's Seattle office, 2022" }
    ]
  },
  {
    id: "rayban",
    kind: "Internship project",
    color: "#4c8dff",
    title: "Ray-Ban Stories",
    sub: "Capture preview, iOS",
    date: "Summer 2023",
    icon: "assets/logos/meta.png", mark: true,
    image: "assets/proj/rayban-app.png",
    blurb: "Built and shipped capture preview in the iOS app for Meta's Ray-Ban smart glasses.",
    peek: "On the team behind the iOS companion app for Meta's Ray-Ban Stories glasses, I built and shipped a feature that lets people preview captures before importing them.",
    body: [
      "My second summer at Meta was on the team behind the iOS companion app for Ray-Ban Stories, Meta's camera glasses. Photos and videos you take on the glasses get imported into the app.",
      "I built and shipped capture preview: a way to see what's on your glasses before importing it, which cuts wait times and unnecessary imports. It meant new routes, new UI components and asynchronous capture logic in Swift with Combine and MVVM. Along the way I refactored media components into a ViewModel-based architecture with dependency injection, and debugged UI and rendering issues with Xcode and Flex."
    ],
    highlights: [
      "Built and shipped capture preview in the Ray-Ban Stories iOS app",
      "New routes, UI components and asynchronous capture logic in Swift, Combine and MVVM",
      "Refactored media components to ViewModels with dependency injection, for modularity and testability"
    ],
    tech: ["Swift", "Combine", "MVVM", "Xcode", "Flex"],
    gallery: [{ src: "assets/proj/rayban-app.png", alt: "The Facebook View app for Ray-Ban Stories at launch (Meta product images)", tall: true }]
  },
  {
    id: "centrality",
    kind: "Capstone",
    color: "#35c65d",
    title: "Centrality",
    sub: "Meta University capstone",
    date: "Summer 2022",
    glyph: "C", glyphBg: "#35c65d", glyphInk: "#ffffff",
    image: "assets/web/centrality_demo-poster.jpg",
    blurb: "A Todoist-inspired productivity app in Objective-C.",
    peek: "A Todoist-inspired productivity app with collaborative tasks, a usage dashboard, and filtering and categories.",
    body: [
      "A mobile productivity app built as my Meta University capstone, aimed at students, working professionals and anyone who loves a good to-do list. It has collaborative tasks, a usage dashboard, and filtering and category options. Inspired by Todoist."
    ],
    tech: ["Objective-C", "Xcode", "Parse", "iOS"],
    gallery: [{ video: "assets/centrality_demo.mp4", poster: "assets/web/centrality_demo-poster.jpg", alt: "Centrality demo", tall: true }]
  },

  /* ---------------- Coalition ---------------- */
  {
    id: "coalition",
    kind: "Full-time",
    color: "#2ec4a6",
    title: "Coalition",
    sub: "Software Engineer",
    date: "2025 – 2026",
    icon: "assets/logos/coalition.png", mark: true,
    blurb: "A year and a half on the backend of a cyber insurance platform, in Python and Go.",
    peek: "A year and a half on the backend of a multi-service cyber insurance platform: international launches, a 70,000-email-a-month migration, and regular primary on-call.",
    body: [
      "I worked on the backend of the platform brokers use to get quotes and bind cyber insurance policies: the application, pricing and policy documents. It's a multi-service system in Python (Flask) and Go, with PostgreSQL and gRPC.",
      "January 2025 to August 2026."
    ],
    stat: { value: "70K", label: "customer emails a month moved to a new provider, with none missed" },
    highlights: [
      "Owned the migration of 70+ email templates (about 70,000 emails a month) to a new provider and templating language, with zero missed customer emails",
      "Led the technical integration for international expansion (Australia, and Canada in English and French) across the application, pricing and document services",
      "Primary on-call engineer; traced a 40M+ request thundering-herd incident to a frontend root cause and drove the fix with the owning team, with no customer-facing outage",
      "Built internal tools shared across the company, and revived the team's monthly social events"
    ],
    tech: ["Python", "Flask", "Go", "PostgreSQL", "gRPC", "AWS", "Datadog", "Cursor"],
    subsLabel: "Key work from this chapter",
    subs: ["c-email", "c-intl", "c-oncall", "c-tools"]
  },
  {
    id: "c-email",
    techLabel: "Tools & techniques",
    kind: "Coalition",
    color: "#2ec4a6",
    title: "Email platform migration",
    sub: "70+ templates, 70K emails a month",
    date: "2025 – 2026",
    sym: "mail",
    blurb: "Moved every customer email my team sent to a new provider without missing one.",
    peek: "Moved my team's 70+ customer email templates to a new provider and templating language, behind feature flags and shadow tests, with zero missed customer emails.",
    body: [
      "The company was leaving its old email provider for a new one with a different templating language. About 70,000 customer emails a month went through my team's templates, and each had to be converted, validated, signed off by product and rolled out without breaking a production email.",
      "I proposed replacing several near-identical templates with one smart template that changes what it shows depending on the scenario, which cut down how many needed converting at all. Then I ran the migration: shadow-testing old output against new, putting every change behind a feature flag, rolling out in batches with the most-sent emails first, and turning a flag back off the moment something looked wrong. Many templates had no tests, so I wrote them before the bulk conversion could quietly break one.",
      "My team finished two weeks before the old contract ended."
    ],
    stat: { value: "0", label: "missed customer emails across about 70,000 a month" },
    tech: ["Python", "Feature flags", "Shadow testing", "Cursor"]
  },
  {
    id: "c-intl",
    kind: "Coalition",
    color: "#2ec4a6",
    title: "International expansion",
    sub: "Australia and Canada (English and French)",
    date: "2025 – 2026",
    sym: "globe",
    blurb: "Launched new insurance applications in three markets, across services I didn't own.",
    peek: "Built the application versions for English Canada, French Canada and Australia across four repos, and later the large-business versions for four markets.",
    body: [
      "In my first months I built the refreshed insurance applications for English Canada, French Canada and Australia across four repos, including application versioning on the core web server and the French localization. I demoed all three markets at the company's engineering demo.",
      "In 2026 I led the large-business application versions for Australia, the UK, English Canada and US Surplus: designing how the right version gets selected, protecting other testers behind a feature flag, and working with the rating team to fix what their service needed from ours. I became the go-to person for Australia-specific issues."
    ],
    tech: ["Python", "Go", "gRPC", "Protocol Buffers", "PostgreSQL"]
  },
  {
    id: "c-oncall",
    techLabel: "Tools",
    kind: "Coalition",
    color: "#2ec4a6",
    title: "On-call & incidents",
    sub: "Primary on-call rotation",
    date: "2025 – 2026",
    sym: "alert",
    blurb: "From shadowing to running incidents, including a 40M+ request storm.",
    peek: "Went from shadowing to regular primary on-call. Traced a 40M+ request thundering herd to its frontend root cause and drove the fix with the owning team.",
    body: [
      "Early on, watching people read a trace and find the responsible change felt like magic. I shadowed, then served as secondary, then took regular primary rotations.",
      "On one shift a core service saw a huge rise in traffic coming from my team's service. I traced it to the frontend calling one endpoint over and over, 40M+ requests over a few days, and took it to the frontend team, whose fix brought volume back to normal with no customer-facing outage. On another, I linked two separate alert streams to a single root cause in the middle of the night and escalated instead of guessing alone.",
      "I kept handoff docs and end-of-shift summaries, wrote up every after-hours page, and wrote runbooks for the next person."
    ],
    stat: { value: "40M+", label: "requests traced back to a single frontend root cause" },
    tech: ["Datadog", "Sentry", "PagerDuty", "Incident response"]
  },
  {
    id: "c-tools",
    techLabel: "Built with",
    kind: "Coalition",
    color: "#2ec4a6",
    title: "Internal tools",
    sub: "Built without being asked",
    date: "2025 – 2026",
    sym: "wrench",
    blurb: "Tools for other engineers: architecture diagrams, on-call, and faster sign-off.",
    peek: "A Cursor skill that diagrams how requests move across services, a shared on-call tool, and a workflow that sped up product sign-off on email changes.",
    body: [
      "A Cursor skill that generates diagrams of how requests actually move across services, from the codebase and the product requirements. I used it to ramp up on unfamiliar parts of the system, published it to the team's shared repo so everyone's copy stays up to date, and demoed it so adoption wasn't left to a README.",
      "An on-call management tool: on-call context lived in scattered personal notes, and threads got lost mid-shift, so I built a shared place to hold in-flight investigations and priorities, and passed it to a newer teammate before their first shift.",
      "A sign-off workflow that generates side-by-side, highlighted before-and-after comparisons of email template changes, which I used across a month of four simultaneous email roadmaps."
    ],
    tech: ["Cursor", "AI tooling", "Google Apps Script"]
  },

  /* ---------------- Independent builder ---------------- */
  {
    id: "builder",
    sym: "hammer",
    kind: "Independent",
    color: "#f7c948",
    title: "Independent builder",
    sub: "Apps, games and experiments",
    date: "2026 – Present",
    art: true,
    mosaic: true, // cover shows the icons of everything built in this chapter
    blurb: "Building my own products AI-first: I own the product and technical direction, and Claude Code writes most of the code.",
    peek: "Since leaving Coalition I've been building my own products AI-first: a racing game, two iOS apps in testing and daily use, and tools for myself.",
    body: [
      "Since leaving Coalition in August 2026 I've been building my own products AI-first. I come up with the idea, set the product and technical direction, design the experience and test it with real people; Claude Code writes most of the implementation.",
      "It's let me ship far more than I could have alone: a 3D racing game with a pre-launch audience in 46 countries, a date-night planner in user testing, a voice journal I use every day, and a few tools for myself."
    ],
    subsLabel: "Key projects",
    subs: ["codename-sleep", "gemnight", "sprint-rivals", "quickkey", "leetlog", "dumpnotes"]
  },
  {
    id: "sprint-rivals",
    galleryLabel: "Screenshots",
    kind: "iOS game",
    ai: true,
    color: "#f7c948",
    title: "Sprint Rivals",
    sub: "3D sprint racing for iPhone",
    date: "Aug 2026",
    status: "Pre-launch",
    launch: {
      label: "Launching soon",
      headline: "A global audience is already waiting.",
      url: "https://sprintrivals.com/",
      cta: "Join the waitlist at sprintrivals.com",
      ctaShort: "Join the waitlist",
      stats: [["350+", "on the waitlist"], ["46", "countries"], ["100K+", "social views"]],
      note: "Built from zero in two weeks, before launch, with interest from top track athletes."
    },
    icon: "assets/proj/sprint-icon.png",
    image: "assets/sprint_rivals.jpg",
    blurb: "3D sprint racing, custom athletes, leaderboards, and a global pre-launch audience.",
    peek: "A 3D sprint-racing game for iPhone. Race the 60m to the 400m against a field of eight, customize your athlete, and compete on Game Center leaderboards.",
    body: [
      "A 3D sprint-racing game for iPhone where you race the 60m, 100m, 200m and 400m against a field of eight. You control your runner with a two-thumb rhythm mechanic, dip at the finish, then watch the race back from the broadcast camera or first person and save clips to share.",
      "It's built with SwiftUI and SceneKit, with a Python and Blender pipeline that turns open-source body models into rigged, customizable athletes, plus Game Center leaderboards and indoor and outdoor venues. A Cloudflare Workers backend handles the waitlist, feedback and analytics."
    ],
    stat: { value: "350+", label: "people on the waitlist across 46 countries, from zero before launch" },
    highlights: [
      "3D sprint racing: 60m, 100m, 200m and 400m",
      "Customizable athletes from a Python and Blender pipeline",
      "Game Center leaderboards",
      "Replays from the broadcast camera or first person, saved as clips",
      "100K+ total views on social media, with one post at 40K, and interest from top track athletes"
    ],
    tech: ["Swift", "SwiftUI", "SceneKit / Metal", "AVFoundation", "GameKit", "Python", "Blender", "Cloudflare Workers", "Claude Code"],
    links: [{ label: "Join the waitlist", href: "https://sprintrivals.com/" }],
    gallery: [
      { src: "assets/sprint_rivals.jpg", alt: "Sprint Rivals race screenshot" },
      { src: "assets/proj/sprint-hero.jpg", alt: "Hurdles under the stadium lights" },
      { src: "assets/proj/sprint-race-poster.jpg", alt: "The race menu: event, mechanic and units" },
      { src: "assets/proj/sprint-moment.jpg", alt: "The field out of the blocks" }
    ]
  },
  {
    id: "gemnight",
    kind: "iOS app",
    ai: true,
    color: "#ffb37a",
    title: "GemNight",
    sub: "Date-night planner for iOS",
    date: "Sep 2026",
    status: "In user testing",
    icon: "assets/proj/gemnight-icon.svg",
    image: "assets/web/gemnight_demo.jpg",
    blurb: "Turns the places you've saved into a night you can actually run.",
    peek: "Instead of handing you a list of spots, GemNight works out the order, timing, cost and when to leave, and warns you about weather or a long drive between stops.",
    body: [
      "A native iOS app for planning dates around the places you've saved. Instead of just giving you a list of spots, GemNight turns them into an actual night out: the order, timing, cost, when to leave, and things like weather or a long drive between stops.",
      "It's a SwiftUI app backed by a Python data pipeline over Google Places, live Open-Meteo weather and a hand-curated venue layer. Houston and Boston are the first demo markets. You can share a whole itinerary through a URL, with no accounts and no database."
    ],
    stat: { value: "3", label: "rounds of user testing with about 15 people, with fixes shipped after each" },
    highlights: [
      "Order, timing, cost and when to leave, worked out for you",
      "Weather scoped to the specific open-air stop and hour",
      "76 curated venues across Houston and Boston",
      "Itineraries shared by URL, no sign-up"
    ],
    tech: ["Swift", "SwiftUI", "MapKit", "Core Location", "Python", "Google Places API", "Open-Meteo", "Claude Code"],
    gallery: [{ src: "assets/web/gemnight_demo.jpg", alt: "GemNight: Discover, the plan, and the closing screen" }]
  },
  {
    id: "dumpnotes",
    kind: "iOS app",
    ai: true,
    color: "#9b7bff",
    title: "DumpNotes",
    sub: "Voice journal for iOS",
    date: "Jul 2026",
    status: "Daily use",
    icon: "assets/proj/dumpnotes-icon.png",
    image: "assets/web/dumpnotes_demo.jpg",
    blurb: "Talk about your day for as long as you like; it comes back as an organized entry.",
    peek: "Ramble about your day, jumping between subjects, and it transcribes and arranges it into an entry, with your exact words kept behind every section.",
    body: [
      "A native iOS voice journal. Talk about your day for as long as you like, jumping between subjects, and it transcribes the recording and arranges it into an organized entry: related thoughts grouped under headings, filler left out, and your exact words kept behind every section.",
      "It's a SwiftUI and SwiftData app backed by a FastAPI service that transcribes with Whisper and organizes with an LLM in two passes, plus a guard that checks every spoken line is accounted for. The journal is stored on the phone with no account. Recording keeps going in the background with a Lock Screen timer and is saved in pieces as you talk. Photos can be imported in bulk and sorted by the day they were taken, and entries can sync to Notion.",
      "It's the second version of AutoReflect, an earlier pipeline that pushed voice memos into Notion. I use it every day, ahead of an App Store release."
    ],
    highlights: [
      "Your exact words kept behind every organized section",
      "Two-pass LLM organizing, with a guard that checks every spoken line is accounted for",
      "Stored on the phone, no account",
      "Background recording, saved in pieces as you talk"
    ],
    tech: ["Swift", "SwiftUI", "SwiftData", "AVFoundation", "Python", "FastAPI", "Whisper (Groq)", "gpt-oss", "Notion API", "Render", "Claude Code"],
    links: [{ label: "Code", href: "https://github.com/sosaagbontaen/codename_promise" }],
    gallery: [{ src: "assets/web/dumpnotes_demo.jpg", alt: "DumpNotes: recording, the raw transcript, and the arranged entry" }]
  },
  {
    id: "leetlog",
    kind: "Learning tool",
    ai: true,
    color: "#2ce884",
    title: "Leetlog",
    sub: "LeetCode practice tracker",
    date: "Aug 2026",
    glyph: "L", glyphBg: "#070a10", glyphInk: "#2ce884", glyphMono: true,
    image: "assets/leetlog.jpg",
    blurb: "Retention-based practice tracking for LeetCode.",
    peek: "Interview prep organized by technique. One focus pattern at a time, and each pattern's score decays unless you keep practising it.",
    body: [
      "A spaced-practice LeetCode tracker built on the idea that the confusion on prep roadmaps comes from bad sequencing, not inherent difficulty.",
      "It organizes 459 problems into a 77-pattern taxonomy grouped by technique rather than problem name. Each pattern gets a retained-strength score from an exponential-decay model (30-day time constant), weighted by how much help each attempt needed, so mastery fades like memory instead of staying ticked off. It serves one focus pattern at a time in curriculum order: blocked practice instead of a scattered list."
    ],
    stat: { value: "459", label: "problems across a 77-pattern taxonomy, grouped by technique" },
    highlights: [
      "Retention modelled as exponential decay, weighted by how much help you needed",
      "One focus pattern at a time, in curriculum order",
      "Local-first, with no build step and no npm dependencies",
      "Pulls problem statements from LeetCode's GraphQL API"
    ],
    tech: ["Python", "FastAPI", "SQLite", "Jinja2", "Vanilla JS", "LeetCode GraphQL API", "Claude Code"],
    gallery: [{ src: "assets/leetlog.jpg", alt: "Leetlog session view" }]
  },
  {
    id: "quickkey",
    galleryLabel: "Screenshots",
    kind: "Plugin",
    ai: true,
    color: "#8a8af0",
    title: "QuickKey",
    sub: "Premiere Pro plugin",
    date: "Aug 2026",
    status: "Private testing",
    icon: "assets/logos/quickkey.png", mark: true,
    image: "assets/proj/quickkey-in-premiere.jpg",
    blurb: "One-keystroke edits for Premiere Pro.",
    peek: "Turns a seven-step Premiere Pro operation, like applying your usual blur, into one keystroke on the selected clip, by bridging two APIs that each do half the job.",
    body: [
      "A plugin that turns repeated Premiere Pro operations into single keystrokes. Applying a blur normally means finding the Effects panel, searching it, dragging the effect onto a clip, then opening Effect Controls to adjust it. That's about seven actions, thousands of times a project. QuickKey makes it one, applied to whatever clip is selected, using settings captured from a clip you already dialled in rather than Premiere's defaults. It also does things Premiere has no command for at all, like un-nesting a sequence.",
      "The interesting part is architectural. Premiere's documented API knows which clip is selected but can't apply effects. An undocumented internal layer can apply effects but has no concept of selection. QuickKey is the bridge between them. Keyboard capture runs outside Premiere entirely, as a Swift background agent, because the host gives plugins no way to claim a keystroke.",
      "It's in private testing with a co-founder who edits professionally."
    ],
    tech: ["JavaScript", "Adobe CEP", "ExtendScript", "Premiere Pro", "Swift", "macOS", "Claude Code"],
    gallery: [
      { src: "assets/proj/quickkey-in-premiere.jpg", alt: "QuickKey docked in Premiere Pro" },
      { src: "assets/proj/quickkey-panel.jpg", alt: "The QuickKey panel", tall: true }
    ]
  },
  {
    id: "codename-sleep",
    galleryLabel: "Screens",
    kind: "iOS app",
    ai: true,
    color: "#f2c94c",
    title: "Codename Sleep",
    sub: "An iOS app for night owls",
    date: "Sep 2026",
    status: "Prototype",
    icon: "assets/proj/sleep-icon.svg",
    image: "assets/proj/sleep-14-home.jpg",
    blurb: "Locks your apps at bedtime until you explain why you're still up.",
    peek: "At bedtime it locks the apps you choose until you explain why you're still awake. In the morning it shows what the late night cost and turns your 2am ideas into a plan.",
    body: [
      "An iOS app for people who keep staying up later than they mean to. At bedtime it locks your chosen apps until you explain (photo, voice, or text) why you're still awake. The next morning it plays back what the late night cost you and turns your 2am ideas into a plan for the day.",
      "There's a working prototype with personalized onboarding, sleep insights and Screen Time based app locking. It's still in progress."
    ],
    tech: ["Swift", "SwiftUI", "Screen Time API", "Swift Charts", "AVFoundation", "EventKit", "Claude Code"],
    gallery: [
      { src: "assets/proj/sleep-14-home.jpg", alt: "Home", tall: true },
      { src: "assets/proj/sleep-16-confession.jpg", alt: "Why are you awake?", tall: true },
      { src: "assets/proj/sleep-22-morning.jpg", alt: "Morning replay", tall: true },
      { src: "assets/proj/sleep-25-insights.jpg", alt: "Insights", tall: true }
    ]
  },

  /* ---------------- Now ---------------- */
  {
    id: "next",
    sym: "sunrise",
    kind: "Now",
    next: true,
    color: "#f1ede4",
    title: "The next chapter",
    sub: "Open to new roles",
    date: "Now",
    image: "assets/me/texas.jpg",
    gallery: [{ src: "assets/me/texas.jpg", alt: "Samuel smiling in front of a Greetings from Texas mural" }],
    blurb: "Looking for my next engineering role. The fastest way to reach me is email.",
    peek: "I'm looking for my next engineering role: product and full-stack engineering, backend, or iOS. The fastest way to reach me is email.",
    body: [
      "I'm looking for my next role in software engineering, especially product-minded work where I can be close to the people using what I build: product and full-stack engineering, backend, or iOS.",
      "The fastest way to reach me is email. My resume and LinkedIn are below too."
    ],
    links: [
      { label: "Email me", href: "mailto:soagbontaen@gmail.com" },
      { label: "Resume", href: "https://docs.google.com/document/d/1e9oXwRbos4srqYezNB6YPxI8x_D3UBXKy3oJ2n3dcGg/edit?usp=sharing" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-osa-agbontaen" },
      { label: "GitHub", href: "https://github.com/sosaagbontaen" }
    ]
  }
];
