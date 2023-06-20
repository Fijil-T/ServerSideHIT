const express = require('express');
const router = express.Router()


//Addcost -->
router.post('/post', (req, res) => {
    res.send('Post')
})

//About -->
router.get('/about', (req, res) => {
    const developerJson = [
        {
            'first_name': 'Oran',
            'last_name': 'Mor',
            'id': '318854338',
            'email': 'oranmor9@gmail.com'
        },
        {
            'first_name': 'Tal',
            'last_name': 'Yehuda',
            'id': '315006031',
            'email': 'talyehuda27@gmail.com'
        }
    ];
    res.json(developerJson);
});

//Report -->
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

module.exports = router;