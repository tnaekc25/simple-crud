package com.example.springangular;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.*;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class MongoClass {

    MongoDatabase database;
    MongoClient mongoClient;
    MongoCollection<Document> collection;

    public MongoClass() {
        String connectionString = "";
        ServerApi serverApi = ServerApi.builder()
                .version(ServerApiVersion.V1)
                .build();
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString(connectionString))
                .serverApi(serverApi)
                .build();

        this.mongoClient = MongoClients.create(settings);
            try {

                this.database = this.mongoClient.getDatabase("Test");
                this.database.runCommand(new Document("ping", 1));
                this.collection = this.database.getCollection("Test");
                System.out.println("Connected to MongoDB");

            } catch (MongoException e) {
                e.printStackTrace();
            }
    }

    public List<Product> getDoc() {
        List<Product> lst = new ArrayList<Product>();

        for (Document doc:collection.find()) {
            lst.add(new Product(
                doc.getString("_id"),
                doc.getString("name"),
                doc.getString("gender"),
                doc.getInteger("age"),
                BloodType.valueOf(doc.getString("bloodType"))));
        }


        return lst;
    }

    public void addDoc(Product product) {
        Document doc = new Document("_id", product.id)
                .append("name", product.name)
                .append("gender", product.gender)
                .append("age", product.age)
                .append("bloodType", product.bloodType);
        collection.insertOne(doc);
    }

    public void deleteDoc(String id) {
        DeleteResult result = collection.deleteOne(new Document("_id", id));
    }

    public void updateDoc(Product product) {

        Document filter = new Document("_id", product.id);

        Document doc = new Document("_id", product.id)
                .append("name", product.name)
                .append("gender", product.gender)
                .append("age", product.age)
                .append("bloodType", product.bloodType);

        UpdateResult result = collection.replaceOne(filter, doc);
    }
}
