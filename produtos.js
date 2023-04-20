class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionar(){
        let produto = this.lerDados()
        if(this.validar(produto) == true){
            this.salvar(produto)
        }

        this.listar()
        this.Cancelar()

    }

    lerDados(){
        let produto = {}
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('pdpreço').value


        return produto
    }

    validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Por favor insira o nome do produto! \n'
        }

        if(produto.precoProduto == ''){
            msg += 'Por favor insira o preço do produto! \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }

    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_dell = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            td_dell.innerText = this.arrayProdutos[i].td_dell;
            let imagem = document.createElement('img')
            imagem.src = 'dell.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_dell.appendChild(imagem)
        }
    }

    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreço').value = ''
    }

Deletar(id){
    let tbody = document.getElementById ('tbody')
    for (let i = 0; i < this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id){
            this.arrayProdutos.splice(i, 1)
            tbody.deleteRow(i)
        }
    }

    alert(`Item deletado com sucesso`)
}

}

var produto = new Produto();