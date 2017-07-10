function myHigherFunction(){
    console.log('myHigherFunction')
    func();
}
function outsideFunction(){
    console.log('outsideFunction');
}
myHigherFunction(outsideFunction)