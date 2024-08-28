class Character {
    #life
    constructor(name){
        this.name = name
        this.#life = 1
        this.maxLife = 1
        this.atack = 0
        this.defense = 0
    }

    // para pegar a vida do chara
    get life() {
        return this.#life
    }

    // para enviar a nova vida do Char 
    // verificaçâo para qu a vida não fique inferior a 0

    set life(newLife){
        this.#life = newLife < 0 ? 0 : newLife
    }
}