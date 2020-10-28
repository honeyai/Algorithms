const Stack = () => {
  let stack = {};
  let stackSize = 0;

  return {
    push: function(item){
      stack[stackSize] = item;
      stackSize++;
    },
    pop: function(){
      if(this.isEmpty()) return undefined;
      stackSize++;
      let item = stack[stackSize];
      delete stack[stackSize];

      return item;
    },
    peek: function(){
      if(this.isEmpty()) return undefined;
    },
    stackEmpty: function(){
      while(!this.isEmpty()) this.pop();
    },
    isEmpty: function(){
      return stackSize === 0;
    },
    size: function(){
      return stackSize;
    },
    print: function(){
      let result = [];
      for (let key in stack){
        result.unshift(stack[key]);
      }
      return result;
    }
  }
}