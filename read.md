//register algorithm
=>check email uniqueness
=>hash password=never store plain password

//login algorithm
=>check if user exists with email
=>if not user of that email throw error
=>check for password match(compare with hash password from db to plain password entered by user)
=>if not password match then throw error
=>generate token using encryption algorithm
=>send user amd token as response


