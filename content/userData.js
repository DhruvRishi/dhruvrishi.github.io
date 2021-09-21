/*
    EDIT THIS FILE TO CHANGE THE USER DATA
*/

export const introduction = {
    fname: "Dhruv",
    mname: "", //Leave blank if don't have any middle name
    sname: "Rishi",
    profession: "Frontend Designer",
    impressum: "",
    profilePicUrl: "minepic.png",
};

export const socialMedia = {
    twitter: "https://twitter.com/dhruv_wtf",
    linkedin: "https://www.linkedin.com/in/dhruvrishi",
    github: "https://github.com/dhruvrishi",
    medium: "",
    gmail: "",
};
export const skillStack = {
    frontendStack: {
        html: "html.png",
        css: "css3.png",
        java:"java.png",
        kotlin:"kotlin.png",
        py:"python.png"
        
    },
    //If backendStack isn't application, just remove the whole Object backendStack
    backendStack: {
        node: "flutter.png",
    },
    tools: {
        adlr:"adobe-lightroom.png",
        adpr:"adobe-premiere-pro.png",
        adps:"adobe-photoshop.png",
        adxd:"adobe-adobe-xd.png",
        adae:"adobe-after-effects.png",
        npm: "android.png",
        firebase:"firebase.png",
        git: "git.png",
    },
};
export const educationDetails = {
    bachelors: {
        //format should be MM YYYY for example - Aug 2018
        tenure: "Aug 2018 - July 2022",
        degreeName: "Bachelor of Technology",
        clgName: "BBDNITM LUCKNOW",
        majors: "Computer Science",
        gpa: " 7.89",
        currentSemOrYear: "6th Semester",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: true,
        graduationYear: " May 2022",
    },
    hsc: {
        //format should be MM YYYY for example - Aug 2018
        tenure: "March 2018",
        degreeName: "High School (12th Grade)",
        clgName: "City Montessori School",
        majors: "Mathematics, Physics and Computer Science",
        gpa: "Scored 87%",
        board: "ISC Board",
        //Fill only If you are currently studying in  High School
        currentSemOrYear: "",
        //If you are currently studying in  bachelors, keep currentlyStudying set to true
        currentlyStudying: false,
        graduationYear: " March 2018",
    },
};
export const experienceDetails = {
    experience_1: {
        tenure: "APRIL 2021 – JUNE 2021",
        position: "Database Admin Intern ",
        companyName: "Stark Industries",
        desc: [
            "Participated and supported SQL server installations at the site.",
            "Documented database architecture.",
            "Managed the orders excel sheets on a daily basis.",
        ],
    },
    experience_2: {
        tenure: "AUGUST 2020 – OCTOBER 2020",
        position: "Data Analytics Intern",
        companyName: "ANKITA ENTERPRESIS",
        desc: [
            "Analyzed the sales of previous year using data analytics practices.",
            "Concluded that the starting of summer has peak sales.",
        ],
    },
};
export const resumeLink = {
    link: "https://drive.google.com/file/d/1reHamDrvvufz4xGTEliNDL9KMHWC3Dwd/view?usp=sharing",
};

export const projects = [
    {
        projectImg: "/project_img1.png",
        projectTenure: "Jun 2021 - Aug 2021",
        projectName: "Resume Styled Portfolio",
        desc_1: " A minimal and elegant design with responsive capabilities.",
        desc_2: " Developed a static Front-End product using NextJS and Bootstrap.",
        desc_3: "Deployed and hosted on Vercel.",
        projectLink: "https://dazzlerkumar.vercel.app/",
        repoLink: "https://github.com/dazzlerkumar/dazzlerkumar.github.io",
    },
    {
        projectImg: "/bookmonger_ss.png",
        projectTenure: "Jun 2019 - Jul 2019",
        projectName: "BookMonger - A Book Exchange portal",
        desc_1: "A heaven website for avid book readers.",
        desc_2: "Developed a dynamic responsive full product using WAMP stack and Bootstrap.",
        desc_3: "Collaborated with my classmate to develop it.",
        projectLink:
            "https://drive.google.com/file/d/1anlup4VBHpdcGsotbAPDpnxkBCDVWhr5/view?usp=sharing",
        repoLink: "https://github.com/dazzlerkumar/bookmonger",
    },
];
