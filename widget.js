document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.cloud-text-container');
    const phone = document.querySelector('.mockup');

    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Create a ScrollMagic scene for the phone visibility
    var phoneScene = new ScrollMagic.Scene({
        triggerElement: '.content',  // Trigger when the content section is in view
        offset: 100,  // Offset to trigger the animation
        duration: 0   // Duration of the animation (scroll distance)
    })
    .setClassToggle(phone, 'visible')  // Add 'visible' class to the phone element
    .addTo(controller);  // Add the scene to the controller

    // Create a ScrollMagic scene for the text visibility
    var textScene = new ScrollMagic.Scene({
        triggerElement: '.content',  // Trigger when the content section is in view
        offset: 100,  // Offset to trigger the animation
        duration: 0   // Duration of the animation (scroll distance)
    })
    .setClassToggle(text, 'visible')  // Add 'visible' class to the text container
    .addTo(controller);  // Add the scene to the controller

    // Optional: Add debugging indicators to visualize the scene trigger
    phoneScene.addIndicators({
        name: "Phone Visibility Scene",
        colorStart: "#ff0000",
        colorEnd: "#00ff00",
        colorTrigger: "#0000ff"
    });

    textScene.addIndicators({
        name: "Text Visibility Scene",
        colorStart: "#ff0000",
        colorEnd: "#00ff00",
        colorTrigger: "#0000ff"
    });
});
