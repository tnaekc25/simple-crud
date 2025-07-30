package com.example.springangular;

public class Product {
    public String id;
    public String name;
    public String gender;
    public BloodType bloodType;
    public int age;

    Product(String id, String name, String gender, int age, BloodType bloodType) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.bloodType = bloodType;
    }
}
