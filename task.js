document.querySelector("#grandParent").addEventListener(
    "click",
    (e) => {
      console.log("grand");
      // e.stopPropagation();  //its stope tigiring only pass value not go another value
    },
    true
  // false
  );
  document.querySelector("#parent").addEventListener(
    "click",
    () => {
      console.log("parent");
      e.stopPropagation();
    },
  //   false
   true
  );
  document.querySelector("#child").addEventListener(
    "click",
    (e) => {
      console.log("child");
    },
  //   true
  false
  
  );
  