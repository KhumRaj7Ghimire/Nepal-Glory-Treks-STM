import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
// import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    margin: '1rem 0',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#FAFCC2',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export default function ItineraryAccordions(user, id, expanded, setExpanded) {
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { title, details } = user;
  const Id = id + 1;

  return (
    <div key={id}>
      <ExpansionPanel
        square
        expanded={expanded === `panel_${id}`}
        onChange={handleChange(`panel_${id}`)}
      >
        <ExpansionPanelSummary
          aria-controls={`panel_${id}d-content`}
          id={`panel_${id}d-header`}
        >
          <Typography>{`Day ${Id} => ${title}`}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{`${details}`}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
