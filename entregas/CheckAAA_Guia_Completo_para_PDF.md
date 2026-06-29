![Logo da UnB](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/330px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png)

**Universidade de Brasília**  
Faculdade de Ciências e Tecnologia em Engenharias  
Interação Humano Computador  

# GUIA COMPLETO CHECKAAA (UX, ACESSIBILIDADE E USABILIDADE)

**Grupo: 09**  
Arthur Gomes Oliveira - 232013917  
Davi Rodrigues Nunes - 232014413  
Davi Ursulino de Oliveira - 241012202  
Giovani de Oliveira Teodoro Coelho - 241032500  
João Eduardo de Souza Leles - 241025274  
João Guilherme Lima Veras Fonseca - 232014039  
Luiz Henrique Pallavicini - 241012329  

**Professor(a):**  
Drª Rejane Maria da Costa Figueiredo  

**Brasília - DF, 17 de maio de 2026**

---

# 1. Introdução ao Guia CheckAAA

## 1.1 Visão Geral do Projeto CheckAAA

> Um guia prático e abrangente para implementação de Experiência do Usuário (UX), Acessibilidade Digital (A11y) e Usabilidade no ciclo de vida de desenvolvimento e design.

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![Disciplina](https://img.shields.io/badge/Disciplina-IHC-blue)
![Universidade](https://img.shields.io/badge/Universidade-UnB-red)

## 1.2 Introdução

A criação de produtos digitais excepcionais exige que a **Experiência do Usuário (UX)** e a **Acessibilidade Digital** caminhem juntas desde o primeiro momento de concepção. Este repositório tem como propósito fornecer diretrizes, ferramentas de pesquisa e checklists acionáveis para conectar empatia, design centrado no usuário e engenharia de software.

O material foi estruturado para guiar todo o time — de UX Researchers e Designers a Engenheiros e Product Managers — garantindo uma entrega inclusiva, usável e de alto valor.

## 1.3 Áreas de Abrangência

Nosso ecossistema de checklists e guias cobre as principais vertentes de IHC (Interação Humano-Computador):

*   **Experiência do Usuário (UX) & Design:** Criação de Personas & Jornadas Inclusivas, Service Blueprint & Canvas, aplicação de Design Empático e diretrizes de interfaces usáveis.
*   **Desenvolvimento Web & Engenharia:** Boas práticas de código semântico HTML5, navegação por teclado, padrões WAI-ARIA e conformidade com as recomendações modernas da W3C.
*   **Geração de Conteúdo:** Textos alternativos significativos, linguagem simples (Plain Language) e estruturação de mídia.
*   **Gestão de Projetos:** Inserção de critérios de UX e Acessibilidade no ciclo de vida ágil, definição de "Definition of Done" (DoD) e acompanhamento contínuo.
*   **Avaliação, Usabilidade & Ferramentas:** Aplicação das Heurísticas de Nielsen, condução de Testes de Usabilidade e uso do nosso Plugin Híbrido de Avaliação Heurística.

> 🌐 **Acesse Online:** Todos estes guias detalhados, checklists práticos e ferramentas interativas estão disponíveis na íntegra em nosso site oficial (GitHub Pages): **https://unb-ihc.github.io/IHC_2026.1_Grupo9/**

## 1.4 Contexto Acadêmico

O **CheckAAA** é um projeto criado a partir dos estudos realizados na disciplina de **Interação Humano Computador (IHC)**.

*   **Instituição:** Universidade de Brasília (UnB)
*   **Docente:** Profa. Rejane Maria da Costa Figueiredo

---
*Desenvolvido pela equipe do Grupo 9 - IHC (UnB).*

## 1.5 Contribuidores

| Contribuidor | Perfil no GitHub |
| :--- | :--- |
| **João Guilherme** | [github.com/joaoguilherme14](https://github.com/joaoguilherme14) |
| **João Leles** | [github.com/joaoleless](https://github.com/joaoleless) |
| **Giovani** | [github.com/Gotc2607](https://github.com/Gotc2607) |
| **Davi Ursulino** | [github.com/DaviUrsulino](https://github.com/DaviUrsulino) |
| **Luiz Henrique** | [github.com/Luizz97](https://github.com/Luizz97) |
| **Davi Nunes** | [github.com/davirnunes](https://github.com/davirnunes) |
| **Artur Gomes** | [github.com/arthurgomes1290](https://github.com/arthurgomes1290) |

## 1.6 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Diretrizes mais recentes e recomendações internacionais de acessibilidade aplicadas a interfaces web e móveis.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico - versão 3.1)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras de Acessibilidade e IHC*. Destaque para a **ABNT NBR 17060:2022** (Acessibilidade em aplicações web e móveis) e a **ABNT NBR 15206** (Ergonomia da interação humano-sistema).
*   **NIELSEN NORMAN GROUP.** *Usability 101 & 10 Usability Heuristics for User Interface Design*. Princípios fundamentais para avaliação heurística de interfaces e design de experiência do usuário.


---

# 2. Design & Interfaces: Checklist de Verificação (UI/UX)

Este instrumento é projetado para designers, UX Researchers e UI Designers avaliarem protótipos, wireframes e designs finais (Figma, Sketch, Adobe XD) de acordo com a WCAG, NBR e Guias de Boas Práticas, antes do início da fase de desenvolvimento.

## 2.1 Cores e Contraste Visuais
- [ ] **Contraste de Texto:** Todo o texto (incluindo placeholders em formulários) atinge a taxa de contraste mínima de `4.5:1` com seu fundo? (Exceções apenas para logotipos ou textos decorativos). **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**
- [ ] **Textos Grandes:** Textos com 18pt (aprox. 24px) ou 14pt em negrito (aprox. 19px) alcançam a taxa de contraste mínima de `3.0:1`? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**
- [ ] **Contraste de Componentes Não-Textuais:** Elementos vitais de interface (bordas de botões, inputs, ícones essenciais) possuem taxa de contraste mínima de `3.0:1` com o fundo ao redor? **[WCAG 1.4.11, eMAG 3.1, ABNT NBR]**
- [ ] **Daltonismo e Significado de Cores:** A cor nunca é o ÚNICO meio visual utilizado para transmitir informações, indicar uma ação, pedir uma resposta ou distinguir um elemento? (Por exemplo, além de borda vermelha para erro, usar também um ícone e texto; links não devem ser diferenciados apenas por cor, mas também por sublinhado ou peso). **[WCAG 1.4.1, eMAG 3.2, ABNT NBR]**
- [ ] **Modo Escuro (Dark Mode):** Os critérios de contraste foram testados e aprovados tanto no tema claro quanto no escuro? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**

## 2.2 Tipografia e Legibilidade
- [ ] **Fontes Legíveis:** As fontes escolhidas são legíveis e claras, evitando famílias excessivamente estilizadas ou cursivas para blocos longos de texto? **[WCAG 1.4.8, eMAG 3.3, ABNT NBR]**
- [ ] **Tamanho da Fonte (Base):** O tamanho base da fonte para textos de parágrafo tem o mínimo recomendado para boa legibilidade (ideal de pelo menos 16px)? **[WCAG 1.4.4, eMAG 3.3, ABNT NBR]**
- [ ] **Espaçamento entre Linhas (Line-height):** O espaçamento entre linhas dentro de parágrafos é de no mínimo `1.5` vezes o tamanho da fonte? **[WCAG 1.4.12, eMAG 3.3, ABNT NBR]**
- [ ] **Espaçamento entre Parágrafos:** O espaçamento posterior aos parágrafos é de no mínimo `2` vezes o tamanho da fonte? **[WCAG 1.4.12, eMAG 3.3, ABNT NBR]**
- [ ] **Texto em Imagem:** Não há imagens de textos onde o texto puder ser renderizado utilizando HTML/CSS (exceções apenas para logotipos e logomarcas)? **[WCAG 1.4.5, eMAG 6.1, ABNT NBR]**
- [ ] **Alinhamento do Texto:** Textos longos estão alinhados à esquerda (ou direita em idiomas RTL), evitando a justificação total que cria "rios de branco" e dificulta a leitura por pessoas com dislexia? **[WCAG 1.4.8, eMAG 3.3, ABNT NBR]**

## 2.3 Navegação e Arquitetura da Informação
- [ ] **Consistência Visual:** Elementos que repetem funcionalidades similares (como botões de busca, ícones de menu, links de ajuda) possuem o mesmo estilo visual em todo o projeto? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**
- [ ] **Orientação da Tela:** O design está preparado para funcionar de forma aceitável em orientações de retrato (portrait) e paisagem (landscape) sem forçar o usuário a girar a tela do dispositivo? **[WCAG 1.3.4, eMAG 3.5, ABNT NBR]**
- [ ] **Identificação da Localização:** A interface apresenta mecanismos que mostram ao usuário onde ele está (Breadcrumbs, abas destacadas, título de página visível)? **[WCAG 2.4.8, eMAG 3.6, ABNT NBR]**
- [ ] **Múltiplos Caminhos:** Existe mais de uma maneira de localizar uma tela, funcionalidade ou página (por exemplo: menu principal + ferramenta de busca + mapa do site)? **[WCAG 2.4.5, eMAG 3.6, ABNT NBR]**

## 2.4 Área de Toque (Touch Targets)
- [ ] **Tamanho do Alvo:** Todos os elementos interativos (botões, links soltos, checkboxes) possuem uma área de toque mínima de `44 x 44 CSS pixels` (exigência da WCAG 2.1 AAA) ou no mínimo absoluto `24 x 24 pixels` (WCAG 2.2 AA)? **[WCAG 2.5.5, WCAG 2.5.8, eMAG 3.7, ABNT NBR]**
- [ ] **Espaçamento entre Alvos:** Elementos clicáveis próximos têm um espaçamento (margin/padding) adequado entre eles para evitar cliques acidentais (fat-finger syndrome)? **[WCAG 2.5.8, eMAG 3.7, ABNT NBR]**

## 2.5 Estados e Feedback Interativo
- [ ] **Estados Definidos:** Os protótipos contemplam documentação de design para todos os estados interativos: *Default*, *Hover*, *Focus* (foco do teclado), *Active*, *Disabled* e *Error*? **[WCAG 2.4.7, eMAG 3.8, ABNT NBR]**
- [ ] **Indicador de Foco:** O estado de foco do teclado foi desenhado de forma intencional, com alto contraste contra o fundo e altamente visível? **[WCAG 2.4.7, WCAG 2.4.11, eMAG 3.8, ABNT NBR]**
- [ ] **Prevenção de Erros:** O design prevê revisões ou confirmações antes de finalizações de tarefas importantes, como transações financeiras ou deleções definitivas? **[WCAG 3.3.4, eMAG 3.9, ABNT NBR]**

## 2.6 Animações e Movimento
- [ ] **Paralaxe e Movimentos Complexos:** Existe a opção ou planejamento no design para permitir que o usuário desative animações não essenciais (respeitando a preferência de sistema *prefers-reduced-motion*)? **[WCAG 2.3.3, eMAG 3.10, ABNT NBR]**
- [ ] **Cintilação:** As interfaces e vídeos propostos evitam componentes piscando com mais de 3 flashes por segundo? **[WCAG 2.3.1, eMAG 3.10, ABNT NBR]**

## 2.7 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 3. Design Empático: Checklist de Pesquisa e Empatia

O Design Empático transcende os regulamentos (como a WCAG) para focar na compreensão qualitativa, emocional e realista das experiências humanas. Este checklist assegura que a empatia pelas necessidades de acessibilidade seja metodologicamente sólida e não baseada em achismos.

## 3.1 Condução de Entrevistas e Etnografia
- [ ] **Ambiente Acessível de Pesquisa:** Se as entrevistas ocorrerem presencialmente, o local possui acessibilidade arquitetônica plena (rampas, elevadores, banheiros adaptados)? **[ABNT NBR 9050, Guia de Boas Práticas]**
- [ ] **Plataforma Digital Acessível:** Se as entrevistas forem remotas, a plataforma escolhida (Zoom, Teams, Meet) permite fixar intérprete de Libras, possui legendagem automática ativa e é plenamente utilizável por leitores de tela? **[WCAG 1.2.2, WCAG 1.2.6, eMAG 6.5, ABNT NBR]**
- [ ] **Materiais Acessíveis:** Os formulários de recrutamento, termos de consentimento (TCLE) e os questionários enviados aos usuários foram desenhados com alto contraste, fontes grandes e linguagem clara e simples (Plain Language)? **[WCAG 1.4.3, WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] **Dinâmica e Duração:** A entrevista respeita tempos de pausa maiores e ritmo próprio do usuário, reconhecendo que a fadiga cognitiva e operacional pode variar de acordo com a condição da pessoa? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**

## 3.2 Elaboração do Mapa de Empatia (Inclusivo)
- [ ] **O que Pensa e Sente:** A pesquisa captura a carga emocional gerada pela barreira digital? (Frustração por ser excluído do mercado digital, alívio quando um aplicativo financeiro lhe dá independência de uso sem depender de terceiros, receio de perda de privacidade ao expor dados por falta de acessibilidade). **[Guia de Boas Práticas]**
- [ ] **O que Ouve:** Quais são as influências? (A comunidade ou familiares recomendam qual software é mais "amigável" com leitores de tela? O usuário escuta reclamações constantes de outras pessoas sobre ferramentas inacessíveis?) **[Guia de Boas Práticas]**
- [ ] **O que Vê:** Como o ambiente é percebido? (As telas são muito brilhantes ou confusas? Para quem usa lupas ou magnificadores, o contexto visual de uma página inteira é perdido e a navegação se torna fragmentada em "túneis de foco"). **[WCAG 1.4.8, WCAG 1.4.10, eMAG 3.3, ABNT NBR]**
- [ ] **O que Fala e Faz:** Qual é o comportamento prático diante do bloqueio? (A pessoa abandona o carrinho? Envia e-mails de reclamação para o suporte? Usa extensões de navegador de alto contraste para "consertar" o site do serviço?) **[Guia de Boas Práticas]**

## 3.3 Dinâmicas e Simulações (Dinâmicas de Empatia na Equipe)
- [ ] **Teste Cego com o Time (Blindfolding):** Os desenvolvedores e designers tentaram navegar pelo fluxo chave da aplicação com a tela desligada e o leitor de telas ligado? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Teste de Motoridade Fina:** O fluxo chave foi operado usando apenas o teclado com a mão não-dominante ou utilizando simuladores de tremores (luvas com peso/restrições) para entender a fadiga? **[WCAG 2.1.1, eMAG 4.1, ABNT NBR]**
- [ ] **Conscientização de Simulações:** A equipe entende que *simular* uma deficiência no escritório é útil para encontrar barreiras técnicas, mas **não substitui** o teste e a empatia gerada por falar com uma pessoa real que possui deficiência (não romantizando a experiência)? **[Guia de Boas Práticas]**

## 3.4 Testes de Usabilidade com Usuários com Deficiência
- [ ] **Equipe de Teste Heterogênea:** O roteiro de testes inclui, obrigatoriamente, usuários de leitores de tela, navegação apenas por teclado e usuários que fazem zoom excessivo na tela? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Foco na Tarefa (Task Success Rate):** Ao invés de apenas pedir "testem o site", os usuários com deficiência receberam roteiros realistas (ex: "tente agendar uma consulta") para medir a eficácia, eficiência e satisfação real? **[Guia de Boas Práticas]**
- [ ] **Escuta Ativa sem Viés:** O moderador de testes não "ajudou" excessivamente o participante a concluir a tarefa, permitindo o mapeamento de onde exatamente a arquitetura se desfez na experiência do usuário PcD? **[Guia de Boas Práticas]**
- [ ] **Feedback Emocional Registrado:** Após o teste, foi perguntado ao usuário qual foi a carga de esforço (cognitivo/físico) e como ele se sentiu (Sistema de avaliação SUS - System Usability Scale, adaptado e analisado sob o viés inclusivo)? **[Guia de Boas Práticas]**

## 3.5 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 4. Personas & Jornadas: Checklist de Construção de Personas

A criação de personas frequentemente ignora deficiências e neurodiversidade, criando um viés de projeto voltado para o "usuário médio ideal". Este checklist ajuda os pesquisadores (UX Researchers) a garantir que a diversidade humana e as deficiências (permanentes, temporárias e situacionais) estejam profundamente embutidas na base de pesquisa e empatia do projeto.

## 4.1 Representatividade na Amostra de Pesquisa
- [ ] **Recrutamento Inclusivo:** As pesquisas (qualitativas e quantitativas) que embasaram as personas incluíram pessoas com deficiência (ex: pessoas cegas, com baixa visão, surdas, com mobilidade reduzida ou neurodivergentes)? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Extremos da Espectativa:** O modelo de personas considerou casos extremos (extreme users), e não apenas os perfis mais comuns? **[Guia de Boas Práticas]**
- [ ] **Interseccionalidade:** A persona reflete que a deficiência interage com outros fatores (idade avançada, baixo letramento digital, barreiras socioeconômicas, baixa largura de banda/conectividade)? **[Guia de Boas Práticas]**

## 4.2 Inclusão de Deficiências no Perfil da Persona
- [ ] **Contexto de Deficiência Inserido Naturalmente:** Pelo menos uma persona principal e uma secundária possuem alguma deficiência, restrição ou necessidade específica bem documentada em seu perfil? **[Guia de Boas Práticas, Metodologia de UX]**
- [ ] **Evitar Estereótipos e "Capacitismo":** As descrições evitam apresentar a deficiência como um traço de pena ou "heroísmo" e simplesmente mostram como uma condição de uso real da interface? **[Guia de Boas Práticas]**
- [ ] **Mapeamento do Espectro de Habilidades (Microsoft Inclusive Design):** As personas cobrem os 3 tipos de limitação identificados pela Microsoft? **[Guia de Boas Práticas]**
    - **Permanente** (ex: um usuário de uma mão só).
    - **Temporária** (ex: um usuário com braço engessado).
    - **Situacional** (ex: um pai/mãe segurando um bebê no colo).

## 4.3 Mapeamento Tecnológico e de Assistência (Tecnologias Assistivas)
- [ ] **Ferramentas de Navegação:** A ficha da persona indica explicitamente como ela interage com os dispositivos? (Ex: Leitor de telas NVDA no Windows, VoiceOver no iPhone, navegação via teclado, lupa/zoom, software de reconhecimento de voz). **[WCAG Princípio 4 (Robustez), eMAG 2.7, ABNT NBR]**
- [ ] **Preferências do Sistema:** As configurações customizadas foram mapeadas? (Ex: A persona gosta de ativar o Dark Mode constante, utiliza fontes ampliadas no sistema operacional, reduz animações no celular). **[WCAG 1.4.4, WCAG 1.4.8, eMAG 3.3, ABNT NBR]**
- [ ] **Nível de Letramento Digital Assistivo:** A persona domina sua tecnologia assistiva ou ainda é inexperiente e possui dificuldades com ela (um idoso que acabou de adquirir um celular com botões grandes e leitura de tela)? **[Guia de Boas Práticas]**

## 4.4 Dores, Necessidades e Objetivos (Pain Points e Goals)
- [ ] **Barreiras Específicas Mapeadas:** As dores da persona listam explicitamente barreiras de acessibilidade (ex: "Ela fica frustrada quando sites têm baixo contraste porque a obriga a forçar muito a visão," ou "Ela abandona compras se o CAPTCHA for apenas visual")? **[WCAG 1.4.3, WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Mecanismos de Adaptação (Workarounds):** Estão descritas as rotas alternativas que a persona usa hoje quando o sistema falha com ela? (Ex: "Quando não consegue usar o aplicativo do banco por falta de botões rotulados, a persona pede ajuda a um familiar, perdendo a sua privacidade"). **[Guia de Boas Práticas]**
- [ ] **Ganhos de Acessibilidade:** Os objetivos e necessidades indicam o que traria alívio à persona? (Ex: "Ela deseja um site que não a deslogue rápido demais, para que tenha tempo de ler e preencher tudo calmamente"). **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**

## 4.5 Validação Contínua
- [ ] **Evolução das Personas:** Existe um plano de revisão dessas personas em sprints futuros para garantir que novas descobertas de testes de usabilidade com Pessoas com Deficiência (PcD) sejam incorporadas aos perfis? **[Guia de Boas Práticas, Metodologia Ágil]**

## 4.6 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 5. Service Blueprint & Canvas: Checklist de Verificação

O Service Blueprint mapeia a jornada completa do serviço (online e offline), conectando o frontstage e backstage. Este checklist assegura que, em toda a cadeia de entrega de valor, a inclusão de pessoas com deficiência seja avaliada e garantida de ponta a ponta.

## 5.1 Avaliação de Evidências Físicas e Digitais (Physical/Digital Evidence)
- [ ] **Múltiplos Formatos:** Todos os documentos, notificações e comunicados (ex: faturas por e-mail, boletos, recibos gerados) enviados ao longo da jornada contam com formatos acessíveis (PDFs tagueados, e-mails em HTML semântico com bom contraste, audiodescrição)? **[WCAG Princípio 1 (Perceptível), eMAG 6.9, ABNT NBR]**
- [ ] **Dispositivos e Quiosques Físicos:** Se a jornada do sistema incluir uso de terminais de autoatendimento, eles oferecem suporte para teclado/fone de ouvido, contraste adaptado e estão na altura correta para usuários de cadeira de rodas? **[ABNT NBR 15206, Guia de Boas Práticas]**
- [ ] **Avisos do Sistema:** As comunicações do sistema (SMS, e-mail de alerta, push notification) possuem linguagem clara e podem ser interceptadas pelas tecnologias assistivas que o usuário utiliza em seus dispositivos pessoais? **[WCAG 4.1.3, eMAG 1.1, ABNT NBR]**

## 5.2 Avaliação das Ações do Usuário (Customer Actions)
- [ ] **Esforço Cognitivo Mapeado:** A quantidade de passos que o usuário precisa dar na jornada de uso exige memorização excessiva? Existe apoio no blueprint para reduzir a carga cognitiva? **[WCAG 3.3.7 (Redundant Entry), eMAG 3.6, ABNT NBR]**
- [ ] **Flexibilidade de Tempo:** Quando o usuário realiza uma ação da jornada, ele pode fazer isso em seu próprio tempo? O blueprint prevê pausas em processos longos sem a perda do progresso? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] **Canal Alternativo Equitativo:** Caso um usuário não consiga concluir uma ação no canal digital primário (por barreira visual, motora ou cognitiva temporária), existe um canal alternativo documentado na jornada (ex: atendimento telefônico especializado, chat com atendente humano)? **[WCAG Princípio 2 (Operável), Guia de Boas Práticas]**

## 5.3 Avaliação das Ações de Frontstage (Visible Contact Employee/Tech)
- [ ] **Treinamento de Atendentes (Contact Center/Chat):** A linha de interação prevê que os funcionários de linha de frente estão capacitados para apoiar usuários com deficiência (ex: conhecimento de suporte via vídeo para língua de sinais, atendimento a usuários de retransmissão, empatia na comunicação)? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Comunicação por Chatbots:** O chatbot desenhado no blueprint compreende falhas comuns de digitação de pessoas com deficiências motoras e oferece botões rápidos (acessíveis pelo teclado) como alternativas à digitação livre? **[WCAG 2.1.1, eMAG 4.1, ABNT NBR]**
- [ ] **Resolução de Problemas (Recuperação de Erros):** No mapeamento do fluxo, se o usuário encontrar uma barreira, o frontstage proativamente identifica e resolve? A mensagem de erro em um checkout provê uma linha direta de ajuda contextualizada? **[WCAG 3.3.3, eMAG 7.4, ABNT NBR]**

## 5.4 Avaliação das Ações de Backstage (Invisible Actions / Systems)
- [ ] **Armazenamento de Preferências:** O banco de dados ou CRM está configurado no backstage para armazenar as preferências de acessibilidade e canais do usuário (ex: "este usuário prefere receber ligações, este outro prefere alto contraste ou precisa de intérprete")? **[Guia de Boas Práticas]**
- [ ] **APIs e Integrações:** Se um serviço terceiro de CAPTCHA for acionado, este sistema de segurança é acessível (suporta opções de áudio ou desafio lógico em vez de apenas imagem)? O blueprint prevê substituição se a API parceira não for acessível? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Desempenho de Servidores (Timeouts):** O processamento assíncrono do backstage considera que as respostas devem retornar adequadamente para as tecnologias assistivas, alertando o usuário sobre o status de "Carregando..." de forma audível? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**

## 5.5 Avaliação de Processos de Suporte (Support Processes)
- [ ] **Auditorias Regulares:** O processo de suporte mapeia rotinas de auditoria de qualidade e testes de acessibilidade regulares ao longo da vida do serviço? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Política de Contratação de Fornecedores:** Existe uma política que exige dos fornecedores de TI terceirizados componentes já acessíveis pelas normas da NBR e WCAG 2.1+? **[Guia de Boas Práticas]**
- [ ] **Suporte a Tecnologias Assistivas Internas:** Se houver funcionários e analistas com deficiência trabalhando na operação deste serviço (backstage/frontstage), as ferramentas operacionais internas e painéis administrativos também são acessíveis para eles? **[WCAG Nível AA, Guia de Boas Práticas]**

## 5.6 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 6. Desenvolvimento Web: Checklist de Verificação

Este checklist é um instrumento detalhado e prático para verificar a conformidade do código-fonte e da implementação web com a WCAG (Web Content Accessibility Guidelines), normas da ABNT e o eMAG (Modelo de Acessibilidade em Governo Eletrônico). Utilize-o durante o desenvolvimento e nos testes de controle de qualidade (QA).

## 6.1 Semântica e Estrutura do Documento HTML
- [ ] **Idioma:** A tag `<html>` possui o atributo `lang` definido corretamente (ex: `lang="pt-BR"`)? **[WCAG 3.1.1, eMAG 2.1, ABNT NBR]**
- [ ] **Mudanças de Idioma:** Partes do texto em um idioma diferente do principal possuem o atributo `lang` específico para auxiliar leitores de tela? **[WCAG 3.1.2, eMAG 2.2, ABNT NBR]**
- [ ] **Título da Página:** O elemento `<title>` é único, descritivo e identifica claramente o propósito da página atual? **[WCAG 2.4.2, eMAG 2.3, ABNT NBR]**
- [ ] **Hierarquia de Cabeçalhos:** Os cabeçalhos (`<h1>` a `<h6>`) estão em ordem lógica, sem pular níveis (ex: não ir de `<h1>` para `<h3>`)? **[WCAG 1.3.1, WCAG 2.4.6, eMAG 2.4, ABNT NBR]**
- [ ] **Cabeçalho Principal:** Existe apenas um `<h1>` por página (ou view principal) descrevendo o conteúdo central? **[WCAG 1.3.1, eMAG 2.4, ABNT NBR]**
- [ ] **Landmarks Semânticos:** As regiões da página estão marcadas corretamente com `<header>`, `<nav>`, `<main>`, `<footer>` e `<aside>`? **[WCAG 1.3.1, WCAG 2.4.1, eMAG 2.5, ABNT NBR]**
- [ ] **Listas:** Itens agrupados visualmente em listas estão semanticamente estruturados usando `<ul>`, `<ol>` ou `<dl>`? **[WCAG 1.3.1, eMAG 2.6, ABNT NBR]**
- [ ] **Tabelas de Dados:** Tabelas utilizam as tags `<th>` para cabeçalhos e estão associadas às células de dados usando os atributos `scope` ("row" ou "col")? **[WCAG 1.3.1, eMAG 5.1, ABNT NBR]**
- [ ] **Tabelas Visuais:** Tabelas não são utilizadas puramente para estruturar o layout visual da página? **[WCAG 1.3.1, eMAG 5.2, ABNT NBR]**

## 6.2 Navegação e Interação por Teclado
- [ ] **Acesso via Teclado:** Todas as funcionalidades da página podem ser operadas usando apenas a tecla `Tab`, `Shift + Tab`, `Enter`, `Espaço` e as setas direcionais? **[WCAG 2.1.1, eMAG 4.1, ABNT NBR]**
- [ ] **Foco Visível:** O indicador de foco (outline/borda) é claramente visível em todos os elementos interativos e não foi removido (nunca use `outline: none` sem substituir por outro estilo de foco evidente)? **[WCAG 2.4.7, eMAG 4.2, ABNT NBR]**
- [ ] **Ordem do Foco:** A ordem de tabulação segue o fluxo visual e lógico do conteúdo da página? **[WCAG 2.4.3, eMAG 4.3, ABNT NBR]**
- [ ] **Armadilha de Teclado:** O foco do teclado não fica "preso" em nenhum componente (como em um modal ou widget iframe) sem que o usuário consiga sair usando apenas o teclado (geralmente via `Esc` ou continuando o `Tab`)? **[WCAG 2.1.2, eMAG 4.1, ABNT NBR]**
- [ ] **Pular Navegação:** Existe um link de "Pular para o conteúdo principal" que é o primeiro elemento focável da página? **[WCAG 2.4.1, eMAG 4.4, ABNT NBR]**
- [ ] **Atalhos:** Se a aplicação tiver atalhos de teclado de uma única letra, há uma forma de desativá-los ou remapeá-los? **[WCAG 2.1.4, eMAG 4.1, ABNT NBR]**

## 6.3 Imagens e Elementos Multimídia
- [ ] **Imagens com Significado:** Imagens informativas, gráficos e fotografias possuem o atributo `alt` preenchido com uma descrição clara e equivalente? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Imagens Decorativas:** Imagens puramente decorativas (que não adicionam informação ao texto) possuem `alt=""` (vazio) para serem ignoradas por leitores de tela? **[WCAG 1.1.1, eMAG 6.2, ABNT NBR]**
- [ ] **Imagens Complexas:** Gráficos e infográficos complexos possuem um texto alternativo longo acessível em outra parte da página ou linkado (usando `aria-describedby` ou um link próximo)? **[WCAG 1.1.1, eMAG 6.3, ABNT NBR]**
- [ ] **SVGs:** Ícones SVG informativos possuem `<title>` interno e estão marcados com `role="img"` e `aria-label` apropriado? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Player de Mídia:** Os controles de vídeos e áudios são acessíveis via teclado e expõem seus estados a tecnologias assistivas? **[WCAG 2.1.1, WCAG 4.1.2, eMAG 6.4, ABNT NBR]**

## 6.4 Formulários e Validação
- [ ] **Labels Explícitas:** Todo campo de entrada (`input`, `textarea`, `select`) possui um rótulo `<label>` associado programaticamente (usando `for` apontando para o `id` do campo)? **[WCAG 1.3.1, WCAG 3.3.2, eMAG 7.1, ABNT NBR]**
- [ ] **Placeholder:** O texto de "placeholder" não é utilizado como substituto para o `<label>` real? **[WCAG 3.3.2, eMAG 7.1, ABNT NBR]**
- [ ] **Instruções:** Campos obrigatórios e formatos esperados (ex: formato de data, requisitos de senha) estão descritos em texto fora do campo e preferencialmente linkados via `aria-describedby`? **[WCAG 3.3.2, eMAG 7.2, ABNT NBR]**
- [ ] **Agrupamento:** Conjuntos de radio buttons e checkboxes estão agrupados semanticamente dentro de um `<fieldset>` e identificados por um `<legend>`? **[WCAG 1.3.1, WCAG 3.3.2, eMAG 7.3, ABNT NBR]**
- [ ] **Mensagens de Erro Textuais:** Erros de validação não dependem apenas de cores (ex: borda vermelha); incluem mensagens de texto claras indicando onde está o erro e como corrigi-lo. **[WCAG 3.3.1, WCAG 3.3.3, eMAG 7.4, ABNT NBR]**
- [ ] **Aviso de Erro:** Quando um formulário é submetido com erro, o foco é levado para o primeiro campo inválido ou para a lista de erros? **[WCAG 3.3.1, eMAG 7.4, ABNT NBR]**
- [ ] **Preenchimento Automático:** Campos que solicitam dados pessoais comuns (nome, e-mail, telefone) utilizam o atributo `autocomplete` com os tokens adequados? **[WCAG 1.3.5, ABNT NBR]**

## 6.5 Componentes Dinâmicos e ARIA
- [ ] **Notificações:** Mudanças de estado dinâmicas, mensagens de sucesso ou de erro são anunciadas para leitores de tela usando ARIA live regions (`aria-live="polite"` ou `aria-live="assertive"` / `role="alert"`)? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] **Estados Expansíveis:** Elementos expansíveis como sanfonas (accordions) ou menus dropdown gerenciam corretamente o atributo `aria-expanded="true/false"`? **[WCAG 4.1.2, eMAG 4.5, ABNT NBR]**
- [ ] **Modais e Diálogos:** Quando um modal é aberto, o foco é transferido para dentro dele, o resto do site fica inativo (`aria-hidden="true"` ou tag `<dialog>`), e ao fechar o foco retorna ao botão que o acionou? **[WCAG 2.4.3, WCAG 4.1.2, eMAG 4.5, ABNT NBR]**
- [ ] **Uso Responsável do ARIA:** A regra de ouro foi seguida? (Não usar ARIA se você puder usar um elemento HTML semântico nativo e com a mesma funcionalidade). **[WCAG 4.1.2, eMAG 2.7, ABNT NBR]**

## 6.6 Tempo e Sessão
- [ ] **Avisos de Tempo:** Se há tempo limite de sessão ou de preenchimento, o usuário é alertado e pode solicitar a extensão do tempo (antes da expiração)? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] **Animações e Pausas:** Carrosséis de banners, vídeos ou GIFs em reprodução automática possuem controles evidentes para Pausar, Parar ou Ocultar a animação? **[WCAG 2.2.2, eMAG 4.7, ABNT NBR]**

## 6.7 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C (Outubro de 2023). Diretrizes técnicas internacionais para acessibilidade web e mobile nos níveis A, AA e AAA.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*. Norma técnica brasileira que estabelece os requisitos técnicos e critérios de verificação para interfaces digitais.
*   **Governo Federal do Brasil.** *eMAG - Modelo de Acessibilidade em Governo Eletrônico (Versão 3.1)*. Guia orientativo que adapta as diretrizes internacionais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 15206:2004 - Ergonomia da Interação Humano-Sistema*. Diretrizes aplicáveis a interfaces e ergonomia de software.


---

# 7. Geração de Conteúdo: Checklist de Conteúdo e Redação (UX Writing)

Este checklist é fundamental para Analistas de Conteúdo, Redatores, UX Writers e Editores. Um conteúdo acessível garante que a mensagem do projeto chegue com clareza para pessoas com diferentes níveis de literacia, fluência e capacidades cognitivas ou sensoriais.

## 7.1 Linguagem Simples e Clareza Textual (Plain Language)
- [ ] **Vocabulário:** O texto utiliza palavras simples, comuns e diretas sempre que possível? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] **Tamanho de Frases:** As sentenças são curtas (recomenda-se no máximo 20-25 palavras)? A leitura é fluida sem perder o fôlego? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] **Tamanho de Parágrafos:** Os parágrafos abordam uma única ideia principal e são mantidos curtos (em geral até 4-5 linhas)? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] **Jargões e Expressões Idiomáticas:** Jargões técnicos, gírias e expressões idiomáticas foram evitados, ou devidamente explicados e conceituados quando seu uso foi inevitável? **[WCAG 3.1.3, WCAG 3.1.4, eMAG 1.2, ABNT NBR]**
- [ ] **Voz Ativa:** A estrutura do texto prioriza a voz ativa ao invés da passiva (Ex: "A empresa lançou o produto" em vez de "O produto foi lançado pela empresa")? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] **Abreviações e Siglas:** Na primeira menção a uma sigla ou acrônimo, o significado completo foi escrito (Ex: Universidade de Brasília - UnB)? **[WCAG 3.1.4, eMAG 1.3, ABNT NBR]**
- [ ] **Alinhamento:** Os textos extensos estão alinhados à esquerda (não justificados)? **[WCAG 1.4.8, eMAG 1.1, ABNT NBR]**

## 7.2 Estruturação da Leitura
- [ ] **Uso de Títulos Intermediários:** Textos grandes são divididos utilizando subtítulos e intertítulos claros para facilitar a "leitura dinâmica" (scanning)? **[WCAG 2.4.6, eMAG 1.4, ABNT NBR]**
- [ ] **Listas (Bullets e Numéricas):** Listas são utilizadas sempre que há uma série de três ou mais itens, melhorando a organização visual e a compreensão? **[WCAG 1.3.1, eMAG 1.4, ABNT NBR]**
- [ ] **Destaques Visuais:** O uso de **negrito** é aplicado pontualmente para destacar informações essenciais, evitando textos inteiros destacados ou excesso de uso que possa causar poluição visual? **[WCAG 1.4.8, eMAG 1.5, ABNT NBR]**

## 7.3 Hiperlinks (Links)
- [ ] **Texto Descritivo de Links:** O texto âncora do link descreve de forma precisa e autônoma o destino? (O checklist penaliza expressões genéricas como "Clique Aqui", "Saiba Mais" e "Acesse")? **[WCAG 2.4.4, WCAG 2.4.9, eMAG 1.6, ABNT NBR]**
- [ ] **Contexto Externo:** Quando um link abre um PDF, baixa um arquivo ou redireciona para um site externo em nova aba, isso é avisado ao usuário no texto do próprio link ou usando um ícone com `alt` associado (Ex: "Relatório Financeiro [PDF, 2MB]")? **[WCAG 2.4.4, eMAG 1.7, ABNT NBR]**
- [ ] **Identificação Exclusiva:** Links que levam a diferentes destinos na mesma página possuem textos diferentes? Links que levam ao mesmo lugar possuem o mesmo texto? **[WCAG 3.2.4, eMAG 1.6, ABNT NBR]**

## 7.4 Texto Alternativo para Imagens (Alt Text)
- [ ] **Imagens Informativas:** Há descrição textual concisa, mas completa, equivalente ao que a imagem quer transmitir visualmente? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Texto Limitado:** A descrição tem preferencialmente menos de 125 caracteres e evita redundâncias (como começar dizendo "Imagem de", "Foto mostrando")? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Gráficos e Mapas:** Para dados complexos mostrados em infográficos ou organogramas, existe um texto de suporte longo detalhando todas as informações críticas ali contidas? **[WCAG 1.1.1, eMAG 6.3, ABNT NBR]**

## 7.5 Áudio, Vídeo e Multimídia
- [ ] **Vídeos:** Existe legenda (closed captions) bem sincronizada e sem erros gramaticais/ortográficos acompanhando a fala e os sons vitais? **[WCAG 1.2.2, eMAG 6.5, ABNT NBR]**
- [ ] **Audiodescrição:** Vídeos possuem trilha ou versão com audiodescrição para elementos visuais que não são falados mas são cruciais para a história/contexto? **[WCAG 1.2.3, WCAG 1.2.5, eMAG 6.6, ABNT NBR]**
- [ ] **Transcrição para Áudio:** Podcasts ou arquivos puramente de áudio acompanham uma transcrição de texto integral na mesma página, identificando falantes e efeitos sonoros importantes? **[WCAG 1.2.1, eMAG 6.7, ABNT NBR]**
- [ ] **Interpretação de Libras:** Quando exigido pela legislação (em sites governamentais ou grandes portais), o vídeo possui uma janela com intérprete de Língua Brasileira de Sinais (Libras)? **[WCAG 1.2.6, eMAG 6.8, ABNT NBR]**

## 7.6 Instruções e Orientações
- [ ] **Independência Sensorial:** As instruções para uso da interface ou preenchimento de formulários NÃO dependem exclusivamente de percepção sensorial? (Ex: Evitar frases como "Clique no botão redondo verde à direita" - usar "Clique no botão Confirmar"). **[WCAG 1.3.3, eMAG 1.8, ABNT NBR]**
- [ ] **Instruções Multimodais:** Em tutoriais e manuais, a explicação em texto também está acompanhada de prints visuais com as devidas alternativas textuais? **[WCAG 1.3.3, eMAG 1.8, ABNT NBR]**

## 7.7 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 8. Gestão de Projetos: Checklist Agile/Scrum

Este checklist é voltado para Product Owners (POs), Scrum Masters, Product Managers e Líderes de Projeto. Ele garante que a acessibilidade não seja tratada como um "puxadinho" no final do ciclo, mas sim integrada desde a concepção (Shift-Left) até a entrega contínua.

## 8.1 Planejamento e Orçamento
- [ ] **Alocação de Tempo:** O cronograma e os sprints preveem tempo dedicado especificamente para auditoria de acessibilidade, correção de bugs de interface e testes com usuários reais? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Orçamento para Inclusão:** Existe verba alocada para recrutar pessoas com deficiência (PcD) para testes de usabilidade, pagar intérpretes de Libras ou licenciar tecnologias assistivas para testes internos da equipe? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Priorização no Backlog:** Bugs de acessibilidade são tratados como bugs críticos impeditivos (Showstoppers) em vez de "melhorias futuras" no backlog? **[Guia de Boas Práticas]**

## 8.2 Requisitos e Definition of Done (DoD)
- [ ] **DoD Atualizado:** A Definição de Pronto (Definition of Done) das histórias de usuário e tarefas técnicas inclui a aprovação em critérios mínimos de acessibilidade (ex: "Passa nos testes automatizados do axe-core" ou "É 100% navegável por teclado")? **[WCAG Nível AA, Guia de Boas Práticas]**
- [ ] **Critérios de Aceite Inclusivos:** As User Stories descrevem necessidades de acessibilidade explicitamente em seus critérios de aceite? (Ex: "Dado que sou um usuário de leitor de tela, quando abro o modal, o foco deve ser aprisionado dentro dele"). **[WCAG 2.4.3, eMAG 4.3, ABNT NBR]**
- [ ] **Mapeamento de Restrições Técnicas:** Foram levantadas antecipadamente bibliotecas de código ou componentes visuais de terceiros que já se sabe que são inacessíveis para que sejam descartados da arquitetura? **[WCAG Princípio 4 (Robustez), Guia de Boas Práticas]**

## 8.3 Capacitação da Equipe
- [ ] **Treinamento Básico:** Todos os membros do time (Devs, Designers, QA) receberam algum treinamento ou cartilha básica sobre a WCAG e o modelo de acessibilidade eMAG? **[Guia de Boas Práticas]**
- [ ] **Cultura de Empatia:** A equipe técnica entende o impacto humano da acessibilidade ou ainda enxerga o tema apenas como "cumprimento de lei/compliance"? **[Guia de Boas Práticas]**
- [ ] **Papel do Especialista:** O time tem acesso a um especialista em acessibilidade digital (interno ou consultor) para tirar dúvidas pontuais durante o desenvolvimento, evitando retrabalho? **[Guia de Boas Práticas]**

## 8.4 Ferramentas e Infraestrutura de Qualidade (QA)
- [ ] **Integração Contínua (CI/CD):** O pipeline de entrega inclui testes automatizados de acessibilidade (ex: Lighthouse, axe-core) que quebram a build (bloqueiam o deploy) se a nota cair abaixo do limite estabelecido? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Testes Manuais Inseridos no Processo:** Os analistas de QA possuem roteiros de teste manuais que exigem navegação apenas com teclado, verificação de contraste em ferramentas e uso de leitores de tela básicos (NVDA/VoiceOver)? **[WCAG 2.1.1, WCAG 1.4.3, eMAG 4.1, ABNT NBR]**
- [ ] **Documentação Compartilhada:** O time mantém um Design System ou biblioteca de componentes onde os padrões acessíveis já estão documentados e prontos para reuso seguro? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**

## 8.5 Aquisições e Terceirizações (Procurement)
- [ ] **Cláusulas de Contrato:** Quando o projeto contrata uma agência terceirizada ou software externo (SaaS), o contrato exige comprovação de aderência à NBR ou WCAG nível AA? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Auditoria Externa:** Há previsão de contratação de auditorias externas independentes de acessibilidade antes do lançamento oficial de produtos de alto impacto? **[Guia de Boas Práticas]**

## 8.6 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 9. Heurísticas de Nielsen: Avaliação Heurística Inclusiva

Este checklist adapta as 10 Heurísticas de Usabilidade de Nielsen para o contexto da acessibilidade digital (WCAG/NBR). É utilizado por especialistas de UX e Avaliadores para inspecionar interfaces de forma rápida, identificando violações graves de usabilidade e acessibilidade.

## 9.1 Visibilidade do Estado do Sistema
- [ ] O sistema fornece feedback em áudio ou texto oculto (para leitores de tela) quando uma ação ocorre em tempo real (ex: "Arquivo anexado com sucesso" notificado via `aria-live`)? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] Os estados de carregamento (loaders/spinners) possuem alternativas textuais para que usuários cegos saibam que a tela não travou e ainda está processando? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] Indicadores visuais de foco do teclado informam claramente ao usuário onde ele está na tela a qualquer momento? **[WCAG 2.4.7, eMAG 4.2, ABNT NBR]**

## 9.2 Compatibilidade entre o Sistema e o Mundo Real
- [ ] O vocabulário utilizado na interface é simples, sem jargões complexos de TI, facilitando a compreensão por pessoas com deficiência intelectual ou cognitiva? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] Ícones e imagens representam conceitos do mundo real e são acompanhados de rótulos textuais equivalentes para quem não pode vê-los? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] A ordenação de informações segue convenções lógicas e esperadas universalmente, sem depender de "macetes" para uso? **[WCAG 3.2.3, eMAG 3.4, ABNT NBR]**

