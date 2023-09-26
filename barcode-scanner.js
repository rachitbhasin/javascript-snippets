// Snippet to emulate a barcode scan
var str = "1234567"

// Dispatch all the keypress events
str.split("").forEach((s) => {
    document.dispatchEvent(
      new KeyboardEvent("keypress", {
        keyCode: s.charCodeAt(), // example values
        code: "KeyE"
      })
    );
})

// Finally dispatch an enter keypress event (13)
document.dispatchEvent(
  new KeyboardEvent("keypress", {
    keyCode: 13, // example values
    code: "KeyE"
  })
);

