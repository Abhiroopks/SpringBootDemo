package com.example.messagingstompwebsocket;

public class HelloMessage {

  private String name;
  private String msg;
  
  public HelloMessage() {
	  
  }

  public HelloMessage(String name, String msg) {
	this.name = name;
    this.msg = msg;
  }

  public String getMsg() {
    return msg;
  }

  public void setMsg(String msg) {
    this.msg = msg;
  }
  
  public String getName() {
	    return name;
	  }

	  public void setName(String name) {
	    this.name = name;
	  }
}