import cherio from 'cherio';

export default function citylinkParser(pageContent) {
  const doc = cherio.load(pageContent, { decodeEntities: false });
  const productCard = doc('.bh6.bi').first();
  const link = 'https://www.ozon.ru'+productCard.find('a.b0c8').attr('href');
  const price = productCard.find('.ui-p9').text().trim().replace(/\s/g, "").replace(/₽/g, "")
  const name = productCard.find('.bj5').find('span').text()
  const product = {
    link,
    price,
    name,
  };
  return product;
}