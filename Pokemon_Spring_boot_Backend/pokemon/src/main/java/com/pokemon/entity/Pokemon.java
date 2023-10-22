package com.pokemon.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name="pokemons")
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="name")
    private String name;
    @Column(name="height")
    private int height;
    @Column(name="weight")
    private int weight;
    @Column(name="is_default")
    private boolean is_default;
    @Column(name="is_hidden")
    private boolean is_hidden;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public boolean isIs_default() {
		return is_default;
	}
	public void setIs_default(boolean is_default) {
		this.is_default = is_default;
	}
	public boolean isIs_hidden() {
		return is_hidden;
	}
	public void setIs_hidden(boolean is_hidden) {
		this.is_hidden = is_hidden;
	}
	
	
	public Pokemon(Long id, String name, int height, int weight, boolean is_default, boolean is_hidden) {
		super();
		this.id = id;
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.is_default = is_default;
		this.is_hidden = is_hidden;
	}
	
	
	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", height=" + height + ", weight=" + weight + ", is_default="
				+ is_default + ", is_hidden=" + is_hidden + "]";
	}
    
	
	
    
   

    
}

