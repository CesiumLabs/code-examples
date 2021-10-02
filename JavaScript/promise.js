
function Fetchrequest() {
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest
        xhr.open('GET','https://api.github.com/users',true)
        xhr.onload=function () {
            if(this.status==200){
                resolve(this.responseText)
            }else{
                reject('Error Occurred')
            }
        }
        xhr.send()
    })
}
Fetchrequest().then((data)=>{
    //console.log()
    let str=``
    JSON.parse(data).forEach((profile)=>{
        str+=`<div class="card" style="width: 18rem;">
        <img src='${profile.avatar_url})' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${profile.login}</h5>
          <a href="${profile.url}" class="btn btn-primary">Follow</a>
        </div>
      </div>`
    })
    document.getElementById('box').innerHTML=str
}).catch((msg)=>{
    console.log(msg)
})