
var FS = {

  getData: function(url, callback) {
    jQuery.get(url)
      .done(callback);
  },

  getBowtieUrl: function(id) {
  	return "https://familysearch.org/tree-data/portrait-pedigree/bowtie/" + id + "?includeMarriages=true&includePhotos=false&includeSources=false&locale=en HTTP/1.1";
  },

  getPersonUrl: function(id) {
  	return "https://familysearch.org/tree-data/family-members/person/" + id + "?tz=360&locale=en&includePhotos=true&locale=en HTTP/1.1";
  },

  getChildrenUrl: function(jointID) {
  	return "https://familysearch.org/tree-data/family-members/couple/" + jointID + "/children?focusPersonId=" + jointID.match(/(.{4}-.{3})(?=_)/g)[0] + "includePhotos=true&locale=en HTTP/1.1";
  }


};