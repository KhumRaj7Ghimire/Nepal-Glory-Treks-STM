// import React from 'react';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
// // import ReadMore from '../Read-More/ReadMore';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '2rem 6rem',
//     background: '#fff',
//     '@media (max-width:780px)': {
//       padding: '2rem 1.5rem',
//     },
//   },
//   h4: {
//     color: 'darkslategray',
//   },
//   summary: {
//     background: '	#FAFCC2',
//   },
//   details: {
//     background: '#fff',
//   },
//   accordion: {
//     boxShadow: '0 0',
//     border: '0',
//     margin: '1rem 0',
//   },
// }));
// export default function Itinerary() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Box my={3}>
//         <h2>
//           Itinerary
//           {/* <i className='im im-location' style={{ fontSize: '40px' }}></i> */}
//           <i
//             className='fas fa-bus-alt'
//             style={{ fontSize: '40px', margin: '0 8px' }}
//           ></i>
//         </h2>
//       </Box>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 1 Arrive in Kathmandu</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
//             quas eos ipsum facilis fugit nesciunt excepturi ab expedita? Quas
//             nesciunt illo eligendi neque itaque, reprehenderit pariatur
//             molestias, animi totam ad repellendus quisquam id unde quod aut!
//             Fuga odio culpa perspiciatis non vero, quae quos quis cum vel
//             obcaecati nostrum quia modi iste tempore nam temporibus id. Sed
//             eaque dolorum soluta cum, temporibus itaque nisi libero facere,
//             aperiam quas vitae. Temporibus delectus quam corporis dolor
//             perferendis ducimus. Porro sapiente possimus dignissimos magnam
//             expedita. Molestiae, maiores! Qui ut, quia, ex tenetur deserunt
//             placeat sit cupiditate voluptates, repellendus officiis similique
//             commodi odio beatae debitis? Quam unde sequi vitae soluta neque ut
//             tempora aspernatur harum laboriosam aliquid? Similique architecto
//             neque illo possimus quo incidunt quisquam libero, commodi ipsum, at,
//             vitae et optio quasi. Blanditiis, obcaecati voluptatem, maxime illo
//             soluta qui quia alias eius, natus nihil culpa ex? Quis dignissimos,
//             enim a facere blanditiis tempore nemo, ratione nobis soluta
//             explicabo officia et quos ab, aliquid adipisci modi commodi
//             voluptatibus architecto eligendi sapiente atque distinctio fugiat
//             aut. Ad tempore adipisci eum, voluptatum atque sapiente odio nobis,
//             debitis saepe ex quos assumenda excepturi reiciendis natus quisquam
//             fugit quo totam, at perspiciatis perferendis aperiam explicabo
//             exercitationem enim! Enim quas atque magnam culpa ut expedita
//             explicabo, sint provident eius tempora. Possimus, minima assumenda
//             incidunt dicta blanditiis et nam culpa nesciunt impedit sit aut
//             excepturi veritatis fugit, facilis porro doloribus quasi reiciendis
//             placeat saepe accusamus dolorum eius deserunt. Quo accusamus
//             architecto corporis pariatur ex, eaque error illum doloribus iste
//             voluptatem consequatur veritatis alias vero quam minima dolore
//             reiciendis, nemo mollitia similique quia est dolorem voluptatum.
//             Laborum, unde ut? Impedit quod natus dicta minus dolores odio dolor
//             blanditiis dolore quidem quae, ea numquam, vitae praesentium
//             repudiandae ipsum iure minima, ipsa quam. Ex atque dignissimos
//             possimus itaque molestias modi earum provident culpa facere fugiat,
//             maiores quae ab. Nemo, ab, accusantium placeat cum delectus aperiam
//             optio et quisquam sit sapiente pariatur provident a voluptatum esse
//             enim autem natus deserunt accusamus atque sed quidem ad perferendis
//             labore perspiciatis. Incidunt voluptate, minus debitis explicabo
//             pariatur deserunt! Temporibus nihil fuga a quibusdam blanditiis,
//             quam quod incidunt fugiat laborum fugit quos nam adipisci
//             reprehenderit unde corporis molestias quas, suscipit asperiores
//             laboriosam provident. Doloribus, cumque. Consectetur, rem voluptates
//             ducimus veniam sint delectus expedita, omnis explicabo quam totam
//             vitae. Dolores consequatur sequi nihil. Unde, accusantium culpa
//             earum soluta porro dolores rem laudantium modi iusto! Dolor eius
//             numquam ratione corporis.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className={classes.accordion}>
//         <AccordionSummary
//           className={classes.summary}
//           // expandIcon={<ExpandMoreIcon />}
//           aria-controls='panel1a-content'
//           id='panel1a-header'
//         >
//           <h4 className={classes.h4}>Day 2 Kathmandu to Pokhara</h4>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import ItineraryAccordions from './ItineraryAccordion';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 6rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '2rem 1.5rem',
    },
  },
  h4: {
    color: 'darkslategray',
  },
  summary: {
    background: '	#FAFCC2',
  },
  details: {
    background: '#fff',
  },
  accordion: {
    boxShadow: '0 0',
    border: '0',
    margin: '1rem 0',
  },
}));

const users = [
  {
    title: 'Arrival in Kathmandu',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ',
  },
  {
    title: 'Kathmandu To Pokhara',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ',
  },
  {
    title: 'Pokhara To Ghandruk',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ',
  },
  {
    title: 'Ghandruk To Ghorepani',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ',
  },
  {
    title: 'Ghorepani To Poonhill',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ',
  },
];

function Itinerary(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel_0');
  return (
    <div className={classes.root}>
      {users.map((user, i) =>
        ItineraryAccordions(user, i, expanded, setExpanded)
      )}
    </div>
  );
}

export default Itinerary;
