# Checklist de Verificação de Acessibilidade: Desenvolvimento Web

Este checklist é um instrumento detalhado e prático para verificar a conformidade do código-fonte e da implementação web com a WCAG (Web Content Accessibility Guidelines), normas da ABNT e o eMAG (Modelo de Acessibilidade em Governo Eletrônico). Utilize-o durante o desenvolvimento e nos testes de controle de qualidade (QA).

## 1. Semântica e Estrutura do Documento HTML
- [ ] **Idioma:** A tag `<html>` possui o atributo `lang` definido corretamente (ex: `lang="pt-BR"`)? **[WCAG 3.1.1, eMAG 2.1, ABNT NBR]**
- [ ] **Mudanças de Idioma:** Partes do texto em um idioma diferente do principal possuem o atributo `lang` específico para auxiliar leitores de tela? **[WCAG 3.1.2, eMAG 2.2, ABNT NBR]**
- [ ] **Título da Página:** O elemento `<title>` é único, descritivo e identifica claramente o propósito da página atual? **[WCAG 2.4.2, eMAG 2.3, ABNT NBR]**
- [ ] **Hierarquia de Cabeçalhos:** Os cabeçalhos (`<h1>` a `<h6>`) estão em ordem lógica, sem pular níveis (ex: não ir de `<h1>` para `<h3>`)? **[WCAG 1.3.1, WCAG 2.4.6, eMAG 2.4, ABNT NBR]**
- [ ] **Cabeçalho Principal:** Existe apenas um `<h1>` por página (ou view principal) descrevendo o conteúdo central? **[WCAG 1.3.1, eMAG 2.4, ABNT NBR]**
- [ ] **Landmarks Semânticos:** As regiões da página estão marcadas corretamente com `<header>`, `<nav>`, `<main>`, `<footer>` e `<aside>`? **[WCAG 1.3.1, WCAG 2.4.1, eMAG 2.5, ABNT NBR]**
- [ ] **Listas:** Itens agrupados visualmente em listas estão semanticamente estruturados usando `<ul>`, `<ol>` ou `<dl>`? **[WCAG 1.3.1, eMAG 2.6, ABNT NBR]**
- [ ] **Tabelas de Dados:** Tabelas utilizam as tags `<th>` para cabeçalhos e estão associadas às células de dados usando os atributos `scope` ("row" ou "col")? **[WCAG 1.3.1, eMAG 5.1, ABNT NBR]**
- [ ] **Tabelas Visuais:** Tabelas não são utilizadas puramente para estruturar o layout visual da página? **[WCAG 1.3.1, eMAG 5.2, ABNT NBR]**

## 2. Navegação e Interação por Teclado
- [ ] **Acesso via Teclado:** Todas as funcionalidades da página podem ser operadas usando apenas a tecla `Tab`, `Shift + Tab`, `Enter`, `Espaço` e as setas direcionais? **[WCAG 2.1.1, eMAG 4.1, ABNT NBR]**
- [ ] **Foco Visível:** O indicador de foco (outline/borda) é claramente visível em todos os elementos interativos e não foi removido (nunca use `outline: none` sem substituir por outro estilo de foco evidente)? **[WCAG 2.4.7, eMAG 4.2, ABNT NBR]**
- [ ] **Ordem do Foco:** A ordem de tabulação segue o fluxo visual e lógico do conteúdo da página? **[WCAG 2.4.3, eMAG 4.3, ABNT NBR]**
- [ ] **Armadilha de Teclado:** O foco do teclado não fica "preso" em nenhum componente (como em um modal ou widget iframe) sem que o usuário consiga sair usando apenas o teclado (geralmente via `Esc` ou continuando o `Tab`)? **[WCAG 2.1.2, eMAG 4.1, ABNT NBR]**
- [ ] **Pular Navegação:** Existe um link de "Pular para o conteúdo principal" que é o primeiro elemento focável da página? **[WCAG 2.4.1, eMAG 4.4, ABNT NBR]**
- [ ] **Atalhos:** Se a aplicação tiver atalhos de teclado de uma única letra, há uma forma de desativá-los ou remapeá-los? **[WCAG 2.1.4, eMAG 4.1, ABNT NBR]**

