router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        res.json({ user })                                       
    }
})

router.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                userId: __                    
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})