# Crisp Client Automation

If you want to use automation feature of Crisp Pro package, so easy.

#### Installation
Add end of crisp script

- Start an automatic chat for a new visitor who not click on chat for 3 seconds
```js
l=localStorage;e=()=>l.setItem("n3w",!0);g=()=>l.getItem("n3w");g()||($crisp.push(["on","chat:initiated",e]),$crisp.push(["on","session:loaded",()=>{setTimeout(()=>{g()||($crisp.push(["do","chat:open"]),e())},3e3)}]));
```

#### Other Client-Side Commands
https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y