## 9.3 Controle e Liberdade do Usuário
- [ ] Os usuários podem pausar, parar ou ocultar animações incessantes, GIFs piscantes ou carrosséis que mudam sozinhos e tiram a atenção de pessoas com TDAH? **[WCAG 2.2.2, eMAG 4.7, ABNT NBR]**
- [ ] Formulários extensos com limites de tempo alertam o usuário antes do tempo expirar e permitem estender o prazo com uma ação simples? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] Se o usuário (cometer um erro motor) clicar no botão errado por engano, a interface oferece um "Desfazer" claro ou pede confirmação em ações destrutivas? **[WCAG 3.3.4, eMAG 3.9, ABNT NBR]**

## 9.4 Consistência e Padrões
- [ ] A navegação principal aparece no mesmo local relativo e na mesma ordem (no código e no visual) em todas as páginas do sistema? **[WCAG 3.2.3, eMAG 3.4, ABNT NBR]**
- [ ] Botões que fazem a mesma coisa (ex: "Enviar") têm o mesmo nome, mesma cor e mesma marcação ARIA por todo o sistema? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**
- [ ] Componentes padronizados do HTML (como `<button>` ou `<select>`) são usados ao invés de `<div>` com scripts forçados, garantindo o comportamento nativo esperado em dispositivos assistivos? **[WCAG 4.1.2, eMAG 2.7, ABNT NBR]**

