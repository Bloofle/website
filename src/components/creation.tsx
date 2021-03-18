import React, { FC } from 'react';
import ReactPlayer from 'react-player';

interface CreationProps {
    title: string;
    description: string;
    image?: string;
    video?: string;
    link?: string;
    textOnTheLeft?: boolean;
}

const Creation: FC<CreationProps> = ({ title, description, image, video, link, textOnTheLeft }: CreationProps) => {
    const textClass: string = textOnTheLeft ? "col-md-7 order-md-1" : "col-md-5 order-md-2";
    const imageClass: string = textOnTheLeft ? "col-md-5 order-md-2" : "col-md-7 order-md-1";

    const media: any = image ? <img className="featurette-image img-fluid mx-auto" src={image} alt={title} /> :
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
                src={video}
                frameBorder="0"
            />
        </div>

    const externalLink: any = link ? <p><a className="btn btn-secondary" href={link} role="button">See more...</a></p> : ''

    return (
        <>
            <div className="row featurette">
                <div className={textClass}>
                    <h2 className="featurette-heading">{title}</h2>
                    <p className="justified lead">{description}</p>
                    {externalLink}
                </div>
                <div className={imageClass}>
                    {media}
                </div>
            </div>
            <hr className="featurette-divider" />
        </>
    );
};

export default Creation;