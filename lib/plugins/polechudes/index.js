(() => {
  const $head = document.querySelector('head')
  const $style = document.createElement('style');
  $style.setAttribute('type', 'text/css');
  $style.innerHTML = `
    :root {
      --game-cell-size: 2em;
      --game-cell-color: rgb(0, 0, 100);
    }
  
    .reveal .game-container {
      display: flex;
      justify-content: center;
    }
    .reveal .game-label {
      -webkit-user-select: none;  /* Chrome all / Safari all */
      -moz-user-select: none;     /* Firefox all */
      -ms-user-select: none;      /* IE 10+ */
      user-select: none;          /* Likely future */      
      
      box-sizing: border-box;
      display: block;
      float: left;
      height: var(--game-cell-size);
      width: var(--game-cell-size);
      text-align: center;
      line-height: var(--game-cell-size);
      
      background: var(--game-cell-color);
      border: 4px white solid;
      margin-right: 8px;
      
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      font-size: var(--game-cell-size);
      position: relative;
    }
    
    .reveal .game-label::after {
       -webkit-user-select: none;  /* Chrome all / Safari all */
      -moz-user-select: none;     /* Firefox all */
      -ms-user-select: none;      /* IE 10+ */
      user-select: none;          /* Likely future */      
      
      box-sizing: border-box;
      content: '';
      display: block;
      height: calc(var(--game-cell-size) - 8px);
      width: calc(var(--game-cell-size) - 8px);
      background: var(--game-cell-color);
      position: absolute;
      top: 0;
      left: 0;
    }
    
    .reveal .game-label.checked:after {
      display: none;
    }
  `

  $head.appendChild($style)

  const gen = (word, container) => {
    const fr = document.createElement('div');
    fr.classList.add('game-container')

    for (let letter of word) {
      letter = letter.toUpperCase()
      const block = document.createElement('div')
      block.classList.add('game-label')
      block.textContent = letter
      block.dataset.letter = letter
      fr.appendChild(block)

      block.addEventListener('click', () => {
        Array.from(container.querySelectorAll('[data-letter|=' + letter + ']')).forEach((b) => {
          b.classList.add('checked')
        })
      })
    }

    container.appendChild(fr)
  }

  const clearEl = (element) => {
    while (element.firstChild) {
      element.firstChild.remove()
    }
  }

  const init = () => {
    Array.from(document.querySelectorAll(`[data-game-word]`)).forEach(container => {
      const word = container.dataset.gameWord
      clearEl(container)
      gen(word, container)
    })
  }


  if (Reveal.isReady()) {
    init()
  } else {
    Reveal.addEventListener('ready', () => init())
  }
})()
