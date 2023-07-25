const hash = (key, value, arrLength) => {
  let total = 0;
  let newArr = new Array(arrLength);
  for (let i = 0; i < key.length; i++) {
    total = key.charCodeAt(key, i);
  }
  newArr[total % arrLength] = value;
  console.log(newArr);
};

// hash("Umid", "qole", 10);

class HashTable {
  constructor(size = 100) {
    this.values = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let forComplexRandomNumber = 13;

    for (
      let index = 0;
      index < Math.min(key.length, this.values.length);
      index++
    ) {
      let val = key.charCodeAt(index) - 96;
      total = (val * forComplexRandomNumber + val) % this.values.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.values[index]) {
      this.values[index] = [];
    }
    this.values[index].push([key, value]);
    return this.values;
  }

  get(key) {
    let index = this._hash(key);
    if (!this.values[index]) {
      return undefined;
    }

    for (let i = 0; i < this.values[index].length; i++) {
      if (key === this.values[index][i][0]) {
        return this.values[index][i][1];
      }
    }
  }

  keyOfHashTable() {
    let arr = [];

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i]) {
        for (let j = 0; j < this.values[i].length; j++) {
          console.log(this.values[i][j][0]);
        //   arr.push(this.values[i][j][0]);
        }
      }
    }
    return arr;
  }
}
let hashTable = new HashTable();

hashTable.set("umid", "salom salom");
hashTable.set("umid1", "salom salom2");
hashTable.set("umid2", "salom salom32");
hashTable.set("umid2", "salom salom32");
hashTable.set("umid2", "salom salom32");

// console.log(hashTable("umid", "salom salom"));
// console.log(hashTable("umid", "salom salom"));
console.log(hashTable.keyOfHashTable());
