function HashMap() {
    let buckets = [];
    buckets.length = 8;

    let hashCode = 0;
    const primeNumber = 31;
    let modulus = 8;

    // takes a value and produces a has code with it
    const hash = (string) => {
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
            hashCode = hashCode % modulus;
        }

        return hashCode;
    };

    // takes two arguments [key, value], where value is assigned to key, 
    // if key already exists, then the old value is overwritten
    const set = (key, value) => {
        if (key < 0 || key >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        buckets[key] = value;

        currentLength = length();
        if (currentLength / buckets.length >= 0.75) {
            buckets.length = buckets.length * 2;
            modulus = modulus * 2;
        }
    };

    // takes one argument as key and returns value that is assigned to the key
    // if key not found, return null
    const get = (key) => {
        if (buckets[key] == undefined) {
            return null;
        }
        return buckets[key];
    };

    // takes a key as an argument and returns true or false based on whether or not is in the hash map
    const has = (key) => {
        if (buckets[key] == undefined) {
            return false;
        }
        return true;
    };

    // takes a key as an argument and removes it from the hash table
    const remove = (key) => {
        if (key < 0 || key >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        buckets[key] = undefined;
    };

    // returns the number of stored keys in th hash map
    const length = () => {
        let count = 0;
        for (let i = 0; i < buckets.length; i++) {
            if (has(i) == true) {
                count++;
            }
        }
        return count;
    };

    // removes all entries in the hash map
    const clear = () => {
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = undefined;
        }
    };

    // returns an array containing all the keys inside the hash map
    const keys = () => {
        let bucketKey = [];
        for (let i = 0; i < buckets.length; i++) {
            if (has(i) == true) {
                bucketKey.push(i);
            }
        }
        return bucketKey;
    };

    // returns an array containing all the values
    const values = () => {
        let bucketValues = [];
        for (let i = 0; i < buckets.length; i++) {
            if (has(i) == true) {
                bucketValues.push(buckets[i]);
            }
        }
        return bucketValues;
    };

    // returns an array that contains each key/value pair
    const entries = () => {
        let bucketEntries = [];
        for (let i = 0; i < buckets.length; i++) {
            if (has(i) == true) {
                bucketEntries.push(i, buckets[i]);
            }
        }
        return bucketEntries;
    };

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}