//const burger = document.getElementById('sidebarToggle');
//const sidebar = document.getElementById('sidebar');
//const page = document.getElementById('page');
//const body = document.body;

//burger.addEventListener('click', event => {
//    if ( body.classList.contains('show-sidebar') ) {
//        closeSidebar();
//    } else {
//        showSidebar();
//    }
//});

//function showSidebar() {
//    let mask = document.createElement('div');
//    mask.classList.add('page__mask');
//    mask.addEventListener('click', closeSidebar);
//    page.appendChild(mask);

//    body.classList.add('show-sidebar');
//}

//function closeSidebar() {
//    body.classList.remove('show-sidebar');
//    document.querySelector('.page__mask').remove();

//}

/* navToggle */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const page = document.getElementById('page');
const body = document.body;

navToggle.addEventListener('click', event => {
    if ( body.classList.contains('no-scroll') ) {
        closeNav();
    } else {
        showNav();
    }
});

function showNav() {
  let mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeNav);
  page.appendChild(mask);
  body.classList.add('no-scroll');
  nav.classList.add('show');
}

function closeNav() {
    nav.classList.remove('show');
    body.classList.remove('no-scroll');
    document.querySelector('.page__mask').remove();
}


/* Mobile subnav */
//const navItem = document.getElementById("nav__item");
//////subnav = $(".subnav");

//navItem.addEventListener('click', event => {
//    //navItem.classList.add('active');
//    //var _this = this,
//    //nav__item = _this.find('.nav__item');

//    if (navItem.classList.contains('active')) {
//        hideMenus();
//    } else {
//        hideMenus();
//        navItem.classList.add('active');
//        //_this.find('.navItem').addClass("active");
//    }
//    event.stopPropagation();
//});

//nav.addEventListener('click', event => {
//    hideMenus();
//});

//function hideMenus() {
//    navItem.classList.remove('active');
//}

//------------------

const navItems = document.getElementsByClassName("nav__item_submenu");

for (let i = 0; i < navItems.length; i++) {
 navItems[i].addEventListener("click", function() {
     if (navItems[i].classList.contains('active')) {
         hideSubnav();
     } else {
         hideSubnav();
         navItems[i].classList.add('active');
     }
     event.stopPropagation();
 });
}

nav.addEventListener("click", function() {
    hideSubnav();
});

function hideSubnav() {
  for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active');
  }
}

//-------------------

//const navItem = document.getElementsByClassName("nav__item");

//Array.from(navItem).forEach(element => {
//   element.addEventListener("click", (e) => {
//      e.preventDefault();
//      const target = element.parentNode.querySelector(".nav__item");
//      if (!target) {
//         return;
//      }
//      const openMenu = target.parentNode.parentNode.querySelector(".active");
//      if (openMenu && openMenu !== target) {
//        openMenu.classList.remove("active")
//      } else {
//      target.classList.toggle("active");
//      }
//   })
//});

//------------------

//function startUp() {
//    subMenu();
//}

//function subMenu() {
//    var drop = document.getElementsByClassName('nav__item');
//    for(let i=0;i<drop.length;i++){
//        drop[i].addEventListener('click', function(){
//          if(('.nav__link').classList.contains('has-subnav')) {
//            hideMenus();
//          }
//          else {
//            hideMenus();
//            drop[i].classList.add('active');
//          }
//        });
//    };
//}
//window.onload = startUp;

//nav.addEventListener('click', event => {
//    hideMenus();
//});

//function hideMenus() {
//    drop[i].classList.remove('active');
//}

//---------------------------

//function startUp() {
//    subMenu();
//}

//function subMenu() {
//    var drop = document.getElementsByClassName('nav__item');
//    for(let i=0;i<drop.length;i++){
//        drop[i].addEventListener('click', function(){
//          if(drop[i].querySelector('.has-subnav')){
//            hideMenus();
//          }
//          else {
//            hideMenus();
//            drop[i].classList.add('active');
//          }
//        });
//    };
//}
//window.onload = startUp;

//nav.addEventListener('click', event => {
//    hideMenus();
//});

//function hideMenus() {
//    drop[i].classList.remove('active');
//}

//---------------------------

//window.onload = function () {
//    list = document.getElementsByClassName("nav__item");
//    for (var i = 0; i < list.length; i++) {
//      list[i].addEventListener("click", function (e) {
//        if (list.classList.contains('active')) {
//            hideMenus();
//        } else {
//            hideMenus();
//            list.classList.add('active');
//            //_this.find('.navItem').addClass("active");
//        }

