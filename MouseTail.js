class MouseTail
{
  createSpan(e) {
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '.';
    let spanId = 'span'+e.clientX+e.clientY;
    newSpan.setAttribute('id', spanId);
    document.body.appendChild(newSpan);
    document.getElementById(spanId).style.position = 'absolute';
    document.getElementById(spanId).style.top = e.clientY+'px';
    document.getElementById(spanId).style.left = e.clientX+'px';
    window.setTimeout(() => {
      newSpan.remove();
    }, 200)
  }
  
  start() {
    window.addEventListener("mousemove", () => this.createSpan(event))
  }
}

let me = new MouseTail();
me.start();
