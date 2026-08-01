import { domx } from "./domx.js"

const setTheme = (themeName) => {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
};

const rootLink     = "#/";
const githubLink   = "https://github.com/aliannoi";
const linkedinLink = "https://www.linkedin.com/in/alex-liannoi-a3410820a";
const gmailLink    = "mailto:lyannoy.alexander@gmail.com";
const cvLink       = "https://docs.google.com/document/d/1ls1dzDjHjdCEG5Qj-uDLoHNn6BDknf1W26QWnPJjM1U/export?format=pdf";

const rootSvg = domx.svg({ fill: "currentColor", width: "800px", height: "800px", viewBox: "0 0 492.5 492.5"},
                         domx.g({}, domx.path({ d: "M184.646,0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422v-61.235V37.5L184.646,0z M222.938,263.129 c-6.997,0-12.67-7.381-12.67-16.486c0-9.104,5.673-16.485,12.67-16.485s12.67,7.381,12.67,16.485 C235.608,255.748,229.935,263.129,222.938,263.129z" })));

const githubSvg = domx.svg({ width: "98", height: "96", viewBox: "0 0 98 96", fill: "none" },
                           domx.g({ clipPath: "url(#clip0_730_27126)" },
                                  domx.path({ fill: "currentColor", d: "M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"})),
                           domx.defs({}, domx.clipPath({ id: "clip0_730_27126" }, domx.rect({ width: "98", height: "96", fill: "white" }))));

const linkedinSvg = domx.svg({ height: "800px", width: "800px", viewBox: "0 0 382 382" },
                             domx.path({ fill: "currentColor", d: "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" }));

const gmailSvg = domx.svg({ viewBox: "0 0 48 48", width: "48px", height: "48px"},
                          domx.path({ fill: "currentColor", d: "M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"}),
                          domx.path({ fill: "currentColor", d: "M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" }),
                          domx.polygon({ fill: "currentColor", points: "35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" }),
                          domx.path({ fill: "currentColor", d: "M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" }),
                          domx.path({ fill: "currentColor", d: "M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" }));

const cvSvg = domx.svg({ fill: "currentColor", width: "800px", height: "800px", viewBox: "0 0 45.057 45.057" }, 
                       domx.g({}, domx.path({ d: "M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301 c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541 c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853 c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203 c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414 c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895 c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416 c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422 s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312 c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593 C19.68,25.023,19.627,25.214,19.558,25.389z" }),
	                          domx.polygon({ points: "26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616 " }),
	                          domx.path({ d: "M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z" })));

const externLink = (attribs, ...children) => {
    attribs = { target: "_blank", rel: "noopener noreferrer", ...attribs };
    return domx.a(attribs, ...children);
};

const routerLink = (attribs, ...children) => {
    attribs = { rel: "noopener noreferrer", ...attribs };
    return domx.a(attribs, ...children);
};

const pageHeader = () => {
    const headerLinks = [
        { link: "#/home",     text: "Home" },
        { link: "#/projects", text: "Projects" },
        { link: "#/about",    text: "About" },
    ];

    return domx.header({}, ...headerLinks.map((item) => {
        const isActive = location.hash === item.link;
        const className = (isActive ? "selected" : "");
        return routerLink({ class: className, href: item.link }, item.text);
    }));
};

const pageMain = (...children) => {
    return domx.main({}, ...children);
};

const pageFooter = () => {
    const socials = [
        routerLink({ href: rootLink     }, rootSvg),
        externLink({ href: githubLink   }, githubSvg),
        externLink({ href: linkedinLink }, linkedinSvg),
        externLink({ href: gmailLink    }, gmailSvg),
        externLink({ href: cvLink       }, cvSvg),
    ];
    return domx.footer({}, ...socials);
};

const page = (...children) => {
    return domx.div({ class: "page" },
                    pageHeader(),
                    pageMain(...children),
                    pageFooter());
};

