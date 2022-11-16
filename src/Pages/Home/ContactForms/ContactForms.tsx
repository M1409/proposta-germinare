import * as React from 'react';
import styles from './ContactForms.module.scss'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import { Typography } from '../../../Components/Typography'
import formsImage from './Assets/formsImage.png'
import Snackbar, {SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import $ from 'jquery'
import Button from '../../../Components/Button/Button';
interface iError {
    reference: string
}
export interface State extends SnackbarOrigin {
    open?: boolean;
  }
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ContactForms() {
    const [state, setState] = React.useState<State>({
        vertical: 'top',
        horizontal: 'right',
      });
    const { vertical, horizontal } = state;
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => {
        setOpen(true)
        console.log(data)
        reset() 
    };
    const handleError = () => {
        $('.textfield').removeClass('error')
        let keys = Object.keys(errors)
        if (keys) {
            keys.forEach((error) => { $(`#${error}`).addClass('error') })
        }
    }
    const Error = (props: iError) => {
        return (
            <ErrorMessage
                errors={errors}
                name={props.reference}
                render={(a) => {
                    handleError()
                    return a.messages
                        ? Object.entries(a.messages).map(([type, message]) => (
                            <p key={type}>{a.message}</p>
                        ))
                        : <Typography variant='typography-paragraph' id={styles.errorMessage}>{a.message}</Typography>;
                }}
            />
        )
    }
    return (
        <>
            {/* <Typography variant='typography-subtitle' color='blue'>Formulário de Contato</Typography> */}
            <div className={styles.container}>
                <img src={formsImage} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} onChange={handleError}>
                    <div>
                        <span>Nome Completo</span>
                        <input className='textfield' id='name' type="text" placeholder="Ex: Pedro Alcântara de Oliveira" {...register("name", { required: { value: true, message: 'Esse campo é obrigatório.' }, maxLength: 255, pattern: { value: /^([a-zA-Z]+\s)[a-zA-Z]+.*$/g, message: 'Verifique se digitou o nome completo.' } })} />
                        <Error reference='name'></Error>
                    </div>
                    <div>
                        <span>E-mail</span>
                        <input className='textfield' id='email' type="email" placeholder="Ex: pedro.oliveira@gmail.com" {...register("email", { required: { value: true, message: 'Esse campo é obrigatório.' }, pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Verifique se digitou o e-mail corretamente.' } })} />
                        <Error reference='email'></Error>
                    </div>
                    <div>
                        <span>Assunto</span>
                        <input className='textfield' id='subject' type="text" placeholder="Ex: Dúvidas sobre o processo seletivo" {...register("subject", { required: { value: true, message: 'Esse campo é obrigatório.' }, minLength: { value: 5, message: 'Por favor, descreva melhor a situação.' }, maxLength: { value: 120, message: 'Por favor, faça um breve resumo aqui e descreva melhor abaixo.' } })} />
                        <Error reference='subject'></Error>

                    </div>
                    <div>
                        <span>Sua Mensagem</span>
                        <textarea className='textfield' id='message' placeholder="Ex: Tenho dúvidas em relação a determinados assuntos, como por exemplo: X, Y e Z." {...register("message", { required: { value: true, message: 'Esse campo é obrigatório.' } })} />
                    </div>
                    <Button variant='button-filled' type='submit' id={styles.btn}>Enviar</Button>
                </form>
            </div>
            <Snackbar open={open} autoHideDuration={8000} onClose={()=>{setOpen(false)}} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={()=>{setOpen(false)}} severity="success" sx={{ width: '100%' }}>
                    Formulário enviado! Agora, só aguardar nosso retorno :)
                </Alert>
            </Snackbar>
        </>
    )
}