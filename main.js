document.getElementById('insertBtn').onclick = function(){

	//取得したtable要素の子要素にtr要素を追加
	const table = document.getElementById("table0");
	const tr = document.createElement('tr');
	tr.id = `tr${table.rows.length-1}`;
	table.appendChild(tr);

	//IDの追加
	const td0 = document.createElement('td');
	td0.id = 'td0'
	td0.textContent = `${table.rows.length - 2}`;
	tr.appendChild(td0);

	//コメントの追加
	const td1 = document.createElement('td');
	td1.id = 'td1'
	td1.textContent = textBox.value;
	tr.appendChild(td1);

	//状態の追加
	const td2 = document.createElement('td');
	td2.id = 'td2'
	const stateBtn = document.createElement('input');
	stateBtn.id = 'stateBtn';
	stateBtn.type = 'button';
	stateBtn.value = '作業中';
	td2.appendChild(stateBtn);
	tr.appendChild(td2);

	//削除の追加
	const td3 = document.createElement('td');
	td3.id = 'td3'
	const deleteBtn = document.createElement('input');
	deleteBtn.id = 'deleteBtn'
	deleteBtn.type = 'button';
	deleteBtn.value = '削除';
	td3.appendChild(deleteBtn);
	tr.appendChild(td3);

}