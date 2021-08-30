document.querySelector('button.play').addEventListener('click', function(){
    var SelTrack = document.querySelector('select').value;

    //popout.html will open up and it will show, and come to here and wait till the user selects an option and grab the slection and pass that through the background page
    chrome.runtime.sendMessage({name: "playTrack", track: SelTrack});
});

document.querySelector('button.pause').addEventListener('click', function(){

    chrome.runtime.sendMessage({name: "pauseTrack"});
});

//<!---Chill Lo-fi Hip-Hop Mix - track1.mp3
//Netflix Coding Session - track2.mp3--->