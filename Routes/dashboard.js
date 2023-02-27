const router = require('express').Router();
const { checkout, paymentVerification, getkey, trialTimer } = require('../Controllers/dashboard');

router.post('/checkout', checkout);
router.post('/payment-verification', paymentVerification)
router.get('/getkey', getkey)
router.post('/trial-timer', trialTimer);
module.exports = router;