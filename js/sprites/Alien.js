class Alien{
    constructor(id){
        this.id = id
        this.node = document.querySelector(this.id)
        this.count = 0
        this.speed = 2
        this.y = 300
        this.node.onclick = () => {
            if(time > 0){

                this.count++
                clicker.value = this.count
    
                this.y = 300
                this.node.style.top = this.y + "px"
                this.x = Math.random() * 500
                this.node.style.left = this.x + "px"
            }
        }

    }

    tick(){
        this.y -= this.speed
        this.node.style.top = this.y + "px"
    }
}