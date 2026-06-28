# Checklist de Verificação de Acessibilidade: Design (UI/UX)

Este instrumento é projetado para designers, UX Researchers e UI Designers avaliarem protótipos, wireframes e designs finais (Figma, Sketch, Adobe XD) de acordo com a WCAG, NBR e Guias de Boas Práticas, antes do início da fase de desenvolvimento.

## 1. Cores e Contraste Visuais
- [ ] **Contraste de Texto:** Todo o texto (incluindo placeholders em formulários) atinge a taxa de contraste mínima de `4.5:1` com seu fundo? (Exceções apenas para logotipos ou textos decorativos). **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**
- [ ] **Textos Grandes:** Textos com 18pt (aprox. 24px) ou 14pt em negrito (aprox. 19px) alcançam a taxa de contraste mínima de `3.0:1`? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**
- [ ] **Contraste de Componentes Não-Textuais:** Elementos vitais de interface (bordas de botões, inputs, ícones essenciais) possuem taxa de contraste mínima de `3.0:1` com o fundo ao redor? **[WCAG 1.4.11, eMAG 3.1, ABNT NBR]**
- [ ] **Daltonismo e Significado de Cores:** A cor nunca é o ÚNICO meio visual utilizado para transmitir informações, indicar uma ação, pedir uma resposta ou distinguir um elemento? (Por exemplo, além de borda vermelha para erro, usar também um ícone e texto; links não devem ser diferenciados apenas por cor, mas também por sublinhado ou peso). **[WCAG 1.4.1, eMAG 3.2, ABNT NBR]**
- [ ] **Modo Escuro (Dark Mode):** Os critérios de contraste foram testados e aprovados tanto no tema claro quanto no escuro? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**

## 2. Tipografia e Legibilidade
- [ ] **Fontes Legíveis:** As fontes escolhidas são legíveis e claras, evitando famílias excessivamente estilizadas ou cursivas para blocos longos de texto? **[WCAG 1.4.8, eMAG 3.3, ABNT NBR]**
- [ ] **Tamanho da Fonte (Base):** O tamanho base da fonte para textos de parágrafo tem o mínimo recomendado para boa legibilidade (ideal de pelo menos 16px)? **[WCAG 1.4.4, eMAG 3.3, ABNT NBR]**
- [ ] **Espaçamento entre Linhas (Line-height):** O espaçamento entre linhas dentro de parágrafos é de no mínimo `1.5` vezes o tamanho da fonte? **[WCAG 1.4.12, eMAG 3.3, ABNT NBR]**
- [ ] **Espaçamento entre Parágrafos:** O espaçamento posterior aos parágrafos é de no mínimo `2` vezes o tamanho da fonte? **[WCAG 1.4.12, eMAG 3.3, ABNT NBR]**
- [ ] **Texto em Imagem:** Não há imagens de textos onde o texto puder ser renderizado utilizando HTML/CSS (exceções apenas para logotipos e logomarcas)? **[WCAG 1.4.5, eMAG 6.1, ABNT NBR]**
- [ ] **Alinhamento do Texto:** Textos longos estão alinhados à esquerda (ou direita em idiomas RTL), evitando a justificação total que cria "rios de branco" e dificulta a leitura por pessoas com dislexia? **[WCAG 1.4.8, eMAG 3.3, ABNT NBR]**

## 3. Navegação e Arquitetura da Informação
- [ ] **Consistência Visual:** Elementos que repetem funcionalidades similares (como botões de busca, ícones de menu, links de ajuda) possuem o mesmo estilo visual em todo o projeto? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**
- [ ] **Orientação da Tela:** O design está preparado para funcionar de forma aceitável em orientações de retrato (portrait) e paisagem (landscape) sem forçar o usuário a girar a tela do dispositivo? **[WCAG 1.3.4, eMAG 3.5, ABNT NBR]**
- [ ] **Identificação da Localização:** A interface apresenta mecanismos que mostram ao usuário onde ele está (Breadcrumbs, abas destacadas, título de página visível)? **[WCAG 2.4.8, eMAG 3.6, ABNT NBR]**
- [ ] **Múltiplos Caminhos:** Existe mais de uma maneira de localizar uma tela, funcionalidade ou página (por exemplo: menu principal + ferramenta de busca + mapa do site)? **[WCAG 2.4.5, eMAG 3.6, ABNT NBR]**

## 4. Área de Toque (Touch Targets)
- [ ] **Tamanho do Alvo:** Todos os elementos interativos (botões, links soltos, checkboxes) possuem uma área de toque mínima de `44 x 44 CSS pixels` (exigência da WCAG 2.1 AAA) ou no mínimo absoluto `24 x 24 pixels` (WCAG 2.2 AA)? **[WCAG 2.5.5, WCAG 2.5.8, eMAG 3.7, ABNT NBR]**
- [ ] **Espaçamento entre Alvos:** Elementos clicáveis próximos têm um espaçamento (margin/padding) adequado entre eles para evitar cliques acidentais (fat-finger syndrome)? **[WCAG 2.5.8, eMAG 3.7, ABNT NBR]**

## 5. Estados e Feedback Interativo
- [ ] **Estados Definidos:** Os protótipos contemplam documentação de design para todos os estados interativos: *Default*, *Hover*, *Focus* (foco do teclado), *Active*, *Disabled* e *Error*? **[WCAG 2.4.7, eMAG 3.8, ABNT NBR]**
- [ ] **Indicador de Foco:** O estado de foco do teclado foi desenhado de forma intencional, com alto contraste contra o fundo e altamente visível? **[WCAG 2.4.7, WCAG 2.4.11, eMAG 3.8, ABNT NBR]**
- [ ] **Prevenção de Erros:** O design prevê revisões ou confirmações antes de finalizações de tarefas importantes, como transações financeiras ou deleções definitivas? **[WCAG 3.3.4, eMAG 3.9, ABNT NBR]**

## 6. Animações e Movimento
- [ ] **Paralaxe e Movimentos Complexos:** Existe a opção ou planejamento no design para permitir que o usuário desative animações não essenciais (respeitando a preferência de sistema *prefers-reduced-motion*)? **[WCAG 2.3.3, eMAG 3.10, ABNT NBR]**
- [ ] **Cintilação:** As interfaces e vídeos propostos evitam componentes piscando com mais de 3 flashes por segundo? **[WCAG 2.3.1, eMAG 3.10, ABNT NBR]**

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
