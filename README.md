# CRUD-REST-API
Operações básicas de uma REST API.

## Como utilizar

Para instalar as dependências, execute `npm install`.
Em seguida, execute `node index.js`
O server é iniciado na porta 1337. Ela pode ser alterado no script *index.js*.
A seguir, alguns testes são descritos, com base no uso da ferramenta Postman.

### Recuperar todos os usuários
Para recuperar todos os usuários, utilizando **GET**:
http://localhost:1337/api/v1/users/

### Recuperar um usuário dado um ID
Para recuperar um usuário, utilizando **GET**:
http://localhost:1337/api/v1/users/id
Onde id deve ser substituído pelo ID desejado.

### Criar um novo usuário
Para criar um novo usuário, utilizando **POST**:
http://localhost:1337/api/v1/users/
E em **body** adicione, por exemplo:
{
	"name": "Euclides da Cunha",
	"email": "euclides@gmail.com"
}

### Atualizar um usuário
Para atualizar um usuário, utilizando **PUT**:
http://localhost:1337/api/v1/users/id
Onde id deve ser substituído pelo ID desejado.
Além disso, em **body** adicione, por exemplo:
{
	"name": "Jorge Amado",
	"email": "jorge@hotmail.com"
}

### Deletar um usuário
Para excluir um usuário, utilizando **DELETE**:
http://localhost:1337/api/v1/users/id
Onde id deve ser substituído pelo ID desejado.
