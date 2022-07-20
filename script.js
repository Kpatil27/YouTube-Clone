var menuIcon=document.querySelector(".menu-icon");
var sideBar=document.querySelector(".sidebar");
var container=document.querySelector(".container");


var userIcon=document.querySelector(".user-icon");
var userSetting=document.querySelector(".settings");
var space=document.querySelector(".logo");
var sub=document.querySelector(".subscribed-list");
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
var whiteCreate=document.getElementById("create");
var whiteApp=document.getElementById("apps");
var whiteBell=document.getElementById("notification");
var whiteHome=document.getElementById("home");
var whiteExplore=document.getElementById("explore");
var whiteShorts=document.getElementById("shorts");
var whiteSub=document.getElementById("sub");
var whiteLab=document.getElementById("lab");
var whiteHistory=document.getElementById("history");
var whitePlay=document.getElementById("playList");
var whiteMsg=document.getElementById("msg");
var arrow=document.getElementById("arrow");
var whiteUser=document.getElementById("user");
var whiteDoller=document.getElementById("doller");
var whiteStudio=document.getElementById("sett");
var whiteSwitch=document.getElementById("switch");
var whiteLog=document.getElementById("logout");
var whiteLang=document.getElementById("language");
var whiteLocation=document.getElementById("location");
var whiteSett=document.getElementById("setti");

menuIcon.onclick=function () {
    sideBar.classList.toggle("samll-sidebar");
    container.classList.toggle("large-container");
    sub.classList.toggle("newSub");
    
}


 userIcon.onclick=function () {
    userSetting.classList.toggle("settings-height");
     }


 space.onclick=function () {
     setting.classList.toggle("showSetting");
    }
 

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
 function themeChange(theme)
 {

      if (localStorage.getItem('theme') === 'theme-dark')
      {
          setTheme('theme-light');
          youtubeLogo.src="images/logo.png";
          whiteMenu.src="images/menu.png";
          whiteCreate.src="images/create.jpg";
          whiteApp.src="images/more.png";
          whiteBell.src="images/notification.png";
          whiteHome.src="images/home.png";
          whiteExplore.src="images/explore.png";
          whiteShorts.src="images/short.png";
          whiteSub.src="images/subscript.png";
          whiteLab.src="images/library.png";
          whiteHistory.src="images/history.png";
          whitePlay.src="images/playlist.png";
          whiteMsg.src="images/messages.png";
          arrow.src="images/show-more.png";
          whiteUser.src="images/usernew.png";
          whiteDoller.src="images/doller.png";
          whiteStudio.src="images/setting.png";
          whiteSwitch.src="images/switch.png";
          whiteLog.src="images/signout.png";
          whiteLang.src="images/lang.png";
          whiteLocation.src="images/loc.png";
          whiteSett.src="images/set.png";
      }
      else {
          setTheme('theme-dark');
          youtubeLogo.src="images/youtube.png";
          whiteMenu.src="images/whitemenu.png";
          whiteCreate.src="images/whiteCreate.png";
          whiteApp.src="images/whiteApps.png";
          whiteBell.src="images/whiteNotification.png";
          whiteHome.src="images/whiteHome.png";
          whiteExplore.src="images/whiteExplore.png";
          whiteShorts.src="images/whiteShorts.png";
          whiteSub.src="images/whiteSub.png";
          whiteLab.src="images/whiteLib.png";
          whiteHistory.src="images/whiteHistory.png";
          whitePlay.src="images/whitePlaylist.png";
          whiteMsg.src="images/whiteMsg.png";
          arrow.src="images/whiteArrow.png";
          whiteUser.src="images/whiteUser.png";
          whiteDoller.src="images/whiteDoller.png";
          whiteStudio.src="images/whiteSettings.png";
          whiteSwitch.src="images/whiteSwitch.png";
          whiteLog.src="images/whiteLog.png";
          whiteLang.src="images/whiteLanguage.png";
          whiteLocation.src="images/whiteLoc.png";
          whiteSett.src="images/whiteSettings.png";
      }
 }
 
 (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        youtubeLogo.src="images/youtube.png";
        whiteMenu.src="images/whitemenu.png";
        whiteCreate.src="images/whiteCreate.png";
        whiteApp.src="images/whiteApps.png";
        whiteBell.src="images/whiteNotification.png";
        whiteHome.src="images/whiteHome.png";
        whiteExplore.src="images/whiteExplore.png";
        whiteShorts.src="images/whiteShorts.png";
        whiteSub.src="images/whiteSub.png";
        whiteLab.src="images/whiteLib.png";
        whiteHistory.src="images/whiteHistory.png";
        whitePlay.src="images/whitePlaylist.png";
        whiteMsg.src="images/whiteMsg.png";
        arrow.src="images/whiteArrow.png";
        whiteUser.src="images/whiteUser.png";
        whiteDoller.src="images/whiteDoller.png";
        whiteStudio.src="images/whiteSettings.png";
        whiteSwitch.src="images/whiteSwitch.png";
        whiteLog.src="images/whiteLog.png";
        whiteLang.src="images/whiteLanguage.png";
        whiteLocation.src="images/whiteLoc.png";
        whiteSett.src="images/whiteSettings.png";
    } else {
       setTheme('theme-light');
       youtubeLogo.src="images/logo.png";
       whiteMenu.src="images/menu.png";
       whiteCreate.src="images/create.jpg";
       whiteApp.src="images/more.png";
       whiteBell.src="images/notification.png";
       whiteHome.src="images/home.png";
       whiteExplore.src="images/explore.png";
       whiteShorts.src="images/short.png";
       whiteSub.src="images/subscript.png";
       whiteLab.src="images/library.png";
       whiteHistory.src="images/history.png";
       whitePlay.src="images/playlist.png";
       whiteMsg.src="images/messages.png";
       arrow.src="images/show-more.png";
       whiteUser.src="images/usernew.png";
       whiteDoller.src="images/doller.png";
       whiteStudio.src="images/setting.png";
       whiteSwitch.src="images/switch.png";
       whiteLog.src="images/signout.png";
       whiteLang.src="images/lang.png";
       whiteLocation.src="images/loc.png";
       whiteSett.src="images/set.png";

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
        newSrc:'images/Jack.png',
    },

    {
        id: 2,
        src:'https://i.ytimg.com/vi/KSX4cwWRzis/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AO',
        channelName:'Mr.Bean',
        description:'Cartoon',
        views:'250K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user4.png',
   },

   {
    id: 3,
    src:'https://i.ytimg.com/vi/ZVO8Wt_PCgE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvcGdE55lXCVqX67YYMWuU0FNTKA',
    channelName:'Mr.Shaha',
    description:'How to learn',
    views:'55K views',
    days:'15 days',
    time: '22:27',
    newSrc:'images/user5.png',
   },

   {
    id: 4,
    src:'https://i.ytimg.com/vi/ZxKM3DCV2kE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSSimI3ICqOUAR6VaENfDsqw56nA',
    channelName:'Web Dev',
    description:'WebDevelopment Full Course',
    views:'105K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/user6.png',
},

