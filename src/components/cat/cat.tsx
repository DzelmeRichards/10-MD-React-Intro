/* eslint-disable eol-last */
import './cat.scss';

type CatProps = {
    src: string,
    alt: string,
}

const Cat = ({ src, alt }: CatProps) => (
  <img src={src} alt={alt} />
);

export default Cat;