function el(id){
  return document.getElementById(id);
}

var pablocamara = el('pablocamara');
var pablocamara_title = el('pablocamara_title');
var navbar = el('navbar');
var triangle = el('triangle');
var menu = el('menu');
var menu_container = el('menu-container');

var name_props = [
  // P
  { width: '4px', height: '30px', top: '189px', left: '78px', time: 300},
  { width: '25px', height: '4px', top: '189px', left: '82px', time: 280},
  { width: '4px', height: '15px', top: '193px', left: '103px', time: 260},
  { width: '25px', height: '4px', top: '204px', left: '82px', time: 240},

  // A
  { width: '4px', height: '30px', top: '189px', left: '111px', time: 220},
  { width: '25px', height: '4px', top: '189px', left: '115px', time: 190},
  { width: '4px', height: '30px', top: '189px', left: '137px', time: 170},
  { width: '25px', height: '4px', top: '204px', left: '115px', time: 160},

  // B
  { width: '4px', height: '30px', top: '189px', left: '149px', time: 140},
  { width: '25px', height: '4px', top: '189px', left: '152px', time: 100},
  { width: '25px', height: '4px', top: '202px', left: '151px', time: 100},
  { width: '25px', height: '4px', top: '215px', left: '151px', time: 100},
  { width: '4px', height: '12px', top: '191px', left: '174px', time: 100},
  { width: '4px', height: '12px', top: '205px', left: '174px', time: 80},

  // L
  { width: '4px', height: '30px', top: '189px', left: '186px', time: 75},
  { width: '25px', height: '4px', top: '215px', left: '187px', time: 70},

  // O
  { width: '25px', height: '4px', top: '189px', left: '217px', time: 65},
  { width: '25px', height: '4px', top: '215px', left: '217px', time: 60},
  { width: '4px', height: '27px', top: '189px', left: '217px', time: 55},
  { width: '4px', height: '27px', top: '189px', left: '238px', time: 50},

  // C
  { width: '4px', height: '30px', top: '229px', left: '55px', time: 0},
  { width: '25px', height: '4px', top: '229px', left: '59px', time: 0},
  { width: '25px', height: '4px', top: '255px', left: '59px', time: 250},

  // A
  { width: '4px', height: '30px', top: '229px', left: '88px', time: 0},
  { width: '25px', height: '4px', top: '229px', left: '92px', time: 0},
  { width: '4px', height: '30px', top: '229px', left: '114px', time: 0},
  { width: '25px', height: '4px', top: '244px', left: '92px', time: 250},

  // M
  { width: '4px', height: '30px', top: '229px', left: '126px', time: 0},
  { width: '4px', height: '4px', top: '229px', left: '130px', time: 100},
  { width: '4px', height: '4px', top: '233px', left: '134px', time: 100},
  { width: '4px', height: '4px', top: '237px', left: '138px', time: 100},
  { width: '4px', height: '4px', top: '233px', left: '142px', time: 100},
  { width: '4px', height: '4px', top: '229px', left: '146px', time: 100},
  { width: '4px', height: '30px', top: '229px', left: '150px', time: 0},

  // A
  { width: '4px', height: '30px', top: '229px', left: '162px', time: 100},
  { width: '25px', height: '4px', top: '229px', left: '166px', time: 100},
  { width: '4px', height: '30px', top: '229px', left: '188px', time: 100},
  { width: '25px', height: '4px', top: '244px', left: '166px', time: 250},

  // R
  { width: '4px', height: '30px', top: '229px', left: '200px', time: 0},
  { width: '25px', height: '4px', top: '229px', left: '204px', time: 0},
  { width: '4px', height: '15px', top: '233px', left: '225px', time: 0},
  { width: '25px', height: '4px', top: '244px', left: '204px', time: 0},
  { width: '4px', height: '4px', top: '248px', left: '216px', time: 100},
  { width: '4px', height: '4px', top: '252px', left: '220px', time: 100},
  { width: '4px', height: '4px', top: '256px', left: '224px', time: 100},

  // A
  { width: '4px', height: '30px', top: '229px', left: '236px', time: 0},
  { width: '25px', height: '4px', top: '229px', left: '240px', time: 0},
  { width: '4px', height: '30px', top: '229px', left: '262px', time: 0},
  { width: '25px', height: '4px', top: '244px', left: '240px', time: 0},

  // ^
  { width: '4px', height: '4px', top: '223px', left: '93px', time: 100},
  { width: '4px', height: '4px', top: '220px', left: '97px', time: 100},
  { width: '4px', height: '4px', top: '217px', left: '101px', time: 100},
  { width: '4px', height: '4px', top: '220px', left: '105px', time: 100},
  { width: '4px', height: '4px', top: '223px', left: '108px', time: 100},
];


