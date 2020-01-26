const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function treeStructure(item) {
  let foldersIn=`<ul>`;
  for (let key in item) {
      if (typeof item[key] === 'object' && item[key] !== null) {
        foldersIn += treeStructure(item[key]);
        foldersIn += '</ul></li>';
      } else if (item[key] === true) {
        foldersIn += `<li class='folder'><i class="material-icons close"></i>${item['title']}
        </li><li class='folderLook'>`;
      } else if (key === 'title' && item['folder'] !== true) {
        foldersIn += `<li class='file'><i class="material-icons">insert_drive_file</i>
        ${item['title']}</li>`;
      } else if (item[key] === false || item[key] === null) {
        foldersIn += `<i>Folder is empty</i>`
      }
  }
  return foldersIn;
}

function initTree() {
  rootNode.innerHTML = treeStructure(structure);
  let refuge = document.getElementsByClassName('folder');

  for (let i = 0; i < refuge.length; i++) {
    refuge[i].addEventListener('click', function() {
        this.parentElement.querySelector('.folderLook').classList.toggle('actived');
        this.parentElement.querySelector('.material-icons').classList.toggle('open');
    });
  }
}

treeStructure(structure);
initTree();



