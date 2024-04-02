import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import { SendRounded } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";

export const ContactoPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState();
  const [isPhoneValid, setIsPhoneValid] = useState();

  const store = (e) => {
    e.preventDefault();
  }

  function validatePhone(event) {
    const val = event.target.value;

    let count = 0;

    for (let i = 0; i < val.length; i++)
      if (val.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) count++;

    let isValid = count === 10 ? true : false;
    setIsPhoneValid(isValid);

    setPhone(val);
  }

  const handleSubmit = (name, number, email, message) => {
    console.log(name, number, email, message);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsPhoneValid(false);
    
    Swal.fire({
      title: "¿Enviar mensaje?",
      text: 'Esta acción no se puede cancelar!',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Enviado",
          text: "Tus datos y mensaje se han compartido con éxito.",
          icon: "success"
        });
      }
    });
  }


  return (
    <div className="container">
      <Typography color="primary" variant='h5' align="center">
        Contácteme llenando el formulario
      </Typography>
      <form onSubmit={store}>
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="Nombre"
                    type="text"
                    name="name"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>

                  <TextField
                    required
                    error={phone && !isPhoneValid}
                    label="Teléfono"
                    type="number"
                    name="tel"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
                    value={phone}
                    onChange={validatePhone}
                  />
                </Grid>
                <Grid item xs={12}>

                  <TextField
                    required
                    label="Email"
                    type="text"
                    name="mail"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    rows={4}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    margin="dense"
                    variant="contained"
                    color="error"
                    startIcon={<SendRounded />}
                    onClick={() =>
                      handleSubmit(
                        name,
                        email,
                        phone,
                        message,
                      )
                    }
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </form>
    </div>
  )
}

