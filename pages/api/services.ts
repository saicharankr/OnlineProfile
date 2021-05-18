import { services } from './../../data';
import { NextApiRequest, NextApiResponse } from "next";


export default (req, res) => {
  res.status(200).json({ services })
}
