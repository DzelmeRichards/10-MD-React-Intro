import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';
import { Button, ButtonArray } from './components/button/button';
import Cat from './components/cat/cat';
import Card from './components/card/card';
// import Catholder from './components/cat-holder/cat-holder';
// import Card from './components/card/card';
// import Button from './components/button/button';

const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <div className="button-container">
      <Button color="green" name="Button" />
      <Button color="green" name="Button" />
      <Button color="green" name="Button" />
    </div>
    <div className="button-container">
      <Button color="blue" name="Button 1" />
      <Button color="blue" name="Button 2" />
      <Button color="blue" name="Button 3" />
    </div>
    <div className="cat-holder-container">
      <div className="cat-holder">
        <Cat src="/images/cat1.jpg" alt="noup" />
      </div>
      <div className="cat-holder">
        <Cat src="/images/cat2.jpg" alt="noup" />
      </div>
      <div className="cat-holder">
        <Cat src="/images/cat3.jpg" alt="noup" />
      </div>
      <div className="cat-holder">
        <Cat src="/images/cat4.jpg" alt="noup" />
      </div>
    </div>
    <div className="card-container">
      <Card title="Title" description="Description..." link="#" linkText="Action" />
      <Card title="Title" description="Description..." link="#" linkText="Action" />
      <Card title="Title" description="Description..." link="#" linkText="Action" />
    </div>
    <div className="card-container">
      <Card title="Title 1" description="Description 1..." link="#" linkText="Action" />
      <Card title="Title 2" description="Description 2..." link="#" linkText="Action" />
      <Card title="Title 3" description="Description 3..." link="#" linkText="Action" />
    </div>
    <div>
      <ButtonArray />
    </div>
  </div>

);

export default App;
