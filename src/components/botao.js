import { useForm } from 'react-hook-form';

function Botao() {
    const {handleSubmit } = useForm();

    function entrar() {
        var teste = document.getElementById("botao")
        teste.style.backgroundColor = "#132116";
    }
    function sair() {
        var teste = document.getElementById("botao")
        teste.style.backgroundColor = "#ecb417";
    }

    return (
        <div id="teste">
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