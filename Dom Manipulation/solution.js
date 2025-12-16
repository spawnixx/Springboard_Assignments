//1
document.getElementById('task1').innerText = 'This content has been changed.';
//2
document.getElementById('task2').innerHTML = '<button>Submit</button>';
//3
document.body.style.backgroundColor = '#232323';
//4
document.querySelectorAll('.item').forEach(item => {
    item.style.border ='thin solid white';
});
//5
document.getElementById('task5').href= "https://www.springboard.com/";
//6
document.getElementById('task6').value = 'DOM MASTER';
//7
document.getElementById('task7').classList.add('new-class');
//8
const newButton = document.createElement('button');
    newButton.innerText = "New Button";
    document.getElementById('task8').appendChild(newButton);
//9
const element9 = document.getElementById('task9');
element9.parentNode.removeChild(element9);
