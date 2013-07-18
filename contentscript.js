/**  
 * Edit all links on a page that begin with:
 *   	"http://open.spotify.com/*", "https://open.spotify.com/*", 
 *		"http://play.spotify.com/*", "https://play.spotify.com/*"
 * then change them to:
 * 		spotify:
 * including the http:// and https://
 */ 

// Remove target attribute from all links to web player
	$("a[href^='http://open.spotify.com/']").attr("target", "_self"); 
	$("a[href^='http://play.spotify.com/']").attr("target", "_self"); 
	$("a[href^='https://open.spotify.com/']").attr("target", "_self"); 
	$("a[href^='https://play.spotify.com/']").attr("target", "_self"); 

// Rewrite any existing links for http://*.spotify.com/

	$('a[href]').attr('href', function(index, href) {
		return href.replace("http://open.spotify.com/", 'spotify:');
	});
	
	$('a[href]').attr('href', function(index, href) {
		return href.replace("http://play.spotify.com/", 'spotify:');
	});
	
	$('a[href]').attr('href', function(index, href) {
		return href.replace("https://play.spotify.com/", 'spotify:');
	});
	
	$('a[href]').attr('href', function(index, href) {
		return href.replace("https://open.spotify.com/", 'spotify:');
	});

// Attempt to catch links added later. ex - Google Instant
	$('a').live('click', function() {
		var href = $(this).attr('href');
		$(this).attr('href', href.replace("http://open.spotify.com/", 'spotify:'));
	});
	
	$('a').live('click', function() {
		var href = $(this).attr('href');
		$(this).attr('href', href.replace("http://play.spotify.com/", 'spotify:'));
	});
	
	$('a').live('click', function() {
		var href = $(this).attr('href');
		$(this).attr('href', href.replace("https://open.spotify.com/", 'spotify:'));
	});
	$('a').live('click', function() {
		var href = $(this).attr('href');
		$(this).attr('href', href.replace("https://play.spotify.com/", 'spotify:'));
	});