## 9.5 Prevenção de Erros
- [ ] A interface previne o erro antes dele acontecer, como por exemplo desativar opções inválidas em datas ou oferecer máscaras de preenchimento compreensíveis no código? **[WCAG 3.3.4, eMAG 7.4, ABNT NBR]**
- [ ] Instruções de como preencher campos complexos (ex: "A senha deve ter 8 caracteres") estão visíveis o tempo todo antes e durante a digitação, não dependendo da memória do usuário? **[WCAG 3.3.2, eMAG 7.2, ABNT NBR]**

## 9.6 Reconhecimento em vez de Memorização
- [ ] O usuário não precisa memorizar informações de uma tela para preencher campos em outra, reduzindo a carga cognitiva de todos, especialmente de idosos e usuários neurodivergentes? **[WCAG 3.3.7, eMAG 3.6, ABNT NBR]**
- [ ] Rótulos de formulário (`<label>`) ficam visíveis mesmo depois que o usuário começa a digitar no campo, sem desaparecer (como ocorre com o mau uso do `placeholder`)? **[WCAG 3.3.2, eMAG 7.1, ABNT NBR]**

## 9.7 Flexibilidade e Eficiência de Uso
- [ ] Usuários experientes de leitores de tela podem navegar rapidamente pela página pulando de cabeçalho em cabeçalho (`<h1>`, `<h2>`) porque a hierarquia está semanticamente correta? **[WCAG 1.3.1, WCAG 2.4.6, eMAG 2.4, ABNT NBR]**
- [ ] Existe um botão de "Pular Navegação" ou atalhos de teclado eficientes que evitam que o usuário sem mouse passe 50 vezes pelo menu principal com a tecla `Tab`? **[WCAG 2.4.1, eMAG 4.4, ABNT NBR]**

