import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send({msg: 'welcome to my api'}).status(200);
});

router.get('/homepage', (req,res) => {

  let resp = Object.values(req.context.models.homepage);
  if(resp && resp.length) {
    return res.send(resp).status(200);
  }

  return res.send([]).status(200);
  
});

export default router;
