const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
1. 삭제버튼 추가
2. 새로고침해도 내용이 저장되게끔
3. 삭제버튼 -> 저장된 데이터 자체에서 해당 내용 지우기
*/

let todos = [];

const save = () => {
    //JSON.stringify : 객체를 String으로 변환
    localStorage.setItem('todos',JSON.stringify(todos));
}

const delItem = (event) => {
    const target = event.target.parentElement;

    //delete ver2
    //target.id와 같은 애는 제외하고, 다른애들만 필터링해서 다시 todos에 넣고, save()
    todos = todos.filter((todo) =>
        todo.id !== parseInt(target.id)
    );
    save();
    target.remove();

}

const addItem=(todo)=>{
    if(todo.text!==''){
        
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const span = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.id = 'checkbox';
        checkbox.addEventListener('click',check);
        
        span.innerText= todo.text;
        deleteBtn.innerText = '삭제';
        deleteBtn.addEventListener('click',delItem);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        ul.appendChild(li);
        li.id = todo.id;
    }

}

const handler = (event) => {
    event.preventDefault(); //새로고침 방지

        const todo = {
            check: false,
            id : Date.now(), 
            text: input.value, 
        }
    
    todos.push(todo);
    addItem(todo);
    save();
    input.value = '';       //input내용 공백으로 초기화
} 

const init = () => {
    const userTodos =  JSON.parse(localStorage.getItem('todos'));
    
    if(userTodos){
        userTodos.forEach((todo) => {
            addItem(todo);
        });
    
        todos = userTodos;
    } 

};


function check(event){

    //checkbox update된 애가 누군지 id로 식별
    const target = event.target.parentElement;
    console.log(target.id);

    const checkObject = todos.find(it => (it.id) == target.id);
    console.log(checkObject);
    
    const checkObjectCheck = checkObject.check;
    console.log(checkObjectCheck);

    const checkObjectId = checkObject.id;
    console.log(checkObjectId);

    const checkObjectText = checkObject.text;
    console.log(checkObject.text);


    if(event.target.checked == true){ //check할때  
        console.log('check');
        checkObject.check = true;
    }
    else{
        checkObject.check = false;
        console.log('unchecked');
    }
    

    todos = todos.filter((todo) =>
        todo.id !== parseInt(target.id)
    );
    save();
    target.remove();

    //다시 깔기

    
    
}

init();
form.addEventListener('submit',handler);
