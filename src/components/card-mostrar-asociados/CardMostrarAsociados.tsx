import { Usuarios } from "../../types";
import "./CardMostrarAsociados.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";

interface Props {
  asociado: Usuarios;
}

function CardMostrarAsociados({ asociado }: Props) {
  return (
  <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Box >
            <div className="class-avatar">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />          
            <Typography className="asociado-nombreCompleto" gutterBottom variant="h5" component="div">
              {asociado.nombreCompleto}
            </Typography>
            </div>
          </Box>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Nombre: {asociado.nombre}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Apellido: {asociado.apellido}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            E-Mail: {asociado.email}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Telefono: {asociado.telefono}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            DNI: {asociado.dni}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Fecha Alta: {asociado.fechaAlta}  
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Fecha Baja: {asociado.fechaBaja}
          </Typography>
          <Typography className="datos-asociados" variant="body2" color="text.secondary">
            Dirección: {asociado.direccion}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export { CardMostrarAsociados };
