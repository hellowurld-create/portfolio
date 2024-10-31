export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3  md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-2xl",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GrubGo - Food Delivery App",
    des: "Discover delicious food nearby with Grubgo—a fast, easy food delivery app connecting you to local favorites.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mdb.svg", "/auth0.svg"],
    link: "https://grubgo-frontend.onrender.com/",
  },
  {
    id: 2,
    title: "InkSpace - Ai SaaS App",
    des: " AI-powered SaaS app designed for effortless ebook summarization into high-quality text for students",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg", "/c.svg"],
    link: "https://inkspace.vercel.app/",
  },
  {
    id: 3,
    title: "Witstart - Agency Website",
    des: "Witstart is a dynamic agency website offering creative solutions to elevate brands, from strategy and design to digital marketing.",
    img: "/p4.png",
    iconLists: ["wordpress.svg"],
    link: "https://witstart.co/",
  },
  {
    id: 4,
    title: "Academe - School Management Dashboard",
    des: "A School management dashboard that captivates visitors with interactive elements, and create memorable first impressions.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/git.svg", "/fm.svg"],
    link: "https://github.com/hellowurld-create/Academe-School-Dashboard-UI",
  },
];

export const testimonials = [
  {
    quote:
      "Godswill brought our vision to life with creativity and professionalism. From the first consultation to the final handover, he demonstrated expertise and a strong commitment to our goals. The Visa services site he developed for us not only looks amazing but has also boosted our visitors significantly. I highly recommend him to anyone looking to elevate their online business",
    name: "Mr.Arif Patel",
    title: "Director of Visa & IT LTD",
  },
  {
    quote:
      "Collaborating with Godswill on multiple projects has been inspiring. He’s always on top of the latest technologies and consistently brings innovative ideas to the table. He’s also a great communicator, making even complex projects feel manageable and enjoyable. His knack for creating seamless UIs has been invaluable for our team",
    name: "Michael Ene Henry",
    title: "Software Engineer",
  },
  {
    quote:
      "Collaborating with God'swill was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Godswill's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Godswill is the ideal partner.",
    name: "Gedoni Ani",
    title: "Software Engineer",
  },
  {
    quote:
      "Working with Godswill has been a game-changer for our online presence. His approach to design and functionality is impeccable, and he took the time to understand our brand before delivering a website that was beyond our expectations. His responsiveness and attention to detail made the entire process smooth and enjoyable. If you need a developer who genuinely cares about your project, look no further",
    name: "Victor",
    title: "Creative Director, Witstart",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - Oigetit Fake News Filter(Remote - US)",
    desc: "This remote position offered flexibility to work from anywhere while collaborating with a dynamic team in the US. My primary responsibilities was implementing high-performance, responsive designs using modern frameworks, and contributing to the enhancement of Oigetit’s front-end architecture. I worked closely with backend engineers, data scientists, and UX/UI designers to ensure cohesive, efficient, and scalable applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer - Visa & IT Ltd(Remote - UK)",
    desc: "As a Web Developer at Visa & IT Ltd, i was be part of a dedicated team focused on delivering innovative, high-quality digital solutions. Working remotely with our UK-based clients, you’ll be responsible for designing, coding, and maintaining user-friendly websites and web applications that meet our client’s needs in sectors such as finance, immigration, and travel consulting.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev (Remote)",
    desc: "I collaborated with clients and occasionally with other freelancers, transforming ideas into fully functional apps, addressing client feedback, and maintaining high standards in UX/UI, performance, and security.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "WordPress Developer(Nigeria)",
    desc: "I worked closely with designers, marketers, and project managers, translating project requirements into effective WordPress solutions. Whether building custom themes, implementing complex plugins, or optimizing existing sites for speed and functionality, i was essential in delivering top-notch web solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hellowurld-create?tab=repositories",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/09016473603",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/godswill-ishie",
  },
];
