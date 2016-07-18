(function(object) {
	object.validator = {};

    // Add empty check function
    validator.isEmpty = function(input) {
        if (input.trim() === "") 
        	return true;
        return false;
    };

	validator.isEmailAddress = function(email) {
		var local,
        	domain,
        	localSplit,
        	domainSplit;

	    if (!email) return false;
	    // Move space check from back to the front: no space is allowed in an email
	    console.log("Email:" + email);
	    if (email.indexOf(" ") !== -1) return false;

	    if (email.indexOf("@") === -1 ||
	        email.indexOf("@") !== email.lastIndexOf("@")) return false;

	    local = email.split("@")[0];
	    domain = email.split("@")[1];
	    localSplit = local.split(".");
	    domainSplit = domain.split(".");

	    if (local === "") return false;
	    for (var i = 0; i < localSplit.length; i++) {
	        if (localSplit[i] === "")
	            return false;
	    }

	    if (domain === "") return false;
	    // Add: no underscore is allow after @ sign
	    if (domain.indexOf("_") !== -1) return false;
	    // Add: hyphen can't be the first or the last character
	    if (domain.indexOf("-") === 0 || 
	    	domain.lastIndexOf("-") === domain.length - 1) return false;
	    if (domainSplit.length < 2) return false;
	    for (var j = 0; j < domainSplit.length; j++) {
	        if (domainSplit[j] === "") return false;
	        if (domainSplit[domainSplit.length - 1].length < 2) return false;
	    }

	    return true;
	};

	validator.isFullName = function(fullname) {
		var nameArr = fullname.split(" ");
	    if (nameArr.length >= 2) {
	        for (var i = 0; i < nameArr.length; i++) {
	            if (nameArr[i].length >= 2) {
	                for (var j = 0; j < nameArr[i].length; j++){
	                    if (nameArr[i].charCodeAt(j) >= 48 &&
	                        nameArr[i].charCodeAt(j) <= 57)
	                        return false;
	                }
	            } else {
	                return false;
	            }
	        }
	        return true;
	    }
        return false;
	};
})(window);