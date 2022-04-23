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

