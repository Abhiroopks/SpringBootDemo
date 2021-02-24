package com.example.messagingstompwebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

  @MessageMapping("/broadcast")
  @SendTo("/topic/broadcast")
  public Greeting greeting(HelloMessage message) throws Exception {
    //Thread.sleep(1000); // simulated delay
	  
    return new Greeting(message.getName(), HtmlUtils.htmlEscape(message.getMsg()));
  }

}