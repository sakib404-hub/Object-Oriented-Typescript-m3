/**
 * ? oop
 * ? we will have an idea but the real implementation is not clear
 * ? idea pabo but implementation pore korbo
 * ? can be used with the interface and the abstraction class
 */

interface MediaPlayer {
    name : string;
    isPlayable : boolean;

    play() : void;
    stop() : void;
    pause() : void;
}

//? implementation here
class MusicPlayer implements MediaPlayer{

    name : string;
    isPlayable: boolean;

    constructor(
        name : string,
        isPlayable: boolean
    ){
        this.name = name;
        this.isPlayable = isPlayable
    }


    play() : void{
        console.log('The music player is playing!');
    }
    stop(): void {
        console.log('The music player is stopped!');
    }
    pause(): void {
        console.log('The music player is paused!');
    }
}

const myMusicPlayer = new MusicPlayer('sony', true);
console.log(myMusicPlayer);
myMusicPlayer.play();
myMusicPlayer.pause();
myMusicPlayer.stop();
console.log(myMusicPlayer.name);

/**
 * ? here the interface is giving us a structure that we need to maintain or follow
 * ? now we will be seeing the same thing doing with the abstract class
 */

abstract class MediaPlayer2 {
    abstract name : string;
    abstract isPlayable : boolean;

    abstract play() : void;
    abstract stop() : void;
    abstract pause() : void;
}

class MusicPlayer2 implements MediaPlayer2{

    name : string;
    isPlayable: boolean;

    constructor(
        name : string,
        isPlayable: boolean
    ){
        //  super()
        this.name = name;
        this.isPlayable = isPlayable
    }


    play() : void{
        console.log('The music player is playing!');
    }
    stop(): void {
        console.log('The music player is stopped!');
    }
    pause(): void {
        console.log('The music player is paused!');
    }
    running() : void{
        console.log('the music player is running!');
    }
}

const m2 = new MusicPlayer2('delta', false);
console.log(m2);
m2.play();
m2.stop();
m2.pause();
m2.running();