
//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, respose)=>{

    if(msg.name == "playTrack"){

        //...
        var trackName = msg.track;
        var audioEle = document.querySelector('.audio-element');
        audioEle.src = 'track-'+trackName+'.mp3 ';
        audioEle.play();
    }
    if(msg.name == "pauseTrack"){

        //...
        var trackName = msg.track;
        var audioEle = document.querySelector('.audio-element');
        audioEle.src = 'track-'+trackName+'.mp3 ';
        audioEle.pause();
    }
});