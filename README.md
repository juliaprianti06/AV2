## ✈️ Aerocode

O Aerocode é um sistema web desenvolvido com React que simula a gestão de produção aeronáutica.
Ele foi projetado como uma SPA (Single Page Application) para demonstrar, de forma visual e interativa, o funcionamento de um ambiente de controle de aeronaves, peças, etapas, testes, funcionários e relatórios.

⚠️ Observação: O sistema é totalmente frontend — as funcionalidades de cadastro, login e atualização de dados são simuladas e não utilizam banco de dados real ou backend.

## 🚀 Funcionalidades Principais

-Login e Cadastro de Usuário
-Simulação de autenticação: aceita qualquer e-mail e senha (não vazios).
-Gerenciamento de Aeronaves
-Exibe cards com informações da aeronave, cliente e data de entrega.
-Permite buscar aeronaves pelo código.✈️ Aerocode

## 🛩️ Gerenciamento de Aeronaves

Exibe cards informativos com:

Descrição da aeronave

Cliente

Data de entrega

Status de produção

Campo de busca por código da aeronave.

Botão “Cadastrar Aeronave” abre um formulário simulado de registro.

Status interativo:

“EM ANDAMENTO” → pode ser atualizado.

“CONCLUÍDA” → é bloqueado (não clicável).

## ⚙️ Etapas de Produção
-Cards informando nome e status da etapa.
-Botão para adicionar nova etapa.
-Etapas concluídas não podem voltar a ser pendentes.

## 🧩 Peças
Listagem das peças associadas às aeronaves, com:

-Código da peça.
-Tipo e descrição.
-Status (Disponível, Em uso, Substituída)

## 🧪 Testes
Cards com informações dos testes realizados.
Exibição do resultado de forma visual:

✅ Aprovado

❌ Reprovado

## 👷 Funcionários
Página dedicada ao gerenciamento e visualização dos funcionários cadastrados.

## 📊 Relatórios
Geração automática de relatório em texto (.txt) contendo dados da aeronave, cliente, etapas, peças e testes.

## Como Executar o projeto
Acesse o diretório:
cd aerocode

Instale as dependências:
npm install

Inicie o projeto:
npm run dev

A aplicação estará disponível em:
👉 http://localhost:5173/
