

  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    first() {
     
        document.getElementById("demo").innerHTML = ('You clicked the first button');
    }

    second() {
        document.getElementById("demo").innerHTML = ('You clicked the second button');
    }

    third() {
        document.getElementById("demo").innerHTML = ('You clicked the third button');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);

 
   


    