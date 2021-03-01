# Introdução

Property Value API - Aplicação para cálculo de valor de imóvel.

# Pré-requisitos

- Node

# Sobre o build

Esta Aplicação foi criada com a utilização das seguintes ferramentas:

- Node
- Typescript
- Yarn Workspaces
- Jest

# Execução

 Para executar o backend da aplicação siga os seguintes passos:
 
 - Clone este repositório rodando o seguinte comando: git clone https://github.com/LuizHonorato/property-value-api.git
 - Rode o comando npm install ou yarn para instalar as dependências do repositório.
 - Navegue até a pasta packages/server-1.
 - Rode o comando yarn build
 - Rode o comando node dist/shared/infra/http/server.js para executar o server-1
 - A API 1 estará disponível no endereço http://localhost:3001/api/properties/get-price-meter
 - Navegue até a pasta packages/server-2.
 - Rode o comando yarn build
 - Rode o comando node dist/shared/infra/http/server.js para executar o server-1
 - A API 1 estará disponível no endereço http://localhost:3002/properties/get-property-value
 
# Servidor

Esta aplicação está disponibilizada online, hospedada na Digital Ocean e é acessível através do endereço:

- http://167.172.143.12/properties/get-property-value

- Para acesso online foi configurado servidor Nginx com proxy reverso da porta 80 para porta 3002.
- O server-1 na porta 3001 é acessível apenas pelo server-2.
 
# Testes

 Para executar os testes da aplicação siga os seguintes passos:
 
 - Navegue até a pasta packages/server-1
 - Rode o comando yarn test
 - Navegue até a pasta packages/server-1
 - Rode o comando yarn test
