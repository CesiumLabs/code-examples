package net.hotelmanagement.model;

public class User {
	protected int id;
	protected String name;
	protected String email;
	protected String district;
	protected String country;
	
	public User() {
	}
	
	public User(String name, String email,String district, String country) {
		super();
		this.name = name;
		this.email = email;
		this.district = district;
		this.country = country;
	}
	public User(int id, String name, String email,String district, String country) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.district = district;
		this.country = country;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	//
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	//
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
}
