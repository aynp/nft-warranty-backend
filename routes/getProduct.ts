import { Request, Response } from 'express';

const getProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.body;
  } catch ({ message }: any) {
    res.status(400).json({
      success: false,
      message,
    });
  }
};

export default getProduct;
