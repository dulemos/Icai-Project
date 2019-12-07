Icai-Project

Passo a passo para iniciar projeto:

1. Faça o clone do repositório para sua máquina
2. No terminal vá até o diretório que o projeto foi baixado (não se esqueça de descompactar)
3. Feito isso, quando estiver na pasta raiz do projeto (Onde está o arquivo app.js) rode o comando "node app". 


Testando a API
1. abra o Postman
2. Clique em "new" no topo esquerdo da aplicação e selecione "Request" 
3. No endereço coloque: localhost:3030/login e o método POST
4. Vá para a aba body, selecione "raw" abaixo e na select box selecione "JSON" 
5. cole o seguinte JSON: 

{
	"email": "eduardo@email.com",
	"password": "1203910293192"
}

6. clique em "Send" ao lado da URL
7. Verifique o retorno no quadro abaixo
