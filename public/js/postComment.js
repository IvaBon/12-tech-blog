const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const content = document.querySelector('#content').value.trim();
  
    if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({content}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
        
      } else{
        
        alert('failed to post')
      }
    }
};

document
    .querySelector(".post-form")
    .addEventListener('submit', postFormHandler)
    