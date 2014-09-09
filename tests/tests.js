var C = CryptoJS;


Tinytest.add('MeteorCryptoSHA256 - Vector 1', function (t) {
	t.equal(
    C.SHA256('').toString(),
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 2', function (t) {
	t.equal(
    C.SHA256('a').toString(),
    'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 3', function (t) {
	t.equal(
    C.SHA256('abc').toString(),
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 4', function (t) {
	t.equal(
    C.SHA256('message digest').toString(),
    'f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 5', function (t) {
	t.equal(
    C.SHA256('abcdefghijklmnopqrstuvwxyz').toString(),
    '71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 6', function (t) {
	t.equal(
    C.SHA256('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString(),
    'db4bfcbd4da0cd85a60c3c37d3fbd8805c77f15fc6b1fdfe614ee0a7c8fdb4c0'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Vector 7', function (t) {
	t.equal(
    C.SHA256('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString(),
    'f371bc4a311f2b009eef952dd83ca80e2b60026c8e935592d0f9c308453c813e'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Update And Long Message', function (t) {
	var sha256 = C.algo.SHA256.create();
	for (var i = 0; i < 100; i++) {
		sha256.update('12345678901234567890123456789012345678901234567890');
	}

	t.equal(
    sha256.finalize().toString(),
    'f8146961d9b73d8da49ccd526fca65439cdd5b402f76971556d5f52fd129843e'
  );
});

Tinytest.add('MeteorCryptoSHA256 - Clone', function (t) {
	var sha256 = C.algo.SHA256.create();

	t.equal(
    sha256.update('a').clone().finalize().toString(),
    C.SHA256('a').toString()
  );
	t.equal(
    sha256.update('b').clone().finalize().toString(),
    C.SHA256('ab').toString()
  );
	t.equal(
    sha256.update('c').clone().finalize().toString(),
    C.SHA256('abc').toString()
  );
});

Tinytest.add('MeteorCryptoSHA256 - InputIntegrity', function (t) {
	var message = C.lib.WordArray.create([0x12345678]);

	var expected = message.toString();

	C.SHA256(message);

	t.equal(message.toString(), expected);
});

Tinytest.add('MeteorCryptoSHA256 - Helper', function (t) {
	t.equal(
    C.SHA256('').toString(),
    C.algo.SHA256.create().finalize('').toString()
  );
});

Tinytest.add('MeteorCryptoSHA256 - HmacHelper', function (t) {
	t.equal(
    C.HmacSHA256('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString(),
    C.algo.HMAC.create(C.algo.SHA256, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString()
  );
});