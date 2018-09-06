(function() {
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

  const addStyle = () => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = 'lib/plugins/tinkoff-header/style.css'
    document.querySelector('head').appendChild(link)
  }

  const addHeader = () => {
    $reveal.insertBefore($header, $reveal.firstElementChild)
  }

  const updateHeader = () => {
    const state = Reveal.getState()
    const currentSlide = Reveal.getSlide(state.indexh, state.indexf)

    currentSlide.dataset.hasOwnProperty('disableHeader')
      ? $header.classList.add('header--hidden')
      : $header.classList.remove('header--hidden')

    $title.innerHTML = currentSlide.dataset.title || ''
  }

  window.initHeader = ({ theme } = {}) => {
    if (theme === 'dark') {
      $image.classList.add('header-image--dark')
    }

    addStyle()
    addHeader()
    updateHeader()
    Reveal.addEventListener('slidechanged', updateHeader)
  }
})()
