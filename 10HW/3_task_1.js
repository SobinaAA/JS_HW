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

async function getUser(userId) {
  try {
    const response = await fetch(URLs.baseUrl + URLs.users(userId));
    const user = await response.json();
    return user;
  } catch (err) {
    console.log(err)
  }
};
async function getALbums(userId) {
  try {
    const response = await fetch(URLs.baseUrl + URLs.userAlbums(userId));
    const listOfAlbums = await response.json();
    return listOfAlbums;
  } catch (err) {
    console.log('Что-то не так пошло с запросом альбомов!')
  }
 };
 async function getPhotoInAlbums(userId) {
    try {
      const response = await fetch(URLs.baseUrl + URLs.userPhotoInAlbums(userId));
      const photos = await response.json();
      return photos;
    } catch (err) {
      console.log('Что-то не так пошло с запросом фотографий!')
    }
 };
async function getTnformationAboutPhotos(userId) {
    try {
        const [user, albums] = await Promise.all([getUser(userId), getALbums(userId)])
        const result = {'id': userId,'name': user['name'], 'email': user['email'], 'phone': user['phone'], company: user['company']['name'], albums: []};
      const mappedAlbumPhotos = await Promise.all(
      albums.map((album) => getPhotoInAlbums(album.id)),
    );

    for (const album of mappedAlbumPhotos) {
      result.albums.push(`${album[0]['title']} (${album.length}) photos`);
    }
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