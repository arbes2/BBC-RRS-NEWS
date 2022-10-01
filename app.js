  let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
  const textarea = document.querySelector('#feed-textarea > ul');

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();
    
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          //this line creates a list element 
          let li = document.createElement('li');
          //this line add HTML content to list items
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
          //this line append HTML content to list 
          textarea.appendChild(li);
      }
    });
  
