const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');

const API_URI = 'https://dribbble.com/colors/for_404.json';


const HEADERS = { credentials: 'include', headers: { accept: '*/*', 'accept-language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7', 'cache-control': 'no-cache', pragma: 'no-cache', 'x-requested-with': 'XMLHttpRequest' }, referrer: 'https://dribbble.com/shots/x/attachments/98800', referrerPolicy: 'no-referrer-when-downgrade', body: null, method: 'GET', mode: 'cors' };

let id = 0;

const genId = () => {
  id += 1;
  return id;
};

const getImageData = (hex = '3300ff') => new Promise((resolve) => {
  fetch(`${API_URI}?hex=${hex}`, HEADERS)
    .then((resp) => resp.json())
    .then((data) => {
      resolve(data);
    });
});

const download = (uri, filename) => new Promise((resolve) => {
  request.head(uri, (err, res) => {
    console.warn(err, res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', () => {
      resolve();
    });
  });
});

async function main() {
  const data1 = await getImageData('3300ff');

  data1.shots.forEach(async (shot) => {
    const fid = genId();
    await download(shot.img, `static/${fid}.png`);
  });
  const data2 = await getImageData('00ff44');
  data2.shots.forEach(async (shot) => {
    const fid = genId();
    await download(shot.img, `static/${fid}.png`);
  });
}

/**
 * Main
 */

main();
