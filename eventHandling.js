//wrap addEventListener functionality, separate event attaching and functionality

class MyEvents
{
  scroll() {
    console.log('window is scrolled from myevents');
  }
}

class YourEvents
{
  scroll() {
    console.log('window is scrolled from yourevents');
  }
}

class ListenerManager
{
  attachEvent(event, action) {
    window.addEventListener(event, () => action());
  }
}

let me = new MyEvents();
let ye = new YourEvents();

let lm = new ListenerManager();
lm.attachEvent('scroll', me.scroll);
lm.attachEvent('scroll', ye.scroll);
