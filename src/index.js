const NUMBERS = [72, 50]

const mcm = values => {
    let divisor = 2
    let numbers = values
    let acum = 1
    let comparator = false
    let change = false
    let aux = 0

    for(let item of numbers){
        if(divisor<=item){
            comparator = true
        }
    }
    while(comparator){
        for(let i=0; i<numbers.length; i++){
            if(numbers[i]%divisor===0){
                numbers[i] = numbers[i] / divisor
                change = true
            }
        }
        if(change){
            acum = acum * divisor
        }else{
            divisor++
        }
        change = false
        for(let item of numbers){
            if(divisor>item){
                aux++
            }
        }
        if(aux===numbers.length){
            comparator = false
        }
        aux = 0
    }

    return acum
}

console.log(mcm(NUMBERS))
