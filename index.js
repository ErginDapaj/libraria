fetch('./librat.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.librat.length)
        for (let i = 0; i < data.librat.length; i++) {
            console.log(data.librat[i].emri);
            console.log(i)
            let div1 = document.createElement('div');
            div1.id = [i];
            div1.className = 'bookContainer'

            let div2 = document.createElement('div');
            div2.id = [i];
            div2.className = 'bookImage'
            div2.innerHTML = '&nbsp;'

            let p = document.createElement('p');
            p.id = [i]
            p.className = 'bookTitle'
            p.innerText = '"' +data.librat[i].emri + '"'

            let p1 = document.createElement('p');
            p1.innerText = (data.librat[i].autori)

            let a = document.createElement('a');
            a.innerText = ('PC: ' + data.librat[i].gjendja)

            document.getElementById('main').appendChild(div1);

            document.getElementById([i]).appendChild(div2);

            document.getElementById([i]).appendChild(p);

            document.getElementById([i]).appendChild(p1);

            document.getElementById([i]).appendChild(a);

            let bruh = document.getElementsByClassName('bookContainer')
            const testElement = document.querySelector('div');
            const lineBreak = document.createElement('br');
            testElement.appendChild(lineBreak);
            console.log(bruh)
        }

        const searchInput = document.querySelector('#search');
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const bookContainers = document.querySelectorAll('.bookContainer');
            bookContainers.forEach(bookContainer => {
                const bookTitle = bookContainer.querySelector('.bookTitle').innerText;
                if (bookTitle.toLowerCase().includes(searchTerm)) {
                    bookContainer.style.display = 'block';
                } else {
                    bookContainer.style.display = 'none';
                }
            });
        });
    })
    .catch(error => console.log(error));
