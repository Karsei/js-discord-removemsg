clearMessages= function() {
    const author = "YOUR_AUTHORID_HERE";
    const authToken = "YOUR_AUTHTOKEN_HERE";
    const channel = window.location.href.match(/^http[s]?:\/\/discordapp.com\/channels\/([\d]+)\/.*/i)[1];
    const headers = { 'Authorization': authToken, 'Content-Type': 'application/json' };

    if (channel == undefined) {
        console.error("There is no channel number. Please reanalize the network address.");
        return;
    }

    let clock = 0;
    let interval = 500;
    function delay(duration) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
        });
    }

    fetch(`https://discordapp.com/api/v6/guilds/${channel}/messages/search?author_id=${author}`, {headers})
        .then(response => response.json())
        .then(json => {
            console.log("There are " + json.total_results + " messages left to delete.");
            Array.from(json.messages).map(message => {
            message.forEach(function(item) {
                if(item.hit == true) {
                    delay(clock += interval).then(() => { fetch(`https://discordapp.com/api/v6/channels/${item.channel_id}/messages/${item.id}`, { headers, method: 'DELETE' }) });
                }
            });
        });

        if (json.total_results > 0) { delay(clock += interval).then(() => { clearMessages(); }); }
    });
}
clearMessages();