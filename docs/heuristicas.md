# Checklist de Verificação de Acessibilidade: Avaliação Heurística Inclusiva

Este checklist adapta as 10 Heurísticas de Usabilidade de Nielsen para o contexto da acessibilidade digital (WCAG/NBR). É utilizado por especialistas de UX e Avaliadores para inspecionar interfaces de forma rápida, identificando violações graves de usabilidade e acessibilidade.

## 1. Visibilidade do Estado do Sistema
- [ ] O sistema fornece feedback em áudio ou texto oculto (para leitores de tela) quando uma ação ocorre em tempo real (ex: "Arquivo anexado com sucesso" notificado via `aria-live`)? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] Os estados de carregamento (loaders/spinners) possuem alternativas textuais para que usuários cegos saibam que a tela não travou e ainda está processando? **[WCAG 4.1.3, eMAG 4.5, ABNT NBR]**
- [ ] Indicadores visuais de foco do teclado informam claramente ao usuário onde ele está na tela a qualquer momento? **[WCAG 2.4.7, eMAG 4.2, ABNT NBR]**

## 2. Compatibilidade entre o Sistema e o Mundo Real
- [ ] O vocabulário utilizado na interface é simples, sem jargões complexos de TI, facilitando a compreensão por pessoas com deficiência intelectual ou cognitiva? **[WCAG 3.1.5, eMAG 1.1, ABNT NBR]**
- [ ] Ícones e imagens representam conceitos do mundo real e são acompanhados de rótulos textuais equivalentes para quem não pode vê-los? **[WCAG 1.1.1, eMAG 6.1, ABNT NBR]**
- [ ] A ordenação de informações segue convenções lógicas e esperadas universalmente, sem depender de "macetes" para uso? **[WCAG 3.2.3, eMAG 3.4, ABNT NBR]**

## 3. Controle e Liberdade do Usuário
- [ ] Os usuários podem pausar, parar ou ocultar animações incessantes, GIFs piscantes ou carrosséis que mudam sozinhos e tiram a atenção de pessoas com TDAH? **[WCAG 2.2.2, eMAG 4.7, ABNT NBR]**
- [ ] Formulários extensos com limites de tempo alertam o usuário antes do tempo expirar e permitem estender o prazo com uma ação simples? **[WCAG 2.2.1, eMAG 4.6, ABNT NBR]**
- [ ] Se o usuário (cometer um erro motor) clicar no botão errado por engano, a interface oferece um "Desfazer" claro ou pede confirmação em ações destrutivas? **[WCAG 3.3.4, eMAG 3.9, ABNT NBR]**

## 4. Consistência e Padrões
- [ ] A navegação principal aparece no mesmo local relativo e na mesma ordem (no código e no visual) em todas as páginas do sistema? **[WCAG 3.2.3, eMAG 3.4, ABNT NBR]**
- [ ] Botões que fazem a mesma coisa (ex: "Enviar") têm o mesmo nome, mesma cor e mesma marcação ARIA por todo o sistema? **[WCAG 3.2.4, eMAG 3.4, ABNT NBR]**
- [ ] Componentes padronizados do HTML (como `<button>` ou `<select>`) são usados ao invés de `<div>` com scripts forçados, garantindo o comportamento nativo esperado em dispositivos assistivos? **[WCAG 4.1.2, eMAG 2.7, ABNT NBR]**

## 5. Prevenção de Erros
- [ ] A interface previne o erro antes dele acontecer, como por exemplo desativar opções inválidas em datas ou oferecer máscaras de preenchimento compreensíveis no código? **[WCAG 3.3.4, eMAG 7.4, ABNT NBR]**
- [ ] Instruções de como preencher campos complexos (ex: "A senha deve ter 8 caracteres") estão visíveis o tempo todo antes e durante a digitação, não dependendo da memória do usuário? **[WCAG 3.3.2, eMAG 7.2, ABNT NBR]**

## 6. Reconhecimento em vez de Memorização
- [ ] O usuário não precisa memorizar informações de uma tela para preencher campos em outra, reduzindo a carga cognitiva de todos, especialmente de idosos e usuários neurodivergentes? **[WCAG 3.3.7, eMAG 3.6, ABNT NBR]**
- [ ] Rótulos de formulário (`<label>`) ficam visíveis mesmo depois que o usuário começa a digitar no campo, sem desaparecer (como ocorre com o mau uso do `placeholder`)? **[WCAG 3.3.2, eMAG 7.1, ABNT NBR]**

## 7. Flexibilidade e Eficiência de Uso
- [ ] Usuários experientes de leitores de tela podem navegar rapidamente pela página pulando de cabeçalho em cabeçalho (`<h1>`, `<h2>`) porque a hierarquia está semanticamente correta? **[WCAG 1.3.1, WCAG 2.4.6, eMAG 2.4, ABNT NBR]**
- [ ] Existe um botão de "Pular Navegação" ou atalhos de teclado eficientes que evitam que o usuário sem mouse passe 50 vezes pelo menu principal com a tecla `Tab`? **[WCAG 2.4.1, eMAG 4.4, ABNT NBR]**

## 8. Estética e Design Minimalista
- [ ] A página é limpa e sem poluição visual excessiva, ajudando pessoas no espectro autista ou com déficit de atenção a se concentrarem na tarefa principal? **[Guia de Boas Práticas, ABNT NBR]**
- [ ] O contraste visual de toda a página obedece ao mínimo da WCAG (4.5:1), eliminando tons de cinza claro que são "estéticos", mas ilegíveis para pessoas com baixa visão? **[WCAG 1.4.3, eMAG 3.1, ABNT NBR]**

## 9. Ajude os Usuários a Reconhecer, Diagnosticar e Recuperar-se de Erros
- [ ] Quando um formulário falha, a mensagem de erro é explícita sobre O QUE falhou e COMO consertar, escrita em texto claro (e não apenas pintando o campo de vermelho)? **[WCAG 3.3.1, WCAG 3.3.3, eMAG 7.4, ABNT NBR]**
- [ ] O foco do sistema é movido automaticamente para o sumário de erros no topo da página ou para o primeiro campo inválido para que o usuário não se perca? **[WCAG 2.4.3, eMAG 7.4, ABNT NBR]**

## 10. Ajuda e Documentação
- [ ] Seções de Ajuda, FAQs ou Tutoriais estão fáceis de encontrar e também estão totalmente acessíveis por teclado e leitores de tela? **[WCAG 2.4.5, WCAG 3.3.5, eMAG 3.6, ABNT NBR]**
- [ ] Existe um canal de suporte claro caso o usuário não consiga avançar por causa de uma barreira de acessibilidade (ex: e-mail de suporte ou chat)? **[Guia de Boas Práticas, ABNT NBR]**
## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
