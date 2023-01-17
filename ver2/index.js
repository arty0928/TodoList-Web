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

    // //delete ver1
    // localStorage.removeItem(target.id);
    // target.remove();
    // save();

    //delete ver2
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
        
        span.innerText= todo.text;
        deleteBtn.innerText = '삭제';
        deleteBtn.addEventListener('click',delItem);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        li.id = todo.id;
    }

}

const handler = (event) => {
    event.preventDefault(); //새로고침 방지

        const todo = {
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

init();
form.addEventListener('submit',handler);