## 9.8 Estética e Design Minimalista
- [ ] A página é limpa e sem poluição visual excessiva, ajudando pessoas no espectro autista ou com déficit de atenção a se concentrarem na tarefa principal? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] O contraste visual de toda a página obedece ao mínimo da WCAG (4.5:1), eliminando tons de cinza claro que são "estéticos", mas ilegíveis para pessoas com baixa visão? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**

## 9.9 Ajude os Usuários a Reconhecer, Diagnosticar e Recuperar-se de Erros
- [ ] Quando um formulário falha, a mensagem de erro é explícita sobre O QUE falhou e COMO consertar, escrita em texto claro (e não apenas pintando o campo de vermelho)? **[WCAG 3.3.1, WCAG 3.3.3, eMAG 7.4, ABNT NBR]**
- [ ] O foco do sistema é movido automaticamente para o sumário de erros no topo da página ou para o primeiro campo inválido para que o usuário não se perca? **[WCAG 2.4.3, eMAG 7.4, ABNT NBR]**

## 9.10 Ajuda e Documentação
- [ ] Seções de Ajuda, FAQs ou Tutoriais estão fáceis de encontrar e também estão totalmente acessíveis por teclado e leitores de tela? **[WCAG 2.4.5, WCAG 3.3.5, eMAG 3.6, ABNT NBR]**
- [ ] Existe um canal de suporte claro caso o usuário não consiga avançar por causa de uma barreira de acessibilidade (ex: e-mail de suporte ou chat)? **[Guia de Boas Práticas, ABNT NBR]**

