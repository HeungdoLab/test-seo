// Boot Channel as an anonymous user
ChannelService.boot({
  pluginKey: "318cc6ca-5597-4f84-94ec-775a7ba55153", //please fill with your plugin key
});

// Boot Channel as a registered user
ChannelService.boot({
  pluginKey: "318cc6ca-5597-4f84-94ec-775a7ba55153", //please fill with your plugin key
  profile: {
    name: "customer name", //fill with user name
    mobileNumber: "01012341234", //fill with user phone number
    CUSTOM_VALUE_1: "VALUE_1", //any other custom meta data
    CUSTOM_VALUE_2: "VALUE_2",
  },
});

// Shutdown Channel
ChannelService.shutdown();
