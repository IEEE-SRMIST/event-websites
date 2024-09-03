import React from 'react'

const EventVideo = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto mx-auto mb-8"
            >
                <source src="/videos/Evolve-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default EventVideo