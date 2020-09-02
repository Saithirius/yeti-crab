export const validateNewRequest = (company, ati, fullName, tel) => {
  if (!company || !ati || !fullName || !tel){
    alert('Не все поля заполнены')
    return false
  } else if (ati.length !== 5){
    alert('Неверный ATI код')
    return false
  }else {
    return true
  }
}
