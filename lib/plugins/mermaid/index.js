(function(){
  let index = 0

  const createDiagram = ($template) => {
    const content = $template.textContent.trim()
    const $node = document.createElement('div')

    $node.classList.add('mermaid-container')
    $template.classList.forEach(className => {
      $template.classList.remove(className)
      $node.classList.add(className)
    })
    $node.innerHTML = mermaid.render('diagram' + index++, content)

    $template.insertAdjacentElement('afterend', $node)
  }

  const init = () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral', // dark | default | forest | neutral
      flowchart: {
        curve: 'basis' // https://github.com/d3/d3-shape/blob/master/README.md#curves
      }
    })

    const templates = document.querySelectorAll('[data-diagram]')
    Array.from(templates).forEach(createDiagram)
    Reveal.layout()
  }

  if (Reveal.isReady()) {
    init()
  } else {
    Reveal.addEventListener('ready', () => init())
  }
}())