const Configs = {
  debugMode: false,
  hasInitialized: false,

  Loading: {
    skip: false
  },

  Initialize: function(){
    if(Configs.hasInitialized)return;

    // Set skip btn click event
    document.getElementById('skip_btn').onclick = function(){
      Configs.Loading.skip = true;
    };

    Configs.hasInitialized = true;
  }
};

Configs.Initialize();
