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
              <p className={styles.tableTitle}>Informações Necessárias</p>
              <div  className={styles.tableDiv}>
                <Typography variant='TypographyParagraph' color='#323232'><li>Nome;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>E-Mail;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Gênero;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Data de Nascimento;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Número do CPF;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Número do RG;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Órgão Expedidor do RG;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Endereço (CEP, rua, número, bairro, cidade e estado);</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Escola Atual do Candidado;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Período do curso;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Informações legais do Responsável;</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Permissão para Utilizar Cookies;</li></Typography>
              </div>
            </div>
            <div>
              <p className={styles.tableTitle}>Motivos das Solicitações</p>
              <div className={styles.tableDiv}>
                <Typography variant='TypographyParagraph' color='#323232'><li>Realizar o processo seletivo de admissão dos candidatos para as 150 vagas existentes para o projeto da Escola Germinare.</li></Typography>
                <Typography variant='TypographyParagraph' color='#323232'><li>Utilizamos Cookies para distinguir usuários únicos, atribuindo um número gerado aleatoriamente como um identificador com o objetivo de calcular acessos dos visitantes para os relatórios analíticos de sites e para poder entender melhor suas necessidades e interesses, oferecendo um melhor serviço ou informações relacionadas. Por padrão, ele é definido para expirar.</li></Typography>
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