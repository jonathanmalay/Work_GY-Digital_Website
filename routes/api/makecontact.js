const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const MakeContact = require('../../models/MakeContact');

//@route POST api/users
//@desc save to the db  user request
//@acces  public
router.post('/', async (req, res) => {
  const { name, email, messege } = req.body;
  try {
    //the date contact rescuved from client
    const date = new Date();
    //create new  intstance of the user
    makeContact = new MakeContact({
      name: name,
      email: email,
      messege: messege,
      date: date,
    });
    console.log(
      `[+] Make contact : name=${name}, email=${email} message=${messege} date${date}`
    );

    //save contact to the db
    await makeContact.save();

    console.log(
      `[+] Saved Successfully the contact : name=${name}, email=${email} message=${messege}`
    );

    res
      .status(200)
      .json({ msg: '[+] הפנייה התקבלה במערכת' })
      .send()
      .then(() => {
        console.log(`[+]  ${email}  פנייה התקבלה במערכת מאת`);
      });
  } catch (err) {
    console.error(err.message);
    console.log(`[-] ${err.message}`);
    res.status(500).send('server error at make contact');
  }
});

module.exports = router;
