Trata-se de um Formulário que desenvolvi utilizando o framework next.js. Nele, deveria constar os seguintes requisitos:
  - Campos necessários: Nome, E-mail, Senha, Confirmação de Senha
  - Validação dos campos garantindo boas práticas de UX:
      - Nome: mínimo de 3 caracteres.
      - E-mail: deve seguir o formato correto (exemplo@dominio.com).
      - Senha: mínimo de 6 caracteres.
      - Confirmação de senha: deve ser igual à senha.
  - Exibir mensagens de erro abaixo dos campos.
  - O formulário não pode ser enviado se houver erros.

  Optei pela seguinte estrutura de pastas:
  - src:
      - app:
        - home:
          - page.tsx
      - components:
          - botao.js
          - formulario.tsx
      - style:
          - style.css

O arquivo page.tsx contém a estrutura da página, nele está incluso a tag "formulário", que foi importada do arquivo formulario.tsx
O arquivo botao.js contém a estrutura do botão de envio do formulário e as suas respectivas funções.
O arquivo formulario.tsx contém a estrutura do formulário (seus inputs e a sua validação, que foi feita através da biblioteca react-hook-form).
E o arquivo style.css contém a folha de estilo da página, em geral realiza a estilização de todos os componentes.
