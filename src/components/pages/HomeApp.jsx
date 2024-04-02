import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material"
import { useState } from "react"

export const HomeApp = () => {
  const [expanded, setExpanded] = useState('');

  const handleExpand = (panel) => (newExpand) => {
    setExpanded(newExpand ? panel : false);
  }

  return (
    <div className="container mt-4">
      <Grid spacing={2}>
        <Grid
          item
          xs='12'
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{ alignContent: 'center' }}
          >
            Nuestros servicios
          </Typography>
          <Accordion expanded={expanded === 'sell'} onChange={handleExpand('sell')}>
            <Typography color='primary'>
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="service1-content"
                id='sell'
                color="primary"
              >
                Venta de productos
              </AccordionSummary>
            </Typography>
            <AccordionDetails sx={{ textAlign: 'justify' }}>
              <Typography>
                Algo de texto para expandir la opción y ver lo que dice o los detalles del expand
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'sell2'} onChange={handleExpand('sell2')}>
            <Typography color='primary'>
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="service1-content"
                id='sell2'
                color="primary"
              >
                Venta de productos
              </AccordionSummary>
            </Typography>
            <AccordionDetails sx={{ textAlign: 'justify' }}>
              <Typography>
                Algo de texto para expandir la opción y ver lo que dice o los detalles del expand
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Grid>
        <Grid
          item
          xs='12'
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1039.0446991111683!2d-98.21910855491046!3d19.027991036813514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1711993063925!5m2!1sen!2smx"
            width="750"
            height="450"
            // allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Grid>
      </Grid>

    </div>
  )
}
