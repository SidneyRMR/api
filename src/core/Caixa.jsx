class Caixa {
    constructor(valorAbertura, valorSangria, dataHoraAbertura, dataHoraFechamento, idCompra, idFesta, idUsuario, statusCaixa) {
      this.valorAbertura = valorAbertura;
      this.valorSangria = valorSangria;
      this.dataHoraAbertura = dataHoraAbertura;
      this.dataHoraFechamento = dataHoraFechamento;
      this.idCompra = idCompra;
      this.idFesta = idFesta;
      this.idUsuario = idUsuario;
      this.statusCaixa = statusCaixa;
    }
  
    getValorAbertura() {
      return this.valorAbertura;
    }
  
    setValorAbertura(valorAbertura) {
      this.valorAbertura = valorAbertura;
    }
  
    getValorSangria() {
      return this.valorSangria;
    }
  
    setValorSangria(valorSangria) {
      this.valorSangria = valorSangria;
    }
  
    getDataHoraAbertura() {
      return this.dataHoraAbertura;
    }
  
    setDataHoraAbertura(dataHoraAbertura) {
      this.dataHoraAbertura = dataHoraAbertura;
    }
  
    getDataHoraFechamento() {
      return this.dataHoraFechamento;
    }
  
    setDataHoraFechamento(dataHoraFechamento) {
      this.dataHoraFechamento = dataHoraFechamento;
    }
  
    getIdCompra() {
      return this.idCompra;
    }
  
    setIdCompra(idCompra) {
      this.idCompra = idCompra;
    }
  
    getIdFesta() {
      return this.idFesta;
    }
  
    setIdFesta(idFesta) {
      this.idFesta = idFesta;
    }
  
    getIdUsuario() {
      return this.idUsuario;
    }
  
    setIdUsuario(idUsuario) {
      this.idUsuario = idUsuario;
    }
  
    getStatusCaixa() {
      return this.statusCaixa;
    }
  
    setStatusCaixa(statusCaixa) {
      this.statusCaixa = statusCaixa;
    }
  }
  