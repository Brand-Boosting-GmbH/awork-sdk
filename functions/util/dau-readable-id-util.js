const admin = require('firebase-admin')
const db = admin.firestore()

const placeholders = {
    n: [0,1,2,3,4,5,6,7,8,9],
    s: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    l: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    L: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
}

const generateString = function(schema){
    return schema.split('').map(
        (c) => {
            if(placeholders[c]){
                return placeholders[c][Math.floor(Math.random() * placeholders[c].length)]
            }
            return c
        }
    ).join('')
}

/**
 * Generates a truely unique id
 * @param {String} schema a schema string with placeholders to be replaced (n: 0-9, s: A-z, l: a-z, L: A-Z)
 * @param {(firebase.firestore.CollectionReference|firebase.firestore.Query)} collection a firestore collection or query where the generated id should be unique
 * @param {String=} field a field to check uniqueness on, not applicable when using a query
 */
exports.generateIdAndEnsureUniqueness = async function(schema, collection, field){
    let id = generateString(schema)
    if(field){
        // eslint-disable-next-line no-await-in-loop
        while(!(await collection.where(field, '==', id).limit(1).get()).empty){
            id = generateString(schema)
        }
    }else{
        // eslint-disable-next-line no-await-in-loop
        while((await collection.doc(id).get()).exists){
            id = generateString(schema)
        }
    }
    return id
}

function createCounter(ref, num_shards) {
    var batch = db.batch();

    // Initialize the counter document
    batch.set(ref, { num_shards: num_shards });

    // Initialize each shard with count=0
    for (let i = 0; i < num_shards; i++) {
        let shardRef = ref.collection('shards').doc(i.toString());
        batch.set(shardRef, { count: 0 });
    }

    // Commit the write batch
    return batch.commit();
}

function incrementCounter(ref, num_shards) {
    // Select a shard of the counter at random
    const shard_id = Math.floor(Math.random() * num_shards).toString();
    const shard_ref = ref.collection('shards').doc(shard_id);

    // Update count
    return shard_ref.update("count", admin.firestore.FieldValue.increment(1));
}

function getCount(ref) {
    // Sum the count of each shard in the subcollection
    return ref.collection('shards').get().then(snapshot => {
        let total_count = 0;
        snapshot.forEach(doc => {
            total_count += doc.data().count;
        });

        return total_count;
    });
}

const getCurrentCount = async function(collection){
    let counterRef = collection.doc('__COUNTER')
    let counterSnap = await counterRef.get()
    if(counterSnap.exists && counterSnap.data() && counterSnap.data().num_shards){
        await incrementCounter(counterRef, counterSnap.data().num_shards)
        return parseInt(await getCount(counterRef))
    }else{
        await createCounter(counterRef, 50)
        return 1
    }
}

exports.generateAscIdAndEnsureUniqueness = async function(collection, pad, prefix, field){
    let counter = await getCurrentCount(collection)
    let id = `${prefix?prefix:''}${String(counter).padStart(pad, '0')}`
    console.log('ascId')
    console.log({id})
    if(field){
        // eslint-disable-next-line no-await-in-loop
        while(!(await collection.where(field, '==', id).limit(1).get()).empty){
            // eslint-disable-next-line no-await-in-loop
            counter = await getCurrentCount(collection)
            id = `${prefix?prefix:''}${String(counter).padStart(pad, '0')}`
        }
    }else{
        // eslint-disable-next-line no-await-in-loop
        while((await collection.doc(id).get()).exists){
            // eslint-disable-next-line no-await-in-loop
            counter = await getCurrentCount(collection)
            id = `${prefix?prefix:''}${String(counter).padStart(pad, '0')}`
            console.log({id})
        }
    }
    console.log('return', {id})
    return id
}