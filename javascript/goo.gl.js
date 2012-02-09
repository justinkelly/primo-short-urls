/*
 * Swinburne Primo Goo.gl
 * Add this into your primo javascript file 
 * You may need to alter teh cssAder.jsp file to add a new javascript file
 */
$(window).load(function(){

   if( $('li').hasClass('EXLFacetGoogl') )
   {
		var apiKey = 'YOUR_API_KEY';
		gapi.client.setApiKey(apiKey);
		//var longurl = 'http://www.google.com/';

		var longurl = document.URL;

		gapi.client.load('urlshortener', 'v1', function() {
			var request = gapi.client.urlshortener.url.insert({
				'resource': {
					'longUrl': longurl
				}
			});
			var resp = request.execute(function(resp) {
				if (resp.error) {
					$("#show").html('Error. ' + resp.error.message);
				} else {
					$("#googl").html("<a href='"+resp.id+"'>"+resp.id+"</a>");
				}
			});
		});
	}
});
