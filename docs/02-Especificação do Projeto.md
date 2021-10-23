## ESPECIFICAÇÃO DO PROJETO

Diante do cenário atual, onde muitas pessoas precisam sair de casa para trabalhar e manter suas rotinas de vida, se deparam com a necessidade de boas práticas que visam a prevenção do contágio do COVID.

Pode-se concluir após uma análise detalhada de quais seriam os possíveis usuários dessa ferramenta, a necessidade e visão de cada um. Este projeto tem por objetivo criar uma ferramenta que tenha a capacidade de trazer informações exatas, no menor espaço de tempo possível, sobre o controle de infectados. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

**Personas**

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem.


**Mateus Alvarenga**

**Idade**: 42 anos 
**Ocupação**: Organizador de eventos, atualmente trabalha como autônomo.
**Aplicativos:**
Facebook
Instagram
LinkedIn
**Motivações:**
Realizar eventos para ajudar comunidades carentes.
Prestar serviços para uma multinacional.
**Frustrações:**
Cancelamento de eventos devido a pandemia.
Falta de reconhecimento da sua profissão.
**Hobbies, História:**
Viajar com sua família.
Praticar ciclismo nos finais de semana.

**Adriana Gonçalves**

**Idade**: 50 anos
**Ocupação**: Dona de casa, saiu do emprego de vendedora para cuidar do pai debilitado.
**Aplicativos:**
Facebook
Aplicativo de receitas culinárias.
Aplicativos de delivery.
**Motivações:**
O bem estar do pai e de seus filhos.
Passar por essa pandemia sem perder nenhum ente querido.
**Frustrações:**
Falta de apoio do governo aos lojistas durante a pandemia.
Sente falta da vida social antes da pandemia.
**Hobbies, História:**
Reunir toda a família nos finais de semana.
Encontrar as amigas para aula de zumba.

**Laís Ferreira**

**Idade**: 17 anos
**Ocupação**: Estudante, cursa o último ano do ensino médio, deseja prestar vestibular para Biomedicina.
**Aplicativos:**
Instagram
Tik Tok
Twitter
**Motivações:**
Passar no vestibular de Biomedicina.
Pesquisar e realizar novas descobertas científicas na área de Biomedicina.
**Frustrações:**
Falta de investimento em pesquisas científicas nas escolas.
Falta de inovação nas aulas ministradas por EAD.
**Hobbies, História:**
Ler artigos científicos
Ler livros em uma boa cafeteria.
Tem um perfil no Instagram sobre ciência no dia a dia.

**Tamires Feitosa**

**Idade** **Tamires**: 26 anos
**Ocupação**: Técnica de Enfermagem, atualmente trabalha no CTI COVID.
**Aplicativos:**
Instagram.
Twitter.
**Motivações:**
Dar uma casa melhor para seus pais.
Fazer um curso superior na área da saúde
**Frustrações:**
Irresponsabilidade da população referente ao isolamento social na pandemia.
Inúmeras perdas de paciente jovens pelo COVID.
**Hobbies, História:**
Igreja aos finais de semana
Encontrar os amigos para correr ao ar livre
Cuidar dos pais idosos.

**Pedro Augusto**

**Idade**: 22 anos
**Ocupação**: Engenheiro mecânico, trabalha em uma grande fábrica automotiva.
**Aplicativos:**
Instagram.
Facebook.
**Frustrações:**
Avô acamado que ficou debilitado após ter contraído COVID.
Vacinação deficiente na maioria dos Estados brasileiros.
**Hobbies, História:**
Corrida de rua.
Encontrar os amigos no barzinho aos finais de semana.
Futebol.
**Motivações:**
Viver o máximo que a vida tem para oferecer, viajar, com muita saúde e segurança.
Crescer profissionalmente.

**Thiago Lavoe**

**Idade**: 30 anos
**Ocupação:** Médico recém formado, dá plantões em unidades de Pronto Atendimentos e Unidades básicas de saúde.
**Aplicativos:**
-Instagram.
-LinkedIn.
-Aplicativos de bancos.
**Motivações:**
Promover uma melhoria na saúde coletiva da população e despertar o autocuidado de seus pacientes.
**Frustrações**
-Não ter realizado o mestrado em Saúde Coletiva.
-Corrupção.
-Dificuldade da população ao acesso à saúde integral.
**Hobbies, História**
-Toca violão
-Voluntário no lar de idosos da comunidade.
-Líder do projeto Mais Saúde, Mais Você.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## **Requisitos do Projeto**
    

O projeto em questão, é uma ferramenta que auxiliará o público que frequenta um determinado evento, além de espaços públicos em todo o estado de Minas Gerais, para que verifiquem se houve, ou não, contaminados participando do evento. Orientando os participantes, para que os mesmos procurem atendimento médico preventivo e a realização se necessário do exame para detecção da COVID.

## 1.  **Requisitos Funcionais**
    

A seguir estão representados no quadro alguns requisitos funcionais que o projeto deverá atender:

|ID|Descrição|Prioridade|
|---|-----------|-------|
|**RF – 01**|O sistema  deverá enviar notificações para os usuários informando se tiveram contato com pessoas contaminadas em um determinado espaço público ou evento.|Alta|
|**RF – 02**|O sistema deverá apresentar um mapa informando as regiões com maior número de infectados (API).|Baixa|
|**RF – 04**|O sistema deverá gerar um código/token que será utilizado pelos frequentadores dos espaços/eventos para realizar seu check-in no local.|Média|
|**RF – 05**|O sistema deverá permitir o gerenciamento de usuários, de médicos e de organizadores de eventos.|Alta|
|**RF – 06**|O sistema deverá conter o contato do responsável pela criação do sistema.|Média|
|**RF – 07**|O sistema deverá permitir o cadastro de eventos.|Alta|
|**RF – 08**|O sistema deverá permitir o cadastro de um indivíduo positivado (CPF).|Alta|
|**RF – 09**|O sistema deverá permitir que sejam realizados filtros por idade nos diversos eventos e espaços.|Média|

## 2. **Requisitos Não funcionais**
    

A seguir estão representados no quadro alguns requisitos não funcionais que o projeto deverá atender:

| ID | Descrição |  Prioridade  |
|----|-------------|------------|
|**RNF – 01** |O tempo de resposta do sistema não deve ultrapassar 5 segundos.| Média |
|**RNF – 02**| O sistema deve ser implantado na linguagem html, css e javascript.|Alta|
|**RNF – 03**|O sistema deve ser executável em qualquer browser. (Mozila, Internet Explorer, Opera, etc..)|Alta|
|**RNF – 04**|O sistema deverá estar disponível para qualquer dispositivo que possua um navegador instalado.|Alta|
|**RNF – 05**|O sistema deverá possuir utilização do módulo de informações cadastrais em modo offline.|Média|
|**RNF – 06**|O sistema deverá enviar notificações por meio de SMS|Alta|
|**RNF – 07**|O código/token utilizado para vincular as pessoas aos espaços será um QRCode (API).|Alta|

## 3. **Restrições**
    

A elaboração tem como objetivo elencar as obrigações que limitam a execução do projeto estão na tabela a seguir:

|ID|Descrição|
|---|---------|
|**RE – 01**|O projeto não deve extrapolar às tecnologias básicas da web front-end.|
|**RE – 02**|O site tem data de entrega fixada ao fim do semestre. Data 06/12/2021|
|**RE – 03**|O projeto não pode sofrer interferências externas e não pode ser subcontratado o desenvolvimento da aplicação.|






