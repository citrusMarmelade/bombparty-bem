type TimerEventType = "tick"|"end";

class TimerEvent extends Event {
    constructor(type: TimerEventType, public time: number) {
        super(type, {});
        
    }
}

class Timer extends EventTarget {
    #intervalId: number; 
    #interval: number;
    #started: boolean;
    #timerValue: number;

    constructor(interval) {
        super();
        this.interval = interval;
    }

    start(duration: number) {
        this.#timerValue = duration;
        this.#started = true;
        setInterval(this.tick, this.#interval);
    }

    set interval(value: number) {
        this.#interval = value;
        if (this.#started) {
            clearInterval(this.#intervalId);
            setInterval(this.tick, value);
        }
    }
    get interval() {
        return this.#interval;
    }

    stop() {
        clearInterval(this.#intervalId);
        this.dispatchEvent(new TimerEvent("end", this.#timerValue));
    }

    tick() {
        this.#timerValue -= this.#interval;
        if (this.#timerValue < 0) {
            this.stop();
            return;
        } 
        const myevent = new TimerEvent("tick", this.#timerValue);
        this.dispatchEvent(myevent);
    }
}