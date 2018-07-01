function digPow(n, p){
  nString = (''+n); sum = 0;
  for (let i=0; i<nString.length; i++) {
    sum=sum+Math.pow(nString[i], p);
    p=p+1;
  }
  answer=Number.isInteger(sum/n);
  if (answer) {
    return sum/n;
  }
  else {
    return -1;
  }
}