/**
 * ziplist
 * Created by Bobby on 9/19/2016.
 */

function zipList(list1, list2) {
  const out = [];
  for (let one = 0, two = 0; one < list1.length || two < list2.length; one += 1, two += 1) {
    if (one < list1.length) {
      out.push(list1[one]);
    }
    if (two < list2.length) {
      out.push(list2[two]);
    }
  }
  return out;
}

function zipListTheSimpleWay(list1, list2) {
 return _.flatten(_.pairs(_.object(list1, list2)));
}

const one = [1, 2, 3];
const two = ['a', 'b', 'c'];
console.log(zipList(one, two));
console.log(zipListTheSimpleWay(one, two));
