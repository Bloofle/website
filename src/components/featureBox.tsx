import React, { FC } from 'react';

interface FeatureBoxProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const FeatureBox: FC<FeatureBoxProps> = ({ title, description, image, link }: FeatureBoxProps) => {
    return (
        <div className="col-lg-4">
            <img className="rounded-circle" src={image} alt={title} width="140" height="140" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p><a className="btn btn-secondary" href={link} role="button">View details »</a></p>
        </div>
    );
};

export default FeatureBox;