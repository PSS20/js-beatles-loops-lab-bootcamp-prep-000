function theBeatlesPlay(musician,instrument){
  var array = {}
  for(var i=0;i<musician.length;i++){
    array[i] = musician[i]+' plays '+instrument[i]
  }
  console.log(array)
  return array
}

function johnLennonFacts(array){
  var i=0
  while(i<array.length){
  array[i]= array[i]+"!!!"
  i++ }
  return array
}

function iLoveTheBeatles(number){
  var array = {}
  do{
    array.push("I love the Beatles!")
  }while(number<15)
  return array
}