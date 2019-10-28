const PabloCamara = {
  Views: {
    HomePage: {
      initialize: function(skip){
        // Skip button to fast forward animations:
        Configs.Loading.skip = skip;
        El.show('skip_btn');

        // Initialize home page contact form / cta
		PabloCamara.Components.ContactForm.initialize();
		// Hides the Home container, social media, and contact form:
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
		PabloCamara.Views.Services.hide();
		
        // HomePage intended to use dark theme
		El.removeClass('mainbody','white-theme');
		
      },
      show: function(skip,callback){
        // Sets up HomePage for the intro/animaitons:
        PabloCamara.Views.HomePage.initialize(skip);
        // Writes the Intro Text with an animation effect:
        PabloCamara.Components.IntroText.start(
          'Técnico de Gestão e Programação de Sistemas Informáticos, Empreendedor, Freelancer',55, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
              El.show('home'); // displays the Container
              // Then we fade in the CTA,
              El.fadeIn('contact_cta',50,function(){
                // And then the Social Media
                El.fadeIn('social_media',50,function(){
                  // And only then we Initialize the navbar, only animates once
                  // TODO: Enable navbar after we create other pages then the Home page
                  PabloCamara.Components.Navbar.initialize(10,function(){
                      // Hides the Skip button
                      El.hide('skip_btn');
                      // and calls the callback in case its passed as a function
                      if(typeof callback === "function")callback();
                  });
                });
              });
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
		  El.hide(PabloCamara.Components.ContactForm.getCta.id());
		  PabloCamara.Components.ContactForm.hide();
		  El.hide('social_media');
		  El.hide('home');
		  
	  }
    },
	ClientArea: {
      initialize: function(skip){
        // Skip button to fast forward animations:
        Configs.Loading.skip = skip;
        El.show('skip_btn');

        // Hides the Home View, Client area, social media, and contact form:
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
		PabloCamara.Views.Services.hide();
		
		// Client are uses the white theme
		El.addClass('mainbody','white-theme');
      },
      show: function(skip,callback){
        // Sets up ClientArea for the intro/animations:
        PabloCamara.Views.ClientArea.initialize(skip);
        // Writes the Intro Text with an animation effect:
        PabloCamara.Components.IntroText.start(
          'Área de Clientes',50, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
			
              El.show('client_area'); // displays the Container
			  PabloCamara.Components.LoginForm.show();
			  
			  //Initialize the navbar, only animates once
			  // TODO: Enable navbar after we create other pages then the Home page
			  PabloCamara.Components.Navbar.initialize(10,function(){
				  // Hides the Skip button
				  El.hide('skip_btn');
				  // and calls the callback in case its passed as a function
				  if(typeof callback === "function")callback();
			  });
			  
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
		// Hides de Client Area
		PabloCamara.Components.LoginForm.hide();
		El.hide('client_area');
	  }
    },
	Services: {
      initialize: function(skip){
        // Skip button to fast forward animations:
        Configs.Loading.skip = skip;
        El.show('skip_btn');

        // Hides the Home View, Client area, services, social media, and contact form:
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
        PabloCamara.Views.Services.hide();
        El.hide('social_media');
        PabloCamara.Components.ContactForm.hide();
		El.removeClass('mainbody','white-theme');
		
      },
      show: function(skip,callback){
        // Sets up ClientArea for the intro/animations:
        PabloCamara.Views.Services.initialize(skip);
        // Writes the Intro Text with an animation effect:
        PabloCamara.Components.IntroText.start(
          'Serviços atualmente disponíveis:',100, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
			  
			  
              
			  
			  const servicesContainer = El.getById('services');
			  const servicesItems = servicesContainer.getElementsByClassName('service-item');
			  
			  var fadeAfter = function(i){
				  setTimeout(function(){
					  El.fadeIn(servicesItems.item(i),50);
				  },(i+1)*500);
			  };
			  
			  for(var i = 0; i < servicesItems.length; i++){
				  servicesItems.item(i).style.display = 'none';
				  fadeAfter(i);
			  }
			
			  El.show('services');
			  
			  //Initialize the navbar, only animates once
			  // TODO: Enable navbar after we create other pages then the Home page
			  PabloCamara.Components.Navbar.initialize(10,function(){
				  // Hides the Skip button
				  El.hide('skip_btn');
				  // and calls the callback in case its passed as a function
				  if(typeof callback === "function")callback();
			  });
			  
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
		// Hides the Services
		El.hide('services');
	  }
    },
  },
  Components: {
    NameLoader: {
      getContainer: {
        id: function(){
          return 'pablocamara'; // html Container ID for the letter pieces that will be loading for the name
        },
        el: function(){
          return El.getById(PabloCamara.Components.NameLoader.getContainer.id());
        },
        reset: function(){
          const el = PabloCamara.Components.NameLoader.getContainer.el();
          el.style.position = 'relative';
          el.innerHTML = '';
        }
      },
      Letters: {
        List: {
          A: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 130},
              { width: '22px', height: '4px', top: y + 'px', left: (x + 4) + 'px', time: 110},
              { width: '4px', height: '30px', top: y + 'px', left: (x + 22) + 'px', time: 90},
              { width: '22px', height: '4px', top: (y + 15) + 'px', left: (x + 4) + 'px', time: 70}
            ]
          },
          B: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 70},
              { width: '22px', height: '4px', top: y + 'px', left: (x + 2) + 'px', time: 70},
              { width: '22px', height: '4px', top: (y + 13) + 'px', left: (x + 2) + 'px', time: 60},
              { width: '22px', height: '4px', top: (y + 26) + 'px', left: (x + 2) + 'px', time: 50},
              { width: '4px', height: '12px', top: (y + 2) + 'px', left: (x + 23) + 'px', time: 40},
              { width: '4px', height: '12px', top: (y + 16) + 'px', left: (x + 23) + 'px', time: 30}
            ]
          },
          C: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 60},
              { width: '25px', height: '4px', top: y + 'px', left: (x + 4) + 'px', time: 80},
              { width: '25px', height: '4px', top: (y + 26) + 'px', left: (x + 4) + 'px', time: 100}
            ];
          },
          L: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 140},
              { width: '25px', height: '4px', top: (y + 26) + 'px', left: (x + 1) + 'px', time: 100}
            ];
          },
          M: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 60},
              { width: '4px', height: '4px', top: y + 'px', left: (x + 4) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y + 4) + 'px', left: (x + 8) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y + 8) + 'px', left: (x + 12) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y + 4) + 'px', left: (x + 16) + 'px', time: 60},
              { width: '4px', height: '4px', top: y + 'px', left: (x + 20) + 'px', time: 60},
              { width: '4px', height: '30px', top: y + 'px', left: (x + 24) + 'px', time: 60}
            ];
          },
          O: function(x,y){
            return [
              { width: '25px', height: '4px', top: y + 'px', left: x + 'px', time: 60},
              { width: '25px', height: '4px', top: (y + 26) + 'px', left: x + 'px', time: 50},
              { width: '4px', height: '27px', top: y + 'px', left: x + 'px', time: 45},
              { width: '4px', height: '27px', top: y + 'px', left: (x + 21) + 'px', time: 25}
            ];
          },
          P: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 210},
              { width: '25px', height: '4px', top: y + 'px', left: (x + 4) + 'px', time: 190},
              { width: '4px', height: '15px', top: (y + 4) + 'px', left: (x + 25) + 'px', time: 170},
              { width: '25px', height: '4px', top: (y + 15) + 'px', left: (x + 4) + 'px', time: 150}
            ];
          },
          R: function(x,y){
            return [
              { width: '4px', height: '30px', top: y + 'px', left: x + 'px', time: 0},
              { width: '25px', height: '4px', top: y + 'px', left: (x + 4) + 'px', time: 0},
              { width: '4px', height: '15px', top: (y + 4) + 'px', left: (x + 25) + 'px', time: 0},
              { width: '25px', height: '4px', top: (y + 15) + 'px', left: (x + 4) + 'px', time: 0},
              { width: '4px', height: '4px', top: (y + 19) + 'px', left: (x + 16) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y + 23) + 'px', left: (x + 20) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y + 27) + 'px', left: (x + 24) + 'px', time: 60}
            ];
          },
          Hat: function(x,y){
            return [
              { width: '4px', height: '4px', top: y + 'px', left: x + 'px', time: 60},
              { width: '4px', height: '4px', top: (y - 3) + 'px', left: (x + 4) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y - 6) + 'px', left: (x + 8) + 'px', time: 60},
              { width: '4px', height: '4px', top: (y - 3) + 'px', left: (x + 12) + 'px', time: 60},
              { width: '4px', height: '4px', top: y + 'px', left: (x + 15) + 'px', time: 60}
            ];
          },
        },
		load: function(config,callback){
          if (typeof PabloCamara.Components.NameLoader._lettersConfigsToLoad === 'undefined') {
            PabloCamara.Components.NameLoader._lettersConfigsToLoad = config;
            PabloCamara.Components.NameLoader.getContainer.reset();
          }
          if(PabloCamara.Components.NameLoader._lettersConfigsToLoad.length === 0){
            delete PabloCamara.Components.NameLoader._lettersConfigsToLoad;
            if(typeof callback === "function")callback();
            return;
          }
          const nextLetterPiece = PabloCamara.Components.NameLoader._lettersConfigsToLoad.shift();
          const nextLetterPiece_element = document.createElement('div');
          for (var property in nextLetterPiece) {
              nextLetterPiece_element.style[property] = nextLetterPiece[property];
          }
          nextLetterPiece_element.style.position = 'absolute';
          PabloCamara.Components.NameLoader.getContainer.el().appendChild(nextLetterPiece_element);
          setTimeout(function(){ PabloCamara.Components.NameLoader.Letters.load(config,callback); }, Configs.Loading.skip === true ? 0 : nextLetterPiece.time); 
        }
      },
      getNameConfigurations: function(){
        const Letters = PabloCamara.Components.NameLoader.Letters.List;
        var name = [];
        name = name.concat(Letters.P(78,89));
        name = name.concat(Letters.A(116,89));
        name = name.concat(Letters.B(149,89));
        name = name.concat(Letters.L(184,89));
        name = name.concat(Letters.O(217,89));

        name = name.concat(Letters.C(55,129));
        name = name.concat(Letters.A(92,129));
        name = name.concat(Letters.M(128,129));
        name = name.concat(Letters.A(164,129));
        name = name.concat(Letters.R(198,129));
        name = name.concat(Letters.A(236,129));

        name = name.concat(Letters.Hat(96,123));

        return name;
      },
      start: function(callback){
        PabloCamara.Components.NameLoader.Letters.load(
          PabloCamara.Components.NameLoader.getNameConfigurations(),
          function(){
            if(typeof callback === "function"){
              callback();
            }
        });
      }
    },
    IntroText: {
      getElId: function(){
        return 'view_intro_text';
      },
      getEl: function(){
        return El.getById(PabloCamara.Components.IntroText.getElId());
      },
      load: function(text,interval,callback){
        if (typeof PabloCamara.Components.IntroText._lettersToLoad === 'undefined') {
          PabloCamara.Components.IntroText.getEl().innerHTML = '';
          PabloCamara.Components.IntroText._lettersToLoad = text.split('');
        }

        if(PabloCamara.Components.IntroText._lettersToLoad.length === 0){
          delete PabloCamara.Components.IntroText._lettersToLoad;
          if(typeof callback === "function")callback();
          return;
        }

        PabloCamara.Components.IntroText.getEl().innerHTML += PabloCamara.Components.IntroText._lettersToLoad.shift();
        setTimeout(function(){ PabloCamara.Components.IntroText.load(text,interval,callback); }, Configs.Loading.skip === true ? 0 : interval);
      },
      start: function(intro_text,interval,callback){
        PabloCamara.Components.IntroText.load(intro_text,interval,function(){
          if(typeof callback === "function")callback();
        });
      },
    },
    Navbar: {
      hasInitialized: false,
      getElId: function(){
        return 'navbar';
      },
      getEl: function(){
        return El.getById(PabloCamara.Components.Navbar.getElId());
      },
      Menu: {
        hasInitialized: false,
        isOpen: false,
        isLoading: false,
        getElId: function(){
            return 'menu';
        },
        getEl: function(){
          return El.getById(PabloCamara.Components.Navbar.Menu.getElId());
        },
        getTriangle: {
          isReversed: false,
          el_id: function(){
            return 'menu-triangle';
          },
          el: function(){
            return El.getById(PabloCamara.Components.Navbar.Menu.getTriangle.el_id());
          },
          toggle: function(){
            const el = PabloCamara.Components.Navbar.Menu.getTriangle.el();
            const el_id = PabloCamara.Components.Navbar.Menu.getTriangle.el_id();
            const isReversed = PabloCamara.Components.Navbar.Menu.getTriangle.isReversed;
            // switches the triangle upside down and back
            if(isReversed){
			  El.removeClass(el_id,'reversed');
            } else {
			  El.addClass(el_id,'reversed');
            }
            PabloCamara.Components.Navbar.Menu.getTriangle.isReversed = !isReversed;
          }
        },
		resetActiveMenuItems: function(){
		  const items = PabloCamara.Components.Navbar.Menu.getEl().getElementsByClassName('menu-item');
          for(var i = 0; i < items.length; i++) {
              const item = items[i];
			  if (item.classList) {
				item.classList.remove('active');
			  }
		  }
		},
        initialize: function(){
          // Initializes only once
          if(PabloCamara.Components.Navbar.Menu.hasInitialized)return;
          // Sets the Menu Y position equals to 0 minus the Menu height
          const menuEl = PabloCamara.Components.Navbar.Menu.getEl();
          if(menuEl.style.top === ""){
            menuEl.style.top = (-menuEl.offsetHeight) + 'px';
          }

          // Sets up, the Menu items events
          const menuItems = menuEl.getElementsByClassName('menu-item');
          for(var i = 0; i < menuItems.length; i++) {
              const menuItem = menuItems[i];

              // ON Click: Hides the Menu and Shows the View the user clicked on
              menuItem.onclick = function(e){
                if(PabloCamara.Components.Navbar.Menu.isLoading)return false;
                // If the menu is open, we toggle it off
                if(PabloCamara.Components.Navbar.Menu.isOpen){
                  PabloCamara.Components.Navbar.Menu.toggle();
                }
                // Shows the View page the user clicked on (but only if it exists)
                const viewName = e.target.getAttribute('data-view');
                if(viewName && PabloCamara.Views.hasOwnProperty(viewName))
					PabloCamara.Components.Navbar.Menu.resetActiveMenuItems();
					if (menuItem.classList) {
						menuItem.classList.add('active');
				    }
					PabloCamara.Views[viewName].show();
              };
          }

          PabloCamara.Components.Navbar.Menu.hasInitialized = true;
        },
        prepareContentForMe: function(){
          // In this case, we get the Page Header which is my Name laoded, and we slide it down for the menu
          const nameLoaderContainer = PabloCamara.Components.NameLoader.getContainer.el();
          if(!nameLoaderContainer.style.marginTop)nameLoaderContainer.style.marginTop = '1px';
          else nameLoaderContainer.style.marginTop = (parseInt(nameLoaderContainer.style.marginTop) + 4) + 'px';
          if(parseInt(nameLoaderContainer.style.marginTop) < 190){
            setTimeout(function(){
              PabloCamara.Components.Navbar.Menu.prepareContentForMe();
            },1);
          }
        },
        normalizeContentForMe: function(){
          // In this case, we get the Page Header which is my Name laoded, and we slide it back up to its place
		 
          const nameLoaderContainer = PabloCamara.Components.NameLoader.getContainer.el();
		  
		   // Slide effect (slow):
          // nameLoaderContainer.style.marginTop = (parseInt(nameLoaderContainer.style.marginTop) - 2) + 'px';
          // if(parseInt(nameLoaderContainer.style.marginTop) > 0){
            // setTimeout(function(){
              // PabloCamara.Components.Navbar.Menu.normalizeContentForMe();
            // },1);
          // }
		  
		  nameLoaderContainer.style.marginTop = '0px';
		  
        },
        show: function(){

          // Lets the component know the menu is loading.
          PabloCamara.Components.Navbar.Menu.isLoading = true;

          const navbar = PabloCamara.Components.Navbar.getEl();
          const menu = PabloCamara.Components.Navbar.Menu.getEl();

          // sliding the Menu into the screen
          menu.style.top = (menu.offsetTop+3) + 'px';
          if(menu.offsetTop < navbar.offsetHeight){
            setTimeout(function(){ PabloCamara.Components.Navbar.Menu.show(); },1);
          } else {
            // After it is done we tell the component the menu is no longer loading and that it is now open
            PabloCamara.Components.Navbar.Menu.isLoading = false;
            PabloCamara.Components.Navbar.Menu.getTriangle.toggle();
            PabloCamara.Components.Navbar.Menu.isOpen = true;

            // And toggles the navbar text color to yellow
            El.toggleClass(PabloCamara.Components.Navbar.getElId(),'menu-open');
          }

        },
        hide: function(){
          PabloCamara.Components.Navbar.Menu.isLoading = true;
          const menu = PabloCamara.Components.Navbar.Menu.getEl();


          //menu.style.top = (menu.offsetTop-2) + 'px'; //Slow loading
          menu.style.top = -menu.offsetHeight + 'px'; //instant loading
          if(menu.offsetTop > -menu.offsetHeight){
            setTimeout(function(){
              PabloCamara.Components.Navbar.Menu.hide();
            },1);
          } else {
            PabloCamara.Components.Navbar.Menu.isLoading = false;
            PabloCamara.Components.Navbar.Menu.isOpen = false;
            PabloCamara.Components.Navbar.Menu.getTriangle.toggle();
            El.toggleClass(PabloCamara.Components.Navbar.getElId(),'menu-open');
          }
        },
        toggle: function(){
          if(PabloCamara.Components.Navbar.Menu.isOpen){
            PabloCamara.Components.Navbar.Menu.normalizeContentForMe();
            PabloCamara.Components.Navbar.Menu.hide();
          } else {
            Page.scrollToY(0,400);
            PabloCamara.Components.Navbar.Menu.prepareContentForMe();
            PabloCamara.Components.Navbar.Menu.show();
          }
        }
      },
      initialize: function(interval,callback){
        if(PabloCamara.Components.Navbar.hasInitialized){
          if(typeof callback === "function")callback();
          return;
        }

        // Initializes the Navbar Menu
        PabloCamara.Components.Navbar.Menu.initialize();

        const el = PabloCamara.Components.Navbar.getEl();
        el.style.top = (el.offsetTop+1) + 'px';
        if(el.offsetTop < 0){
          setTimeout(function(){ PabloCamara.Components.Navbar.initialize(interval,callback); }, Configs.Loading.skip === true ? 0 : interval);
        } else {
         PabloCamara.Components.Navbar.hasInitialized = true;

         PabloCamara.Components.Navbar.getEl().onclick = function(e){
           if(PabloCamara.Components.Navbar.Menu.isLoading){
             return false;
           }

           PabloCamara.Components.Navbar.Menu.toggle();
         };

         if(typeof callback === "function")callback();
        }
      }
    },
    ContactForm: {
      hasInitialized: false,
      isOpen: false,
      getCta: {
        id: function(){
          return 'contact_cta';
        },
        el: function(){
          return El.getById(PabloCamara.Components.ContactForm.getCta.id());
        }
      },
      getForm: {
        getElId: function(){
          return 'contact_form';
        },
        getEl: function(){
          return El.getById(PabloCamara.Components.ContactForm.getForm.getElId());
        },
      },
      getSendBtn: function(){
        return El.getById('contact_form_send_btn');
      },
      feedback: {
        getElId: function(){
          return 'contact_form_feedback';
        },
        set: function(msg,className){
          const feedbackMsgId = PabloCamara.Components.ContactForm.feedback.getElId();
          const feedbackMsgEl = El.getById(feedbackMsgId);
          feedbackMsgEl.innerHTML = msg;
          feedbackMsgEl.className = "";
          El.addClass(feedbackMsgId,className);
        },
        hide: function(){
          const feedbackMsgId = PabloCamara.Components.ContactForm.feedback.getElId();
          const feedbackMsgEl = El.getById(feedbackMsgId);
          feedbackMsgEl.innerHTML = '';
          feedbackMsgEl.className = '';
          El.hide(feedbackMsgId);
        },
        show: function(){
          const feedbackMsgId = PabloCamara.Components.ContactForm.feedback.getElId();
          El.show(feedbackMsgId);
        },
      },
      fields: {
        name: {
          getElId: function(){
            return 'contact_form_name';
          },
          getEl: function(){
            return El.getById(PabloCamara.Components.ContactForm.fields.name.getElId());
          },
          isValid: function(){
            const name = PabloCamara.Components.ContactForm.fields.name.getEl();
            const names = name.value.split(' ');
            var name_count = 0;
            for(var i = 0; i < names.length; i++){
              if(names[i].trim().length >= 2)name_count++;
            }

            if(name.value.length > 65){
              PabloCamara.Components.ContactForm.fields.name.lastError = 'Prêencha o seu nome correctamente (nome muito grande)';
              return false;
            }

            if(name_count < 2){
              PabloCamara.Components.ContactForm.fields.name.lastError = 'Prêencha o seu nome correctamente';
              return false;
            }

            return true;
          }
        },
        phone: {
          getElId: function(){
            return 'contact_form_phone';
          },
          getEl: function(){
            return El.getById(PabloCamara.Components.ContactForm.fields.phone.getElId());
          },
          isValid: function(){
            const phone = PabloCamara.Components.ContactForm.fields.phone.getEl();
            if(phone.value.length < 9 || phone.value.length > 16 || !Validator.isNumeric(phone.value)){
              PabloCamara.Components.ContactForm.fields.phone.lastError = 'Prêencha o telefone correctamente (sem espaços, apenas numeros)';
              return false;
            }
            return true;
          }
        },
        email: {
          getElId: function(){
            return 'contact_form_email';
          },
          getEl: function(){
            return El.getById(PabloCamara.Components.ContactForm.fields.email.getElId());
          },
          isValid: function(){
            const email = PabloCamara.Components.ContactForm.fields.email.getEl();
            if(!Validator.validateEmail(email.value)){
              PabloCamara.Components.ContactForm.fields.email.lastError = 'Prêencha o email correctamente';
              return false;
            }
            return true;
          }
        },
        subject: {
          getElId: function(){
            return 'contact_form_subject';
          },
          getEl: function(){
            return El.getById(PabloCamara.Components.ContactForm.fields.subject.getElId());
          },
          isValid: function(){
            const subject = PabloCamara.Components.ContactForm.fields.subject.getEl();
            if(subject.value.length <= 10){
              PabloCamara.Components.ContactForm.fields.subject.lastError = 'Por favor desenvolva melhor o assunto, obrigado';
              return false;
            }

            if(subject.value.length > 255){
              PabloCamara.Components.ContactForm.fields.subject.lastError = 'Assunto muito grande, desenvolva antes a sua mensagem e diminua o tamanho do assunto, obrigado';
              return false;
            }

            return true;
          }
        },
        msg: {
          getElId: function(){
            return 'contact_form_msg';
          },
          getEl: function(){
            return El.getById(PabloCamara.Components.ContactForm.fields.msg.getElId())
          },
          isValid: function(){
            const msg = PabloCamara.Components.ContactForm.fields.msg.getEl()
            if(msg.value.length <= 10){
              PabloCamara.Components.ContactForm.fields.msg.lastError = 'Por favor desenvolva melhor a sua mensagem, obrigado';
              return false;
            }
            return true;
          }
        },
      },
      hideFields: function(){
        const fields = PabloCamara.Components.ContactForm.fields;
        for (var field in fields) {
          fields[field].getEl().value = '';
          fields[field].getEl().style.display = 'none';
          }

          PabloCamara.Components.ContactForm.getSendBtn().style.display = 'none';
      },
      show: function(){
        El.show(PabloCamara.Components.ContactForm.getForm.getElId());
        Page.scrollToY(PabloCamara.Components.IntroText.getEl().offsetTop - PabloCamara.Components.Navbar.getEl().offsetHeight,500);
        PabloCamara.Components.ContactForm.fields.name.getEl().focus();
        PabloCamara.Components.ContactForm.isOpen = true;

        El.addClass(PabloCamara.Components.ContactForm.getCta.id(),'active');
      },
      hide: function(){
        El.hide(PabloCamara.Components.ContactForm.getForm.getElId());
        PabloCamara.Components.ContactForm.isOpen = false;

        El.removeClass(PabloCamara.Components.ContactForm.getCta.id(),'active');
      },
      toggle: function(){
        if(PabloCamara.Components.ContactForm.isOpen){
          PabloCamara.Components.ContactForm.hide();
        } else {
          PabloCamara.Components.ContactForm.show();
        }
      },
      validateFields: function(){
        const fields = PabloCamara.Components.ContactForm.fields;

        for (var field in fields) {
          if(!fields[field].isValid()){
            PabloCamara.Components.ContactForm.feedback.set(fields[field].lastError,'error_msg');
            PabloCamara.Components.ContactForm.feedback.show();
            return false;
          }
        }

        PabloCamara.Components.ContactForm.feedback.hide();
        return true;
      },
      send: function(){
        if(!PabloCamara.Components.ContactForm.validateFields()){
          return false;
        }

        PabloCamara.Components.ContactForm.feedback.set('A enviar mensagem..','sending_msg');
        PabloCamara.Components.ContactForm.feedback.show();


        const xhr = new XMLHttpRequest();
        xhr.open('PUT', 'msg.php');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);

                if(response.status){
                    PabloCamara.Components.ContactForm.feedback.set(response.message,'success_msg');
                    PabloCamara.Components.ContactForm.hideFields();
                } else {
                    const _error_msg = response.message ? response.message : 'Ups.. não foi possível enviar a mensagem, tente mais tarde ou envie um email directamente, ou entre em contacto pelas redes sociais.';
                    PabloCamara.Components.ContactForm.feedback.set(_error_msg,'error_msg');
                }
            }
        };

        xhr.send(JSON.stringify({
            name: PabloCamara.Components.ContactForm.fields.name.getEl().value,
            phone: PabloCamara.Components.ContactForm.fields.phone.getEl().value,
            email: PabloCamara.Components.ContactForm.fields.email.getEl().value,
            subject: PabloCamara.Components.ContactForm.fields.subject.getEl().value,
            message: PabloCamara.Components.ContactForm.fields.msg.getEl().value
        }));

      },
      initialize: function(){
		  
		El.show(PabloCamara.Components.ContactForm.getCta.id());
		  
        if(PabloCamara.Components.ContactForm.hasInitialized)return;

        PabloCamara.Components.ContactForm.getCta.el().onclick = function(){
          PabloCamara.Components.ContactForm.toggle();
        };

        PabloCamara.Components.ContactForm.getSendBtn().onclick = function(){
          PabloCamara.Components.ContactForm.send();
        };

        PabloCamara.Components.ContactForm.hasInitialized = true;
      }
    },
	LoginForm: {
		isLoggedIn: false,
		hasInitialized: false,
		initialize: function(){
			// Clear feedback data
			PabloCamara.Components.LoginForm.Feedback.hide();
			
			var loginEmail = El.getById('login_email');
			var loginPwd = El.getById('login_pwd');
			
			// Clear text inputs
			loginEmail.value = '';
			loginPwd.value = '';
			
			loginEmail.focus();
			
			if(PabloCamara.Components.LoginForm.hasInitialized === true)return;
			
			// Submit event
			var loginSubmit = El.getById('login_form_submit');
			loginSubmit.onclick = function(){
				
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						var jsonObj = JSON.parse(this.responseText);
						
						if(jsonObj.status == 0){
							loginFeedback.innerHTML = jsonObj.message;
							loginFeedback.style.display = "block";
						} else {
							
							PabloCamara.Components.LoginForm.hide();
							
							// Then show user components:
							
							PabloCamara.Components.AccountBar.show();
							PabloCamara.Components.UserComponents.show();
						}
						
					}
				};
				xhttp.open("POST", "login.php", true);
				xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			
				xhttp.send("email="+loginEmail.value+"&password="+loginPwd.value);
					
			}
			
			PabloCamara.Components.LoginForm.hasInitialized = true;
		},
		show: function(){
			
			PabloCamara.Components.LoginForm.initialize();
			El.show('login_form');
			
		},
		hide: function(){
			PabloCamara.Components.LoginForm.Feedback.hide();
			El.hide('login_form');
		},
		Feedback: {
			getEl: function(){
				return El.getById('login_form_feedback');
			},
			hide: function(){
				var fbEl = PabloCamara.Components.LoginForm.Feedback.getEl();
				fbEl.innerHTML = '';
				fbEl.style.display = "none";
			}
		}
	},
	AccountBar: {
		getEl: {
			id: function(){
				return 'account_bar';
			}
		},
		setUserName: function(uname){
			El.getById('account_bar_user_name').innerText = uname;
		},
		initialize: function(){
			var xhttp = new XMLHttpRequest();
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var jsonObj = JSON.parse(this.responseText);
					
					if(jsonObj.status === 1){
						PabloCamara.Components.AccountBar.setUserName(jsonObj.first_name + ' ' + jsonObj.last_name);
					}
					
				}
			};
			xhttp.open("POST", "udata.php", true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
			xhttp.send("fields=first_name,last_name");
		},
		show: function(){
			El.show(PabloCamara.Components.AccountBar.getEl.id());
		}
	},
	UserComponents: {
		show: function(){
			
		}
	}
	
  },
  showIntro: function(viewName, skip){
    Configs.Loading.skip = skip; // Allow full Intro, unless user clicks the Skip button

    // Loads my Name and then Calls HomePage
    PabloCamara.Components.NameLoader.start(function(){
      PabloCamara.Views[viewName].show(Configs.Loading.skip,null);
    });
  }
};
