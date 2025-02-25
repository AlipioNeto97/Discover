function toogleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
  } else{
    img.setAttribute('src', './assets/avatar-dark.png')
  }

  if(html.classList.contains('light')){
    img.setAttribute('alt', 'Foto de Alipio Neto sorrindo com uma caneca de cerveja alemã na mão com fundo de árvores')
  } else {
    img.setAttribute('alt', 'Foto de Alipio Neto sorrindo com um painel elétrico aparecendo no fundo')
  }  
}