# HashMap

This is an implementation of a hash map. Hash maps or hash tables are data structures that implement an unordered associative array. This simply means that it maps a key on to a value to create a `[key,value]` pairing. This paring is also known as a dictionary. With this data structure, you can search for a value with it's associated key, which acts as the index of the pairing.

This program has the following features:

1. `hash` that takes a value and produces a has code with it.
2. `set` which takes two arguments [key, value], where value is assigned to key. If key already exists, then the old value is overwritten.
3. `get` takes one argument as key and returns value that is assigned to the key. If key not found, return null.
4. `has` that takes a key as an argument and returns true or false based on whether or not is in the hash map.
5. `remove` which takes a key as an argument and removes it from the hash table.
6. `length` who returns the number of stored keys in th hash map.
7. `clear` which removes all entries in the hash map.
8. `keys` that returns an array containing all the keys inside the hash map
9. `values` which returns an array containing all the values.
10. `entries` that returns an array that contains each key/value pair.
