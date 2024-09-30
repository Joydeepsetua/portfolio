import {
    androidLogo,
    callIcon,
    facebookFill,
    facebookOutline,
    firebaseLogo,
    getAttendance,
    githubFill,
    githubLogo,
    githubOutline,
    googleFill,
    googleOutline,
    ideliver,
    instaFill,
    instaOutline,
    leetcodeFill,
    leetcodeOutline,
    linkedinFill,
    linkedinOutline,
    location,
    mailIcon,
    getAttendanceSS,
    mongodbLogo,
    mysqlLogo,
    nodeLogo,
    npmLogo,
    reactLogo,
    reduxLogo,
    stackOverflowFill,
    stackOverflowOutline,
    sthanave,
    themeAndroidLogo,
    themeFirebaseLogo,
    themeGithubLogo,
    themeMongodbLogo,
    themeMysqlLogo,
    themeNodeLogo,
    themeNpmLogo,
    themeReactNativeLogo,
    themeReduxLogo,
    themeXcodeLogo,
    twitterFill,
    twitterOutline,
    xcodeLogo,
    youtubeFill,
    youtubeOutline,
    mobile_development
} from "./ImgPath";

// export const SKILLS = [
//     {
//         id: 1,
//         title: "React-Native",
//         path: reactLogo,
//         width: 50,
//         height: 50
//     },
//     {
//         id: 2,
//         title: "Redux Toolkit",
//         path: reduxLogo,
//         width: 45,
//         height: 45
//     },
//     {
//         id: 3,
//         title: "Android",
//         path: androidLogo,
//         width: 45,
//         height: 45
//     },
//     {
//         id: 4,
//         title: "Xcode",
//         path: xcodeLogo,
//         width: 48,
//         height: 48
//     },
//     {
//         id: 5,
//         title: "Node js",
//         path: nodeLogo,
//         width: 48,
//         height: 48
//     },
//     {
//         id: 6,
//         title: "MongoDB",
//         path: mongodbLogo,
//         width: 50,
//         height: 50
//     },
//     {
//         id: 7,
//         title: "MySQL",
//         path: mysqlLogo,
//         width: 55,
//         height: 50
//     },
//     {
//         id: 8,
//         title: "Firebase",
//         path: firebaseLogo,
//         width: 30,
//         height: 50
//     },
//     {
//         id: 9,
//         title: "npm",
//         path: npmLogo,
//         width: 50,
//         height: 30
//     },
//     {
//         id: 10,
//         title: "GitHub",
//         path: githubLogo,
//         width: 58,
//         height: 58
//     },
// ];

export const THEME_SKILLS = [
    {
        id: 1,
        title: "React-Native",
        path: themeReactNativeLogo,
        width: 50,
        height: 50
    },
    {
        id: 2,
        title: "Redux Toolkit",
        path: themeReduxLogo,
        width: 50,
        height: 50
    },
    {
        id: 3,
        title: "Android",
        path: themeAndroidLogo,
        width: 50,
        height: 50
    },
    {
        id: 4,
        title: "Xcode",
        path: themeXcodeLogo,
        width: 50,
        height: 50
    },
    {
        id: 5,
        title: "Node.js",
        path: themeNodeLogo,
        width: 50,
        height: 50
    },
    {
        id: 6,
        title: "MongoDB",
        path: themeMongodbLogo,
        width: 50,
        height: 50
    },
    {
        id: 7,
        title: "MySQL",
        path: themeMysqlLogo,
        width: 50,
        height: 50
    },
    {
        id: 8,
        title: "Firebase",
        path: themeFirebaseLogo,
        width: 50,
        height: 50
    },
    {
        id: 9,
        title: "npm",
        path: themeNpmLogo,
        width: 50,
        height: 50
    },
    {
        id: 10,
        title: "GitHub",
        path: themeGithubLogo,
        width: 50,
        height: 50
    },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Get Attendance",
        shortdescription: 'Android application',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;This Android application is developed using <b>Android Studio</b> with <b>Java</b> and stores data in an <b>SQLite</b> database on the user's mobile phone. In this app, teachers can create classes and add students. There are two options for adding students: manual entry or CSV import. Once students are added, teachers can easily take attendance and download the reports in <b>Excel</b> and <b>PDF</b> formats. <br><br> &nbsp;&nbsp;&nbsp;&nbsp;Additionally, a standout feature enables teachers to download their own monthly reports in PDF format. These reports meticulously outline the total number of classes taught in the month, along with detailed information such as the class, subject, period, and topics covered during each class.`,
        logo: getAttendance,
        vector: mobile_development,
        live_url:'https://drive.google.com/file/d/1DrEHjBNrHaxEjBjN5bd3vIvgwGr9Vbs6/view?usp=drive_link',
        github_url:'',
        width: 400,
        height: 400
    },
];

