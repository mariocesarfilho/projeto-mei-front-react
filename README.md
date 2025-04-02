# 📌 Projeto-MEI

## 📖 Sobre o Projeto
Este projeto tem como objetivo facilitar o agendamento de serviços para Microempreendedores Individuais (MEI). A plataforma permite que clientes agendem serviços diretamente pelo site, mesmo sem um cadastro prévio. No entanto, para acompanhar ou modificar um agendamento, será necessário criar uma conta na plataforma.

## 🚀 Tecnologias Utilizadas
O projeto faz uso das seguintes tecnologias:
- **Frontend:** React com TypeScript
- **Backend:** PHP com Laravel
- **Banco de Dados:** MariaDB
- **Containerização:** Docker

## 🔧 Funcionalidades
✅ Agendamento de serviços sem necessidade de cadastro prévio  
✅ Cadastro e autenticação de usuários  
✅ Edição e cancelamento de agendamentos  
✅ Interface responsiva e intuitiva  
✅ Integração com banco de dados para persistência de informações  

## 🏗 Estrutura do Projeto
O projeto segue a seguinte estrutura:
```
📂 projeto-mei
 ├── 📁 frontend (React + TypeScript)
 │   ├── 📁 agendamento
 │   ├── 📁 servico
 │   ├── 📁 financeiro
 ├── 📜 README.md
```

O backend e o banco de dados são gerenciados separadamente e não fazem parte deste repositório.

## 🛠 Como Rodar o Projeto
### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Docker e Docker Compose**
- **Node.js e npm/yarn**

### Passos para execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-mei.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd projeto-mei
   ```
3. Instale as dependências do frontend:
   ```sh
   cd frontend
   npm install
   ```
4. Inicie o frontend:
   ```sh
   npm run dev
   ```

Agora a aplicação estará disponível para uso! 🎉

## ✨ Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, siga os passos:
1. Faça um fork do repositório
2. Crie uma nova branch para sua funcionalidade (`git checkout -b feature-nova`)
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o push para a branch (`git push origin feature-nova`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---

💡 _Desenvolvido para facilitar a gestão de serviços para Microempreendedores Individuais!_ 🚀
