import express,{Request, Response} from 'express';
import { body } from 'express-validator';


const router = express.Router();

router.post('/api/users/signin',[
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters')
], (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).send('Email must be provided');
  }


});

export { router as signinRouter };