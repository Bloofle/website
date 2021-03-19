import React, { FC } from 'react';

interface VideoPlayerProps {
    videoUrl?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ videoUrl }: VideoPlayerProps) => {

    return (
        <div className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}>
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                src={videoUrl}
                frameBorder="0"
            />
        </div>
    );
};

export default VideoPlayer;