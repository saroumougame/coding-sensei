'use strict';

// asset

module.exports = {

	questions: [
		{
			message: "Output directory. Relative to the current directory.",
			name: "output_directory",
			default: 'public',
		},
	],

    events: {

        update: {
            after: (values) => {
            	Skyflow.Directory.create("assets");
                Skyflow.Output.success("assets directory created!");
            },
        },

    }


};
