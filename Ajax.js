class Ajax
{
  constructor() {
    this.requestObject = new XMLHttpRequest();
    this.method = 'GET';
    this.async = true;
    this.url = null;
  }
  
  setMethod(method) {
    this.method = method;
    return this;
  }
  
  setUrl(url) {
    this.url = url;
    return this;
  }
  
  setAsync(async) {
    this.async = async;
    return this;
  }
  
  execute() {
    this.requestObject.open(this.method, this.url, this.async);
    this.requestObject.send();
  }
}

let myajax = new Ajax();
myajax.setMethod('GET').setUrl('http://www.abc.com');
myajax.execute();

//sends a GET request to 'http://www.abc.com'
