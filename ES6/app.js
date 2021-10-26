let url = "https://www.googleapis.com/youtube/v3/videos";
let api_key = "AIzaSyCFRQeEOTl8My-fW3XmzrxmSqDkoicoqKY"


let videos = document.getElementById("videos");

async function searchVideos(){
    let query = document.getElementById("query").value;

    let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyCFRQeEOTl8My-fW3XmzrxmSqDkoicoqKY

        `)
    let data = await res.json();
    console.log(data);

    appendVideos(data.items);  

}

function appendVideos(video){
    videos.innerHTML = null;
    video.forEach(( { id: {videoId} } )=>{

        let div = document.createElement("div");
        div.innerHTML = `<iframe width="360" height="240" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        videos.append(div);
    })
}