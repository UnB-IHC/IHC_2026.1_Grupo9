# Avaliador Heurístico Híbrido (Plugin)

O Avaliador Heurístico Híbrido é uma extensão de navegador focada em facilitar auditorias de UX/UI baseadas nas **10 Heurísticas de Usabilidade de Jakob Nielsen**. 

O plugin atua de forma híbrida: realiza uma varredura automática no código da página em busca de problemas estruturais e de acessibilidade, ao mesmo tempo que fornece uma interface limpa para o avaliador registrar suas análises manuais. Ao final, a extensão compila todos os dados e exporta um relatório detalhado no formato `.txt`.

## Funcionalidades

- **Inspeção Automática (Scanner DOM):** Lê a página ativa em tempo real e identifica:
  - Presença de tags estruturais (`<h1>`, `<title>`).
  - Configurações de responsividade (`<meta viewport>`).
  - Definição de idioma (`<html lang>`).
  - Problemas de acessibilidade (Imagens sem `alt`, inputs sem `label`).
  - Gafes de navegação (Links vazios/mortos, links que forçam nova aba, botões sem texto).
- **Checklist Heurístico Integrado:** Interface contendo as 10 heurísticas de Nielsen, acompanhadas de dicas práticas para guiar a avaliação qualitativa.
- **Exportação Profissional:** Geração de um arquivo `.txt` contendo metadados da página (URL, Título, Data/Hora), os insights automáticos e as notas de severidade/evidências apontadas pelo avaliador.

## Tecnologias Utilizadas

- **HTML5 & CSS3:** Estruturação e estilização da interface do popup.
- **JavaScript (Vanilla):** Lógica de varredura de DOM, manipulação de interface e geração do relatório para download.
- **Manifest V3:** Padrão moderno e seguro para desenvolvimento de extensões de navegadores baseados em Chromium.

## Como instalar e usar (Modo do Desenvolvedor)

Como esta extensão não está publicada na Chrome Web Store, você precisará instalá-la localmente utilizando o Modo do Desenvolvedor. O processo funciona no Google Chrome, Microsoft Edge, Brave ou Opera.

### Passo 1: Obter os arquivos
O código fonte do plugin encontra-se na pasta `plugin/` deste repositório. Você precisará dos arquivos `manifest.json`, `popup.html` e `popup.js`.

### Passo 2: Carregar no Navegador
1. Abra o seu navegador e digite `chrome://extensions/` (ou `edge://extensions/`) na barra de endereços.
2. No canto superior direito, ative a chave **"Modo do desenvolvedor"**.
3. Clique no botão **"Carregar sem compactação"** (Load unpacked) que aparecerá no canto superior esquerdo.
4. Selecione a pasta onde os arquivos do plugin estão salvos.
5. Pronto! A extensão aparecerá na sua lista. Recomendamos fixá-la clicando no ícone de "quebra-cabeça" na barra superior do navegador e depois no ícone de alfinete.

## Como realizar uma avaliação

1. Navegue até a página ou sistema web que você deseja auditar.
2. Clique no ícone da extensão na sua barra superior.
3. Observe imediatamente o painel azul **"Dados Automáticos da Página"** para checar os erros estruturais encontrados pelo robô.
4. Para cada uma das 10 heurísticas, selecione o **Status** (Adequado, Atenção, Falha Crítica, N/A) e escreva as **Evidências** no campo de texto logo abaixo.
5. Clique no botão **"Gerar Relatório Detalhado (.txt)"**.
6. O arquivo será baixado automaticamente com o nome `auditoria_ux_YYYY-MM-DD.txt`, pronto para ser anexado à documentação do seu projeto.
## Referências Bibliográficas

*   **W3C (World Wide Web Consortium).** *Web Content Accessibility Guidelines (WCAG)*. Diretrizes de Acessibilidade para Conteúdo Web. Disponível para consulta das recomendações internacionais de acessibilidade aplicadas neste checklist.
*   **Governo Federal do Brasil.** *Guia de Boas Práticas para Acessibilidade Digital / eMAG (Modelo de Acessibilidade em Governo Eletrônico)*. Documento orientativo que adapta as diretrizes globais para o contexto digital brasileiro.
*   **ABNT (Associação Brasileira de Normas Técnicas).** *Normas Brasileiras (NBR) de Acessibilidade*. Inclui diretrizes aplicáveis a interfaces humano-computador e acessibilidade (como ABNT NBR 15206 e correlatas).
