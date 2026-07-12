# Templates de Relatórios de Avaliação (Manual & Automatizada)

Este documento disponibiliza os **templates padronizados por nossa equipe (Grupo 9 de IHC - UnB)** para a documentação e emissão de relatórios de auditoria no ecossistema **CheckAAA**.

Para atender aos diferentes níveis de profundidade na verificação de interfaces digitais, estruturamos dois modelos complementares que devem ser utilizados em nossas avaliações:

1. **Template 1: Relatório de Avaliação Manual Completa (`.md`)**  
   Modelo estruturado para auditorias aprofundadas conduzidas por especialistas em IHC e Acessibilidade. Segrega metodologicamente os **7 Checklists Verificáveis (42 critérios inspecionados via interface/DOM)** dos **3 Checklists de Processos Internos (14 critérios não contabilizados)**, apresentando painel quantitativo, justificativas técnicas, análise de causa-raiz e roadmap de soluções.

2. **Template 2: Relatório de Auditoria Automatizada Instantânea (`.txt` / `.md`)**  
   Modelo de saída rápida exportado pela nossa extensão de navegador (**Avaliador Heurístico Híbrido v3.0**). Compila automaticamente os **18 critérios de verificação instantânea do DOM** (WCAG 2.2, Heurísticas de Nielsen, Personas e Service Blueprint).

---

## 📋 Template 1: Relatório de Avaliação Manual Completa (`.md`)

Utilize a estrutura abaixo ao documentar uma auditoria manual de especialista (como a realizada no site [Castelo Forte](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/avaliacao_castelo_forte.md)).

