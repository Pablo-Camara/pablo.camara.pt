<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="Técnico de Gestão e Programação de Sistemas Informáticos - Freelancer.">
    <meta name="Keywords" content="pablo camara, web designer, programador, freelancer, técnico informático, técnico de gestão de programação de sistemas informáticos">
    <meta property="og:title" content="Pablo Câmara - Freelancer" />
    <meta property="og:description" content="Técnico de Gestão e Programação de Sistemas Informáticos - Freelancer." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://pablo.camara.pt/img/facebook-cc.png" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />

    <meta property="og:url"   content="https://pablo.camara.pt" />
    <meta property="fb:app_id"   content="344746412825208" />

    <title>Pablo Câmara - Freelancer</title>

    <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
    <link href="css/navbar.css" rel="stylesheet"/>
    <link href="css/main.css" rel="stylesheet"/>
  </head>
  <body>
    <div id="navbar">
      MENU
      <div class="triangle" id="menu-triangle"></div>
    </div>
    <div class="menu" id="menu">
      <div class="menu-item active" data-view="HomePage">Início</div>
    </div>

    <div id="pablocamara"></div>
    <div id="view_intro_text"></div>

    <div id="home" class="view" style="display: none">

      <div class="btn" id="contact_cta">Entrar em Contacto</div>


      <div class="form-box" id="contact_form">
        <input type="text" name="name" placeholder="O seu nome?" id="contact_form_name"/>
        <input type="text" name="phone" placeholder="Telefone" id="contact_form_phone"/>
        <input type="email" name="email" placeholder="Email" id="contact_form_email"/>
        <input type="email" name="subject" placeholder="Assunto" id="contact_form_subject"/>
        <textarea name="message" placeholder="Mensagem" rows="10" id="contact_form_msg"></textarea>
        <div id="contact_form_feedback" class="error_msg" style="display: none"></div>
        <div class="form-button" id="contact_form_send_btn">Enviar mensagem</div>
      </div>


      <div id="social_media">
        <a href="https://www.facebook.com/pablo.camara.5" target="_blank">
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

    </div>



    <div id="skip_btn">avançar</div>

    <script type="text/javascript" src="js/Configs.js?v=1.0&d=2019-05-13 12:22"></script>
    <script type="text/javascript" src="js/Page.js?v=1.0&d=2019-05-13 12:22"></script>
    <script type="text/javascript" src="js/El.js?v=1.0&d=2019-05-13 12:22"></script>
    <script type="text/javascript" src="js/Validator.js?v=1.0&d=2019-05-13 12:22"></script>
    <script type="text/javascript" src="js/PabloCamara.js?v=1.0&d=2019-05-13 13:55"></script>
    <script type="text/javascript">
      PabloCamara.Startup();
    </script>
  </body>
</html>
