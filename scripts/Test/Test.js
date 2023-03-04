// можно правильные ответы сравнивать по id  ане по alt !!!!!!


//переменные чтобы 1000 раз их не писать в коде
let x_cursor //для point надо
let y_cursor //для point надо
let type=document.getElementById("type")//херня где выбор чтобы открывать
let map = document.querySelector("map")//фото где всё
let score=0//Счётчик очков
let proverka//проверка правильности ответа через alt
let errors_now=document.getElementById("errors_now")//для добавления в выбранные ошибки
let errors_otmena=document.getElementById("errors_otmena")//для удаления из области отмены
let otmena=document.getElementById("otmena_type")//Для закрытия окна отмены
let errors_now_otmena=document.getElementsByClassName("errors_now_otmena")// это всё то что находится в живой таблице
//типо менюшка
let types0=document.getElementById("types0")
let discription0=document.getElementById("discription0")
let types1=document.getElementById("types1")//типы
let discription1=document.getElementById("discription1")//описание новое
let save = document.getElementById("save")//сохранение выбора категории и всего остального
// для нормальной записи ошибки
let wrong // передаётся тип ошибки
let comment //передаётся комент к ошибке (пока ненужная фигня)
// с комменотом пока не рабоать, хз как его добавлть в таблицу с выбранными ошибками и  тому подобное

let errorsCount = 0         //Переменная для подсчета количества внесенных ошибок

// Чтобы открывалось около мышки
function coordinate(event) {
    let x=event.clientX;
    let y=event.clientY;
    x_cursor=x
    y_cursor=y
    document.getElementById("coordinate").style.left=x;
    document.getElementById("coordinate").style.top=y;
    types1.style.left=x
    types1.style.top=y+40
    discription1.style.left=x
    discription1.style.top=y+80
  }

//открыттие и закрытие окна выбора
map.addEventListener('click', (event)=>{
    let target=event.target
    proverka=target.alt
    type.style.display="flex"
    save.style.cursor='default'//чтобы до выбора категории нельзя было сохранить
})


// 1 слой меню
type.addEventListener('click', (event)=>{//вот почему у меня клик везде работает, из-за этого
    let target=event.target
    if(target.innerText=="Отмена"){
    type.style.display="none"
    }
    if(target.innerText=="Сохранить"){
        // оставлени поментки, можно потом отдельной функцией вынести это
        let point = document.createElement("img")
        point.src="images/Test/point.png"
        point.style.position='absolute'
        point.style.left=x_cursor-6
        point.style.top=y_cursor-42
        point.style.zIndex="2"
        point.style.width = "2vw"
        // //
        document.body.append(point)
        wrongs(wrong, point)
        type.style.display="none"
        errors_now.style.display='flex'//надо для красоты, а то обводка всё портит
        // //
        discription0.style.backgroundColor='#FAFAFA'
        types0.style.backgroundColor='#FAFAFA'
        }
})

//Тут просто открытие 2 слоя меню
function open_types1(){
    types1.style.display="flex"
}
function open_discription1(){
    discription1.style.display="flex"
}

// 2 слой меню
types1.addEventListener('click', (event)=>{
    let target=event.target
    if((target.innerText=="Логическая")||(target.innerText=="Типографическая")||(target.innerText=="В отрисовке интерфейса")||(target.innerText=="Контентная")){
        wrong=target
        save.style.cursor='pointer'//чтобы можно было сохранить
        types0.style.backgroundColor='#FFEE08'
    }
    types1.style.display='none'
})

discription1.addEventListener("click",(event)=>{
    let target=event.target
    if(target.innerHTML=="Отмена"){
        discription1.style.display="none"
    }
    if(target.innerHTML=="Сохранить"){
        discription1.style.display="none"
        discription0.style.backgroundColor='#FFEE08'
    }
})

// добавление ошибки
function wrongs (target, point){
    new_error_now(target, point)
        if(target.innerText==proverka){
            score++
            //Это надо чисто для того чтобы показать правильный ответ
            let last=errors_now_otmena.length-1
            errors_now_otmena[last].alt="1"
        }
}

//добавление в живой список и прописана омена
function new_error_now(target, point){
    let a_now = document.createElement("a")
    a_now.innerHTML+=target.innerHTML
    a_now.className="errors_now_otmena"
    
    errors_now.appendChild(a_now)
    let a_now_img = document.createElement("img")
    a_now_img.src="images/Test/point.png"
    a_now_img.style.width='19px'
    a_now_img.style.height='26px'
    a_now_img.style.float='left'
    a_now.appendChild(a_now_img)

    let a_now_0 = document.createElement("img")
    a_now_0.src="images/Test/delete.png"
    a_now_0.style.width='30px'
    a_now_0.style.height='30px'
    a_now_0.style.float='right'
    a_now_0.style.cursor='pointer'
    a_now_0.id = String(errorsCount) + "error"
    errorsCount += 1
    a_now.appendChild(a_now_0)
/////////////////////////////////////////////////////// отмена
    a_now_0.onclick=function(){
        //убирание балла если удалили правильный ответ
        if(a_now.alt=="1"){
            score--
        }

        if(errors_now.childElementCount==1){
            errors_now.style.display='none'
        }


        errors_now.removeChild(a_now)
        document.body.removeChild(point)
        document.body.removeChild(a_now_img)
        ///////

        ///////
        otmena.style.display="none"
    }
    // new_error_otmena(target, a_now)
}
// добавление в список отмены и создание функции отмены
// сейчас походу это надо но не такое!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function new_error_otmena(target, a_now){
    // let a_otmena = document.createElement("a")
    // a_otmena.innerHTML+=target.innerText
    // a_otmena.href="#"
    // a_otmena.className="number_otmena"
    // Я раньше удалял по нажатию на то, что закоментил, а теперь на a_now_0
    ///////
    // a_otmena.id = String(errorsCount) + "error"
    // errorsCount += 1
    ///////
    // уже ненужна функция просто
}

// открытеи меню отмены
function otmena_type(){
    otmena.style.display="flex"
}
// закрытие окна отмены
function otmena_otmena(){
    otmena.style.display="none"
}
//показание счёта
function score_alert(){
    alert(score)
}

//пока через alt это сделать и не мучиться, может просто через бэк будет выбираться правильно или не правильно сделал
// получается я пихаю всё сейчас в переменные и потом вызываю функцию которая всё распихивает в нужные функции
// надо доделать выбор типа (чтобы работало не криво), до выбора чтобы нажатие на "Сохранить" неработало
// коммент спросить как делать
// Ну а там уже просто красиво сделать и отметку ставить при нажатии