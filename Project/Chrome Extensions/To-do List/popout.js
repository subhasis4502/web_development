


const items = [{"items": "Record next video", "status":0},
              {"items": "Record next video", "status":1}
];


const itemsStr = JSON.stringify(items);

console.log(itemsStr);
console.log(items);

function fetchItems(){

  const itemsList = document.querySelector('ul.todo-items');
  itemsList.innerHTML = '';
  var newItemHTML = '';
  try{
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);


    for (var i = 0; i < itemsArr.length; i++) {
      var status = '';
      if(itemsArr[i].status == 1){
        status = 'class="done"';
      }
      newItemHTML += `<li data-itemindex="${i}"><span class="button">✅</span><span ${status}>${itemsArr[i].items}</span><span class="button">🗑️</span></li>`;
    }
    
    itemsList.innerHTML = newItemHTML;
  }
  catch(e){

  }
}

function saveItems(obj){

  var string = JSON.stringify(obj);

  localStorage.setItem('todo-items', string);
}

fetchItems();
