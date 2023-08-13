
function MakeRequest (Food){
   return new Promise ((resolve,reject)=>{
      console.log(`Got the request and making ${Food}`)
      if (Food==='drums'){
         resolve('Drums are ready')
      }
      else {
         reject('sorry , not sufficient chicken available')
      }
   })
}

function requestPizza (Pizza){
   return new Promise((resolve,reject)=>{
      console.log("Processing response")
      resolve(`YOur ${Pizza} is ready`)
   })
}


MakeRequest('drums')
.then(res=>{
   console.log('food ready')
   return requestPizza(res)
   .then(process=>{
      console.log(process)
   }).catch(err=>{
      console.log(err)
   })
})