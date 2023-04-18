# Gundam Battle

## Remedial JS Dasar

### Description

Pada _file_ `main.js`, buatlah sebuah `function` dengan nama `gundamBattle`.
`gundamBattle` adalah sebuah `function` yang menerima satu parameter `data` dengan nilai berupa `object` dengan `key` sebagai berikut :

1. `name` : Nama dari pilot gundam.
2. `mobileSuit` : Nama/jenis mobile suit yang digunakan.
3. `health` : Jumlah nyawa pilot dan selalu dimulai dari 100
4. `enemies` : Kumpulan data `enemy` yang akan dilawan.

| Name         | Data Type       |
| ------------ | --------------- |
| _name_       | string          |
| _mobileSuit_ | string          |
| _health_     | number          |
| _enemies_    | array of string |

`Function` tersebut akan mengembalikan nilai berupa `object` dengan ketentuan berikut:

- Setiap `enemy` memiliki power yang berbeda. Power diperoleh dari jumlah panjang kata di setiap element pada array `enemies` (Nama enemy). `enemy`dengan simbol `!` (tanda seru) akan memperoleh ekstra power sebanyak `25`. Contoh :

  ```txt
  enemies: ["Graze", "Kimaris Vidar!"]

  'Graze' memiliki power = 5
  'Kimaris Vidar!' memiliki power = 14 + 25 = 39

  Notes: panjang nama termasuk spasi dan simbol
  ```

- `enemy` dinyatakan kalah jika `health` pilot masih lebih besar atau sama dengan dari power yang dimiliki masing-masing `enemy`.
- Saat `enemy` berhasil dikalahkan, nama `enemy` tersebut akan di tambahkan kedalam array `deadEnemies` dan `health` player akan berkurang dan di tampilkan dalam `currentHealth`.
- Jika pilot berhasil mengalahkan semua `enemy` dan `health` diatas `0`, maka `status` berisi `win` (**dalam huruf kecil**)
- Jika pilot berhasil mengalahkan semua `enemy` dan `health` sama dengan `0`, maka `status` berisi `draw` (**dalam huruf kecil**)
- Jika pilot gagal mengalahkan semua `enemy`, maka `status` berisi `lose` (**dalam huruf kecil**)
- `currentHealth` dari pilot yang gagal mengalahkan semua `enemy` tidak boleh minus (min. 0).

| Name            | Data Type       |
| --------------- | --------------- |
| _name_          | string          |
| _mobileSuit_    | string          |
| _currentHealth_ | number          |
| _deadEnemies_   | array of string |
| _status_        | string          |

### Constraints

- Name of the function must be `gundamBattle`
- Function hanya menerima 1 parameter
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```js
// data
{
  name: "Mikazuki Augus",
  mobileSuit: "Barbatos Lupus Rex",
  health: 100,
  enemies: ["Graze", "Hashmal", "Kimaris Vidar!", "Graze Commander Type"],
};
```

**Expected Output / Behavior**:

```js
{
  name: 'Mikazuki Augus',
  mobileSuit: 'Barbatos Lupus Rex',
  currentHealth: 29,
  deadEnemies: [ 'Graze', 'Hashmal', 'Kimaris Vidar!', 'Graze Commander Type' ],
  status: 'win'
}
```

**Explanation**:

```txt
Mikazuki Augus akan menghadapi 4 'enemies' dengan 'health' 100.

Enemy pertama yang dihadapi yaitu Graze.
- Health yang dimiliki 100.
- Graze memiliki power 5.
- 100 - 5 = 95

Enemy kedua yang dihadapi yaitu Hashmal.
- Health yang dimiliki 95.
- Hashmal memiliki power 7.
- 95 - 7 = 88

Enemy ketiga yang dihadapi yaitu Kimaris Vidar!.
- Health yang dimiliki 88.
- Kimaris Vidar! memiliki power 14.
- Kimaris Vidar! memiliki simbol '!' sehingga mendapatkan power tambahan 25
- 88 - (14 + 25) = 49

Enemy keempat (terakhir) yang dihadapi yaitu Graze Commander Type.
- Health yang dimiliki 49.
- Graze Commander Type memiliki power 20.
- 49 - 20 = 29

Sehingga hasil akhirnya yaitu:
key 'currentHealth' yang dimiliki Mikazuki Augus bernilai 29
Seluruh 'enemy' masuk kedalam key 'deadEnemies'
key 'status' bernilai win
```

#### Test Case 2

**Input**:

```js
// data
{
  name: "Akihiro Altland",
  mobileSuit: "Gusion Rebake Full City",
  health: 100,
  enemies: [
    "Graze",
    "Reginlaze",
    "Kimaris Vidar!",
    "Graze Ritter Commander Type!",
  ],
};
```

**Expected Output / Behavior**:

```js
{
  name: 'Akihiro Altland',
  mobileSuit: 'Gusion Rebake Full City',
  currentHealth: 0,
  deadEnemies: [ 'Graze', 'Reginlaze', 'Kimaris Vidar!' ],
  status: 'lose'
}
```

**Explanation**:

```txt
Akihiro Altland akan menghadapi 4 'enemies' dengan 'health' 100.

Enemy pertama yang dihadapi yaitu Graze.
- Health yang dimiliki 100.
- Graze memiliki power 5.
- 100 - 5 = 95

Enemy kedua yang dihadapi yaitu Reginlaze.
- Health yang dimiliki 95.
- Reginlaze memiliki power 9.
- 95 - 9 = 86

Enemy ketiga yang dihadapi yaitu Kimaris Vidar!.
- Health yang dimiliki 86.
- Kimaris Vidar! memiliki power 14.
- Kimaris Vidar! memiliki simbol '!' sehingga mendapatkan power tambahan 25
- 86 - (14 + 25) = 47

Enemy keempat (terakhir) yang dihadapi yaitu Graze Ritter Commander Type!.
- Health yang dimiliki 47.
- Graze Ritter Commander Type! memiliki power 28.
- Graze Ritter Commander Type! memiliki simbol '!' sehingga mendapatkan power tambahan 25
- 47 - (28 + 25) = -6

Sehingga hasil akhirnya yaitu:
key 'currentHealth' yang dimiliki Akihiro Altland bernilai -6, namun karna 'currentHealth' minimal memiliki nilai 0, sehingga nilai akhir dari 'currentHealth' adalah 0.
Hanya 3 'enemy' pertama yang masuk kedalam key 'deadEnemies' karna 'enemy' terakhir gagal dikalahkan
key 'status' bernilai lose.
```
