
var toScan;
var leads = [];
var TestCode = {
  ScanInfo: function(scanId, scanData, relationshipPath) {

    this.id = scanId;
    this.data = scanData;
    this.path = relationshipPath; // Relationship[]

  },

  Relationship: function(relType, relOrigin) {
    // a relationship should be able to read out "I (the person at the end of the relationship path) am the <relType> of <relOrigin>."
    this.type = relType;
    this.origin = relOrigin;
  },

  getCurrentTabUrl: function(callback) {

    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {

      var tab = tabs[0];
      var url = tab.url;

      callback(url);

    });

  },

  logData: function(url) {
    FS.getData(url, function(data) { console.log(data.data); });
  },

  logBowtie: function(id) {
    logData(FS.getBowtieUrl(id));
  },

  logPerson: function(id) {
    logData(FS.getPersonUrl(id));
  },

  logCoupleChildren: function(jointID) {
    logData(FS.getChildrenUrl(jointID));
  },

  scanPerson: function(personId, data) {

    var coupleInfo = data.data;
    console.log(coupleInfo);

    // check children

    // check spouse
    // check parents

  }
}




