// Decoding and encoding URIs
// Sometimes you will need to encode or decode a string. Encoding is simply
// converting from one shape to another. In this case we will be dealing with
// percent encoding, also called URL encoding. Before we start, there might
// be some confusion on the URI and URL meaning. A URI (uniform
// resource identifier) is an identifier of a certain resource. URL (uniform
// resource locator) is a subcategory of URI that is not only an identifier, but
// also holds the information on how to access it (location).
// Let's talk about encoding and decoding these URIs (and also URLs, since
// they are a subset). An example of when you'd need this is when you are
// sending variables over the URL using the get method in a form. These
// variables that you are sending via the URL are called query parameters.
// If something contains a space, this will be decoded, because you cannot use
// spaces in your URL. They will be converted to %20 . The URL might look
// something like:
// www.example.com/submit?name=maaike%20van%20putten&love=coding
// All characters can be converted to some % -starting format. However, this is
// not necessary in most cases. URIs can contain a certain number of
// alphanumeric characters. The special characters need to be encoded. An
// example, before encoding, is:

// https://www.example.com/submit?name=maaike van putten
// The same URL after encoding is:
// https://www.example.com/submit?name=maaike%20van%20putten
// There are two pairs of encode and decode methods. We will discuss them
// and their use cases here. You cannot have a URI with spaces, so working
// with these methods is crucial in order to work with variables containing
// spaces.

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);

console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

let uri1 = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri1 = encodeURIComponent(uri1);
console.log("Encoded:", encoded_uri1);
let decoded_uri1 = decodeURIComponent(encoded_uri1);
console.log("Decoded:", decoded_uri1);
