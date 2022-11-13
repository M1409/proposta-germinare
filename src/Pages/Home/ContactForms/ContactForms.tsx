import styles from './ContactForms.module.scss'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import { Typography } from '../../../Components/Typography'
import formsImage from '../Assets/formsImage.png'
import {useEffect} from 'react'
import $ from 'jquery'
export default function ContactForms() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {console.log(data)};
    
    return (
        <>
            <Typography variant='typography-subtitle' color='blue'>Formulário de Contato</Typography>
            <div className={styles.container}>
                <img src={formsImage} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} onChange={()=>{
                    let keys = Object.keys(errors)
                    if(keys){
                        console.log(errors)
                        keys.forEach((error)=>{$(`#${error}`).addClass('error')})
                    }
                }}>
                    <div>
                        <span>Nome Completo</span>
                        <input id='name' type="text" placeholder="Ex: Pedro Alcântara de Oliveira" {...register("name", { required: true, maxLength: 255, pattern: /^\S+ \S+$/i})} />
                    </div>
                    <div>
                        <span>E-mail</span>
                        <input id='email' type="email" placeholder="Ex: pedro.oliveira@gmail.com" {...register("email", { required: "", pattern: /^\S+@\S+.\S$/i })} />
                    </div>
                    <div>
                        <span>Assunto</span>
                        <input id='subject' type="text" placeholder="Ex: Dúvidas sobre o processo seletivo" {...register("subject", { required: true,minLength: 5})} />
                    </div>
                    <div>
                        <span>Sua Mensagem</span>
                        <textarea id='message'  placeholder="Ex: Tenho dúvidas em relação a determinados assuntos, como por exemplo: X, Y e Z." {...register("message", { required: true })} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}