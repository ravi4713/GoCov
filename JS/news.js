const request =require('postman-request')
const api ='use your Api key'



const newReq = (callback) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api+'&category=health&q=corona'
    request({url: url,json: true},(error,response) => {
        if (error){
            callback('Check Your Network Connention! failed to Connent',undefined)
        } else {
            callback(undefined,response)
        }
    })
}

newReq((error,data) =>{
    if (error){
        console.log(error)
    } else {
        let html = ``
     const articles = data.body.articles
     console.log(articles[0].source)
     articles.forEach((element,index) => {
        var source = element.source.name
        var title = element.title
        var description = element.description
        var url = element.url
        html += `<div class="card">
        <div class="card-header" id="heading-${index}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
              ${title}
            </button>
          </h2>
        </div>
    
        <div id="collapse-${index}" class="collapse show" aria-labelledby="heading-${index}" data-parent="#accordionExample">
          <div class="card-body">
            <h3>Source : ${source}</h3>
            ${description}
            <a href='${url}'>About More</a>
          </div>
        </div>
      </div>`
     });
    document.getElementById('accordionExample').innerHTML = html;
    }

})
