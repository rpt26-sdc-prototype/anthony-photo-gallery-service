const { randomPageSelector, generateNumUpTo } = require('./randomPageSelector');

module.exports.createHeaderImageRecord = (id) => {
  const randomPage = randomPageSelector();
  return `${id},https://steam-fec.s3.amazonaws.com/steam${randomPage}/header-${randomPage}.jpg\n`;
};

module.exports.createMainImageRecords = (id) => {
  const randomPage = randomPageSelector();
  return [...new Array(8)].map((currentelement, index) => {
      return `https://steam-fec.s3.amazonaws.com/steam${randomPage}/main-${randomPage}-${index}.jpg,https://steam-fec.s3.amazonaws.com/steam${randomPage}/thumb-${randomPage}-${index}.jpg,${id}\n`
    })
    .join('');
};

module.exports.createCouchJSONRecord = (id) => {
  const randomPage = randomPageSelector();
  return JSON.stringify({
    _id: id.toString(),
    headerImage: `https://steam-fec.s3.amazonaws.com/steam${randomPage}/header-${randomPage}.jpg`,
    mainImages: [...new Array(8)].map((currentElement, index) => {
      return {
        main: `https://steam-fec.s3.amazonaws.com/steam${randomPage}/main-${randomPage}-${index + 1}.jpg`,
        thumb: `https://steam-fec.s3.amazonaws.com/steam${randomPage}/thumb-${randomPage}-${index + 1}.jpg`
      }
    })
  }) + '\n'
}
