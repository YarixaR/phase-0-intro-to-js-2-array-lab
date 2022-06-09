const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
 const copyAppendCat = [...cats, name];
  return copyAppendCat;
}
function prependCat(name) {
    const copyAppendCat2 = [name, ...cats];
    return copyAppendCat2;
}
function removeLastCat() {
    const caats = cats.slice(0,cats.length-1);
    return caats;
}
function removeFirstCat() {
    const gatos = cats.slice(1);
    return gatos;
}