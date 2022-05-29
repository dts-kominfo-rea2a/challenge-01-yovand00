// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//First user data
let eduFirstUser = new Set()

eduFirstUser.add({
    name : 'SDN Harapan Bunda',
    city : 'konoha',
    graduate : 2011    
})
eduFirstUser.add({
    name : 'SMPN 2 Konoha',
    city : 'konoha',
    graduate : 2016
})
eduFirstUser.add({
    name : 'SMA 3 Konohagakure',
    city : 'konoha',
    graduate : 2016
})

const firstUser = {
    nama : 'edward',
    gender : 'male',
    age : 18,
    email : 'edward@DingDing.com',
    favoriteColor : ['navy blue', 'black'],
    isHavePet : 'no',
    education : eduFirstUser,
    favoriteRestaurant : ['starbuck', 'primarasa', 'rm padang'],
    };

//Second user data
let eduSecondUser = new Set()

eduSecondUser.add({
    name : 'SDN Harapan Ayah',
    city : 'Fiore',
    graduate : 2014    
})
eduSecondUser.add({
    name : 'SMPN 3 Fiore',
    city : 'Fiore',
    graduate : 2020
})

const secondUser = {
    nama : 'silvia',
    gender : 'female',
    age : 15,
    email : 'silvia@DingDing.com',
    favoriteColor : ['green pastel', 'violet'],
    isHavePet : 'yes',
    education : eduSecondUser,
    favoriteRestaurant : ['bebek sinjay', 'MCD'],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