export const CONTACT = [
    {
        id: 1,
        title: "Phone",
        icon: callIcon,
        url: 'tel:9713231022',
        label: '+91 9713231022',
        width: 30,
        height: 30
    },
    {
        id: 2,
        title: "email",
        icon: mailIcon,
        url: 'mailto:joydeepsetua86@gmail.com',
        label: 'joydeepsetua86@gmail.com',
        width: 30,
        height: 30
    },
    {
        id: 3,
        title: "location",
        icon: location,
        url: 'https://maps.app.goo.gl/T6K9KPBSgi9Quzkb9',
        label: 'Chhattisgarh, India 🇮🇳',
        width: 30,
        height: 30
    },
];

export const SOCIAL_MEDIA = [
    {
        id: 1,
        title: "facebook",
        path_fill: facebookFill,
        path_outline: facebookOutline,
        width: 30,
        height: 30,
        url: 'https://www.facebook.com/joydeep.setua',
        is_hover: false
    },
    {
        id: 2,
        title: "instagram",
        path_fill: instaFill,
        path_outline: instaOutline,
        width: 30,
        height: 30,
        url: 'https://www.instagram.com/joydeepsetua',
        is_hover: false

    },
    {
        id: 3,
        title: "linkedin",
        path_fill: linkedinFill,
        path_outline: linkedinOutline,
        width: 30,
        height: 30,
        url: 'https://www.linkedin.com/in/joydeep-setua-a22016210',
        is_hover: false
    },
    {
        id: 4,
        title: "github",
        path_fill: githubFill,
        path_outline: githubOutline,
        width: 30,
        height: 30,
        url: 'https://github.com/Joydeepsetua',
        is_hover: false
    },
    {
        id: 5,
        title: "twitter",
        path_fill: twitterFill,
        path_outline: twitterOutline,
        width: 30,
        height: 30,
        url: 'https://twitter.com/Joydeepsetua?s=20',
        is_hover: false
    },
    // {
    //     id: 6,
    //     title: "google",
    //     path_fill: googleFill,
    //     path_outline: googleOutline,
    //     width: 30,
    //     height: 30,
    //     url: 'https://joydeepsetua.github.io/Joydeepprofile.github.io/',
    //     is_hover : false
    // },
    // {
    //     id: 7,
    //     title: "youtube",
    //     path_fill: youtubeFill,
    //     path_outline: youtubeOutline,
    //     width: 30,
    //     height: 30,
    //     url: 'https://youtube.com/joydeepclasses',
    //     is_hover : false
    // },
    // {
    //     id: 8,
    //     title: "leetcode",
    //     path_fill: leetcodeFill,
    //     path_outline: leetcodeOutline,
    //     width: 30,
    //     height: 30,
    //     url: 'https://leetcode.com/JoydeepSetua/',
    //     is_hover : false
    // },
    {
        id: 9,
        title: "stackoverflow",
        path_fill: stackOverflowFill,
        path_outline: stackOverflowOutline,
        width: 30,
        height: 30,
        url: 'https://stackoverflow.com/users/22558425/joydeep-setua',
        is_hover: false
    },
];

export const EXPERIENCE = [
    {
        id: 1,
        company: "Sthanave Technologies",
        profile: 'React-Native Developer',
        logo: sthanave,
        website: 'https://sthanave.co.in/',
        description: `Worked on a React Native app to develop <b>iOS</b> and <b>Android</b> applications and utilized <b>Redux Toolkit</b> for state management. I have integrated <b>live classes</b> using the <b>Zoom SDK</b>. I optimized performance by minimizing re-renders through component, optimization and reducing API calls. Furthermore, I handled two <b>Apple Developer Consoles</b> simultaneously.`,
        from: 'Dec 2022',
        to: 'Present'

    },
    {
        id: 2,
        company: "iDeliver Technologies LLC",
        profile: 'Staff Software Engineer',
        logo: ideliver,
        website: 'https://www.ideliver-inc.com/',
        description: `Worked on automating websites using scripting with <b>LoadRunner</b> and <b>UFT</b> tools. Automated over <b>4 websites for performance testing</b> using LoadRunner. Automated <b>more than 2 websites</b> using UFT for functional testing.`,
        from: 'Sep 2022',
        to: 'Nov 2022'

    },
];