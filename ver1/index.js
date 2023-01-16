const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit',(event)=>{
    event.preventDefault(); //form이 제출될때마다 새로고침 방지

    //input에 입력을 하고 버튼을 눌러야 추가
    if(input.value!==''){
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
    
        input.value=''; //등록 버튼 누르고 나서 input박스 내용 초기화
    
    }
    
    
});