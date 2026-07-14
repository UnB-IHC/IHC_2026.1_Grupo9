# Think Aloud

> Técnica de verbalização do pensamento utilizada durante o teste de usabilidade com o site [casteloforte.com.br](https://casteloforte.com.br).

---

## Gravação da Sessão

> [!NOTE]
> **Acesso à Gravação:**  
> Devido às políticas de segurança corporativa do Microsoft Stream da UnB (`login.microsoftonline.com`), a reprodução incorporada na página é bloqueada pelos navegadores. Para assistir ao vídeo completo com áudio e tela, clique no link de redirecionamento abaixo:

<iframe width="1307" height="735" src="https://www.youtube.com/embed/YcS-Mfis094" title="Reunião com Luiz Henrique Pallavicini - Gravação de Reunião" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## O Método Think Aloud (Pensar em Voz Alta) no Teste de Usabilidade

Este documento apresenta uma visão detalhada sobre o método **Think Aloud**, seus fundamentos, modo de funcionamento e como ele foi integrado e aplicado de forma prática no roteiro de teste de usabilidade do site **Castelo Forte**, desenvolvido para a disciplina de *Interação Humano-Computador (IHC)* da *Universidade de Brasília (UnB)*.[cite: 1]

---

## 1. O que é o Método *Think Aloud*?
O método **Think Aloud** (ou *Pensar em Voz Alta*) é uma das técnicas mais tradicionais, eficazes e de baixo custo utilizadas na avaliação de usabilidade em Interação Humano-Computador. Originalmente adaptado da psicologia cognitiva por Clayton Lewis e consolidado por Jakob Nielsen, o método consiste em **solicitar que o participante verbalize de forma contínua seus pensamentos, sentimentos, expectativas e reações enquanto realiza uma série de tarefas em uma interface.**

Em vez de apenas observar o que o usuário faz de forma silenciosa, o avaliador consegue acessar os *processos cognitivos* que levam a essas ações. Isso permite mapear não apenas *onde* o usuário erra, mas o *porquê* ele tomou aquela decisão.

---

## 2. Como Funciona o Método?
O funcionamento do Think Aloud apoia-se em três pilares fundamentais durante a sessão de testes:

1. **A Explicação e o Alinhamento:** O moderador esclarece ao participante que o objeto de estudo é a interface (o sistema) e não a capacidade do usuário. Isso reduz a ansiedade e encoraja a honestidade.
2. **A Verbalização Constante:** O participante é instruído a relatar o que está tentando fazer, o que espera que aconteça ao clicar em um elemento, o que o confunde e o que ele está sentindo (como frustração ou satisfação).
3. **A Intervenção Mínima (Moderação Ativa):** O papel do moderador é predominantemente observador. Ele só deve intervir para incentivar o participante a continuar falando (usando ganchos neutros como: *"O que você está pensando agora?"* ou *"O que você espera que aconteça aqui?"*) ou se o usuário ficar completamente bloqueado por uma falha catastrófica do sistema.

---

## 3. Aplicação Prática do *Think Aloud* no Roteiro do Teste (Castelo Forte)

O roteiro do teste de usabilidade estruturado para o site **Castelo Forte** ilustra com precisão como o método é preparado, iniciado e mantido ao longo de uma sessão real.[cite: 1] Abaixo, detalha-se como os elementos do método foram incorporados ao roteiro fornecido:

### A. Preparação e Instrução de Abertura (Seção 3.1)
A aplicação metodológica começa diretamente na recepção e quebra-gelo. O roteiro traz as instruções exatas recomendadas pela literatura de IHC para contextualizar o participante[cite: 1]:

> *"Não estamos testando você, mas sim o site - não existe resposta certa ou errada, e qualquer dificuldade sua é a informação que precisamos."*[cite: 1]

Esta frase é crucial no Think Aloud para desarmar o participante psicologicamente, garantindo que ele não se sinta avaliado. Na sequência, a instrução direta de verbalização é dada[cite: 1]:

> *"...Por favor, pense em voz alta: vá dizendo o que está vendo, o que espera encontrar e o que acha que vai acontecer a cada clique."*[cite: 1]

Aqui, o roteiro ensina formalmente o participante a realizar a tarefa de pensar em voz alta.[cite: 1]

### B. Descoberta de Modelos Mentais por meio de Cenários (Seção 3.2 e 4)
Nas tarefas projetadas, o Think Aloud permite desvelar a diferença entre o modelo conceitual do site e o modelo mental do usuário. O roteiro dita[cite: 1]:

> *"Vou te contar um cenário comum de obra, e queria que você tentasse resolver do jeito que faria normalmente."*[cite: 1]

Ao apresentar um cenário prático (como *"Encontrar lata de 18L de tinta acrílica"* ou *"Descobrir regras de frete... para chácara"*), o usuário navega enquanto fala[cite: 1]. Através disso, puderam ser extraídos *insights* valiosos que uma gravação silenciosa não capturaria:

* **Bypass Cognitivo na Tarefa 4 (Salvar Furadeira):** O usuário verbalizou que preferia "enviar o link via WhatsApp para si mesmo" do que se cadastrar[cite: 1]. O Think Aloud revelou o cansaço do usuário em relação a formulários de cadastro de forma explícita.[cite: 1]
* **Frustração na Busca por Frete (Tarefa 3):** O usuário passou **116 segundos** tentando descobrir o valor do frete e acabou falhando[cite: 1]. Durante este tempo, a verbalização de suas dúvidas e do caminho percorrido indicou aos pesquisadores exatamente quais menus de ajuda ou seções informativas estavam opacos ou mal localizados no layout.[cite: 1]

---

## 4. Vantagens do Método Identificadas no Teste
A aplicação do Think Aloud neste teste específico para a disciplina trouxe benefícios práticos evidentes no resultado final:

* **Compreensão Qualitativa dos Erros:** Capturou-se com exatidão a barreira enfrentada na Tarefa 3, revelando que o usuário não entendia por que o valor do frete para regiões afastadas (chácaras) não aparecia de forma simples[cite: 1].
* **Captura de Sugestões Espontâneas:** Durante a verbalização do uso no contexto de obras, o usuário sugeriu espontaneamente a criação de uma **Busca por Voz (Voice UI)**, pois percebeu o quão útil seria pesquisar um produto no canteiro com as mãos ocupadas ou sujas[cite: 1].
* **Descoberta do Comportamento Multicanal:** O método deixou claro que o site serve como *catálogo técnico*, enquanto a conversão de venda de fato ocorre no WhatsApp (onde há negociação de descontos), detalhe que métricas puramente quantitativas (como cliques e mapas de calor) teriam dificuldade de decifrar sozinhas[cite: 1].

---

## 5. Conclusão
O método **Think Aloud** provou-se indispensável no teste de usabilidade do site Castelo Forte[cite: 1]. Ele transformou cliques e tempos de execução frios (como os 116 segundos da falha ou os 55 segundos de compartilhamento) em dados ricos sobre o comportamento, necessidades e limitações reais de um consumidor de 49 anos lidando com tecnologia e logística de construção civil[cite: 1]. 

A inclusão explícita das instruções de verbalização no roteiro garantiu que o participante se sentisse seguro para errar, expondo com clareza os pontos de atrito e as oportunidades de melhoria que constam nas recomendações finais deste relatório[cite: 1].