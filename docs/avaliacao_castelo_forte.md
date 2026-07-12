# Relatório de Avaliação Manual de IHC e Acessibilidade — Site "Castelo Forte"

Este documento apresenta o relatório prático de **Avaliação Manual** elaborado por **nós, do Grupo 9 (IHC - UnB)**, sobre o portal institucional e e-commerce do **Castelo Forte**.

Para conduzir esta análise de forma aprofundada, sem a intervenção exclusiva de varreduras automatizadas, aplicamos os **Checklists de Verificação do Projeto CheckAAA (desenvolvidos por nossa equipe)** diretamente na interface do portal. Inspecionamos a árvore de elementos (DOM), testamos a navegação por teclado, executamos leitores de tela na prática e analisamos a experiência de uso ponta a ponta.

---

## Dados da Avaliação & Resumo Executivo

> [!NOTE]
> **Objeto de Estudo:** Site Castelo Forte (Varejo de Materiais de Construção, Reforma e Home Center no DF e Entorno)  
> **Autoria da Avaliação:** Equipe do Grupo 9 - Disciplina de IHC (Universidade de Brasília - UnB)  
> **Metodologia:** Inspeção Manual Heurística e de Acessibilidade baseada no ecossistema CheckAAA  
> **Escopo da Análise:** Página Inicial, Megamenu de Departamentos, Categorias, Página de Produto, Carrinho Lateral (*Minicart*), Lojas e Suporte  
> **URL Analisada:** [casteloforte.com.br](https://www.casteloforte.com.br/)  
> **Data da Avaliação:** Julho de 2026

### 🚫 Escopo de Verificação: Checklists Contabilizados vs. Não Contabilizados

No âmbito do nosso projeto **CheckAAA**, desenvolvemos **10 checklists temáticos (somando 56 critérios no total)** para cobrir desde a codificação front-end até a governança corporativa e agilidade. No entanto, para garantir rigor metodológico e justiça no cálculo da nota técnica do site **Castelo Forte**, nossa equipe segmentou o ecossistema em duas categorias:

1. **Checklists Verificáveis e Contabilizados na Nota (7 Checklists / 42 Critérios):** São aqueles cujos atributos conseguimos inspecionar diretamente acessando a URL pública do e-commerce — analisando a interface visual, a árvore DOM (HTML/CSS), a resposta ao teclado, a vocalização em leitores de tela e os canais públicos de atendimento (*Frontstage*).
2. **Checklists Não Contabilizados / Excluídos do Cálculo (3 Checklists / 14 Critérios):** Optamos por deixar exatamente **3 checklists de fora do cálculo quantitativo (Gestão de Projetos, Design Empático e Condução de Testes de Usabilidade)** porque eles avaliam **processos internos de governança da empresa, dinâmicas de escritório do time e sessões empíricas de laboratório com usuários recrutados**. Como nossa avaliação externa opera no formato *caixa preta* (a partir do produto final em produção), não temos acesso aos ritos internos de trabalho da Castelo Forte e de sua agência de desenvolvimento.

Abaixo, apresentamos a justificativa técnica elaborada por nossa equipe para cada uma das 3 exclusões:

> [!IMPORTANT]
> **Justificativa Detalhada dos 3 Checklists Não Contabilizados:**
> * **1. [Checklist de Gestão de Projetos (Agile/Scrum & DoD)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/gestao_projetos.md) — 5 critérios excluídos:** Esse checklist avalia a alocação de orçamento para QA acessível, se os desenvolvedores possuem capacitação em WCAG, se a *Definition of Done (DoD)* das sprints exige acessibilidade e se os contratos com fornecedores possuem cláusulas inclusivas. **Por que ficou de fora:** Como nossa equipe não possui acesso ao Jira, ao backlog, às reuniões de planejamento ou aos contratos do Castelo Forte, seria metodologicamente incorreto pontuar positivamente ou penalizar a plataforma por critérios não observáveis na URL pública.
> * **2. [Checklist de Design Empático](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/design_empatico.md) — 4 critérios excluídos:** Esse checklist avalia se o time de UX conduziu entrevistas etnográficas na fase de concepção, elaborou Mapas de Empatia e realizou dinâmicas internas (como navegar com os olhos vendados ou com simuladores de deficiência). **Por que ficou de fora:** Trata-se de artefatos da fase de *Discovery* e concepção interna de design. O código-fonte final não indica se a equipe realizou dinâmicas de empatia em seu escritório; verificar esse ponto exigiria auditar os relatórios de pesquisa internos da empresa.
> * **3. [Checklist de Testes de Usabilidade (Protocolo Think-Aloud & SUS)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/teste_usabilidade.md) — 5 critérios excluídos:** Este é o roteiro metodológico do nosso projeto para a aplicação de sessões moderadas com participantes recrutados em laboratório, coletando verbalizações (*Think-Aloud*) e aplicando o questionário de pontuação subjetiva *SUS (System Usability Scale)*. **Por que ficou de fora:** O objetivo da presente avaliação é conduzir uma **Inspeção Técnica de Especialistas por nossa equipe**, sem o recrutamento de amostra externa de usuários nessa etapa do relatório.

---

### Painel Geral da Nossa Avaliação (7 Checklists Verificáveis / 42 Critérios Contabilizados)

Olhando exclusivamente para os **42 critérios que nossa equipe conseguiu verificar na prática**, este é o desempenho técnico consolidado do portal **Castelo Forte**:

| # | Checklist / Dimensão Avaliada (Contabilizados) | Total de Critérios | ✅ Adequados | ⚠️ Pontos de Atenção | ❌ Falhas Críticas | Índice de Adequação |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: |
| **1** | [Desenvolvimento Web (Código e Estrutura)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/desenvolvimentoweb.md) | **6** | 2 | 2 | 2 | **33,3%** |
| **2** | [Geração de Conteúdo e Redação (UX Writing)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/conteudo.md) | **6** | 3 | 2 | 1 | **50,0%** |
| **3** | [Design de Interfaces e UX (UI/UX)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/design.md) | **6** | 3 | 3 | 0 | **50,0%** |
| **4** | [Avaliação Heurística Inclusiva (Nielsen)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/heuristicas.md) | **10** | 7 | 3 | 0 | **70,0%** |
| **5** | [Construção de Personas](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/personas.md) | **5** | 2 | 1 | 2 | **40,0%** |
| **6** | [Service Blueprint & Jornada do Usuário](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/blueprint.md) | **5** | 4 | 1 | 0 | **80,0%** |
| **7** | [Ferramentas e Validação de QA / Híbrida](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/ferramentas.md) | **4** | 2 | 0 | 2 | **50,0%** |
| **—** | **TOTAL CONSOLIDADO (VERIFICÁVEIS)** | **42** | **23** | **12** | **7** | **54,8%** |

---

## Diagnóstico Detalhado dos 7 Checklists Contabilizados

Abaixo, detalhamos as observações de nossa equipe para cada um dos 42 critérios inspecionáveis no site da **Castelo Forte**, discriminando o que foi avaliado, o resultado de conformidade e a constatação técnica observada.

### 1. Checklist de Desenvolvimento Web (Código e Estrutura)

- [x] **1. Semântica e Estrutura do Documento HTML (`<html lang>` e `<title>`)**
  * **O que avaliamos:** Se a tag raiz `<html>` possui o atributo `lang` definido corretamente para tecnologias assistivas e se o elemento `<title>` é descritivo e exclusivo para identificar a página.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O atributo `lang="pt-br"` está devidamente declarado na raiz do documento, garantindo que os leitores de tela vocalizem com a pronúncia brasileira correta. Além disso, o título ("Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site") cumpre sua função de orientar o usuário sobre a marca e seu alcance territorial.

- [ ] **2. Hierarquia de Cabeçalhos (`<h1>` a `<h6>`)**
  * **O que avaliamos:** Se os cabeçalhos seguem uma ordem lógica sequencial sem saltar níveis estruturais e se existe apenas um cabeçalho principal `<h1>` por página.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Durante a inspeção da árvore DOM, identificamos a presença de múltiplos `<h1>` em banners de promoções na home e saltos estruturais (de `<h1>` direto para `<h3>` em cards de departamento). Isso prejudica a navegação de usuários de sintetizadores de voz, que utilizam a lista de cabeçalhos como índice da página.

- [ ] **3. Marcos Semânticos (Landmarks)**
  * **O que avaliamos:** Se a interface utiliza corretamente as tags semânticas estruturais do HTML5 (`<header>`, `<main>`, `<nav>`, `<footer>`) para demarcar as grandes regiões do portal.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** O site falha ao não utilizar a tag estrutural `<main>` para envelopar o bloco central de conteúdo principal dos produtos. Consequentemente, quando usuários de tecnologias assistivas abrem uma nova página, não conseguem saltar direto para o conteúdo de interesse e são obrigados a percorrer todo o megamenu superior repetidamente.

- [ ] **4. Formulários e Validação (`<label>`)**
  * **O que avaliamos:** Se todos os campos interativos de entrada de dados (inputs de texto, busca, cotação de CEP e selects) possuem uma tag `<label>` associada programaticamente ou atributo `aria-label`.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** Inspecionamos os formulários da plataforma e encontramos 7 inputs interativos sem nenhuma associação com `<label>` ou `aria-label`, incluindo a barra de pesquisa central e os campos de cálculo de frete por CEP. O leitor de tela anuncia apenas "caixa de edição", bloqueando a autonomia de pessoas com deficiência visual na identificação do dado a ser preenchido.

- [ ] **5. Componentes Dinâmicos e ARIA**
  * **O que avaliamos:** Se componentes dinâmicos (modais de promoção, carrosséis e menus suspensos) utilizam atributos WAI-ARIA (`aria-expanded`, `aria-hidden`) e gerenciam corretamente o foco de teclado.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Observamos que, ao abrir modais de newsletter ou pop-ups promocionais de campanhas, o foco do teclado não é retido no interior do modal. Ao pressionarmos a tecla `Tab`, o foco vaza para os links ocultos ao fundo da página, o que desorienta usuários com deficiência visual ou motora.

- [x] **6. Tempo e Sessão**
  * **O que avaliamos:** Se o site impõe limites de tempo restritivos e não avisados no carrinho de compras ou durante a consulta de produtos.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O carrinho de compras e o catálogo de materiais preservam a sessão sem expiração abrupta, permitindo que consumidores e mestres de obras consultem especificações técnicas e realizem cotações de múltiplos itens no seu próprio ritmo.

---

### 2. Checklist de Geração de Conteúdo e Redação (UX Writing)

- [x] **1. Linguagem Simples e Clareza Textual (Plain Language)**
  * **O que avaliamos:** Se os textos utilizam linguagem clara, acessível e direta, evitando jargões técnicos incompreensíveis sem a devida contextualização.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A redação técnica do portal é bastante precisa. As descrições de produtos comunicam especificações de voltagem (110V/220V), dimensões, rendimento e acabamento de forma clara tanto para profissionais da construção civil quanto para consumidores realizando reparos residenciais.

- [x] **2. Estruturação da Leitura**
  * **O que avaliamos:** Se o conteúdo é subdividido em parágrafos curtos, listas com marcadores (*bullet points*) e subtítulos bem definidos para facilitar o escaneamento visual.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** As páginas de detalhes dos produtos organizam as especificações em tabelas estruturadas e listas com marcadores limpos, o que facilita bastante a rápida localização de dados técnicos chave como peso, garantia e fabricante.

- [ ] **3. Hiperlinks (Links)**
  * **O que avaliamos:** Se o texto âncora dos hiperlinks e botões é descritivo por si só, evitando expressões genéricas ou ambíguas como "clique aqui", "saiba mais" ou "ver".
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Em alguns banners de campanhas promocionais, encontramos links grafados unicamente como "Confira" ou "Ver ofertas". Sem a informação textual explícita no link (ou via `aria-label`), usuários de leitores de tela não conseguem compreender para qual departamento ou categoria de produto o link redirecionará.

- [ ] **4. Texto Alternativo para Imagens (`alt`)**
  * **O que avaliamos:** Se todas as imagens informativas, fotos de produto e banners promocionais de ofertas possuem uma descrição textual significativa no atributo `alt`.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** Este foi um dos pontos críticos de maior gravidade identificados por nossa equipe: contabilizamos **123 imagens informativas de produtos e banners promocionais na página inicial sem o atributo `alt` preenchido** (ou apenas com nomes de arquivos genéricos como "banner_desk.jpg"). Consequentemente, usuários com deficiência visual que utilizam leitores de tela perdem integralmente o acesso ao conteúdo das principais campanhas de ofertas do portal.

- [ ] **5. Áudio, Vídeo e Multimídia**
  * **O que avaliamos:** Se os vídeos de campanhas institucionais ou tutoriais de instalação de materiais oferecem legendas sincronizadas, audiodescrição e transcrição textual.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Os vídeos demonstrativos incorporados em páginas especiais de campanhas e parceiros não oferecem recurso de audiodescrição ou transcrição em texto puro acessível na própria página para usuários com deficiência auditiva ou visual.

- [x] **6. Instruções e Orientações**
  * **O que avaliamos:** Se as instruções de navegação, cálculo de frete e finalização de compra não dependem exclusivamente de características sensoriais como cor, forma ou localização espacial.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** As instruções sobre prazos de entrega no DF, faixas de CEP e retirada nas lojas são explicadas textualmente com clareza, sem depender unicamente de indicações baseadas em cor ou formato (ex: "clique no ícone verde à direita").

---

### 3. Checklist de Design de Interfaces e UX (UI/UX)

- [ ] **1. Cores e Contraste Visuais**
  * **O que avaliamos:** Se a combinação de cores entre texto e fundo cumpre a razão mínima de contraste de 4.5:1 (WCAG AA) para garantir leitura confortável em diferentes condições de iluminação.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** O contraste nos botões primários de compra ("Comprar" em azul marinho com texto branco ou amarelo) é satisfatório. Entretanto, observamos que links secundários no rodapé, textos de parcelamento em cinza claro sobre fundo branco e selos inativos apresentam razão de contraste reduzida (cerca de 2.8:1), o que dificulta a legibilidade para usuários com baixa visão ou em ambientes muito iluminados.

- [x] **2. Tipografia e Legibilidade**
  * **O que avaliamos:** Se a interface utiliza tipografia limpa, legível e com dimensionamento proporcional (mínimo de 16px no corpo de texto), sem entrelinhas excessivamente comprimido.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A fonte sem serifa adotada no portal apresenta excelente legibilidade, espaçamento entrelinhas adequado e boa escalabilidade em telas de computadores e dispositivos móveis.

- [x] **3. Navegação e Arquitetura da Informação**
  * **O que avaliamos:** Se a estrutura do portal é lógica e consistente, com menus bem categorizados, presença de *breadcrumbs* (migalhas de pão) e busca de rápido acesso.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O megamenu categoriza com precisão milhares de itens em departamentos lógicos (Elétrica, Hidráulica, Pisos, Ferramentas) e a presença constante de *breadcrumbs* nas páginas internas orienta o usuário com eficácia sobre sua localização exata dentro do catálogo.

- [ ] **4. Área de Toque (Touch Targets)**
  * **O que avaliamos:** Se botões, ícones e links interativos em dispositivos móveis possuem dimensões mínimas de 44x44 pixels para evitar toques acidentais na interface.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Na versão mobile, identificamos ícones de paginação em carrosséis, botões de favoritar e links do menu inferior com área interativa reduzida (medindo aproximadamente 28x28 pixels). Essa limitação gera toques acidentais frequentes em usuários com dedos maiores ou com leves dificuldades de coordenação motora fina.

- [x] **5. Estados e Feedback Interativo**
  * **O que avaliamos:** Se todos os elementos interativos fornecem feedback visual imediato ao usuário nos estados de *hover* (passagem do mouse), *active* (clique), *focus* e *disabled*.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O feedback de interação da plataforma é bastante nítido: cards de produto ganham destaque visual ao passar o mouse e botões de compra acionam animações instantâneas de confirmação ao adicionar um item ao carrinho.

- [ ] **6. Animações e Movimento**
  * **O que avaliamos:** Se carrosséis de banners rotativos e animações não contêm piscadas rápidas (> 3 vezes/segundo) e se disponibilizam controle mecânico para pausar ou interromper a rotação automática.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** O carrossel principal de banners da home gira automaticamente a cada 4 segundos e não disponibiliza um botão visível e acessível para pausar a transição. Esse movimento automático contínuo pode causar desconforto vestibular ou sobrecarga de atenção em usuários com neurodivergências.

---

### 4. Checklist de Avaliação Heurística Inclusiva (Nielsen)

- [x] **1. Visibilidade do Estado do Sistema (H1)**
  * **O que avaliamos:** Se o portal mantém o usuário informado de forma contínua sobre o progresso de requisições em andamento através de feedback visual (*spinners* de carregamento).
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O sistema responde com rapidez e exibe indicadores claros de carregamento ao calcular os prazos de frete por CEP, ao filtrar produtos por faixa de preço e ao alternar a loja de retirada no carrinho.

- [x] **2. Compatibilidade entre o Sistema e o Mundo Real (H2)**
  * **O que avaliamos:** Se a interface adota linguagem, convenções e símbolos familiares ao cotidiano do público-alvo, sem expor mensagens de erro técnicas da programação.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O vocabulário utilizado na navegação reflete adequadamente o modelo mental de um Home Center do mundo físico ("Departamentos", "Televendas", "Retirar na Loja", "Cálculo de Frete"), sem vazamento de exceções ou códigos técnicos ao usuário final.

- [x] **3. Controle e Liberdade do Usuário (H3)**
  * **O que avaliamos:** Se a plataforma disponibiliza "saídas de emergência" evidentes, como botões de Voltar, Fechar Modais ou Limpar Filtros para reverter ações indesejadas sem perda de dados.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O carrinho lateral (*minicart*) permite a alteração de quantidades e a remoção rápida de itens em um clique, e os modais promocionais possuem botões de fechamento ("X") bem posicionados e visíveis.

- [x] **4. Consistência e Padrões (H4)**
  * **O que avaliamos:** Se o site mantém uniformidade visual e funcional entre todas as páginas e departamentos, padronizando posições de botões, exibição de preços e ícones.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** Observamos rigorosa padronização na apresentação dos cards de produto, na exibição do preço à vista em destaque e parcelado logo abaixo, bem como na fixação do cabeçalho de busca e contatos em todo o domínio.

- [x] **5. Prevenção de Erros (H5)**
  * **O que avaliamos:** Se a interface aplica restrições preventivas de formatação e máscaras automáticas em campos numéricos (como CEP, CPF/CNPJ e Telefone) antes da submissão do formulário.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O sistema aplica máscaras automáticas de formatação em campos de CEP e cadastro, além de bloquear caracteres alfabéticos onde apenas números são aceitos, prevenindo erros de preenchimento de forma eficaz.

- [ ] **6. Reconhecimento em vez de Memorização (H6)**
  * **O que avaliamos:** Se o portal minimiza a carga cognitiva e o esforço de memória, disponibilizando sugestões automáticas (*autocomplete*) e mantendo opções selecionadas claramente visíveis.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** O campo de busca apresenta um bom sistema de *autocomplete* por palavras-chave. No entanto, ao navegar por múltiplos filtros de subcategorias (como marca, voltagem e preço), a interface não consolida no topo da lista um painel fixo de "Filtros Ativos", exigindo que o usuário memorize ou role a página inteira para verificar quais filtros estão selecionados.

- [ ] **7. Flexibilidade e Eficiência de Uso (H7 — Skip Link e Aceleradores)**
  * **O que avaliamos:** Se o site disponibiliza um link de atalho no topo da página (*"Pular para o conteúdo principal"*) e aceleradores para otimizar a navegação de usuários de teclado e usuários experientes.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** A ausência de um *Skip Link* no cabeçalho penaliza severamente a eficiência de navegação. Ao executarmos testes exclusivos via teclado, precisamos pressionar a tecla `Tab` mais de **35 vezes** em cada nova página apenas para atravessar toda a barra superior, contatos e o megamenu até alcançar a área de produtos.

- [ ] **8. Estética e Design Minimalista (H8)**
  * **O que avaliamos:** Se o layout evita poluição visual, sobreposição de pop-ups concorrentes ou excesso de banners promocionais que dificultem o foco na informação principal.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Em períodos de grandes campanhas ou datas sazonais, a página inicial acumula alta densidade visual, exibindo simultaneamente carrosséis rotativos, modais centrais de newsletter, selos coloridos de desconto e ícones flutuantes de chat. Essa concorrência de elementos eleva a carga cognitiva e pode gerar fadiga visual.

- [x] **9. Ajude os Usuários a Reconhecer, Diagnosticar e Recuperar-se de Erros (H9)**
  * **O que avaliamos:** Se as mensagens de erro são redigidas em linguagem clara, destacadas em vermelho ou com ícones de alerta, e indicam exatamente o que precisa ser corrigido de forma construtiva.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** Quando um campo obrigatório de cadastro não é preenchido ou um CEP inválido é inserido, a interface destaca o input em vermelho e exibe uma mensagem clara de orientação ("Por favor, insira um CEP válido para calcular o frete"), facilitando a correção pelo usuário.

- [x] **10. Ajuda e Documentação (H10)**
  * **O que avaliamos:** Se o portal disponibiliza centrais de suporte fáceis de localizar, mapa e endereços das lojas, políticas de trocas e devoluções e dúvidas frequentes (FAQ).
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A central de ajuda e documentação é muito bem estruturada: há uma página exclusiva detalhando o mapa, endereços e horários das **10 Lojas no DF e Entorno**, além de explicações claras sobre o funcionamento das entregas da frota própria e links de contato bem posicionados.

---

### 5. Checklist de Construção de Personas

- [x] **1. Representatividade na Amostra de Pesquisa**
  * **O que avaliamos:** Se a arquitetura de informação e as jornadas contemplam a diversidade real do público consumidor de materiais de construção (desde profissionais da área até consumidores residenciais e idosos).
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A estrutura do catálogo abrange tanto pacotes de materiais pesados para construtores e mestres de obras quanto linhas para pequenos reparos domésticos, demonstrando que o design de serviços considera a ampla heterogeneidade socioeconômica e demográfica do Distrito Federal.

- [ ] **2. Inclusão de Deficiências no Perfil da Persona**
  * **O que avaliamos:** Se o desenvolvimento do front-end considerou explicitamente as limitações e necessidades de navegação de pessoas com deficiência visual, motora ou cognitiva.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** O cruzamento das falhas encontradas no site com nossos perfis de personas inclusivas evidencia que a codificação do portal foi estruturada sob a premissa restrita de um usuário normovisual que navega via mouse. A ausência de rótulos em formulários e de textos alternativos em 123 banners demonstra que personas com deficiência visual não foram devidamente contempladas nos requisitos técnicos.

- [ ] **3. Mapeamento Tecnológico e de Assistência (Tecnologias Assistivas)**
  * **O que avaliamos:** Se botões e controles clicáveis compostos por ícones possuem marcação acessível (`aria-label`) para que leitores de tela vocalizem a finalidade exata da ação.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** Controles fundamentais do e-commerce — como o ícone de carrinho no cabeçalho, o ícone de lupa para pesquisa e os botões de fechamento de modais — são implementados como vetores (SVG) desprovidos do atributo `aria-label`. Ao interagir com esses elementos, o leitor de tela anuncia apenas "botão" ou lê o nome do arquivo vetorial, impedindo que o usuário cego compreenda a função do controle.

- [x] **4. Dores, Necessidades e Objetivos (Pain Points e Goals)**
  * **O que avaliamos:** Se a plataforma soluciona com eficácia as principais dores do cliente em seu contexto de compra (como consultar a disponibilidade de estoque por loja e simular frete rapidamente).
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** O portal atende com precisão às necessidades prioritárias do setor de construção e reforma: permite verificar na página de produto se o item possui estoque disponível para retirada em lojas físicas específicas (ex: Taguatinga, Samambaia, Ceilândia) ou simular o frete apenas com o CEP, sem exigir cadastros longos e burocráticos.

- [ ] **5. Validação Contínua**
  * **O que avaliamos:** Se a plataforma demonstra indícios de revisão periódica de usabilidade e acessibilidade diante da introdução de novos banners, campanhas e plugins promocionais.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** A constatação de novos banners sazonais entrando em produção sem atributo `alt` e de pop-ups de terceiros sem gestão de foco de teclado indica que o ciclo de manutenção do site carece de verificações contínuas de acessibilidade a cada nova atualização ou campanha publicada.

---

### 6. Checklist de Service Blueprint & Jornada do Usuário

- [x] **1. Avaliação de Evidências Físicas e Digitais (Physical/Digital Evidence)**
  * **O que avaliamos:** Se as evidências digitais do site (fichas técnicas, clareza de preços, prazos) estão em plena coerência e transição harmoniosa com os pontos de contato físicos da empresa.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** Observamos excelente integração entre a experiência digital (catálogo atualizado, especificações e preços transparentes) e a estrutura corporativa física (as 10 lojas físicas bem sinalizadas na região e a frota própria de caminhões para entrega no DF).

- [x] **2. Avaliação das Ações do Usuário (Customer Actions)**
  * **O que avaliamos:** Se o fluxo de passos do cliente (pesquisa → cotação de CEP → adição ao carrinho → seleção de entrega/retirada → checkout) ocorre de forma direta, lógica e sem passos redundantes.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A jornada principal de compra segue uma estrutura linear e intuitiva, permitindo que o consumidor complete seu orçamento ou pedido online com poucos cliques e sem fricção desnecessária nas telas intermediárias.

- [x] **3. Avaliação das Ações de Frontstage (Canais Alternativos e Atendimento Humanizado)**
  * **O que avaliamos:** Se o Service Blueprint garante canais alternativos de atendimento humanizado altamente visíveis e acessíveis (Televendas, WhatsApp por loja) caso o usuário enfrente barreiras na interface digital.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** **Este é o ponto forte de maior destaque qualitativo identificado por nossa equipe em toda a avaliação.** O site disponibiliza em posições estratégicas durante toda a jornada números de **Televendas e botões flutuantes de WhatsApp interligados diretamente a cada uma das 10 Lojas físicas no DF e Entorno**. Caso o cliente enfrente dúvidas técnicas sobre o produto ou dificuldades no fluxo digital, a rota de suporte humanizado está prontamente disponível e cumpre com excelência o papel de suporte equitativo.

- [x] **4. Avaliação das Ações de Backstage (Sistemas e Integrações Logísticas Visíveis)**
  * **O que avaliamos:** Se a plataforma integra de forma coesa, nos bastidores visíveis do sistema, a verificação de estoque multicentro e o cálculo regional de frete em tempo real.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A camada logística de bastidores (*Backstage*) opera com muita eficiência nas consultas de tela, integrando em tempo real o saldo de estoque distribuído entre as lojas físicas e calculando com precisão as taxas de frete para as diferentes regiões do Distrito Federal.

- [ ] **5. Avaliação de Processos de Suporte (Support Processes & Autorrecuperação)**
  * **O que avaliamos:** Se os processos de suporte e pós-venda (como acompanhamento de pedidos e resolução de falhas no pagamento digital) oferecem rotas autônomas e claras na interface.
  * **Resultado:** `⚠️ Atenção`
  * **Análise da equipe:** Caso ocorra alguma instabilidade no processamento de pagamentos digitais (como transações Pix não confirmadas instantaneamente ou recusa em cartões), o cliente dispõe de poucas opções automatizadas na área de "Meus Pedidos" para reprocessar ou compreender o erro de forma autônoma, dependendo do transbordo manual para o Televendas ou WhatsApp.

---

### 7. Checklist de Ferramentas e Validação de QA / Auditoria Híbrida

- [ ] **1. Auditoria Técnica Híbrida (Inspeção Manual + Automatizada)**
  * **O que avaliamos:** Se a plataforma resiste a uma verificação técnica híbrida rigorosa (inspeção manual de código DOM associada a testes funcionais de navegação por teclado).
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** A auditoria híbrida revela as falhas estruturais ocultas para verificações automáticas superficiais: embora a página possua metadados e apresente renderização visual satisfatória, nossa inspeção manual da árvore DOM expôs a ausência total da tag `<main>` e os 7 campos interativos desprovidos de associação com `<label>`.

- [x] **2. Verificação de Meta Viewport e Responsividade Mobile**
  * **O que avaliamos:** Se o portal se adapta de forma fluida em smartphones e tablets, verificando a presença da tag `<meta name="viewport">` e a permissão para ampliação de zoom de acessibilidade.
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A tag `<meta name="viewport" content="width=device-width, initial-scale=1">` está implementada corretamente. O layout responsivo adapta as grades de produtos para telas de dispositivos móveis com eficiência e **não bloqueia o gesto de pinça para zoom de acessibilidade** (`user-scalable=no` não foi aplicado indevidamente), permitindo ampliação do texto.

- [ ] **3. Inspeção de Regiões ARIA e Leitores de Tela (NVDA/VoiceOver)**
  * **O que avaliamos:** A resposta real da interface quando inspecionada com sintetizadores de voz (NVDA no Windows e VoiceOver no macOS/iOS) para auditar como botões e links são vocalizados.
  * **Resultado:** `❌ Falha Crítica`
  * **Análise da equipe:** Durante nossos testes na árvore de acessibilidade (*Accessibility Tree*) executando leitores de tela reais, os botões centrais do topo (carrinho, busca e menu mobile) foram reprovados por omissão de *Accessible Name*. O sintetizador vocaliza apenas "botão" em branco ou lê a rota do arquivo SVG, resultando em reprovação imediata nas checagens WAI-ARIA para tecnologias assistivas.

- [x] **4. Diagnóstico de Erros no Console e Estabilidade Front-end**
  * **O que avaliamos:** Se a navegação pelos departamentos, aplicação de filtros e fluxo de carrinho geram exceções JavaScript não tratadas, vazamentos ou quebras de script no Console (`DevTools`).
  * **Resultado:** `✅ Adequado`
  * **Análise da equipe:** A engenharia front-end do portal demonstra alta estabilidade e robustez técnica. Inspecionamos o Console do navegador (`DevTools`) durante toda a jornada de navegação pelo catálogo e pelo carrinho de compras sem identificar nenhuma exceção fatal de JavaScript (`Uncaught TypeError`) ou travamento na aplicação.

---

## Seção Informativa: Visão Geral dos 3 Checklists Não Contabilizados na Nota

Embora não entrem no cálculo da nossa nota técnica final (devido à impossibilidade de verificação externa via URL pública), apresentamos abaixo os **3 checklists não contabilizados como recomendações metodológicas e de governança da nossa equipe** para que a marca **Castelo Forte** aprimore sua maturidade interna em UX e acessibilidade:

* **8. Checklist de Design Empático (4 critérios — Não Contabilizado):** Focado em *Condução de Entrevistas Etnográficas*, *Elaboração de Mapa de Empatia*, *Dinâmicas de Empatia com a Equipe* e *Testes de Concepção com Usuários PCD*. **Recomendação da nossa equipe:** sugerimos que os desenvolvedores front-end e designers da plataforma realizem dinâmicas internas periódicas de navegação no site utilizando apenas o teclado e o sintetizador NVDA com o monitor desligado, vivenciando na prática as barreiras identificadas nesta auditoria.
* **9. Checklist de Gestão de Projetos e Agilidade DoD (5 critérios — Não Contabilizado):** Focado em *Orçamento de QA Acessível*, *Inclusão de WCAG na Definition of Done*, *Capacitação do Time*, *Linter no CI/CD* e *Contratos de Procurement*. **Recomendação da nossa equipe:** em nossa análise metodológica, a principal hipótese para a ocorrência das 7 falhas críticas técnicas no site é a **ausência de checagens obrigatórias de acessibilidade na Definition of Done (DoD) interna da equipe**, o que permite a publicação rotineira de banners e componentes sem os devidos atributos semânticos.
* **10. Checklist de Condução de Testes de Usabilidade / Think-Aloud (5 critérios — Não Contabilizado):** Focado em *Planejamento do Teste*, *Recrutamento Inclusivo*, *Protocolo Think-Aloud*, *Métricas de Sucesso na Tarefa* e *Escala SUS*. **Recomendação da nossa equipe:** recomendamos a condução semestral de rodadas empíricas de laboratório aplicando o protocolo *Think-Aloud* (pensar em voz alta) com amostras mistas de participantes (normovisuais e usuários de tecnologias assistivas) para mensurar o impacto das correções de código na pontuação de satisfação SUS.

---

## 💡 Conclusão da Nossa Avaliação — Síntese Quantitativa e Qualitativa

Após aplicarmos os checklists do projeto **CheckAAA** no portal **Castelo Forte** (`casteloforte.com.br`), separando rigorosamente os **7 Checklists verificáveis (42 critérios inspecionados)** dos **3 Checklists de processo interno (14 critérios não contabilizados)**, nossa equipe consolidou um diagnóstico quantitativo e qualitativo aprofundado sobre a plataforma.

### 📊 Síntese Quantitativa da Nota Técnica

Consolidando os **42 critérios que nossa equipe inspecionou diretamente na interface e no código-fonte**, o site do Castelo Forte atingiu **54,8% de conformidade plena (`✅ Adequado`)**, **28,6% de pontos de alerta (`⚠️ Atenção`)** e **16,6% de falhas críticas de acessibilidade (`❌ Falha Crítica`)**:

```
+-----------------------------------------------------------------------+
|          DISTRIBUIÇÃO DOS 42 CRITÉRIOS VERIFICADOS PELA EQUIPE        |
+-----------------------------------------------------------------------+
|  ✅ Adequados (Conformidade Plena)      :  23 critérios (54,8%)       |
|  ⚠️ Pontos de Atenção (Gargalos de UX)  :  12 critérios (28,6%)       |
|  ❌ Falhas Críticas (Barreiras de A11y) :  07 critérios (16,6%)       |
+-----------------------------------------------------------------------+
|  ÍNDICE GERAL DE ADEQUAÇÃO TÉCNICA      :  54,8%                      |
+-----------------------------------------------------------------------+
```

A análise quantitativa por checklist revela uma clara polarização de desempenho técnico entre as diferentes camadas da plataforma:

1. **Desempenho Elevado no Atendimento e Comercial (80% em Service Blueprint e 70% em Heurísticas):** A plataforma atinge suas melhores notas nas dimensões que medem a arquitetura de informação visual, a categorização de produtos por fases de obra, a rapidez na simulação de frete e, principalmente, a excelência e visibilidade do suporte humanizado na jornada (*Frontstage*).
2. **Deficit Crítico em Estrutura Semântica e Acessibilidade (33,3% em Desenvolvimento Web e 40% em Personas):** Por outro lado, o e-commerce sofre penalizações severas nas camadas estruturais da engenharia front-end. As **7 Falhas Críticas (`❌`)** identificadas em nossa inspeção concentram-se na ausência da tag `<main>`, falta de `<label>` programático em 7 inputs de formulário, omissão de `alt` em 123 banners da home e controles clicáveis sem `aria-label`.

### 🔍 Análise Qualitativa (O Duplo Padrão de Experiência e a Hipótese de Governança)

Em nossa análise qualitativa, constatamos que o portal apresenta um **"duplo padrão de experiência do usuário"**, que varia consideravelmente de acordo com o perfil sensorial e as ferramentas de navegação utilizadas:

#### 1. O Ponto Forte Qualitativo: A Rede de Segurança do Atendimento Humanizado (*Frontstage*)
Para o consumidor normovisual navegando por mouse ou tela touch, o site do Castelo Forte cumpre seu papel comercial de forma muito eficiente. A estruturação do catálogo por fases da obra, a agilidade no cálculo de frete por CEP e a estabilidade técnica dos servidores proporcionam uma experiência satisfatória. 

Sobretudo, o grande destaque que observamos em nossa avaliação de *Service Blueprint* é a **presença ostensiva de canais alternativos humanizados — Televendas em destaque e botões flutuantes de WhatsApp interligados diretamente a cada uma das 10 Lojas físicas no DF e Entorno**. Caso o cliente apresente dúvidas sobre especificações de materiais ou enfrente entraves no fluxo de cotação online, a rota de escape humanizada está prontamente acessível, funcionando como uma rede de segurança de alta eficácia na conversão de vendas.

#### 2. O Ponto Crítico Qualitativo: A Barreira Excludente para Tecnologias Assistivas (*Backstage & Código*)
Em nítido contraste, em nossas simulações com personas que dependem de leitores de tela (como NVDA ou VoiceOver) e navegação por teclado, a interface revelou severas barreiras de acessibilidade. A omissão sistemática do atributo `alt` em **123 imagens informativas e banners promocionais na página inicial** transforma as principais campanhas de ofertas da rede em silêncio ou em vocalizações de nomes técnicos de arquivos para usuários com deficiência visual.

Ademais, a ausência de marcos semânticos (`<main>`), a omissão de `<label>` em **7 campos interativos** (como a barra de pesquisa central e consulta de frete) e a inexistência de *Skip Links* transformam a navegação por teclado em um processo exaustivo. Em nossos testes, precisamos pressionar a tecla `Tab` mais de **35 vezes seguidas** em cada novo carregamento de página apenas para ultrapassar todo o cabeçalho e megamenu, tentando identificar botões que são anunciados pelo leitor de tela sem nome acessível.

#### 3. Diagnóstico Qualitativo de Governança: A Hipótese da *Definition of Done (DoD)*
Em debate interno em nossa equipe sobre as causas dessas 7 falhas críticas técnicas em uma plataforma comercialmente robusta, recorremos aos conceitos metodológicos do nosso checklist de Gestão Ágil de Projetos. Nossa principal hipótese conclusiva é que as barreiras estruturais **não decorrem de limitações orçamentárias ou restrições tecnológicas da plataforma de e-commerce**, mas sim de uma lacuna clara nos processos de governança ágil e qualidade (*Quality Assurance*). A publicação rotineira de banners sem texto alternativo evidencia que a equipe de desenvolvimento e marketing opera sem exigir checagens de acessibilidade como critério obrigatório na **Definition of Done (DoD)** de suas entregas.

### 🎯 Plano de Ação (Recomendações do Grupo 9 para o Castelo Forte)

Para que o **Castelo Forte** supere essas barreiras estruturais e eleve seu índice de conformidade técnica dos atuais **54,8% para mais de 90%** — consolidando-se como referência nacional em acessibilidade digital no setor de construção civil —, nossa equipe propõe o seguinte roteiro estratégico fundamentado no ecossistema **CheckAAA**:

1. **Curto Prazo — Ações Corretivas de Código HTML (*Quick Wins*):**
   * **Inclusão de Rótulos ARIA nos Controles:** Adicionar os atributos `aria-label="Carrinho de Compras"`, `aria-label="Buscar Produtos"` e `aria-label="Fechar Promoção"` nos ícones vetoriais do topo e dos modais.
   * **Associação Programática de Formulários:** Inserir tags `<label class="sr-only">` ocultas visualmente (ou atributo `aria-label`) nos 7 campos de input identificados sem rótulo, garantindo que o leitor de tela vocalize corretamente a finalidade do campo ("Digite o nome do produto ou código").
   * **Marcos Semânticos e Atalhos de Teclado:** Envolver o bloco central de conteúdo das páginas com a tag `<main id="conteudo-principal">` e disponibilizar no topo da página o atalho *Skip Link* (`<a href="#conteudo-principal" class="skip-link">Pular para o conteúdo principal</a>`).

2. **Médio Prazo — Ajustes Visuais e Configuração do CMS:**
   * **Obrigatoriedade de `Alt Text` no Painel CMS:** Configurar o sistema administrativo da plataforma de e-commerce para bloquear a publicação de novos banners promocionais caso o atributo de texto alternativo (`alt`) não seja preenchido pela equipe de marketing.
   * **Adequação de Contraste e Touch Targets:** Ajustar a tonalidade dos links secundários em cinza claro no rodapé para atingir a razão mínima de 4.5:1 (WCAG AA) e ampliar a área de clique interativa (`padding`) dos ícones de paginação mobile para pelo menos 44x44 pixels.
   * **Controle de Movimento em Carrosséis:** Adicionar um botão discreto de "Pausar Rotação" no carrossel de banners da página inicial e configurar a retenção de foco de teclado (`focus trap`) no interior de modais promocionais ao serem acionados.

3. **Longo Prazo — Governança Ágil e CI/CD (Aplicação do Checklist de Gestão Interna):**
   * **Atualização da *Definition of Done (DoD)* das Sprints:** Reformular os critérios de aceite de tarefas (*User Stories*) das equipes front-end e marketing, estabelecendo como regra que nenhuma nova funcionalidade ou campanha entra em produção sem checagem positiva no checklist de acessibilidade do projeto.
   * **Automação de Linters no CI/CD:** Integrar ferramentas automatizadas de checagem (como o **Plugin Avaliador Heurístico CheckAAA v3.0** e o motor *axe-core*) no fluxo de testes contínuos da esteira de deploy, impedindo que modificações quebrem a semântica ou o contraste do portal.

> **Consideração Final da Equipe:** O **Castelo Forte** já conta com uma rede de atendimento humanizado exemplar e 35 anos de trajetória consolidada no Distrito Federal. Ao integrar a excelência de seu atendimento às diretrizes semânticas de acessibilidade digital recomendadas pelo **CheckAAA**, a plataforma garantirá uma experiência de compra moderna, equitativa e verdadeiramente inclusiva para todos os cidadãos.
