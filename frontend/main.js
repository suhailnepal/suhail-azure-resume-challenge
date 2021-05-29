window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
//config from variables in azure service

const functionApiUrl = 'https://suhailazurefn.azurewebsites.net/api/GetResumeCounter?code=C8aGakHBp/7JUHbUvrQc1UQSwsH47vzF9tzXYTlfecOEEUNNa7y/pQ==';
//const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}