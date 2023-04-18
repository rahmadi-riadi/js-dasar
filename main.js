function gundamBatt1e(data){
    /*data ={
        name 
        mobileSuit
        health
        enemies
    } 
    */
    const result = {};
        //menambahkan key baru ke dalam sebuah objek
        /* 
            name
            mobileSuit
            currentEnemies
            deadEnemies
            status
        */

            result.name = data.name;
            result.mobileSuit = data.mobileSuit;
            result.currentHealth = data.currentHealth;
            result.deadEnemies = [];

            //battle dengan enemy => looping terhadapa semua element array di dalam enemies

            for (let i = 0; i < data.enemies.length; i++) {
                const enemyPower = getEnemyPower(data.enemies[i])

                 //health berkurang
                result.currentHealth = result.currentHealth - enemyPower;

                if(result.currentHealth >= 0){
                    //menambahkan element baru ke dalam array
                    result.deadEnemies.push(data.enemies[i])
                }else{
                    result.currentHealth = 0;
                    break;
                }
            }

            if (result.currentHealth > 0) {
                result.status = 'win';
            }else {
                if (result.deadEnemies.length === data.enemies.length) {
                result.status = 'draw';
                }else{
                    result.status = 'lose';
                }
            }

    return result;

}

function getEnemyPower(name) {
    let power = 0 

    //menghitung panjang string
    power = name.length;

    //conditional pengecekan karakter tanda seru (!)

    if (name[name.length - 1] === '!') {
        power = power +25;
        
    }
    return power;

}

console.log(getEnemyPower("graze"))
console.log(getEnemyPower("Kimaris Vidar!"))
console.log(getEnemyPower("Eddy permana"))
console.log(getEnemyPower("Eddy permana!"))

console. log(
    gundamBattle({
        name: 'Mikazuki Augus',
        mobilesuit: 'Barbatos Lupus Rex' ,
        health: 100,
        enemies: [ 'Graze' ,' Hashmal ','Kimaris Vidar! ','Graze Commander Type'],
    })
);