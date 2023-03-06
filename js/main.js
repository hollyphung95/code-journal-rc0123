var $entryForm = document.querySelector('#entry-form');
var $entryImg = $entryForm.querySelector('img');

var $photoUrl = document.querySelector('#photoUrl');
$photoUrl.addEventListener('input', function (event) {
  $entryImg.setAttribute('src', event.target.value);
});

var $saveEntry = document.querySelector('#save-entry');
$saveEntry.addEventListener('submit', saveBtnClick);

function saveBtnClick(event) {
  event.preventDefault();
  var entry = {
    title: $entryForm.elements.title.value,
    photoUrl: $entryForm.elements.photoUrl.value,
    notes: $entryForm.elements.notes.value
  };
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $entryImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}
toggleNoEntries();
/* This function toggles the no entries text to show or hide,
when this function is called. */
function toggleNoEntries() {
  this.classList.toggle('displayEmpty');
}

function renderEntry(entry) {
  var li = document.createElement('li');
  var container = document.createElement('div');
  container.classList.add('container');

  var row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  var column = document.createElement('div');
  column.classList.add('column-half');
  row.appendChild(column);

  var $img = document.createElement('img');
  $img.setAttribute('src', entry.getAttribute('photoUrl'));
  column.appendChild($img);

  column = document.createElement('div');
  column.classList.add('column-half');
  row.appendChild(column);

  var $title = document.createElement('h3');
  $title.setAttribute('class', entry.getAttribute('title'));
  column.appendChild($title);

  var $notes = document.createElement('p');
  $notes.setAttribute('class', entry.getAttribute('note'));
  column.appendChild($notes);

  li.appendChild(column);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  // now we want to grab the unordered list of the document
  // now we have to loop through the data.entries array and generate a dom tree for each entry in the array
  // and append that dom tree to the unordered list.

  const myList = [];
  for (var i = 0; i < data.length; i++) {
    var entry = renderEntry(data.entries[i]);

    if (entry) {
      myList.push(entry);
    } else {
      entry = null;
    }

    if (!data) {
      data.dataset.view = data;
      event.target.parentNode.toggleNoEntries();
    }
    document.body.appendChild(data);
  }
});