const dynamicTextType = (tag, text, msPerChar, onFinish = () => {}) => {
    tag.classList.add("dynamic-text-type");

    tag.textContent = "";
    
    let i = 0;
    const t = setInterval(() => {
        tag.textContent += text[i++];
        if (i === text.length) {
            clearInterval(t);
            onFinish();
        }
    }, msPerChar);

    return tag;
};

const pageRoot = () => {
    const goto = domx.p({}, "Go to ", routerLink({ href: "#/home" }, "Home"), " page.");
    goto.hidden = true;
    
    const showGoto = () => {
        setTimeout(() => {
            goto.hidden = false;
        }, 1000);
    };
    
    const contents = [
        dynamicTextType(domx.h1({}), "Work hard to become N+2 programmer.", 48, showGoto),
        goto,
    ];
    
    return domx.div({ class: "page" }, pageMain(domx.div({ class: "content-root" }, ...contents)));
};

const pageHome = () => {
    return page(domx.div({ class: "content-home" },
                         domx.h1({}, "Hello world. My name is Alex."),
                         domx.section({},
                                      domx.p({}, "I am programmer with focus on producing an actually good software."),
                                      domx.p({}, "By that I mean fast and reliable product that solves specific problems.")),
                         domx.section({},
                                      domx.p({}, "You can learn more about me and discover my programming journey on ", routerLink({ href: "#/about" }, "About"), " page."),
                                      domx.p({}, "Stuff I have worked on can be observed on  ", routerLink({ href: "#/projects" }, "Projects"), " page.")),
                        ));
};

