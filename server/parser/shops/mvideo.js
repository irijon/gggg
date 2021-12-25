import cherio from 'cherio';

export default function citylinkParser(pageContent) {
  const doc = cherio.load(pageContent, { decodeEntities: false });
  const productCard = doc('.product-cards-row').first();
  const link = productCard.find('.product-picture-link').first().attr('href');
  const price = productCard.find('.price__main-value').first().text().trim().replace(/\s/g, "").replace(/₽/g, "")
  const name = productCard.find('.product-title__text').first().text()
  const product = {
    link,
    price,
    name,
  };
  return product;
}