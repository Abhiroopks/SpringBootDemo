package com.example.messagingstompwebsocket;

public class Greeting {

  private String name;
  private String content;

  public Greeting() {
  }

  public Greeting(String name, String content) {
	this.name = name;
    this.content = content;
  }

  public String getContent() {
    return this.content;
  }
  
  public String getName() {
	  return this.name;
  }

}