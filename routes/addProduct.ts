import { Request, Response } from 'express';
import Product from '../models/Product';

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, productID, price, image } = req.body;
    await Product.create({
      _id: productID,
      name,
      price,
      image,
    });
    res.status(201).json({
      success: true,
      message: `Created a new product ${name}`,
    });
  } catch ({ message }: any) {
    res.status(400).json({
      success: false,
      message,
    });
  }
};

export default addProduct;
