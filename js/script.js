document.addEventListener('DOMContentLoaded', () => {
  const headerList = document.querySelector('header ul');
  const mainMenu = document.createElement('li');
  mainMenu.innerHTML = `<a href="#">⋮</a>`;
  mainMenu.style.position = 'relative';

  const dropdown = document.createElement('ul');
  dropdown.style.display = 'none';
  dropdown.style.position = 'absolute';
  dropdown.style.top = '25px';
  dropdown.style.right = '0';
  dropdown.style.backgroundColor = '#202020';
  dropdown.style.listStyle = 'none';
  dropdown.style.padding = '10px';
  dropdown.style.borderRadius = '6px';
  dropdown.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';

  const items = [
    "Your data in YouTube",
    "Appearance",
    "Language",
    "Setting"
  ];

  items.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" style="color:white; text-decoration:none; font-size:14px; display:block; padding:6px 10px;">${text}</a>`;
    dropdown.appendChild(li);
  });

  mainMenu.appendChild(dropdown);
  headerList.appendChild(mainMenu);

  mainMenu.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', e => {
    if (!mainMenu.contains(e.target)) dropdown.style.display = 'none';
  });
});
