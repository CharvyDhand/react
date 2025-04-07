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