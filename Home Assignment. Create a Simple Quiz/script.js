const quizForm = document.forms.quiz;
const inputQ1 = document.getElementById('q1-answers');
const idQ2 = document.getElementById('q2-answers');
const idq3 = document.getElementById('q3-answers');
const submit = document.getElementById('submit');
const reset = document.getElementById('resetForm');

const results = (field, type, answer, chosenAnswer) => {

    const inputElement = document.getElementById(field + '-answers');
    const resultElement = document.getElementById('result-' + field);
    const questionNo = field.charAt(field.length - 1);
    const arrAnswer = document.querySelectorAll(`input[type=${type}][name="${field}"]:checked`);
    const wrongColor = 'red';
    const correctColor = 'green';

    if (!inputElement.type) {
        if (arrAnswer.length > 0) {
            let arrAnswers = []
            for (const val of arrAnswer.values()) {
                arrAnswers.push(val.value);
            }
            switch(type) {
                case 'radio':  {
                    if (Number(arrAnswers[0]) === Number(answer)) {
                        resultElement.style.color = correctColor;
                        resultElement.innerText = `Question ${questionNo} answer is correct.`;
                        break;
                    } else {
                        resultElement.style.color = wrongColor;
                        resultElement.innerText = `Question ${questionNo} answer is wrong.`;
                        break;
                    }
                    
                }
                case 'checkbox': {
                    let numCorrect = 0;
                    
                    arrAnswers.forEach(val => {
                        if (answer.includes(val)) {
                            numCorrect++
                        }
                    });

                    if (numCorrect === answer.length ) {
                        resultElement.style.color = correctColor;
                        resultElement.innerText = `Question ${questionNo} answer is correct.`;
                        break;
                    } else {
                        resultElement.style.color = wrongColor;
                        resultElement.innerText = `Question ${questionNo} answer is wrong.`;
                        break;
                    }

                }
            }
        } else {
            resultElement.style.color = wrongColor;
            resultElement.innerText = `You must enter an Answer.`;
        }
    } else {
        if (!chosenAnswer) {
            resultElement.style.color = wrongColor;
            resultElement.innerText = `You must enter an Answer.`;
        } else {
            if (chosenAnswer === answer) {
                inputElement.style.borderColor = correctColor;
                resultElement.style.color = correctColor;
                resultElement.innerText = `Question ${questionNo} answer is correct.`;
            } else {
                inputElement.style.borderColor = wrongColor;
                resultElement.style.color = wrongColor;
                resultElement.innerText = `Question ${questionNo} answer is wrong.`;
            }
        }

    }
}

const arrQ2 = [
    { label: 'x = 25', value: 25 },
    { label: 'x = 13', value: 13 },
    { label: 'x = 18', value: 18 },
]

let inputQ2 = '';

arrQ2.forEach((value) => {
    inputQ2 += `<label><input type="radio" name="q2" id="q2" value="${value.value}">${value.label}</label>`
});

idQ2.insertAdjacentHTML('beforeend', inputQ2)


const arrQ3 = [
    'Parrot', 'Eagle', 'Penguin', 'Crow'
];

let inputQ3 = '';

arrQ3.forEach((value) => {
    inputQ3 += `<label><input type="checkbox" name="q3" id="${value}" value="${value}">${value}</label>`
});

idq3.insertAdjacentHTML('beforeend', inputQ3);

submit.addEventListener('click', function (event) {
    event.preventDefault();
    results('q1', 'textbox', 'manila', inputQ1.value.toLowerCase());
    results('q2', 'radio', 13, null);
    results('q3', 'checkbox', ['Parrot', 'Eagle', 'Crow'], null);
});

reset.addEventListener('click', function (event) {
    event.preventDefault();
    inputQ1.style.borderColor = 'black';
    document.getElementById('result-q1').innerText = '';
    document.getElementById('result-q2').innerText = '';
    document.getElementById('result-q3').innerText = '';
    quizForm.reset();
});