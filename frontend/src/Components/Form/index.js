import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask'

import { Container } from './styles';

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data); }
    const {phone, setPhone} = useState();

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name" className={errors.name && 'error'}>
                    <input id="name" name="name" ref={register({ required: "Campo obrigatório" })} placeholder="Nome Completo:" />
                </label>
                <label htmlFor="email" className={errors.email && 'error'}>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        ref={register(
                            { 
                                required: true, 
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                            }
                        )} 
                        placeholder="E-mail" 
                    />
                </label>
                {/* <label htmlFor="phone" className={errors.phone && 'error'}>
                    <MaskedInput
                        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        className=""
                        placeholder="Telefone:"
                        guide={true}
                        name="phone"
                        onChange={() => setPhone(phone)}
                        value={phone}
                    />
                </label>  */}
                <label htmlFor="message" className={errors.message && 'error'}>
                    <textarea id="message" name="message" ref={register({ required: true })} placeholder="Mensagem" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </Container>
    );
}
