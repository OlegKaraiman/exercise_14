let myArr = [1, 2, [1.1, 1.2, 3.1], 3, 4, 5, 'q', [1, 2], 1];
function creatList(arr) {
    let myArray = arr;
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let i = 0; i < myArray.length; ++i) {
        if (!Array.isArray(myArray[i])) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML += myArray[i];
        } else {
            let myArray2 = myArray[i];
            let li1 = document.createElement('li');
            ul.appendChild(li1);
            let ul1 = document.createElement('ul');
            li1.appendChild(ul1);
            for (let j = 0; j < myArray2.length; j++) {
                let li2 = document.createElement('li');
                li2.innerHTML += myArray2[j];
                ul1.append(li2);
            }
        }
    }
}
