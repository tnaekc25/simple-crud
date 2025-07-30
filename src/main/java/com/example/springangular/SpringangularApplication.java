package com.example.springangular;

import jakarta.websocket.server.PathParam;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SpringangularApplication {

    MongoClass mongo;

    @Autowired
    public SpringangularApplication(MongoClass mongo) {
    this.mongo = mongo;}

    public static void main(String[] args) {
        SpringApplication.run(SpringangularApplication.class, args);
    }

    @GetMapping("/api/reads")
    public List<Product> readProducts() {
      System.out.println("reads");

      return mongo.getDoc();
    }


    @DeleteMapping("/api/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        System.out.println("delete" + id);

        mongo.deleteDoc(id);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/api/update")
    public ResponseEntity<Void> updateProduct(@RequestBody Product product) {
        System.out.println("update" + product.id);
        mongo.updateDoc(product);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/api/create")
    public ResponseEntity<Void> createProduct(@RequestBody Product product) {
        System.out.println("create" + product.id);
        mongo.addDoc(product);

        return ResponseEntity.ok().build();
    }

}