{
    id: 5,
        src:'https://i.ytimg.com/vi/ToZSFHUJdHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB21pTf32OypIlVAU_qjNpVkaSIpA',
        channelName:'Apna College',
        description:'What is Coding',
        views:'5K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user2.png',
},

{
    id: 6,
        src:'https://i.ytimg.com/vi/1Rs2ND1ryYc/mqdefault.jpg',
        channelName:'freecodecamp',
        description:'CSS Zero to Hero',
        views:'150K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user7.png',
},
{
    id: 7,
    src:'https://i.ytimg.com/vi/t0Q2otsqC4I/mqdefault.jpg',
    channelName:'Tom&Jerry',
    description:'Cartoon Network',
    views:'255K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/Jack.png',
},

{
    id: 8,
        src:'https://i.ytimg.com/vi/cUMUTS2ybhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhzqJ65SZeAWijq8NY84yWgzqG9Q',
        channelName:'Nobita-Sizuka',
        description:'Doremon New Episodes',
        views:'100K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user1.png',
},

{
    id: 9,
        src:'https://i.ytimg.com/vi/3ez10ADR_gM/mqdefault.jpg',
        channelName:'Learn Economics',
        description:'Economics',
        views:'150K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user4.png',
},
{
    id: 10,
    src:'https://i.ytimg.com/vi/HXV3zeQKqGY/mqdefault.jpg',
    channelName:'freecodecamp',
    description:'SQL Full course',
    views:'115K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/user3.png',
},

