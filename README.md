# 🤖 Integração DigiSac + GPT Maker (via Node.js e Render)

Este projeto permite integrar o atendimento automatizado do **DigiSac** com um chatbot baseado em **GPT Maker / OpenAI**, para que o bot responda automaticamente mensagens recebidas no WhatsApp, Webchat, etc.

## 🚀 Visão Geral

Quando um usuário envia uma mensagem pelo DigiSac (ex: "Oi"), o DigiSac dispara um Webhook para o nosso servidor (hospedado no Render). O servidor processa essa mensagem, consulta a IA (GPT Maker / OpenAI), e devolve a resposta automaticamente ao DigiSac.

## 🧰 Tecnologias Utilizadas

- Node.js + Express
- Render (para deploy)
- OpenAI API (via GPT-3.5-Turbo ou outro modelo)
- DigiSac (plataforma de atendimento)
- [Opcional] Postman para testes

## 🛠️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/digisac-gptmaker.git
   cd digisac-gptmaker
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com sua chave da OpenAI:
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

4. Inicie o servidor localmente:
   ```bash
   node index.js
   ```

## 🌐 Como Fazer o Deploy no Render

1. Suba o código para um repositório no GitHub.
2. Acesse [https://render.com](https://render.com) e clique em **New Web Service**.
3. Conecte seu GitHub e selecione o repositório.
4. Configure:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Environment Variables**:
     - `OPENAI_API_KEY` → sua chave da OpenAI

5. Após o deploy, anote a URL do seu servidor (ex: `https://gptmaker-bot.onrender.com`).

## 🔗 Configurando o Webhook no DigiSac

1. Vá para **Configurações** → **Integrações** → **Webhooks**.
2. Crie um novo webhook:
   - **Evento**: Mensagem recebida
   - **Método**: `POST`
   - **URL**: `https://seuprojeto.onrender.com/api/gptmaker`
   - **Corpo da Requisição**:
     ```json
     {
       "message": "{{body}}"
     }
     ```

## 🧪 Teste

1. Envie uma mensagem (ex: "Oi") para o canal do DigiSac.
2. O Webhook enviará a mensagem para o servidor.
3. O servidor processa a mensagem e consulta o GPT.
4. A resposta é enviada de volta ao usuário via DigiSac.

## ✨ Resultado Esperado

- Aluno envia: **"Oi"** no WhatsApp
- IA responde: **"Olá! Como posso te ajudar?"**

## ❓ Dúvidas

Se tiver dúvidas, sugestões ou quiser ajuda para personalizar o bot, me chame! 😄