const logout=async function(e){
    e.preventDefault();

    const log=await fetch('/api/users/logout',{
        method:'POST',
        headers: { 'Content-Type':'applicaton/json'},
    });

    if(log.ok){
        document.location.replace('/');
        alert('logged out')
    } else{
      alert('failed to logout')
    }
      
};

  document
    .querySelector('#logout')
    .addEventListener('click', logout)