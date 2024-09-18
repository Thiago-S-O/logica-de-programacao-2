# algumas curiosidades 

## Voice maker através de algum texto (string)

<script src="https://code.responsivevoice.org/responsivevoice. js"></script>

- Ele traz alguns códigos em Javascript para o projeto que possuem a capacidade de falar.
- Através do 'responsiveVoice.speak(variaveDoTexto, `Brazilian Portuguese Female`, {rate: aqui vai a velocidade da vóz})' 

## utilização do vercel.com para fazer deploy da aplicação

- Utilizar uma aplicação chamada vercel.com. Ela aponta para um dos repositórios do GitHub e realiza um Deploy (desdobramento), que é justamente a ação de disponibilizar o projeto para as pessoas;
- com o vercel é possível subir aplicações e acessa-las do celular ou outro dispositivo.

## comandos git
Baixar uma cópia de um repositório hospedado no GitHub para o seu computador, utilizando o comando git clone;

Realizar alterações no código de um projeto e registrá-las com commits, utilizando os comandos git add e git commit;

Visualizar quais arquivos foram modificados no repositório local, utilizando o comando git status;

Listar os commits realizados no repositório, com dados do autor, data e mensagem de cada commit, utilizando o comando git log, (para sair do comando `git log`, basta apertar a letra q);

Visualizar os repositórios remotos linkados com o repositório local, utilizando o comando git remote;

Enviar commits feitos no repositório local para o repositório remoto, utilizando o comando git push;

Baixar commits do repositório remoto para o repositório local, utilizando o comando git pull;

Adicionar uma pessoa como colaboradora em um repositório no GitHub, e também como aceitar um convite de colaboração recebido.

O comando git reset permite redefinir a posição da branch atual para um commit anterior, removendo os commits posteriores do histórico. `git reset --hard <id_do_commit_anterior>`;

O comando git revert cria um novo commit que desfaz as mudanças introduzidas por um commit específico `git revert <id_do_commit>`;

O comando git commit --amend -m "descrição do commit"é usado para fazer alterações no commit mais recente, como adicionar arquivos ou modificar mensagens de commit. `git commit --amend`;

# teste .gitignore
- ignorando a pasta `login-test`, basta colocar o nome do arquivo ou pasta a ser ignoradae depois colocar uma `/`;
