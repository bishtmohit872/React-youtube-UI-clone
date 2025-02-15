const VideoFrame=({id})=>{
    return (
        <iframe className='h-full w-full rounded-xl' src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}
export default VideoFrame