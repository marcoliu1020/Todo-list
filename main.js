window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')

    // console.log(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        //-- 取得輸入內容
        const task = input.value

        if (!task) {
            alert('Please add a task')
            return
        }

        //-- 創建一個 <div class="task">
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        //-- 創建一個 <div class="content">
        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')
        // task_content_el.innerText = task; // for test
        
        //-- 創建一個 <input class="text" type="text" readonly/>
        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_content_el.type = 'text'
        task_input_el.setAttribute("readonly", "readonly")
        task_input_el.value = task // text
        
        //-- 創建一個 <div class="actions">
        const task_actions_el = document.createElement('div')
        task_actions_el.classList.add('actions')

        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit')
        task_edit_el.innerHTML = 'edit' // css 有設定 uppercase
        
        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete')
        task_delete_el.innerHTML = 'delete' // css 有設定 uppercase
        // task_delete_el.innerText = 'delete' // 這也可以
        
        //-- <div id="tasks">
        //--     <div class="task"> 
        //--        <div class="content">
        //--            <input />
        //--     <div class="actions">   
        list_el.appendChild(task_el)
        task_el.appendChild(task_content_el)
        task_content_el.appendChild(task_input_el)
        task_el.appendChild(task_actions_el)

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        input.value = ''

        //-- edit event
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() === 'edit') {
                task_input_el.removeAttribute('readonly')
                task_input_el.focus()
                task_edit_el.innerText = 'save'
            } else {
                task_input_el.setAttribute('readonly', 'readonly')
                task_edit_el.innerText = 'edit'
            }
        })

        //-- delete event
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
})