//          e.preventDefault();
//      });
//    }
//};

//nav.addEventListener('click', event => {
//    hideMenus();
//});

//function hideMenus() {
//    list.classList.remove('active');
//}

//-----------------------------

//var elements = document.getElementsByClassName("nav__item");

//for (var i=0; i<elements.length; i++) {
//    elements[i].addEventListener("click", function(){});
//};

//------------------------
//navItem.addEventListener('click', event => {

//    if (navItem
//        .querySelectorAll(".has-subnav").length > 0)
//    {
//        navItem.classList.toggle('active');
//    }
//    else
//    {
//    console.log("navItem has no .has-subnav inside");
//    }
//});


//-------------------------------

//var navItem = document.getElementsByClassName("nav__item");
//for (var i = 0; i < navItem.length; i++) {
//    if (navItem[i].className == 'active') {
//        navItem[i].hideMenus();
//    } else {
//        hideMenus();
//        navItem.classList.add('active');
//        //_this.find('.navItem').addClass("active");
//    }
//}

//function hideMenus() {
//    navItem.classList.remove('active');
//}



//const footerItemPrent = $(".footer_top_item"),
//footerItemTitle = $(".footer_title"),
//footerItemDropdown = $(".footer_dropdown");

//footerItemPrent.click(function(e){
//    var _this = $(this),
//    footer_title = _this.find('.footer_title');
//    if (footer_title.hasClass('active')) {
//        hideMenus();
//    } else {
//        hideMenus();
//        _this.find('.footer_title').addClass("active");
//        _this.find('.footer_dropdown').addClass("show");
//    }
//    e.stopPropagation();
//});

//$(document).click(function(){
//    hideMenus();
//});

//function hideMenus() {
//    footerItemDropdown.removeClass("show");
//    footerItemTitle.removeClass("active");
//}

// ----------------------------------------

//navToggle.addEventListener('click', event => {
//    nav.classList.toggle('show');
//    //body.classList.add('no-scroll');
//});

//document.addEventListener('click', function(event) {
//  if(nav.classList.contains('show') && !event.target.isEqualNode(navToggle) && !event.target.isEqualNode(nav) && !nav.contains(event.target)) {
//    nav.classList.remove('show');
//    //body.classList.remove('no-scroll');
//  }
//});

//document.addEventListener('click', function(e) {
//  if(e.target.id !== 'navToggle' && e.target.id !== 'nav') {
//    nav.classList.remove('show');
//    body.classList.remove('no-scroll');
//  }
//});

//navToggle.addEventListener('click', function() {
//    nav.classList.toggle('show');
//    body.classList.toggle('no-scroll');
//});






//hamburger = document.getElementById('hamburger');
//menu = document.getElementById('menu');
//hamburger.addEventListener('click',function(event){
//       menu.classList.toggle('open');
//      });

//document.addEventListener('click', function(event) {
//  if(menu.classList.contains('open') && !event.target.isEqualNode(hamburger) && !event.target.isEqualNode(menu) && !menu.contains(event.target)) {
//      menu.classList.remove('open');
//  }
//});



/* Burger nav */
//const navToggle = document.getElementById('navToggle');
//const nav = document.getElementById('nav');
//const body = document.body;
//const html = document.html;

////const navToggle = $("#navToggle");
////const nav = $("#nav");

//navToggle.addEventListener('click', event => {
////navToggle.click(function(event){

//    //event.stopPropagation(); not required any more
//    nav.classList.add("show");
//    body.classList.add("no-scroll");
//    //$("body").addClass("no-scroll");

//    // add one mousedown event to html
//    html.one('mousedown', function(){
//        nav.classList.remove("show");
//        body.classList.remove("no-scroll");
//        //$("body").removeClass("no-scroll");
//    });
//});

// mousedown must not be triggered inside menu
//nav.bind('mousedown', function(event){
//    event.stopPropagation();
//});

//nav.bind('mousedown', function(event){
//    event.stopPropagation();
//});



////   js code to toggle sidebar
//navToggle.addEventListener("click" , () =>{
//    nav.classList.add("show");
//});

//body.addEventListener("click" , e =>{
//    let clickedElm = e.target;

//    if(!clickedElm.classList.contains("navToggle") && !clickedElm.classList.contains("nav__list")) {
//        nav.classList.remove("show");
//    }
//});