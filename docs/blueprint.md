# Checklist de Verificação de Acessibilidade no Blueprint do Serviço (Service Blueprint)

O Service Blueprint mapeia a jornada completa do serviço (online e offline), conectando o frontstage e backstage. Este checklist assegura que, em toda a cadeia de entrega de valor, a inclusão de pessoas com deficiência seja avaliada e garantida de ponta a ponta.

## 1. Avaliação de Evidências Físicas e Digitais (Physical/Digital Evidence)
- [ ] **Múltiplos Formatos:** Todos os documentos, notificações e comunicados (ex: faturas por e-mail, boletos, recibos gerados) enviados ao longo da jornada contam com formatos acessíveis (PDFs tagueados, e-mails em HTML semântico com bom contraste, audiodescrição)? **[WCAG Princípio 1 (Perceptível), eMAG 6.9, ABNT NBR]**
- [ ] **Dispositivos e Quiosques Físicos:** Se a jornada do sistema incluir uso de terminais de autoatendimento, eles oferecem suporte para teclado/fone de ouvido, contraste adaptado e estão na altura correta para usuários de cadeira de rodas? **[ABNT NBR 15206, Guia de Boas Práticas]**
- [ ] **Avisos do Sistema:** As comunicações do sistema (SMS, e-mail de alerta, push notification) possuem linguagem clara e podem ser interceptadas pelas tecnologias assistivas que o usuário utiliza em seus dispositivos pessoais? **[WCAG 4.1.3, eMAG 1.1, ABNT NBR]**

## 2. Avaliação das Ações do Usuário (Customer Actions)
- [ ] **Esforço Cognitivo Mapeado:** A quantidade de passos que o usuário precisa dar na jornada de uso exige memorização excessiva? Existe apoio no blueprint para reduzir a carga cognitiva? **[WCAG 3.3.7 (Redundant Entry), eMAG 3.6, ABNT NBR]**
- [ ] **Flexibilidade de Tempo:** Quando o usuário realiza uma ação da jornada, ele pode fazer isso em seu próprio tempo? O blueprint prevê pausas em processos longos sem a perda do progresso? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] **Canal Alternativo Equitativo:** Caso um usuário não consiga concluir uma ação no canal digital primário (por barreira visual, motora ou cognitiva temporária), existe um canal alternativo documentado na jornada (ex: atendimento telefônico especializado, chat com atendente humano)? **[WCAG Princípio 2 (Operável), Guia de Boas Práticas]**

## 3. Avaliação das Ações de Frontstage (Visible Contact Employee/Tech)
- [ ] **Treinamento de Atendentes (Contact Center/Chat):** A linha de interação prevê que os funcionários de linha de frente estão capacitados para apoiar usuários com deficiência (ex: conhecimento de suporte via vídeo para língua de sinais, atendimento a usuários de retransmissão, empatia na comunicação)? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] **Comunicação por Chatbots:** O chatbot desenhado no blueprint compreende falhas comuns de digitação de pessoas com deficiências motoras e oferece botões rápidos (acessíveis pelo teclado) como alternativas à digitação livre? **[WCAG 2.1.1, eMAG 4.1, ABNT NBR]**
- [ ] **Resolução de Problemas (Recuperação de Erros):** No mapeamento do fluxo, se o usuário encontrar uma barreira, o frontstage proativamente identifica e resolve? A mensagem de erro em um checkout provê uma linha direta de ajuda contextualizada? **[WCAG 3.3.3, eMAG 7.4, ABNT NBR]**

## 4. Avaliação das Ações de Backstage (Invisible Actions / Systems)
- [ ] **Armazenamento de Preferências:** O banco de dados ou CRM está configurado no backstage para armazenar as preferências de acessibilidade e canais do usuário (ex: "este usuário prefere receber ligações, este outro prefere alto contraste ou precisa de intérprete")? **[Guia de Boas Práticas]**
- [ ] **APIs e Integrações:** Se um serviço terceiro de CAPTCHA for acionado, este sistema de segurança é acessível (suporta opções de áudio ou desafio lógico em vez de apenas imagem)? O blueprint prevê substituição se a API parceira não for acessível? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] **Desempenho de Servidores (Timeouts):** O processamento assíncrono do backstage considera que as respostas devem retornar adequadamente para as tecnologias assistivas, alertando o usuário sobre o status de "Carregando..." de forma audível? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**

## 5. Avaliação de Processos de Suporte (Support Processes)
- [ ] **Auditorias Regulares:** O processo de suporte mapeia rotinas de auditoria de qualidade e testes de acessibilidade regulares ao longo da vida do serviço? **[Guia de Boas Práticas, Metodologia Ágil]**
- [ ] **Política de Contratação de Fornecedores:** Existe uma política que exige dos fornecedores de TI terceirizados componentes já acessíveis pelas normas da NBR e WCAG 2.1+? **[Guia de Boas Práticas]**
- [ ] **Suporte a Tecnologias Assistivas Internas:** Se houver funcionários e analistas com deficiência trabalhando na operação deste serviço (backstage/frontstage), as ferramentas operacionais internas e painéis administrativos também são acessíveis para eles? **[WCAG Nível AA, Guia de Boas Práticas]**

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
