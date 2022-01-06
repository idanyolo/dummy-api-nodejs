import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.bids));
});

router.get('/:collectionId', (req, res) => {
  let resp = Object.values(req.context.models.bids)
  .filter((data) => data.collectionid == req.params.collectionId);

  if(resp && resp.length) {
      return res.send(resp).status(200);
  }

  return res.send([]).status(200);
});

export default router;