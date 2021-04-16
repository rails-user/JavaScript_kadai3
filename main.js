
//グローバル変数
let todos = [];

document.getElementById('insertBtn').onclick = function () {

	//オブジェクトの生成
	let todo = {
		//入力されたタスク
		task: `${textBox.value}`,
		//状態
		status: `作業中`
	}

	//配列todosにオブジェクトtodoを格納
	todos.push(todo);
	//タスク一覧を表示	
	displayTodos();

}

//ラジオボタン選択時のイベントリスナー
document.getElementsByName('radioBtn').forEach(
	radioBtn => radioBtn.addEventListener('change', () => {
		//タスク一覧を表示	
		displayTodos();
	})
);

//タスク一覧への出力処理
function displayTodos() {

	const table = document.getElementById("table0");
	table.innerHTML = "";
	//配列todosに格納されたオブジェクト等をDOM操作で出力する。
	for (let i = 0; i < todos.length; i++) {

		//選択したラジオボタンの「状態」と、配列の状態ステータスが一致しない場合、
		//タスク一覧への出力せずスキップする
		if ((document.getElementById('working').checked && todos[i].status === '完了') ||
			(document.getElementById('finished').checked && todos[i].status === '作業中')) {
			continue;
		}

		//tr要素の追加
		const tr = document.createElement('tr');
		tr.id = `tr${i}`;
		table.appendChild(tr);

		//IDの追加
		const td0 = document.createElement('td');
		td0.textContent = `${i}`;
		tr.appendChild(td0);

		//コメントの追加
		const td1 = document.createElement('td');
		td1.textContent = todos[i].task;
		tr.appendChild(td1);

		//状態ボタンの追加
		const td2 = document.createElement('td');
		const stateBtn = document.createElement('input');
		stateBtn.type = 'button';
		stateBtn.value = `${todos[i].status}`;
		stateBtn.addEventListener('click', () => {
			if (todos[i].status === '作業中') {
				todos[i].status = '完了';
			}
			else {
				todos[i].status = '作業中';
			}
			//タスク一覧を表示	
			displayTodos();
		});
		td2.appendChild(stateBtn);
		tr.appendChild(td2);

		//削除ボタンの追加
		const td3 = document.createElement('td');
		const deleteBtn = document.createElement('input');
		deleteBtn.type = 'button';
		deleteBtn.value = '削除';
		deleteBtn.addEventListener('click', () => {
			todos.splice(i, 1);
			//タスク一覧を表示	
			displayTodos();
		});
		td3.appendChild(deleteBtn);
		tr.appendChild(td3);
	}
}
