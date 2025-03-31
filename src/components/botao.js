import { useForm } from 'react-hook-form';

function Botao() {
    const { handleSubmit } = useForm();

    function entrar() {
        var animacao = document.getElementById("botao")
        animacao.style.backgroundColor = "#132116";
    }
    function sair() {
        var animacao = document.getElementById("botao")
        animacao.style.backgroundColor = "#ecb417";
    }

    return (
        <div id="containerBotao">
            <input
                value="Cadastrar"
                type="submit"
                id="botao"
                onMouseEnter={entrar}
                onMouseLeave={sair}
            />
        </div>
    )
}
export default Botao