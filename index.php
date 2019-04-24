<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="Empreendedor, freelancer, apaixonado pela tecnologia e pelo desporto.">
    <meta name="Keywords" content="pablo camara, web designer, programador, freelancer">
    <meta property="og:title" content="Pablo Câmara - Web designer, Programador & freelancer" />
    <meta property="og:description" content="Empreendedor, freelancer, apaixonado pela tecnologia e pelo desporto." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://pablo.camara.pt/img/facebook-c.png" />
    <meta property="og:url"   content="https://www.pablo.camara.pt" />
    <meta property="fb:app_id"   content="344746412825208" />

    <title>Pablo Câmara - Web designer, Programador & freelancer</title>

    <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
    <style type="text/css">
      html,body {
        margin: 0;
        padding: 0;
        background: #00202B;
        font-family: 'Karla', Arial, sans-serif;
      }

      * {
        -webkit-touch-callout: none; /* iOS Safari */
   -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
       -ms-user-select: none; /* Internet Explorer/Edge */
           user-select: none; /* Non-prefixed version, currently
                                 supported by Chrome and Opera */
      }



      #social_media {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-top: 40px;
      }

      #social_media a {
        text-decoration: none;
        margin-right: 10px;
      }

      #pablocamara {
        text-align: center;
        width: 320px;
        height: 190px;
        position: relative;
        margin: auto;
      }

      #pablocamara_title {
        text-align: center;
        color: white;
      }

      #profile_pic {
        width: 100px;
        margin-top: 240px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        border: 2px solid #ffffff;
      }

      .btn {
        background: #00202B;
        color: white;
        border: 1px solid white;
        padding: 10px;
        width: 200px;
        text-align: center;
        margin: auto;
        margin-top: 20px;
        cursor: pointer;
      }

      .btn:hover {
        color: #00202B;
        background: white;
      }



      #navbar {
        height: 45px;
        line-height: 29px;
        width: 100%;
        background-color: #00202b; //white; //rgba(0, 75, 111, 1);
        position: absolute;
        top: -60px;
        color: white;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        z-index: 999;
      }

      #navbar .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 5px 0 5px;
        border-color: white transparent transparent transparent;
        margin: auto;
      }

      .menu {
        width: 320px;
        position: absolute;
        left: 0;
        right: 0;
        top: -400px;
        margin-left: auto;
        margin-right: auto;
        z-index: 888;
      }

      .menu .menu-item {
        background: white;
        margin-bottom: 4px;
        color: #0d4a5f;
        text-transform: none;
        font-size: 15px;
        padding: 10px;
        cursor: pointer;
      }

      .menu .menu-item:hover {
        color: #005373;
        font-weight: bold;
      }

      #skip_intro {
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        color: #254854;
      }

      .color-yellow {
        color: yellow !important;
      }

      #skip_intro:hover { color: yellow; }
    </style>
  </head>
  <body>
    <div id="navbar">
      MENU
      <div class="triangle" id="triangle"></div>
    </div>
    <div class="menu" id="menu">
      <div class="menu-item">Início</div>
      <div class="menu-item">Sobre mim</div>
      <div class="menu-item">Portefólio</div>
      <div class="menu-item">Serviços</div>
      <div class="menu-item">Contactos</div>
    </div>

    <div id="home" class="view">
      <div id="pablocamara"></div>
      <div id="pablocamara_title"></div>
      <div class="btn" id="contact_cta" style="opacity: 0">Entrar em Contacto</div>

      <div id="social_media" style="opacity: 0;">
        <a href="https://www.facebook.com/pablo.camara.pt" target="_blank">
          <img src="img/icons/fb-icon.svg" width="30px" height="30px" />
        </a>
        <a href="https://www.instagram.com/pablo.camara.pt/" target="_blank">
          <img src="img/icons/instagram.svg" width="30px" height="30px" />
        </a>
        <a href="#" target="_blank" style="display: none">
          <img src="img/icons/youtube.svg" width="30px" height="30px" />
        </a>
        <a href="https://www.linkedin.com/in/pablo-camara/" target="_blank">
          <img src="img/icons/linkedin.svg" width="30px" height="30px" />
        </a>
        <a href="skype:pablo.camara96?chat" target="_blank">
          <img src="img/icons/skype.svg" width="30px" height="30px" />
        </a>
        <a href="mailto:pablo@camara.pt" target="_blank">
          <img src="img/icons/email.svg" width="30px" height="30px" />
        </a>
      </div>
      <div id="skip_intro">avançar</div>
    </div>

    <script type="text/javascript" src="js/main.js?v=1.0&d=<?= date('YmdHis') ?>"></script>
    <script type="text/javascript">
      PabloCamaraLoader(function(){
        loadTitle(50, function(){
          setTimeout(function(){
                fadeCTA();
                fadeNav();
                fadeSocial();
                el('skip_intro').style.display = 'none';
          }, window.skip_intro === true ? 0 : 1100);
        });
      });
    </script>
  </body>
</html>
