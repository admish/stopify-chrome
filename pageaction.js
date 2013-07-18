/**  
 *  Inserts address bar icon which appears only
 *  on Spotify Web Player pages that redirects to desktop
 *  app once clicked
 */ 

  function checkForValidUrl(tabId, changeInfo, tab) {

		if (tab.url.indexOf('spotify.com') > -1) {

		chrome.pageAction.show(tabId);
			chrome.pageAction.onClicked.addListener(function(tab) {
				var sp_slash = tab.url.replace(/\//g, ':');
				var sp_cut = sp_slash.split("?")[0];

				if(sp_cut.indexOf("http:::play.spotify.com")==0)
					{
					var sp_app = sp_cut.replace("http:::play.spotify.com", "spotify");
					}
				if(sp_cut.indexOf("https:::play.spotify.com")==0)
					{
					var sp_app = sp_cut.replace("https:::play.spotify.com", "spotify");
					}
				if(sp_cut.indexOf("http:::open.spotify.com")==0)
					{
					var sp_app = sp_cut.replace("http:::open.spotify.com", "spotify");
					}
				if(sp_cut.indexOf("https:::open.spotify.com")==0)
					{
					var sp_app = sp_cut.replace("https:::open.spotify.com", "spotify");
					}
				
				chrome.tabs.update(tab.id, {url: sp_app});
			})
			
		}
	};
	
// Listen for any changes to the URL of any tab.
	chrome.tabs.onUpdated.addListener(checkForValidUrl);
