browser.devtools.network.onRequestFinished.addListener(async e => {
  const url = await browser.devtools.inspectedWindow.eval(`document.URL`)
  if(e.request.url === url[0]){
    const content = await e.getContent()
    source.innerText = content[0]
  }
})