{
    id: 11,
        src:'https://i.ytimg.com/vi/VtLXKU1PpRU/mqdefault.jpg',
        channelName:'CodewithHarry',
        description:'AutoCad Software',
        views:'1K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user2.png',
    },

{
    id: 12,
        src:'https://i.ytimg.com/vi/xxpc-HPKN28/mqdefault.jpg',
        channelName:'MATHS',
        description:'Statistics Full Course',
        views:'15K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user5.png',
},
{
    id: 13,
        src:'https://i.ytimg.com/vi/cUMUTS2ybhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhzqJ65SZeAWijq8NY84yWgzqG9Q',
        channelName:'Nobita-Sizuka',
        description:'Doremon New Episodes',
        views:'100K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user6.png',
},

{
    id: 14,
        src:'https://i.ytimg.com/vi/3ez10ADR_gM/mqdefault.jpg',
        channelName:'Learn Economics',
        description:'Economics',
        views:'150K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/Jack.png',
},
{
    id: 15,
    src:'https://i.ytimg.com/vi/HXV3zeQKqGY/mqdefault.jpg',
    channelName:'freecodecamp',
    description:'SQL Full course',
    views:'115K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/user1.png',
},

{
    id: 16,
        src:'https://i.ytimg.com/vi/VtLXKU1PpRU/mqdefault.jpg',
        channelName:'CodewithHarry',
        description:'AutoCad Software',
        views:'1K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user2.png',
    },

{
    id: 17,
        src:'https://i.ytimg.com/vi/xxpc-HPKN28/mqdefault.jpg',
        channelName:'MATHS',
        description:'Statistics Full Course',
        views:'15K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user3.png',
},  
{
    id: 18,
    src:'https://i.ytimg.com/vi/KSX4cwWRzis/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AO',
    channelName:'Mr.Bean',
    description:'Cartoon',
    views:'250K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/user7.png',
},

{
id: 19,
src:'https://i.ytimg.com/vi/ZVO8Wt_PCgE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvcGdE55lXCVqX67YYMWuU0FNTKA',
channelName:'Mr.Shaha',
description:'How to learn',
views:'55K views',
days:'15 days',
time: '22:27',
newSrc:'images/user6.png',
},

{
id: 20,
src:'https://i.ytimg.com/vi/ZxKM3DCV2kE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSSimI3ICqOUAR6VaENfDsqw56nA',
channelName:'Web Dev',
description:'WebDevelopment Full Course',
views:'105K views',
days:'2 days',
time: '22:27',
newSrc:'images/user5.png',
},
{
    id: 21,
    src:'https://i.ytimg.com/vi/t0Q2otsqC4I/mqdefault.jpg',
    channelName:'Tom&Jerry',
    description:'Cartoon Network',
    views:'255K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/Jack.png',
},

{
    id: 22,
        src:'https://i.ytimg.com/vi/cUMUTS2ybhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhzqJ65SZeAWijq8NY84yWgzqG9Q',
        channelName:'Nobita-Sizuka',
        description:'Doremon New Episodes',
        views:'100K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user3.png',
},

{
    id: 23,
        src:'https://i.ytimg.com/vi/3ez10ADR_gM/mqdefault.jpg',
        channelName:'Learn Economics',
        description:'Economics',
        views:'150K views',
        days:'2 days',
        time: '22:27',
        newSrc:'images/user2.png',
},
{
    id: 24,
    src:'https://i.ytimg.com/vi/HXV3zeQKqGY/mqdefault.jpg',
    channelName:'freecodecamp',
    description:'SQL Full course',
    views:'115K views',
    days:'2 days',
    time: '22:27',
    newSrc:'images/user1.png',

},

]
console.log(typeof(id));

 for(let item=0;item<productList.length;item++)
 {
     const{src,channelName,description,views,days,newSrc}= productList[item]

     const vidDiv= document.createElement('div')
     //carddiv.className = 'list-container'

     vidDiv.innerHTML = `
    <div class="vid-list">
    <a href="video.html">
    <img class="img-class" src="${src}" alt="">
    <div class="flex-div">
    <img src="${newSrc}" alt="" />
    <div class="vid-info">
    <div ><a href=""><Strong>${channelName}</Strong></a></div>
    <p>${description}</p>
    <p><strong>${views} &bull; ${days}</strong></p> 
    </div>
    </div>
    </div>`
     list.appendChild(vidDiv)
 }
 
 