import * as React from 'react';
import Button from '../../../../Components/Button/Button';
import styles from './PLModal.module.scss'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton'; 
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

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
      <Button variant="button-outlined" onClick={handleClickOpen}>
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
          <Typography component={'span'} gutterBottom>
          <div className={styles.tableContainer}>
          <div>
              <p className={styles.tableTitle}>Informações Necessárias</p>
              <div  className={styles.tableDiv}>
                <li className={styles.tableText}>Nome;</li>
                <li className={styles.tableText}>E-Mail;</li>
                <li className={styles.tableText}>Gênero;</li>
                <li className={styles.tableText}>Data de Nascimento;</li>
                <li className={styles.tableText}>Número do CPF;</li>
                <li className={styles.tableText}>Número do RG;</li>
                <li className={styles.tableText}>Órgão Expedidor do RG;</li>
                <li className={styles.tableText}>Endereço (CEP, rua, número, bairro, cidade e estado);</li>
                <li className={styles.tableText}>Escola Atual do Candidado;</li>
                <li className={styles.tableText}>Período do curso;</li>
                <li className={styles.tableText}>Informações legais do Responsável;</li>
                <li className={styles.tableText}>Permissão para Utilizar Cookies;</li>
              </div>
            </div>
            <div>
              <p className={styles.tableTitle}>Motivos das Solicitações</p>
              <div>
                <li className={styles.tableText}>Realizar o processo seletivo de admissão dos candidatos para as 150 vagas existentes para o projeto da Escola Germinare.</li>
                <li className={styles.tableText}>Utilizamos Cookies para distinguir usuários únicos, atribuindo um número gerado aleatoriamente como um identificador com o objetivo de calcular acessos dos visitantes para os relatórios analíticos de sites e para poder entender melhor suas necessidades e interesses, oferecendo um melhor serviço ou informações relacionadas. Por padrão, ele é definido para expirar.</li>
              </div>
            </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='button-outlined' autoFocus onClick={handleClose}>
            Entendi
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}