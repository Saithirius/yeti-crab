export const api = {
  saveRequest(request) {
    try {
      localStorage.setItem(request.number.toString(), JSON.stringify(request));
      localStorage.setItem('lastRequestNumber', (parseInt(localStorage.getItem('lastRequestNumber')) + 1).toString());
    } catch (e) {
      alert('Ошибка' + e);
    }
  },
  delRequest(key) {
    localStorage.removeItem(key);
  }
}