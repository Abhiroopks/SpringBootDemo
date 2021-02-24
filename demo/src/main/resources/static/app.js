var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#messages").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/broadcast', function (message) {
            recMsg(JSON.parse(message.body).name, JSON.parse(message.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMsg() {

    if($("#msg").val() === ""){
        console.log("Message cannot be empty!")
        return;
    }
    
    if($("#name").val() === ""){
        console.log("Name cannot be empty!")
        return;
    }


    stompClient.send("/app/broadcast", {}, JSON.stringify({'name': $("#name").val(), 'msg': $("#msg").val()}));
    $("#msg").val("");
    $("#name").prop( "disabled", true);
}

function recMsg(name , message) {
    $("#messages").append("<tr><td>" + name + "<td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendMsg(); });
});