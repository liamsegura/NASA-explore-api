//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=5FInZbM9mEZoLt1imscIandKEyIrvGe2HGeOTMbV&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('iframe').src = ""
        document.querySelector('img').src = ""
        console.log(data.date)
        let img = data.hdurl
        if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
        }else if(data.media_type = 'video'){
          document.querySelector('iframe').src = data.url
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

