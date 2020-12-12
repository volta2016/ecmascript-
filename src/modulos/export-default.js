export default class Dado {
  constructor() {
    this.tirar();
    // console.log(this._valor)
  }
  
  get valor() {
    return this._valor;
  }
  
  tirar() {
    this._valor=Math.trunc(Math.random()*6)+1;
    // console.log(this._valor)
  }
}