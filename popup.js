
var toScan;
var leads = [];

function ScanInfo(scanId, scanData, relationship, originId) {

  return {
    scanId: scanId,
    scanData: scanData,
    relationship: relationship,  // options are: initial, son, daughter, husband, wife, mother, father
    originId: originId
  };

}

function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];
    var url = tab.url;

    callback(url);

  });

}

function getPersonData(personId, callback) {

  jQuery.get("https://familysearch.org/tree-data/portrait-pedigree/bowtie/"+personId+"?includeMarriages=true&includePhotos=false&includeSources=false&locale=en HTTP/1.1")
    .done(function(data) {
      callback(personId, data);
    });

}

function scanPerson(personId, data) {

  var coupleInfo = data.data;
  console.log(coupleInfo);

  // check children

  // check spouse
  // check parents

}

document.addEventListener('DOMContentLoaded', function() {

  getCurrentTabUrl(function(url) {

    var focusUser = url.match(/.{4}-.{3}/g)[0];
    var initialUser = ScanInfo(focusUser, null, "initial");

    getPersonData(focusUser, scanPerson);

  });  
});




