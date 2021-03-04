import React, { FC } from 'react';

interface FeaturetteProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    textOnTheLeft?: boolean;
}

const Featurette: FC<FeaturetteProps> = ({ title, subtitle, description, image, textOnTheLeft }: FeaturetteProps) => {
    const textClass: string = textOnTheLeft ? "col-md-7 order-md-1" : "col-md-7 order-md-2";
    const imageClass: string = textOnTheLeft ? "col-md-5 order-md-2" : "col-md-5 order-md-1";

    return (
        <>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className={textClass}>
                    <h2 className="featurette-heading">{title} <span className="text-muted">{subtitle}</span></h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={imageClass}>
                    <img className="featurette-image img-fluid mx-auto" src={image} alt="Generic placeholder image" />
                </div>
            </div>
        </>
    );
};

export default Featurette;