let numberRandom = [];

function Rnd(min,max,length)
{
    let arr = [];
    let num = '';
    for (var i = 0; arr.length !== length; i++ ) {
         let temp = Math.floor(Math.random() * (max-min+1) + min);
         if (arr.length == 0) {
            arr.push(temp);
        }  
          else if (arr.indexOf(temp) == -1) {       
            arr.push(temp);
         }
    }
  
    return arr;

}

function isEmpty(str) {
    if (str.trim() == '') 
      return true;
      
    return false;
}

function Make() {

    if (isEmpty(document.getElementById('inp_2').value))
        alert('Введите свое число!'); 
    let numberUser = (String(document.getElementById('inp_2').value)).split('');
    let length = Number(document.getElementById('inp_1').value);
    if (numberUser.length !== length)
        alert('Неверная длина введенного числа'); 
    if (numberRandom.length == 0)  {
        numberRandom = Rnd(0,9,length);
    }
    console.log(numberRandom);
    let countBulls = 0; 
    let countCows = 0;
    let arrBulls = [];
    let arrCows = [];
      
             
    for (var i = 0; i < numberRandom.length; i++) {
        if (numberRandom.indexOf(Number(numberUser[i])) != -1){
            ++countCows;
            if (Number(numberUser[i]) == Number(numberRandom[i])) {
                ++countBulls;
                arrBulls.push(i+1);
            }
            else 
            arrCows.push(numberUser[i]);
        }
    }
    
    if (countBulls == numberRandom.length) 
        document.getElementById("number").innerHTML = 'Вы выиграли! Загаданное компьютером число равно ' + document.getElementById('inp_2').value;        
    else
        document.getElementById("number").innerHTML = 'Ответ: совпадение цифр не на своих местах - ' + countCows + ' (' + arrCows + '), ' + 'цифр на своих местах - ' + countBulls + ' (' + arrBulls + ').';
}

function NewGame() {
    numberRandom.length = 0;
    alert('Все готово к новой игре!');
} 