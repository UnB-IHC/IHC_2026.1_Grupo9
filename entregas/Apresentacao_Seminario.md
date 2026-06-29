---
marp: true
theme: default
paginate: true
style: |
  section {
    background-image: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #f8fafc;
    font-family: 'Inter', sans-serif;
  }
  h1 {
    color: #38bdf8;
    font-size: 3em;
  }
  h2 {
    color: #fbbf24;
    border-bottom: 2px solid #334155;
    padding-bottom: 10px;
  }
  h3 {
    color: #f8fafc;
  }
  ul, ol {
    color: #cbd5e1;
  }
  li {
    margin-bottom: 15px;
  }
  strong {
    color: #f472b6;
  }
  blockquote {
    border-left: 5px solid #38bdf8;
    background-color: #1e293b;
    padding: 10px 20px;
    border-radius: 5px;
    color: #cbd5e1;
  }
  table {
    width: 100%;
    color: #f8fafc;
  }
  th {
    background-color: #334155;
    color: #38bdf8;
  }
  td {
    background-color: #1e293b;
    border: 1px solid #334155;
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
**Grupo 9 - Interação Humano-Computador (IHC)**
Universidade de Brasília (UnB)

*Trabalhando na interseção entre Empatia, Acessibilidade Digital e Engenharia de Software.*

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## O que é o CheckAAA?

O **CheckAAA** não é apenas uma ferramenta, mas um **ecossistema completo**.
Ele foi criado para integrar a experiência do usuário (UX), a acessibilidade (A11y) e a usabilidade em todas as etapas de desenvolvimento de um produto digital.

O objetivo é transformar a acessibilidade de um requisito final para uma cultura desde o princípio (Shift-Left).

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## Os 3 Pilares do CheckAAA

Nosso projeto está estruturado em três frentes essenciais:
1. **O Guia do Usuário:** Documentação e checklists para todas as etapas.
2. **O Plugin CheckAAA:** Uma ferramenta ágil para auditorias automatizadas.
3. **Estudo de Caso Prático:** A aplicação de todo o nosso arsenal na análise do site *Castelo Forte*.

---

<!-- _class: lead -->
# Pilar 1: O Guia Completo
*Diretrizes e Checklists Acionáveis*

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## UX & Design Empático

A acessibilidade começa na prancheta de desenho:
- **Contraste e Cores:** Garantir proporções mínimas (4.5:1).
- **Áreas de Toque:** Projetar elementos interativos adequados.
- **Design Empático:** Entender a carga emocional gerada por uma barreira digital. O usuário não deve se adaptar ao sistema; o sistema deve acolher o usuário.

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Construção de Personas Inclusivas

O erro comum é focar apenas no "usuário médio ideal". O CheckAAA exige:
- **Recrutamento Heterogêneo:** Incluir no planejamento pessoas com deficiências permanentes, temporárias e situacionais.
- **Fuga do Estereótipo:** A deficiência é um traço da condição de uso da interface, não um heroísmo.
- **Mapeamento de Assistência:** Saber como a persona interage.

---

![bg right:40%](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)
## Service Blueprint e Jornadas

Mapear a jornada de ponta a ponta, do frontstage ao backstage:
- **Canais Alternativos:** Se a barreira digital surgir, há um plano B humano equitativo?
- **Esforço Cognitivo:** Redução de passos exigidos para diminuir a carga de memorização do usuário.
- **Evidências Físicas e Digitais:** Múltiplos formatos para documentos gerados na jornada.

---

![bg right:40%](https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80)
## Desenvolvimento Web e Engenharia

A tradução da empatia em **código limpo**:
- **HTML Semântico:** Uso correto de landmarks (`<main>`, `<nav>`, `<header>`).
- **Acessibilidade por Teclado:** Controle de foco (`outline`) e eliminação de armadilhas (traps).
- **WAI-ARIA:** A regra de ouro é *só usar ARIA quando necessário*, priorizando componentes nativos do HTML.

---

![bg right:40%](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)
## Geração de Conteúdo e UX Writing

Garantir que a mensagem chegue de forma clara para todos:
- **Plain Language:** Linguagem simples, frases curtas, evitando jargões técnicos.
- **Texto Alternativo (ALT):** Descrições precisas para imagens informativas.
- **Multimídia:** Exigência de legendas fechadas (closed captions), audiodescrição e alternativas transcritas.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## Gestão de Projetos Ágeis (Scrum)

Acessibilidade não é "puxadinho" no final do ciclo:
- **Definition of Done (DoD):** Uma tarefa só está "pronta" se for aprovada nos critérios de acessibilidade.
- **Orçamento e Priorização:** Bugs de acessibilidade são falhas críticas, não "melhorias futuras".
- **QA Contínuo:** Inserção de testes (manuais e automatizados) no pipeline de CI/CD.

---

<!-- _class: lead -->
# Pilar 2: A Extensão CheckAAA
*Avaliador Automático v3.0*

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## O Plugin: Para que serve?

A extensão CheckAAA v3.0 funciona diretamente no navegador e realiza uma **auditoria instantânea** na página em exibição.

Ela varre o Document Object Model (DOM) em busca de infrações, permitindo que desenvolvedores corrijam falhas antes delas chegarem ao usuário final.

---

![bg right:40%](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)
## Base Normativa do Plugin

As verificações da extensão não são baseadas em achismos. Ela cruza dados com:
- **WCAG 2.2:** Diretrizes Internacionais de Acessibilidade.
- **ABNT NBR 17060:** Normas Brasileiras aplicadas a interfaces web.
- **eMAG:** Modelo de Acessibilidade em Governo Eletrônico.
- **Heurísticas de Nielsen:** As 10 regras fundamentais de usabilidade.

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## O Diagnóstico Rápido

Após rodar a varredura, o plugin exibe um painel de controle (dashboard) categorizando os critérios em 3 níveis:
- ✅ **Adequados:** Tudo certo!
- ⚠️ **Pontos de Atenção:** Sugestões que melhoram a experiência.
- ❌ **Falhas Críticas:** Barreiras excludentes graves que demandam correção imediata.

---

<!-- _class: lead -->
# Pilar 3: Estudo de Caso
*Auditoria no site Castelo Forte*

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## O Alvo: Castelo Forte

**Página Auditada:** Portal e E-commerce Castelo Forte
**Contexto:** Empresa com 35 anos de atuação no mercado de construção, contando com 10 lojas físicas e vendas online.

Aplicamos nossa extensão no site principal para verificar como a marca recebe seus usuários no ambiente digital.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## Resumo Executivo: Índice de Aprovação

Foram avaliados 18 critérios fundamentais de UX e acessibilidade.

- **✅ Adequados:** 12
- **⚠️ Pontos de Atenção:** 2
- **❌ Falhas Críticas:** 4

**Índice de Aprovação Geral:** 66,6%

---

![bg right:40%](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)
## Pontos Positivos Encontrados

O site demonstrou acertar em algumas heurísticas fundamentais de usabilidade:
- **Visibilidade de Status:** Uso eficiente de barras de progresso e spinners.
- **Linguagem Natural:** Evita expor códigos de erros brutos aos clientes.
- **Controle e Liberdade:** Botões claros para voltar e cancelar ações indesejadas.
- **Design Minimalista:** Excelente adaptação para dispositivos móveis (Responsividade).

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Pontos de Atenção

Fatores que não quebram o site, mas atrasam a experiência do usuário:
- **Hierarquia de Cabeçalhos:** Múltiplos `<h1>` e saltos lógicos nas tags de título.
- **Falta de Aceleradores:** Ausência do link *"Pular para o conteúdo principal"*. Isso obriga quem navega por teclado a passar repetidamente por todos os menus superiores.

---

![bg right:40%](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)
## As Falhas Críticas (O Alerta Vermelho)

Infelizmente, identificamos que o site possui **gargalos severos** de acessibilidade estrutural, tornando a navegação quase impossível para usuários com limitações visuais.

Vamos detalhar as 4 infrações críticas mapeadas.

---

![bg right:40%](https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 1: Estrutura Semântica

**Ausência de Marcos Principais (Landmarks)**
O código carece de uma estruturação semântica básica (como a tag `<main>`). 

*Por que isso é ruim?* Sem isso, tecnologias assistivas (leitores de tela) não conseguem identificar onde o conteúdo principal da página começa, gerando desorientação imediata.

---

![bg right:40%](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 2: Imagens Sem ALT Text

**Onde ocorreu:** Encontramos **123 imagens** sem o atributo `alt` (texto alternativo).

*Por que isso é ruim?* Num e-commerce de catálogo extenso, o usuário cego depende do `alt` para saber o que está na foto. Uma imagem de produto sem texto alternativo significa, na prática, uma vitrine escondida para esse consumidor.

---

![bg right:40%](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 3: Campos sem Label

**Onde ocorreu:** 7 campos de formulário (incluindo busca e cadastro) não possuíam rótulos `<label>` associados.

*Por que isso é ruim?* Sem a identificação em código, o usuário que usa comandos de voz ou leitor de tela foca na caixa de texto e não sabe o que deve digitar lá dentro.

---

![bg right:40%](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80)
## Falha Crítica 4: Botões Inativos para Leitores de Tela

**Onde ocorreu:** 6 botões (ícones de carrinho, pesquisa, redes sociais) não possuíam texto visível nem `aria-label`.

*Por que isso é ruim?* O leitor de tela lê apenas "Botão". O usuário é forçado a tentar adivinhar a ação que será disparada ao clicar, quebrando a autonomia e a confiança.

---

<!-- _class: lead -->
# Mapeamento do Fator Humano
*Teste de Usabilidade e Think Aloud*

---

![bg right:40%](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)
## O Teste de Usabilidade

Além do plugin automático, aplicamos protocolos reais de testes com usuários:
- **Perfil Testado:** Jovem, sem experiência com compras de material de construção, simulando uma barreira de literacia no domínio.
- **Abordagem:** Sessão cronometrada usando o método **Think Aloud** (pensar em voz alta), identificando gargalos na jornada.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## O Questionário SUS

Ao final das tarefas práticas, o usuário respondeu à **System Usability Scale (SUS)**.
São 10 afirmações para medir de 0 a 100 a carga de esforço, a confiança do usuário no sistema e a fluidez geral da experiência do site.
Esses dados complementam e humanizam os números gerados pelos testes automatizados.

---

![bg right:40%](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)
## Perfil do Participante e Sessão

- **Idade / Perfil:** 20 anos, Estudante. Baixa familiaridade com reformas ou compras de construção civil.
- **Contexto:** Usa internet, mas nunca comprou material de construção online. Acesso sem necessidade urgente de reforma.
- **Por que este perfil?** Expõe falhas de aprendizabilidade e clareza de vocabulário técnico (ex: "rejunte", "sifão") que um usuário experiente não notaria.
- **Vídeo da Sessão:** A sessão foi gravada e o Think Aloud documentado.

---

![bg right:40%](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80)
## As 5 Tarefas do Teste

Cenários reais propostos durante o Think Aloud:
1. Comprar uma lata de tinta acrílica fosca (≤ R$ 150).
2. Encontrar suporte de TV e antena adequados.
3. Descobrir regras de entrega para fora do DF.
4. Salvar um produto para decidir depois.
5. Encontrar um canal de contato direto com a loja.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## Checklist de Acessibilidade (WCAG)

Preenchido pelo observador em tempo real durante a execução das tarefas:
- Contraste de texto/fundo é suficiente?
- Navegação possível **apenas pelo teclado**?
- Tamanho da fonte permite ampliação (zoom)?
- Campos de busca/cadastro com rótulos e mensagens de erro claras?

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## A Entrevista Pós-Teste (Roteiro)

Conduzida de forma semiestruturada ao fim do SUS para captar impressões subjetivas:
- **Impressões Gerais:** O que mais gostou e o que mais dificultou o uso.
- **Confiança e Clareza:** Houve dúvida se a busca trouxe o resultado certo? As informações de preço e frete eram claras?
- **Acessibilidade:** Dificuldade com cores, tamanho de texto, navegação?
- Se pudesse **mudar uma única coisa** no site, o que seria?

---

![bg right:40%](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80)
## Referências Metodológicas

Base teórica do nosso projeto e condução do teste de usabilidade:
- **KRUG, Steve.** *Don't Make Me Think, Revisited.* (2014)
- **NIELSEN, Jakob.** *Usability Engineering.* (1993)
- **BROOKE, John.** *SUS: A 'Quick and Dirty' Usability Scale.* (1996)

---

![bg right:40%](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)
## Considerações Finais

O caso "Castelo Forte" prova que a acessibilidade vai muito além da estética:
- Um site bonito e responsivo ainda pode excluir parcelas enormes do mercado consumidor.
- Resolver problemas após o site estar no ar é custoso e doloroso.
- A união da **extensão CheckAAA** com a robustez do **Guia do Usuário** previne erros crônicos.

---

![bg right:40%](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)
## O CheckAAA é um processo contínuo

Ferramentas automáticas detectam **apenas 30 a 40%** das barreiras de acessibilidade.
Os outros 60% dependem da equipe usar nosso guia para conduzir testes com humanos reais, construir personas diversas e aplicar Service Blueprints inclusivos.

---

<!-- _class: lead -->
# Muito Obrigado!
**Perguntas e Debates**

*Grupo 9 - IHC*
<br><br>
