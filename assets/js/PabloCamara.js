const PabloCamara = {
  Views: {
	  Language: {
      getEl: function(){
        return El.getById('language');
      },
      initialize: function(skip){
        // Skip button to fast forward animations:
        Configs.Loading.skip = skip;
   
		// Hides the Home container, social media, and contact form:
        PabloCamara.Views.Language.hide();
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
        PabloCamara.Views.Services.hide();
        PabloCamara.Components.ChangeLanguage.hide();
		
        // HomePage intended to use dark theme
		El.removeClass('mainbody','white-theme');
		
		const language_cid = 1;
		var setLang = function(lang){
			Stats.select(language_cid,lang);
			Translator.setSessionLang(lang);
		};
		
		El.getById('language-pt').onclick = function(){
			setLang('pt');
		};
		El.getById('language-en').onclick = function(){
			setLang('en');
		};
		
		El.getById('language-es').onclick = function(){
			setLang('es');
		};
		
      },
      show: function(skip,callback){
        // Sets up HomePage for the intro/animaitons:
        PabloCamara.Views.Language.initialize(skip);
        // Writes the Intro Text with an animation effect:
        PabloCamara.Components.IntroText.start(
          PabloCamara.Views.Language.getEl().getAttribute('data-intro-text'),35, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
              El.show('language'); // displays the Container
            
                El.fadeIn('language-pt',50,function(){
					El.fadeIn('language-en',50,function(){
						El.fadeIn('language-es',50,function(){
							  // Hides the Skip button
							  PabloCamara.Components.SkipButton.hide();
							  // and calls the callback in case its passed as a function
							  if(typeof callback === "function")callback();
						
						});
					});                 
                });

               
           
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
		  El.hide('language');
		  El.hide('language-pt');
		  El.hide('language-en');
		  El.hide('language-es');
		  
	  }
    },
    HomePage: {
      getEl: function(){
		return El.getById('home');
	  },
	  initialize: function(skip){
        // Skip button to fast forward animations:
        PabloCamara.Components.SkipButton.show(skip);
        // Initialize home page contact form / cta
		PabloCamara.Components.ContactForm.initialize();
		// Hides the Home container, social media, and contact form:
		PabloCamara.Views.Language.hide();
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
    PabloCamara.Views.Services.hide();
    PabloCamara.Components.ChangeLanguage.hide();
		PabloCamara.Components.ProfilePicture.hide();
        // HomePage intended to use dark theme
		El.removeClass('mainbody','white-theme');
		
      },
      show: function(skip,callback){
        // Sets up HomePage for the intro/animaitons:
        PabloCamara.Views.HomePage.initialize(skip);
         
        // Writes the Intro Text with an animation effect:
		
		  const phrase = PabloCamara.Views.HomePage.getEl().getAttribute('data-intro-text');
		
        PabloCamara.Components.IntroText.start(
          phrase,55, // 50ms each letter
          function(){ // Callback After Intro Text has been written
            
            setTimeout(function(){ // Waits 450ms and then:
             
              El.show('home',function(){
                setTimeout(function(){
                  PabloCamara.Components.ProfilePicture.show();
                }, Configs.Loading.skip === true ? 0 : 450);
              }); // displays the Container
              // Then we fade in the CTA,
			        PabloCamara.Components.ContactForm.getCta.show();
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
		  El.hide(PabloCamara.Components.ContactForm.getCta.id());
		  PabloCamara.Components.ContactForm.hide();
      PabloCamara.Components.SocialMedia.hide();
      PabloCamara.Components.ProfilePicture.hide();
		  El.hide('home');
		  
	  }
    },
	  ClientArea: {
      getEl: function(){
        return El.getById('client_area');
      },
      initialize: function(skip){
        // Skip button to fast forward animations:
        PabloCamara.Components.SkipButton.show(skip);

        // Hides the Home View, Client area, social media, and contact form:
		PabloCamara.Views.Language.hide();
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
		PabloCamara.Views.Services.hide();
		PabloCamara.Components.ChangeLanguage.hide();
		// Client are uses the white theme
		El.addClass('mainbody','white-theme');
		
		
		El.addClass(PabloCamara.Components.IntroText.getElId(),'fs-23');
      },
      show: function(skip,callback){
        // Sets up ClientArea for the intro/animations:
        PabloCamara.Views.ClientArea.initialize(skip);
        // Writes the Intro Text with an animation effect:
		
		const phrase = PabloCamara.Views.ClientArea.getEl().getAttribute('data-intro-text');
		
        PabloCamara.Components.IntroText.start(
          phrase,50, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
			
              El.show('client_area'); // displays the Container
			  PabloCamara.Components.LoginForm.authenticate();
			  
			  //Initialize the navbar, only animates once
			  // TODO: Enable navbar after we create other pages then the Home page
			  PabloCamara.Components.Navbar.initialize(10,function(){
				  // Hides the Skip button
				  PabloCamara.Components.SkipButton.hide();
				  // and calls the callback in case its passed as a function
				  if(typeof callback === "function")callback();
			  });
			  
            },Configs.Loading.skip === true ? 0 : 450);

        });
      },
	  hide: function(){
      // Hides de Client Area
      PabloCamara.Components.LoginForm.hide();
      El.removeClass(PabloCamara.Components.IntroText.getElId(),'fs-23');
      El.hide('client_area');
	  }
    },
	Services: {
	  getEl: function(){
		return El.getById('services');
	  },		  
      initialize: function(skip){
		  // Skip button to fast forward animations:
        PabloCamara.Components.SkipButton.show(skip);
		
        // Hides the Home View, Client area, services, social media, and contact form:
		PabloCamara.Views.Language.hide();
        PabloCamara.Views.HomePage.hide();
        PabloCamara.Views.ClientArea.hide();
        PabloCamara.Views.Services.hide();
        PabloCamara.Components.SocialMedia.hide();
        PabloCamara.Components.ContactForm.hide();
        PabloCamara.Components.ChangeLanguage.hide();

		El.removeClass('mainbody','white-theme');
		
      },
      show: function(skip,callback){
        // Sets up ClientArea for the intro/animations:
        PabloCamara.Views.Services.initialize(skip);
        // Writes the Intro Text with an animation effect:
		
		const phrase = PabloCamara.Views.Services.getEl().getAttribute('data-intro-text');
		
        PabloCamara.Components.IntroText.start(
          phrase,100, // 50ms each letter
          function(){ // Callback After Intro Text has been written

            setTimeout(function(){ // Waits 450ms and then:
			  
			  
              
			  
			  const servicesContainer = El.getById('services');
			  const servicesItems = servicesContainer.getElementsByClassName('service-item');
			  
			  var fadeAfter = function(i,cb){
				  setTimeout(cb(),(i+1)*500);
			  };
			  
			  for(var i = 0; i < servicesItems.length; i++){
				  servicesItems.item(i).style.display = 'none';
				  fadeAfter(i,function() { El.fadeIn(servicesItems.item(i),50); } );
        }
        
        fadeAfter(servicesItems.length,function(){
          PabloCamara.Components.ChangeLanguage.show();
        });
			
			  El.show('services');
			  
			  //Initialize the navbar, only animates once
			  // TODO: Enable navbar after we create other pages then the Home page
			  PabloCamara.Components.Navbar.initialize(10,function(){
				  // Hides the Skip button
				  PabloCamara.Components.SkipButton.hide();
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
    SkipButton: {
      hasInitialized: false,
      init: function(){
        if(PabloCamara.Components.SkipButton.hasInitialized)return;
        
        const skipButton_cid = 2;
        // Set skip btn click event
        El.getById('skip_btn').onclick = function(){
          Configs.Loading.skip = true;
          Stats.click(skipButton_cid,'');
        };
        
        PabloCamara.Components.SkipButton.hasInitialized = true;
      },
      getEl: function(){ 
        return El.getById('skip_btn');
      },
      show: function(skip){
        PabloCamara.Components.SkipButton.init();
        Configs.Loading.skip = skip;
        El.show('skip_btn');
      },
      hide: function(){ El.hide('skip_btn'); },
    },
    NameLoader: {
	    startedOnce: false,
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
		if(PabloCamara.Components.NameLoader.startedOnce === false){
			PabloCamara.Components.NameLoader.getContainer.el().onclick = function(){
				PabloCamara.Components.NameLoader.start(null);
			};
		}  
		
        PabloCamara.Components.NameLoader.Letters.load(
          PabloCamara.Components.NameLoader.getNameConfigurations(),
          function(){
            PabloCamara.Components.NameLoader.startedOnce = true;
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
	  clean: function(){
		  PabloCamara.Components.IntroText.getEl().innerHTML = '';
	  },
      start: function(intro_text,interval,callback){
        PabloCamara.Components.IntroText.load(intro_text,interval,function(){
          if(typeof callback === "function")callback();
        });
      },
    },
    Navbar: {
      hasInitialized: false,
      getId: function(){
        return 3;  
      },
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
		  
	
          const menuItems = menuEl.getElementsByClassName('menu-item');
          
          if(menuEl.style.top === ""){
            menuEl.style.top = (-menuEl.offsetHeight) + 'px';
          }

          // Sets up, the Menu items 
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
				
				Stats.click(PabloCamara.Components.Navbar.getId(),viewName);
				
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

		   Stats.click(PabloCamara.Components.Navbar.getId(),'toggle-menu');
           PabloCamara.Components.Navbar.Menu.toggle();
         };

         if(typeof callback === "function")callback();
        }
      }
    },
    ContactForm: {
      getId: function(){
        return 4;
      },		  
      hasInitialized: false,
      isOpen: false,
      getCta: {
        id: function(){
          return 'contact_cta';
        },
        el: function(){
          return El.getById(PabloCamara.Components.ContactForm.getCta.id());
        },
        show: function(){
          El.fadeIn('contact_cta',50,function(){
          // And then the Social Media
            PabloCamara.Components.SocialMedia.fadeIn(50, function(){
              // And only then we Initialize the navbar, only animates once
              // TODO: Enable navbar after we create other pages then the Home page
              PabloCamara.Components.Navbar.initialize(10,function(){
                PabloCamara.Components.ChangeLanguage.show();
                // Hides the Skip button
                PabloCamara.Components.SkipButton.hide();
                
              });
            });
          });
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
              PabloCamara.Components.ContactForm.fields.name.lastError = name.getAttribute('data-feedback-too-big');
              return false;
            }

            if(name_count < 2){
              PabloCamara.Components.ContactForm.fields.name.lastError = name.getAttribute('data-feedback-invalid');
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
              PabloCamara.Components.ContactForm.fields.phone.lastError = phone.getAttribute('data-feedback-invalid');
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
              PabloCamara.Components.ContactForm.fields.email.lastError = email.getAttribute('data-feedback-invalid');
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
              PabloCamara.Components.ContactForm.fields.subject.lastError = subject.getAttribute('data-feedback-too-small');
              return false;
            }

            if(subject.value.length > 255){
              PabloCamara.Components.ContactForm.fields.subject.lastError = subject.getAttribute('data-feedback-too-big');
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
              PabloCamara.Components.ContactForm.fields.msg.lastError = msg.getAttribute('data-feedback-too-small');
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
        PabloCamara.Components.ContactForm.getCta.el().scrollIntoView(false);
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
        const formEl = PabloCamara.Components.ContactForm.getForm.getEl();

        PabloCamara.Components.ContactForm.feedback.set(formEl.getAttribute('data-sending-msg'),'sending_msg');
        PabloCamara.Components.ContactForm.feedback.show();

        API.request('PUT','php/endpoints/notification/msg.php','application/json',JSON.stringify({
            name: PabloCamara.Components.ContactForm.fields.name.getEl().value,
            phone: PabloCamara.Components.ContactForm.fields.phone.getEl().value,
            email: PabloCamara.Components.ContactForm.fields.email.getEl().value,
            subject: PabloCamara.Components.ContactForm.fields.subject.getEl().value,
            message: PabloCamara.Components.ContactForm.fields.msg.getEl().value
        }),function() {
          if (this.readyState == 4 && this.status == 200) {
              const response = JSON.parse(this.responseText);

              if(response.status){
                  PabloCamara.Components.ContactForm.feedback.set(response.message,'success_msg');
                  PabloCamara.Components.ContactForm.hideFields();
              } else {
                  const _error_msg = response.message ? response.message : PabloCamara.Components.ContactForm.getForm.getEl().getAttribute('data-send-msg-failed');
                  PabloCamara.Components.ContactForm.feedback.set(_error_msg,'error_msg');
              }
          }
        });
      

      },
      initialize: function(){
		  
		El.show(PabloCamara.Components.ContactForm.getCta.id());
		  
        if(PabloCamara.Components.ContactForm.hasInitialized)return;

        PabloCamara.Components.ContactForm.getCta.el().onclick = function(){
		      Stats.click(PabloCamara.Components.ContactForm.getId(),'toggle-form-cta');
          PabloCamara.Components.ContactForm.toggle();
        };

        PabloCamara.Components.ContactForm.getSendBtn().onclick = function(){
		  Stats.click(PabloCamara.Components.ContactForm.getId(),'send-message');
          PabloCamara.Components.ContactForm.send();
        };

        PabloCamara.Components.ContactForm.hasInitialized = true;
      }
    },
    LoginForm: {
      getEl: function(){
        return El.getById('login_form');
      },
      isLoggedIn: false,
      hasInitialized: false,
      authenticate: function(){
        
        if(Configs.debugMode){
          // Shows login form
          PabloCamara.Components.LoginForm.show();
          // Hides user components
          PabloCamara.Components.UserComponents.hide();
          return true;
        }
        
        API.request('POST','php/endpoints/account/login.php',null,'lcheck=true',function() {
          if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            
            if(jsonObj.status === 1 && jsonObj.message == 'already_logged_in'){
              // Hides login form
              PabloCamara.Components.LoginForm.hide();
              
              // Shows user components
              PabloCamara.Components.UserComponents.show();
              
            } else {
              // Shows login form
              PabloCamara.Components.LoginForm.show();
              
              PabloCamara.Components.ChangeLanguage.show();
              
              // Hides user components
              PabloCamara.Components.UserComponents.hide();
              
            }
            
          }
        });
      },
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
          API.request('POST','php/endpoints/account/login.php',null,"email="+loginEmail.value+"&password="+loginPwd.value,function() {
            if (this.readyState == 4 && this.status == 200) {
              var jsonObj = JSON.parse(this.responseText);
              
              if(jsonObj.status == 0){
                PabloCamara.Components.LoginForm.Feedback.showMsg( jsonObj.message );
              } else {
                
                PabloCamara.Components.LoginForm.hide();
                
                // Then show user components:
                PabloCamara.Components.UserComponents.show();
              }
              
            }
          });
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
        },
        showMsg: function(msg){
          var fbEl = PabloCamara.Components.LoginForm.Feedback.getEl();
          fbEl.innerHTML = msg;
          fbEl.style.display = "block";
        }
      }
    },
    AccountBar: {
      hasInitialized: false,
      getEl: {
        id: function(){
          return 'account_bar';
        }
      },
      setUserName: function(uname){
        El.getById('account_bar_user_name').innerText = uname;
      },
      LogOffBtn: {
        hasInitialized: false,
        getEl: function(){
          return El.getById('logout_link');
        },
        show: function(){
        
          const el = PabloCamara.Components.AccountBar.LogOffBtn.getEl();
          El.show(el.id);
          
          if(!PabloCamara.Components.AccountBar.LogOffBtn.hasInitialized){
            el.onclick = function(){
                
              API.request('POST','php/endpoints/account/logout.php',null,null,function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var jsonObj = JSON.parse(this.responseText);
                    
                    if(jsonObj.status === 1){
                      PabloCamara.Components.LoginForm.authenticate();
                    }
                  }
                });
              
            };
            
            PabloCamara.Components.AccountBar.LogOffBtn.hasInitialized = true;
          }
        },
        hide: function(){
          const el = PabloCamara.Components.AccountBar.LogOffBtn.getEl();
          El.hide(el.id);
        }

      },
      initialize: function(){
        if(PabloCamara.Components.AccountBar.hasInitialized === true)return;
        
        API.request('POST','php/endpoints/account/udata.php',null,'fields=first_name,last_name',function() {
          if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            
            if(jsonObj.status === 1){
              PabloCamara.Components.AccountBar.setUserName(jsonObj.user.first_name + ' ' + jsonObj.user.last_name);
              PabloCamara.Components.AccountBar.LogOffBtn.show();
            }
            
          }
        });
        
        PabloCamara.Components.AccountBar.hasInitialized = true;
      },
      show: function(){
        PabloCamara.Components.AccountBar.initialize();
        
        El.show(PabloCamara.Components.AccountBar.getEl.id());
      },
      hide: function() {
        El.hide(PabloCamara.Components.AccountBar.getEl.id());
        PabloCamara.Components.AccountBar.LogOffBtn.hide();
      }
    },
    MyDomains: {
      getContainerId: function(){
        return 'my_domains';
      },
      List: {
        getId: function(){
          return 'my_domains_list';
        },
        getEl: function(){
          var domainListId = PabloCamara.Components.MyDomains.List.getId();
          return El.getById(domainListId);
        },
        load: function(list){
          
          for(var i = 0; i < list.length; i++){
            
            var domainRow = document.createElement("DIV");   
            domainRow.setAttribute( 'id', 'domain_' + list[i].domain_id );
            domainRow.setAttribute( 'class', 'panel-list-item' );
            
            var domainName = document.createElement("DIV");   
            domainName.setAttribute( 'class', 'domain-name mb-8' );
            domainName.innerHTML = list[i].url;
            
            var domainStatus = document.createElement("DIV");   
            domainStatus.setAttribute( 'class', 'h-14' );
            domainStatus.innerHTML = 'status: <b style="color: '+list[i].hexcolor+'">'+list[i].domain_status_text+'</b>';
            
            var domainExpiryDate = document.createElement("DIV");   
            domainExpiryDate.setAttribute( 'class', 'h-14' );
            domainExpiryDate.innerHTML = 'valido até: <b>'+(new Date(list[i].expiration_date)).toLocaleDateString();+'</b>';
            
            domainRow.appendChild(domainName);
            domainRow.appendChild(domainStatus);
            domainRow.appendChild(domainExpiryDate);
            
            PabloCamara.Components.MyDomains.List.getEl().appendChild(domainRow);
          }
          
        },
        clear: function(){
          PabloCamara.Components.MyDomains.List.getEl().innerHTML = '';
        },
        setLoading: function(){
          PabloCamara.Components.MyDomains.List.getEl().innerHTML = '<div class="panel-list-item">A carregar dados..</div>';
        },
        isVisible: false,
        show: function(list){
          El.show(PabloCamara.Components.MyDomains.List.getId());
          PabloCamara.Components.MyDomains.List.isVisible = true;
        },
        hide: function(){
          El.hide(PabloCamara.Components.MyDomains.List.getId());
          PabloCamara.Components.MyDomains.List.isVisible = false;
        },
        toggle: function(){
          if(PabloCamara.Components.MyDomains.List.isVisible){
            PabloCamara.Components.MyDomains.List.hide();
          } else {
            PabloCamara.Components.MyDomains.List.fetch();
            PabloCamara.Components.MyDomains.List.show();
          }
          
        },
        fetch: function(){
          PabloCamara.Components.MyDomains.List.setLoading();
          
          API.request('POST','php/endpoints/domain/domains.php',null,null,function() {
            if (this.readyState == 4 && this.status == 200) {
              var jsonObj = JSON.parse(this.responseText);
              
              if(jsonObj.status === 1){
                PabloCamara.Components.MyDomains.List.clear();
                PabloCamara.Components.MyDomains.List.load(jsonObj.domains);
              }
              
            }
          });
        }
      },
      show: function(){
        var el = El.getById(PabloCamara.Components.MyDomains.getContainerId());
        El.show(el.id);
        
        // on click fetch domains and show the list
        
        el.onclick = function(){
          PabloCamara.Components.MyDomains.List.toggle();
        };
        
      },
      hide: function(){
        
        // hide domain list
        PabloCamara.Components.MyDomains.List.hide();
        
        // hide container
        El.hide(PabloCamara.Components.MyDomains.getContainerId());
      }
      
    },
    SocialMedia: {
      getId: function(){
        return 5;
      },
      getEl: function(){
        return El.getById('social_media');
      },
      hasInit: false,
      init: function(){
        if(PabloCamara.Components.SocialMedia.hasInit)return;
        
        
        El.getById('social_media_github').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'github');
        };
        
        El.getById('social_media_linkedin').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'linkedin');
        };
        
        El.getById('social_media_skype').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'skype');
        };
        
        El.getById('social_media_mailto').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'mailto');
        };

        // --

       /*  El.getById('social_media_facebook').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'facebook');
        }; */
        
        El.getById('social_media_instagram').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'instagram');
        };
        
        El.getById('social_media_youtube_software').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'youtube-software-ch');
        };
        
        El.getById('social_media_youtube_fitness').onclick = function(){
          Stats.click(PabloCamara.Components.SocialMedia.getId(),'youtube-fitness-ch');
        };
        
        PabloCamara.Components.SocialMedia.hasInit = true;
      },
      fadeIn: function(interval,callback){
        PabloCamara.Components.SocialMedia.init();
        
        El.fadeIn('social_media',interval,function(){
          // and calls the callback in case its passed as a function
              if(typeof callback === "function")callback();
        });
      },
      show: function(){
        PabloCamara.Components.SocialMedia.init();
        El.show('social_media');
      },
      hide: function(){
        El.hide('social_media');
      }
    },
    UserComponents: {
      show: function(){
        PabloCamara.Components.AccountBar.show();
        
        //TODO: Fetch from DB user component list and only show these.
        PabloCamara.Components.MyDomains.show();
      },
      hide: function(){
        PabloCamara.Components.AccountBar.hide();
        
        //TODO: hide components that were previously fetched from the database and shown.
        PabloCamara.Components.MyDomains.hide();
        

      }
    },
    ChangeLanguage: {
      getId: function(){
        return 'change_language';
      },
      hasInitialized: false,
      initialize: function(){
        if(!PabloCamara.Components.ChangeLanguage.hasInitialized){
          El.getById(PabloCamara.Components.ChangeLanguage.getId()).onclick = function(){
            PabloCamara.Views.Language.show(true);
          };
          PabloCamara.Components.ChangeLanguage.hasInitialized = true;
        }
      },
      show: function(){
        PabloCamara.Components.ChangeLanguage.initialize();
        if(Translator.getLang())
          El.show(PabloCamara.Components.ChangeLanguage.getId());
      },
      hide: function(){
        El.hide(PabloCamara.Components.ChangeLanguage.getId());
      }
    },
    ProfilePicture: {
      hasInitialized: false,
      getComponentId: function(){
        return 6;
      },
      initialize: function(){
        if(PabloCamara.Components.hasInitialized)return;
        const el_id = PabloCamara.Components.ProfilePicture.getElId();
        const el = El.getById(el_id);
        el.onclick = function(){
          Stats.click(PabloCamara.Components.ProfilePicture.getComponentId(),'profile_picture');
          PabloCamara.Components.SocialMedia.getEl().scrollIntoView(false);
        };
        PabloCamara.Components.ProfilePicture.hasInitialized = true;
      },
      getElId: function(){
        return 'profile_picture';
      },
      getEl: function(){
        const el_id = PabloCamara.Components.ProfilePicture.getElId();
        return El.getById(el_id);
      },
      show: function(){
        PabloCamara.Components.ProfilePicture.initialize();
        const el_id = PabloCamara.Components.ProfilePicture.getElId();
        El.fadeIn(el_id,80);
      },
      hide: function(){
        const el_id = PabloCamara.Components.ProfilePicture.getElId();
        El.hide(el_id);
      }
    }
	
  },
  showIntro: function(viewName, skip, showSkipBtn){
    Configs.Loading.skip = skip; // Allow full Intro, unless user clicks the Skip button
    // Skip button to fast forward animations:
    if(showSkipBtn)
      PabloCamara.Components.SkipButton.show(skip);
    // Loads my Name and then Calls HomePage
    PabloCamara.Components.NameLoader.start(function(){
      PabloCamara.Views[viewName].show(Configs.Loading.skip,null);
    });
  }
};
