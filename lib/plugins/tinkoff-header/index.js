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
          src="${document.location.origin}/lib/plugins/tinkoff-header/tinkoff.png"
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
      height: 3em;
      padding: 0 1em;
    }
    
    .reveal .header.header--hidden {
      display: none;
    }
    
    .reveal .header h1.header-title {
      line-height: 3em;
      font-size: 1em;
    }
    
    .reveal .header-container {
      display: flex;
      justify-content: space-between;
    }
    
    .reveal .header-image-container {
      line-height: 3em;
    }
    
    .reveal .header-image {
      height: 1em;
    }
  `

  const updateHeader = () => {
    const state = Reveal.getState()
    const currentSlide = Reveal.getSlide(state.indexh, state.indexf)

    currentSlide.dataset.hasOwnProperty('disableHeader')
      ? $header.classList.add('header--hidden')
      : $header.classList.remove('header--hidden')

    $title.innerHTML = currentSlide.dataset.title || ''
  }

  const initHeader = () => {
    $head.appendChild($style)
    $reveal.insertBefore($header, $reveal.firstElementChild)
    updateHeader()
    Reveal.addEventListener('slidechanged', updateHeader)
  }

  initHeader()
})()
