// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
// Вывести на экран: имя, e-mail, телефон и название компании пользователя.
// Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
// Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
// Для реализации трех запросов воспользоваться Promise.all().
// (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
// Пример: 
// 1.  name: Leanne Graham
//     email: Sincere@april.biz
//     phone: 1-770-736-8031 x56442
//     company: Romaguera-Crona    
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)
// __________________________________

// 2.  name: Ervin Howell   
//     email: Shanna@melissa.tv 
//     phone: 010-692-6593 x09125
//     company: Deckow-Crist
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)
const urlUser = `https://jsonplaceholder.typicode.com/users`;
const urlPhoto = `https://jsonplaceholder.typicode.com/photos`;
const urlAlbum = `https://jsonplaceholder.typicode.com/albums`;

async function getTnformationAboutPhotos(userId) {
    try {
        const responses = await Promise.all([fetch(urlUser), fetch(urlAlbum), fetch(urlPhoto)])
        const dataObjects = await Promise.all(responses.map(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
    }));
        const goalObj = dataObjects[0].find(user => user['id'] == userId);
        const resultObj = {'id': userId,'name': goalObj['name'], 'email': goalObj['email'], 'phone': goalObj['phone'], company: goalObj['company']['name'], albums: []};
        dataObjects[1].filter(album => album['userId'] == userId).map(album => {
            album['photos'] = 
            dataObjects[2].reduce((sum, photo) => {
                if (photo['albumId'] == album['id']) {
                    sum+=1;
                }
                return sum;
            }, 0)
            return album;
            }
        ).forEach(album => {
            resultObj.albums.push(album['title'] + ' (' + album['photos'] + ' photos)');
        });
        return resultObj;
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Function is finished!");
    }
}
getTnformationAboutPhotos(1)
.then(result => {
    console.log(`${result.id}    name: ` + result.name);
    console.log('     email: ' + result.email);
    console.log('     phone: ' + result.phone);
    console.log('     company: ' + result.company);
    console.log('     albums: ');
    for (let album of result.albums) console.log('         ' + album);
});
getTnformationAboutPhotos(2)
.then(result => {
    console.log(`${result.id}    name: ` + result.name);
    console.log('     email: ' + result.email);
    console.log('     phone: ' + result.phone);
    console.log('     company: ' + result.company);
    console.log('     albums: ');
    for (let album of result.albums) console.log('         ' + album);
});
getTnformationAboutPhotos(3)
.then(result => {
    console.log(`${result.id}    name: ` + result.name);
    console.log('     email: ' + result.email);
    console.log('     phone: ' + result.phone);
    console.log('     company: ' + result.company);
    console.log('     albums: ');
    for (let album of result.albums) console.log('         ' + album);
});