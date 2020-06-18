# MyUsers

### MyUsers é uma aplicação desenvolvida em ReactJs, utilizando Typescript para tipagem e Styled-components para a estilização da página.

### A aplicação consiste em registro e controle de usuários, onde um usuário administrador pode adicionar, editar e remover usuários cadastrados.

## Usabilidade

#### O usuário pode alterar em dois temas diferentes (Dark e Light), a escolha do tema fica salva e disponível no localStorage, assim como o token de acesso.

<img src="/src/assets/readme/darkTheme.PNG" height="200" widht="200"> <img src="/src/assets/readme/lightTheme.PNG" height="200" widht="200">
> O tema é alterado através do Switch, localizado no canto superior direito na página

## Inserindo novos dados

#### Podemos clickar no botão de new user localizado no Header da aplicação, ele irá nos redirecionar para a pagina Add new user.

<img src="/src/assets/readme/addnewuser.PNG" height="300" widht="300">

#### Nessa etapa, o usuário só precisa colocar a informação Nome, E-mail, CPF e CEP. O restante irá ser prenchido automaticamente, conectamos com a API ViaCep e prenchemos os demais campos com a resposta, ou, mostrando um Toast de Error caso o CEP seja inválido. 

#### Logo após inserir um novo registor, o usuário é redirecionado para Dashboard, onde vai poder ver seu usuário cadastrado na tabela. 
<img src="/src/assets/readme/tabelausuario.PNG" height="100" widht="100">

#### Cara usuário registrado tem ao lado dois botões: Um para exclução e outro para edição. 

## Configurações de usuários
#### A única informação não disponível para edição é o CPF, para que assim possamos ter um maior controle dos dados
<img src="/src/assets/readme/editUser.PNG" height="200" widht="200"> <img src="/src/assets/readme/EdituserMobile.PNG" height="200" widht="200">

## Busca de usuário

#### O usuário administrador pode buscar um usuário digitando seu nome no formulário de pesquisa.
<img src="/src/assets/readme/buscausuario.PNG" height="200" widht="200">
