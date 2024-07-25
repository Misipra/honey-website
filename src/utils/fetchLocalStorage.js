export const fetchUser = () => {
  const userinfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")) 
  : localStorage.clear();
  
  return userinfo
}


export const fetchCart = () => {
  const cartinfo = 
  localStorage.getItem("cartItems") !== "undefined" ? 
  JSON.parse(localStorage.getItem("cartItmes")) 
  : localStorage.clear();
  
  return cartinfo ? cartinfo : []
}