function customRender(reactElement){
      const domelt=document.createElement(reactElement.type)
      domelt.innerHTML=reactElement.children
    //   domelt.setAttribute('href',reactElement.props.href)
    //   domelt.setAttribute('target',reactElement.props.target)
    for(const p in reactElement.props){
        //   if(p==children) continue;
          domelt.setAttribute(p,reactElement.props[p])
    }
       root.appendChild(domelt)
    }
const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}
const root=document.querySelector('#root')
// add reactelement in root
customRender(reactElement,root)