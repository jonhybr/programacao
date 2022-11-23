
let values = document.getElementsByClassName('valor')
const reset = document.getElementById('reset')
const fim = document.getElementById('fim')


reset.onclick = function(){
    for (i of values){
        console.log(values)
        i.value = 0;
   }
};

fim.onclick = function(){
    val = []
    for (i of values){
        val.push(i)
        if (val.length > 1){
            if (val[0].value > val[1].value){
                console.log(val[0].id)
            } else { console.log(val[1].id) }
            val = []
        }
    }
}