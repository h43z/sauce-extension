import { editor } from './codemirror.bundle.js'

browser.devtools.network.onRequestFinished.addListener(async e => {
  const url = await browser.devtools.inspectedWindow.eval(`document.URL`)
  if(e.request.url === url[0]){
    const content = await e.getContent()
    editor.dispatch({changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: content[0]
    }})
  }
})

onkeydown = e => {
  if(e.key === 'Escape'){
    // else buggy behavoir when opening inline dev tools
    // or closing codemirror search
    e.preventDefault()
  }
}
