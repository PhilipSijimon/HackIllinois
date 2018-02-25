



function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];

    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}


// *** MY FUNCTION ***
function rateWebsite(rating) {
  if (rating.equals("Relevent") {
	  int vote = 1;
  }
  else {
	  int vote = -1;

  }

}



// *** MY FUNCTION ***
function getTotalVote(url, callback) {
	// "Get" function that retrieves vote data from the server

}



// *** MY FUNCTION ***
function saveVote(url, vote) {
  var items = {};
  items[url] = vote;
  // insert method for saving the voting data for the specific user
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');


// *** MY FUNCTION ***
    getTotalVote(url, (savedVote) => {
      if (savedVote) {
        rateWebsite(savedVote);
        dropdown.value = savedVote;
      }
    });

    // *** MY FUNCTION ***
    dropdown.addEventListener('change', () => {
      rateWebsite(dropdown.value);
      saveVote(url, dropdown.value);
    }