```markdown
# Relatório de Avaliação Manual de IHC e Acessibilidade — [Nome do Sistema / Site]

Este documento apresenta o relatório prático de **Avaliação Manual** elaborado por **nós, do Grupo 9 (IHC - UnB)**, sobre o portal [Nome do Sistema / Site].

Para conduzir esta análise de forma aprofundada, sem a intervenção exclusiva de varreduras automatizadas, aplicamos os **Checklists de Verificação do Projeto CheckAAA (desenvolvidos por nossa equipe)** diretamente na interface do portal. Inspecionamos a árvore de elementos (DOM), testamos a navegação por teclado, executamos leitores de tela na prática e analisamos a experiência de uso ponta a ponta.

---

## Dados da Avaliação & Resumo Executivo

> [!NOTE]
> **Objeto de Estudo:** [Nome do Sistema / Empresa e Breve Contexto]  
> **Autoria da Avaliação:** Equipe do Grupo 9 - Disciplina de IHC (Universidade de Brasília - UnB)  
> **Metodologia:** Inspeção Manual Heurística e de Acessibilidade baseada no ecossistema CheckAAA  
> **Escopo da Análise:** [Páginas inspecionadas: ex: Home, Login, Catálogo, Carrinho, Checkout]  
> **URL Analisada:** [URL do site analisado](https://exemplo.com.br/)  
> **Data da Avaliação:** [Mês/Ano]

### 🚫 Escopo de Verificação: Checklists Contabilizados vs. Não Contabilizados

No âmbito do nosso projeto **CheckAAA**, desenvolvemos **10 checklists temáticos (somando 56 critérios no total)** para cobrir desde a codificação front-end até a governança corporativa e agilidade. No entanto, para garantir rigor metodológico e justiça no cálculo da nota técnica do site **[Nome do Site]**, nossa equipe segmentou o ecossistema em duas categorias:

1. **Checklists Verificáveis e Contabilizados na Nota (7 Checklists / 42 Critérios):** São aqueles cujos atributos conseguimos inspecionar diretamente acessando a URL pública — analisando a interface visual, a árvore DOM (HTML/CSS), a resposta ao teclado, a vocalização em leitores de tela e os canais públicos de atendimento (*Frontstage*).
2. **Checklists Não Contabilizados / Excluídos do Cálculo (3 Checklists / 14 Critérios):** Optamos por deixar exatamente **3 checklists de fora do cálculo quantitativo (Gestão de Projetos, Design Empático e Condução de Testes de Usabilidade)** porque eles avaliam **processos internos de governança da empresa, dinâmicas de escritório do time e sessões empíricas de laboratório com usuários recrutados**. Como nossa avaliação externa opera no formato *caixa preta* (a partir do produto final em produção), não temos acesso aos ritos internos de trabalho da empresa.

> [!IMPORTANT]
> **Justificativa Detalhada dos 3 Checklists Não Contabilizados:**
> * **1. Checklist de Gestão de Projetos (Agile/Scrum & DoD) — 5 critérios excluídos:** Avalia a alocação de orçamento para QA acessível, se os desenvolvedores possuem capacitação em WCAG, se a *Definition of Done (DoD)* das sprints exige acessibilidade e se os contratos possuem cláusulas inclusivas. **Por que ficou de fora:** Como não possuímos acesso ao Jira, ao backlog ou às reuniões da equipe, seria metodologicamente incorreto pontuar positivamente ou penalizar a plataforma por critérios não observáveis na URL pública.
> * **2. Checklist de Design Empático — 4 critérios excluídos:** Avalia se o time de UX conduziu entrevistas etnográficas na fase de concepção, elaborou Mapas de Empatia e realizou dinâmicas internas (como navegar com os olhos vendados). **Por que ficou de fora:** Trata-se de artefatos da fase de *Discovery* e concepção interna de design. O código-fonte final não indica se a equipe realizou dinâmicas em seu escritório.
> * **3. Checklist de Testes de Usabilidade (Think-Aloud & SUS) — 5 critérios excluídos:** Este é o roteiro metodológico do nosso projeto para a aplicação de sessões moderadas com participantes recrutados em laboratório, coletando verbalizações e aplicando o questionário SUS. **Por que ficou de fora:** O objetivo desta avaliação é conduzir uma **Inspeção Técnica de Especialistas por nossa equipe**, sem recrutamento de amostra externa de usuários nesta etapa.

---

### Painel Geral da Nossa Avaliação (7 Checklists Verificáveis / 42 Critérios Contabilizados)

Olhando exclusivamente para os **42 critérios que nossa equipe conseguiu verificar na prática**, este é o desempenho técnico consolidado do portal **[Nome do Site]**:

| # | Checklist / Dimensão Avaliada (Contabilizados) | Total de Critérios | ✅ Adequados | ⚠️ Pontos de Atenção | ❌ Falhas Críticas | Índice de Adequação |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: |
| **1** | [Desenvolvimento Web (Código e Estrutura)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/desenvolvimentoweb.md) | **6** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **2** | [Geração de Conteúdo e Redação (UX Writing)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/conteudo.md) | **6** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **3** | [Design de Interfaces e UX (UI/UX)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/design.md) | **6** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **4** | [Avaliação Heurística Inclusiva (Nielsen)](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/heuristicas.md) | **10** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **5** | [Construção de Personas](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/personas.md) | **5** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **6** | [Service Blueprint & Jornada do Usuário](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/blueprint.md) | **5** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **7** | [Ferramentas e Validação de QA / Híbrida](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/ferramentas.md) | **4** | [Qtd] | [Qtd] | [Qtd] | **[Porcentagem]%** |
| **—** | **TOTAL CONSOLIDADO (VERIFICÁVEIS)** | **42** | **[Total ✅]** | **[Total ⚠️]** | **[Total ❌]** | **[Índice Geral]%** |

---

## Diagnóstico Detalhado dos 7 Checklists Contabilizados

### [Repetir esta estrutura para cada um dos 7 Checklists Verificáveis]

- [x] **1. Nome do Critério (`<tag_ou_conceito>`)**
  * **O que avaliamos:** Descrição técnica e normativa do atributo inspecionado.
  * **Resultado:** `✅ Adequado` *(ou `⚠️ Atenção` ou `❌ Falha Crítica`)*
  * **Análise da equipe:** Descrição exata do que foi encontrado ao analisar o DOM, ao interagir via teclado ou ao executar o leitor de tela no portal.

---

## Seção Informativa: Visão Geral dos 3 Checklists Não Contabilizados na Nota

Embora não entrem no cálculo da nossa nota técnica final, apresentamos abaixo os **3 checklists não contabilizados como recomendações metodológicas e de governança da nossa equipe** para a evolução interna da plataforma:

* **8. Checklist de Design Empático (4 critérios — Não Contabilizado):** Recomendamos que os desenvolvedores front-end e designers realizem dinâmicas periódicas de navegação no site utilizando apenas o teclado e o leitor de tela com o monitor desligado.
* **9. Checklist de Gestão de Projetos e Agilidade DoD (5 critérios — Não Contabilizado):** Em nossa análise, a principal hipótese para as falhas críticas técnicas no site é a **ausência de checagens obrigatórias de acessibilidade na Definition of Done (DoD) interna da equipe**.
* **10. Checklist de Condução de Testes de Usabilidade / Think-Aloud (5 critérios — Não Contabilizado):** Recomendamos a condução semestral de rodadas empíricas de laboratório aplicando o protocolo *Think-Aloud* com amostras mistas de participantes.

---

## 💡 Conclusão da Nossa Avaliação — Síntese Quantitativa e Qualitativa

### 📊 Síntese Quantitativa da Nota Técnica
Consolidando os **42 critérios que nossa equipe inspecionou diretamente na interface e no código-fonte**, o site atingiu **[Porcentagem]% de conformidade plena (`✅ Adequado`)**, **[Porcentagem]% de pontos de alerta (`⚠️ Atenção`)** e **[Porcentagem]% de falhas críticas de acessibilidade (`❌ Falha Crítica`)**.

### 🔍 Análise Qualitativa (O Duplo Padrão de Experiência e a Hipótese de Governança)
[Detalhar como o sistema opera para o usuário normovisual com mouse no Frontstage versus as barreiras estruturais enfrentadas por utilizadores de tecnologias assistivas no Backstage e código HTML, conectando à hipótese de governança da DoD.]

### 🎯 Plano de Ação (Recomendações do Grupo 9)
1. **Curto Prazo (*Quick Wins* de Código HTML):** [Listar correções imediatas de ARIA, `<main>`, `<label>` e *Skip Links*].
2. **Médio Prazo (Ajustes Visuais e CMS):** [Listar regras de obrigatoriedade de `alt` no CMS, contraste 4.5:1 e carrosséis].
3. **Longo Prazo (Governança Ágil e CI/CD):** [Listar inclusão de A11y na *Definition of Done (DoD)* e linters na esteira de deploy].
```

