
// my fetch function
export async function load({ fetch }) {  
  const category = 'animal';

  const url = 'https://api.chucknorris.io/jokes/random?category=' + category;

  const chuckReq = await fetch(url);
  
  const chuckRes = await chuckReq.json();

  const theJoke = chuckRes.value;

  console.log(theJoke);

  return {
    theJoke
  }

}