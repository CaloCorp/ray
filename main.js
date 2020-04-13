const Ray = function () {
 return  {
    
    length: 0,
    push: function (value){
    this[this.length++] = value; 

    },
    pop: function (){
    const popped = this[this.length -1]

     delete this[this.length-1]
     this.length--
      return popped 
    },
    unshift: function(value){
    this.value = value
    this[0]=value
      this.length++
    },
    shift: function (){
      const shifted = this[0]
      this.length--;
      
      return shifted
    }
  }
  
 

}


module.exports = {
  Ray,
}