<?php 
	require_once 'php/classes/Translation.php';
	$translationStrings = require 'php/configs/translation/strings.php';
	$lang = Translation::getLanguage();
	$translator = new Translation($translationStrings,$lang);
	$breakCache = false; $curDate = $breakCache ? date('Y-m-d H:i:s') : '2019-12-19 00:46:41'; 
?><!DOCTYPE html>
<html lang="<?= $lang ?>">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="<?= $translator->get('meta_description'); ?>">
    <meta name="Keywords" content="<?= $translator->get('meta_keywords'); ?>">
    <meta property="og:title" content="Pablo Câmara - Freelancer" />
    <meta property="og:description" content="<?= $translator->get('meta_description'); ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://pablo.camara.pt/img/facebook-cc.png" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />

    <meta property="og:url"   content="https://pablo.camara.pt" />
    <meta property="fb:app_id"   content="344746412825208" />

    <title>Pablo Câmara - Freelancer</title>

	
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
    <link href="assets/css/navbar.css?t=<?= $curDate; ?>" rel="stylesheet"/>
    <link href="assets/css/main.css?t=<?= $curDate; ?>" rel="stylesheet"/>
	
	
	<script type="text/javascript" src="assets/js/API.js?v=1.0&d=<?= $curDate; ?>"></script>
	<script type="text/javascript" src="assets/js/Stats.js?v=1.0&d=<?= $curDate; ?>"></script>
	<script type="text/javascript" src="assets/js/Translator.js?v=1.0&d=<?= $curDate; ?>"></script>

	<script type="text/javascript">
		Stats.impression();
		Translator.setLang('<?= $lang ?>');
	</script>
  </head>
  <body id="mainbody">
	<div id="profile-pic-preload" style="url('assets/img/pablocamara.png') no-repeat -9999px -9999px;"></div>
    <div id="navbar">
      MENU
      <div class="triangle" id="menu-triangle"></div>
    </div>
    <div class="menu" id="menu">
      <div class="menu-item active" data-view="HomePage"><?= $translator->get('menu_text_homepage'); ?></div>
      <div class="menu-item" data-view="Services"><?= $translator->get('menu_text_services'); ?></div>
      <div class="menu-item" data-view="ClientArea"><?= $translator->get('menu_text_clientarea'); ?></div>
    </div>

    <div id="pablocamara"></div>
	<div id="view_intro_text"></div>
	<div id="profile_picture" style="display: none; background-image: url('assets/img/pablocamara.png');"></div>
	<div id="language" style="display: none"
		data-intro-text="Escolha o idioma do site | Choose the website's language | Seleccione su idioma"
		>
		<ul style="margin-top: 20px">
			<li id="language-pt" style="background-image: url('assets/img/flag-pt.png');">Português</li> 
			<li id="language-en" style="background-image: url('assets/img/flag-en.png');">English</li> 
			<li id="language-es" style="background-image: url('assets/img/flag-es.png');">Español</li>    
		</ul>
	</div>

    <div id="home" class="view" style="display: none"
		data-intro-text='<?= $translator->get('meta_description'); ?>' >

      <div class="btn" id="contact_cta"><?= $translator->get('contact_cta_text'); ?></div>

	  <div class="form-box" id="contact_form"
		 data-sending-msg="<?= $translator->get('form_sending_text'); ?>"
		 data-send-msg-failed="<?= $translator->get('form_send_msg_failed'); ?>"
	  >
		<input type="text" name="name" placeholder="<?= $translator->get('form_name_placeholder'); ?>" id="contact_form_name" 
			data-feedback-too-big="<?= $translator->get('form_feedback_name_too_big'); ?>"
			data-feedback-invalid="<?= $translator->get('form_feedback_name_invalid'); ?>"
		/>
		<input type="text" name="phone" placeholder="<?= $translator->get('form_phone_placeholder'); ?>" id="contact_form_phone"
			data-feedback-invalid="<?= $translator->get('form_feedback_phone_invalid'); ?>"
		/>
		<input type="email" name="email" placeholder="Email" id="contact_form_email"
			data-feedback-invalid="<?= $translator->get('form_feedback_email_invalid'); ?>"
		/>
		<input type="email" name="subject" placeholder="<?= $translator->get('form_subject_placeholder'); ?>" id="contact_form_subject"
			data-feedback-too-small="<?= $translator->get('form_feedback_subject_too_small'); ?>"
			data-feedback-too-big="<?= $translator->get('form_feedback_subject_too_big'); ?>"
		/>
		<textarea name="message" placeholder="<?= $translator->get('form_message_placeholder'); ?>" rows="10" id="contact_form_msg"
			data-feedback-too-small="<?= $translator->get('form_feedback_message_too_small'); ?>"
		></textarea>
        <div id="contact_form_feedback" class="error_msg" style="display: none"></div>
        <div class="form-button" id="contact_form_send_btn"><?= $translator->get('form_send_msg_btn_text'); ?></div>
      </div>


      <div id="social_media" style="display: none">
       
	  	<a href="https://github.com/Pablo-Camara" target="_blank" id="social_media_github">
          <img src="assets/img/icons/github.svg" width="50px" height="30px" />
        </a>
		
        <a href="https://www.linkedin.com/in/pablo-camara/" target="_blank" id="social_media_linkedin">
          <img src="assets/img/icons/linkedin.svg" width="30px" height="30px" />
        </a>
        <a href="skype:pablo.camara96?chat" target="_blank" id="social_media_skype">
          <img src="assets/img/icons/skype.svg" width="30px" height="30px" />
        </a>
        <a href="mailto:pablo@camara.pt" target="_blank" id="social_media_mailto">
          <img src="assets/img/icons/email.svg" width="30px" height="30px" />
        </a>

		<br/>

    	<a href="https://www.instagram.com/pablocamara96" target="_blank" id="social_media_instagram">
          <img src="assets/img/icons/instagram.svg" width="30px" height="30px" />
        </a> 
		<a href="https://www.youtube.com/channel/UCpWwIcqn6V8J7FH0pZOEHzA" id="social_media_youtube_software" target="_blank" title="<?= $translator->get('youtube_link_title_software'); ?>"> 
          <img src="assets/img/icons/youtube.svg" width="30px" height="30px" />
        </a> 
        <a href="https://www.youtube.com/channel/UCk4CpCZpDpHev43Ud_zSnXg" id="social_media_youtube_fitness" target="_blank" title="<?= $translator->get('youtube_link_title_fitness'); ?>"> 
          <img src="assets/img/icons/youtube.svg" width="30px" height="30px" />
        </a> 

      </div>

    </div>

	<div id="client_area" class="view" style="display: none"
		data-intro-text='<?= $translator->get('menu_text_clientarea'); ?>'>
		<div class="form-box" id="login_form" style="display: none">
			<input type="email" name="login_email" placeholder="Email" id="login_email"/>
			<input type="password" name="login_pwd" placeholder="<?= $translator->get('form_password_placeholder'); ?>" id="login_pwd"/>
			<div id="login_form_feedback" class="error_msg h-12"></div>
			<div class="form-button reversed" id="login_form_submit"><?= $translator->get('form_login_btn_text'); ?></div>
		</div>
		
		<div id="account_bar" style="display: none">
			<div id="welcome_text"><?= $translator->get('welcome_text'); ?> <span id="account_bar_user_name"></span></div>
		</div>
		
		<div id="logout_link" style="color: #032935; margin-top: 8px;"><?= $translator->get('logout_text'); ?></div>
		
		<div id="my_domains" class="panel-item" style="display: none">
			<div class="h-16">
				<?= $translator->get('my_domains_text'); ?>    
			</div>
			<div class="panel-icon domain-icon"></div>
			<div id="my_domains_list" class="panel-list" style="display: none">
				<div class="panel-list-item"></div>
			</div>
		</div>
		
		<div id="my_designs" class="panel-item" style="display: none">
			<div class="h-16">
				<?= $translator->get('my_desings_text'); ?>    
			</div>
			<div class="panel-icon design-icon"></div>
			<div id="my_designs_list" class="panel-list" style="display: none">
				<div class="panel-list-item"></div>
			</div>
		</div>
		
	</div>
	
	<div id="services" class="view" style="display: none" 
		data-intro-text='<?= $translator->get('available_services_text'); ?>'>
		<div class="service-item" style="display: none">
			<div class="h-18">
				<b><?= $translator->get('webdesign_and_development_title'); ?></b>
			</div>
			<div class="img-webdev"></div>
			<div class="h-14"><?= $translator->get('webdesign_and_development_description'); ?></div>
			<!-- <div class="btn-white-rounded">Saber mais..</div> -->
		</div>
		
		<div class="service-item bg-light-blue no-border-radius bg-hex-color pb-20 pt-5" style="display: none">
			<div class="h-20 mt-10">
				<b><?= $translator->get('website_management_and_optimization_title'); ?></b>
			</div>
			<div class="img-webmaintenance"></div>
			<div class="h-15"><?= $translator->get('website_management_and_optimization_description'); ?></div>
			<!-- <div class="btn-dark-rounded">Saber mais..</div> -->
		</div>
		
		

	</div>

	
	
	<div id="change_language"></div>

    <div id="skip_btn" style="display: none"><?= $translator->get('skip_button_text'); ?></div>

	
    <script type="text/javascript" src="assets/js/Configs.js?v=1.0&d=<?= $curDate; ?>"></script>
    <script type="text/javascript" src="assets/js/Page.js?v=1.0&d=<?= $curDate; ?>"></script>
    <script type="text/javascript" src="assets/js/El.js?v=1.0&d=<?= $curDate; ?>"></script>
    <script type="text/javascript" src="assets/js/Validator.js?v=1.0&d=<?= $curDate; ?>"></script>
	<script type="text/javascript" src="assets/js/PabloCamara.js?v=1.0&d=<?= $curDate; ?>"></script>
	
	<?php if(!$translator->wasLanguageSelectedByUser()): ?>
		<script type="text/javascript">
			PabloCamara.showIntro("Language",true,false);
		</script>
	<?php else: ?>
		<script type="text/javascript">
			PabloCamara.showIntro("HomePage",false,true);

			El.getById('change_language').setAttribute('style',El.getById('language-<?= $lang ?>').getAttribute('style'));
		</script>
	<?php endif; ?>
  </body>
</html>
