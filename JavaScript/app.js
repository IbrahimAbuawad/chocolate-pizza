let egg = document.getElementById('egg');
let eggLabel = document.getElementById('eggLabel');
let granSugar = document.getElementById('granSugar');
let granLabel = document.getElementById('granLabel');
console.log(egg.checked);
if(egg.checked){
eggLabel.style.textDecoration='line-through';
}

if(granSugar.checked){
    granLabel.style.textDecoration='line-through';
    }