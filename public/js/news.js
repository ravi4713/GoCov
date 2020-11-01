
const api ='9cbbba7d25834dad9ec9c3b48e6d4337'
//from newsapi

const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api+'&category=health&q=health'



fetch(url).then((response)=>{
  response.json().then((data)=>{
    console.log(data)
     const articles = data.articles
     console.log(articles[0].source)
     let html=``
     articles.forEach((element,index) => {
        var source = element.source.name
        var title = element.title
        var description = element.description
        var url = element.url
        console.log(html)
        html += `<div class="headn" id='${index}' onclick='toggles(this.id)'>
        <div class="des">${title}</div>
        
    </div>
    <div class="more" id='more-${index}'>
       <span class='by'>${source} : </span>${description}
       <p><a href="${url}">Read More</a></p>
   </div> `

  })
  document.getElementById('data').innerHTML=html;
})

})
function toggles(e){
    
        $('#more-'+e).slideToggle('slow')
}