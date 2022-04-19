async function youtubeGetData(url){
    var data;
    var nextPageToken;
    await fetch(url)
        .then(response => response.json())
        .then(d => {data = d})
        .catch(err => {
            console.log(err);
            data = staticData;
            return "TEST STATICALLY";
        });
    console.log(data);
    nextPageToken = data.nextPageToken;
    console.log(nextPageToken);
    displaydata(data)
    return nextPageToken;
}
function displaydata(data){
    data.items.forEach(item => {
        var i = document.getElementById("important");
        var videoDiv = document.createElement("div");
        videoDiv.setAttribute("class","videoDiv");
        var videoDivText = document.createElement("div");
        videoDivText.setAttribute("class","videoDivText");
        var img = document.createElement("img");
        img.setAttribute("id","videoImg");
        img.src = item.snippet.thumbnails.high.url;
        var videoTitle = document.createElement("h3");
        videoTitle.innerText = item.snippet.channelTitle;
        var publishDate = document.createElement("p");
        publishDate.innerHTML = item.snippet.publishedAt;
        var videoDesc = document.createElement("a");
        var link = document.createTextNode(item.snippet.title);
        videoDesc.appendChild(link);
        videoDesc.href = "https://www.youtube.com/watch?v="+item.id.videoId;


        videoDiv.appendChild(img);
        videoDivText.appendChild(videoTitle);
        videoDivText.appendChild(publishDate);
        videoDivText.appendChild(videoDesc);
        videoDiv.appendChild(videoDivText);

        i.appendChild(videoDiv);
    });
}