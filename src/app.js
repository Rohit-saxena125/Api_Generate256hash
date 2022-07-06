const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const crypto = require('crypto');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    try {
        private_key = req.body.private_key;
        longtext = req.body.long_text;
        if (private_key =="")
        {
            res.send("Private key is blank");
        }
        else if (longtext =="")
        {
            res.send("Long text is blank");
        }
        else{
            // var hash1 = private_key+longtext;
            var hash = crypto.createHash('sha256').update(private_key+longtext).digest('hex');
            res.send("sucess  "+hash);
    }
    } catch (err) {
        res.status(500).send('kuch to error hai');
    }
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
    
   