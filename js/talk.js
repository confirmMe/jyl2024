new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("阎述伟 && 江雅莉")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第四个情人节...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
