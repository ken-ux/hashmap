// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class HashMap {
  constructor(size) {
    this.buckets = new Array(size);
  }

  hash(value) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    // Reduces large hash codes into smaller integers
    let bucket = this.hash(key) % this.buckets.length;

    this.buckets[bucket] = { [key]: value };
  }

  get(key) {
    let bucket = this.hash(key) % this.buckets.length;

    // Check if bucket exists
    if (this.buckets[bucket]) {
      let bucketKey = Object.keys(this.buckets[bucket])[0];

      // Check if key already in the bucket matches the key that was given
      if (key === bucketKey) {
        // Return key's value
        return this.buckets[bucket][bucketKey];
      } else {
        throw new Error("Key does not match.");
      }
    } else {
      return null;
    }
  }

  has(key) {
    let bucket = this.hash(key) % this.buckets.length;

    if (this.buckets[bucket]) {
      let bucketKey = Object.keys(this.buckets[bucket])[0];

      if (key === bucketKey) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  remove(key) {
    let bucket = this.hash(key) % this.buckets.length;

    if (this.buckets[bucket]) {
      let bucketKey = Object.keys(this.buckets[bucket])[0];

      // Only remove key if it matches what's already in the bucket
      if (key === bucketKey) {
        this.buckets[bucket] = null;
      } else {
        throw new Error("Key does not match.");
      }
    } else {
      throw new Error("Key does not exist in the HashMap.");
    }
  }

  length() {
    let storedKeys = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        storedKeys++;
      }
    }
    return storedKeys;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        this.buckets[i] = null;
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        keys.push(Object.keys(this.buckets[i])[0]);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        values.push(Object.values(this.buckets[i])[0]);
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let entry = [];
        entry.push(Object.keys(this.buckets[i])[0]);
        entry.push(Object.values(this.buckets[i])[0]);
        entries.push(entry);
      }
    }
    return entries;
  }
}

let test = new HashMap(16);
test.set("kermit", 5);
test.set("piggly", 6);

console.log(test.buckets);
console.log(test.has("piggy"));
console.log(test.has("kermit"));
// test.remove("kermit");
// console.log(test.buckets);
console.log(test.has("kermit"));
console.log(test.length());
// test.clear();
console.log(test.buckets);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
