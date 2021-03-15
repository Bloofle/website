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

    const media: any = image ? <img className="featurette-image img-fluid mx-auto" src={image} alt={title} /> : <ReactPlayer url={video} />
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