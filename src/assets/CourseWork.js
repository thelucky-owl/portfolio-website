
import laravelImg1 from '../assets/images/laravel 1.png'
import laravelImg2 from '../assets/images/laravel 2.png'
import laravelImg3 from '../assets/images/laravel 3.png'
import laravelImg4 from '../assets/images/laravel 4.png'
import img1 from '../assets/images/laravel 1.png'
import img2 from '../assets/images/maritiemMuseum1.png'
import img3 from '../assets/images/seriousGame1.png'

export const CourseWork =[
    {   id:"1",
        title:"Laravel project",
        description:"",
        imgUrl:img1,
        detailDescription: "In a second-year course about using frame works, I build this website with Laravel. The site is for creating costume content for dungeons and dragon games.",
        showing: false,
        carouselImgUrls:[laravelImg1,laravelImg2,laravelImg3,laravelImg4]
    },
    {
        id:"2",
        title:"Maritime museum design concept",
        description:"",
        imgUrl:img2,
        detailDescription: "For a first year design course I had to come up with a technological addition to the maritime museum in Rotterdam. I designed this poster to show off my idea for a vr addition to the museum.",
        showing: false,
        carouselImgUrls:[img1,img2,img3]
    },
    {
        id:"3",
        title:"Serious gaming",
        description:"",
        imgUrl:img3,
        detailDescription: "For an elective course I, along with two classmate, had to create a serious game concept. Our concept centred around children with selective mutism, we wanted to inspire them to communicate with friends/classmate by encouraging teamwork through a game.",
        showing: false,
        carouselImgUrls:[img1,img2,img3]
    },
    {
        id:"4",
        title:"Pixel art",
        description:"",
        imgUrl:img3,
        detailDescription: "Some pixel art made for programming courses that went unfortunately unused",
        showing: false,
        carouselImgUrls:[img1,img2,img3]
    },
];