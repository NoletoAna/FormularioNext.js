"use client";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Botao from './botao';

const schema = yup.object({
    nome: yup.string().required("Campo Obrigatório").min(3, "Nome deve ter no mínimo 3 caracteres!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    senha: yup.string().required("Campo Obrigatório").min(6, "Senha deve ter no mínimo 6 caracteres!"),
    confirmacaosenha: yup.string().oneOf([yup.ref('senha'), undefined], "As senhas não correspondem!").required("Campo Obrigatório").min(6, "Senha deve ter no mínimo 6 caracteres!"),
}).required();

export const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (data: any) => console.log(data);
    return (
        <div id="container">
            <h1>Seja Bem-Vindo!</h1>
            <h2>Cadastre-se:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Nome: "
                    type="text"
                    id="nome"
                    {...register("nome")}
                />
                <p>{errors.nome?.message}</p>
                <input
                    placeholder="Email: "
                    type="email"
                    id="email"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>
                <input
                    placeholder="Senha: "
                    type="password"
                    id="senha"
                    {...register("senha")}
                />
                <p>{errors.senha?.message}</p>
                <input
                    placeholder="Confirme sua Senha: "
                    type="password"
                    id="confirmacaosenha"
                    {...register("confirmacaosenha")}
                />
                <p>{errors.confirmacaosenha?.message}</p>
                <Botao />

            </form>
            

        </div>
    );


}
export default Formulario;