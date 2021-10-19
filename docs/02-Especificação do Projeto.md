# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

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

## Requisitos

## Requisitos Funcionais
A seguir estão representados no quadro alguns requisitos funcionais que o projeto deverá atender:
ID	   Descrição	                                                                                                                                           Prioridade
_____________________________________________________________________________________________________________________________________________________________________
RF – 01	O sistema deverá enviar notificações para os usuários informando se tiveram contato com pessoas contaminadas em um determinado espaço público ou evento.	Alta
RF – 02	O sistema deverá apresentar um mapa informando as regiões com maior número de infectados (API).	                                                        Baixa
RF – 04	O sistema deverá gerar um código/token que será utilizado pelos frequentadores dos espaços/eventos para realizar seu check-in no local.                	Média
RF – 05	O sistema deverá permitir o gerenciamento de usuários, de médicos e de organizadores de eventos.	                                                        Alta
RF – 06	O sistema deverá conter o contato do responsável pela criação do sistema.	                                                                              Média
RF – 07	O sistema deverá permitir o cadastro de eventos.	                                                                                                        Alta
RF – 08	O sistema deverá permitir o cadastro de um indivíduo positivado (CPF).	                                                                                  Alta
RF – 09	O sistema deverá permitir que sejam realizados filtros por idade nos diversos eventos e espaços.	                                                       Média

**2.3.2.Requisitos Não funcionais
    

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

3.  Restrições
    

A elaboração tem como objetivo elencar as obrigações que limitam a execução do projeto estão na tabela a seguir:

|ID|Descrição|
|---|---------|
|**RE – 01**|O projeto não deve extrapolar às tecnologias básicas da web front-end.|
|**RE – 02**|O site tem data de entrega fixada ao fim do semestre. Data 06/12/2021|
|**RE – 03**|O projeto não pode sofrer interferências externas e não pode ser subcontratado o desenvolvimento da aplicação.|






