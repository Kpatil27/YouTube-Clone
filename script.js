var menuIcon=document.querySelector(".menu-icon");
var sideBar=document.querySelector(".sidebar");
var container=document.querySelector(".container");


var userIcon=document.querySelector(".user-icon");
var userSetting=document.querySelector(".settings");
var space=document.querySelector(".logo");
var setting=document.querySelector(".settings-height");


var toggleIcon=document.querySelector(".toggle");
var navBar=document.querySelector("nav");
var mainSidebar=document.querySelector(".sidebar");
var mainContainer=document.querySelector(".container");
var vidList=document.querySelector(".vid-list");
var imgList=document.querySelector(".img-class");
var logoDark=document.querySelector(".darkLogo");
var logoLight=document.querySelector(".nav-left .logo");
var youtubeLogo=document.getElementById("youtube-logo");
var whiteMenu=document.getElementById("new-icon");


menuIcon.onclick=function () {
    sideBar.classList.toggle("samll-sidebar");
    container.classList.toggle("large-container");
    
}


 userIcon.onclick=function () {
    userSetting.classList.toggle("settings-height");
     }


 space.onclick=function () {
     setting.classList.toggle("showSetting");
    }
 

 /* toggleIcon.onclick=function ()
 {
     navBar.classList.toggle("theme");
     mainSidebar.classList.toggle("theme");
     mainContainer.classList.toggle("theme1");
     vidList.classList.toggle("theme2");
     imgList.classList.toggle("theme2");
     /* logoDark.classList.toggle("newLight");
     logoLight.classList.toggle("newLogo");

    youtubeLogo.src="images/youtube.png";
 } */


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
 function themeChange(theme)
 {
    //  navBar.classList.toggle("theme-");
     /* mainSidebar.classList.toggle("theme");
     mainContainer.classList.toggle("theme1");
     vidList.classList.toggle("theme2");
     imgList.classList.toggle("theme2"); */
      if (localStorage.getItem('theme') === 'theme-dark')
      {
          setTheme('theme-light');
          youtubeLogo.src="images/logo.png";
      }
      else {
          setTheme('theme-dark');
          youtubeLogo.src="images/youtube.png";
      }
    
 }
 
 (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        youtubeLogo.src="images/youtube.png";
        
    } else {
        setTheme('theme-light');
        youtubeLogo.src="images/logo.png";
       
    }
})();





const list=document.getElementById("list-container");
const productList = [
    {
        id: 1,
        src:'https://i.ytimg.com/vi/Qc2dgdOazuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpHk1PgHjeI0VjektgR6h5F2VnmQ',
        channelName:'SimpliCode',
        description:'JS Full Course',
        views:'15K views',
        days:'2 days',
        time: '22:27',
    },

    {
        id: 2,
        src:'https://i.ytimg.com/vi/KSX4cwWRzis/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AO',
        channelName:'Mr.Bean',
        description:'Cartoon',
        views:'250K views',
        days:'2 days',
        time: '22:27',
   },

   {
    id: 3,
    src:'https://i.ytimg.com/vi/ZVO8Wt_PCgE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvcGdE55lXCVqX67YYMWuU0FNTKA',
    channelName:'Mr.Shaha',
    description:'How to learn',
    views:'55K views',
    days:'15 days',
    time: '22:27',
   },

   {
    id: 4,
    src:'https://i.ytimg.com/vi/ZxKM3DCV2kE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSSimI3ICqOUAR6VaENfDsqw56nA',
    channelName:'Web Dev',
    description:'WebDevelopment Full Course',
    views:'105K views',
    days:'2 days',
    time: '22:27',
},

{
    id: 5,
        src:'https://i.ytimg.com/vi/ToZSFHUJdHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB21pTf32OypIlVAU_qjNpVkaSIpA',
        channelName:'Apna College',
        description:'What is Coding',
        views:'5K views',
        days:'2 days',
        time: '22:27',
},

{
    id: 6,
        src:'https://i.ytimg.com/vi/1Rs2ND1ryYc/mqdefault.jpg',
        channelName:'freecodecamp',
        description:'CSS Zero to Hero',
        views:'150K views',
        days:'2 days',
        time: '22:27',
},
{
    id: 7,
    src:'https://i.ytimg.com/vi/t0Q2otsqC4I/mqdefault.jpg',
    channelName:'Tom&Jerry',
    description:'Cartoon Network',
    views:'1555K views',
    days:'2 days',
    time: '22:27',
},

{
    id: 8,
        src:'https://i.ytimg.com/vi/F7OMDDCTro4/mqdefault.jpg',
        channelName:'Nobita-Sizuka',
        description:'Doremon New Episodes',
        views:'100K views',
        days:'2 days',
        time: '22:27',
},

{
    id: 9,
        src:'https://i.ytimg.com/vi/3ez10ADR_gM/mqdefault.jpg',
        channelName:'Learn Economics',
        description:'Economics',
        views:'150K views',
        days:'2 days',
        time: '22:27',
},
{
    id: 10,
    src:'https://i.ytimg.com/vi/HXV3zeQKqGY/mqdefault.jpg',
    channelName:'freecodecamp',
    description:'SQL Full course',
    views:'115K views',
    days:'2 days',
    time: '22:27',
},

{
    id: 11,
        src:'https://i.ytimg.com/vi/VtLXKU1PpRU/mqdefault.jpg',
        channelName:'CodewithHarry',
        description:'AutoCad Software',
        views:'1K views',
        days:'2 days',
        time: '22:27',
    },

{
    id: 12,
        src:'https://i.ytimg.com/vi/xxpc-HPKN28/mqdefault.jpg',
        channelName:'MATHS',
        description:'Statistics Full Course',
        views:'15K views',
        days:'2 days',
        time: '22:27',
},  
]



 for(let item=0;item<productList.length;item++)
 {
     const{src,channelName,description,views,days}= productList[item]

     const vidDiv= document.createElement('div')
     //carddiv.className = 'list-container'

     vidDiv.innerHTML = `
     <div class="vid-list">
     <a href="video.html">
     <img class="img-class" src="${src}" alt="">
     
     <div class="flex-div">
        <img src="images/Jack.png" alt="" />

     <div class="vid-info">
         <div ><a href=""><Strong>${channelName}</Strong></a></div>
         <p>${description}</p>
             <p><strong>${views} &bull; ${days}</strong></p> 
     </div>
     </div>
     </div>`
 
     list.appendChild(vidDiv)
 }
 
 