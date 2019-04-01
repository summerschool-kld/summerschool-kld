jQuery(document).ready(function () {
	var lang = Cookies.get("lang") || window.navigator.userLanguage || window.navigator.language;
	if (lang != "ru" && lang != "ru-RU") {
		if (window.location.pathname == "/") {
			window.location.href = "./index_en.html";
		}
	}

	$("#set-eng-lang").on("click", function() {
		Cookies.set('lang', 'en');
	});

	$("#set-rus-lang").on("click", function() {
		Cookies.set('lang', 'ru');
	});
});