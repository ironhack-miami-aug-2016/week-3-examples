// app.js

var dymitri = {
  name: "Dymitri",
  noise: "Huff...",
  makeNoise: function () {
      //             @name                  @noise
    console.log( this.name + " says: " + this.noise );
  },
  shout: function () {
      //             @noise
    console.log( this.noise.toUpperCase() );
  }
};

dymitri.makeNoise();
dymitri.shout();



var chewie = {
  name: "Chewie",
  noise: "Woof",
  makeNoise: function () {
      //             @name                  @noise
    console.log( this.name + " says: " + this.noise );
  },
  shout: function () {
      //             @noise
    console.log( this.noise.toUpperCase() );
  }
};

chewie.makeNoise();
chewie.shout();
