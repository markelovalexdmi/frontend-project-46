import _ from 'lodash';

const compareTwoObjects = (object1, object2) => {
  const sortedUniqObjectKeys = _.uniq(
    _.sortBy([...Object.keys(object1), ...Object.keys(object2)])
  );

  const comparisonResult = sortedUniqObjectKeys.map((key) => {
    if (object1[key] === object2[key]) {
      return `  ${key}: ${object1[key]}`;
    }
    if (Object.hasOwn(object1, key) && Object.hasOwn(object2, key)) {
      return [`- ${key}: ${object1[key]}`, `+ ${key}: ${object2[key]}`];
    }
    if (Object.hasOwn(object1, key)) {
      return `- ${key}: ${object1[key]}`;
    }
    return `+ ${key}: ${object2[key]}`;
  });

  return comparisonResult.flat().join('\n');
};
export default compareTwoObjects;
