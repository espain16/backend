//     // check form empty fields
//     if (!user.password || !user.username)
//         return res.status(422).json({ message: "Sorry but the username and password field are required."}) 

//        const existingUser = users.findUser(user.username);


//     //check if users already exists in the db
//        if (existingUser)
//             return res.status(409).json({ message: "User already exists"})

//     // if all checks pass create user, and return it
//     users.add(user)
//     .then(saved => {
//         res.status(201).json(saved)
//     })
//     .catch(error =>{
//         res.status(500).json(error);
//     });
// });