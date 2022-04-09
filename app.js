const description = document.querySelector('.description');
const url = document.querySelector('.url');
const topics = document.querySelector('.topics')



fetch('https://api.sampleapis.com/codingresources/codingResources')
    .then(response => response.json())
    .then(data =>{

        let card="";
        data.map((values)=>{
            card +=`<div class="card">
            <p class="description">${values.description}</p>
            <button><a href="${values.url}" class="url">Link</a></button>
            <p class="topics">${values.topics}</p>
            </div>
        `
        })
        document.querySelector('.container').innerHTML = card;

    })
    .catch(err => console.log('Request Failed', err)); 


