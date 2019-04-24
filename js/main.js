function el(id){
  return document.getElementById(id);
}

window.menu_open = false;
window.menu_loading = false;

var pablocamara = el('pablocamara');
var special_title_el = el('special_title');
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

function doScrolling(elementY, duration) {
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}

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
  setTimeout(function(){ PabloCamaraLoader(callback); }, window.skip_intro === true ? 0 : letter_piece_props.time);
}

function initTitle(titleStr){
    special_title_el.innerHTML = '';
    window.special_title = titleStr.split('');
}

function loadTitle(interval, callback){
  if(window.special_title.length === 0){
    callback();
    return;
  }
  special_title_el.innerHTML += window.special_title.shift();

  setTimeout(function(){ loadTitle(interval, callback); }, window.skip_intro === true ? 0 : interval);
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
      },window.skip_intro === true ? 0 : 30);
    }
}


function fadeCTA(){
    var cta = el('contact_cta');
    cta.style.opacity = parseFloat(cta.style.opacity) + 0.05;
    if(parseFloat(cta.style.opacity) < 1){
      setTimeout(function(){
        fadeCTA();
      },window.skip_intro === true ? 0 :30);
    }
}


function prepareContentForMenu(){
  if(!pablocamara.style.marginTop)pablocamara.style.marginTop = '1px';
  else pablocamara.style.marginTop = (parseInt(pablocamara.style.marginTop) + 2) + 'px';
  if(parseInt(pablocamara.style.marginTop) < 190){
    setTimeout(function(){
      prepareContentForMenu();
    },1);
  }
}

function normalizeContent(){
  pablocamara.style.marginTop = (parseInt(pablocamara.style.marginTop) - 2) + 'px';
  if(parseInt(pablocamara.style.marginTop) > 0){
    setTimeout(function(){
      normalizeContent();
    },1);
  }
}




function showMenu(){
  doScrolling(0,1000);

  triangle.style.borderWidth = '0px 5px 10px 5px';
  triangle.style.borderColor = 'transparent transparent white transparent';


  window.menu_loading = true;
  menu.style.top = (menu.offsetTop+2) + 'px';
  if(menu.offsetTop < navbar.offsetHeight){
    setTimeout(function(){
      showMenu();
    },1);
  } else {
    window.menu_loading = false;
    window.menu_open = true;
    toggleClass(menu,'color-yellow');
  }
}


function hideMenu(){
  triangle.style.borderWidth = '10px 5px 0 5px';
  triangle.style.borderColor = 'white transparent transparent transparent';
  window.menu_loading = true;
  menu.style.top = (menu.offsetTop-2) + 'px';
  if(menu.offsetTop > -menu.offsetHeight){
    setTimeout(function(){
      hideMenu();
    },1);
  } else {
    window.menu_loading = false;
    window.menu_open = false;
    toggleClass(menu,'color-yellow');
  }
}

function toggleClass(element,className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf(className);

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push(className);
      element.className = classes.join(" ");
  }
}

document.addEventListener("DOMContentLoaded", function(){
    var menu_height = (menu.offsetHeight) + 'px';
    menu.style.top = '-' + menu_height;
    //menu_container.style.height =  menu_height;
});



el('navbar').onclick = function(e){
  if(window.menu_loading)return;

  if(!window.menu_open){
    prepareContentForMenu();
    showMenu();
  } else {
    normalizeContent();
    hideMenu();
  }
};

el('skip_intro').onclick = function(){
  window.skip_intro = true;
};



el('contact_cta').onclick = function(e){
  var form = el('send_msg');


  if(form.style.display === 'block')
    form.style.display = "none";
  else {
    form.style.display = "block";
    doScrolling(special_title_el.offsetTop - navbar.offsetHeight,500);
  }



  var name = el('send_msg_name');
  name.focus();

  toggleClass(e.target,'active');
};


function showMsg(el, msg){
  el.style.display = 'block';
  el.innerHTML = msg;
}

function hideMsg(el){
  el.style.display = 'none';
  el.innerHTML = '';
}

function hideEl(el_id){
  el(el_id).style.display = 'none';
}