## 3. Imagens e Elementos Multimídia
- [ ] **Imagens com Significado:** Imagens informativas, gráficos e fotografias possuem o atributo `alt` preenchido com uma descrição clara e equivalente? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Imagens Decorativas:** Imagens puramente decorativas (que não adicionam informação ao texto) possuem `alt=""` (vazio) para serem ignoradas por leitores de tela? **[WCAG 1.1.1, eMAG 6.2, ABNT NBR]**
- [ ] **Imagens Complexas:** Gráficos e infográficos complexos possuem um texto alternativo longo acessível em outra parte da página ou linkado (usando `aria-describedby` ou um link próximo)? **[WCAG 1.1.1, eMAG 6.3, ABNT NBR]**
- [ ] **SVGs:** Ícones SVG informativos possuem `<title>` interno e estão marcados com `role="img"` e `aria-label` apropriado? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Player de Mídia:** Os controles de vídeos e áudios são acessíveis via teclado e expõem seus estados a tecnologias assistivas? **[WCAG 2.1.1, WCAG 4.1.2, eMAG 6.4, ABNT NBR]**

## 4. Formulários e Validação
- [ ] **Labels Explícitas:** Todo campo de entrada (`input`, `textarea`, `select`) possui um rótulo `<label>` associado programaticamente (usando `for` apontando para o `id` do campo)? **[WCAG 1.3.1, WCAG 3.3.2, eMAG 7.1, ABNT NBR]**
- [ ] **Placeholder:** O texto de "placeholder" não é utilizado como substituto para o `<label>` real? **[WCAG 3.3.2, eMAG 7.1, ABNT NBR]**
- [ ] **Instruções:** Campos obrigatórios e formatos esperados (ex: formato de data, requisitos de senha) estão descritos em texto fora do campo e preferencialmente linkados via `aria-describedby`? **[WCAG 3.3.2, eMAG 7.2, ABNT NBR]**
- [ ] **Agrupamento:** Conjuntos de radio buttons e checkboxes estão agrupados semanticamente dentro de um `<fieldset>` e identificados por um `<legend>`? **[WCAG 1.3.1, WCAG 3.3.2, eMAG 7.3, ABNT NBR]**
- [ ] **Mensagens de Erro Textuais:** Erros de validação não dependem apenas de cores (ex: borda vermelha); incluem mensagens de texto claras indicando onde está o erro e como corrigi-lo. **[WCAG 3.3.1, WCAG 3.3.3, eMAG 7.4, ABNT NBR]**
- [ ] **Aviso de Erro:** Quando um formulário é submetido com erro, o foco é levado para o primeiro campo inválido ou para a lista de erros? **[WCAG 3.3.1, eMAG 7.4, ABNT NBR]**
- [ ] **Preenchimento Automático:** Campos que solicitam dados pessoais comuns (nome, e-mail, telefone) utilizam o atributo `autocomplete` com os tokens adequados? **[WCAG 1.3.5, ABNT NBR]**

## 5. Componentes Dinâmicos e ARIA
- [ ] **Notificações:** Mudanças de estado dinâmicas, mensagens de sucesso ou de erro são anunciadas para leitores de tela usando ARIA live regions (`aria-live="polite"` ou `aria-live="assertive"` / `role="alert"`)? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] **Estados Expansíveis:** Elementos expansíveis como sanfonas (accordions) ou menus dropdown gerenciam corretamente o atributo `aria-expanded="true/false"`? **[WCAG 4.1.2, eMAG 4.5, ABNT NBR]**
- [ ] **Modais e Diálogos:** Quando um modal é aberto, o foco é transferido para dentro dele, o resto do site fica inativo (`aria-hidden="true"` ou tag `<dialog>`), e ao fechar o foco retorna ao botão que o acionou? **[WCAG 2.4.3, WCAG 4.1.2, eMAG 4.5, ABNT NBR]**
- [ ] **Uso Responsável do ARIA:** A regra de ouro foi seguida? (Não usar ARIA se você puder usar um elemento HTML semântico nativo e com a mesma funcionalidade). **[WCAG 4.1.2, eMAG 2.7, ABNT NBR]**

## 6. Tempo e Sessão
- [ ] **Avisos de Tempo:** Se há tempo limite de sessão ou de preenchimento, o usuário é alertado e pode solicitar a extensão do tempo (antes da expiração)? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] **Animações e Pausas:** Carrosséis de banners, vídeos ou GIFs em reprodução automática possuem controles evidentes para Pausar, Parar ou Ocultar a animação? **[WCAG 2.2.2, eMAG 4.7, ABNT NBR]**

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
