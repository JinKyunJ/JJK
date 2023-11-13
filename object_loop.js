var memberArray = ['egoing', 'graphittie', 'leezche'];
var i = 0;
while(i < memberArray.length){
    console.group('array loop');
    i = i +1;
}
console.groupEnd('array loop');
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name);
}
console.groupEnd('object loop');