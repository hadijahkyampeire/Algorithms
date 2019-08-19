# Hashing and Hash Algorithms

A hashing algorithm is a cryptographic hash function.
It is a mathematical algorithm that maps data of arbitrary size to a hash of a fixed size. It’s designed to be a one-way function, infeasible to invert. However, nowadays several hashing algorithms are being compromised. This happened to MD5, for example — a widely known hash function designed to be a cryptographic hash function, which is now so easy to reverse — that we could only use for verifying data against unintentional corruption

A hash function is a function that takes input of a variable length sequence of bytes and converts it to fixed size/length sequence. Its a one way function unlike encryption which uses a proper key to decrypt.

`One can hash using SHA1, SHA256, MD5 etc.`

I have given small examples in python and Javascript

## How to run

`Ensure to have python and Node installed, Also install js-md5 as you will require it for the Javascript file. To run a file while in its directory:
- if its python, use `python filename.py in this case hash.py` it will print the hashed value in the console.
- If its Javascript, use `Node filename.js in this case hash.js` it will also log the hashed value
