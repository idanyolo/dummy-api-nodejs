import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {

  let resp = Object.values(req.context.models.users)
  .filter((data) => data.id == req.params.userId);

  if(resp && resp.length) {
      return res.send(resp).status(200);
  }

  return res.send([]).status(200);
});

export default router;
