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
const URLs = {
    baseUrl: `https://jsonplaceholder.typicode.com`,
    users: (userID) => `/users/${userID}`,
    userAlbums: (userID) => `/users/${userID}/albums`,
    userPhotoInAlbums: (userID) => `/albums/${userID}/photos`,
  };

async function getTnformationAboutPhotos(userId) {
    try {
        const responses = await Promise.all([fetch(URLs.baseUrl + URLs.users(userId)), fetch(URLs.baseUrl + URLs.userAlbums(userId)), fetch(URLs.baseUrl + URLs.userPhotoInAlbums(userId))])
        const [objUser, objAlbum, objPhoto] = await Promise.all(responses.map(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
    }));
        const result = {'id': userId,'name': objUser['name'], 'email': objUser['email'], 'phone': objUser['phone'], company: objUser['company']['name'], albums: []};
        objAlbum.forEach(album => {
            result.albums.push(`${album['title']} (${objPhoto.filter(photo => photo['albumId'] == album['id']).length} photos}`);
        })
       console.log(`${result.id}    name: ` + result.name);
       console.log('     email: ' + result.email);
       console.log('     phone: ' + result.phone);
       console.log('     company: ' + result.company);
       console.log('     albums: ');
       for (let album of result.albums) console.log('         ' + album);
        return result;
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Function is finished!");
    }
}
getTnformationAboutPhotos(1);
getTnformationAboutPhotos(2);
getTnformationAboutPhotos(3);