## 9.11 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).


---

# 10. Teste de Usabilidade: Roteiro de Teste — Castelo Forte

> Documento de apoio para a condução do teste com o usuário (item 3 da proposta de trabalho) e para o entregável **"Roteiro de teste completo"** (apêndice). Os campos entre colchetes devem ser preenchidos pelo grupo antes da aplicação.

**Site avaliado:** [casteloforte.com.br](https://casteloforte.com.br) — home center / loja de materiais de construção, decoração e utilidades, com 10 lojas físicas no DF e entrega para o Brasil.

---

## 10.1 Gravação da Sessão

- **Vídeo da Sessão no YouTube:** [Assista ao Teste de Usabilidade — Castelo Forte](https://www.youtube.com/watch?v=YiTDvIgRyv0)

---

## 10.2 Informações Gerais do Teste

- **Site avaliado:** casteloforte.com.br
- **Data e horário do teste:** [preencher]
- **Local / modalidade:** [presencial / remoto, com gravação de tela e áudio]
- **Moderador(a) responsável:** [nome]
- **Observador(a) responsável pelas anotações:** [nome]
- **Duração estimada da sessão:** 25 a 35 minutos (briefing + tarefas + SUS + entrevista)

---

## 10.3 Perfil do Usuário-Alvo

Descrição sucinta do público real do produto, conforme orienta Krug (2014). Perfil ajustado ao participante efetivamente selecionado pelo grupo para este teste.

- **Idade:** 20 anos
- **Perfil:** Estudante, sem muita experiência prática com reformas residenciais — provavelmente nunca pesquisou ou comprou materiais de construção sozinho(a) antes.
- **Familiaridade tecnológica:** Usa internet e smartphone no dia a dia, mas quase não faz compras online em geral e nunca comprou materiais de construção pela internet — esta é, na prática, a primeira experiência com um site desse segmento.
- **Contexto de uso:** Acessa o site sem uma necessidade real e urgente de reforma, apenas para realizar as tarefas propostas no teste — por isso é esperado que vocabulário técnico do setor (ex.: "rejunte", "sifão", "3/4") possa gerar mais dúvidas do que geraria em um usuário experiente.
- **Critérios de exclusão:** Não pode ser colega da disciplina nem ter participado da elaboração deste roteiro.

> ℹ️ **Por que este perfil?**
> Por reunir baixa familiaridade tanto com o domínio (reforma) quanto com compras online no setor, este participante tende a expor problemas de **aprendizabilidade** e de **clareza de vocabulário** que um usuário mais experiente não notaria — um perfil valioso para o teste.
>
> **Recomendação da proposta:** Se possível, repetir o teste (ou complementar) com um participante com deficiência visual, motora, auditiva ou cognitiva, para colocar em prática os conceitos de acessibilidade digital.

---

## 10.4 Script de Condução da Sessão

Script completo do que o moderador deve dizer em cada etapa da sessão. As falas entre aspas são sugestões a serem ditas quase literalmente; os trechos entre colchetes são orientações de condução e **não devem ser lidos em voz alta**.

### 10.4.1 Abertura e Recepção

Ler antes de iniciar qualquer tarefa, sem revelar os objetivos específicos de cada uma nem dar dicas sobre a interface:

[Iniciar a gravação de tela e áudio, se ainda não estiver gravando. Esta orientação para verbalização do pensamento segue a técnica **think-aloud** descrita por Nielsen (1993).]

---

### 10.4.2 Antes de Cada Tarefa

Repetir esta transição antes de ler o cenário de cada uma das 5 tarefas (seção 10.5):

### 10.4.3 Durante a Tarefa — Intervenções Neutras

O moderador deve interferir o mínimo possível. Use estas falas apenas quando necessário, **sem dar dicas** sobre onde clicar ou o que fazer:

- **Se o participante ficar em silêncio por alguns segundos:** *"O que você está pensando agora?"* ou *"Me conta o que você está vendo."*
- **Se pedir confirmação** ("Será que é aqui?"): *"O que você acha? Faz do jeito que você acha que está certo."*
- **Se pedir ajuda direta** ("Como eu faço isso?"): *"Eu não posso te dar dicas agora, mas tenta do jeito que você faria se estivesse sozinho(a) em casa."*
- **Se o participante comentar ou reclamar espontaneamente:** Deixar falar sem interromper e anotar — são os comentários mais valiosos para o relatório.

---

### 10.4.4 Encerramento de Cada Tarefa

> 💬 **Fala do moderador:**
> *"Ok, parando por aqui. Você sente que conseguiu fazer o que eu pedi?"*

[Parar a cronometragem e registrar o resultado: **sucesso completo**, **sucesso parcial** ou **falha** — ver tabela da seção 10.5. Em seguida, fazer as 3 perguntas rápidas da seção 10.6.]

Depois das perguntas rápidas, retomar com a transição da seção 10.4.2 para a tarefa seguinte.

---

### 10.4.5 Encerramento das Tarefas → Questionário SUS

Ao final da quinta tarefa:

> 💬 **Fala do moderador:**
> *"Terminamos as cinco situações! Agora eu vou te pedir pra responder um questionário rápido sobre como foi usar o site de forma geral — são 10 frases curtas, e pra cada uma você marca o quanto concorda, de 1 a 5."*

---

### 10.4.6 Transição para a Entrevista Final

> 💬 **Fala do moderador:**
> *"Pra fechar, eu queria te fazer mais algumas perguntas rápidas sobre a experiência, pode ser?"*

---

### 10.4.7 Encerramento da Sessão

> 💬 **Fala do moderador:**
> *"Muito obrigado(a) pela sua participação, isso vai nos ajudar bastante! Só lembrando que tudo que você disse e fez aqui vai ficar anônimo no nosso relatório, e você pode pedir pra gente excluir os seus dados a qualquer momento, é só entrar em contato pelo e-mail que está no termo. Alguma pergunta antes de eu encerrar?"*

---

## 10.5 Tarefas do Teste de Usabilidade

As tarefas a seguir são formuladas como **cenários de uso** (não como instruções literais da interface), conforme item 3.3 da proposta. Cronometrar cada tarefa do início ao desfecho e registrar o resultado.

| Nº | Cenário da tarefa (ler ao participante) | Tempo (s) | Resultado | Nº de erros |
|----|----------------------------------------|-----------|-----------|-------------|
| 1 | Você está pintando a sala da sua casa e quer comprar uma lata de tinta acrílica fosca para parede interna, gastando no máximo R$ 150. Encontre uma opção adequada no site. | | | |
| 2 | Você comprou uma TV nova para assistir aos jogos da Copa do Mundo e quer pendurá-la na parede da sala, com um bom sinal de recepção. Encontre um suporte de parede para a TV e uma antena adequados no site. | | | |
| 3 | Você está reformando a cozinha e escolheu uma torneira no site, mas mora fora do Distrito Federal. Descubra como funciona a entrega para a sua região e quanto tempo ela leva. | | | |
| 4 | Você encontrou um produto interessante, mas ainda não vai comprá-lo agora. Salve-o de alguma forma para decidir com calma depois. | | | |
| 5 | Você tem uma dúvida sobre um produto e prefere falar diretamente com alguém da loja antes de comprar. Encontre uma forma de entrar em contato com a Castelo Forte. | | | |

> 💡 **Observação:**
> Caso o grupo opte por outro conjunto de tarefas (ex.: finalizar uma compra completa, usar um filtro de busca específico, comparar dois produtos), substituam os cenários acima mantendo o formato de **tarefa contextualizada**.

---

## 10.6 Perguntas Rápidas Pós-Tarefa

Após cada tarefa, antes de seguir para a próxima, perguntar:

- [ ] Numa escala de **1** (muito difícil) a **5** (muito fácil), quão fácil foi realizar essa tarefa?
- [ ] Você teve alguma **dúvida ou dificuldade** ao longo da tarefa? Qual?
- [ ] Havia algo que você **esperava encontrar e não encontrou**?

---

## 10.7 Roteiro de Entrevista Pós-Teste

Entrevista semiestruturada conduzida após a conclusão de todas as tarefas e do preenchimento do questionário SUS (seção 10.8). O objetivo é captar impressões gerais, achados de acessibilidade e sugestões que não aparecem nos números.

### 10.7.1 Impressões Gerais

- De forma geral, como foi para você usar o site da Castelo Forte hoje?
- O que você **mais gostou** na experiência?
- O que **mais te incomodou ou dificultou** durante o uso?

### 10.7.2 Comparação com Expectativas

- Algum momento o site se comportou de um jeito **diferente do que você esperava**? Qual?
- Você já comprou em outro site de material de construção ou home center? Como foi essa experiência em comparação com a de hoje?

### 10.7.3 Confiança e Clareza

- Em algum momento você ficou em dúvida se tinha **feito a coisa certa** (ex.: se o produto foi salvo, se a busca realmente trouxe o que você queria)? Conte mais.
- As informações de **preço, prazo de entrega e formas de contato** estavam claras para você?

### 10.7.4 Acessibilidade

*(Aplicar quando pertinente ao perfil do participante.)*

- Você sentiu alguma dificuldade relacionada a **tamanho de texto, contraste de cores, uso do teclado ou de leitor de tela**?
- Havia algo no site que dependia **só de cor, imagem ou posição na tela** para ser entendido?

### 10.7.5 Fechamento

- Se você pudesse **mudar uma única coisa** no site, o que seria?
- Há algo mais que você queira comentar sobre a experiência de hoje?

> 📌 **Nota:**
> Agradecer a participação, reforçar o **anonimato dos dados** e relembrar o direito de solicitar a exclusão das informações a qualquer momento, conforme combinado no TCLE.

---

## 10.8 Questionário SUS — System Usability Scale

Entregar ao participante após a conclusão de todas as tarefas. Marcar uma opção por linha (1 = Discordo totalmente · 5 = Concordo totalmente).

| # | Afirmação | 1 | 2 | 3 | 4 | 5 |
|---|-----------|---|---|---|---|---|
| 1 | Eu acho que gostaria de usar este site com frequência. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 2 | Achei o site desnecessariamente complexo. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 3 | Achei o site fácil de usar. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 4 | Acho que precisaria de apoio técnico para conseguir usar este site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 5 | Achei que as várias funções deste site estavam bem integradas. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 6 | Achei que havia muita inconsistência neste site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 | Imagino que a maioria das pessoas aprenderia a usar este site rapidamente. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 8 | Achei o site muito complicado de usar. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 9 | Senti-me muito confiante usando o site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 | Precisei aprender várias coisas novas antes de conseguir usar este site. | ☐ | ☐ | ☐ | ☐ | ☐ |

> ℹ️ **Cálculo do escore SUS:**
> - **Itens ímpares** (1, 3, 5, 7, 9): pontuação = valor marcado − 1
> - **Itens pares** (2, 4, 6, 8, 10): pontuação = 5 − valor marcado
> - Somar os 10 valores e **multiplicar por 2,5** → escore final de 0 a 100.

---

## 10.9 Checklist de Observação de Acessibilidade (WCAG)

Preencher pelo **observador durante a sessão**, para alimentar os "achados de acessibilidade WCAG" do relatório final.

- [ ] Contraste de texto e fundo é suficiente em todas as telas percorridas?
- [ ] Imagens de produtos e ícones possuem texto alternativo perceptível (ex.: ao usar leitor de tela)?
- [ ] É possível navegar pelos elementos principais (menu, busca, carrinho) usando **apenas o teclado**?
- [ ] Os campos de formulário (busca, cadastro, CEP) têm rótulos claros e mensagens de erro compreensíveis?
- [ ] O tamanho da fonte permite zoom/ampliação sem quebrar o layout?
- [ ] Há elementos (botões, links) pequenos demais ou muito próximos, difíceis de tocar/clicar com precisão?
- **Outras observações de acessibilidade:** ______________________________________

---

## 10.10 Planilha de Registro de Métricas

Usar esta tabela como referência para alimentar a planilha de tabulação (entregável 5). Repetir uma linha por tarefa e por participante.

| Nº | Tarefa | Tempo (s) | Resultado | Nº de erros |
|----|--------|-----------|-----------|-------------|
| 1  | Tarefa 1 — Tinta acrílica fosca ≤ R$ 150 | | | |
| 2  | Tarefa 2 — Suporte de TV + antena | | | |
| 3  | Tarefa 3 — Entrega fora do DF | | | |
| 4  | Tarefa 4 — Salvar produto | | | |
| 5  | Tarefa 5 — Contato com a loja | | | |

> 💡 **Métricas derivadas:**
> - **Taxa de sucesso** = (nº de tarefas com sucesso completo ÷ total de tarefas) × 100
> - **Tempo médio por tarefa** = soma dos tempos ÷ nº de tarefas

---

## 10.11 Referências

- **KRUG, Steve.** *Don't Make Me Think, Revisited.* New Riders, 2014.
- **NIELSEN, Jakob.** *Usability Engineering.* Academic Press, 1993.
- **BROOKE, John.** SUS: A 'Quick and Dirty' Usability Scale. In: *Usability Evaluation in Industry.* Taylor & Francis, 1996.

---

---

# 11. Plugin & Ferramenta Híbrida v3.0: Avaliador Heurístico Híbrido

O **Avaliador Heurístico Híbrido** é uma extensão de navegador desenvolvida sob medida para conduzir auditorias instantâneas de Experiência do Usuário (UX), Acessibilidade Digital (A11y) e Usabilidade. A ferramenta conecta inspeções técnicas automatizadas às **10 Heurísticas de Usabilidade de Jakob Nielsen** e às metodologias centrais do design centrado no usuário.

Atuando com o novo motor de **Pré-avaliação Automática Inteligente (v3.0)**, o plugin entrega o resultado o mais rápido possível:
1. **Varredura Instantânea 360°:** Inspeciona o DOM em milissegundos e avalia automaticamente itens de Acessibilidade (WCAG 2.2 / ABNT NBR 17060), Heurísticas de UX e indícios de Jornadas/Service Blueprint.
2. **Pré-preenchimento Automático:** O plugin atribui instantaneamente o Status (`✅ Adequado`, `⚠️ Atenção` ou `❌ Falha Crítica`) e gera a **Evidência descritiva** para cada critério sem que o usuário precise marcar checks manualmente. O avaliador apenas revisa o diagnóstico pronto ou complementa observações específicas antes de exportar.

---

## 11.1 Integração com o Ecossistema de UX e IHC

A avaliação de uma interface não se limita a checar tags de código ou contraste; ela deve refletir a experiência de uso real. O relatório gerado pelo nosso plugin foi projetado para alimentar diretamente os principais artefatos de UX e Design do seu projeto:

*   **Personas & Jornadas Inclusivas:** As falhas críticas encontradas na auditoria ajudam a validar ou atualizar as barreiras (*pain points*) enfrentadas por suas personas (ex: como um usuário que depende de navegação por teclado ou leitor de tela interage com o fluxo).
*   **Service Blueprint & Canvas:** Os erros de usabilidade apontados na camada de *Frontstage* (pontos de contato visíveis com o cliente) evidenciam gargalos no atendimento ou na comunicação do serviço.
*   **Design Empático:** A ferramenta guia o avaliador a ir além da conformidade técnica, incentivando o teste de esforço cognitivo, flexibilidade de tempo e prevenção de erros.
*   **Teste de Usabilidade:** A auditoria heurística com o plugin serve como excelente pré-teste para limpar erros graves de interface antes de levar o sistema para sessões de observação com usuários reais.

> 💡 **Dica de Consulta:** Para aprofundar em qualquer um destes métodos e ver exemplos práticos, consulte a respectiva seção em nosso portal interativo: **https://unb-ihc.github.io/IHC_2026.1_Grupo9/**

---

## 11.2 Funcionalidades & Mapeamento Normativo

O scanner automático inspeciona o DOM em tempo real e correlaciona as descobertas com as normas mais modernas de acessibilidade e engenharia web:

| Verificação Automática do Plugin | Critério Normativo Atendido | Objetivo de UX & Acessibilidade |
| :--- | :--- | :--- |
| **Definição de Idioma (`<html lang>`)** | **WCAG 2.2** (3.1.1) / **eMAG 3.1** / **ABNT NBR 17060** | Garantir que leitores de tela e tradutores automáticos pronunciem e interpretem o texto com o sotaque correto. |
| **Imagens sem atributo `alt`** | **WCAG 2.2** (1.1.1) / **eMAG 3.1** (6.1) / **ABNT NBR 17060** | Assegurar equivalência textual para usuários com deficiência visual ou em conexões lentas. |
| **Inputs e Formulários sem `<label>`** | **WCAG 2.2** (3.3.2) / **eMAG 3.1** (7.1) / **ABNT NBR 17060** | Permitir que o usuário saiba exatamente o que preencher em cada campo ao navegar por tabulação ou voz. |
| **Presença de Título (`<title>`) e `<h1>`** | **WCAG 2.2** (2.4.2) / **eMAG 3.1** (2.3) / **ABNT NBR 17060** | Orientar a navegação e estabelecer uma hierarquia de informação clara e previsível. |
| **Links mortos ou sem texto descritivo** | **WCAG 2.2** (2.4.4) / **Heurística 2 (Nielsen)** | Evitar desorientação e garantir que o propósito de cada link seja compreendido fora de contexto. |

> ⚠️ **IMPORTANTE: O Limite dos Testes Automáticos**
> Ferramentas automatizadas capturam apenas **30% a 40%** das barreiras de acessibilidade (erros sintáticos e estruturais). Os outros **60%** dependem fundamentalmente da avaliação manual, do julgamento heurístico do avaliador e de testes práticos de navegação por teclado e leitores de tela.

---

## 11.3 Tecnologias Utilizadas

*   **HTML5 & CSS3:** Estruturação semântica e estilização limpa da interface do popup.
*   **JavaScript (Vanilla):** Motor de varredura de DOM de alta performance, manipulação de estado do checklist e gerador de arquivos em memória.
*   **Manifest V3:** Padrão arquitetural mais recente, seguro e otimizado para extensões em navegadores Chromium.

---

## 11.4 Como instalar e usar (Modo do Desenvolvedor)

Como esta extensão é distribuída junto ao repositório do projeto, a instalação é feita localmente:

1. Obtenha os arquivos da pasta `plugin/` (`manifest.json`, `popup.html` e `popup.js`) acessando o nosso repositório ou através da documentação do nosso GitHub Pages (**https://unb-ihc.github.io/IHC_2026.1_Grupo9/**).
2. No seu navegador (Chrome, Edge, Brave ou Opera), acesse `chrome://extensions/` ou `edge://extensions/`.
3. Ative a chave **"Modo do desenvolvedor"** no canto superior direito.
4. Clique em **"Carregar sem compactação"** (Load unpacked) e selecione a pasta `plugin/`.
5. Fixe a extensão na barra superior para acesso rápido durante suas inspeções.

---

## 11.5 Estrutura do Relatório Gerado (.txt)

Ao abrir a extensão, ela realiza a varredura instantânea 360° e preenche todas as notas em tempo real. Ao clicar em **"Gerar Relatório Completo"**, o plugin compila o resumo executivo e a avaliação detalhada dos 18 critérios em um arquivo padronizado (`auditoria_CheckAAA_YYYY-MM-DD.txt`).

Para não sobrecarregar esta página com a leitura extensa do arquivo gerado, separamos a demonstração integral dos 18 itens inspecionados em uma seção dedicada:

👉 **Consulte o Template Completo do Relatório de Auditoria** acessando a aba *Avaliação, Usabilidade & Ferramentas > Template do Relatório* em nosso site oficial (**https://unb-ihc.github.io/IHC_2026.1_Grupo9/relatorio_template/**) para visualizar o formato exato de saída de cada check com explicação e base normativa.

---

## 11.6 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C. Publicada em Outubro de 2023. Define os critérios de sucesso internacionais para acessibilidade web e móvel nos níveis A, AA e AAA.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*. Norma técnica brasileira que estabelece os requisitos para tornar interfaces digitais acessíveis no contexto nacional.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 15206:2004 - Ergonomia da Interação Humano-Sistema*. Diretrizes de usabilidade e ergonomia em interfaces digitais.
*   **Governo Federal do Brasil.** *eMAG - Modelo de Acessibilidade em Governo Eletrônico (Versão 3.1)*. Guia de boas práticas alinhado à legislação brasileira de inclusão digital.
*   **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. Fundamentos para avaliação heurística e design de interfaces focadas no usuário.


---

---

# 12. Template do Relatório de Auditoria Instantânea

Este documento apresenta a estrutura completa e o template integral exportado pela extensão **CheckAAA (Avaliador Heurístico Híbrido v3.0)**. 

Ao finalizar ou revisar as notas na extensão e clicar no botão **"📥 Gerar Relatório Completo (.txt)"**, o sistema compila automaticamente os 18 critérios avaliados (Acessibilidade, Heurísticas de Nielsen, Personas e Service Blueprint) no seguinte formato padronizado:

```text
====================================================================
        RELATÓRIO DE AUDITORIA INSTANTÂNEA - CheckAAA               
  Acessibilidade (WCAG 2.2 / ABNT), UX, Usabilidade e Jornadas      
====================================================================

[ DADOS DA AUDITORIA ]
Data e Hora : 28/06/2026 às 15:45:00
Página      : Portal do Cidadão - Acesso
URL         : https://exemplo-sistema.com.br/login

[ RESUMO EXECUTIVO ]
Total Avaliado : 18 critérios
✅ Adequados   : 14
⚠️ Atenção     : 2
❌ Falhas      : 2

====================================================================
                  AVALIAÇÃO DETALHADA POR CRITÉRIO                  
====================================================================

[ ITEM 1 ] IDIOMA DA PÁGINA (<HTML LANG>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (3.1.1) • eMAG 3.1 • ABNT NBR 17060
O que foi avaliado: Define a pronúncia correta para leitores de tela usados por pessoas com deficiência visual.
Resultado         : ✅ Adequado
Explicação        : Idioma detectado automaticamente: "pt-BR".
--------------------------------------------------------------------

[ ITEM 2 ] TÍTULO DA PÁGINA (<TITLE>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (2.4.2) • eMAG 2.3 • ABNT NBR 17060
O que foi avaliado: O título deve ser único e descritivo para orientar a navegação e o contexto na aba do navegador.
Resultado         : ✅ Adequado
Explicação        : Título detectado: "Portal do Cidadão - Acesso".
--------------------------------------------------------------------

[ ITEM 3 ] HIERARQUIA DE CABEÇALHOS (<h1>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.3.1) • eMAG 2.4 • ABNT NBR 17060
O que foi avaliado: A página deve possuir exatamente um <h1> principal e manter ordem lógica sem saltos bruscos.
Resultado         : ✅ Adequado
Explicação        : Estrutura de cabeçalhos única e hierarquia em ordem lógica.
--------------------------------------------------------------------

[ ITEM 4 ] MARCOS SEMÂNTICOS (LANDMARKS)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.3.1) • eMAG 2.5 • ABNT NBR 17060
O que foi avaliado: Uso de tags semânticas (<header>, <main>, <nav>, <footer>) para navegação rápida por tecnologias assistivas.
Resultado         : ✅ Adequado
Explicação        : Marcos semânticos detectados perfeitamente: <header>, <main>, <nav>, <footer>.
--------------------------------------------------------------------

[ ITEM 5 ] ALTERNATIVAS TEXTUAIS EM IMAGENS (ALT)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.1.1) • eMAG 6.1 • ABNT NBR 17060
O que foi avaliado: Imagens informativas exigem descrição textual; imagens decorativas devem ter alt vazio (alt="").
Resultado         : ❌ Falha Crítica
Explicação        : Encontradas 2 imagem(ns) (de 8) sem o atributo 'alt'.
--------------------------------------------------------------------

[ ITEM 6 ] RÓTULOS DE FORMULÁRIOS (<LABEL>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (3.3.2) • eMAG 7.1 • ABNT NBR 17060
O que foi avaliado: Todo campo interativo deve ter um rótulo explícito associado programaticamente.
Resultado         : ✅ Adequado
Explicação        : Todos os 4 campos possuem rótulos adequados.
--------------------------------------------------------------------

[ ITEM 7 ] VISIBILIDADE DO STATUS DO SISTEMA
Categoria         : UX / Heurística 1
Base Normativa    : Nielsen H1 • Feedback Contínuo
O que foi avaliado: O sistema mantém o usuário informado sobre o que está acontecendo (ex: spinners, barras de progresso).
Resultado         : ✅ Adequado
Explicação        : Indicadores de progresso ou carregamento detectados na estrutura da interface.
--------------------------------------------------------------------

[ ITEM 8 ] COMPATIBILIDADE COM O MUNDO REAL
Categoria         : UX / Heurística 2
Base Normativa    : Nielsen H2 • Linguagem Simples
O que foi avaliado: A interface fala a linguagem do usuário, sem expor códigos de erro técnicos bruto (ex: 'undefined', 'NaN').
Resultado         : ❌ Falha Crítica
Explicação        : Vazamento de termos técnicos de erro na interface: "erro 500, nullpointer".
--------------------------------------------------------------------

[ ITEM 9 ] CONTROLE E LIBERDADE DO USUÁRIO
Categoria         : UX / Heurística 3
Base Normativa    : Nielsen H3 • Saídas de Emergência
O que foi avaliado: Presença de botões claros de Voltar, Cancelar ou Fechar para reverter ações indesejadas.
Resultado         : ✅ Adequado
Explicação        : Botões ou links de retorno/cancelar/início identificados na navegação.
--------------------------------------------------------------------

[ ITEM 10 ] CONSISTÊNCIA E PADRÕES
Categoria         : UX / Heurística 4
Base Normativa    : Nielsen H4 • Padronização Visual
O que foi avaliado: Elementos interativos (botões e links) seguem convenções e estilos consistentes em toda a tela.
Resultado         : ✅ Adequado
Explicação        : Elementos de interação mantêm marcação semântica padronizada de botões e links.
--------------------------------------------------------------------

[ ITEM 11 ] PREVENÇÃO DE ERROS
Categoria         : UX / Heurística 5
Base Normativa    : Nielsen H5 • WCAG 2.2 (3.3.1)
O que foi avaliado: Campos utilizam atributos de validação, restrição de formato ou máscaras antes da submissão.
Resultado         : ✅ Adequado
Explicação        : Atributos preventivos de validação detectados nos campos do formulário.
--------------------------------------------------------------------

[ ITEM 12 ] RECONHECIMENTO VS. MEMORIZAÇÃO
Categoria         : UX / Heurística 6
Base Normativa    : Nielsen H6 • Carga Cognitiva
O que foi avaliado: Redução do esforço de memória usando autocomplete e instruções visíveis.
Resultado         : ⚠️ Atenção
Explicação        : Sugere-se adicionar o atributo 'autocomplete' nos campos para reduzir esforço de memorização.
--------------------------------------------------------------------

[ ITEM 13 ] FLEXIBILIDADE E EFICIÊNCIA DE USO
Categoria         : UX / Heurística 7
Base Normativa    : Nielsen H7 • Aceleradores
O que foi avaliado: Presença de atalhos ou links de 'Pular para o conteúdo principal' para otimizar a navegação.
Resultado         : ✅ Adequado
Explicação        : Atalho 'Pular para o conteúdo principal' encontrado para acelerar navegação por teclado.
--------------------------------------------------------------------

[ ITEM 14 ] ESTÉTICA E DESIGN MINIMALISTA (RESPONSIVIDADE)
Categoria         : UX / Heurística 8
Base Normativa    : Nielsen H8 • Meta Viewport • ABNT NBR 15206
O que foi avaliado: Design limpo e adaptável a dispositivos móveis (presença de meta viewport responsiva).
Resultado         : ✅ Adequado
Explicação        : Meta viewport presente. Design adaptável e minimalista para telas menores.
--------------------------------------------------------------------

[ ITEM 15 ] AJUDAR NA RECUPERAÇÃO DE ERROS
Categoria         : UX / Heurística 9
Base Normativa    : Nielsen H9 • ARIA Alerts
O que foi avaliado: Mensagens de erro são construtivas e utilizam regiões de alerta (role='alert') para notificação.
Resultado         : ✅ Adequado
Explicação        : Regiões acessíveis de notificação de erro (role='alert' ou aria-live) estão configuradas.
--------------------------------------------------------------------

[ ITEM 16 ] AJUDA E DOCUMENTAÇÃO
Categoria         : UX / Heurística 10
Base Normativa    : Nielsen H10 • Suporte ao Usuário
O que foi avaliado: Fácil acesso a canais de suporte, perguntas frequentes (FAQ), centrais de ajuda ou contato.
Resultado         : ✅ Adequado
Explicação        : Canais de suporte, FAQ ou contato facilmente localizados na interface.
--------------------------------------------------------------------

[ ITEM 17 ] ADERÊNCIA A TECNOLOGIAS ASSISTIVAS (PERSONAS)
Categoria         : Personas & Jornada
Base Normativa    : Checklist de Personas • WCAG 4.1.2
O que foi avaliado: Verifica se todos os botões e controles possuem rótulo de voz para personas que utilizam leitores de tela.
Resultado         : ✅ Adequado
Explicação        : Controles interativos amigáveis para personas com deficiência visual (todos rotulados).
--------------------------------------------------------------------

[ ITEM 18 ] CANAIS ALTERNATIVOS E EVIDÊNCIAS (FRONTSTAGE)
Categoria         : Service Blueprint
Base Normativa    : Service Blueprint • Atendimento Equitativo
O que foi avaliado: A jornada oferece pontos de contato evidentes para suporte humano ou canais alternativos em caso de barreiras.
Resultado         : ⚠️ Atenção
Explicação        : Recomendação do Blueprint: adicionar ponto de contato evidente em caso de falha no autoatendimento.
--------------------------------------------------------------------

Fim do relatório emitido pela extensão CheckAAA.
```

---

## 12.1 Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C. Outubro de 2023.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*.
*   **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.


---

# 13. Estudo de Caso: Auditoria Real do Site "Castelo Forte"

> ℹ️ **Nota:** Para otimizar a leitura deste guia principal e evitar redundâncias, o relatório completo da auditoria automatizada e heurística aplicada ao e-commerce **Castelo Forte** (incluindo painel geral de conformidade, diagnóstico detalhado por critério e análise do Service Blueprint) foi desmembrado e estruturado em um documento dedicado.
> 
> 📄 **Acesse o documento completo:** O relatório integral desta auditoria (com painel de conformidade, diagnóstico detalhado por critério e análise do Service Blueprint) está disponível em nosso portal na aba *Avaliação, Usabilidade & Ferramentas > Estudo de Caso (Castelo Forte)* através do endereço: **https://unb-ihc.github.io/IHC_2026.1_Grupo9/relatorio_castelo_forte/**

---

# 14. Entrevista: Think Aloud

> Técnica de verbalização do pensamento utilizada durante o teste de usabilidade com o site [casteloforte.com.br](https://casteloforte.com.br).

---

## 14.1 Gravação da Sessão

- **Vídeo da Sessão no YouTube:** [Assista ao Teste de Usabilidade — Castelo Forte](https://www.youtube.com/watch?v=YiTDvIgRyv0)

---

## 14.2 Informações Gerais do Teste

- **Site avaliado:** casteloforte.com.br
- **Data e horário do teste:** [preencher]
- **Local / modalidade:** [presencial / remoto, com gravação de tela e áudio]
- **Moderador(a) responsável:** [nome]
- **Observador(a) responsável pelas anotações:** [nome]
- **Duração estimada da sessão:** 25 a 35 minutos (briefing + tarefas + SUS + entrevista)

---

## 14.3 Perfil do Usuário-Alvo

Descrição sucinta do público real do produto, conforme orienta Krug (2014). Perfil ajustado ao participante efetivamente selecionado pelo grupo para este teste.

- **Idade:** 20 anos
- **Perfil:** Estudante, sem muita experiência prática com reformas residenciais — provavelmente nunca pesquisou ou comprou materiais de construção sozinho(a) antes.
- **Familiaridade tecnológica:** Usa internet e smartphone no dia a dia, mas quase não faz compras online em geral e nunca comprou materiais de construção pela internet — esta é, na prática, a primeira experiência com um site desse segmento.
- **Contexto de uso:** Acessa o site sem uma necessidade real e urgente de reforma, apenas para realizar as tarefas propostas no teste — por isso é esperado que vocabulário técnico do setor (ex.: "rejunte", "sifão", "3/4") possa gerar mais dúvidas do que geraria em um usuário experiente.
- **Critérios de exclusão:** Não pode ser colega da disciplina nem ter participado da elaboração deste roteiro.

> ℹ️ **Por que este perfil?**
> Por reunir baixa familiaridade tanto com o domínio (reforma) quanto com compras online no setor, este participante tende a expor problemas de **aprendizabilidade** e de **clareza de vocabulário** que um usuário mais experiente não notaria — um perfil valioso para o teste.
>
> **Recomendação da proposta:** Se possível, repetir o teste (ou complementar) com um participante com deficiência visual, motora, auditiva ou cognitiva, para colocar em prática os conceitos de acessibilidade digital.

---

## 14.4 Script de Condução da Sessão

Script completo do que o moderador deve dizer em cada etapa da sessão. As falas entre aspas são sugestões a serem ditas quase literalmente; os trechos entre colchetes são orientações de condução e **não devem ser lidos em voz alta**.

### 14.4.1 Abertura e Recepção

Ler antes de iniciar qualquer tarefa, sem revelar os objetivos específicos de cada uma nem dar dicas sobre a interface:

[Iniciar a gravação de tela e áudio, se ainda não estiver gravando. Esta orientação para verbalização do pensamento segue a técnica **think-aloud** descrita por Nielsen (1993).]

---

### 14.4.2 Antes de Cada Tarefa

Repetir esta transição antes de ler o cenário de cada uma das 5 tarefas (seção 14.5):

### 14.4.3 Durante a Tarefa — Intervenções Neutras

O moderador deve interferir o mínimo possível. Use estas falas apenas quando necessário, **sem dar dicas** sobre onde clicar ou o que fazer:

- **Se o participante ficar em silêncio por alguns segundos:** *"O que você está pensando agora?"* ou *"Me conta o que você está vendo."*
- **Se pedir confirmação** ("Será que é aqui?"): *"O que você acha? Faz do jeito que você acha que está certo."*
- **Se pedir ajuda direta** ("Como eu faço isso?"): *"Eu não posso te dar dicas agora, mas tenta do jeito que você faria se estivesse sozinho(a) em casa."*
- **Se o participante comentar ou reclamar espontaneamente:** Deixar falar sem interromper e anotar — são os comentários mais valiosos para o relatório.

---

### 14.4.4 Encerramento de Cada Tarefa

> 💬 **Fala do moderador:**
> *"Ok, parando por aqui. Você sente que conseguiu fazer o que eu pedi?"*

[Parar a cronometragem e registrar o resultado: **sucesso completo**, **sucesso parcial** ou **falha** — ver tabela da seção 14.5. Em seguida, fazer as 3 perguntas rápidas da seção 14.6.]

Depois das perguntas rápidas, retomar com a transição da seção 14.4.2 para a tarefa seguinte.

---

### 14.4.5 Encerramento das Tarefas → Questionário SUS

Ao final da quinta tarefa:

> 💬 **Fala do moderador:**
> *"Terminamos as cinco situações! Agora eu vou te pedir pra responder um questionário rápido sobre como foi usar o site de forma geral — são 10 frases curtas, e pra cada uma você marca o quanto concorda, de 1 a 5."*

---

### 14.4.6 Transição para a Entrevista Final

> 💬 **Fala do moderador:**
> *"Pra fechar, eu queria te fazer mais algumas perguntas rápidas sobre a experiência, pode ser?"*

---

### 14.4.7 Encerramento da Sessão

> 💬 **Fala do moderador:**
> *"Muito obrigado(a) pela sua participação, isso vai nos ajudar bastante! Só lembrando que tudo que você disse e fez aqui vai ficar anônimo no nosso relatório, e você pode pedir pra gente excluir os seus dados a qualquer momento, é só entrar em contato pelo e-mail que está no termo. Alguma pergunta antes de eu encerrar?"*

---

## 14.5 Tarefas do Teste de Usabilidade

As tarefas a seguir são formuladas como **cenários de uso** (não como instruções literais da interface), conforme item 3.3 da proposta. Cronometrar cada tarefa do início ao desfecho e registrar o resultado.

| Nº | Cenário da tarefa (ler ao participante) | Tempo (s) | Resultado | Nº de erros |
|----|----------------------------------------|-----------|-----------|-------------|
| 1 | Você está pintando a sala da sua casa e quer comprar uma lata de tinta acrílica fosca para parede interna, gastando no máximo R$ 150. Encontre uma opção adequada no site. | | | |
| 2 | Você comprou uma TV nova para assistir aos jogos da Copa do Mundo e quer pendurá-la na parede da sala, com um bom sinal de recepção. Encontre um suporte de parede para a TV e uma antena adequados no site. | | | |
| 3 | Você está reformando a cozinha e escolheu uma torneira no site, mas mora fora do Distrito Federal. Descubra como funciona a entrega para a sua região e quanto tempo ela leva. | | | |
| 4 | Você encontrou um produto interessante, mas ainda não vai comprá-lo agora. Salve-o de alguma forma para decidir com calma depois. | | | |
| 5 | Você tem uma dúvida sobre um produto e prefere falar diretamente com alguém da loja antes de comprar. Encontre uma forma de entrar em contato com a Castelo Forte. | | | |

> 💡 **Observação:**
> Caso o grupo opte por outro conjunto de tarefas (ex.: finalizar uma compra completa, usar um filtro de busca específico, comparar dois produtos), substituam os cenários acima mantendo o formato de **tarefa contextualizada**.

---

## 14.6 Perguntas Rápidas Pós-Tarefa

Após cada tarefa, antes de seguir para a próxima, perguntar:

- [ ] Numa escala de **1** (muito difícil) a **5** (muito fácil), quão fácil foi realizar essa tarefa?
- [ ] Você teve alguma **dúvida ou dificuldade** ao longo da tarefa? Qual?
- [ ] Havia algo que você **esperava encontrar e não encontrou**?

---

## 14.7 Questionário SUS — System Usability Scale

Entregar ao participante após a conclusão de todas as tarefas. Marcar uma opção por linha (1 = Discordo totalmente · 5 = Concordo totalmente).

| # | Afirmação | 1 | 2 | 3 | 4 | 5 |
|---|-----------|---|---|---|---|---|
| 1 | Eu acho que gostaria de usar este site com frequência. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 2 | Achei o site desnecessariamente complexo. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 3 | Achei o site fácil de usar. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 4 | Acho que precisaria de apoio técnico para conseguir usar este site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 5 | Achei que as várias funções deste site estavam bem integradas. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 6 | Achei que havia muita inconsistência neste site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 | Imagino que a maioria das pessoas aprenderia a usar este site rapidamente. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 8 | Achei o site muito complicado de usar. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 9 | Senti-me muito confiante usando o site. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 | Precisei aprender várias coisas novas antes de conseguir usar este site. | ☐ | ☐ | ☐ | ☐ | ☐ |

> ℹ️ **Cálculo do escore SUS:**
> - **Itens ímpares** (1, 3, 5, 7, 9): pontuação = valor marcado − 1
> - **Itens pares** (2, 4, 6, 8, 10): pontuação = 5 − valor marcado
> - Somar os 10 valores e **multiplicar por 2,5** → escore final de 0 a 100.

---

## 14.8 Checklist de Observação de Acessibilidade (WCAG)

Preencher pelo **observador durante a sessão**, para alimentar os "achados de acessibilidade WCAG" do relatório final.

- [ ] Contraste de texto e fundo é suficiente em todas as telas percorridas?
- [ ] Imagens de produtos e ícones possuem texto alternativo perceptível (ex.: ao usar leitor de tela)?
- [ ] É possível navegar pelos elementos principais (menu, busca, carrinho) usando **apenas o teclado**?
- [ ] Os campos de formulário (busca, cadastro, CEP) têm rótulos claros e mensagens de erro compreensíveis?
- [ ] O tamanho da fonte permite zoom/ampliação sem quebrar o layout?
- [ ] Há elementos (botões, links) pequenos demais ou muito próximos, difíceis de tocar/clicar com precisão?
- **Outras observações de acessibilidade:** ______________________________________

---

## 14.9 Planilha de Registro de Métricas

Usar esta tabela como referência para alimentar a planilha de tabulação (entregável 5). Repetir uma linha por tarefa e por participante.

| Nº | Tarefa | Tempo (s) | Resultado | Nº de erros |
|----|--------|-----------|-----------|-------------|
| 1  | Tarefa 1 — Tinta acrílica fosca ≤ R$ 150 | | | |
| 2  | Tarefa 2 — Suporte de TV + antena | | | |
| 3  | Tarefa 3 — Entrega fora do DF | | | |
| 4  | Tarefa 4 — Salvar produto | | | |
| 5  | Tarefa 5 — Contato com a loja | | | |

> 💡 **Métricas derivadas:**
> - **Taxa de sucesso** = (nº de tarefas com sucesso completo ÷ total de tarefas) × 100
> - **Tempo médio por tarefa** = soma dos tempos ÷ nº de tarefas

---

# 15. Entrevista: Roteiro Pós-Teste

> Entrevista semiestruturada conduzida após a conclusão de todas as tarefas e do preenchimento do questionário SUS. O objetivo é captar impressões gerais, achados de acessibilidade e sugestões que não aparecem nos números.

---

## 15.1 Impressões Gerais

- De forma geral, como foi para você usar o site da Castelo Forte hoje?
- O que você **mais gostou** na experiência?
- O que **mais te incomodou ou dificultou** durante o uso?

---

## 15.2 Comparação com Expectativas

- Algum momento o site se comportou de um jeito **diferente do que você esperava**? Qual?
- Você já comprou em outro site de material de construção ou home center? Como foi essa experiência em comparação com a de hoje?

---

## 15.3 Confiança e Clareza

- Em algum momento você ficou em dúvida se tinha **feito a coisa certa** (ex.: se o produto foi salvo, se a busca realmente trouxe o que você queria)? Conte mais.
- As informações de **preço, prazo de entrega e formas de contato** estavam claras para você?

---

## 15.4 Acessibilidade

*(Aplicar quando pertinente ao perfil do participante.)*

- Você sentiu alguma dificuldade relacionada a **tamanho de texto, contraste de cores, uso do teclado ou de leitor de tela**?
- Havia algo no site que dependia **só de cor, imagem ou posição na tela** para ser entendido?

---

## 15.5 Fechamento

- Se você pudesse **mudar uma única coisa** no site, o que seria?
- Há algo mais que você queira comentar sobre a experiência de hoje?

> 📌 **Nota:**
> Agradecer a participação, reforçar o **anonimato dos dados** e relembrar o direito de solicitar a exclusão das informações a qualquer momento, conforme combinado no TCLE.

---

# 16. Entrevista: Referências Bibliográficas

> Obras utilizadas como base metodológica para a condução do teste de usabilidade e elaboração deste documento.

---

- **KRUG, Steve.** *Don't Make Me Think, Revisited.* New Riders, 2014.
- **NIELSEN, Jakob.** *Usability Engineering.* Academic Press, 1993.
- **BROOKE, John.** SUS: A 'Quick and Dirty' Usability Scale. In: *Usability Evaluation in Industry.* Taylor & Francis, 1996.