const pageProjects = () => {
    const projects = [
        {
            name: "WIP Game",
            link: "",
            getContents: () => {
                const header = domx.p({}, "Game Project inspired by Gen-5-6 consoles era.");
                const description = [
                    domx.p({}, "The game I am currently working on. It is also a great learn project as I am trying to do everything from scratch to understand how every part of the game/engine works under the hood."),
                    domx.p({}, "It has its own editor with basic features like console, profiler, asset hot reload, fly camera and entity mouse pick and it's field manipulation, level save and load etc. I'll make some articles about different systems with more in depth overview."),
                ];
                const vid = domx.video(
                    { preload: "metadata", controls: "", autoplay: "", muted: "", loop: "", playsinline: "" },
                    domx.source({ src: "res/wip_game_overview.webm", type: "video/webm" }),
                    domx.source({ src: "res/wip_game_overview.mp4",  type: "video/mp4" }),
                    domx.span({}, "Your browser does not support HTML videos. You can download the video showcasing the game editor in a preferred format: "),
                    domx.a({ href: "res/wip_game_overview.webm" }, "webm"),
                    domx.span({}, ", "),
                    domx.a({ href: "res/wip_game_overview.mp4" }, "mp4"),
                );
                vid.muted = true; // muted attribute does not work if video was added dynamically...
                
                return [header, description, vid];
            },
        },
        {
            name: "DomX",
            link: "https://github.com/aliannoi/domx",
            getContents: () => {
                const header = domx.p({}, "Simple library for single-page application creation using JavaScript.");
                const description = [
                    domx.p({}, "The library provides alternative syntax to create html tags dynamically inside JS file, so all your layout and logic are at the same place. In addition, it provides hash-based router for convenient navigation between paths."),
                    domx.p({}, "Fun fact: this website is made using DomX."),
                ];
                
                return [header, description];
            },
        },
        {
            name: "Grind Survivors",
            link: "https://www.grindsurvivors.com",
            getContents: () => {
                const header = domx.p({}, "Fast-Paced Action Roguelike where demon hunters face endless hellspawn.");
                const description = domx.p({}, "I touched the project for a bit of time as I had some free time while waiting for another project to come up after previous one. Main focus was on working with Unreal Engine's ECS version, implementing entity behaviours. Also I have been doing some player related mechanics like dash.");
                
                return [header, description];
            },
        },
        {
            name: "Unknown 9: Awakening",
            link: "https://en.bandainamcoent.eu/unknown-9/unknown-9-awakening",
            getContents: () => {
                const header = domx.p({}, "Action-Adventure with fantasy elements.");
                const description = [
                    domx.p({}, "The first project I worked with and it was quite huge. I was mainly doing different runtime and memory optimizations on both game and engine level, doing UI and fixing bugs."),
                    domx.p({}, "I also implemented initial benchmark system that launched game in special mode, loaded predefined level and flew camera through the level, collecting runtime and memory data. At the end, it displayed statistics in a nice window. I remember it was painful to collect current VRAM usage as Unreal Engine did not provide such functionality, so I had to deep dive into render backend for engine editor and game build to provide such API."),
                    domx.p({}, "At some moment, I had to fix some key binding bug which led me to a journey on fixing almost whole key binding system and it's related UI."),
                ];

                return [header, description];
            },
        },
        {
            name: "Cartel: Tycoon",
            link: "https://www.carteltycoon.com",
            getContents: () => {
                const header = domx.p({}, "Survival business sim inspired by the '80s and '90s narco trade.");
                const description = "As it is a tycoon, it had a tone of UI, so most of the tasks were connected with it. I was fixing and optimizing UI and the game had a lot of such issues both gameplay related UI bugs and runtime performance spikes due to naive UI logic. In addition, I worked with console input to implement gamepad specific input for virtual keyboard.";

                return [header, description];
            },
        },
        {
            name: "Postal 4: No Regerts",
            link: "https://runningwithscissors.com/games/postal4",
            getContents: () => {
                const header = domx.p({}, "Satirical and outrageous comedic open world first person shooter.");
                const description = domx.p({}, "My main task was to optimize level load times. The game world was divided into level chunks that took quite some time on Gen-8 consoles. It was a great experience as eventually I came up with a solution that much simpler and had almost no abstractions in contrary to what was before. It did not take much time though, most of the time was spent on testing. Final load times were almost halfed on Gen-8 consoles and got 5-20% boost on Gen-9 consoles and PC.");

                return [header, description];
            },
        },
        {
            name: "Deadside",
            link: "https://www.deadsidegame.com",
            getContents: () => {
                const header = domx.p({}, "Open World Survival Shooter blending hardcore PVP and PVE action.");
                const description = domx.p({}, "Codebase was qutie controversial at the moment I saw it, but recalling it now it had actually good key points such as it's simplicity and openness. Initial task was to setup networking on Gen-9 consoles. After that I have implemented initial core UI components to be built upon and used on console branch of the game.");

                return [header, description];
            },
        },
        {
            name: "Convoy Simulation",
            link: "https://github.com/aliannoi/MilitarySimulation",
            getContents: () => {
                const header = domx.p({}, "Military Convoy Simulation.");
                const description = domx.p({}, "Simple simulation of a military convoy. Vehicles are going by specified spline path, can overtake obstacles in front of them if any and try to preserve convoy formation by decreasing or increasing speed based on distance from each other.");

                return [header, description];
            },
        },
        {
            name: "Ted",
            link: "https://github.com/aliannoi/ted",
            getContents: () => {
                const header = domx.p({}, "Text Editor.");
                const description = domx.p({}, "Simple hardware accelerated text editor based on gap buffer data structure. Basic cursor controls - next/prev char/line, goto start/end of line/file. Drag'n'drop file in window to open it.");

                return [header, description];
            },
        },
        {
            name: "Fifteen",
            link: "https://github.com/aliannoi/FifteenPuzzleGame",
            getContents: () => {
                const header = domx.p({}, "Classic 15 Puzzle Game.");
                const description = domx.p({}, "This was one of my first projects in Unreal Engine, I was mainly focused on working with UI here.");

                return [header, description];
            },
        },
        {
            name: "Snake",
            link: "https://github.com/aliannoi/ConsoleSnake",
            getContents: () => {
                const header = domx.p({}, "Classic Snake Game in console.");
                const description = domx.p({}, "I put quite some effort to implement the Snake Game as I saw this project as a compilation of all my knowledge at that time.");

                return [header, description];
            },
        },
        {
            name: "Shooter",
            link: "https://github.com/aliannoi/BasicShooter",
            getContents: () => {
                const header = domx.p({}, "Basic Shooter Game.");
                const description = domx.p({}, "The basic shooter game I have implemented while completing Unreal Engine study course. It covered almost all the main parts of the engine that gameplay programmers work with - editor, profiling, actor system, sound classes, blueprints, levels, animation graphs etc.");

                return [header, description];
            },
        },
    ];
    
    return page(domx.div({ class: "content-projects" },
                         domx.section({}, domx.ul({}, ...projects.map((item) => {
                             const sm = domx.summary({}, domx.span({}, item.name));
                             if (item.link) {
                                 const link = externLink({ href: item.link }, "Link");
                                 sm.appendChild(link);
                             }
                             
                             const d = domx.details({}, sm,
                                                    domx.div({ class: "separator" }),
                                                    item.getContents(),
                                                    domx.div({ class: "separator" }));
                             
                             return domx.li({}, d);
                         })))));
};

