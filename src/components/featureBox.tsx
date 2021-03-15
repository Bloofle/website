import React, { FC } from 'react';

interface FeatureBoxProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const FeatureBox: FC<FeatureBoxProps> = ({ title, description, image, link }: FeatureBoxProps) => {
    return (
        <div className="col-lg-4 center">
            <a href={link} target="_blank"><img className="rounded-circle" src={image} alt={title} width="140" height="140" /></a>
            <h2>{title}</h2>
            <p className="justified">{description}</p>
            <p><a className="btn btn-secondary" href={link} role="button" target="_blank">View Room »</a></p>
        </div>
    );
};

export default FeatureBox;