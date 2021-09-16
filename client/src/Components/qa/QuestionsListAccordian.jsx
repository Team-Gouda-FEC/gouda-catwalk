import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QABlock from './QABlock.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ questionsList }) {
  const classes = useStyles();
  return (
    <div className="QA-Accordian">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {questionsList.results &&
            questionsList.results.map((element, index) => (
              <QABlock key={index} questionObj={element} />
            ))}
        </AccordionSummary>
        <AccordionDetails>text goes here</AccordionDetails>
      </Accordion>
    </div>
  );
}
