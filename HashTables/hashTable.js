// LOGICA CONSTRUIDA DE UNA HASH TABLE ATRAVES DE CLASES 

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    
   delete(key) ;{
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }    
            }        
        }    
    }     
      
    getAllKeys() ;{
        const allKeys = [];
        for (let i = 0; i < this.data.length; i++) {
         const bucket = this.data[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    allKeys.push(bucket[j][0]);
                }
            }
        }
        return allKeys;
     }
       
      return undefined;
    }


}

let myHashTable = new HashTable(50);




