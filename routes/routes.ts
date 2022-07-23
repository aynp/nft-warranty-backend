import express from 'express';
import addProduct from './addProduct';
import getProduct from './getProduct';

const router = express.Router();

router.route('/getProduct').get(getProduct);
router.route('/addProduct').post(addProduct);

export default router;
