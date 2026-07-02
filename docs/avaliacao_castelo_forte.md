# Relatório de Avaliação Manual de IHC e Acessibilidade — Site "Castelo Forte"

Este documento apresenta o relatório de **Avaliação Manual** realizada no portal institucional e e-commerce do **Castelo Forte**, fundamentada exclusivamente na aplicação dos **Checklists de Verificação do Projeto (CheckAAA)**, sem a intervenção de varreduras automatizadas via plugin.

A avaliação manual visa inspecionar a conformidade da interface quanto às boas práticas de **Desenvolvimento Web**, **Geração de Conteúdo**, **Heurísticas de Nielsen** e **Jornada/Blueprint do Usuário**, identificando barreiras de usabilidade e acessibilidade na prática.

---

## Dados da Avaliação & Resumo Executivo

> [!NOTE]
> **Objeto de Estudo:** Site Castelo Forte  
> **Metodologia:** Avaliação Manual baseada nos Checklists de Verificação do Projeto (CheckAAA)  
> **Foco:** Acessibilidade, Heurísticas de Nielsen, Conteúdo e Blueprint  
> **URL Analisada:** [casteloforte.com.br](https://www.casteloforte.com.br/)

### Painel Geral de Conformidade (Avaliação Manual)

| Total Avaliado | ✅ Adequados | ⚠️ Pontos de Atenção | ❌ Falhas Críticas | Índice de Adequação |
| :---: | :---: | :---: | :---: | :---: |
| **10 critérios** | **4** | **2** | **4** | **40,0%** |

---

## Diagnóstico Detalhado por Checklist

### 1. Checklist de Desenvolvimento Web (Código e Estrutura)

- [x] **Idioma e Título da Página (`<html lang>` e `<title>`)**
  * **O que estava sendo avaliado:** Verifica se a tag `<html>` possui o atributo `lang` definido corretamente para tecnologias assistivas (como leitores de tela) e se o elemento `<title>` é descritivo e exclusivo para identificar a página na aba do navegador.
  * **Resultado:** `✅ Adequado`
  * **Explicação do resultado:** O atributo `lang="pt-br"` foi devidamente identificado no código-fonte, garantindo que sintetizadores de voz utilizem a pronúncia correta do português brasileiro. Além disso, o `<title>` ("Castelo Forte | 35 anos construindo sonhos 10 Lojas + Site") é descritivo e único.

- [ ] **Hierarquia de Cabeçalhos (`<h1>` a `<h6>`)**
  * **O que estava sendo avaliado:** Verifica se os cabeçalhos seguem uma ordem lógica sequencial sem saltar níveis estruturais (por exemplo, ir de um `<h1>` direto para um `<h3>`) e se existe apenas um cabeçalho principal `<h1>` por view.
  * **Resultado:** `⚠️ Atenção`
  * **Explicação do resultado:** Na análise manual da estrutura do DOM, foram detectados múltiplos `<h1>` e pulos na sequência lógica dos cabeçalhos. Essa inconsistência desorienta usuários de tecnologias assistivas que utilizam a lista de cabeçalhos como atalho principal para navegar pelas seções da página.

- [ ] **Marcos Semânticos (Landmarks)**
  * **O que estava sendo avaliado:** Verifica se a interface faz uso adequado de tags semânticas estruturais do HTML5 (como `<header>`, `<main>`, `<nav>` e `<footer>`) para demarcar as grandes regiões da página.
  * **Resultado:** `❌ Falha Crítica`
  * **Explicação do resultado:** O site falha ao não utilizar tags estruturais essenciais como o `<main>`. O checklist penaliza essa ausência porque leitores de tela utilizam essas landmarks (marcos semânticos) para permitir que o usuário salte diretamente para o conteúdo de interesse sem precisar ouvir todo o menu superior repetidamente.

- [ ] **Formulários e Validação (`<label>`)**
  * **O que estava sendo avaliado:** Verifica se todos os campos de entrada interativos (como campos de busca, inputs de texto e selects) possuem um rótulo explícito associado programaticamente (`<label>`) ou um atributo textual de acessibilidade (`aria-label`).
  * **Resultado:** `❌ Falha Crítica`
  * **Explicação do resultado:** Foram inspecionados 7 campos interativos desprovidos de associação com `<label>` ou `aria-label`. Isso representa uma barreira grave para pessoas com deficiência visual, pois o leitor de tela anuncia apenas "caixa de edição", impossibilitando saber que dado deve ser preenchido.

---

### 2. Checklist de Geração de Conteúdo

- [ ] **Texto Alternativo para Imagens (`alt`)**
  * **O que estava sendo avaliado:** Verifica se todas as imagens informativas, banners promocionais e fotos de produtos possuem uma descrição textual equivalente preenchida no atributo `alt`.
  * **Resultado:** `❌ Falha Crítica`
  * **Explicação do resultado:** Durante a auditoria de conteúdo, foram contabilizadas 123 imagens informativas sem o atributo `alt`. Isso viola diretamente os requisitos de redação e conteúdo acessível, pois impede que consumidores cegos ou com baixa visão tenham acesso a informações sobre produtos, promoções e especificações exibidas em formato de imagem.

---

### 3. Avaliação Heurística Inclusiva (Nielsen)

- [x] **Visibilidade do Status (H1) e Prevenção de Erros (H5)**
  * **O que estava sendo avaliado:** Verifica se a interface oferece feedback visual contínuo sobre o status do sistema (como indicadores de carregamento e progresso) e se valida preventivamente os dados dos formulários antes do envio.
  * **Resultado:** `✅ Adequado`
  * **Explicação do resultado:** O site atende com êxito a essas heurísticas, apresentando indicadores visuais claros durante requisições e carregamentos, além de aplicar regras preventivas de formatação e restrição em campos de formulário antes da submissão.

- [x] **Recuperação de Erros (H9)**
  * **O que estava sendo avaliado:** Verifica se as mensagens e avisos de erro são anunciados de forma acessível utilizando regiões apropriadas de alerta (`role="alert"`) e se fornecem orientações construtivas para a resolução do problema.
  * **Resultado:** `✅ Adequado`
  * **Explicação do resultado:** A interface implementa corretamente regiões de alerta dinâmicas (`role="alert"`) para notificar falhas de preenchimento ou alertas do sistema, garantindo um diagnóstico claro e construtivo para os usuários.

- [ ] **Flexibilidade e Eficiência de Uso (H7 — Skip Link)**
  * **O que estava sendo avaliado:** Verifica se o site disponibiliza um link ou atalho rápido do tipo *"Pular para o conteúdo principal"* no topo da página para agilizar a navegação por teclado.
  * **Resultado:** `⚠️ Atenção`
  * **Explicação do resultado:** A ausência de um *"Skip Link"* no cabeçalho penaliza a eficiência da navegação. Pessoas com deficiência motora ou usuários que navegam exclusivamente por teclado são obrigados a pressionar a tecla `Tab` dezenas de vezes para percorrer todo o menu de navegação a cada nova página acessada.

---

### 4. Personas e Service Blueprint

- [ ] **Aderência a Personas (Tecnologias Assistivas)**
  * **O que estava sendo avaliado:** Verifica se os botões, ícones e controles interativos da interface possuem rótulos de voz (`aria-label`) compatíveis com as necessidades das personas mapeadas que dependem de leitores de tela.
  * **Resultado:** `❌ Falha Crítica`
  * **Explicação do resultado:** Ao simular a jornada de navegação com as personas de baixa visão e cegueira, constatou-se que botões fundamentais representados apenas por ícones (como o carrinho de compras e o botão de busca) não possuem `aria-label`. O leitor de tela lê apenas "botão", bloqueando a autonomia da persona ao tentar realizar uma compra.

- [x] **Service Blueprint - Frontstage (Canais Alternativos)**
  * **O que estava sendo avaliado:** Verifica se o mapeamento da jornada do usuário (Frontstage do Blueprint) oferece pontos de contato evidentes para atendimento humano ou suporte alternativo nos momentos em que o cliente enfrenta barreiras digitais.
  * **Resultado:** `✅ Adequado`
  * **Explicação do resultado:** O e-commerce garante canais alternativos de suporte visíveis durante toda a jornada, disponibilizando atendimento via Televendas e WhatsApp. Isso preenche com perfeição o critério do Service Blueprint ao oferecer uma rota de escape humanizada quando a interface digital apresenta entraves de acessibilidade.

---

## 💡 Conclusão da Avaliação Manual

A avaliação manual baseada nos checklists do **CheckAAA** comprova que, sem ferramentas assistivas ou padronização de código na raiz do projeto, barreiras estruturais severas chegam até o usuário final. As falhas críticas em **marcos semânticos**, **rótulos de formulários**, **textos alternativos em imagens** e **botões sem rótulo de voz** demonstram a necessidade de integrar as diretrizes de acessibilidade desde a concepção do design até o desenvolvimento das telas.
