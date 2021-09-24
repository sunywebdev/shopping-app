const LocalStroage = (key) => {
    let previousProducts = getItem()
    localStorage.setItem('cart', JSON.stringify(previousProducts))

};
const getItem = () =>  localStorage.getItem('cart')
  



export default LocalStroage;