let i = 1;
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const baseUrl = 'https://picsum.photos/v2/list';
  // const page = form.page;
  // const limit = form.limit;
  i++;
  const url =`${baseUrl}?page=${i}&limit=3`;
  console.log(url);

  try {
    const response = await axios.get(url)

    const container = document.querySelector('.container');
    
    response.data.forEach(item => {
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');

      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}:${item.author}`;

      const newCard = document.createElement('div');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
      newCard.classList.add('card');

      container.appendChild(newCard);
    })

  } catch (error) {
    console.log(error);
  }

});

form.addEventListener('reset',() => {
    const container = document.querySelector('.container')
    container.textContent = '';
    i = 1;
})