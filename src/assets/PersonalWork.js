import drawing1 from '../assets/images/personalProjects/haronDrawing.jpg'
import drawing2 from '../assets/images/personalProjects/lizardDrawing.jpg'
import drawing3 from '../assets/images/personalProjects/moth.gif'
import dnd1 from '../assets/images/personalProjects/dnd/wyvern.png'
import dnd2 from '../assets/images/personalProjects/dnd/lich.png'
import dnd3 from '../assets/images/personalProjects/dnd/raspberry.png'
import dnd4 from '../assets/images/personalProjects/dnd/venrie.gif'
import other1 from '../assets/images/personalProjects/other/embroidery.jpg'
import other2 from '../assets/images/personalProjects/other/embroidery2.jpg'
import other3 from '../assets/images/personalProjects/other/embroidery3.jpg'
import other4 from '../assets/images/personalProjects/other/mini.jpg'
import other5 from '../assets/images/personalProjects/other/mini2.jpg'
import other6 from '../assets/images/personalProjects/other/mini3.jpg'
import other7 from '../assets/images/personalProjects/other/mini4.jpg'




export const PersonalWork =[
    {   id:"1",
        title:"Drawings",
        description:"",
        imgUrl:drawing1,
        detailDescription: "Gallery of some unrelated drawings",
        showing: false,
        carouselImgUrls:[drawing1,drawing2,drawing3]
    },
    {
        id:"2",
        title:"DND drawings",
        description:"",
        imgUrl:dnd1,
        detailDescription: "Here are some drawings inspired by various dungeons and dragons games.",
        showing: false,
        carouselImgUrls:[dnd2,dnd3,dnd4,dnd1]
    },
    {
        id:"3",
        title:"Other projects",
        description:"",
        imgUrl:other1,
        detailDescription: "Some personal projects outside of drawings.",
        showing: false,
        carouselImgUrls:[other2,other3,other1,other4,other5,other6,other7]
    },
];