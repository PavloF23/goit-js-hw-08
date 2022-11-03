// 1.Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2.Додай бібліотеку як залежність проекту через npm.
// 3.Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4.Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5.Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7.Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
