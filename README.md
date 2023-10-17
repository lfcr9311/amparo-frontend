# Amparo-frontend

## Guia de Instalação e Execução do Projeto React

Este é um guia passo a passo para ajudar você a instalar e executar um projeto React em seu ambiente de desenvolvimento. Certifique-se de seguir estas instruções cuidadosamente para garantir uma configuração adequada.

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o Git instalados em seu sistema. Você pode baixar e instalar essas ferramentas a partir dos seguintes links:

Node.js: https://nodejs.org/
Git: https://git-scm.com/

## Passo 1:

Abra o terminal e navegue até a pasta em que deseja clonar o repositório do projeto. Em seguida, execute o seguinte comando para clonar o repositório:

```
git clone https://tools.ages.pucrs.br/amparo/amparo-frontend
```
## Passo 2: Instalar as dependências

Navegue para a pasta do projeto clonado usando o terminal:

```
cd amparo
```
Agora, instale as dependências do projeto utilizando o Node Package Manager (npm):

```
npm install
```

### Passo 3: Iniciar o servidor de desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento para rodar o projeto React. Utilize o seguinte comando, na pasta my-app:

```
npm run dev
```


### Explicação sobre as pastas

## Common
Aqui estão todos os asstes do projeto que serão usados ​​pelo aplicativo, como estilos globais, imagens, fontes, mocks, stories, funções reutilizáveis como máscaras, entre outros.

## Components
Aqui vai ficar todos os componentes que são utilizados de uma forma global pela aplicação, componentes utilizados somente por uma página em específica vai ficar em outro lugar.

## Configs
Aqui vai ficar todos os arquivos de configuração, que são utilizados de uma forma global pela aplicação.

## Containers
Aqui vai ficar todos os nossos containers responsáveis por desacoplar a nossa aplicação de alguma biblioteca, possibilitando alterar as libs sem precisar mexer em varios lugares do código.

## Hooks
Todos os hooks customizáveis da aplicação, por exemplo, um hook que cuida da sessão do usuário.

## Pages
Como o próprio nome já diz, aqui vai ficar todas as páginas da nossa aplicação, ah e lembra que falei que os componentes utilizados somente por uma página ficariam em outro lugar?! Então, aqui é o lugar também, dentro de cada pasta de página vamos ter uma pasta components que contém todos os componentes exclusivos da página.

## Routes
Aqui vai ficar todos os nosso arquivos que gerenciam as rotas da nossa aplicação.

## Services
Nessa pasta fica todos os arquivos responsáveis por consumir serviços externos, como por exemplo o arquivo de configuração do axios para consumir APIs RestFul.
