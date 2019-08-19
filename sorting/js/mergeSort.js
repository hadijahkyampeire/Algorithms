function merge(left, right)
{
    var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {
  
            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

const mergeSort = data => {
  if(data.length == 1 ) return data;
  
  var mid = data.length / 2;
  var left = data.slice(0, mid);
  var right = data.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
    
  return merge(left, right);
}

console.log(mergeSort([34, -2, 3 , 5, -6, 1, 35]));