function showEl(el_id){
  el(el_id).style.display = "block";
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


el('send_msg_btn').onclick = function(){
  var form = el('send_msg');

  var name = el('send_msg_name');
  var phone = el('send_msg_phone');
  var email = el('send_msg_email');
  var subject = el('send_msg_subject');
  var message = el('send_msg_msg');


  var msg_error = el('send_msg_error');

  // name validations
  var names = name.value.split(' ');
  var name_count = 0;
  for(var i = 0; i < names.length; i++){
    if(names[i].trim().length >= 2)name_count++;
  }

  if(name.value.length > 65){
    showMsg(msg_error,'Prêencha o seu nome correctamente (muito grande)');
    return;
  } else {
    hideMsg(msg_error);
  }

  if(name_count < 2){
    showMsg(msg_error,'Prêencha o seu nome correctamente');
    return;
  } else {
    hideMsg(msg_error);
  }

  // phone validations
  if(phone.value.length < 9 || phone.value.length > 16 || !isNumeric(phone.value)){
    showMsg(msg_error,'Prêencha o telefone correctamente (sem espaços, apenas numeros)');
    return;
  } else {
    hideMsg(msg_error);
  }


  // email validations
  if(!validateEmail(email.value)){
    showMsg(msg_error,'Prêencha o email correctamente');
    return;
  } else {
    hideMsg(msg_error);
  }

  // subject validations
  if(subject.value.length <= 10){
    showMsg(msg_error,'Por favor especifique melhor o assunto, obrigado');
    return;
  } else {
    hideMsg(msg_error);
  }

  if(subject.value.length > 255){
    showMsg(msg_error,'Assunto muito grande, desenvolva antes a sua mensagem e diminua o tamanho do assunto, obrigado');
    return;
  } else {
    hideMsg(msg_error);
  }


  // message validations
  if(message.value.length <= 10){
    showMsg(msg_error,'Por favor desenvolva melhor a sua mensagem, obrigado');
    return;
  } else {
    hideMsg(msg_error);
  }

  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'msg.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
      el('send_msg_sending').style.display = 'none';
      if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);

          if(response.status){
              showMsg(el('send_msg_success'),response.message)
              hideEl('contact_cta');
              hideEl('send_msg_name');
              hideEl('send_msg_phone');
              hideEl('send_msg_email');
              hideEl('send_msg_subject');
              hideEl('send_msg_msg');
              hideEl('send_msg_btn');
          } else {
              showMsg(el('send_msg_error'),response.message ? response.message : 'Ups.. não foi possível enviar a mensagem, tente mais tarde ou envie um email directamente, ou entre em contacto pelas redes sociais.');
          }
      }
  };

  el('send_msg_sending').style.display = 'block';
  xhr.send(JSON.stringify({
      name: name.value,
      phone: phone.value,
      email: email.value,
      subject: subject.value,
      message: message.value
  }));

};

function hideViews(){
  var views = document.getElementsByClassName('view');
  for(var i = 0; i < views.length; i++){
    views[i].style.display = "none";
  }
}

function setActiveMenuItem(target){
  var items = menu.getElementsByClassName('active');
  for(var i = 0; i < items.length; i++){
    toggleClass(items[i],'active');
  }
  toggleClass(target,'active');
}

function menuItemClick(e){
  setActiveMenuItem(e);
  hideViews();
  normalizeContent();
  hideMenu();
  doScrolling(pablocamara.offsetHeight,1200);
}

function show_home_page(e){
  menuItemClick(e);
  initTitle('Web designer, Programador & freelancer');
  window.skip_intro = false;
  el('contact_cta').style.opacity = '0';
  el('social_media').style.opacity = '0';

  el('home').style.display = 'block';
  loadTitle(25, function(){
    setTimeout(function(){
          fadeCTA();
          fadeNav();
          fadeSocial();
          el('skip_intro').style.display = 'none';
    }, 100);
  });
}

function show_about_me(e){
  menuItemClick(e);
  initTitle('Sobre mim:');
  window.skip_intro = false;
  loadTitle(200,function(){

  });
}
