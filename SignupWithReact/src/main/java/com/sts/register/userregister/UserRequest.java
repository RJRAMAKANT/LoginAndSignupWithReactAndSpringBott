package com.sts.register.userregister;

public class UserRequest {
		private String firstName;
		private String lastName;
		private String password;
		private String mailId;
		private long phoneNumber;
		private String address;
		private long pincode;
		public UserRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
		public UserRequest(String firstName, String lastName, String password, String mailId, long phoneNumber,
				String address, long pincode) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
			this.mailId = mailId;
			this.phoneNumber = phoneNumber;
			this.address = address;
			this.pincode = pincode;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMailId() {
			return mailId;
		}
		public void setMailId(String mailId) {
			this.mailId = mailId;
		}
		public long getPhoneNumber() {
			return phoneNumber;
		}
		public void setPhoneNumber(long phoneNumber) {
			this.phoneNumber = phoneNumber;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public long getPincode() {
			return pincode;
		}
		public void setPincode(long pincode) {
			this.pincode = pincode;
		}
		
		
		
		
		


}
