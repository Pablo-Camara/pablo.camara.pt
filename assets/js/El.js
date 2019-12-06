// Element Helper class
const El = {
    getById: function(el_id){
      return document.getElementById(el_id);
    },
    show: function(el_id,callback){
      El.getById(el_id).style.display = 'block';

      if(typeof callback === 'function'){
        callback();
      }
    },
    hide: function(el_id){
      El.getById(el_id).style.display = 'none';
    },
    fadeIn: function(el_id, interval, callback){
      var element = typeof el_id === 'string' ? El.getById(el_id) : el_id;

      if(element.style.display === 'none' || element.style.opacity == ''){
        element.style.opacity = '0';
        element.style.display = 'block';
      }

      element.style.opacity = parseFloat(element.style.opacity) + 0.05;
      if(parseFloat(element.style.opacity) < 1){
        setTimeout(function(){
          El.fadeIn(el_id,interval,callback);
        },Configs.Loading.skip === true ? 0 : interval);
      } else {
        if(typeof callback === "function")callback();
      }
    },
    fadeOut: function(el_id, interval, callback){
      var element = typeof el_id === 'string' ? El.getById(el_id) : el_id;

      if(element.style.display === 'none' || element.style.opacity == ''){
        return true;
      }

      element.style.opacity = parseFloat(element.style.opacity) - 0.05;
      if(parseFloat(element.style.opacity) > 0){
        setTimeout(function(){
          El.fadeOut(el_id,interval,callback);
        },Configs.Loading.skip === true ? 0 : interval);
      } else {
        if(typeof callback === "function")callback();
      }
    },
    toggleClass: function(el_id,className) {
      var element = El.getById(el_id);
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
    },
    removeClass: function(el_id,className){
      var element = El.getById(el_id);
      if (element.classList) {
        element.classList.remove(className);
      } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf(className);

        if (i >= 0) {
          classes.splice(i, 1);
          element.className = classes.join(" ");
        }

      }
    },
    addClass: function(el_id,className){
      var element = El.getById(el_id);
      if (element.classList) {
        element.classList.add(className);
      } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf(className);

        if (i < 0) {
          classes.push(className);
          element.className = classes.join(" ");
        }

      }
    }
};
