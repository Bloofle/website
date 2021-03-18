import React, { FC } from 'react';

interface FeaturetteProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    textOnTheLeft?: boolean;
}

const Featurette: FC<FeaturetteProps> = ({ title, subtitle, description, image, link, textOnTheLeft }: FeaturetteProps) => {
    const textClass: string = textOnTheLeft ? "col-md-7 order-md-1 with_bottom_margin" : "col-md-7 order-md-2 with_bottom_margin";
    const imageClass: string = textOnTheLeft ? "col-md-5 order-md-2 with_bottom_margin" : "col-md-5 order-md-1 with_bottom_margin";

    return (
        <>
            <div className="row featurette">
                <div className={textClass}>
                    <h2 className="featurette-heading">{title} <span className="text-muted">{subtitle}</span></h2>
                    <p className="justified lead">{description}</p>
                    <p><a className="btn btn-secondary" href={link} role="button">See more...</a></p>
                </div>
                <div className={imageClass}>
                    <a href={link}><img className="featurette-image img-fluid mx-auto" src={image} alt={title} /></a>
                </div>
            </div>
            <hr className="featurette-divider" />
        </>
    );
};

export default Featurette;