/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
import './card.scss';

type CardProps = {
    title: string,
    description: string,
    link: string,
    linkText: string,

}

const Card = ({ title, description, link, linkText }: CardProps) => (
  <div className="card">
    <div className="card__title">
      {title}
    </div>
    <div className="card__description">
      {description}
    </div>
    <div className="card__action">
      <a className="Card__button" href={link}>{linkText}</a>
    </div>
  </div>
);

export default Card;