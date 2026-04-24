# Quiz: Qual Backyardigan Você Seria?

Um quiz simples (feito para rodar no navegador) que diz qual personagem de **Backyardigans** combina mais com você com base nas suas escolhas.

## Como jogar

1. Abra o projeto (veja *Como executar*).
2. Na tela inicial, clique em *“Descobrir Meu Personagem”*.
3. Responda *10 perguntas*, escolhendo *1 opção* por pergunta.
4. Use *Anterior* e *Próxima* para navegar.
5. Ao final, veja seu resultado com nome, “espécie”, descrição e imagem.
6. Clique em *“Jogar Novamente”* para recomeçar.

## Como funciona

- O quiz tem *10 perguntas* e cada pergunta tem *5 alternativas*.
- Cada alternativa contribui para um dos 5 personagens:
  - *Pablo*, *Tyrone*, *Uniqua*, *Tasha*, *Austin*
- No fim do quiz:
  - as escolhas são somadas,
  - e o personagem com maior pontuação total aparece como resultado.
- Durante o quiz, você vê:
  - contador de perguntas (ex.: “Pergunta 3 de 10”),
  - porcentagem e barra de progresso conforme avança.

## Como executar

- Jeito mais simples: abra o arquivo `index.html` no navegador (duplo clique).
- Alternativa recomendada no *VS Code*: usar um servidor local (por exemplo, a extensão *Live Server*).

## Estrutura do projeto

- `index.html`: telas de boas-vindas, quiz e resultado.
- `style.css`: estilos (tema, layout, botões e responsividade).
- `script.js`: regras do quiz (perguntas, navegação, pontuação e resultado).
- `assets/`: imagens dos personagens.