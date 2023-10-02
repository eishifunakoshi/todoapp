const tasks = [];
// タスクを保存するための配列

function addTask(){
    const taskName = document.getElementById('taskName');
    const taskValue = taskName.value;
    // inputタグに入れた文字列を変数taskValueに格納

    if(taskValue === '') {
        alert("タスクを入力してください");
        return;
    }
    // inputの中身がからの場合アラートを表示

    tasks.push(taskValue);
    taskName.value = '';
    displayTask();
}
    // .pushでタスク保存用配列の最後にinputタグの中身を格納

function displayTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    // タスクを表示する関数
    // .innerHTMLでHTML要素の中身を変更
  
    for(let i = 0; i<tasks.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = tasks[i];
        // .textContentで新しいテキストを書き込む
        // .createElementで新たなHTML要素を追加

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.addEventListener('click',function(){
            removeTask(i);
        });
        // .addEventListenerでイベント処理の実行
        // 対象要素.addEventListener( 種類, 関数, false )で使用


        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        // .appendChild(?)で?を親要素の末尾に追加
    }
}

function removeTask(number){
    tasks.splice(number, 1);
    displayTask();
}
        // .spliceで配列内の位置を指定して追加・削除を行う
        // .splice(追加・削除する位置,削除する要素の数,追加する要素...)

