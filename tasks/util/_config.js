// Validates common configuration options

module.exports = function(grunt) {
	
};

function loadConfig(grunt) {
	//Require our javascript config file
}

function verifyConfig(grunt) {
	// Make sure certain values are present
	var config = grunt.config('config');
	var requiredValues = [
		['production', 'boolean'],
		['prototyping', 'boolean']
	];

	requiredValues.forEach(function (value) {
		// Does it exist?
		if (!config.hasOwnProperty(value[0])) {
			grunt.fail.warn("Unable to find " + value[1] + " property '" + value[0] + "' in config. Please set to continue.");
			return;
		}

		// Is it of the right type?
		if (typeof(config[value[0]]) !== value[1]) {
			grunt.fail.warn("Property '" + value[0] + "' is a " + typeof(config[value[0]]) + " when it " + 
											"needs to be a " + value[1] + ". Please fix to continue.");
			return;
		}
	});
}