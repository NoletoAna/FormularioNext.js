import { teste } from "./botao";
export const Formulario = () => {
    return (
        <div id="container">
            <h1>Seja Bem-Vindo!</h1>
            <h2>Cadastre-se:</h2>
            <form action="">
                <input
                    placeholder="Nome: "
                    type="text"
                    id="nome"
                    minLength={3}
                />
                <input
                    placeholder="Email: "
                    type="email"
                    id="email"
                />
                <input
                    placeholder="Senha: "
                    type="password"
                    id="senha"
                    minLength={6}
                />
                <input
                    placeholder="Confirme sua Senha: "
                    type="password"
                    id="confirmacaosenha"
                />
            </form>
        </div>
    );


}
export default Formulario;