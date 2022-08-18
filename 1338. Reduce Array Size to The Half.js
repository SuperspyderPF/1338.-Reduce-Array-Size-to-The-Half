var minSetSize = function(arr) {
    let ourMap = {}
    for(let func=0; func < arr.length; func++)
    if(ourMap[arr[func]]){
        ourMap[arr[func]] = ourMap[arr[func]] + 1
    }else{
        ourMap[arr[func]] = 1
    }
    let func2 = Object.values(ourMap).sort((a, b) => b - a)
    let func = 1, counter = func2[0]

    while(counter < arr.length / 2){
        counter += func2[func]
        func++
    }
    return func;
};