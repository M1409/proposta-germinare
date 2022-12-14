import * as React from 'react';
import { Button} from '../../../../Components/Button/Button';
import { Typography } from '../../../../Components';
import styles from './PLModal.module.scss'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton'; 
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export function PLModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Saiba Mais
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Dados Solicitados
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={styles.tableContainer}>
          <div>
              <p className={styles.tableTitle}>Informa????es Necess??rias</p>
              <div  className={styles.tableDiv}>
                <Typography variant='TypographyParagraph' color='#323232'><li>Nome;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>E-Mail;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>G??nero;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Data de Nascimento;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>N??mero do CPF;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>N??mero do RG;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>??rg??o Expedidor do RG;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Endere??o (CEP, rua, n??mero, bairro, cidade e estado);</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Escola Atual do Candidado;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Per??odo do curso;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Informa????es legais do Respons??vel;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Permiss??o para Utilizar Cookies;</li></Typography>
              </div>
            </div>
            <div>
              <p className={styles.tableTitle}>Motivos das Solicita????es</p>
              <div className={styles.tableDiv}>
                <Typography variant='TypographyParagraph' color='#323232'><li>Realizar o processo seletivo de admiss??o dos candidatos para as 150 vagas existentes para o projeto da Escola Germinare.</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Utilizamos Cookies para distinguir usu??rios ??nicos, atribuindo um n??mero gerado aleatoriamente como um identificador com o objetivo de calcular acessos dos visitantes para os relat??rios anal??ticos de sites e para poder entender melhor suas necessidades e interesses, oferecendo um melhor servi??o ou informa????es relacionadas. Por padr??o, ele ?? definido para expirar.</li></Typography>
              </div>
            </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' autoFocus onClick={handleClose}>
            Entendi
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}