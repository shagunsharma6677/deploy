import "./Video_Banner.css"

export default function Video_Banner({ video }) {
    return <>
        <div className='video_banner flex max-cont'>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    </>
}