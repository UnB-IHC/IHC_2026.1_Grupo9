---
marp: true
theme: default
paginate: true
style: |
  section {
    background-color: #ffffff;
    color: #334155;
    font-family: 'Inter', sans-serif;
    font-size: 32px;
  }
  h1 {
    color: #0284c7;
    font-size: 2.8em;
  }
  h2 {
    color: #d97706;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 10px;
    font-size: 1.6em;
  }
  h3 {
    color: #334155;
  }
  ul, ol {
    color: #475569;
  }
  li {
    margin-bottom: 20px;
    line-height: 1.4;
  }
  strong {
    color: #be185d;
  }
  blockquote {
    border-left: 5px solid #0284c7;
    background-color: #f1f5f9;
    padding: 10px 20px;
    border-radius: 5px;
    color: #475569;
  }
  table {
    width: 100%;
    color: #334155;
    font-size: 28px;
  }
  th {
    background-color: #e2e8f0;
    color: #0284c7;
    padding: 10px;
  }
  td {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    padding: 10px;
  }
---

<!-- _class: lead -->
# CheckAAA
## Avaliador Heurístico Híbrido v3.0
**Seminário de Apresentação**

---

<!-- _class: lead -->
![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## A Equipe
**Grupo 9 - IHC (UnB)**

Interseção entre:
- **Empatia**
- **Acessibilidade Digital**
- **Engenharia de Software**

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## O que é o CheckAAA?

Mais que uma ferramenta, um **ecossistema**.

- **Objetivo:** Integrar UX e Acessibilidade (A11y).
- **Cultura Shift-Left:** Acessibilidade desde o princípio, não no final.

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## Os 3 Pilares

1. **O Guia do Usuário:** Documentação e checklists.
2. **O Plugin CheckAAA:** Ferramenta de auditoria automatizada.
3. **Estudo de Caso:** Aplicação prática no site *Castelo Forte*.

---

<!-- _class: lead -->
# Pilar 1: O Guia Completo
*Diretrizes Acionáveis*

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## UX & Design Empático

Acessibilidade na prancheta:
- **Contraste:** Proporção mínima de 4.5:1.
- **Toque:** Áreas interativas amplas.
- **Empatia:** O sistema deve acolher o usuário, e não o contrário.

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Personas Inclusivas

Fugir do "usuário médio":
- **Diversidade:** Pessoas com deficiências permanentes ou temporárias.
- **Sem Estereótipos:** Focar na condição de uso.
- **Assistência:** Mapear tecnologias assistivas (ex: leitores de tela).

---

![bg right:40%](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)
## Service Blueprint e Jornadas

Mapeamento de ponta a ponta:
- **Canais Alternativos:** Há um "Plano B" humano?
- **Esforço Cognitivo:** Reduzir passos e memorização.
- **Múltiplos Formatos:** Evidências em texto, áudio e vídeo.

---

![bg right:40%](https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80)
## Desenvolvimento Web

Traduzindo empatia em **código**:
- **HTML Semântico:** Uso de `<main>`, `<nav>`.
- **Teclado:** Navegação fluida e sem armadilhas.
- **WAI-ARIA:** Usar apenas quando necessário.

---

![bg right:40%](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)
## Geração de Conteúdo

Mensagens claras para todos:
- **Plain Language:** Linguagem simples e direta.
- **Texto Alternativo (ALT):** Descrições precisas para imagens.
- **Multimídia:** Legendas e audiodescrição obrigatórias.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## Gestão Ágil (Scrum)

Acessibilidade não é "puxadinho":
- **Definition of Done:** Tarefa "pronta" exige acessibilidade.
- **Priorização:** Falhas de A11y são críticas, não melhorias.
- **QA Contínuo:** Testes em todas as sprints.

---

<!-- _class: lead -->
# Pilar 2: A Extensão CheckAAA
*Avaliador Automático*

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## Para que serve?

Auditoria instantânea no navegador.

- Varredura em tempo real no **DOM**.
- Permite correções antes do lançamento.
- Direcionada a desenvolvedores e QA.

---

![bg right:40%](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)
## Base Normativa

Dados cruzados com padrões rigorosos:
- **WCAG 2.2** (Internacional)
- **ABNT NBR 17060** (Brasil)
- **eMAG** (Governo Eletrônico)
- **Heurísticas de Nielsen**

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## Diagnóstico Rápido

O painel exibe 3 categorias de infrações:
- ✅ **Adequados:** Sem erros.
- ⚠️ **Pontos de Atenção:** Alertas de melhoria.
- ❌ **Falhas Críticas:** Barreiras excludentes.

---

<!-- _class: lead -->
# Pilar 3: Estudo de Caso
*Castelo Forte*

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## O Alvo: Castelo Forte

- **Contexto:** 35 anos de mercado (construção civil).
- **Alvo:** Portal principal e E-commerce.
- **Objetivo:** Verificar a acessibilidade e recepção aos usuários no ambiente digital.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## Índice de Aprovação

Avaliação de 18 critérios fundamentais:

- ✅ **Adequados:** 12
- ⚠️ **Atenção:** 2
- ❌ **Críticas:** 4

**Aprovação Geral: 66,6%**

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## Pontos Positivos

- **Status Visível:** Barras de progresso e spinners.
- **Linguagem Natural:** Ausência de códigos de erro técnicos.
- **Liberdade:** Facilidade para cancelar ações.
- **Responsividade:** Boa adaptação móvel.

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Pontos de Atenção

Fatores que atrasam a experiência:
- **Hierarquia:** Saltos nas tags de cabeçalho (`<h1>`, `<h2>`).
- **Aceleradores:** Falta do link *"Pular para o conteúdo"*. Exige repetição excessiva pelo teclado.

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## Falhas Críticas (Alerta Vermelho)

Identificamos **gargalos severos** de estrutura.
A navegação se torna quase impossível para usuários com limitações visuais.

---

![bg right:40%](https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 1: Estrutura

**Ausência de Landmarks**
Falta da tag `<main>`.

*Impacto:* Leitores de tela não acham o conteúdo principal. Desorientação imediata.

---

![bg right:40%](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 2: Imagens Sem ALT

**123 imagens** de produtos sem texto alternativo.

*Impacto:* Para usuários cegos, é como uma vitrine vazia. Produtos invisíveis.

---

![bg right:40%](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 3: Campos Sem Label

**7 campos de formulário** (incluindo busca) sem `<label>`.

*Impacto:* O usuário foca no campo, mas o leitor de voz não sabe dizer o que digitar lá.

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 4: Botões Inativos

**6 botões** (ex: carrinho, pesquisa) lidos apenas como "Botão".

*Impacto:* Quebra a confiança. O usuário precisa "adivinhar" o que o botão faz.

---

<!-- _class: lead -->
# Fator Humano
*Testes e Usabilidade*

---

![bg right:40%](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)
## Teste de Usabilidade

Protocolos reais (*Think Aloud*):
- Identificar gargalos na jornada.
- Compreender sentimentos de frustração.
- Validar as falhas detectadas pelo plugin.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## O Questionário SUS

System Usability Scale:
- **10 afirmações** para medir confiança, esforço e fluidez.
- Humaniza os dados numéricos do software.
- Feedback focado na satisfação.

---

![bg right:40%](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)
## Perfil do Participante

- **Estudante, 20 anos:** Sem experiência em construção.
- **Por que?** Avaliar a "aprendizabilidade" e o vocabulário (ex: "rejunte").
- Sessão gravada e narrada.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## As 5 Tarefas do Teste

1. Comprar tinta acrílica.
2. Achar suporte de TV.
3. Verificar frete fora do DF.
4. Salvar produto para depois.
5. Contatar a loja.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## Checklist WCAG

Avaliado em tempo real:
- Contraste visual.
- Navegação exclusiva por teclado.
- Ampliação (Zoom).
- Rótulos em formulários.

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## A Entrevista Pós-Teste

Mapear a subjetividade:
- O que mais dificultou o uso?
- As informações eram claras e geravam confiança?
- **Pergunta chave:** *Se pudesse mudar algo, o que seria?*

---

![bg right:40%](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80)
## Referências

Base teórica sólida:
- **Steve Krug:** *Don't Make Me Think* (2014)
- **Jakob Nielsen:** *Usability Engineering* (1993)
- **John Brooke:** *SUS Scale* (1996)

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## Considerações Finais

Acessibilidade não é estética.
- Design bonito pode ser muito excludente.
- Corrigir bugs depois é caro.
- A **prevenção** (Guia + Extensão) é o melhor caminho.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## Um processo contínuo

- Ferramentas detectam apenas **30% a 40%** das barreiras.
- Os outros 60% dependem do fator humano.
- O Guia e o Plugin precisam andar juntos.

---

<!-- _class: lead -->
# Muito Obrigado!
**Perguntas e Debates**

*Grupo 9 - IHC*
