// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


const clearGifsBtn =document.getElementById('clear-button')
const makeGifsBtn = document.getElementById('submit-button')


makeGifsBtn.addEventListener('click',gifMaker);
clearGifsBtn.addEventListener('click',clearGifs);


const display = document.getElementById("display");


async function giphyRequest(query) {
  const response = await axios.get(`
  http://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=${giphyApiKey}`);
        
 return response.data.data.map((val) => {
    return {
      gifURL: val.images.fixed_width.url
    }
  });

  };

async function gifMaker(e){
  e.preventDefault();
  let searchTerm = document.getElementById('search-term').value;
  const gifs = await giphyRequest(searchTerm);
  for(let i = 0; i < gifs.length; i ++){
    const gif = document.createElement('img');
    gif.src = gifs[i].gifURL;
    display.appendChild(gif);
  }
};

function clearGifs(){
  display.innerHTML = '';
  display.innerHTML = '...Your GIFS here...'
};


 
