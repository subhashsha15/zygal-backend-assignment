function submitData() {
    const data = document.getElementById('dataInput').value;
    const existingData = getCookie('userData') || ''; // Get existing data or initialize as an empty string
    setCookie('userData', existingData + data);
  }
  
  function searchData() {
    const searchString = document.getElementById('searchInput').value;
    const storedData = getCookie('userData');
  
    if (storedData && storedData.includes(searchString)) {
      alert(`Found matching data: ${storedData}`);
    } else {
      alert('No matching data found.');
    }
  }
  
  function clearCookies() {
    document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  
  function logout() {
    clearCookies();
    window.location.href = 'index.html'; // Redirect to login page -1
  }
  
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
  