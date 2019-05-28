(function() {
  const $head = document.querySelector('head')
  const $reveal = document.querySelector('.reveal')
  const $header = document.createElement('header')
  $header.classList.add('header')
  $header.classList.add('header--hidden')
  $header.innerHTML = `
    <div class="header-container">
      <h1 class="header-title">Пример заголовка</h1>
      <div class="header-image-container">
        <img
          class="header-image"
          src="lib/plugins/tinkoff-header/tinkoff.png"
        />
      </div>
    </div>
  `

  const $title = $header.querySelector('.header-title')
  const $image = $header.querySelector('.header-image')

  const $style = document.createElement('style');
  $style.type = 'text/css';
  $style.innerHTML = `
    .reveal .header {
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
    
      width: 100vw;
      height: 2em;
      padding: 0 1em;
      
      z-index: 999;
    }
    
    .reveal .header.header--hidden {
      display: none;
    }
    
    .reveal .header-title.header-title--inverted,
    .reveal .header-image.header-image--inverted {
      filter: invert(100%);
    }
    
    .reveal .header h1.header-title {
      line-height: 2em;
      font-size: 1em;
    }
    
    .reveal .header-container {
      display: flex;
      justify-content: space-between;
    }
    
    .reveal .header-image-container {
      line-height: 2em;
    }
    
    .reveal .header-image {
      height: 0.6666em;
    }
  `

  const updateHeader = () => {
    const state = Reveal.getState()
    const currentSlide = Reveal.getSlide(state.indexh, state.indexf)

    currentSlide.dataset.hasOwnProperty('titleDisable')
      ? $header.classList.add('header--hidden')
      : $header.classList.remove('header--hidden')

    currentSlide.dataset.hasOwnProperty('titleInverted')
      ? $title.classList.add('header-title--inverted')
      : $title.classList.remove('header-title--inverted')

    currentSlide.dataset.hasOwnProperty('logoInverted')
      ? $image.classList.add('header-image--inverted')
      : $image.classList.remove('header-image--inverted')

    $title.innerHTML = currentSlide.dataset.title || ''
  }

  const initHeader = () => {
    $head.appendChild($style)
    $reveal.insertBefore($header, $reveal.firstElementChild)
    updateHeader()
    Reveal.addEventListener('slidechanged', updateHeader)
  }

  if (Reveal.isReady()) {
    initHeader()
  } else {
    Reveal.addEventListener('ready', () => initHeader())
  }
})()