function PabloCamaraLoader(callback){
  if(name_props.length === 0){
    callback();
    return;
  }

  var letter_piece_props = name_props.shift();
  var letter_piece_element = document.createElement('div');

  for (var prop in letter_piece_props) {

    if(prop === 'top'){
      var top = letter_piece_props[prop].replace('px','');
      top -= 100;
      top = top + 'px';
      letter_piece_element.style.top = top;
    } else {
      letter_piece_element.style[prop] = letter_piece_props[prop];
    }

  }

  letter_piece_element.style.backgroundColor = 'white';
  letter_piece_element.style.position = 'absolute';

  pablocamara.appendChild(letter_piece_element);
  setTimeout(function(){ PabloCamaraLoader(callback); }, letter_piece_props.time);
}


var title = 'Web designer, Programador & freelancer'.split('');
function loadTitle(interval, callback){
  if(title.length === 0){
    callback();
    return;
  }
  pablocamara_title.innerHTML += title.shift();

  setTimeout(function(){ loadTitle(interval, callback); }, interval);

}


// Background fade into white
var colors = [];
for(var i = 1; i > 0; i -= 0.1){
	colors.push(i);
}

function fadeBg(interval, callback){
  if(colors.length === 0){
    callback();
    return;
  }
  i = colors.shift();
  var bgColor =  'rgba(0, 32, 43, ' + i + ')';
  document.body.style.backgroundColor = bgColor;
  document.documentElement.style.backgroundColor = bgColor;
	setTimeout(function(){ fadeBg(interval, callback); }, interval);
}


function invertColors(callback){
  var pieces = pablocamara.children;
  color = 'rgba(0, 32, 43, 1)';
  for(var i = 0; i < pieces.length; i++) {
      pieces[i].style.backgroundColor = color;
  }
  pablocamara_title.style.color = color;

  callback();
}


function fadeNav(){
    navbar.style.top = (navbar.offsetTop+1) + 'px';
    if(navbar.offsetTop < 0){
      setTimeout(function(){
        fadeNav();
      },10);
    }
}


function fadeSocial(){
    var social_media = el('social_media');
    social_media.style.opacity = parseFloat(social_media.style.opacity) + 0.05;
    if(parseFloat(social_media.style.opacity) < 1){
      setTimeout(function(){
        fadeSocial();
      },30);
    }
}


function fadeCTA(){
    var cta = el('contact_cta');
    cta.style.opacity = parseFloat(cta.style.opacity) + 0.05;
    if(parseFloat(cta.style.opacity) < 1){
      setTimeout(function(){
        fadeCTA();
      },30);
    }
}


function prepareContentForMenu(){
  if(!pablocamara.style.marginTop)pablocamara.style.marginTop = '1px';
  else pablocamara.style.marginTop = (parseInt(pablocamara.style.marginTop) + 1) + 'px';
  if(parseInt(pablocamara.style.marginTop) < 190){
    setTimeout(function(){
      prepareContentForMenu();
    },1);
  }
}

function normalizeContent(){
  pablocamara.style.marginTop = (parseInt(pablocamara.style.marginTop) - 1) + 'px';
  if(parseInt(pablocamara.style.marginTop) > 0){
    setTimeout(function(){
      normalizeContent();
    },1);
  }
}


var menu_open = false;
var menu_loading = false;

function showMenu(){
  menu_loading = true;
  menu.style.top = (menu.offsetTop+1) + 'px';
  if(menu.offsetTop < navbar.offsetHeight){
    setTimeout(function(){
      showMenu();
    },1);
  } else {
    menu_loading = false;
  }
}


function hideMenu(){
  menu_loading = true;
  menu.style.top = (menu.offsetTop-1) + 'px';
  if(menu.offsetTop > -menu.offsetHeight){
    setTimeout(function(){
      hideMenu();
    },1);
  } else {
    menu_loading = false;
  }
}




el('navbar').onclick = function(){
  if(menu_loading)return;
  
  if(!menu_open){
    triangle.style.borderWidth = '0px 5px 10px 5px';
    triangle.style.borderColor = 'transparent transparent white transparent';
    prepareContentForMenu();
    showMenu();
  } else {
    triangle.style.borderWidth = '10px 5px 0 5px';
    triangle.style.borderColor = 'white transparent transparent transparent';
    normalizeContent();
    hideMenu();
  }
  menu_open = !menu_open;
};


document.addEventListener("DOMContentLoaded", function(){
    var menu_height = (menu.offsetHeight) + 'px';
    menu.style.top = '-' + menu_height;
    //menu_container.style.height =  menu_height;
});
