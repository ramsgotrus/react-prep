///1 st solution merge overlapping array , first the array should be sorted
// ref https://jsfiddle.net/ra13nw7b/1/
var numbers =[[1,4],[0,4]];

  function mergeOverlappingArray (numbers){
      let result = numbers.slice().sort((a,b)=> a[0]-b[0])
      let i =0;
      console.log('re', result)
      while(i < result.length-1){
          let current = result[i]
          let next = result[i+1]
          if(current[1] >= next[0]){
              current[1] = Math.max(current[1], next[1])
              result.splice(i+1,1)
          }
          else {
              i ++
          }
      }
      return result
  }
  //console.log(mergeOverlappingArray(numbers))

  //2 nd solution overlapping array
  var intervals =[[1,4],[0,4],[6,4]]
  function mergeOverlapArray (intervals){
      if(!intervals.length) return []
      intervals.sort((a,b)=> a[0]-b[0])
      let result = [intervals[0]]
      console.log('res', result)
      for(let[start,end] of intervals){
          let prevEnd = result.at(-1)[1]
          console.log('pre', prevEnd)
          if(start <= prevEnd){
              result.at(-1)[1]= Math.max(end,prevEnd)
          }
          else result.push([start,end])
      }

  }
  mergeOverlapArray(intervals)