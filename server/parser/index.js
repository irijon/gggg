import OZONParser from './shops/ozon.js';
import mvideoParser from './shops/mvideo.js';
import { PuppeteerHandler } from './helpers/puppeter.js';

const p = new PuppeteerHandler();

const MVIDEO = 'https://www.mvideo.ru/product-list-page?q=';
const OZON = 'https://www.ozon.ru/search/?text=';

async function makeTask(url, parser) {
  const pageContent = await p.getPageContent(url);
  const product = await parser(pageContent);
  return product
}

export default async function main(query) {
  const ozon = await makeTask(`${OZON}${query}`, OZONParser)
  const mvideo = await makeTask(`${MVIDEO}${query}`, mvideoParser)
  return {
    mvideo,
    ozon
  }
}
