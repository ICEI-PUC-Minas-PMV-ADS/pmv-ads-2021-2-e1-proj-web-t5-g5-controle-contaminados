#  ARQUITETURA DA SOLUÇÃO
    

Esta seção demonstra os aspectos técnicos da aplicação criada pela equipe, apresentando os componentes que determinam a solução e descreve o site de hospedagem da página.

## Diagrama da Solução
    
Neste diagrama estão expostos os componentes que fazem parte da solução:  

![Fluxograma](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g5-controle-contaminados/blob/main/Fluxograma.png)

                                   Figura 12 - Diagrama - Arquitetura de solução   
  
Demonstra-se a seguir os itens que fazem parte da solução divididos em módulos: 

 

 - **Navegador**  - Sistema de Interface/ Wireframe

    -  **Páginas web** - Arquivos em HTML, CSS, Java script, mapas e imagens que viabilizam a elaboração do sistema da aplicação.
     
    - **Local Storage** - Destina-se esta parte ao armazenamento de dados que são efetivados na solução, são eles:
    
        - **Cadastro** - Cadastro de usuários, médicos e eventos clientes da solução.
        
        - **Mapas** -  Mapas de regiões com registro de contaminados em eventos.
        
        - **Informações** - Informações sobre contagio em determinado evento.
        
        - **Gerar QRCode ou token** - código gerado pela aplicação para indicar o evento.  

-  **Registro** – Registro na entrada dos eventos. 
    
-   **Notificação** - Notificação por clínicas e consultórios médicos. 
    
-   **Leitura de QRCode ou token** – Leitura pela câmera do celular.
    
-  **Hospedagem** – Site que aplicação fica mantida online na web.


 
## Hospedagem
    

Utiliza-se a plataforma Heroku como site de hospedagem da aplicação. O site é mantido em ambiente da URL.

[https://link_exemplo.herokuapp.com](https://link_exemplo.herokuapp.com/)
