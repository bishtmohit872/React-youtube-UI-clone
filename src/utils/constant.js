export const LOGO="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png"
export const MENU="https://static.thenounproject.com/png/683451-200.png"
export const SEARCH="https://static.thenounproject.com/png/3184147-200.png"
export const MIC="https://static.thenounproject.com/png/7151288-200.png"
export const DOT_MENU="https://static.thenounproject.com/png/1126660-200.png"


// SIDEBAR ICONS

const HOME = "https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
const SHORTS = "https://static.thenounproject.com/png/6368543-200.png"
const SUBSCRIPTION = "https://static.thenounproject.com/png/1570199-200.png"
export const LEFT_ARROW = "https://img.icons8.com/?size=512w&id=60671&format=png"

export const formatYouTubeCount=(count)=> {
    if (count >= 1_000_000_000) return (count / 1_000_000_000).toFixed(1) + "B";
    if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
    if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
    return count;
}

export const formatDateTime=(dateStr)=>{
    let date = new Date(dateStr);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-GB', options);
    return formattedDate
}

export const convertTo24HourFormat=(timestamp)=> {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}`;
}


// YouTube Api key

export const YOUTUBE_API_KEY="AIzaSyC8zQr5c9sJ0CC1y6756-ts4KI1_H2iotc"

