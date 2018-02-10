import "reflect-metadata";
import {createConnection, Connection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection().then(async (connection: Connection) => {

    const cats: Category[] = [
        {id: null, name: null, name2: '1'},
        {id: null, name: '2', name2: null},
    ]

    const post = connection.manager.create(Post, {categories: cats});
    console.log(post);

    //await connection.manager.save(post);

}).catch(error => console.log("Error: ", error));