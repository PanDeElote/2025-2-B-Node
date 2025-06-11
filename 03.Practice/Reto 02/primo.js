

export default function esPrimo(num){
    let divisores = 0;
    let i = 1;
    for(i = 1; i <= num; i++){
        if(num % i == 0){
            divisores++;
        }
    }
    if(divisores == 2){
        return true;
    } 
}