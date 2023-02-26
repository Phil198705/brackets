module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.flat();
  let stack = [];
  let res = 0;
  let openBrackets = ['(', '{', '[']
  for( i = 0; i < str.length; i++){
    if((openBrackets.includes(str[i]) && bracketsConfig.includes(str[i]))){
      stack.push(str[i]);
    }else if(str[i] == '|' && res == 0){
      stack.push(str[i]);
    }else{
      if(stack.length === 0){
        return false;
      }
    }
    if((stack[stack.length - 1] === '(' && str[i] === ')') ||
     (stack[stack.length - 1] === '[' && str[i] === ']') || 
     (stack[stack.length - 1] === '{' && str[i] === '}') || 
     (stack[stack.length - 1] === '|' && str[i] === '|')){
      stack.pop(str[i]);
    }
  
  } return stack.length === 0;
}
