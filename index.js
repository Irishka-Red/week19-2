const postList = document.getElementById('postList');
function createPostMarkup(post) {
    return `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
  }
  function addPostMarkup(marking) {
    postList.innerHTML += marking;
  }
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(messages => {
    messages.forEach(post => {
      const marking = createPostMarkup(post);
      addPostMarkup (marking);
    });
  });

  