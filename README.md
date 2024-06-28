# EnergySavior

EnergySavior é um projeto para monitoramento e controle do consumo de energia usando uma aplicação React para visualização e uma API Flask para comunicação com um sensor.

## Estrutura do Projeto

- `web/`: Diretório contendo a aplicação React.
- `api/`: Diretório contendo a API Flask.

## Pré-requisitos

- Node.js e npm
- Python 3.x
- Pip (Python package installer)

## Configuração e Execução

### Clonando o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd hackathonGreen
```

### Configurando a Aplicação React

1. Navegue até o diretório `web`:

    ```bash
    cd web
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie a aplicação React:

    ```bash
    npm start
    ```

A aplicação React estará disponível em `http://localhost:3000`.

### Configurando a API Flask

1. Navegue até o diretório `api`:

    ```bash
    cd ../api
    ```

3. Instale as dependências:

    ```bash
    pip install Flask Flask-CORS pyserial
    ```

4. Inicie a API Flask:

    ```bash
    py app.py
    ```

A API Flask estará disponível em `http://localhost:8000`.

## Rotas da API

- `GET /get_metricas`: Retorna as métricas atuais de consumo de energia.
- `POST /ligar`: Liga o relé.
- `POST /desligar`: Desliga o relé.

## Como Usar

1. Acesse `http://localhost:3000` no navegador para visualizar o painel de controle.
2. As métricas de consumo serão atualizadas automaticamente.
3. Use o painel para ligar ou desligar o relé.
