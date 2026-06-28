# Template do Relatório de Auditoria Instantânea

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

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C. Outubro de 2023.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*.
*   **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.
