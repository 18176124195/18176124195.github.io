new TypeIt("#lywry", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("感谢有你")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("请仔细看完哦！")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();