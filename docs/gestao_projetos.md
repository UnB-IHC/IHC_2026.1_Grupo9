# Checklist de Verificação de Acessibilidade: Gestão de Projetos (Agile/Scrum)

Este checklist é voltado para Product Owners (POs), Scrum Masters, Product Managers e Líderes de Projeto. Ele garante que a acessibilidade não seja tratada como um "puxadinho" no final do ciclo, mas sim integrada desde a concepção (Shift-Left) até a entrega contínua.

## 1. Planejamento e Orçamento
- [ ] **Alocação de Tempo:** O cronograma e os sprints preveem tempo dedicado especificamente para auditoria de acessibilidade, correção de bugs de interface e testes com usuários reais? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Orçamento para Inclusão:** Existe verba alocada para recrutar pessoas com deficiência (PcD) para testes de usabilidade, pagar intérpretes de Libras ou licenciar tecnologias assistivas para testes internos da equipe? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Priorização no Backlog:** Bugs de acessibilidade são tratados como bugs críticos impeditivos (Showstoppers) em vez de "melhorias futuras" no backlog? **[Guia de Boas Práticas]**

## 2. Requisitos e Definition of Done (DoD)
- [ ] **DoD Atualizado:** A Definição de Pronto (Definition of Done) das histórias de usuário e tarefas técnicas inclui a aprovação em critérios mínimos de acessibilidade (ex: "Passa nos testes automatizados do axe-core" ou "É 100% navegável por teclado")? **[WCAG Nível AA, Guia de Boas Práticas]**
- [ ] **Critérios de Aceite Inclusivos:** As User Stories descrevem necessidades de acessibilidade explicitamente em seus critérios de aceite? (Ex: "Dado que sou um usuário de leitor de tela, quando abro o modal, o foco deve ser aprisionado dentro dele"). **[WCAG 2.4.3, eMAG 4.3, ABNT NBR]**
- [ ] **Mapeamento de Restrições Técnicas:** Foram levantadas antecipadamente bibliotecas de código ou componentes visuais de terceiros que já se sabe que são inacessíveis para que sejam descartados da arquitetura? **[WCAG Princípio 4 (Robustez), Guia de Boas Práticas]**

## 3. Capacitação da Equipe
- [ ] **Treinamento Básico:** Todos os membros do time (Devs, Designers, QA) receberam algum treinamento ou cartilha básica sobre a WCAG e o modelo de acessibilidade eMAG? **[Guia de Boas Práticas]**
- [ ] **Cultura de Empatia:** A equipe técnica entende o impacto humano da acessibilidade ou ainda enxerga o tema apenas como "cumprimento de lei/compliance"? **[Guia de Boas Práticas]**
- [ ] **Papel do Especialista:** O time tem acesso a um especialista em acessibilidade digital (interno ou consultor) para tirar dúvidas pontuais durante o desenvolvimento, evitando retrabalho? **[Guia de Boas Práticas]**

## 4. Ferramentas e Infraestrutura de Qualidade (QA)
- [ ] **Integração Contínua (CI/CD):** O pipeline de entrega inclui testes automatizados de acessibilidade (ex: Lighthouse, axe-core) que quebram a build (bloqueiam o deploy) se a nota cair abaixo do limite estabelecido? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Testes Manuais Inseridos no Processo:** Os analistas de QA possuem roteiros de teste manuais que exigem navegação apenas com teclado, verificação de contraste em ferramentas e uso de leitores de tela básicos (NVDA/VoiceOver)? **[WCAG 2.1.1, WCAG 1.4.3, eMAG 4.1, ABNT NBR]**
- [ ] **Documentação Compartilhada:** O time mantém um Design System ou biblioteca de componentes onde os padrões acessíveis já estão documentados e prontos para reuso seguro? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**

## 5. Aquisições e Terceirizações (Procurement)
- [ ] **Cláusulas de Contrato:** Quando o projeto contrata uma agência terceirizada ou software externo (SaaS), o contrato exige comprovação de aderência à NBR ou WCAG nível AA? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Auditoria Externa:** Há previsão de contratação de auditorias externas independentes de acessibilidade antes do lançamento oficial de produtos de alto impacto? **[Guia de Boas Práticas]**

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
