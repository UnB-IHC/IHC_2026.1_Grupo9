# Avaliador Heurístico Híbrido (Plugin & Ferramenta de UX v3.0)

O **Avaliador Heurístico Híbrido** é uma extensão de navegador desenvolvida sob medida para conduzir auditorias instantâneas de Experiência do Usuário (UX), Acessibilidade Digital (A11y) e Usabilidade. A ferramenta conecta inspeções técnicas automatizadas às **10 Heurísticas de Usabilidade de Jakob Nielsen** e às metodologias centrais do design centrado no usuário.

Atuando com o novo motor de **Pré-avaliação Automática Inteligente (v3.0)**, o plugin entrega o resultado o mais rápido possível:
1. **Varredura Instantânea 360°:** Inspeciona o DOM em milissegundos e avalia automaticamente itens de Acessibilidade (WCAG 2.2 / ABNT NBR 17060), Heurísticas de UX e indícios de Jornadas/Service Blueprint.
2. **Pré-preenchimento Automático:** O plugin atribui instantaneamente o Status (`✅ Adequado`, `⚠️ Atenção` ou `❌ Falha Crítica`) e gera a **Evidência descritiva** para cada critério sem que o usuário precise marcar checks manualmente. O avaliador apenas revisa o diagnóstico pronto ou complementa observações específicas antes de exportar.

---

## 🔗 Integração com o Ecossistema de UX e IHC

A avaliação de uma interface não se limita a checar tags de código ou contraste; ela deve refletir a experiência de uso real. O relatório gerado pelo nosso plugin foi projetado para alimentar diretamente os principais artefatos de UX e Design do seu projeto:

*   **[Personas & Jornadas Inclusivas](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/personas.md):** As falhas críticas encontradas na auditoria ajudam a validar ou atualizar as barreiras (*pain points*) enfrentadas por suas personas (ex: como um usuário que depende de navegação por teclado ou leitor de tela interage com o fluxo).
*   **[Service Blueprint & Canvas](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/blueprint.md):** Os erros de usabilidade apontados na camada de *Frontstage* (pontos de contato visíveis com o cliente) evidenciam gargalos no atendimento ou na comunicação do serviço.
*   **[Design Empático](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/design_empatico.md):** A ferramenta guia o avaliador a ir além da conformidade técnica, incentivando o teste de esforço cognitivo, flexibilidade de tempo e prevenção de erros.
*   **[Teste de Usabilidade](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/teste_usabilidade.md):** A auditoria heurística com o plugin serve como excelente pré-teste para limpar erros graves de interface antes de levar o sistema para sessões de observação com usuários reais.

---

## ⚡ Funcionalidades & Mapeamento Normativo

O scanner automático inspeciona o DOM em tempo real e correlaciona as descobertas com as normas mais modernas de acessibilidade e engenharia web:

| Verificação Automática do Plugin | Critério Normativo Atendido | Objetivo de UX & Acessibilidade |
| :--- | :--- | :--- |
| **Definição de Idioma (`<html lang>`)** | **WCAG 2.2** (3.1.1) / **eMAG 3.1** / **ABNT NBR 17060** | Garantir que leitores de tela e tradutores automáticos pronunciem e interpretem o texto com o sotaque correto. |
| **Imagens sem atributo `alt`** | **WCAG 2.2** (1.1.1) / **eMAG 3.1** (6.1) / **ABNT NBR 17060** | Assegurar equivalência textual para usuários com deficiência visual ou em conexões lentas. |
| **Inputs e Formulários sem `<label>`** | **WCAG 2.2** (3.3.2) / **eMAG 3.1** (7.1) / **ABNT NBR 17060** | Permitir que o usuário saiba exatamente o que preencher em cada campo ao navegar por tabulação ou voz. |
| **Presença de Título (`<title>`) e `<h1>`** | **WCAG 2.2** (2.4.2) / **eMAG 3.1** (2.3) / **ABNT NBR 17060** | Orientar a navegação e estabelecer uma hierarquia de informação clara e previsível. |
| **Links mortos ou sem texto descritivo** | **WCAG 2.2** (2.4.4) / **Heurística 2 (Nielsen)** | Evitar desorientação e garantir que o propósito de cada link seja compreendido fora de contexto. |

