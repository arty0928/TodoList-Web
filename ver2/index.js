const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
1. 삭제버튼 추가
2. 새로고침해도 내용이 저장되게끔
3. 삭제버튼 -> 저장된 데이터 자체에서 해당 내용 지우기
*/

const data = {


}

const dataJSON = JSON.stringify(data);
console.log(dataJSON);

function delItem(){
    console.log('det');
}


const addItem=(text)=>{
    if(text!==''){
        const li = document.createElement('li');
        data.text = text;
        console.log(data.text);
        console.log(data);

        const deleteBtn = document.createElement('button');
        const span = document.createElement('span');
        
        span.innerText=text;
        deleteBtn.innerText = '삭제';
        deleteBtn.addEventListener('click',delItem);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }

}

const handler = (event) => {
    event.preventDefault(); //새로고침 방지
    addItem(input.value);
    input.value = '';       //input내용 공백으로 초기화
} 

form.addEventListener('submit',handler);

