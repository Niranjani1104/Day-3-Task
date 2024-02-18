//Anonymous Function
let reversal = function (nums, k) {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  }
  let s = [1,2,3,4,5];
  console.log(reversal(s, 3));

  //Arrow Function
  let reversal =  (nums, k)  => {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  }
  let s = [1,2,3,4,5];
  console.log(reversal(s, 3));