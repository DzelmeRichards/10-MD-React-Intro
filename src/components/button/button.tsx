/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-indent */
import './button.scss';

const buttonDetails = [
  {
    id: 1,
    title: 'Button 1',
    backgroundColor: 'blue',
  },
  {
    id: 2,
    title: 'Button 2',
    backgroundColor: 'yellow',
  },
  {
    id: 3,
    title: 'Button 3',
    backgroundColor: 'orange',
  },
  {
    id: 4,
    title: 'Button 4',
    backgroundColor: 'purple',
  },
];

const Button2 = buttonDetails.map((props) => <button className="button" style={{ backgroundColor: props.backgroundColor }} key={props.id}>{props.title}</button>);

const ButtonArray = () => (
    <div className="ButtonArray-container">
        { Button2 }
    </div>
);

type ButtonProps = {
    color: string,
    name: string,
}

const Button = ({ color, name }: ButtonProps) => (
    <button className={` button ${color} `}>{name}</button>
);

export { Button, ButtonArray };