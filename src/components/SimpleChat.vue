<template>
  <div>
    <h1>simple chat</h1>This application is constructed by Vue.js, Webpack, Babel, ws, Node.js, Express
    <br>
    <input type="text" id="msg">
    <input type="button" value="send" v-on:click="send">
    <br>
    <hr>
    <div id="messages"/>
  </div>
</template>

<script>
var host = window.document.location.host.replace(/:.*/, "");
var ws = new WebSocket("ws://" + host + ":3000");
ws.onmessage = function(event) {
  document.getElementById("messages").innerHTML =
    "<div>" +
    JSON.parse(event.data)
      .toString()
      .replace(/,/g, "</div><div>") +
    "</div>";
  console.log(
    JSON.parse(event.data).toString(),
    JSON.parse(event.data)
      .toString()
      .replace(/,/g, "\n")
  );
};
export default {
  name: "SimpleChat",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    send() {
      ws.send(document.getElementById("msg").value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
