async function fetchingFromAPI(nextToken){
    const searchKey = text;
    console.log("This is searchKey file "+searchKey);

    const APIKEY = apiKey.apiKEy;
    const url = "https://www.googleapis.com/youtube/v3/search?key="+APIKEY+
    "&type=video&part=snippet&maxResults=10&q="+searchKey+"&pageToken="+nextToken;
    var nextToken = await youtubeGetData(url,text);
    const nextBtn = document.createElement("input");
    nextBtn.setAttribute('type', "submit");
    nextBtn.setAttribute('value', "Next");
    nextBtn.setAttribute('class',"submit-btn")
    document.getElementById("important").append(nextBtn);
    nextBtn.addEventListener("click", onNext);
    function onNext(e) {
        e.preventDefault();
        var deleteDiv = document.getElementById("important");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }
        console.log("hii");
        fetchingFromAPI(nextToken);
    }
}

// export function youtubeData(data){
//     return typeof data;
// }


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsXJuqQWQiYb3BWrtxNVxaXaPmjhi7xAo
// &type=video&part=snippet&maxResults=10&q=js