const pageAbout = () => {
    const abouts = [
        {
            name: "General",
            paragraphs: [
                "My name is Alexander Liannoi. I am 23 years old. I came from Ukraine where I lived almost whole my life. Most of my time I am programming and learning programming, but also I do like physical activites and I go to the gym and play Volleyball in a local team.",
            ],
        },
        {
            name: "First Steps in Programming",
            paragraphs: [
                "I found out about programming not long before finishing high school and immediately loved it. I remember when I studied first several months in university without own laptop or PC as I moved to another city. So I installed C/C++ compiler on my phone and was writing some code on it, what a time ha.",
                "Then I got a very old DELL laptop from my father. It was so slow that I had to wait several minutes just to open Visual Studio. But eventually, after savings from scholarship and huge crucial financial help from my parents, for what I am very glad and thankful, I got myself a brand new gaming laptop. After that the real gaming era began, but that's a different story.",
            ],
        },
        {
            name: "IT Cluster Era",
            paragraphs: [
                "On the 2nd year my university made an actually cool event with IT school, so all students of my Software Engineering department went to the so called IT Cluster where we spent almost whole year. The best and the most impactful part in terms of good programming mindset, as I see it now, were first several months of C, but I would say that this whole period was the best time in university.",
                "Despite I did not like them that much (as all of other students), I learned quite a lot in terms of low-level programming and most importantly used this new knowledge on practice. We had to implement our own simple cstdlib, which we had to use for further projects like Team 4-Day Game Jam, Pathfinding and Mini Terminal. It was very hard, especially the last months, but I had a lot of fun. The Oracle bot that was reviewing our submits had no mercy ha.",
                "After C, we went to webdev. HTML, CSS, JS, TS, PHP, React, Laravel and so on and so forth. It was not that bad, the tasks and projects were fun actually. I remember I liked to design a lot of stuff and implement frontend, backend was kinda boring for me. Among projects I remember were Card Game and Open Group Chat.",
                "The final team project, as I recall, was to implement a messenger application. So, it was a final exam to test what we have learned during the time. We successfuly passed it, but I cannot forget that we did not have enough time to implement some extra frontend features like showing funny cat gif in case of lost internet connection."
            ],
        },
        {
            name: "First Commercial Experience",
            paragraphs: [
                "After IT Cluster I took summer internship by NIX Solutions. I learnt about .NET and C#, more about React and TS and web applications in general, of what they consist of, they structure and architecture. On internship completion I got an offer to work full time which I accepted.",
                "During this period I had a more insights about .NET, general web applications architecture based on it, C#, JQuery and Angular. I implemented domain model for Ship Game and custom Object-Relational-Mapping model similar to .NET Entity Framework, worked with JQuery and Angular, nothing really special here, just frontend things.",
                "At the same time, me with my friends were looking for a startup opportunity and had some discussions with possible customers. So, after around half a year I left the company to start working on a new project with my friends. But at that time, Russia began a war and invaded Ukraine, thus destroying all the plans and current state of the startup."
            ],
        },
        {
            name: "Gamedev",
            paragraphs: [
                "I always wanted to work in gamedev and decided that this is an opportunity to actually start a deep dive into it. After quite some time of learning Unreal Engine and several interviews, I landed a job in Pushka Studios.",
                "I was very excited and motivated, but it lasted for several months, after which my day work mostly became a routine. I learnt less and less new stuff every day, week, month, though it was cool to have a couple of projects every year, refreshing. I did graphics and engine programming stuff in parallel, but without huge deep dive.",
                "Then, after around one-and-a-half years I decided to leave Ukraine and find myself in a new place."
            ],
        },
        {
            name: "New Old Mindset",
            paragraphs: [
                "I always liked low-level programming where you need to actually understand your problem on a deep level. That is why I liked gamedev eventually, because it combines the two things I like - hard technical problems to solve and hard design choices to make.",
                "And at one day I came across a video on YouTube from MollyRocket channel where a man in glasses drew some stuff on a glass board and talked about why Object Oriented Programming is bad. This video resonated with me so hard. I recalled my feelings about OOP and modern way of programming, that deep in my mind I deny them and do not like and feel that it is the right way to do things, it is like a gut feeling. Therefore, I started absorbing other videos from Casey Muratori (that man in glasses yelling at modern programming culture, with whom I actually agree) and other similar ones with same ideas like a sponge and eventually came across a video-cut of stream moments of some random grumpy man.",
                "This man turned out to be Jonathan Blow. And he immediately earned my sympathy for his thoughts and ideas. I really like the fact that he is both programmer and designer, he is like an actual embodiment of what I enjoy in programming - technicity and creativity."
            ],
        },
        {
            name: "Programming Philosophy",
            paragraphs: [
                "For me, programming is a great combination of both technical and creative skills you need to have to be productive. It forces you to use both halves of your brain respectively. Most of the time you solve direct local problems with technical skills (creativeness is required here as well, but has less impact) and for the more global and general issues you use your creativity to correctly setup all of the parts of the puzzle you are trying to solve. It is like The Yin Yang symbol with creativity for white and technicity for black or vice versa.",
                "I am really thankful to Casey Muratori, Jonathan Blow, Sean Barret, Shawn McGrath, Ryan Fleury, Yan Chernikov and many many more other people I probably forgot, for showing me the right programming mindset. For correlating a direction of my programming compass and demonstrating that you can build really high quality stuff without all this modern and trendy things that go in and out every several months."
            ],
        },
    ];
    
    return page(domx.div({ class: "content-about" },
                         domx.section({}, domx.ul({}, ...abouts.map((item) => {
                             const d = domx.details({}, domx.summary({}, domx.span({}, item.name)),
                                                    domx.div({ class: "separator" }),
                                                    ...item.paragraphs.map((par) => {
                                                        return domx.p({}, par);
                                                    }),
                                                    domx.div({ class: "separator" }));
                             return domx.li({}, d);
                         })))));
};

const page404 = () => {
    const contents = [
        domx.h1({}, "Out of bounds area, please come back."),
        domx.p({}, "Go back to ", routerLink({ href: "#/home" }, "Home"), " page."),
    ];
    
    return domx.div({ class: "page" }, pageMain(domx.div({ class: "content-404" }, ...contents)));
};

const r = domx.router({
    "/":         () => pageRoot(),
    "/home":     () => pageHome(),
    "/projects": () => pageProjects(),    
    "/about":    () => pageAbout(),    
    "/404":      () => page404(),
});

setTheme("theme-default");
document.body.appendChild(r);
