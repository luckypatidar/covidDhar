import Mock from "./mock";

const photo = require("../assets/placeholders/photo.jpg");
const logotype = require("../assets/placeholders/logotype.png");
const icon = require("../assets/placeholders/icon.svg");

const database = {
  categories: [
    {
      id: "0",
      title: "Product",
    },
    {
      id: "1",
      title: "Project",
    },
    {
      id: "2",
      title: "Review",
    },
    {
      id: "3",
      title: "Article",
    },
  ],
  choose: {
    list: [
      {
        icon: icon,
        text:
          "Phosfluorescently re-engineer frictionless metrics via premier niches. Seamlessly cultivate high-quality niches whereas empowered processes",
      },
      {
        icon: icon,
        text:
          "Seamlessly grow enabled scenarios without viral channels. Appropriately actualize stand-alone benefits and viral imperatives",
      },
      {
        icon: icon,
        text:
          "Monotonectally benchmark robust leadership skills before high standards in vortals. Collaboratively productivate business.",
      },
    ],
  },
  facts: [
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Believe in your business skills but never stop improving",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Efficiently impact focused e-services vis-a-vis client-focused outsourcing",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Enthusiastically supply client-centered alignments after prospective",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Professionally disintermediate client-focused intellectual capital ",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Compellingly matrix global products before 2.0 technologies",
    },
  ],
  facts2: [
    {
      icon: icon,
      lead: "Projects done",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: 417,
    },
    {
      icon: icon,
      lead: "Positive feedback",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "87%",
    },
    {
      icon: icon,
      lead: "Hours worked",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "1.8k",
    },
  ],
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "Startups",
      url: "/startups",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Events",
      url: "events",
    },
    {
      title: "Blogs",
      url: "blogs",
    },
  ],
  features: [
    {
      icon: icon,
      id: "post_0",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. ",
      title: "How to make your product the ferrari of business",
    },
    {
      icon: icon,
      id: "post_1",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. Globally leverage existing error-free models",
      title: "Believe in your business skills but never stop improving",
    },
    {
      icon: icon,
      id: "post_2",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent",
      title: "Create a business your parents would be proud of",
    },
  ],
  features2: [
    // {
    //   // icon: "las la-archive",
    //   // text:
    //   //   "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
    //   // title: "#1 Solidity",
    // },
    {
      icon: "las la-business-time",
      text:
        "Continually synthesize impactful web services after wireless users. Efficiently deliver excellent users through world-class core competencies. Efficiently enhance ubiquitous outsourcing.",
      title: "#2 Assurance",
    },
    // {
    //   icon: "las la-file-invoice-dollar",
    //   text:
    //     "Synergistically streamline market-driven scenarios before synergistic alignments. Efficiently engage wireless e-services for cross-platform quality vectors. ",
    //   title: "#3 Liability",
    // },
  ],
  header_bgs: {
    about: photo,
    about_video_poster: photo,
    blog: photo,
    contacts: photo,
    contacts_w: photo,
    portfolio: photo,
    services: photo,
    team: photo,
    team_w: photo,
    facts: photo,
    subscribe: photo,
    list: photo,
  },
  menu: [
    {
      // children: [
      //   {
      //     name: "Slider Header",
      //     url: "/",
      //   },
      //   {
      //     name: "Paralax Image",
      //     url: "/home-paralax",
      //   },
      //   {
      //     name: "Video Background",
      //     url: "/home-video",
      //   },
      // ],
      //   name: "Home",
      //   url: "/",
      // },
      // {
      //   name: "Startups",
      //   url: "/startups",
      // },
      // {
      //   name: "Team",
      //   url: "/team",
      // },
      // {
      //   name: "Events",
      //   url: "/events",
      // },
      // {
      // children: [
      //   {
      //     name: "Grid Left Sidebar",
      //     url: "/blog-grid-left-sidebar",
      //   },
      //   {
      //     name: "List Left Sidebar",
      //     url: "/blog-list-left-sidebar",
      //   },
      //   {
      //     name: "Grid Right Sidebar",
      //     url: "/blog-grid-right-sidebar",
      //   },
      //   {
      //     name: "List Right Sidebar",
      //     url: "/blog-list-right-sidebar",
      //   },
      //   {
      //     name: "Grid No Sidebar",
      //     url: "blog-grid-without-sidebar",
      //   },
      // ],
      // name: "Blogs",
      // url: "/blogs",
    },
    // {
    //   name: "Contacts",
    //   url: "/contacts",
    // },
  ],
  partners: [logotype, logotype, logotype, logotype, logotype, logotype],
  portfolio: [
    {
      cats: "contracting management construction",
      clientid: "0",
      feedback:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources.",
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 0,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Modern materials ecology safety",
    },
    {
      cats: "construction management contracting",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 1,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Architecture design in a wood village",
    },
    {
      cats: "contracting construction",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 2,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Effective house system for country side",
    },
    {
      cats: "management contracting",
      clientid: "3",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 3,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Workers equipment from first-grades",
    },
    {
      cats: "construction",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 4,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "When city become architecture miracle",
    },
    {
      cats: "construction management",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 5,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Systems in every project completion",
    },
    {
      cats: "construction contracting",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 6,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Complete project for city statement",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 7,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Stay on a bay compromise state",
    },
    {
      cats: "management contracting",
      clientid: "0",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 8,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Strong link with nature wildreness",
    },
    {
      cats: "construction management",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 9,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Future of construction in life",
    },
    {
      cats: "contracting construction",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 10,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Most ambitious project in history",
    },
    {
      cats: "contracting",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 11,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Skyscraper for modern city company",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 12,
      img: photo,
      lead: "Manufacture",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Green project with investors",
    },
  ],
  posts: [
    {
      category_id: 1,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_0",
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc4AAABtCAMAAAAfx3F2AAAA8FBMVEX///9Pv+i01uMAGUKu0+EAF0EAFUAAG0NGvecAJUkALU4AHEQAMFBSxO4AI0gAKkz3+vsARmAAN1XK1NkAPVkAJETs8fPi6Ou1wskAP1ve5eg8uuZCqM7w8/UAH0UAOFXS5u6XqrSCmKSktb2+ytBng5JEaXw0XnPf7fPR2t6Moazt+PwAET7Ez9VVdYZLboAjVGt1jpy85PWe2fGN0+/D3uhyyuzK6vesu8M6mb0OTGU2Yndth5Xa8Pp8lKB7ze1qr8sTYoAyi62Cs8cAADYig6Uwocl+obCw4PQhc5MAVHGSsL4yaYE2eZUKW3kAT27GvexLAAAWkUlEQVR4nO1daXuiyrrFGGdUEAXUoKKiERUxo0GTnPTZ3bfT597u//9vLjWgYKQojJTZ59nrQ6JxoFKr3vmtguNOC82oOeqJv/MfnA1iUzeyq/NcWxDOc93/XuiVFsdZ9TNcWbi/uLy86J3hyv/FWFvuj1ZmyPzC15cXAJcX/0joCVE3wc+azvq6U8QmQOh75BbDAf13oAnpHG9YX3dL5sVl7/A7BCubtTWmg/pbQxjoc0ynMWJ8bZ9whonnqLiai2OOkxaGzHZwfx8I19feQ1nMFXOL+gA8Nln7Qtc+Oi8PWk8169pzKT1Xqra4xn9bmf+oXz+uLy+3vodVl7lhrQbpHKYZC0A0nYsx+Ckaa5EbZhGLZocv/KN9dxDgJN7Dx3IOEKkWIJ2tjMQxnSg5UtkiK2DWihNOKMC4eJI15SJzn+0LA8sEfDzMAYFUSjAjJNQ246ozYDgUH5v3wVfM0UYBI4KjmVQAq01IIjCkI4vhGL86NB+deg3ouEka6bFxbaQaWYZLv3cZomvHJaPedTWF2IdPmy8utTzg1Oi4LC9tdkP8kpj2etfbCbt3J/ESOUOmA35KaQU+swruj5cKQ4V7j/m8vA782exMOK22dEeE/J8X0R0kX1hy6gxo3MWC3QgPYnp9zrSHAAnchXa9i3s8fUvoanh06kX3h1xhmYu/dsflOmbT4F/rrjRyfZ7jBmn4XMpOuIVtVuY1qGahnJ4PAhhz73zXDw/VUag5xHSu4OQxdjSm19d7ZEKfDCyyCTfJTeBf6qaUVbl6vQmkQs8oTEe4j0P65CCue0lI8dZCfQwGRgb4qabRC4hOZ3n6IcSDhCImIIQ8Wlsb23YX3qY4dx/LxfMOECc/7iPfd3HpijEF6zGxi+0+fLcDtNqWzmEamE1jzUlnDdSf/9WB4me5lmCBMlVznneHNMkBqTWg+8bJg8l5hueFV1HvI8XTn4CwiwZ6+6+hxb/CdM6h0jWbTiY7Ol+kfte+akhwWAWZ03k4NKEL1YhoANGF8adQK6Tn5xngJSnJvIWXI4l6X2wQ6IRZBG6QQc8kGLAM+LUy5Nf7b2WFu3Yq1YW+jpxdcf0CkkEDuuCmS67dhJrYqslr1jlmDEBUdEmvdzig/jzut8p2P4knpKEX69HZyoC5kyogT5o9U6/Jtctm+Q1FIrbRKmLjqUL9q2SGK77Gu7KrzlRukDvPELnp/X0vUocmJp27wsX+KwrSV3oHP4V0ypDj0ZmW/m3epfNbA86WKdrrBcoACQVI63rUNLhFeiLw7p+Hma+cuxVwZX7fbf88kGt7QD/gdJBeQ0+VNLRZMIM76Jx8GFR4cOlMYeM5KfKK2USjtmCEPOBrLoVr0QK/PKXyRQHFMwHPFmgH0JDzUT9IJehC6jx6KlfgLIrAcknp83i3kM4Uao/g6sZ2HGoFatsCyPoJXR4qkLPZ9xDIy0DILvTue6eXTQLUKrSm/SYeDqITdiXIWYnlSLa4A3SW36AscobNCR1UE9DS8DeqmK06rnc7z3yxVtJBke+cyUThAaAQ7sVBT+UKNKUWMFdygX0jGMBzO7UznsOswo0N9AKKQFWUwFp3XRd3fJYBhkFZpw1BShMKUjLwSU8vr8K9l3I0kVh6dGpFGNLBzJ/QPVNR8RUazypcWFp1sFUdgwrQJEIRquFJR1cz51EfIdArIhjyOLR2J+Byw+WpI5ddFNxHPBp4nWs8pHMDn9ovJ75sANPQRSoA61muo8rYaOH6ryhDK3egbkUBKGd1na9U9GyNcyjzGFqK9SVzIvNJsTDd1TsN5Ex4PV+Yzr5NHNgJAGoSYXH49AEaT1TS1GdCr4K786GHxs1LMK/Q4mtfqGPIrDhYVRTDij0+Nk+bWfDRiSnbpxMKwNI55UWDuA9fpNMU9IW+8dBJ077l8/l/o1dQuYDr6FCyDTG54UVienP3UE49vN4+wuq/0+njFyZ/hSSS/W1Rn4pFtQ+x9k7Z2kENgenU67AMVTn+mlFA/9TuuWDNcPaHg2yCyBN6YjfgWRv993h9fW+32w9Tblg5W5Xs5qHtLjJ3YO7P9uvzS2a8VRTP//55+/Pm8SNdFxenEM/Wi1PoiC/B5N7UVXXoC1FnFTfC/dKYTuTvqqXk+vr2pXNZXC3TcBA/EZuu8YSmG/pF+Rvw8PlfT+D3DZpHQUmfx/PmHlNtPEaIfP7H/3ivvKbagOJ8u12+3WM0SGdc6ymYI5dDxSrxS1V9qXb1gYmVO9wjMMV2C4vEHp1qFbzcSidXgJpeBvMloE43mOm6OLoqYzrfofF8RTPn8vjTDWDaKYHDk/iTq5zH8wYVgj2U4XJ7LPtpzufv/IQKl5+hU6pVrVrT7DQ9L6JY7KbhtqJ1qVTbhkZaFb0+xvVgj84CoDPRwFPoBeIvOICBXdyMi0+Iz/ITzHA8ohlqP0/hLObvOPQH94FtJDe8cDzkUx/RvuWE132a8+2b3ceEz0innhlpnNYteKGGUdAFblUduwrUVudGxtuL4jHm0SlX4PNhFppbnt3yR3l24FFb/BWejQaIS57xkzushPMenbc4nNrhY49KAjjIpsvnXerAC+273Qc/YTuXM0CPVcA5MGGEIrZJ3a7CFT3wUhcKcvp9dEKNPMxAXewkGngGsIGadQnCJvsXFk9xudNsPjpv80hcOTPg2sJ2rJOXFvfxepjN1CEywV9ft5/s+dmMlZe3ZoCtRQezqdlVbDb1KvZgDVTi55QOotPBwZLSge9ETQleUyQLoN0xFqhyzhs/EJ3vDvfoKbD2I37o2swH9Ms1CX6X/T72NB2Bnx/t5kGUXeBluP1swHjSX1IYQw266GDL16o3sRs96HiJAaWEXvS8nS2dWfgcl81MdpEdKkSvoe6w3+BUlJ8q8h0WyfbPrZp7gL6Qq2s5KePPI1C2Y30K0zDZ9Ej0frzz/NsP+Kj96H3YF3he0pdpZacGKDFymE2pYON4o5/dNcDh3ssWLj6JmE5ML6ZzwDPrDUbNSqiF0OyilX3VaCE68RK/w3QCCck/CFwwUmFB5y2Zzu9/+Eb31/tT+a1r6nbjzxMgNL+dw+sLb6c5vY1XxDqgwihhTatWRvj7ApsV8D7rSQ7yJnjbrnFtETe34mIoCyD1joqcw8aVR+dN26+ygJfrPkShaP6Z6/iP5mCgbAUSm+UrsWoNVrrhFOo1MLD5qOC4hAI94n2+B+x7nGaTSb0JWytzmE097enXhf9cEq3wn+fnKch/QskVutg1UlF/K25KUNh1yqEmJdQ/omDj6dLpuR75Bw4XQvM3nIAn0Nu/ggCqRAl3pt+E01l22XSw7m+ZfB3+I5NRxZXQvF/FxTukpVW1wfuNNKZumcXOqWYX/NS88G0X5Z+rDqLTi0RXWfgL08llmG0mUzpgeBV4PZlHoedVw6UYz6BrgrDiFTgUgbq+7eItMDmJ7xsJdWtT+fc/NV9FQDNyNpxBad349eMm9AsjINQhmy8zzGbrL6xElWbd7za0qt/hhOW/NdDlZ1iYzSJ6+1+IzqZ/+ScKWGgVUOlEq3l0SqiWDUZ6K+BH3I5O49dt1PeeFOFsNptLs1nt7zycyXiG9v7P7cr/Hlv5sWrwK/StWsW2b8I7gfTrSMTjuHpDE6LigQwxfyvcbcVuoxaw3gpyxoX6twN0XmMS3ZFhgeX6YpvZ+MC4DmT3rq5S5VT5l+hOr2by1f5OPwxq2N1ciZ3jNkgNQ3pnhMI4oIbUBk6kueMBIUAoXthtowS+dQtvL3K+b+mcenTe7KTTjUbzMHYZ1HZhAANc79MJvJ9G/XvqWwMZMq1f4c3tTGvLLK6BmtnRMWbADgv7gywL9bfybkxtgteMO4lYAHSbbTcN/9+WTs9iuizegtlEq+/5If9wA5YlcTGeGs/tfTaL67nU5+vN7fk92kulqG/nrDXOWPCJhFyaeJAoW+9evKwoVmPh75yzO/rCGoH+H7xpePG867V9befz7RQIQG7z+VSAPqlxxdJ47tOZakLx0azqeudmysuCL9W9EtECbfHxu9SWdEkcpfG97KfzIfytrTSz5irQfDYsoNVjdjGdcC4eb++wbyjsKRI3omFJ5zRIZ/mpiguI83F2vZsoZdOpfzirUqrE3sMo0vmhi2ZwjRHoFDofxpUUzK67lot4W2LlAtEZUW/Vik8slS23R+f7zrOY25nRbrCK8bF2oWdiFo9lugMSfX4Qks5XwpspV8gJABKKu178/5Rp6BSa35+TH9kOweJY+be/3joMEHoAcZuCcRkkCuLvAJsponO4YNb7CDp/vJ0y3Gj8QEMnZ78nPawAbvfoDE6O6swswoCHMQ2XTuWGmsWrIJt3pHezO/AFeLXbM+QmHWDenxpRjtiIbT9CMFIpf2/uva46GSu8VhKzLXi/OH8QcvE9qGrJvsSgGGsIn4CSm++kkzNdi1COptP6TVyMJ0dQ2141PngWAzs8A7QqxcoO2TSnl1pBPygf4UqsEuzNDEIorbhVdatfrNpV+Sny4i9i+YHl+T7PQW37Voy15akZ63jZHE2+vNu8Ckhnmfz2FR9nBJ9CacBNSlvbIzhi6lukatBrZVKcdXJoP4K+7VshDp96J0YUTxcjautagM+IpOeKqbIVOrsAXKn9/h4ZRw8akebipBh0g25k6j3OiVoCHyNOUAt03NtB+SS/mZ10wgTfwmf+pUI3cqvkoFEmZylPjPXieT/2bMTgs1+htwzmvp8VAlkE5cQ8lSfEqSXq6x+Fac9rH4AJvmHO5+lP7MgcBqSTnXgqOXU/01d+q9DXhOUCfacr/amDi+JTGTU85lMRy0VN+PCBy207CEq/i/EqcmojH61hTgdwCo7X+OvR6conPZ8G/WneXfqimsVr3E2q3W6/RumphOkULreHLbXgeV5qvNNvhg3YBsbKuXVgmOtv58u/1d9+Van5bFHfeEiO4WTJcADPB7Y57UPNUn/pUbjfbvIUcvA/BSuNHhPYJJZnZDz1DCyc+JIJ5feu7tRFnprPBW1aBvfk0cGhleRVgf5LPwm021qrxVG3CkM6V2IOpXUefdIJum+srlik5XMyo9z2M4jhNSnVDSX3epf6Sz8LvJ8/lrpVij8Y0bkSSxaeM18/Xx7uQR01f1PbzzHlxoI4W6UXzpry3Qy7S7webasZY11COpN3hVQ7s9j63D46UZFAEH+9FyiN4jBLVyeLcYMi1wZIaToZsNidJtHKIj2kxGiUgnTmk87bDu2Zv/b16KcTpm5ajac3yjCRc6iMSYxTY6TMiyugdSoZSPbwkiAcXB7pU+ZDOExnO9ltRkM7sw7k23yuUL6KlqD9Hl3Mw1jNaMqYIEdGB4UHyRa5SiN3DLsR3KgOJ+C1GvUaUqpXCQunNM6M95OnPlcIt5sv/5RrtDqlTlPUUzOUS1pwRDhrapri+sE9WglD8daOSZ2qbgHPNsGoU1rPxh/FxFcmw0dLDPjUG22zgV6h+O/MWvR7IEZFLOzmLNobo00cngbegYkCT+sHgDRCcm6tNErbh+KKnS9U/oMUiRv/fqtRBsxCgUL50PosRmerOl6ykfLpMK32r7J4pem0Z2wMGsmVO5UQMjlfC1j5N1p4Av+N2nhyZjGaeMoeLdOfZYrk03M2GUHY3h3FpoyjNgnGUWr4nd23PUPlN1z0Wfwuf2xNCIFWiBQjrUQVeAwygW/qR/DZZ9cED7HxCpytCp1asM9zAw5hK53veN2tGu0adaZvGTmt8yyN+zvs7M1SBJ9dxrMl5TxLsMrSeLdahaHj7Yd3ZEP5u1cPFn/XqemMrpNRJeMmhQ8hLJHPVZb1GYbidrnpNHwOqRZxErhFfJa/eQesT6oVesO0iTqkYEFxxrFS3frS014Pm+M+4TRdugTGKWHvHDo9E61vkzSdEUD14vJTw1tQsk5vmLTt4SOHQZO31kTHu2DPd4LaKJQzecb6pjOqvxlhlY501s95Yzkkn1fxevk8yGNSD4NCkeIR7JoXvgq+23dym1C51qqsT1oPbmgcVtbkBa/GqQmeHI/gyMzynyM12GZmhf1zgkPh16+L2/8dHWeLb41F6HNvMl78w70NjZOqTYzQ1uc9Cl64bedTT40j99ipxW6I8ltUoz2CRWF32YB0Eo6CGjN2bD/sNm7VRMJ/NqGsCiUH4edD+U/zyC2w8ih7cH6XpWgbZ5T8fpffdhI2WFts7yGxL5wc6Dqsh0/WMMds82k4hF5dPFbl6wXx43+gU+Re+7NggHa9O300eLBd8FNMM7bc+IDu1IqEbNfXuO+GYh95kgW8HcB+OKZmotN7+iw8bp2H38ZrkHCT7d5AsoeUzJKwpKTZubUtQj/jHHuOs5kTAx+VOtFO7WBGYHwSfmuqYY7ZyQjcYeF0h0fag7xI8N4DcdBa01RJDn90PPNZ0BbFXTbVGcmlIWxtaeWOXXRHQArhzSZEAhOqXVbJQ17W+QNmkA6uBfXUktZ0InMR8xIxvaKFL3+md60ahQRMA1Jd3mC3wS0UwtCq8ANlnFseWa9Q1jkDfdQhOH4YBxK1QRD2QDE8PDxMODmtShiEUjljXkiaTCaqOSqmnQG6TYlz7M1EBwW4ln2pgTC0ilHauBY+XewOuuBGoeEv8e43L+F+ecKQnFI6m6vWF7rHgdLkj1W4MrBqVifStim1yOOmnHDOkrxrVRCElIBE2rcqFM5T8dSM2XqiKEpAOWrr3MvxBeJN9G1hZArbSsj9vDDzHC3ClUSS7TcL56iRDWqHtxmZlXqMwkoA+l+Rbp0g1qN10SJ8tphtaZiQdlbpxN6aGvubqbTGGSNkSPImXTWGkiSpLmJli4aRlXiBwlNybVO4q4RvvZs8SMKpVYkbtFaUuwROBqGfdgjqXzadSqfTKRSLxVDSj4JmU90RcRmeKiOkGE4K4rZHtXY4weDBYZxZFiM7t2RgVDVNc1Xy6UID2aG7vyWhpMLqLHiL5LxubIkogMODycGEIFuzBb2x1l7S4onykEqzS3fdASEUZ3MWfKtDuky9zzWJ7uuYXYuJXuXj0aMssh/2RByDCU8b1Krp8NdibND/BAxSB/+kNHcdRpK7KGUY9fNNnFL8zI80nlmfNllSdUx74SHhCOI1C7eRLJx6x7d75TAWTG7GJCyz46O8rpWY23zOpZx36A8flwj+zobFTcgMYjgEW9NGRGeolWaQjFx1j/drdL5qfqIBXS3FaEgi3XS1z2Ddyx3SNGkwXlfJpxNuku/WX8ysT0iY0C8dn/8eZOPoSI3Qm+Id/5wkNsSzdoYZ6NCRmhJA6Sfx5PLgk8UledNpHufk6plYeUxS/yWDo/1lsqbERz4syecr9Wn2TJ4ZrUXmwF7RSPRJvQcHsL3/2KEhJH+0/5Lc4C+ipdkiH+Ai1GKdLXomSOPsIq6Tu5zFDS7E8A8Iifc+yuQcS8srg47J3oAe7+jfc0Gtd4xYesSIH/mTjrMgFENPg2WVKJwDz3ivIu492WR3xMqnoHdzfXp/ZHuD5BhYExSVlTCdcpVsGbZbqYSI/Sirr9B0SwPBrFI7uaMYu9K2oNl9lhT6ZOHkStv/fBPR9Ms4E/8JyMuSSJPHEsaFY5aocj6zo0UI53xnEqWIcoDyNXpuqaBYWTvSyZUdnnHp79PoV8mJZX8fvv03sY5UmKyz6wgpMugKYl8JUb1ljs+s65VzdXklgmHUqaXK1w+l9xHh4yn+XQtall2b6D9IAlogvTX4G1nH2Ph/qc3+7YUEYu4AAAAASUVORK5CYII=',
      posting_date: "Feb 14, 2020",
      quote:
        "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
      short:
        "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
      title: "Wash your hand properly",
      user_id: "2",
    },
    {
      category_id: 2,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_1",
      image: 'https://www.businessinsider.in/thumb/msid-82232151,width-1200,height-900/masks-double-mask.jpg',
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex. Conveniently recaptiualize backward-compatible best",
      title: "Use Double Mask",
      user_id: "1",
    },
    {
      category_id: 3,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_2",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-kzxzN7Q6BQL1E79boqw7hJWKhoX8eii3A&usqp=CAU',
      posting_date: "Feb 12, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
      title: "Maintain Social Distancing",
      user_id: "2",
    },
    // {
    //   category_id: 0,
    //   featured: true,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_3",
    //   image: photo,
    //   posting_date: "Feb 11, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
    //   title: "How to become our partner and start do business",
    //   user_id: "3",
    // },
    // {
    //   category_id: 1,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_4",
    //   image: photo,
    //   posting_date: "Feb 28, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "Dramatically expedite cross-media potentialities for worldwide services. Quickly engineer multidisciplinary innovation with best-of-breed e-commerce. Compellingly productivate.",
    //   title: "We create opportunity for new markets & industries",
    //   user_id: "0",
    // },
    // {
    //   category_id: 2,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_5",
    //   image: photo,
    //   posting_date: "Feb 09, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
    //   title: "Project start is time to celeprate",
    //   user_id: "1",
    // },
    // {
    //   category_id: 3,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_6",
    //   image: photo,
    //   posting_date: "Feb 08, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "The loss of a single species is a tragic event and yet we lose an estimated 10,000 species to extinction every year",
    //   title: "Construction is reason to developing",
    //   user_id: "2",
    // },
    // {
    //   category_id: 0,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_7",
    //   image: photo,
    //   posting_date: "Feb 07, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
    //   title: "To afford luxury life always work hard",
    //   user_id: "3",
    // },
    // {
    //   category_id: 1,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_8",
    //   image: photo,
    //   posting_date: "Feb 06, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
    //   title: "Start you working process with tools",
    //   user_id: "0",
    // },
    // {
    //   category_id: 2,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_9",
    //   image: photo,
    //   posting_date: "Feb 05, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
    //   title: "Create new way of manufacture",
    //   user_id: "1",
    // },
    // {
    //   category_id: 3,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_10",
    //   image: photo,
    //   posting_date: "Feb 04, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
    //   title: "Absolute knowledge on the business line",
    //   user_id: "2",
    // },
    // {
    //   category_id: 0,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_11",
    //   image: photo,
    //   posting_date: "Feb 03, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
    //   title: "Master your tools for best results",
    //   user_id: "3",
    // },
    // {
    //   category_id: 1,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_12",
    //   image: photo,
    //   posting_date: "Feb 02, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
    //   title: "Making business with minimal efforts",
    //   user_id: "0",
    // },
    // {
    //   category_id: 2,
    //   full:
    //     "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
    //   id: "post_13",
    //   image: photo,
    //   posting_date: "Feb 01, 2020",
    //   quote:
    //     "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
    //   short:
    //     "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
    //   title: "Small business must evolve in big company",
    //   user_id: "1",
    // },
  ],
  pricing: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F001-money.svg?alt=media&token=50fd58f2-52ba-406d-a741-16f8294baa49",
      price: "Free",
      services: {
        avaliable: 2,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "basic",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F003-earth-grid.svg?alt=media&token=1f7c3083-418c-4a8a-88bb-4a01416b9a38",
      price: "$17",
      services: {
        avaliable: 3,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "business",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F006-ladder-1.svg?alt=media&token=76a4cf83-b4f6-477b-9fb4-bea757d89831",
      price: "$47",
      services: {
        avaliable: 4,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "advanced",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F007-success-4.svg?alt=media&token=9d7b2683-90fa-41dd-ab84-2acce788c76d",
      price: "$77",
      services: {
        avaliable: 5,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "elite",
    },
  ],
  process: [
    {
      text:
        "Distinctively disintermediate inexpensive e-commerce rather than orthogonal opportunities. Seamlessly deploy virtual experiences through collaborative.",
      title:
        "Collaboratively reinvent seamless methodologies through reliable data",
    },
    {
      text:
        "Intrinsicly enhance diverse niche markets with extensive deliverables. Conveniently grow user-centric architectures via pandemic web-readiness. Quickly underwhelm customized sources through interactive ideas. ",
      title: "Professionally predominate clicks-and-mortar communities",
    },
    {
      text:
        "Uniquely negotiate market positioning architectures with leading-edge services. Energistically formulate end-to-end deliverables through visionary imperatives.",
      title: "Objectively maintain sustainable infomediaries",
    },
  ],
  reviews: [
    {
      author: "Marta Kaufman",
      id: 0,
      img: photo,
      status: "CEO of General Electrics",
      text:
        "Efficiently supply dynamic methodologies after equity invested alignments. Professionally fashion adaptive initiatives after enterprise-wide methodologies. Competently recaptiualize competitive best practices for client-focused technologies. ",
      title: "BuildStars help me to grow my business beyound country limits.",
    },
    {
      author: "Robert Tompson",
      id: 1,
      img: photo,
      status: "Director of Macrosoft",
      text:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources. ",
      title: "Extremely good service and amazing support. Highly recommend.",
    },
    {
      author: "Edvard Wright",
      id: 2,
      img: photo,
      status: "Manager of Global Store",
      text:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces. ",
      title: "Their products professional and support is personal oriented",
    },
    {
      author: "Chriss Hemsworth",
      id: 3,
      img: photo,
      status: "Customer",
      text:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      title:
        "Pretty good company in our small town. Work with respect to our needs.",
    },
  ],
  services: [
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 0,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Handling of construction materials",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Construction",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 1,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Making planning for ptoject",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Loghistic",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 2,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create value for future product",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Manufacture",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 3,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Manage workers for productive results",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Building",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 4,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Make connections with industry leaders",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Management",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 5,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create channel of distribution",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Distribution",
    },
  ],
  team: [
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 0,
      img: photo,
      job: "Designer",
      name: "Martin Tompson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 1,
      img: photo,
      job: "Developer",
      name: "Juliana Redford",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 2,
      img: photo,
      job: "CEO, Director",
      name: "Robert Ferguson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
  ],
  users: [
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 0,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
      name: "Marta Smith",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 1,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr2.jpg?alt=media&token=b7b35188-bfc7-409d-9ad8-78bc89b36abc",
      name: "Mark Roberts",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 2,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr3.jpg?alt=media&token=40783389-abdc-4a53-8ea6-ee691732c668",
      name: "Fred Johnson",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 3,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr4.jpg?alt=media&token=f324453f-3080-41bf-80a4-94dd1e20e10f",
      name: "Ron Anderson",
    },
  ],
  video: {
    header: "",
    about: "",
  },
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