---

## ⚡ Template 2: Relatório de Auditoria Automatizada Instantânea (`.txt` / `.md`)

Este é o formato de saída padronizado gerado automaticamente pela nossa extensão **CheckAAA (Avaliador Heurístico Híbrido v3.0)**. Quando o avaliador roda a extensão na página do navegador e clica em **"📥 Gerar Relatório Completo (.txt)"**, o motor do plugin compila os **18 critérios inspecionados automaticamente** na seguinte estrutura:

```text
====================================================================
        RELATÓRIO DE AUDITORIA INSTANTÂNEA - CheckAAA               
  Acessibilidade (WCAG 2.2 / ABNT), UX, Usabilidade e Jornadas      
====================================================================

[ DADOS DA AUDITORIA ]
Data e Hora : 28/06/2026 às 16:28:20
Página      : Portal do Cidadão - Acesso
URL         : https://exemplo-sistema.com.br/login

[ RESUMO EXECUTIVO ]
Total Avaliado : 18 critérios
✅ Adequados   : 12
⚠️ Atenção     : 2
❌ Falhas      : 4

====================================================================
                  AVALIAÇÃO DETALHADA POR CRITÉRIO                  
====================================================================

[ ITEM 1 ] IDIOMA DA PÁGINA (<HTML LANG>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (3.1.1) • eMAG 3.1 • ABNT NBR 17060
O que avaliamos   : Define a pronúncia correta para leitores de tela usados por pessoas com deficiência visual.
Resultado         : ✅ Adequado
Análise da ferramenta: Idioma detectado automaticamente: "pt-BR".
--------------------------------------------------------------------

[ ITEM 2 ] TÍTULO DA PÁGINA (<TITLE>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (2.4.2) • eMAG 2.3 • ABNT NBR 17060
O que avaliamos   : O título deve ser único e descritivo para orientar a navegação e o contexto na aba do navegador.
Resultado         : ✅ Adequado
Análise da ferramenta: Título detectado: "Portal do Cidadão - Acesso".
--------------------------------------------------------------------

[ ITEM 3 ] HIERARQUIA DE CABEÇALHOS (<h1>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.3.1) • eMAG 2.4 • ABNT NBR 17060
O que avaliamos   : A página deve possuir exatamente um <h1> principal e manter ordem lógica sem saltos bruscos.
Resultado         : ✅ Adequado
Análise da ferramenta: Estrutura de cabeçalhos única e hierarquia em ordem lógica.
--------------------------------------------------------------------

[ ITEM 4 ] MARCOS SEMÂNTICOS (LANDMARKS)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.3.1) • eMAG 2.5 • ABNT NBR 17060
O que avaliamos   : Uso de tags semânticas (<header>, <main>, <nav>, <footer>) para navegação rápida por tecnologias assistivas.
Resultado         : ✅ Adequado
Análise da ferramenta: Marcos semânticos detectados perfeitamente: <header>, <main>, <nav>, <footer>.
--------------------------------------------------------------------

[ ITEM 5 ] ALTERNATIVAS TEXTUAIS EM IMAGENS (ALT)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (1.1.1) • eMAG 6.1 • ABNT NBR 17060
O que avaliamos   : Imagens informativas exigem descrição textual; imagens decorativas devem ter alt vazio (alt="").
Resultado         : ❌ Falha Crítica
Análise da ferramenta: Encontradas 2 imagem(ns) (de 8) sem o atributo 'alt'.
--------------------------------------------------------------------

[ ITEM 6 ] RÓTULOS DE FORMULÁRIOS (<LABEL>)
Categoria         : Acessibilidade
Base Normativa    : WCAG 2.2 (3.3.2) • eMAG 7.1 • ABNT NBR 17060
O que avaliamos   : Todo campo interativo deve ter um rótulo explícito associado programaticamente.
Resultado         : ✅ Adequado
Análise da ferramenta: Todos os 4 campos possuem rótulos adequados.
--------------------------------------------------------------------

[ ITEM 7 ] VISIBILIDADE DO STATUS DO SISTEMA
Categoria         : UX / Heurística 1
Base Normativa    : Nielsen H1 • Feedback Contínuo
O que avaliamos   : O sistema mantém o usuário informado sobre o que está acontecendo (ex: spinners, barras de progresso).
Resultado         : ✅ Adequado
Análise da ferramenta: Indicadores de progresso ou carregamento detectados na estrutura da interface.
--------------------------------------------------------------------

[ ITEM 8 ] COMPATIBILIDADE COM O MUNDO REAL
Categoria         : UX / Heurística 2
Base Normativa    : Nielsen H2 • Linguagem Simples
O que avaliamos   : A interface fala a linguagem do usuário, sem expor códigos de erro técnicos bruto (ex: 'undefined', 'NaN').
Resultado         : ❌ Falha Crítica
Análise da ferramenta: Vazamento de termos técnicos de erro na interface: "erro 500, nullpointer".
--------------------------------------------------------------------

[ ITEM 9 ] CONTROLE E LIBERDADE DO USUÁRIO
Categoria         : UX / Heurística 3
Base Normativa    : Nielsen H3 • Saídas de Emergência
O que avaliamos   : Presença de botões claros de Voltar, Cancelar ou Fechar para reverter ações indesejadas.
Resultado         : ✅ Adequado
Análise da ferramenta: Botões ou links de retorno/cancelar/início identificados na navegação.
--------------------------------------------------------------------

[ ITEM 10 ] CONSISTÊNCIA E PADRÕES
Categoria         : UX / Heurística 4
Base Normativa    : Nielsen H4 • Padronização Visual
O que avaliamos   : Elementos interativos (botões e links) seguem convenções e estilos consistentes em toda a tela.
Resultado         : ✅ Adequado
Análise da ferramenta: Elementos de interação mantêm marcação semântica padronizada de botões e links.
--------------------------------------------------------------------

[ ITEM 11 ] PREVENÇÃO DE ERROS
Categoria         : UX / Heurística 5
Base Normativa    : Nielsen H5 • WCAG 2.2 (3.3.1)
O que avaliamos   : Campos utilizam atributos de validação, restrição de formato ou máscaras antes da submissão.
Resultado         : ✅ Adequado
Análise da ferramenta: Atributos preventivos de validação detectados nos campos do formulário.
--------------------------------------------------------------------

[ ITEM 12 ] RECONHECIMENTO VS. MEMORIZAÇÃO
Categoria         : UX / Heurística 6
Base Normativa    : Nielsen H6 • Carga Cognitiva
O que avaliamos   : Redução do esforço de memória usando autocomplete e instruções visíveis.
Resultado         : ⚠️ Atenção
Análise da ferramenta: Sugere-se adicionar o atributo 'autocomplete' nos campos para reduzir esforço de memorização.
--------------------------------------------------------------------

[ ITEM 13 ] FLEXIBILIDADE E EFICIÊNCIA DE USO
Categoria         : UX / Heurística 7
Base Normativa    : Nielsen H7 • Aceleradores
O que avaliamos   : Presença de atalhos ou links de 'Pular para o conteúdo principal' para otimizar a navegação.
Resultado         : ✅ Adequado
Análise da ferramenta: Atalho 'Pular para o conteúdo principal' encontrado para acelerar navegação por teclado.
--------------------------------------------------------------------

[ ITEM 14 ] ESTÉTICA E DESIGN MINIMALISTA (RESPONSIVIDADE)
Categoria         : UX / Heurística 8
Base Normativa    : Nielsen H8 • Meta Viewport • ABNT NBR 15206
O que avaliamos   : Design limpo e adaptável a dispositivos móveis (presença de meta viewport responsiva).
Resultado         : ✅ Adequado
Análise da ferramenta: Meta viewport presente. Design adaptável e minimalista para telas menores.
--------------------------------------------------------------------

[ ITEM 15 ] AJUDAR NA RECUPERAÇÃO DE ERROS
Categoria         : UX / Heurística 9
Base Normativa    : Nielsen H9 • ARIA Alerts
O que avaliamos   : Mensagens de erro são construtivas e utilizam regiões de alerta (role='alert') para notificação.
Resultado         : ✅ Adequado
Análise da ferramenta: Regiões acessíveis de notificação de erro (role='alert' ou aria-live) estão configuradas.
--------------------------------------------------------------------

[ ITEM 16 ] AJUDA E DOCUMENTAÇÃO
Categoria         : UX / Heurística 10
Base Normativa    : Nielsen H10 • Suporte ao Usuário
O que avaliamos   : Fácil acesso a canais de suporte, perguntas frequentes (FAQ), centrais de ajuda ou contato.
Resultado         : ✅ Adequado
Análise da ferramenta: Canais de suporte, FAQ ou contato facilmente localizados na interface.
--------------------------------------------------------------------

[ ITEM 17 ] ADERÊNCIA A TECNOLOGIAS ASSISTIVAS (PERSONAS)
Categoria         : Personas & Jornada
Base Normativa    : Checklist de Personas • WCAG 4.1.2
O que avaliamos   : Verifica se todos os botões e controles possuem rótulo de voz para personas que utilizam leitores de tela.
Resultado         : ✅ Adequado
Análise da ferramenta: Controles interativos amigáveis para personas com deficiência visual (todos rotulados).
--------------------------------------------------------------------

[ ITEM 18 ] CANAIS ALTERNATIVOS E EVIDÊNCIAS (FRONTSTAGE)
Categoria         : Service Blueprint
Base Normativa    : Service Blueprint • Atendimento Equitativo
O que avaliamos   : A jornada oferece pontos de contato evidentes para suporte humano ou canais alternativos em caso de barreiras.
Resultado         : ⚠️ Atenção
Análise da ferramenta: Recomendação do Blueprint: adicionar ponto de contato evidente em caso de falha no autoatendimento.
--------------------------------------------------------------------

Fim do relatório emitido pela extensão CheckAAA.
```

---

## Referências Bibliográficas

* **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C. Outubro de 2023.
* **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*.
* **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 15206:2004 - Ergonomia da Interação Humano-Sistema*.
* **Governo Federal do Brasil.** *eMAG - Modelo de Acessibilidade em Governo Eletrônico (Versão 3.1)*.
* **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.
