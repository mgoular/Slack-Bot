// create a bot

var SlackBot = require("slackbots");
    var channel = "YourchannelHere";

    var bot = new SlackBot({
        token: "YOURTOKENHERE",
        name: "AD-BOT"
    });

    bot.on("start", function() {
        bot.postMessageToChannel(channel, "Welcome to Active Directory Channel");
        console.log("BOT is now Live!");
    });

    bot.on("message", function(data) {
        if (data.type !== "message") {
            return;
        }

        handleMessage(data.text);
    });

    function handleMessage(message) {
        switch(message) {
            case "hi":
            case "hello":
                sendGreeting();
                break;
            default:
                return;
        }
    }

    function sendGreeting() {
        var greeting = getGreeting();
        bot.postMessageToChannel(channel, greeting);
    }

    function getGreeting() {
        var greetings = [
            "hello!",
            "hi there!",
            "Hi! Hope you are having fun today!",
            "how do you do!",
            "Howdy"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
	
 
