# hashmap

This is an implementation of a HashMap. The constructor for the HashMap class takes in an integer to specify the number of buckets in its array. The HashMap class contains the following methods:

- hash(value): Takes a value and produces a hash code with it.
- set(key, value): Adds a new key-value pair to the HashMap. If a key already exists, then the old value is overwritten.
- get(key): Returns the value that is assigned to this key in the HashMap. If key is not found, returns `null`.
- has(key): Returns `true` or `false` based on whether or not the key is in the HashMap.
- remove(key): Removes the given key from the HashMap. If it does not exist or does not match the bucket it's led to, throws an error.
- length(): Returns the number of stored keys in the HashMap.
- clear(): Removes all entries in the HashMap.
- keys(): Returns an array containing all the keys inside the HashMap.
- values(): Returns an array containing all the values.
- entries(): Returns an array that contains each key-value pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

The following utility method assists any main methods that iterate over the HashMap:

- indexError(index): Throws an error when a given index is outside the bounds of the size range for HashMap's buckets array. This emulates errors thrown in other programming languages where arrays cannot be dynamically sized.

## Lessons Learned

- Using hash functions to sort key-value pairs into buckets.
- As a second layer of security, confirming that a given key matches the key in a bucket it has been hashed to.
