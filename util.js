
var Util = {

	getJointID: function(husband, wife) {
		return husband + _ + wife;
	},

	getHusbandFromJointID: function(jointID) {
		return jointID.match(/.{4}-.{3}/g)[0];
	},

	getWifeFromJointID: function(jointID) {
		return jointID.match(/.{4}-.{3}/g)[1];
	},

	getIDFromUrl: function(url) {
		return url.match(/.{4}-.{3}/g)[0];
	}

}