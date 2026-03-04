// Each exercise has it's own function
// I made it so user can type inside each form,
// and then press the button to see the results.
// Each exercise may be changed in the way to log the result in console,
// but i thought, this way it's gonna be better.
document.addEventListener("DOMContentLoaded", function() {
    initPalindrom(); // 6.6.1
    arrayToSet(); // 6.6.2
    countTo(); // 6.6.3
    chessboard(); // 6.6.4
    objToArr(); // 6.6.5
});

function initPalindrom() {
    const palindromForm = document.getElementById('palindromForm');

    if (palindromForm) {
        palindromForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get Form Data
            const palindromInput = document.getElementById('palindromInput').value;
            const result = document.getElementById('resultPalindrom');

            // Validation
            if (!palindromInput) {
                result.textContent = 'Пожалуйста, заполните поле';
                result.style.color = 'red';
            }
            if (palindromInput === null) {
                result.textContent = 'Пожалуйста, заполните поле';
                result.style.color = 'red';
            }
// ========= Validation for type (word or number) incomplete ========

            // Function Execution
            let palindrom = String(palindromInput);
            let letters = new Map();
            let backwards = new Map();
            let counter = 0;
            let l = palindrom.length;
            /*
            console.log(palindromInput);
            console.log(palindrom);
            */

            if (!palindrom || palindrom.trim() === '') {
                result.textContent = 'Пожалуйста, заполните поле';
                result.style.color = 'red';
                return;
            }
            
            if (palindrom === null) {
                result.textContent = 'Пожалуйста, заполните поле';
                result.style.color = 'red';
                return;
            }
            
            if (palindrom) {
                for (let i = 1; i <= palindrom.length; i++) {
                    if (counter <= palindrom.length) {
                        let letter = palindrom.substring(counter, i);
                        letters.set (counter, letter);
                        let back = palindrom.substring(l - 1, l);
                        backwards.set (counter, back);
                        l --;
                        counter ++;
                    }
                }
                let validPal = 0;
                for (let i = 1; i <= palindrom.length; i++) {
                    if (letters.get(i-1) == backwards.get(i-1)) {
                        counter ++;
                        // console.log(letters.get(i-1), backwards.get(i - 1));
                    } else {
                        validPal ++;
                        counter ++;
                    }
                }
                if (validPal === 0) {
                    result.textContent = `«Слово <${palindrom}> является палиндромом»`;
                    result.style.color = 'green';
                    return
                } else {
                    result.textContent = `«Слово <${palindrom}> не является палиндромом»`;
                    result.style.color = 'red';
                }
                palindromForm.reset();
            }
        });
    }
};

function arrayToSet() {
    console.log(" ");
    console.log("Задание - 6.6.2");
    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
    const set = new Set(arr);
    const uniqueArr = Array.from(set);
    console.log(uniqueArr);
}


// Validation for Numbers
function validateInput(value) {
    if (!value || value.trim() === '') {
        return {isValid: false, message: "Пожалуйста, заполните поле"};
    }

    const num = Number(value);

    if (isNaN(num)) {
        return {isValid: false, message: "Пожалуйста, введите число"};
    }

    return {isValid: true, value: num};
}

function countTo() {
    const countForm = document.getElementById('countForm');
    const resultCount = document.getElementById('resultCount');

    if (countForm) {
        countForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get Form Data
            countInput = document.getElementById('countInput').value;

            //Validation
            const validation = validateInput(countInput);

            if (!validation.isValid) {
                resultCount.textContent = validation.message;
                resultCount.style.color = 'red';
                return;
            }

            // Function execution
            if (countInput !== null) {
                const arr = [];
                const inputNumber = Number(countInput);
                let n = '';

                for (let i = 0; i <= inputNumber; i ++) {
                    arr.push(i);

                    if (i == inputNumber) {
                        n += `${i}.`;
                    } else {
                        n += `${i}, `;
                    }
                }
                resultCount.textContent = `${n}`;
                /*
                console.log(arr);
                console.log(n);
                */
            }        
            countForm.reset();
        })
    }
}

// Chesboard
function isEven(number) {
    return number % 2 === 0;
}
function chessboard() {
    const chessboardForm = document.getElementById('chessboardForm');
    const resultChessboard = document.getElementById('resultChessboard');

    if (chessboardForm) {
        chessboardForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get Form Data
            chessboardInput = document.getElementById('chessboardInput').value;

            //Validation
            const validation = validateInput(chessboardInput);

            if (!validation.isValid) {
                resultChessboard.textContent = validation.message;
                resultChessboard.style.color = 'red';
                return;
            }

            // Function execution
            console.log(" ");
            console.log("Задание - 6.6.4");
            let white = ' o ';
            let black = ' x ';
            let size = chessboardInput;
            let rowEven = '';
            let rowOdd = '';

            for (let rowCounter = 1; rowCounter <= size; rowCounter ++) {
                if (isEven(rowCounter)) {
                    rowEven += black;
                } else {
                    rowEven += white;
                }
            }
            for (let rowCounter = 1; rowCounter <= size; rowCounter ++) {
                if (isEven(rowCounter)) {
                    rowOdd += white;
                } else {
                    rowOdd += black;
                }
            }
            let board = '';
            for (let colCounter = 1; colCounter <= size; colCounter ++) {
                if (isEven(colCounter)) {
                    console.log (rowEven);
                    board += rowEven;
                } else {
                    console.log (rowOdd);
                    board += rowOdd;
                }
            }
            resultChessboard.textContent = 'Поле выведено в консоль.';
            chessboardForm.reset();
        })
    }
}

// Object + array
function objToArr() {    
    console.log(" ");
    console.log("Задание - 6.6.5");
    
    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
    const arrValues = []; 

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            arrValues.push(...obj[key]); /* К счатью я выучил метод spread 
            в книге Eloquent JavaScript by Marjin Haverbeke, благодаря чему 
            выполнить вывод каждого значения массива стало проще.            
            */
        } else {
            arrValues.push(obj[key]);
        }
    }
    console.log(arrValues);
}