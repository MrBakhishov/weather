
 //  document.querySelector("img").src = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid"
   // document.querySelector("img").src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
   // let inp = document.querySelector("input").value




let form = document.querySelector('form')
let inp = document.querySelector("input")
let tbl=document.querySelector("table")
form.addEventListener("submit", (e) => {
    e.preventDefault()
  //  document.querySelector("img").src = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid"
   // document.querySelector("img").src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
   // let inp = document.querySelector("input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=0bc031a1926a2d42bda9f9a152ebab6d`)

    .then(response => {
        response.json()
            .then(value => {
             data = "" 
             let data =` <tr>

             <th scope="col">lon</th>
             <th scope="col">weather</th>
             <th scope="col">main</th>
             <th scope="col">wind</th>
             <th scope="col">rain</th>
             <th scope="col">clouds</th>
             <th scope="col">id</th>
             <th scope="col">name</th>


           </tr>
             `
             //for(let i = 0; i <inp.value; i++) {

                data +=

                `  <tr>
                <th scope="row"> ${value.coord.lon}</th>
                <td>${value.weather}</td>
                <td>${inp.value.main}</td>
                <td>${value[inp].wind}</td>
                <td>${value[inp].clouds}</td>
                <td>${value[inp].id}</td>
                <td>${value[inp].name}</td>


              </tr>`
            //}

      
            tbl.innerHTML=data

             })

             //.catch(err => console.log(err))



     })
        ///.then(response => {

           // document.querySelector("input").inp = response.url

})



// let btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')

//         .then(response => {
//             response.json()
//                 .then(gelenData => {

//                  let data = `
//                   <tr>

//                     <th scope="col">userId</th>
//                     <th scope="col">id</th>
//                     <th scope="col">title</th>
//                     <th scope="col">completed</th>


//                   </tr>`

//                     for(let i = 0; i < gelenData.length; i++) {

//                     data +=

//                     `  <tr>
//                     <th scope="row"> ${gelenData[i].userId}</th>
//                     <td>${gelenData[i].id}</td>
//                     <td>${gelenData[i].title}</td>
//                     <td>${gelenData[i].completed}</td>


//                   </tr>`
//                   }

//                document.querySelector('table').innerHTML = data;

//                 })

//                 .catch(err => console.log(err))



//         })
//         .catch(err => console.log(err))

// });

