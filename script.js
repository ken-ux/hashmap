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
    // Reduces large hash codes into smaller integers
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

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

let test = new HashMap(16);
test.set("kermit", 5);
console.log(test.has("piggy"));
console.log(test.has("kermit"));
