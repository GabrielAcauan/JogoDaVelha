let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('.buttonsContainer button');
let msg = document.querySelector('#msg');
let msgTxt = document.querySelector('#msg p');
let secondPlayer;


//contador de jogadas 
let player1 = 0;
let player2 = 0;

function addcionaXeO(){
    //adicionando evento de click aos boxes
    for(let i = 0; i < boxes.length; i++){
        
        
        //quando alguem clica na caixa
        boxes[i].addEventListener('click', function() {
            
            let el = checkEl(player1, player2);
            
    
            // verifica se já tem x ou o
            if(this.childNodes.length == 0){
            
                let cloneEl = el.cloneNode(true);
    
                this.appendChild(cloneEl);
    
                //computar jogada
                if(player1 == player2){
                    player1++;
    
                    if(secondPlayer == 'aiPlayer'){
    
                        // funcao executa a jogada
                        computerPlay();
                        player2++;
    
                    }
    
                } else {
                    player2++;
                }
    
                //checa quem venceu
                checkWin();
            }
        });

    }
}

addcionaXeO();

// evento para saber se é 2 players ou IA

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        secondPlayer = this.getAttribute('class');
        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }
        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove('hide');
        })
    });
}

// verifica quem vai joga 
function checkEl(player1, player2){

        if(player1 == player2){
            // x
            el = x;
        }else {
            // o
            el = o;
        }

        return el;
}


// ve quem ganhou 

function checkWin() {
    let b1 = document.querySelector('#block1');
    let b2 = document.querySelector('#block2');
    let b3 = document.querySelector('#block3');
    let b4 = document.querySelector('#block4');
    let b5 = document.querySelector('#block5');
    let b6 = document.querySelector('#block6');
    let b7 = document.querySelector('#block7');
    let b8 = document.querySelector('#block8');
    let b9 = document.querySelector('#block9');

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            // x
            declareWinner('x');
           
            
        }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            // O
            declareWinner('o');
           

        } 
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            // x
           
            declareWinner('x')
            
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            // O
           
            declareWinner('o');

        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            // x
           
            declareWinner('x');
            
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            // O
           
            declareWinner('o');

        }
    }

    // vertical 

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            // x
           
            declareWinner('x');
            
        }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            // O
           
            declareWinner('o');

        }
    }
    
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            // x
           
           declareWinner('x');
            
        }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            // O
           
            declareWinner('o');

        } else if (winnerTrue = true);
    }
    
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            // x
           
            declareWinner('x');
            
        }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            // O
           
            declareWinner('o');

        }
    }

    // Diagonais

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            // x
           
           declareWinner('x');
            
        }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            // O
           
            declareWinner('o');
            
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            // x
           
           declareWinner('x');
            
        }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            // O
           
            declareWinner('o');

        }
    }

    //deu velha

    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner('msg');
    } 
}

// limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner){
    
    let scoreBoardX = document.querySelector('.scoreboard-1');
    let scoreBoardO = document.querySelector('.scoreboard-2');
    let message = '';

    if(winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        message = 'O jogador 1 Venceu!';
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        message = 'O jogador 2 Venceu!';
    } else {
        message = 'Deu velha!';
    }


    // exibe msg
    msgTxt.innerHTML = message;
    msg.classList.remove("hide");

    // esconde msg 

    setTimeout(function() {
        msg.classList.add("hide");
        
        // zera as jogadas
    
        player1 = 0;
        player2 = 0;
        
        //remove X e O
        let boxesToRemove = document.querySelectorAll('.box div');

        for(let i = 0; i < boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }, 3000);
    
}

// executa a lógica da jogada do cpu
function computerPlay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    // só preenche se estiver vazio o filho
    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
                //checagem de quantas estão preenchidas
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}

