import { Request, Response } from 'express';
import Product from '../models/Product';

const getProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    console.log('Get request for - ', productID);

    const product = await Product.findOne({ _id: productID });

    res.status(200).json({
      success: true,
      product,
      message: `product${product ? '' : ' not'} found`,
    });
  } catch ({ message }: any) {
    res.status(400).json({
      success: false,
      message,
    });
  }
};

export default getProduct;
