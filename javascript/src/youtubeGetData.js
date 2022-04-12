async function youtubeGetData(url){
    var data;
    var nextPageToken;
    await fetch(url)
        .then(response => response.json())
        .then(d => {data = d})
        .catch(err => console.log(err));
    console.log(data);
    nextPageToken = data.nextPageToken;
    console.log(nextPageToken);
    displaydata(data)
    
    return nextPageToken;
}
function displaydata(data){
    data.items.forEach(item => {
        var i = document.getElementById("important");
        var row = i.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        var a = document.createElement("a");
        var link = document.createTextNode("This is link");
        a.appendChild(link); 
        a.title = "This is Link"; 

        a.href = "https://www.youtube.com/watch?v="+item.id.videoId;

        var img = document.createElement("img");
        img.src = item.snippet.thumbnails.high.url;

        cell1.append(a);
        cell2.innerHTML = item.snippet.title;
        cell3.innerHTML = item.snippet.channelTitle; 
        cell4.innerHTML = item.snippet.publishedAt;
        cell5.appendChild(img);

    });
}