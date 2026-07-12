# Estudo de Caso: Auditoria Automatizada com Plugin — Site "Castelo Forte"

Este documento apresenta o relatório real de auditoria gerado automaticamente pela nossa extensão **CheckAAA (Avaliador Heurístico Híbrido v3.0)**, aplicado por **nossa equipe (Grupo 9 de IHC - UnB)** ao e-commerce e portal institucional do **Castelo Forte**.

O teste demonstra a eficácia da varredura instantânea na identificação de barreiras de **Acessibilidade (WCAG 2.2 / ABNT NBR 17060)**, violações de **Usabilidade (Heurísticas de Nielsen)** e pontos de atenção na **Jornada do Usuário / Service Blueprint**.

---

## 📌 Dados da Auditoria & Resumo Executivo

> [!NOTE]
> **Data e Hora da Avaliação:** 28/06/2026 às 16:28:20  
> **Página Auditada:** Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site  
> **URL Analisada:** [casteloforte.com.br](https://www.casteloforte.com.br/)  
> **Ferramenta:** Extensão CheckAAA v3.0 (Scanner DOM + Diagnóstico Heurístico)  
> **Autoria da Aplicação:** Equipe do Grupo 9 - Disciplina de IHC (Universidade de Brasília - UnB)

### 📊 Painel Geral de Conformidade (Auditado pelo Plugin v3.0)

| Total Avaliado | ✅ Adequados | ⚠️ Pontos de Atenção | ❌ Falhas Críticas | Índice de Aprovação Automática |
| :---: | :---: | :---: | :---: | :---: |
| **18 critérios** | **12** | **2** | **4** | **66,6%** |

---

## 🔎 Diagnóstico Detalhado por Critério

### 🖥️ Acessibilidade & Normas Técnicas (WCAG 2.2 / eMAG / ABNT NBR 17060)

#### 1. Idioma da Página (`<html lang>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (3.1.1) • eMAG 3.1 • ABNT NBR 17060
* **O que avaliamos:** Define a pronúncia correta para leitores de tela usados por pessoas com deficiência visual.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Idioma detectado automaticamente: `"pt-br"`.

#### 2. Título da Página (`<title>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (2.4.2) • eMAG 2.3 • ABNT NBR 17060
* **O que avaliamos:** O título deve ser único e descritivo para orientar a navegação e o contexto na aba do navegador.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Título detectado: *"Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site"*.

#### 3. Hierarquia de Cabeçalhos (`<h1>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.3.1) • eMAG 2.4 • ABNT NBR 17060
* **O que avaliamos:** A página deve possuir exatamente um `<h1>` principal e manter ordem lógica sem saltos bruscos.
* **Resultado:** `⚠️ Atenção`
* **Análise do plugin:** A hierarquia de cabeçalhos da página apresenta múltiplos `<h1>` ou saltos na ordem sequencial das tags.

#### 4. Marcos Semânticos (Landmarks)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.3.1) • eMAG 2.5 • ABNT NBR 17060
* **O que avaliamos:** Uso de tags semânticas (`<header>`, `<main>`, `<nav>`, `<footer>`) para navegação rápida por tecnologias assistivas.
* **Resultado:** `❌ Falha Crítica`
* **Análise do plugin:** Ausência de estruturação semântica principal (como a tag `<main>`), dificultando o salto direto para o conteúdo por usuários de leitores de tela.

#### 5. Alternativas Textuais em Imagens (`alt`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.1.1) • eMAG 6.1 • ABNT NBR 17060
* **O que avaliamos:** Imagens informativas exigem descrição textual; imagens decorativas devem ter alt vazio (`alt=""`).
* **Resultado:** `❌ Falha Crítica`
* **Análise do plugin:** **Encontradas 123 imagem(ns) sem o atributo `alt` na página principal.** Os banners promocionais e cards de produtos não possuem texto equivalente, bloqueando usuários com deficiência visual.

#### 6. Rótulos de Formulários (`<label>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (3.3.2) • eMAG 7.1 • ABNT NBR 17060
* **O que avaliamos:** Todo campo interativo deve ter um rótulo explícito associado programaticamente.
* **Resultado:** `⚠️ Atenção`
* **Análise do plugin:** A maioria dos inputs de busca e cadastro possui `<label>`, mas alguns campos no carrinho lateral desviam da associação explícita por ID.

---

### 🎨 Usabilidade & Heurísticas de Nielsen

#### 7. Visibilidade do Status do Sistema
* **Categoria:** UX / Heurística 1
* **Base Normativa:** Nielsen H1 • Feedback Contínuo
* **O que avaliamos:** O sistema mantém o usuário informado sobre o que está acontecendo (ex: spinners, barras de progresso).
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** O site apresenta *spinners* de carregamento claros ao filtrar produtos ou adicionar itens ao carrinho.

#### 8. Compatibilidade entre o Sistema e o Mundo Real
* **Categoria:** UX / Heurística 2
* **Base Normativa:** Nielsen H2 • Linguagem Simples
* **O que avaliamos:** A interface fala a linguagem do usuário, sem expor códigos de erro técnicos brutos.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** A comunicação visual e textual utiliza jargões familiares ao setor de construção e reforma (*"Home Center"*, *"Televendas"*, *"Retire na Loja"*).

#### 9. Controle e Liberdade do Usuário
* **Categoria:** UX / Heurística 3
* **Base Normativa:** Nielsen H3 • Saídas de Emergência
* **O que avaliamos:** Presença de botões claros de Voltar, Cancelar ou Fechar para reverter ações indesejadas.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Botões de fechamento (`X`) em modais e remoção rápida de itens no *Minicart* funcionam perfeitamente para usuários com mouse.

#### 10. Consistência e Padrões
* **Categoria:** UX / Heurística 4
* **Base Normativa:** Nielsen H4 • Padronização Visual
* **O que avaliamos:** Elementos interativos (botões e links) seguem convenções e estilos consistentes em toda a tela.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Padrão de cores institucional (amarelo, azul e branco) e disposição clássica de e-commerce mantidos em todas as páginas inspecionadas.

#### 11. Prevenção de Erros
* **Categoria:** UX / Heurística 5
* **Base Normativa:** Nielsen H5 • WCAG 2.2 (3.3.1)
* **O que avaliamos:** Campos utilizam atributos de validação, restrição de formato ou máscaras antes da submissão.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** O campo de CEP no carrinho aplica máscara automática e validação instantânea antes de calcular o frete.

#### 12. Reconhecimento em vez de Memorização
* **Categoria:** UX / Heurística 6
* **Base Normativa:** Nielsen H6 • Carga Cognitiva
* **O que avaliamos:** Redução do esforço de memória usando autocomplete e instruções visíveis.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** A busca principal oferece sugestões automáticas de produtos e categorias em tempo real conforme o cliente digita.

#### 13. Flexibilidade e Eficiência de Uso
* **Categoria:** UX / Heurística 7
* **Base Normativa:** Nielsen H7 • Aceleradores
* **O que avaliamos:** Presença de atalhos ou links de 'Pular para o conteúdo principal' (*Skip Links*) para otimizar a navegação.
* **Resultado:** `❌ Falha Crítica`
* **Análise do plugin:** **Ausência de Skip Links (`Pular para o conteúdo`).** Usuários navegando por teclado são obrigados a percorrer mais de 35 paradas `Tab` em todo o menu superior antes de alcançar os produtos.

#### 14. Estética e Design Minimalista
* **Categoria:** UX / Heurística 8
* **Base Normativa:** Nielsen H8 • Meta Viewport • ABNT NBR 15206
* **O que avaliamos:** Design limpo e adaptável a dispositivos móveis (presença de meta viewport responsiva).
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Tag `<meta name="viewport">` configurada adequadamente, permitindo reorganização fluida em telas mobile.

#### 15. Ajudar os Usuários a Reconhecer, Diagnosticar e Recuperar de Erros
* **Categoria:** UX / Heurística 9
* **Base Normativa:** Nielsen H9 • ARIA Alerts
* **O que avaliamos:** Mensagens de erro são construtivas e utilizam regiões de alerta (`role="alert"`) para notificação.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Ao tentar prosseguir sem selecionar uma opção obrigatória, o site exibe destaques visuais em vermelho e mensagens explicativas em texto claro.

#### 16. Ajuda e Documentação
* **Categoria:** UX / Heurística 10
* **Base Normativa:** Nielsen H10 • Suporte ao Usuário
* **O que avaliamos:** Fácil acesso a canais de suporte, perguntas frequentes (FAQ), centrais de ajuda ou contato.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Canais de suporte, FAQ, Televendas e localização de lojas facilmente acessíveis no cabeçalho e rodapé.

---

### 🗺️ Jornadas, Personas & Service Blueprint

#### 17. Aderência a Tecnologias Assistivas (Personas)
* **Categoria:** Personas & Jornada
* **Base Normativa:** Checklist de Personas • WCAG 4.1.2
* **O que avaliamos:** Verifica se todos os botões e controles possuem rótulo de voz para personas que utilizam leitores de tela.
* **Resultado:** `❌ Falha Crítica`
* **Análise do plugin:** **Personas que usam leitor de tela são bloqueadas: 6 botão(ões) principais sem texto visível ou rótulo de voz (`aria-label`).** Controles de ícones (como carrinho lateral, busca e redes sociais) vocalizam apenas "botão", gerando desorientação na jornada.

#### 18. Canais Alternativos e Evidências (Frontstage)
* **Categoria:** Service Blueprint
* **Base Normativa:** Service Blueprint • Atendimento Equitativo
* **O que avaliamos:** A jornada oferece pontos de contato evidentes para suporte humano ou canais alternativos em caso de barreiras.
* **Resultado:** `✅ Adequado`
* **Análise do plugin:** Frontstage do Blueprint validado: canais alternativos de atendimento humano/suporte (como WhatsApp direto das 10 lojas e Televendas) estão visíveis.

---

## 💡 Conclusão do Caso de Estudo e Correlação com a Avaliação Manual

### ⚡ Diagnóstico Automatizado (66,6% de Aprovação em 18 Critérios)
A auditoria instantânea conduzida com o nosso plugin **CheckAAA v3.0** revela que, embora o site do **Castelo Forte** apresente excelente atendimento aos clientes normovisuais e ótimas heurísticas de suporte no *Frontstage* (atingindo **12 itens adequados**), ele possui **gargalos estruturais severos no código front-end (4 falhas críticas e 2 pontos de atenção)**.

### 🔗 Sinergia com o Nosso Relatório Manual (54,8% de Adequação em 42 Critérios)
Este resultado corrobora com exatidão o nosso diagnóstico no [Relatório de Avaliação Manual Completa](file:///home/giovani-coelho/Documentos/IHC_2026.1_Grupo9/docs/avaliacao_castelo_forte.md). Enquanto a **ferramenta automatizada (plugin)** é imbatível na velocidade para detectar as **falhas sintáticas imediatas** (como a ausência massiva dos 123 atributos `alt`, a falta da tag `<main>` e os 6 botões SVG sem `aria-label`), a **inspeção manual com nossos 10 checklists** aprofundou a análise em 42 critérios práticos de navegação — revelando que a barreira estrutural afeta 54,8% da experiência ponta a ponta.

Essa correlação comprova na prática o pilar metodológico defendido pelo **Grupo 9 (IHC - UnB)**: extensões automatizadas como o nosso plugin são essenciais como *primeira linha de defesa* no QA, mas devem sempre atuar em conjunto com a **auditoria heurística manual de especialistas** para garantir uma acessibilidade verdadeiramente inclusiva e integral.
