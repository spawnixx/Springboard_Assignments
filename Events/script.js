document.addEventListener('DOMContentLoaded',function(){
    let boxContainer = document.getElementById('box-container');
    let button = document.getElementById('new-box-button');
    let form = document.getElementById('color-form');
    let colorInput = document.getElementById('color-input');
    let newColor;
    let counter = 0;

    form.addEventListener('submit',function(e){
        e.preventDefault();
            if(colorInput.value !== ''){
                newColor = colorInput.value;
            }

            Array.from(document.getElementsByClassName('box')).forEach(box => {
                box.style.backgroundColor = `${newColor}`;        
            });
    });


    const boxMaker = function(){
        const newBox =document.createElement('div');
        newBox.textContent = `box-${counter}`;
        newBox.style.backgroundColor = newColor;
        newBox.className = 'box';
        newBox.id = counter;
        counter++;

        boxContainer.appendChild(newBox);
    }

    button.addEventListener('click',boxMaker);

    document.addEventListener('dblclick',function(e){
        if(e.target.classList.contains('box')){
            e.target.remove();
        }
    })

    document.addEventListener('mouseover',function(e){
        if(e.target.classList.contains('box')){
            e.target.textContent =`X: ${e.pageX} Y: ${e.pageY}`;
        }
    })

    document.addEventListener('mouseout',function(e){
        if(e.target.classList.contains('box')){
            e.target.textContent =`box-${e.target.id}`;
        }
    })

    document.addEventListener('keydown',function(e){
        if(e.target.id === 'color-input'){
            return;
        }
        if(e.key.toLowerCase() === 'n'){
            boxMaker();
        }
    })



})

