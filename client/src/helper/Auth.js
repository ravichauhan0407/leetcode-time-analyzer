

export const isAuthenticated = () => {
     
if(localStorage.getItem('jwt'))
{
     return true
}
return false
     
}
