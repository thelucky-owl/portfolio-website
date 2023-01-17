import img1 from '../assets/images/project-img1.png'
import img2 from '../assets/images/project-img2.png'
import img3 from '../assets/images/project-img3.png'
import laravelImg1 from '../assets/images/laravel 1.png'



export const PersonalWork =[
    {   id:"1",
        title:"Drawings gallery",
        description:"",
        imgUrl:img1,
        detailDescription: "Gallery of some unrelated drawings",
        showing: false,
        carouselImgUrls:[laravelImg1,img2,img3]
    },
    {
        id:"2",
        title:"DND drawings",
        description:"",
        imgUrl:img2,
        detailDescription: "Here are some drawings inspired by various dungeons and dragons games.",
        showing: false,
        carouselImgUrls:[img1,img2,img3]
    },
    {
        id:"3",
        title:"Other projects",
        description:"",
        imgUrl:img3,
        detailDescription: "Some personal projects outside of drawings.",
        showing: false,
        carouselImgUrls:[img1,img2,img3]
    },
];