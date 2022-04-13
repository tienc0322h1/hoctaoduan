class Mobile {
    constructor(name) {
        this.name = name;
        this.pin = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;

    }
    writeMessage(text) {
        this.message = text;
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status =  false;
    }
    sendMessage(phone) {

        this.outbox.push(this.Message);
        this.inbox.push(this.message);
    }
    readInbox() {
        
    }
}
let Samsung = newMobile("samsung");
let Iphone = newMobile("Iphone");
Iphone.writeMessage("Hello");
Iphone.sendMessage(Samsung);
Samsung.writeMessage("Hi");
Samsung.sendMessage(Iphone);
console.log(Iphone.Inbox())