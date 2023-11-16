let obj: any = {
  name: "Sai Zutshi",
};

obj.printName = function () {
  console.log(this.name);
};

obj.printName();
