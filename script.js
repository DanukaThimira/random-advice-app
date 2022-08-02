const id = document.getElementById('id');
const advice = document.getElementById('advice');
const btn = document.getElementById('btn');

function getAdvice() {

fetch('https://api.adviceslip.com/advice').then(
    response => {
        return response.json();
    }
).then(adviceData => {
    const adviceObj = adviceData.slip;
    id.textContent = `${adviceObj.id}`
    advice.textContent = `${adviceObj.advice}`
}).catch(error => alert(error.message))

}

getAdvice()