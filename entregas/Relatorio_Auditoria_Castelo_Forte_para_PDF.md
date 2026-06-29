![Logo da UnB](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/330px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png)

**Universidade de Brasília**  
Faculdade de Ciências e Tecnologia em Engenharias  
Interação Humano Computador  

# RELATÓRIO DE AUDITORIA E ESTUDO DE CASO: CASTELO FORTE

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

# 1. Estudo de Caso: Auditoria Real do Site "Castelo Forte"

Este documento apresenta o relatório real de auditoria gerado automaticamente pela nossa extensão **CheckAAA (Avaliador Heurístico Híbrido v3.0)** aplicado ao e-commerce e portal institucional do **Castelo Forte**.

O teste demonstra a eficácia da varredura instantânea na identificação de barreiras de **Acessibilidade (WCAG 2.2 / ABNT NBR 17060)**, violações de **Usabilidade (Heurísticas de Nielsen)** e pontos de atenção na **Jornada do Usuário / Service Blueprint**.

---

## 1.1 Dados da Auditoria & Resumo Executivo

> 📌 **Dados da Avaliação:**
> **Data e Hora da Avaliação:** 28/06/2026 às 16:28:20  
> **Página Auditada:** Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site  
> **URL Analisada:** [casteloforte.com.br](https://www.casteloforte.com.br/)  
> **Ferramenta:** Extensão CheckAAA v3.0 (Scanner DOM + Diagnóstico Heurístico)

### 1.1.1 Painel Geral de Conformidade

| Total Avaliado | ✅ Adequados | ⚠️ Pontos de Atenção | ❌ Falhas Críticas | Índice de Aprovação |
| :---: | :---: | :---: | :---: | :---: |
| **18 critérios** | **12** | **2** | **4** | **66,6%** |

---

## 1.2 Diagnóstico Detalhado por Critério

### 1.2.1 Acessibilidade & Normas Técnicas (WCAG 2.2 / eMAG / ABNT NBR 17060)

#### 1. Idioma da Página (`<html lang>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (3.1.1) • eMAG 3.1 • ABNT NBR 17060
* **O que foi avaliado:** Define a pronúncia correta para leitores de tela usados por pessoas com deficiência visual.
* **Resultado:** `✅ Adequado`
* **Explicação:** Idioma detectado automaticamente: `"pt-br"`.

#### 2. Título da Página (`<title>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (2.4.2) • eMAG 2.3 • ABNT NBR 17060
* **O que foi avaliado:** O título deve ser único e descritivo para orientar a navegação e o contexto na aba do navegador.
* **Resultado:** `✅ Adequado`
* **Explicação:** Título detectado: *"Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site"*.

#### 3. Hierarquia de Cabeçalhos (`<h1>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.3.1) • eMAG 2.4 • ABNT NBR 17060
* **O que foi avaliado:** A página deve possuir exatamente um `<h1>` principal e manter ordem lógica sem saltos bruscos.
* **Resultado:** `⚠️ Atenção`
* **Explicação:** A hierarquia de cabeçalhos da página apresenta múltiplos `<h1>` ou saltos na ordem sequencial das tags.

#### 4. Marcos Semânticos (Landmarks)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.3.1) • eMAG 2.5 • ABNT NBR 17060
* **O que foi avaliado:** Uso de tags semânticas (`<header>`, `<main>`, `<nav>`, `<footer>`) para navegação rápida por tecnologias assistivas.
* **Resultado:** `❌ Falha Crítica`
* **Explicação:** Ausência de estruturação semântica principal (como a tag `<main>`), dificultando o salto direto para o conteúdo por usuários de leitores de tela.

#### 5. Alternativas Textuais em Imagens (`alt`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (1.1.1) • eMAG 6.1 • ABNT NBR 17060
* **O que foi avaliado:** Imagens informativas exigem descrição textual; imagens decorativas devem ter alt vazio (`alt=""`).
* **Resultado:** `❌ Falha Crítica`
* **Explicação:** **Encontradas 123 imagem(ns) (de um total de 397) sem o atributo `alt`.** Isso representa uma barreira grave para consumidores cegos ou com baixa visão que navegam pelo catálogo.

#### 6. Rótulos de Formulários (`<label>`)
* **Categoria:** Acessibilidade
* **Base Normativa:** WCAG 2.2 (3.3.2) • eMAG 7.1 • ABNT NBR 17060
* **O que foi avaliado:** Todo campo interativo deve ter um rótulo explícito associado programaticamente.
* **Resultado:** `❌ Falha Crítica`
* **Explicação:** **7 campo(s) de formulário sem `<label>` ou `aria-label` associado**, impedindo que softwares de voz identifiquem a finalidade dos inputs de busca ou cadastro.

---

### 1.2.2 Experiência do Usuário (UX) & Heurísticas de Nielsen

#### 7. Visibilidade do Status do Sistema
* **Categoria:** UX / Heurística 1
* **Base Normativa:** Nielsen H1 • Feedback Contínuo
* **O que foi avaliado:** O sistema mantém o usuário informado sobre o que está acontecendo (ex: spinners, barras de progresso).
* **Resultado:** `✅ Adequado`
* **Explicação:** Indicadores de progresso ou carregamento detectados na estrutura da interface.

#### 8. Compatibilidade com o Mundo Real
* **Categoria:** UX / Heurística 2
* **Base Normativa:** Nielsen H2 • Linguagem Simples
* **O que foi avaliado:** A interface fala a linguagem do usuário, sem expor códigos de erro técnicos bruto (ex: `undefined`, `NaN`).
* **Resultado:** `✅ Adequado`
* **Explicação:** Textos e conteúdos em linguagem natural, sem códigos brutos de erro visíveis para o cliente final.

#### 9. Controle e Liberdade do Usuário
* **Categoria:** UX / Heurística 3
* **Base Normativa:** Nielsen H3 • Saídas de Emergência
* **O que foi avaliado:** Presença de botões claros de Voltar, Cancelar ou Fechar para reverter ações indesejadas.
* **Resultado:** `✅ Adequado`
* **Explicação:** Botões ou links de retorno/cancelar/início identificados na navegação.

#### 10. Consistência e Padrões
* **Categoria:** UX / Heurística 4
* **Base Normativa:** Nielsen H4 • Padronização Visual
* **O que foi avaliado:** Elementos interativos (botões e links) seguem convenções e estilos consistentes em toda a tela.
* **Resultado:** `✅ Adequado`
* **Explicação:** Elementos de interação mantêm marcação semântica padronizada de botões e links.

#### 11. Prevenção de Erros
* **Categoria:** UX / Heurística 5
* **Base Normativa:** Nielsen H5 • WCAG 2.2 (3.3.1)
* **O que foi avaliado:** Campos utilizam atributos de validação, restrição de formato ou máscaras antes da submissão.
* **Resultado:** `✅ Adequado`
* **Explicação:** Atributos preventivos de validação detectados nos campos do formulário.

#### 12. Reconhecimento vs. Memorização
* **Categoria:** UX / Heurística 6
* **Base Normativa:** Nielsen H6 • Carga Cognitiva
* **O que foi avaliado:** Redução do esforço de memória usando autocomplete e instruções visíveis.
* **Resultado:** `✅ Adequado`
* **Explicação:** Navegação favorece o reconhecimento visual das informações e produtos de forma direta.

#### 13. Flexibilidade e Eficiência de Uso
* **Categoria:** UX / Heurística 7
* **Base Normativa:** Nielsen H7 • Aceleradores
* **O que foi avaliado:** Presença de atalhos ou links de 'Pular para o conteúdo principal' para otimizar a navegação.
* **Resultado:** `⚠️ Atenção`
* **Explicação:** Não foi encontrado link de atalho *"Pular para o conteúdo principal"* (*skip link*) no topo da página, obrigando usuários de teclado a percorrerem todo o menu superior repetidamente.

#### 14. Estética e Design Minimalista (Responsividade)
* **Categoria:** UX / Heurística 8
* **Base Normativa:** Nielsen H8 • Meta Viewport • ABNT NBR 15206
* **O que foi avaliado:** Design limpo e adaptável a dispositivos móveis (presença de meta viewport responsiva).
* **Resultado:** `✅ Adequado`
* **Explicação:** Meta viewport presente. Design adaptável e minimalista para telas menores e dispositivos móveis.

#### 15. Ajudar na Recuperação de Erros
* **Categoria:** UX / Heurística 9
* **Base Normativa:** Nielsen H9 • ARIA Alerts
* **O que foi avaliado:** Mensagens de erro são construtivas e utilizam regiões de alerta (`role="alert"`) para notificação.
* **Resultado:** `✅ Adequado`
* **Explicação:** Regiões acessíveis de notificação de erro (`role="alert"` ou `aria-live`) estão devidamente configuradas.

#### 16. Ajuda e Documentação
* **Categoria:** UX / Heurística 10
* **Base Normativa:** Nielsen H10 • Suporte ao Usuário
* **O que foi avaliado:** Fácil acesso a canais de suporte, perguntas frequentes (FAQ), centrais de ajuda ou contato.
* **Resultado:** `✅ Adequado`
* **Explicação:** Canais de suporte, FAQ ou contato facilmente localizados na interface.

---

### 1.2.3 Jornadas, Personas & Service Blueprint

#### 17. Aderência a Tecnologias Assistivas (Personas)
* **Categoria:** Personas & Jornada
* **Base Normativa:** Checklist de Personas • WCAG 4.1.2
* **O que foi avaliado:** Verifica se todos os botões e controles possuem rótulo de voz para personas que utilizam leitores de tela.
* **Resultado:** `❌ Falha Crítica`
* **Explicação:** **Personas que usam leitor de tela são bloqueadas: 6 botão(ões) sem texto visível ou rótulo de voz.** Botões de ícones (como carrinho, busca ou menu social) desacompanhados de `aria-label` são lidos apenas como "botão", gerando total desorientação.

#### 18. Canais Alternativos e Evidências (Frontstage)
* **Categoria:** Service Blueprint
* **Base Normativa:** Service Blueprint • Atendimento Equitativo
* **O que foi avaliado:** A jornada oferece pontos de contato evidentes para suporte humano ou canais alternativos em caso de barreiras.
* **Resultado:** `✅ Adequado`
* **Explicação:** Frontstage do Blueprint validado: canais alternativos de atendimento humano/suporte (como WhatsApp ou Televendas) estão visíveis.

---

## 1.3 Conclusão do Caso de Estudo

A auditoria revela que, embora o site do **Castelo Forte** apresente boas práticas visuais e de suporte ao cliente (atingindo 12 itens adequados), ele possui **gargalos severos de acessibilidade digital estrutural** (4 falhas críticas). 

A alta quantidade de imagens sem descrição alternativa (123) e botões sem rótulo (6) compromete diretamente a jornada de compra de clientes com deficiência visual, reforçando a importância indispensável do uso contínuo do **CheckAAA** no ciclo de desenvolvimento web.

> 🌐 **Documentação Oficial CheckAAA:** Para acessar o Guia Completo, conhecer a metodologia, baixar a extensão v3.0 ou consultar outros checklists práticos, visite nosso portal oficial no GitHub Pages: **https://unb-ihc.github.io/IHC_2026.1_Grupo9/**

---
*Relatório gerado para exportação em PDF pela equipe CheckAAA.*
