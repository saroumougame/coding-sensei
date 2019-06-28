// symfony

module.exports = {

    questions: [
        {
            message: "Application name",
            name: "application_name",
            default: "symfony_app",
        },
        {
            message: "Your server host name",
            name: "server_name",
            default: "localhost",
        },
        {
            message: "Administrator e-amil",
            name: "server_admin",
            default: "admin@myapp.com",
        },
        {
            message: "Application port",
            name: "port",
            default: "8000",
            validator: (value) => {
                if (Skyflow.isPortReachable(value)) {
                    return "This port is not available."
                }
                Skyflow.addDockerPort(value);
                return true
            }
        },
    ],

    messages: {
        writeln: [
            "-> For production, see {{ server_name }}:{{ port }}",
            "-> For development, see localhost:{{ port }}",
        ],
    },

};