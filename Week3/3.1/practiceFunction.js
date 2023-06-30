function nameFunction(){
    console.log("Hello my name is ZeroCool");
}

nameFunction();

myFirstFunction;
myFirstFunction();


// SCOPE //////////////////////////////////////////////////////////////////////////////
// GLOBAL
const x = 5;

function myFunction(...params) {
  // variable inside the scope of myFunction
  let scopedVariable = 10;
  if (scopedVariable) {
    // a child scope of myFunction's scope
    let childVariable = scopedVariable + 5;
  }
}