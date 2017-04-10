
var toScan;
var leads = [];

function ScanInfo(scanId, scanData, relationshipPath) {

  this.id = scanId;
  this.data = scanData;
  this.path = relationshipPath; // Relationship[]

}

function Relationship(relType, relOrigin) {
  // a relationship should be able to read out "I (the person at the end of the relationship path) am the <relType> of <relOrigin>."
  this.type = relType;
  this.origin = relOrigin;
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

document.addEventListener('DOMContentLoaded', function() {

  getCurrentTabUrl(function(url) {

    FS.getData(FS.getPersonUrl(Util.getIDFromUrl(url)), function(data) { console.log(data.data); });

  });  
});




