  
        const taskInput = document.getElementById('taskInput');
        const butttone = document.getElementById('bottone');
        const lista = document.getElementById('lista');

       
        butttone.addEventListener('click', (e) => {
                e.defaultPrevented()
            const taskInput = document.getElementById('taskInput');
            const lista = document.getElementById('lista');
            const taskText = taskInput.value;
            
            if (!taskText) { 
                alert ('Inserisci il testo')
            } else{
                const liTask = document.createElement('li');
                liTask.textContent = taskText;
                lista.appendChild(liTask);
                liTask.classList.add ('clickMouse')
                

                const buttonTask = document.createElement ("button")
                buttonTask.textContent = 'Elimina Task'
                buttonTask.classList.add ('buttonTask')
                buttonTask.addEventListener ('click', () => {
                liTask.remove()
                })
                liTask.appendChild(buttonTask)


              
            }
        });
   

