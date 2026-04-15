const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const baseUrl = 'https://picsum.photos/v2/list';
  const page = form.page.value;
  const limit = form.limit.value;
  
  const url =`${baseUrl}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    const container = document.querySelector('.container')
    container.textContent = '';
  
    response.data.forEach (item => {
  
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
  
      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}: ${item.author}`;
  
      const newCard = document.createElement('div');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
      newCard.classList.add('card');
  
      container.appendChild(newCard);
    });
  } catch (error) {
    console.log(error)
  }
  });

