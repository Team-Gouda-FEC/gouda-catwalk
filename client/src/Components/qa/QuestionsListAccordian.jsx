import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordianActions,
  Typography,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QABlock from './QABlock.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
  },
  accordian: {
    flexDirection: 'column',
  },
  qaBlock: {
    width: '800px',
  },
}));

// TODO: Fix size of each card

export default function SimpleAccordion({ questionsList }) {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.accordian}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {questionsList.results &&
            questionsList.results.map((element, key) => (
              <Grid key={key} className={classes.qaBlock} item>
                <QABlock questionObj={element} />
              </Grid>
            ))}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        TODO: THIS WILL QUERY THE API FOR THE REMAINING QUESTIONS
      </AccordionDetails>
    </Accordion>
  );
}
