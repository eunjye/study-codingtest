function solution(nums) {
  // key의 개수가 total/2개 이상이면 total/2
  // key의 개수가 total/2개 미만이면 key개수
  var leng = nums.length;
  var hash = new Map();
  nums.forEach((num)=>{
      if (!hash.has(num)) {
          hash.set(num, 1);
      } else {
          hash.set(num, hash.get(num)+1);
      }
  })
  if (hash.size >= nums.length/2) {
      return nums.length/2;
  }
  return hash.size;
}