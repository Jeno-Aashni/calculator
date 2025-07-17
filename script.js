


    const canvas = document.getElementById('canvas');
    const operator = ['+', '-', '*', '/', '%'];

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('readonly', true); 
    canvas.appendChild(input);


    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        button.addEventListener('click', () => {
            input.value += i;
        });
        canvas.appendChild(button);
    }

    operator.forEach(op => {
        const button = document.createElement('button');
        button.innerHTML = op;
        button.addEventListener('click', () => {
            input.value += op;
        });
        canvas.appendChild(button);
    });

    const result = document.createElement('button');
    result.innerHTML = 'Result';
    result.addEventListener('click', () => {

            input.value = eval(input.value);

    });
    canvas.appendChild(result);

    const clear = document.createElement('button');
    clear.innerHTML = 'Clear';
    clear.addEventListener('click', () => {
        input.value = '';
    });
    canvas.appendChild(clear);
