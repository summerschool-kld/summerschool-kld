//(function ($) {
    jQuery(document).ready(function () {
    	$("form.contact-us" ).submit(function( event ) {
    		//event.preventDefault();
    		var pub_key = `
			-----BEGIN PUBLIC KEY-----
			MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCs0oXWZJFbLmhBg3vut4d7Tygf
			mJ3Lo8+KHvh8G41+lyNNkfju8s4RUkZgVj5LoJ0/BRYnFqS/ofgrTp+T6WJRrVip
			pR/Kh/Q9zlbsbTaDbELcmk8TCg+ca/zRn3BdqA1KLGBdSnuDEwsnrtKZkok64E1H
			nOf1pBHFjj3Sai/BjQIDAQAB
			-----END PUBLIC KEY-----
    		`;
    		var data = "";
    		$(this).find("[data-name]").each(function( index ) {
    			data = data + $(this).attr("data-name") + ": ";
    			if($(this).attr("type") == "checkbox"){
    			 	data = data + $(this).is(":checked") + "\r\n";
    			} else {
    				data = data + $(this).val() + "\r\n";	
    			}
			});

    		console.log(data);

			var c = new crypt();
			var rsa = new RSA();

			var encrypted = c.encrypt(pub_key,data);
          	console.log(encrypted);
          	encrypted = btoa(JSON.stringify(encrypted));
          	console.log(encrypted);
          	$(this).find("input[name='data']").val(encrypted);
    	});
    });
//})(jQuery);