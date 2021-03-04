import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="bg-dark text-white d-flex-column text-center">
            <hr className="mt-0" />
            <Button size="lg" href="#" variant="dark">
                <FontAwesomeIcon icon={faInstagram} />
            </Button>
            <Button size="lg" href="#" variant="dark">
                <FontAwesomeIcon icon={faYoutube} />
            </Button>
            <Button size="lg" href="#" variant="dark">
                <FontAwesomeIcon icon={faGithub} />
            </Button>
            <div className="py-3 text-center">Copyright 2021 Bloofle</div>
        </footer>
    )
};