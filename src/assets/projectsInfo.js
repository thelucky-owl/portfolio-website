import trashcanPoster from '../assets/images/teamProjects/trashcan/cle1Poster.png'
import trashcanCover from '../assets/images/teamProjects/trashcan/cover.png'
import trashcan1 from '../assets/images/teamProjects/trashcan/can1.jpg'
import trashcan2 from '../assets/images/teamProjects/trashcan/can2.jpg'
import app from '../assets/images/teamProjects/accessibility/coverPhoto.jpg'
import app2 from '../assets/images/teamProjects/accessibility/appLogin.png'
import app3 from '../assets/images/teamProjects/accessibility/appHome.png'
import app4 from '../assets/images/teamProjects/accessibility/appQuestions.png'
import app5 from '../assets/images/teamProjects/accessibility/appAnswers.png'
import app6 from '../assets/images/teamProjects/accessibility/appRecord.png'
import app7 from '../assets/images/teamProjects/accessibility/appAnswers2.png'
import eco from '../assets/images/teamProjects/routeco/TLE-3 routect.jpg'
import eco2 from '../assets/images/teamProjects/routeco/TLE3 start.jpg'
import eco3 from '../assets/images/teamProjects/routeco/TLE3 login.jpg'
import eco4 from '../assets/images/teamProjects/routeco/TLE3 edit account.jpg'
import eco5 from '../assets/images/teamProjects/routeco/TLE3 map.jpg'
import eco6 from '../assets/images/teamProjects/routeco/TLE3 gallery.jpg'
import eco7 from '../assets/images/teamProjects/routeco/TLE3 gallery 2.jpg'
import eco8 from '../assets/images/teamProjects/routeco/TLE3 camera.jpg'

export const projectsInfo =[
    {   id:"1",
        title:"Appcessibility",
        description:"",
        imgUrl:app,
        detailDescription: "Appcessibility is a mobile application, made by me and a team of classmates. The app was made for the organisation accessibility, who preform audit on websites and locations to see how accessible they are. The app is supposed to support volunteers with a vision impairment in filling out a questionnaire about locations theyve visited.",
        showing: false,
        carouselImgUrls:[app2,app3,app4,app5,app6,app7]
    },
    {
        id:"2",
        title:"Routeco",
        description:"",
        imgUrl:eco,
        detailDescription: "Routeco is a mobile application, made by me and a team of classmates.  The app was made to collect data about the biodiversity of Rotterdam. User of the app can photograph plants, the app will then figure out what plant this is with image recognition. With the collection of this data a rough idea of the biodiversity in Rotterdam is created.",
        showing: false,
        carouselImgUrls:[eco2,eco3,eco4,eco5,eco6,eco7,eco8]
    },
    {
        id:"3",
        title:"Automatic trashcan",
        description:"",
        imgUrl:trashcanCover,
        detailDescription: "This Automatic trashcan is the first project i worked on in my study at Rotterdam university of applied sciences. This trashcan was made for a dentist office where the trashcan they had, that was under their desk, couldn't open completely. It was made using a Circuit Playground Express, a Crickit and of course a trashcan.",
        showing: false,
        carouselImgUrls:[trashcanPoster,trashcan1,trashcan2]
    },
    
];