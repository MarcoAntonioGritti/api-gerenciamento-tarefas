# Gerenciador de Tarefas

Bem-vindo ao **Gerenciador de Tarefas**, uma API simples construída com **Node.js**, **Express** e **Mongoose** para gerenciar tarefas de forma eficiente!

## 🚀 Começando

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **MongoDB** (local ou Atlas)

### Instalando

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

Instale as dependências:

```bash
npm install
```

## 🔧 Configuração

1. **Configuração do MongoDB**: Altere a string de conexão do MongoDB no código para apontar para o seu banco de dados.

```javascript
mongoose.connect('SUA_STRING_DE_CONEXÃO_AQUI')
```

2. **Inicie o servidor**:

```bash
node index.js
```

O servidor estará rodando na porta `4000`.

## 📚 Endpoints

Abaixo estão os endpoints disponíveis para gerenciar suas tarefas:

### 1. Listar Tarefas

- **Método**: `GET`
- **Endpoint**: `/listartarefas`
- **Descrição**: Retorna uma lista de todas as tarefas.

```http
GET http://localhost:4000/listartarefas
```

### 2. Buscar Tarefa por ID

- **Método**: `GET`
- **Endpoint**: `/buscartarefa/:id`
- **Descrição**: Retorna uma tarefa específica pelo seu ID.

```http
GET http://localhost:4000/buscartarefa/{id}
```

### 3. Criar Tarefa

- **Método**: `POST`
- **Endpoint**: `/criartarefa`
- **Descrição**: Cria uma nova tarefa.
- **Corpo da Requisição**:

```json
{
  "nome": "Nome da Tarefa",
  "descricao": "Descrição da Tarefa",
  "status": "pendente"
}
```

```http
POST http://localhost:4000/criartarefa
```

### 4. Atualizar Tarefa

- **Método**: `PUT`
- **Endpoint**: `/atualizartarefa/:id`
- **Descrição**: Atualiza uma tarefa existente pelo seu ID.
- **Corpo da Requisição**:

```json
{
  "nome": "Novo Nome",
  "descricao": "Nova Descrição",
  "status": "andamento"
}
```

```http
PUT http://localhost:4000/atualizartarefa/{id}
```

### 5. Deletar Tarefa

- **Método**: `DELETE`
- **Endpoint**: `/deletartarefa/:id`
- **Descrição**: Deleta uma tarefa pelo seu ID.

```http
DELETE http://localhost:4000/deletartarefa/{id}
```

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.
