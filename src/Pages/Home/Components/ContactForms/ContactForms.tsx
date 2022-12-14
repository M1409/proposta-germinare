import * as React from 'react';
import styles from './ContactForms.module.scss'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import ReCAPTCHA from "react-google-recaptcha"
import { Typography, Button } from '../../../../Components'
import formsImage from './Assets/formsImage.png'
import Snackbar, {SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import $ from 'jquery'
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
export function ContactForms() {
    const [state, setState] = React.useState<State>({
        vertical: 'top',
        horizontal: 'right',
      });
    const { vertical, horizontal } = state;
    const [open, setOpen] = React.useState(false);
    const captcha = React.useRef<ReCAPTCHA>(null)
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const onSubmit = (data: any) => {
        setOpen(true)
        console.log(data)
        reset()
        captcha.current?.reset(); 
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
                        : <Typography variant='TypographyParagraph' id={styles.errorMessage}>{a.message}</Typography>;
                }}
            />
        )
    }
    return (
        <>
            {/* <Typography variant='typography-subtitle' color='blue'>Formul??rio de Contato</Typography> */}
            <div className={styles.container}>
                <img src={formsImage} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} onChange={handleError}>
                    <div>
                        <span>Nome Completo</span>
                        <input className='textfield' id='name' type="text" placeholder="Ex: Pedro Alc??ntara de Oliveira" {...register("name", { required: { value: true, message: 'Esse campo ?? obrigat??rio.' }, maxLength: 255, pattern: { value: /^([a-zA-Z]+\s)[a-zA-Z]+.*$/g, message: 'Verifique se digitou o nome completo.' } })} />
                        <Error reference='name'></Error>
                    </div>
                    <div>
                        <span>E-mail</span>
                        <input className='textfield' id='email' type="email" placeholder="Ex: pedro.oliveira@gmail.com" {...register("email", { required: { value: true, message: 'Esse campo ?? obrigat??rio.' }, pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Verifique se digitou o e-mail corretamente.' } })} />
                        <Error reference='email'></Error>
                    </div>
                    <div>
                        <span>Assunto</span>
                        <input className='textfield' id='subject' type="text" placeholder="Ex: D??vidas sobre o processo seletivo" {...register("subject", { required: { value: true, message: 'Esse campo ?? obrigat??rio.' }, minLength: { value: 5, message: 'Por favor, descreva melhor a situa????o.' }, maxLength: { value: 120, message: 'Por favor, fa??a um breve resumo aqui e descreva melhor abaixo.' } })} />
                        <Error reference='subject'></Error>

                    </div>
                    <div>
                        <span>Sua Mensagem</span>
                        <textarea className='textfield' id='message' placeholder="Ex: Tenho d??vidas em rela????o a determinados assuntos, como por exemplo: X, Y e Z." {...register("message", { required: { value: true, message: 'Esse campo ?? obrigat??rio.' } })} />
                        <Error reference='message'></Error>
                    </div>
                    <div>
                        <ReCAPTCHA hl='pt-BR' sitekey='6LcDj0ojAAAAAFZ0OQaJi5Pk1ERi-Oi9S3waK0bJ' {...register("captcha", { required: { value: true, message: 'Essa valida????o ?? obrigat??ria.' }})} ref={captcha} onChange={(value)=>{
                            if (value){
                                setValue('captcha', value)
                            }
                        }} />
                        <Error reference='captcha'></Error>
                    </div>
                    <Button variant='filled' type='submit' id={styles.btn}>Enviar</Button>
                </form>
            </div>
            <Snackbar open={open} autoHideDuration={8000} onClose={()=>{setOpen(false)}} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={()=>{setOpen(false)}} severity="success" sx={{ width: '100%' }}>
                    Formul??rio enviado! Agora, s?? aguardar nosso retorno :)
                </Alert>
            </Snackbar>
        </>
    )
}