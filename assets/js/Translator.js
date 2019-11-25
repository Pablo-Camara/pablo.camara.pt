const Translator = { 
	_currentLanguage: null,
	
	getLang: function(){
		return Translator._currentLanguage;
	},
	setLang: function(lang){
		Translator._currentLanguage = lang;
		API.request('GET','php/endpoints/account/language.php?lang=' + lang,null/*uses default*/,null,function(){
			if (this.readyState == 4 && this.status == 200) {
				window.location.reload();
			}
		});
	},
	Translate: {
		dt: function(lang,el){
			if(el.hasAttribute('data-text-' + lang)){
				const dataText = el.getAttribute('data-text-' + lang);
				el.innerText = dataText;
				return dataText;
			}
		},
		childrenDt: function(lang,el){
			var el_children = el.children;
			for (var i = 0; i < el_children.length; i++) {
				
			  var child = el_children[i];
			  if(child.children.length > 0)
				Translator.Translate.childrenDt(lang,child);
			  else
				Translator.Translate.dt(lang,child);
			  
			}
		},
		code: function(lang,el){
			if(el.hasAttribute('data-code-' + lang)){
				const code = el.getAttribute('data-code-' + lang);
				el.innerHTML = code;
				return code;
			}
		},
		childrenCode: function(lang,el){
			var el_children = el.children;
			for (var i = 0; i < el_children.length; i++) {
				
			  var child = el_children[i];
			  if(child.children.length > 0)
				Translator.Translate.childrenCode(lang,child);
			  else
				Translator.Translate.code(lang,child);
			  
			}
		},
		childrenDtAndCode: function(lang,el){
			var el_children = el.children;
			for (var i = 0; i < el_children.length; i++) {
				
			  var child = el_children[i];
			  Translator.Translate.dt(lang,child);
			  Translator.Translate.code(lang,child);
			  
			  if(child.children.length > 0){
				Translator.Translate.childrenDtAndCode(lang,child);
			  }
			  
			}
		},
		dataAttr: function(lang,el,attrName){
			if(el.hasAttribute('data-' + attrName + '-' + lang)){
				const dataAttrResult = el.getAttribute('data-' + attrName + '-' + lang);
				el.setAttribute(attrName,dataAttrResult);
				return dataAttrResult;
			} 
		},
		getDataAttrResult: function(lang,el,attrName){
			if(el.hasAttribute(attrName + '-' + lang)){
				return el.getAttribute(attrName + '-' + lang);
			} 
		},
		
	}
};