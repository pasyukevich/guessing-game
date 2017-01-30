class GuessingGame {
    constructor() {
        var min=0;
        var max=0;
    }

    setRange(min, max) {
        this.min= min;
        this.max= max;
    }

    guess() {
        return (Math.round((this.min+this.max)/2))
    }

    lower() {
        this.max=this.guess();
        return this;
    }

    greater() {
        this.min=this.guess();
        return this;
    }
}

module.exports = GuessingGame;
