import hashlib

name = 'kyampeire Hadijah'
hash_name = hashlib.md5(name) #md5


print(hash_name.hexdigest()) #hexdigest returns a hex string 0-F

