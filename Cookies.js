class Cookies
{
  addCookies(cookieName, cookieValue, cookieExpiryDays) {
    let d = new Date();
    d.setTime(d.getTime() + (cookieExpiryDays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;    
  }
  
  getCookies(cookieName = null) {
    let allCookies = document.cookie.split(';');
    if (null == cookieName) {
      return allCookies;
    } 
    let name = cookieName + "=";
    for(let i = 0; i < allCookies.length; i++) {
      let c = allCookies[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length,c.length);
      }
    }
  }
  
  deleteCookies(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

let cookies = new Cookies();
cookies.addCookies("name", "ajinder", 10); //adds a new cookie
cookies.addCookies("age", "39", 10); // adds another cookie
console.log(cookies.getCookies()); //shows all cookies
cookies.deleteCookies("age"); //deletes cookie
console.log(cookies.getCookies()); //show all cookies