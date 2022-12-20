// The BOM
// The BOM, sometimes also called the window browser object, is the
// amazing "magic" element that makes it possible for your JavaScript code to
// communicate with the browser.
// The window object contains all the properties required to represent the
// window of the browser, so for example, the size of the window and the
// history of previously visited web pages. The window object has global
// variables and functions, and these can all be seen when we explore the
// window object. The exact implementation of the BOM depends on the
// browser and the version of the browser. This is important to keep in mind
// while working your way through these sections.
// Some of the most important objects of the BOM we will look into in this
// chapter are:
// History
// Navigator
// Location
// As well as the preceding useful objects, we will also consider the DOM in
// more detail. But first, we can explore the BOM and see the objects of it
// with the command console.dir(window) . We will enter this in the console
// of our browser. Let's discuss how to get there first.
// We can access the HTML elements and the JavaScript if we go to the
// inspection panel of our browser. It differs a bit in how you get there, but
// often the F12 button while in the browser will do the trick, or else a rightclick on the website you want to see the console for and clicking on Inspect
// element or Inspect on a macOS device.

// Navigate to the Console tab, which is next to the Elements tab in the image
// above. You can type the following command and press Enter to get
// information about the window object:
// console.dir(window);

// The console.dir() method shows a list of all the properties of the
// specified object. You can click on the little triangles to open the objects and
// inspect them even more.
// The BOM contains many other objects. We can access these like we saw
// when we dealt with objects, so for example, we can get the length of the
// history (in my browser) accessing the history object of the window and
// then the length of the history object, like this:
// window.history.length;

// Window history object
// The window browser object also contains a history object. This object can
// actually be written without the prefix of window because it has been made
// globally available, so we can get the exact same object by using the
// console.dir(window.history) or simply the console.dir(history)
// command in the console:

// window.history.go(-1);
// Go ahead and try it for yourself in the console of your browser (make sure
// that you did visit multiple pages in that tab).

// Window navigator object
// In the window object that we just saw, there is a navigator property. This
// property is particularly interesting because it contains information about the
// browser we are using, such as what browser it is and what version we are
// using, and what operating system the browser is running on.
// This can be handy for customizing the website for certain operating
// systems. Imagine a download button that will be different for Windows,
// Linux, and macOS.
// You can explore it using this command in the console:
// console.dir(window.navigator);
// As you can see, we start with accessing the window, because navigator is
// an object of the window object. So it is a property of the window object,
// which we specify with the dot in between. In other words, we access these
// window objects in the same way we do any other object. But, in this case,
// as navigator is also globally available, we can also access this without
// window in front of it with this command:
// console.dir(navigator);
// Here is what the navigator object might look like:

// The DOM
// The DOM is actually not very complicated to understand. It is a way of
// displaying the structure of an HTML document as a logical tree. This is
// possible because of the very important rule that inner elements need to be
// closed before outer elements get closed.
// Here is an HTML snippet:
// <html>
//  <head>
//  <title>Tab in the browser</title>
//  </head>
//  <body>
//  <h1>DOM</h1>
//  <div>
//  <p>Hello web!</p>
//  <a href="https://google.com">Here's a link!</a>
//  </div>
//  </body>
// </html>
// And here is how we can translate it to a tree:
// Figure 9.7: Tree structure of the DOM of a very basic web page
// As you can see, the most outer element, html, is at the top of the tree. The
// next levels, head and body, are its children. head has only one child: title.
// body has two children: h1 and div. And div has two children: p and a.
// These are typically used for paragraphs and links (or buttons). Clearly,
// complex web pages have complicated trees. This logical tree and a bunch of
// extra properties make up a web page's DOM.
// The DOM of a real web page wouldn't fit on a page in this book. But if you
// can draw trees like these in your head, it will be of great help soon.

// Additional DOM properties
// We can inspect the DOM in a similar fashion as we did the others. We
// execute the following command in the console of our website (again, the
// document object is globally accessible, so accessing it through the window
// object is possible but not necessary):
// console.dir(document);
// In this case, we want to see the document object, which represents the
// DOM:
// Figure 9.8: The DOM
// You really do not need to understand everything you are seeing here, but it
// is showing many things, among which are the HTML elements and
// JavaScript code.
// Great, right now you have got the basics of the BOM down, and its child
// object that is most relevant to us right now, the DOM. We saw many
// properties of the DOM earlier already. For us, it is most relevant to look at
// the HTML elements in the DOM. The DOM contains all the HTML
// elements of a web page.
// These basics of DOM elements, combined with some knowledge of
// manipulating and exploring the DOM, will open up so many possibilities.
// In the next chapter, we will focus on traversing the DOM, finding elements
// in the DOM, and manipulating the DOM. The code we will be writing there
// will really start to look like proper projects.
