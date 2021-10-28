let videos_http = "https://www.googleapis.com/youtube/v3/videos";
let api_key = "AIzaSyBBpC47f71CBGfd7MPEDG16fVYBrZ8yVQ0"
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


let videos = document.getElementById("videos");

async function homeVideos(){

    let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyBBpC47f71CBGfd7MPEDG16fVYBrZ8yVQ0`)
    let data = await res.json();
    console.log(data);
    data.items.forEach(item =>{
        getChannelIcon(item);
    });          
}
homeVideos();
const getChannelIcon = (video)=>{
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part:'snippet',
        id:video.snippet.channelId
    }))
    .then(res=>res.json())
    .then(data=>{video.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    console.log(video)
    makeVideoCard(video);
    })
}

const makeVideoCard=(data)=>{
    let video = document.createElement("div");
    video.className ="video";
    video.addEventListener("click",()=>{
        location.href=`https://youtube.com/watch?v=${data.id}`})

    let image = document.createElement("img");
    image.className ="thumbnail";
    image.src = data.snippet.thumbnails.high.url;

    let content = document.createElement("div");
    content.className ="content";
    let icon = document.createElement("img");
    icon.className ="icons";
    icon.src = data.channelThumbnail;
    let info = document.createElement("div");
    info.className ="info";
    let name = document.createElement("h4");
    name.className ="title";
    name.innerText = data.snippet.title;
    let para = document.createElement("p");
    para.className ="name";
    para.innerText = data.snippet.channelTitle;
    info.append(name,para);
    content.append(icon,info);
    video.append(image,content);
    videos.append(video)


}



// searchbar 

async function searchVideos(){
    videos.innerHTML = null;
    let query = document.getElementById("query").value;

    let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&maxResults=20&key=AIzaSyBBpC47f71CBGfd7MPEDG16fVYBrZ8yVQ0

        `)
    let data = await res.json();
    console.log(data);


}

