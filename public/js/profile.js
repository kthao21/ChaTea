const newFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.user-name').value.trim();
    if (user.name) {
      const response = await fetch(`/api/user`, {
        method: 'POST',
        body: JSON.stringify({username}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Could not find user');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Remove User');
      }
    }
  };
  
  document
    .querySelector('.user-list')
    .addEventListener('search', newFormHandler);
  
 
  