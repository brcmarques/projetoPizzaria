import { Router, Request, Response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: 'Bruno Marques' })
})

export { router };