> [!IMPORTANT]
> **O Limite dos Testes Automáticos:** Ferramentas automatizadas capturam apenas **30% a 40%** das barreiras de acessibilidade (erros sintáticos e estruturais). Os outros **60%** dependem fundamentalmente da avaliação manual, do julgamento heurístico do avaliador e de testes práticos de navegação por teclado e leitores de tela.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5 & CSS3:** Estruturação semântica e estilização limpa da interface do popup.
*   **JavaScript (Vanilla):** Motor de varredura de DOM de alta performance, manipulação de estado do checklist e gerador de arquivos em memória.
*   **Manifest V3:** Padrão arquitetural mais recente, seguro e otimizado para extensões em navegadores Chromium.

---

## 🚀 Como instalar e usar (Modo do Desenvolvedor)

Como esta extensão é distribuída junto ao repositório do projeto, a instalação é feita localmente:

1. Obtenha os arquivos na pasta `plugin/` ([manifest.json](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/plugin/manifest.json), [popup.html](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/plugin/popup.html) e [popup.js](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/plugin/popup.js)).
2. No seu navegador (Chrome, Edge, Brave ou Opera), acesse `chrome://extensions/` ou `edge://extensions/`.
3. Ative a chave **"Modo do desenvolvedor"** no canto superior direito.
4. Clique em **"Carregar sem compactação"** (Load unpacked) e selecione a pasta `plugin/`.
5. Fixe a extensão na barra superior para acesso rápido durante suas inspeções.

---

## 📊 Estrutura do Relatório Gerado (`.txt`)

Ao abrir a extensão, ela realiza a auditoria e preenche todas as notas em tempo real. Ao clicar em **"Gerar Relatório Completo"**, o plugin compila o resumo executivo e a avaliação detalhada em um arquivo padronizado (`auditoria_CheckAAA_YYYY-MM-DD.txt`), pronto para anexar a relatórios de QA ou pull requests:

```text
=====================================================
    RELATÓRIO DE AUDITORIA DE UX E ACESSIBILIDADE    
    Gerado por: CheckAAA - Avaliador Híbrido         
=====================================================

DATA/HORA: 2026-06-28 15:30:00
URL AUDITADA: https://exemplo-sistema.com.br/login
TÍTULO DA PÁGINA: Portal do Cidadão - Acesso

-----------------------------------------------------
1. DIAGNÓSTICO AUTOMÁTICO (SCANNER DOM / WCAG 2.2)
-----------------------------------------------------
[OK] Atributo lang no HTML: pt-BR
[FALHA] Imagens sem atributo 'alt': 2 encontradas
[FALHA] Inputs de formulário sem 'label' associado: 1 encontrado
[OK] Estrutura de cabeçalho principal (h1): Presente
[ATENÇÃO] Links com abertura forçada em nova aba (_blank): 3 encontrados

-----------------------------------------------------
2. AVALIAÇÃO HEURÍSTICA QUALITATIVA (NIELSEN & UX)
-----------------------------------------------------
[H1. Visibilidade do status do sistema]
Status: FALHA CRÍTICA
Evidência: Ao clicar em 'Salvar', o sistema não exibe nenhum indicador de carregamento (spinner), deixando o usuário em dúvida se a ação foi processada.

[H4. Consistência e Padrões]
Status: ATENÇÃO
Evidência: O botão de 'Cancelar' aparece em verde em algumas telas e em vermelho em outras, gerando confusão cognitiva.

[H9. Ajuda a reconhecer, diagnosticar e recuperar de erros]
Status: FALHA CRÍTICA
Evidência: Mensagem de erro no formulário exibe apenas 'Erro 500', sem orientar o cidadão sobre como proceder ou oferecer um canal alternativo (Service Blueprint).

=====================================================
```

---

## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG 2.2)*. Recomendação oficial do W3C. Publicada em Outubro de 2023. Define os critérios de sucesso internacionais para acessibilidade web e móvel nos níveis A, AA e AAA.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 17060:2022 - Acessibilidade em aplicações web e móveis*. Norma técnica brasileira que estabelece os requisitos para tornar interfaces digitais acessíveis no contexto nacional.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *ABNT NBR 15206:2004 - Ergonomia da Interação Humano-Sistema*. Diretrizes de usabilidade e ergonomia em interfaces digitais.
*   **Governo Federal do Brasil.** *eMAG - Modelo de Acessibilidade em Governo Eletrônico (Versão 3.1)*. Guia de boas práticas alinhado à legislação brasileira de inclusão digital.
*   **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. Fundamentos para avaliação heurística e design de interfaces focadas no usuário.
