const express = require('express');
const router = express.Router();

const pool = require('../db');

router.get('/add', async(req, res) => {
    const locker = await pool.query('SELECT * FROM locker');
    res.render('partial/index', { locker });
});

router.post('/addlocker', async (req,res) => {
    const { serial_locker, nome_usuario_locker, img } = req.body;
    const newLocker = {
        
        serial_locker,
        nome_usuario_locker,
        img
    };
    console.log(newLocker);
    await pool.query('INSERT INTO locker set ?', [newLocker]);
    res.redirect('/locker/add');

});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM locker WHERE id = ?', [id]);
    res.redirect('/locker/add');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const locker = await pool.query('SELECT * FROM locker WHERE id =?', [id]);
    res.render('partial/edit', {locker: locker[0]});
});

router.post('/edit/:id', async (req,res) => {
    const { serial_locker, nome_usuario_locker, img } = req.body;
    const {id} = req.params;
    const newLocker = {
        
        serial_locker,
        nome_usuario_locker,
        img
    };
    console.log(newLocker);
    await pool.query('UPDATE locker set ? WHERE id =?', [newLocker, id]);
    res.redirect('/locker/add');

});

module.exports = router;