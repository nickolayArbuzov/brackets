module.exports = function check(str, bC) {
  let arr = str.split('');
    for(let i=-1; i<arr.length;){
        i++;
        for(let j=0; j<bC.length;){
            if(arr[i]==bC[j][0] && arr[i+1]==bC[j][1]){
                arr.splice(i,2);
                i=0;
                j=0;
            }
            else {
              j++;
            }
        }
    }
    if(arr.length==0){
        return true;
    }
    else{
        return false;
    }
}
