const newFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('.firstName').value.trim();
    if (firstName) {
      const response = await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify({firstName}),
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
  
 
  