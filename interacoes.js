function clicou() {
    var botao = window.document.getElementById('button');
    var projeto = window.document.getElementById('projetos');

    if(projeto.style.display == 'block'){
        projeto.style.display = 'none';
    }else{
        projeto.style.display = 'block';
    }
    
}
