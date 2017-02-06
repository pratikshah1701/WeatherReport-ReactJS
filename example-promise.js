function addPromise(a,b){
return new Promise(function(resolve,reject){
  if(typeof a === 'number' &&  typeof b === 'number')
  {
    resolve(a+b);
  }
  else  {
    reject('not a number');
  }
});
}
addPromise(7,2).then(function (sum) {
    console.log('Promise succes',sum);
  },function(err){
    console.log('error',err);
});


addPromise(7,'pratik').then(function (sum) {
    console.log('Promise succes',sum);
  },function(err){
    console.log('error',err);
});
