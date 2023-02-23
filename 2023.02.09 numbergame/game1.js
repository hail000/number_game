let NullNum = 0 ;
let User_play = document.getElementById("User_play");
let User_Num = document.getElementById("User_Num");
let result_play = document.getElementById("result_play");
let Num_count = document.getElementById("Num_count");
let count = 5;
let game_over =false;
let game_reset = document.getElementById("game_reset");
let User_num_list=[];

User_play.addEventListener("click",play);
game_reset.addEventListener("click",reset);

function RandomNum(){
    NullNum= Math.floor(Math.random() * 100);
    if(NullNum == 0){
        NullNum= Math.floor(Math.random() * 100);
        return;
    }
    console.log("정답",NullNum,);

}

function play(){
    console.log("게임시작");

    let User_Num1 = User_Num.value;
    if(User_Num1 < 1 || User_Num1 > 100){
        result_play.textContent = "1과 100사이를 입력해주세요";
        return;
    }

    if(User_num_list.includes(User_Num1)){
        result_play.textContent = "이미 입력한 숫자입니다.";
        return;
    }

    count--;

    Num_count.textContent=`남은 기회 :${count}번`;
    console.log(User_Num1);

    if (User_Num1 < NullNum) {
        console.log("큽니다.");
        result_play.textContent = "큽니다.";
    } else if (User_Num1 > NullNum) {
        console.log("작습니다.");
        result_play.textContent = "작습니다.";
    } else {
        console.log("정답");
        result_play.textContent = "정답";
    }

    User_num_list.push(User_Num1);
    console.log(User_num_list);
    if (count<1){
        game_over = true;
    }

    if (game_over == true){
        User_play.disabled = true;
        result_play.textContent = "게임오버";
    }
}

function reset(){
    User_Num.value = "";
    RandomNum();
    count = 5 ;
    User_play.disabled = false;
    User_num_list = [];
    game_over = false;
    Num_count.textContent = "게임시작";
    result_play.textContent = "초기화 완료";
    
}

RandomNum();
