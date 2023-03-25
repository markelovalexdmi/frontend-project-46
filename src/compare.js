import _ from 'lodash';

const compareTwoObjects = (cont1, cont2) => {
  const arrowKeysFile1 = Object.keys(cont1);
  const arrowKeysFile2 = Object.keys(cont2);
  const sortedUniqObjectKeys = _.sortBy(
    _.union(arrowKeysFile1, arrowKeysFile2),
  );

  const result = sortedUniqObjectKeys.map((key) => {
    const value1 = cont1[key];
    const value2 = cont2[key];

    if (_.isEqual(value1, value2)) {
      return `    ${key}: ${value1}`;
    }
    if (!Object.hasOwn(cont1, key)) {
      return `  + ${key}: ${value2}`;
    }
    if (!Object.hasOwn(cont2, key)) {
      return `  - ${key}: ${value1}`;
    }
    return [`  - ${key}: ${value1}`, `  + ${key}: ${value2}`];
  });
  return `{
${result.flat().join('\n')}
}`;
};
export default compareTwoObjects;
