import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    //create a new database named 'contact_db', using version 1
    openDB('contact_db', 1, {
        //add database schema
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists');
                return;
            }
            //create new object store for data and give it a key  name of 'id' which will increment automatically
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            console.log('contacts store created');
        }
    })
};