import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const FooterButtons = ({ changeCount }) => (
  <ButtonGroup variant="outlined" color="textPrimary">
    <Button onClick={changeCount}>More Answered Questions</Button>
    <Button>Add a Question</Button>
  </ButtonGroup>
);

export default FooterButtons;
