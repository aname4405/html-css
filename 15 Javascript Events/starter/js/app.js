//Team member selector
var members = [
    {
        src:"images/Adrian.png",
        name: "Adrian Jakeman",
        bio: "Adrian has worked in the IT and education industries for the past 25 years and joined QA in 2006 with a focus on the development and delivery of training around Visual Studio, Team Foundation Server and the software development lifecycle. Still to be found in the classroom delivering training around Application Lifecycle Management, he is also responsible for the day-to-day management of QA’s IT curriculum. He has particular focus on the quality, breadth, depth and relevance of both vendor-produced courses and the extensive QA-authored portfolio. Areas of expertise: Teaching and learning effectiveness, Application Lifecycle Management, Cloud computing, Team Foundation Server."
    },
    {
        src: "images/Dave.png",
        name: "David Walker",
        bio: "David is a change driven technologist who continually looks to adapt and expand his knowledge and understanding of his field. Over the least eighteen years David has led technology and training companies through emerging fields and technology trends helping them to understand the future and develop business opportunities. As Head of Emerging Technologies he works closely with customers and industry experts to ensure the opportunities and threats of new technology trends designing custom learning solutions to help small and enterprise organisation adapt and make the most of their people - ensuring QA is ready when our customers need to navigate the minefield of the fast moving digital landscape. His passion is in advanced web engineering principals and vendor neutral thick client design/development technologies reflected in his research, analysis and courseware development experience combined with his training delivery skills. As a technologist he is the lead instructor and syllabus author for web development technologies and specialising in Agile, DevOps, and User Experience driven approaches to developing solutions. He has authored courses such as HTML5, Responsive Web Development, User Experience, NodeJS, Javascript and jQuery."
    },
    {
        src:"images/Laurence.png",
        name: "Laurence Sharp",
        bio: "Having been a chartered surveyor with computing as a hobby, Laurence made a midlife career choice and joined QA in 1994. Originally specialising in desktop applications and end user training he is now a principal consultant in the internet and web technologies area and has been the lead trainer on several key projects with responsibility for overall training design and delivery. As well as delivering courses in most of the web technologies he has also developed several of the QA authored technical and client specific courses. Laurence is constantly researching and exploring the exiting technologies that are appearing in the internet and web development solution area and gets a lot of satisfaction in passing this new information on to our delegates.</p>"
    },
    {
        src:"images/Phil.png",
        name:"Phil Stirpe",
        bio: "Philip is a Microsoft Certified Trainer - MCT based in the North-West, and has been involved in software development and IT training for over 26 years. Philip is actively involved in vendor relationships. He has delivered Visual Studio, .NET, Silverlight, WPF and LIVE training courses on behalf of Microsoft worldwide and recently developed and delivered a wide portfolio of AWS training with Amazon Web Services. His areas of interest include Visual Studio, .NET, Amazon Web Services - AWS, Web Application Security, DevOps and Configuration Management, Scrum and Agile Software Development. Philip is currently involved in developing QA’s Agile curriculum across all of its practices as well as developing QA’s Configuration Management portfolio with courses in tools including Chef and Puppet. He is passionate about developing and delivering training that meets the needs of the client and exceeds their expectations. Philip has also pioneered various techniques and tools to help other trainers in QA to develop including the use of video and audio recording at QA in order to produce Train the Trainer material for each of his courses. In addition, he introduced a Bitesize programme where trainers deliver short briefings to colleagues after class in order to help share skills. Philip develops a great number of QA authored courses. Recent courses include ASPNET MVC, OWASP for Java, Puppet and Chef.</p>"
    },
]


//Random headline image generator
var images = [
    "images/keyboard.jpg",
    "images/theTeam.jpg",
    "images/trainer.jpg",
    "images/trainingCourses.jpg"
];

var i = document.querySelector('header h1');

var currentPosition = parseInt(Math.random()*images.length);

i.style.backgroundImage = "url(" + images[currentPosition] + ")";
