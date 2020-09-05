export const api = {
  init() {
    try {
      !localStorage.getItem('lastRequestNumber') && localStorage.setItem('lastRequestNumber', '0');
    } catch (e) {
      alert('Ошибка' + e);
    }
  },
  getRequests(){
    let requests = []
    for (let i = 0; i < localStorage.length; i++){
      if (localStorage.key(i) === 'lastRequestNumber') continue
      const request = JSON.parse(localStorage.getItem(localStorage.key(i)))
      requests.push(request)
    }
    return requests
  },
  getRequest(number){
    return localStorage.getItem(number.toString())
  },
  getLastNumber(){
    return localStorage.getItem('lastRequestNumber')
  },
  saveRequest(request) {
    try {
      localStorage.setItem(request.number.toString(), JSON.stringify(request));
      localStorage.setItem('lastRequestNumber', request.number.toString());
    } catch (e) {
      alert('Ошибка' + e);
    }
  },
  delRequest(key) {
    localStorage.removeItem(key);
  }
}