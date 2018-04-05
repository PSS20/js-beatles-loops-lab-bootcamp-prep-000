function theBeatlesPlay(musician,instrument){
  var array = {}
  for(var i=0;i<musician.length;i++){
    array[i] = musician[i]+'plays'+instrument[i]
  }
  console.log(array)
  return array
}

function 