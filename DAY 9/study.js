

export default  class shape{
    constructor (name){
this.name=name
    }
    tostring(){
        return `name=${this.name} area=${this.getArea()} parameter=${this.getParameter()}`
    }
}

 export class rect extends shape{
    #width
    #height

    set width(value){
 return this.#width=value
    }
    get width(){
return this.#width
    }
    set height(value){
        return this.#height=value
           }
           get height(){
       return this.#height
           }

           constructor(width,height){
            super("rectangle")
this.#width=width
this.#height=height
           }

           getArea(){
            return this.#width*this.#height
           }

           getParameter(){
            return (this.#width+this.#height)*2
           }


}

export class square extends shape{
#side
set side(value){
return this.#side=value
}

get side(){
    return this.#side
}

constructor(side){
    super("square")
    this.#side=side

}
getArea(){
    return this.#side *2
}
getParameter(){
    return this.#side *4
}
}

 export class circle extends shape{
    #radius

    set radius(value){
        return this.#radius=value
    }

    get radius(){
        return this.#radius
    }
    constructor(radius){
        super("circle")
        this.#radius=radius

    }

        getArea() {
      return (Math.PI * this.radius * this.radius).toFixed(2);
    }
  
    getParameter() {
      return(2 * Math.PI * this.radius).toFixed(2) ;
    }
}

