import "./Anim_Page.css"
import Video_Banner from "../Video_Banner/Video_Banner"
import macBook from "./macBookPro.mp4"

export default function Anim_Page() {
    return <>
        <section className="anim_sec">
            <div className="anim_cont">
                <div className="anim_content">
                    <div className="mac-video_banner">
                        <Video_Banner video={macBook} />
                    </div>

                </div>
            </div>
        </section>

    </>
}