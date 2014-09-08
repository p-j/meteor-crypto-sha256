[SHA256](https://en.wikipedia.org/wiki/SHA-256) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/).

Dependency
----------
- [jparker:meteor-crypto-base](https://github.com/p-j/meteor-crypto-base).

Install
-------

Inside your project folder run
```
$ meteor add jparker:meteor-crypto-sha256
```
The following method under the `CryptoJS` namespace will now be available
on **both the client and server**:

`CryptoJS.SHA256(message)`

If [jparker:meteor-crypto-hmac](https://github.com/p-j/meteor-crypto-hmac) is also installed, the following method will also be available:

`CryptoJS.HmacSHA256(message, key)`


Usage
-----
SHA256 digest of a string:
```javascript
CryptoJS.SHA256("Message").toString()
// "2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91"
```

SHA256 HMAC of a string, given a passphrase:
```javascript
CryptoJS.HmacSHA256("Message", "Secret Passphrase").toString()
// "32c647602ab4c4c7543e9c50ae25e567c3354e1532b11649ce308e6e2568d205"
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/>

Related packages
----------------

- [meteor-crypto-md5](https://github.com/p-j/meteor-crypto-md5)
- [meteor-crypto-sha1](https://github.com/p-j/meteor-crypto-sha1)
- [meteor-crypto-hmac](https://github.com/p-j/meteor-crypto-hmac)
- [meteor-crypto-base64](https://github.com/p-j/meteor-crypto-base64)