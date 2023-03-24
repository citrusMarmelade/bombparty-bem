export type TimerEventType = "tick"|"end";

export class TimerEvent extends Event {
    constructor(type: TimerEventType, public time: number) {
        super(type, {});
        
    }
}

interface Timer {
    addEventListener<K extends TimerEventType>(type: K, listener: (this: AbortSignal, ev: TimerEvent) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;

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
        setInterval(this.tick.bind(this), this.#interval);
    }

    set interval(value: number) {
        this.#interval = value;
        if (this.#started) {
            clearInterval(this.#intervalId);
            setInterval(this.tick.bind(this), value);
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

export default Timer;