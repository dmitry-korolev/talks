(function(){
  const decode = (raw) => {
    const parser = new DOMParser
    const dom = parser.parseFromString(
      '<!doctype html><body>' + raw,
      'text/html'
    )

    return dom.body.textContent
  }

  const getTemplate = ($slide) => {
    return $slide.querySelector('[data-diagram]')
  }

  function isDiagramSlide($slide) {
    return !!getTemplate($slide)
  }

  const getDiagramData = ($slide) => {
    return decode(getTemplate($slide).innerHTML)
  }

  function destroyDiagram($slide) {
    if (!isDiagramSlide($slide)) {
      return
    }

    const $node = $slide.querySelector('div.mermaid-container')

    if ($node) {
      $node.remove()
    }
  }

  function showDiagram($slide) {
    if (!isDiagramSlide($slide)) {
      return
    }

    const content = getDiagramData($slide)
    const $node = document.createElement('div')
    $node.classList.add('mermaid-container')
    $node.innerHTML = mermaid.render('diagram', content)

    $slide.insertBefore($node, getTemplate($slide))
    Reveal.layout()
  }

  Reveal.addEventListener('slidechanged', function( event ) {
    if (event.previousSlide) {
      destroyDiagram(event.previousSlide)
    }

    if (event.currentSlide) {
      showDiagram(event.currentSlide)
    }
  })
}())